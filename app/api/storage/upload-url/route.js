// 업로드용 서명 URL 발급.
//
// 브라우저가 R2에 직접 PUT 하도록 짧은 수명의 서명 URL을 내준다.
// 파일이 서버를 거치지 않으므로 Vercel의 요청 본문 크기 제한(4.5MB)에 걸리지 않는다
// — GIF는 최대 40MB까지 올라가므로 이 방식이 사실상 필수다.
//
// ⚠️ 저장 경로(key)는 **서버가 만든다.** 클라이언트가 준 경로를 그대로 쓰면
//    남의 파일 경로를 지정해 덮어쓸 수 있다.
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { createClient } from "@supabase/supabase-js";
import {
  r2Client, r2Configured, R2_BUCKET, FOLDERS, ALLOWED_TYPES, ALLOWED_FILE_TYPES, MAX_BYTES,
  buildKey, publicUrlFor,
} from "../../../../lib/r2";
import { rateLimit } from "../../../../lib/client-ip";

export const runtime = "nodejs";

const URL_TTL_SEC = 120; // 서명 URL 수명 — 업로드를 시작하기에 충분하고, 새어나가도 금방 만료된다

function bad(message, status = 400) {
  return Response.json({ ok: false, message }, { status });
}

export async function POST(request) {
  if (!r2Configured()) return bad("저장소 설정이 준비되지 않았어요.", 500);

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return bad("서버 설정이 준비되지 않았어요.", 500);

  let body;
  try { body = await request.json(); } catch (e) { return bad("요청을 읽지 못했어요."); }

  const folder = String(body?.folder || "");
  const contentType = String(body?.contentType || "");
  const size = Number(body?.size || 0);

  if (!FOLDERS.has(folder)) return bad("허용되지 않은 업로드 위치예요.");
  // "file" 폴더만 이미지가 아닌 문서를 받는다. 나머지 폴더는 예전 그대로 이미지 전용.
  const isFileSlot = folder === "file";
  const okType = isFileSlot
    ? (ALLOWED_FILE_TYPES.has(contentType) || ALLOWED_TYPES.has(contentType))
    : ALLOWED_TYPES.has(contentType);
  if (!okType) {
    return bad(isFileSlot
      ? "올릴 수 없는 형식이에요. 문서·압축·이미지 파일만 첨부할 수 있어요."
      : "이미지 파일만 올릴 수 있어요.");
  }
  if (!(size > 0) || size > MAX_BYTES) return bad("40MB 이하 파일만 올릴 수 있어요.");

  // 썸네일(선택) — 목록에서 원본 대신 쓸 작은 webp. 원본 키 뒤에 접미사를 붙여
  // **주소만 보고 썸네일 주소를 유도**할 수 있게 한다(DB에 따로 기록하지 않는 이유).
  // ⚠️ 접미사는 클라이언트의 THUMB_SUFFIX 와 반드시 같아야 한다(palo.js). 규격을 바꿀 때
  //    번호를 올려 옛 썸네일을 건너뛰게 하는 구조라, 한쪽만 바꾸면 조용히 어긋난다.
  // 4MB면 720px webp로 차고 넘친다 — 그보다 크면 썸네일이 아니다.
  const THUMB_SUFFIX = ".thumb2.webp";
  const thumbSize = Number(body?.thumbSize || 0);
  const wantThumb = thumbSize > 0 && !isFileSlot;
  if (wantThumb && thumbSize > 4 * 1024 * 1024) return bad("썸네일이 너무 커요.");

  // 로그인 확인 — 익명 업로드를 막는다
  const authHeader = request.headers.get("authorization") || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  if (!token) return bad("로그인이 필요해요.", 401);

  const supa = createClient(url, key, { auth: { persistSession: false } });
  const { data: userData, error: userErr } = await supa.auth.getUser(token);
  const user = userData?.user;
  if (userErr || !user) return bad("로그인이 필요해요.", 401);

  // 대량 업로드로 저장소를 낭비하는 것을 막는다(사람이 손으로 올리는 속도를 훨씬 웃돌 때만 걸림).
  // 서명 URL의 용량 상한을 R2가 강제하지는 않으므로, 발급 횟수를 제한해 남용을 막는다.
  if (rateLimit("upload:" + user.id, { limit: 60, windowMs: 60000 }).blocked) {
    return bad("잠시 후 다시 시도해주세요.", 429);
  }

  const objectKey = buildKey(folder, user.id, contentType);

  try {
    const signed = await getSignedUrl(
      r2Client(),
      // 서명에 포함된 헤더는 브라우저도 **똑같이 보내야** 서명이 맞는다.
      // Cache-Control은 넣지 않는다(클라이언트가 빠뜨리면 403) — 캐시는 Cloudflare Cache Rule이 담당.
      // ContentLength는 넣는다(2026-08-14): 위의 size 검사는 클라이언트가 신고한 값이라
      // 거짓말하면 그만이었다 — 서명에 넣으면 **R2가 실제 바이트 수를 강제**한다.
      // 브라우저는 PUT의 Content-Length를 스스로 body 크기로 채우므로(개발자가 못 바꾸는
      // 보호 헤더) 정직한 업로드는 항상 일치하고, 신고보다 큰 파일을 밀어넣으면 403이 난다.
      new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: objectKey,
        ContentType: contentType,
        ContentLength: size,
        // ⚠️ 첨부 파일은 **브라우저에서 열리지 않고 반드시 내려받아지게** 한다.
        //    우리 도메인에서 무언가가 렌더되면 그 자체로 피싱·스크립트 실행 통로가 된다.
        //    (이미지 폴더에는 붙이지 않는다 — 본문에 그대로 보여야 하므로)
        ...(isFileSlot ? { ContentDisposition: "attachment" } : {}),
      }),
      { expiresIn: URL_TTL_SEC }
    );
    // 썸네일용 서명 — 원본과 같은 규칙(ContentLength 강제)
    let thumbUploadUrl = null;
    if (wantThumb) {
      thumbUploadUrl = await getSignedUrl(
        r2Client(),
        new PutObjectCommand({
          Bucket: R2_BUCKET,
          Key: objectKey + THUMB_SUFFIX,
          ContentType: "image/webp",
          ContentLength: thumbSize,
        }),
        { expiresIn: URL_TTL_SEC }
      );
    }
    return Response.json({ ok: true, uploadUrl: signed, publicUrl: publicUrlFor(objectKey), key: objectKey, thumbUploadUrl: thumbUploadUrl });
  } catch (e) {
    return bad("업로드 준비에 실패했어요. 잠시 후 다시 시도해주세요.", 502);
  }
}
