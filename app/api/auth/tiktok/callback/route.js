// 틱톡 로그인 콜백(서버). 네이버 콜백과 같은 구조인데, 결정적 차이가 하나 있다:
//
// ⚠️ **틱톡은 이메일을 주지 않는다.** 네이버는 이메일로 기존 계정과 자동 연결됐지만,
//    틱톡은 사용자 고유번호(union_id/open_id)로 **내부용 가짜 이메일**을 만들어 쓴다
//    (아이디 계정의 @users.commi.kr 패턴 재사용). 그래서:
//    - 틱톡 사용자는 항상 자기만의 계정이 생긴다(구글 계정과 자동 연결 불가 — 틱톡의 한계)
//    - 이 가짜 이메일이 계정을 찾는 열쇠다. **절대 바뀌면 안 된다** — palo.js의
//      isIdAccount가 provider==='tiktok'을 복구용 이메일 대상에서 제외하는 이유.
//    - 고유번호는 union_id 우선(같은 개발자의 앱들 간에 안정적), 없으면 open_id.
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const ALLOWED_HOSTS = new Set(["commi.kr", "www.commi.kr", "palo-web-nu.vercel.app", "localhost:3000"]);
function siteBase(request) {
  const h = request.headers;
  const host = h.get("x-forwarded-host") || h.get("host") || "";
  if (ALLOWED_HOSTS.has(host)) {
    const proto = host.startsWith("localhost") ? "http" : "https";
    return proto + "://" + host;
  }
  return "https://commi.kr";
}
function getCookie(request, name) {
  const c = request.headers.get("cookie") || "";
  const m = c.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : null;
}
function fail(base, reason) {
  return new Response(null, {
    status: 302,
    headers: { Location: base + "/?login_error=" + reason, "Set-Cookie": "tk_state=; Path=/; Max-Age=0" },
  });
}

export async function GET(request) {
  const base = siteBase(request);
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieState = getCookie(request, "tk_state");
  if (!code || !state || !cookieState || state !== cookieState) return fail(base, "state");

  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;
  if (!clientKey || !clientSecret) return fail(base, "config");

  // 1) code → 틱톡 access token (틱톡은 GET 쿼리가 아니라 **POST 폼**을 요구한다)
  let accessToken;
  try {
    const tr = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_key: clientKey,
        client_secret: clientSecret,
        code,
        grant_type: "authorization_code",
        redirect_uri: base + "/api/auth/tiktok/callback",
      }),
      cache: "no-store",
    });
    const tj = await tr.json();
    accessToken = tj.access_token;
  } catch (e) {}
  if (!accessToken) return fail(base, "token");

  // 2) 틱톡 프로필(이름·사진·고유번호) — 이메일은 애초에 없다
  let user;
  try {
    const mr = await fetch(
      "https://open.tiktokapis.com/v2/user/info/?fields=open_id,union_id,avatar_url,display_name",
      { headers: { Authorization: "Bearer " + accessToken }, cache: "no-store" }
    );
    const mj = await mr.json();
    user = mj && mj.data && mj.data.user;
  } catch (e) {}
  const rawId = user && (user.union_id || user.open_id);
  if (!rawId) return fail(base, "profile");
  const nickname = (user.display_name || "").trim() || "새싹작가";

  // 내부용 가짜 이메일 — 고유번호를 이메일 로컬파트에 안전한 글자로만 접는다.
  // ⚠️ 이 규칙을 바꾸면 기존 틱톡 사용자 전원이 다음 로그인에서 새 계정이 된다. 바꾸지 말 것.
  const safeId = String(rawId).toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 48);
  if (safeId.length < 8) return fail(base, "profile"); // 비정상적으로 짧으면 신뢰하지 않는다
  const email = "tiktok_" + safeId + "@users.commi.kr";

  // 3) Supabase 관리자(service_role)로 계정 생성/연결 + 로그인 링크 발급
  const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  // 이미 있으면 createUser가 에러를 돌려주는데 그건 무시 — 아래 generateLink가 그 계정으로 로그인시킨다.
  await supa.auth.admin.createUser({
    email,
    email_confirm: true, // 실재하는 메일함이 아니므로 확인 메일을 보낼 일이 없다 — 바로 확인됨 처리
    user_metadata: {
      name: nickname, // handle_new_user 트리거가 이 값으로 닉네임 자동 생성
      full_name: nickname,
      avatar_url: user.avatar_url || null,
      provider: "tiktok", // ⚠️ palo.js isIdAccount가 이 표식으로 복구용 이메일을 막는다
      tiktok_open_id: user.open_id || null,
      tiktok_union_id: user.union_id || null,
    },
  });

  const { data: link, error: linkErr } = await supa.auth.admin.generateLink({
    type: "magiclink",
    email,
    options: { redirectTo: base + "/" },
  });
  if (linkErr || !link || !link.properties || !link.properties.action_link) return fail(base, "link");

  return new Response(null, {
    status: 302,
    headers: { Location: link.properties.action_link, "Set-Cookie": "tk_state=; Path=/; Max-Age=0" },
  });
}
