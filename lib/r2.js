// Cloudflare R2 공통 설정.
// R2는 S3 호환 API라 AWS SDK를 그대로 쓴다(리전은 "auto" 고정).
import { S3Client } from "@aws-sdk/client-s3";

export const R2_BUCKET = process.env.R2_BUCKET || "";
// 공개 읽기 주소의 앞부분. 커스텀 도메인(예: https://img.commi.kr)을 권장한다.
export const R2_PUBLIC_BASE = (process.env.R2_PUBLIC_BASE || "").replace(/\/+$/, "");

export function r2Configured() {
  return !!(process.env.R2_ACCOUNT_ID && process.env.R2_ACCESS_KEY_ID &&
            process.env.R2_SECRET_ACCESS_KEY && R2_BUCKET && R2_PUBLIC_BASE);
}

export function r2Client() {
  return new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
  });
}

// 업로드가 허용된 폴더. 클라이언트가 보내는 값이므로 반드시 이 목록으로만 제한한다.
// (자유롭게 받으면 남의 파일을 덮어쓰거나 엉뚱한 경로에 쌓을 수 있다)
export const FOLDERS = new Set([
  "post",        // 글 본문 이미지
  "avatar",      // 프로필 사진
  "cover",       // 프로필 커버
  "ad",          // 광고 배너
  "campaign",    // 캠페인 배너
  "review",      // 커미션 후기 이미지
  "commission",  // 커미션 대표 이미지
  "cm-desc",     // 커미션 설명 이미지
  "worksample",  // 작업 사례
  "application", // 커미션 신청 첨부
  "emoticon",    // 회원이 만든 이모티콘
  "chat",        // 1:1 채팅에 보낸 이미지
  "file",        // 글 본문 첨부 파일(이미지 아닌 문서 등)
]);

export const ALLOWED_TYPES = new Set([
  "image/jpeg", "image/png", "image/webp", "image/gif", "image/bmp",
]);

// 글에 첨부할 수 있는 '이미지가 아닌' 파일.
// ⚠️ 여기에 무엇을 넣느냐가 곧 보안 경계다. 브라우저가 **우리 도메인에서 실행·렌더할 수 있는 것**
//    (html, svg, xml, js …)은 절대 넣지 않는다 — 넣으면 우리 주소로 피싱 페이지나 스크립트를
//    올릴 수 있다. 아래는 전부 '열어도 그냥 파일'인 것들이고, 그마저도 서버가
//    Content-Disposition: attachment 를 강제해 **브라우저에서 열리지 않고 내려받아진다.**
export const ALLOWED_FILE_TYPES = new Set([
  "application/pdf",
  "application/zip", "application/x-zip-compressed",
  "text/plain",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/postscript",          // .ai (일러스트레이터)
  "image/vnd.adobe.photoshop",       // .psd — 브라우저가 렌더하지 않는다
  "application/octet-stream",        // .clip(클립스튜디오) 등 브라우저가 형식을 모르는 것
]);

export const MAX_BYTES = 40 * 1024 * 1024;

// 확장자는 파일명이 아니라 Content-Type에서 정한다(위조된 확장자를 그대로 쓰지 않기 위해).
const EXT_BY_TYPE = {
  "application/pdf": "pdf", "application/zip": "zip", "application/x-zip-compressed": "zip",
  "text/plain": "txt",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
  "application/vnd.ms-excel": "xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
  "application/vnd.ms-powerpoint": "ppt",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
  "application/postscript": "ai", "image/vnd.adobe.photoshop": "psd",
  "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp",
  "image/gif": "gif", "image/bmp": "bmp",
};

// 키는 항상 서버가 만든다. 클라이언트가 준 경로를 그대로 쓰면
// 남의 파일 경로를 지정해 덮어쓸 수 있다.
export function buildKey(folder, userId, contentType) {
  const ext = EXT_BY_TYPE[contentType] || "bin";
  const rand = Math.random().toString(36).slice(2, 10);
  return `${folder}/${userId}/${Date.now()}-${rand}.${ext}`;
}

export function publicUrlFor(key) {
  return `${R2_PUBLIC_BASE}/${key}`;
}

// 공개 주소에서 키를 되돌린다. 우리 도메인이 아니면 null(삭제 대상에서 제외).
export function keyFromPublicUrl(url) {
  const u = String(url || "");
  if (!R2_PUBLIC_BASE || u.indexOf(R2_PUBLIC_BASE + "/") !== 0) return null;
  let key = u.slice(R2_PUBLIC_BASE.length + 1).split("?")[0];
  try { key = decodeURIComponent(key); } catch (e) { return null; } // %2e%2e 같은 우회도 여기서 풀린다
  if (!key) return null;
  // `post/<내uid>/../<남의uid>/x.png` 같은 경로는 소유자 검사(두 번째 칸)를 통과해 버린다.
  // R2는 키를 문자 그대로 다뤄서 실제로 남의 파일이 지워지진 않지만, 중간 어딘가가
  // 경로를 정규화하면 위험해지므로 아예 받지 않는다.
  if (key.split("/").some((seg) => seg === "" || seg === "." || seg === "..")) return null;
  return key;
}
