// 옛 이미지 썸네일 백필 (관리자 전용).
//
// 썸네일 기능이 생기기 전에 올라간 이미지들은 `.thumb.webp`/`.thumb2.webp`가 없어서
// 목록에서 **1800px 원본을 그대로 받는다.** PC(배율 1)에서는 그걸 219px 칸에 넣느라
// 4.9배 축소가 일어나 선화가 계단처럼 깨진다(2026-08-15 신고).
//
// ⚠️ 업로드 라우트는 **새 키만** 발급한다(남의 파일 덮어쓰기 방지). 그래서 기존 키에
//    썸네일을 붙이는 일은 여기서만 할 수 있고, 그만큼 접근을 좁게 잡는다:
//    ① 로그인 확인 ② profiles.is_admin 확인 ③ 쓰는 키는 **반드시 접미사가 붙은 것만**.
//    원본 키는 어떤 경우에도 쓰지 않는다.
//
// 한 번 호출에 조금씩만 처리하고(limit), 남은 개수를 돌려준다 — 화면에서 반복 호출한다.
import { ListObjectsV2Command, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { createClient } from "@supabase/supabase-js";
import sharp from "sharp";
import { r2Client, r2Configured, R2_BUCKET, FOLDERS } from "../../../../lib/r2";

export const runtime = "nodejs";
export const maxDuration = 60; // 이미지를 받아 두 규격으로 줄여 다시 올리는 작업이라 기본 10초로는 모자라다

// 클라이언트(palo.js)의 THUMB_SM / THUMB_LG 와 반드시 같아야 한다.
// lg는 '긴 변' 900 — 카드가 필요로 하는 건 '짧은 변'(폰 167×3=501px)이고,
// 세로 3:5 그림의 짧은 변 ≈ 긴 변×0.6 이라 900이어야 540으로 덮인다(palo.js 주석 참고).
const SM = { suffix: ".thumb.webp", max: 360 };
const LG = { suffix: ".thumb2.webp", max: 900 };

const MAX_LIST = 20000;              // 목록 훑기 상한(무한 페이지네이션 방지)
const MAX_SRC_BYTES = 25 * 1024 * 1024; // 이보다 큰 원본은 건너뛴다(메모리·시간)
const DEFAULT_LIMIT = 8;
const MAX_LIMIT = 25;

// 썸네일을 만들지 않는 폴더 — 문서 첨부는 이미지가 아니다(업로드 라우트와 같은 규칙)
const SKIP_FOLDERS = new Set(["file"]);

const isThumbKey = (k) => /\.thumb\d*\.webp$/.test(k);

function bad(message, status = 400) {
  return Response.json({ ok: false, message }, { status });
}

export async function POST(request) {
  // ⚠️ 신원 확인을 **가장 먼저** 한다. 다른 라우트는 설정 검사를 앞에 두지만, 여기는
  //    관리자 전용이라 익명 호출자에게 서버 상태(저장소 설정 여부)조차 알려줄 이유가 없다.
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const svc = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !svc) return bad("서버 설정이 준비되지 않았어요.", 500);

  const authHeader = request.headers.get("authorization") || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  if (!token) return bad("로그인이 필요해요.", 401);

  const supa = createClient(url, svc, { auth: { persistSession: false } });
  const { data: userData, error: userErr } = await supa.auth.getUser(token);
  const user = userData?.user;
  if (userErr || !user) return bad("로그인이 필요해요.", 401);

  // ⚠️ 관리자만. 화면에서 버튼을 숨기는 것과 별개로 여기서 반드시 막는다.
  const { data: prof } = await supa.from("profiles").select("is_admin").eq("id", user.id).single();
  if (!prof?.is_admin) return bad("관리자만 사용할 수 있어요.", 403);

  if (!r2Configured()) return bad("저장소 설정이 준비되지 않았어요.", 500);

  let body = {};
  try { body = await request.json(); } catch (e) { /* 본문 없이 호출해도 기본값으로 동작 */ }
  const limit = Math.min(MAX_LIMIT, Math.max(1, Number(body?.limit) || DEFAULT_LIMIT));
  const dryRun = body?.dryRun === true;
  // 재생성 모드: 지정한 접미사(lg 등)를 **이미 있어도** 다시 만든다 — 규격을 바꿨을 때 쓴다.
  // ⚠️ 이 모드에서는 "없는 것"이 줄어드는 게 아니므로 진행 커서(after)가 필요하다.
  //    없으면 매 호출이 같은 앞 N장만 계속 덮어쓰며 무한 반복한다.
  const regen = body?.regen === "lg" ? [LG] : (body?.regen === "sm" ? [SM] : null);
  const after = typeof body?.after === "string" ? body.after : "";

  const client = r2Client();

  // ── 1. 키 전체 목록 → 집합. HEAD를 개별로 날리는 것보다 훨씬 싸다
  //    (원본 N개면 존재 확인만 2N번이 되는데, 목록 한 번이면 끝난다).
  const keys = new Set();
  let cursor;
  let listed = 0;
  do {
    const page = await client.send(new ListObjectsV2Command({
      Bucket: R2_BUCKET, ContinuationToken: cursor, MaxKeys: 1000,
    }));
    for (const o of page.Contents || []) { keys.add(o.Key); listed++; }
    cursor = page.IsTruncated ? page.NextContinuationToken : undefined;
  } while (cursor && listed < MAX_LIST);

  // ── 2. 대상 추리기 — 기본은 "썸네일이 빠진 원본", 재생성 모드는 "커서 뒤의 모든 원본"
  const todo = [];
  // 키 순서를 고정해야 커서가 성립한다(Set 순회 순서에 기대지 않는다)
  const sorted = [...keys].sort();
  for (const key of sorted) {
    if (isThumbKey(key)) continue;
    const folder = key.split("/")[0];
    if (!FOLDERS.has(folder) || SKIP_FOLDERS.has(folder)) continue;
    if (regen) {
      if (key <= after) continue;         // 이미 지나간 구간
      todo.push({ key, need: regen });
      continue;
    }
    const need = [];
    if (!keys.has(key + SM.suffix)) need.push(SM);
    if (!keys.has(key + LG.suffix)) need.push(LG);
    if (need.length) todo.push({ key, need });
  }

  if (dryRun) {
    return Response.json({ ok: true, dryRun: true, scanned: listed, missing: todo.length, processed: 0, remaining: todo.length });
  }

  // ── 3. 이번 호출 몫만 처리
  const batch = todo.slice(0, limit);
  let processed = 0, made = 0, failed = 0, skipped = 0;
  const errors = [];

  for (const item of batch) {
    try {
      const got = await client.send(new GetObjectCommand({ Bucket: R2_BUCKET, Key: item.key }));
      const len = Number(got.ContentLength || 0);
      if (len > MAX_SRC_BYTES) { skipped++; continue; }
      const src = Buffer.from(await got.Body.transformToByteArray());

      for (const spec of item.need) {
        // animated:false — GIF는 첫 프레임만. rotate() — EXIF 방향 반영(브라우저 캔버스와 같은 결과)
        const out = await sharp(src, { animated: false })
          .rotate()
          .resize({ width: spec.max, height: spec.max, fit: "inside", withoutEnlargement: true })
          .webp({ quality: 82 })
          .toBuffer();
        // 원본보다 크면 의미가 없다(아주 작은 원본) — 클라이언트와 같은 규칙
        if (out.length >= src.length) { skipped++; continue; }
        // ⚠️ 쓰는 키는 반드시 접미사가 붙은 것 — 원본을 덮어쓰는 일이 없어야 한다
        await client.send(new PutObjectCommand({
          Bucket: R2_BUCKET, Key: item.key + spec.suffix,
          Body: out, ContentType: "image/webp",
        }));
        made++;
      }
      processed++;
    } catch (e) {
      failed++;
      if (errors.length < 5) errors.push(item.key.slice(-40) + ": " + (e?.message || "실패"));
    }
  }

  return Response.json({
    ok: true,
    scanned: listed,
    missing: todo.length,
    processed, made, skipped, failed,
    remaining: Math.max(0, todo.length - batch.length),
    done: todo.length <= batch.length,
    // 재생성 모드의 진행 커서 — 다음 호출에 after 로 그대로 넘긴다
    cursor: batch.length ? batch[batch.length - 1].key : null,
    errors,
  });
}
