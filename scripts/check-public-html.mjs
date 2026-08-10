#!/usr/bin/env node
/**
 * 공개 페이지 HTML에 연령 확인 관련 문구가 새어 나가는지 검사한다.
 *
 * 왜 필요한가: 광고 심사 봇은 **화면이 아니라 응답 HTML 전체**를 읽는다.
 * display:none으로 숨긴 마크업도 소스에는 남기 때문에, 초기 HTML에 모달을 박아 두면
 * 사이트 전체가 성인 업종으로 분류된다(2026-08-10 틱톡 광고 거부).
 * 그래서 "화면에 안 보이는 것은 애초에 내려보내지 않는다"를 이 스크립트로 못박는다.
 *
 * 사용법:
 *   node scripts/check-public-html.mjs                  # http://localhost:3000
 *   node scripts/check-public-html.mjs https://commi.kr
 *
 * 종료 코드: 0 = 통과, 1 = 위반(STRICT 경로에서 금지 문구 발견), 2 = 요청 실패
 *
 * ⚠️ 로그인하지 않은 상태를 흉내 낸다(쿠키·토큰 없이 그냥 GET). 실제 심사 봇과 같은 조건.
 */

const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");

// 이 문구들이 공개 HTML에 하나라도 있으면 안 된다.
const FORBIDDEN = ["성인", "19세", "🔞", "본인인증", "본인확인", "연령 확인", "연령확인", "에치치"];

// 반드시 깨끗해야 하는 경로. 광고 심사가 실제로 훑는 랜딩·목록·상세 계열.
// `/board/adult`도 여기 넣는다 — 주소를 직접 찍어 들어온 봇이 받는 응답도 깨끗해야 한다
// (게시판 이름이 <title>·description에 실려 나가던 것을 막은 뒤로 회귀 방지용).
const STRICT = [
  "/", "/board/free", "/board/doodle", "/board/adult",
  "/sitemap.xml", "/robots.txt", "/rss.xml",
];

// 글·커미션 상세는 id가 계속 바뀌므로 sitemap에서 최신 것을 뽑아 함께 검사한다
// (하드코딩해 두면 그 글이 지워진 날부터 조용히 검사에서 빠진다).
const SAMPLE_DETAIL_COUNT = 2;

// 법정 고지 문서. 「청소년 보호법」·개인정보 처리방침상 **반드시 적어야 하는** 내용이라
// 여기서 문구를 지우는 것은 법적 고지 의무를 어기는 일이다. 검사는 하되 실패로 치지 않고,
// 무엇이 몇 번 나오는지만 보고한다(광고 심사에 걸리면 사람이 판단할 문제).
const DOCUMENTED = ["/terms", "/privacy"];

const UA = "Mozilla/5.0 (compatible; commi-public-html-check/1.0)";

async function fetchText(path) {
  const res = await fetch(BASE + path, {
    headers: { "User-Agent": UA, "Cache-Control": "no-cache" },
    redirect: "follow",
  });
  return { status: res.status, html: await res.text() };
}

/** 문자열이 나온 자리를 사람이 읽을 수 있게 잘라 보여준다 */
function contexts(html, needle, limit = 3) {
  const out = [];
  let i = 0;
  while (out.length < limit) {
    const at = html.indexOf(needle, i);
    if (at < 0) break;
    out.push(html.slice(Math.max(0, at - 60), at + 60).replace(/\s+/g, " "));
    i = at + needle.length;
  }
  return out;
}

function scan(html) {
  const hits = {};
  for (const w of FORBIDDEN) {
    const n = html.split(w).length - 1;
    if (n > 0) hits[w] = n;
  }
  return hits;
}

let failed = 0;
let errored = 0;

/** sitemap에서 글·커미션 상세 주소를 몇 개 뽑아 온다(없으면 빈 배열) */
async function sampleDetailPaths() {
  try {
    const { html } = await fetchText("/sitemap.xml");
    const pick = (kind) =>
      [...html.matchAll(new RegExp(`<loc>[^<]*(/${kind}/\\d+)</loc>`, "g"))]
        .slice(0, SAMPLE_DETAIL_COUNT)
        .map((m) => m[1]);
    return [...pick("post"), ...pick("commission")];
  } catch {
    return [];
  }
}

console.log(`대상: ${BASE}  (로그인하지 않은 상태)\n`);
console.log("── 반드시 깨끗해야 하는 경로 ──");
for (const path of [...STRICT, ...(await sampleDetailPaths())]) {
  let r;
  try {
    r = await fetchText(path);
  } catch (e) {
    console.log(`  ✖ ${path.padEnd(16)} 요청 실패: ${e.message}`);
    errored++;
    continue;
  }
  const hits = scan(r.html);
  const names = Object.keys(hits);
  if (names.length === 0) {
    console.log(`  ✅ ${path.padEnd(16)} ${r.status}  ${r.html.length.toLocaleString()}자  금지 문구 0건`);
  } else {
    failed++;
    console.log(`  ❌ ${path.padEnd(16)} ${r.status}  ${names.map((w) => `${w}×${hits[w]}`).join(", ")}`);
    for (const w of names) for (const c of contexts(r.html, w)) console.log(`       [${w}] …${c}…`);
  }
}

console.log("\n── 법정 고지 문서(고지 의무가 있어 문구를 지우지 않음) ──");
for (const path of DOCUMENTED) {
  try {
    const r = await fetchText(path);
    const hits = scan(r.html);
    const names = Object.keys(hits);
    console.log(
      `  ℹ ${path.padEnd(16)} ${r.status}  ${names.length ? names.map((w) => `${w}×${hits[w]}`).join(", ") : "금지 문구 0건"}`
    );
  } catch (e) {
    console.log(`  ✖ ${path.padEnd(16)} 요청 실패: ${e.message}`);
    errored++;
  }
}

console.log("");
if (errored) {
  console.log(`요청 실패 ${errored}건 — 서버가 떠 있는지 확인해주세요.`);
  process.exit(2);
}
if (failed) {
  console.log(`❌ ${failed}개 경로에서 금지 문구가 발견됐습니다.`);
  process.exit(1);
}
console.log("✅ 통과 — 공개 경로 HTML에 연령 확인 관련 문구가 없습니다.");
