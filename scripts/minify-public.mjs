// public/ 의 정적 스크립트를 배포용으로 압축한다.
//
// 왜 — public/*.js 는 Next 번들러를 거치지 않고 **원본 그대로** 서빙된다.
//      개발 주석(요청 배경·설계 이유·어뷰징 대응 설명)이 F12로 전부 보였다(2026-08-14 사용자 지적).
//      주석을 지우는 대신, 빌드 때 압축본(.min.js)을 만들어 **배포에서만** 그걸 쓴다 —
//      소스의 주석은 프로젝트의 기억이므로 그대로 둔다.
//
// 무엇을 — 주석 전부 제거 + console.log/debug 제거(console.error·warn 은 남김: 오류 기록용)
//          + 소스맵 없음(원본 노출 방지).
//
// ⚠️ sw.js 는 일부러 안 건드린다 — 서비스워커는 파일 바이트가 달라지면 전체 재설치가 돌고,
//    주석도 3줄뿐이라 얻는 게 없다.
//
// 실행 시점: npm run build 의 첫 단계(package.json). Vercel 빌드에서도 동일하게 돈다.
import { minify } from "terser";
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const root = path.join(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const targets = ["palo.js", "agegate.js"];

for (const name of targets) {
  const src = fs.readFileSync(path.join(root, "public", name), "utf8");
  const out = await minify(src, {
    compress: {
      passes: 2,
      pure_funcs: ["console.log", "console.debug", "console.info"], // 오류용 error·warn은 남긴다
    },
    mangle: false, // 이름은 안 바꾼다 — 인라인 onclick="함수명()" 이 전역 이름으로 부르므로
    format: { comments: false },
  });
  if (out.error) throw out.error;
  const min = name.replace(/\.js$/, ".min.js");
  fs.writeFileSync(path.join(root, "public", min), out.code);
  const a = Math.round(src.length / 1024), b = Math.round(out.code.length / 1024);
  console.log(`${name} ${a}KB → ${min} ${b}KB (${Math.round((1 - b / a) * 100)}% 감소)`);
}
