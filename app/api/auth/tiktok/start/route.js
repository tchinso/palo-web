// 틱톡 로그인 시작 지점(서버). '틱톡으로 로그인' 버튼이 이 주소로 이동하면,
// CSRF 방지용 state를 만들어 쿠키에 저장하고 틱톡 인증 페이지로 리다이렉트한다.
// (네이버 start 라우트와 같은 구조 — 다른 점은 틱톡이 client_id 대신 client_key라는 이름을 쓴다는 것)
export const runtime = "nodejs";

function siteBase(request) {
  const h = request.headers;
  const proto = h.get("x-forwarded-proto") || "https";
  const host = h.get("x-forwarded-host") || h.get("host") || "commi.kr";
  return proto + "://" + host;
}

export async function GET(request) {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  if (!clientKey) return new Response("TIKTOK_CLIENT_KEY 환경변수가 설정되지 않았어요.", { status: 500 });

  const base = siteBase(request);
  const redirectUri = base + "/api/auth/tiktok/callback"; // 틱톡 개발자센터에 등록한 Redirect URI와 일치해야 함
  const state = crypto.randomUUID();

  const authorizeUrl =
    "https://www.tiktok.com/v2/auth/authorize/?response_type=code" +
    "&client_key=" + encodeURIComponent(clientKey) +
    "&scope=" + encodeURIComponent("user.info.basic") +
    "&redirect_uri=" + encodeURIComponent(redirectUri) +
    "&state=" + encodeURIComponent(state);

  const secure = base.startsWith("https") ? "; Secure" : "";
  return new Response(null, {
    status: 302,
    headers: {
      Location: authorizeUrl,
      "Set-Cookie": "tk_state=" + state + "; Path=/; HttpOnly; SameSite=Lax; Max-Age=600" + secure,
    },
  });
}
