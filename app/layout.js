import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://commi.kr"),
  title: "commi · 그림 그리는 사람들의 커뮤니티",
  // 검색 결과 설명 문구. 핵심 키워드(그림 커뮤니티·피드백·커미션)를 앞쪽에 두고 155자 이내로 —
  // 너무 길거나 본문과 동떨어지면 구글이 무시하고 페이지 본문을 대신 긁어온다.
  // OG(카톡·트위터 미리보기)도 같은 문구로 맞춰 흔들리지 않게 한다.
  description: "commi는 그림 그리는 사람들의 커뮤니티예요. 창작 과정과 낙서를 공유하고, 서로의 그림에 피드백을 주고받고, 커미션 작가와 의뢰인을 잇습니다.",
  openGraph: {
    title: "commi · 그림 그리는 사람들의 커뮤니티",
    description: "commi는 그림 그리는 사람들의 커뮤니티예요. 창작 과정과 낙서를 공유하고, 서로의 그림에 피드백을 주고받고, 커미션 작가와 의뢰인을 잇습니다.",
    url: "https://commi.kr",
    siteName: "commi",
    type: "website",
    locale: "ko_KR",
    // 공유 카드 이미지(2026-08-14 교체) — 예전엔 앱 아이콘(512 정사각)이라 트위터에서
    // 작은 카드로 나왔다. 1200×630 배너 + 아래 twitter.card 지정으로 큰 카드가 된다.
    // 다른 그림으로 바꾸려면 public/og-image.jpg 만 갈아끼우면 된다(같은 비율 권장).
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "commi — 그림 그리는 사람들의 커뮤니티" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "commi · 그림 그리는 사람들의 커뮤니티",
    description: "commi는 그림 그리는 사람들의 커뮤니티예요. 창작 과정과 낙서를 공유하고, 서로의 그림에 피드백을 주고받고, 커미션 작가와 의뢰인을 잇습니다.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "547vvUq82RlyN5pw6cBSJ8jExJyDfVv90lmBogdjnLk",
    other: {
      "naver-site-verification": "8b684f46a203c43796176b8879d101320ca47d4e",
    },
  },
  icons: {
    // 구글 검색 로고는 48px 이상·정사각·48의 배수 favicon을 골라 쓴다.
    // 큰 PNG(192·512, 둘 다 48의 배수)를 앞에 둬서 32px짜리 대신 이걸 고르게 유도한다.
    // ⚠️ favicon.ico 는 일부러 public/ 에 둔다(2026-08-15). app/favicon.ico 파일 규칙을 쓰면
    //    Next 가 그 <link>를 **head 맨 앞에** 자동으로 넣어(256x256, 48의 배수 아님)
    //    위 의도한 순서를 덮어썼다. public/ 에 두면 /favicon.ico 로 그대로 서빙되어
    //    구식 크롤러도 찾을 수 있고, head 순서는 아래 목록이 그대로 결정한다.
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      // 맨 뒤 — 링크를 못 읽는 구식 크롤러가 관례적으로 /favicon.ico 를 직접 찾아가는 경우 대비
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
    ],
    // ⚠️ 예전엔 /apple-icon.png 를 선언했는데 그 파일이 실제로 없어서 404였다(5회차 점검).
    //    iOS가 관례적으로 찾는 이름(/apple-touch-icon.png)으로 실제 파일을 두고 선언도 맞춘다.
    apple: [{ url: "/apple-touch-icon.png", sizes: "192x192", type: "image/png" }],
  },
  appleWebApp: { capable: true, title: "commi", statusBarStyle: "default" },
};

export const viewport = {
  themeColor: "#e07aa6",
  // 확대 금지를 풀었다(2026-08-14) — 저시력 사용자의 핀치줌을 막는 건 접근성 위반(WCAG 1.4.4).
  // 원래 막았던 이유(입력창 14~15px 포커스 시 iOS 자동 확대)는 모든 입력창을 16px로
  // 올려서 해결했다. ⚠️ 새 입력창을 만들 때 font-size를 16px 미만으로 주면
  // iOS에서 포커스마다 화면이 확대되니 반드시 16px 이상으로.
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// 구조화 데이터(JSON-LD): 검색엔진이 사이트 정체성을 이해하도록
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: "commi", url: "https://commi.kr", inLanguage: "ko" },
    { "@type": "Organization", name: "commi", url: "https://commi.kr", logo: "https://commi.kr/icon-512.png" },
  ],
};

export default function RootLayout({ children }) {
  // suppressHydrationWarning: palo.js가 하이드레이션 전에 <html>에 --cm-tabbar-h(하단 탭 높이)를
  // 심기 때문에, React가 서버 HTML과 다르다고 경고하는 것을 막는다.
  return (
    <html lang="ko" suppressHydrationWarning>
      {/* 글 목록 선요청. <head> 맨 앞의 평범한 인라인 스크립트로 둔다 —
          next/script의 beforeInteractive로 <body>에 두면 실제로는 문서 파싱이 끝난 뒤
          (실측 585ms)에야 실행돼서, 정작 데이터가 도착하는 시점이 1.2초까지 밀렸다.
          여기서는 HTML 첫 조각이 오자마자(약 50ms) 요청이 나가므로 그만큼 통째로 앞당겨진다.
          supabase-js를 기다리지 않으려고 REST를 직접 호출한다.
          실패하면 그냥 null을 남기고, palo.js가 평소 경로로 다시 부르므로 안전하다. */}
      <head>
        {/* ⚠️ 아래 인라인 스크립트 문자열 안에는 주석을 쓰지 말 것 — 그대로 모든 페이지의
            HTML 소스에 실려 나간다(2026-08-14 사용자 지적으로 기존 주석 10개를 여기로 이사).
            코드 설명:
            · __paloHasBackend — palo.js가 하이드레이션보다 먼저 실행돼 그 시점엔 window.supabase가
              없으므로, "백엔드가 아예 없는 로컬 데모"와 "아직 안 온 것"을 구분하는 표식.
            · 경로 검사 — 선요청은 목록을 쓰는 화면(홈·게시판·글)에서만.
            · 토큰 빌려 쓰기 — 로그인한 사람을 anon 권한으로 읽으면 본인에게만 보이는 행이 빠진다.
              저장된 세션 토큰을 그대로 써서 supabase-js와 같은 요청을 만든다. 토큰이 없거나
              곧 만료면 선요청을 접는다(틀린 데이터를 보여주지 않으려고).
            · base64- 접두사 — 최신 supabase-js는 세션을 base64로 저장한다. TextDecoder를 쓰는
              이유는 닉네임 등 한글이 깨지지 않게 하기 위함.
            · 7개를 전부 띄우는 이유 — 하나라도 빠지면 palo.js가 깨어난 뒤에야 그것만 새로 부르고,
              Promise.all은 제일 늦은 것을 기다리므로 그만큼 통째로 밀린다. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
  var U=${JSON.stringify(process.env.NEXT_PUBLIC_SUPABASE_URL || "")};
  var K=${JSON.stringify(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "")};
  window.__paloHasBackend=!!(U&&K);
  var p=location.pathname;
  if(!(p==="/"||p.indexOf("/board/")===0||p.indexOf("/post/")===0))return;
  if(!U||!K)return;
  var tok=null,found=false;
  for(var i=0;i<localStorage.length;i++){
    var k=localStorage.key(i);
    if(!(k&&k.indexOf("sb-")===0&&k.indexOf("auth-token")>-1))continue;
    found=true;
    try{
      var v=localStorage.getItem(k)||"";
      if(v.indexOf("base64-")===0){
        var b=atob(v.slice(7)),u8=new Uint8Array(b.length);
        for(var j=0;j<b.length;j++)u8[j]=b.charCodeAt(j);
        v=new TextDecoder().decode(u8);
      }
      var s=JSON.parse(v);
      if(s&&s.access_token&&s.expires_at&&s.expires_at*1000>Date.now()+30000)tok=s.access_token;
    }catch(e){}
    break;
  }
  if(found&&!tok)return;
  var h={apikey:K,Authorization:"Bearer "+(tok||K)};
  function q(path,init){
    return fetch(U+"/rest/v1/"+path,init?Object.assign({headers:h},init):{headers:h})
      .then(function(r){return r.ok?r.json():null;})
      .then(function(d){return d?{data:d,error:null}:null;})
      .catch(function(){return null;});
  }
  var now=new Date().toISOString();
  window.__paloPre={
    posts:q("posts?select=*&order=created_at.desc"),
    profiles:q("profiles?select=id,nickname,level,avatar_url"),
    notices:q("notices?select=*&order=created_at.desc&limit=1"),
    levels:q("level_thresholds?select=*&order=level.asc"),
    ads:q("user_ads?select=id,image_url,linked_post_id,linked_commission_id,points_spent&status=eq.active&expires_at=gt."+encodeURIComponent(now)),
    adLocks:q("user_ads?select=linked_post_id,linked_commission_id,status,expires_at&status=in.(pending,active)"),
    camps:q("rpc/get_servable_ads",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},h),body:"{}"})
  };
}catch(e){}})();`,
          }}
        />
        {/* 브랜드 워드마크("commi") 전용 서체.
            ⚠️ text= 로 딱 그 글자들만 부분집합 요청 — 파일이 2KB 남짓이라 로딩 부담이 없다.
            로고 워드마크는 항상 "commi" 다섯 글자뿐이므로 다른 글자는 영영 필요 없다. */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&text=commi&display=swap"
        />
        {/* 본문 기본 서체 프리텐다드(OFL) — 그동안 font-family에 선언만 있고 로드가 없어
            사실상 전원이 시스템 폰트로 보고 있었다(2026-08-14 발견, 사용자 승인으로 로드).
            가변(웨이트 45~920 한 파일) + 동적 서브셋: 화면에 쓰인 글자 조각만 내려받아
            한글 통짜(1MB+) 대신 초기 수십 KB. css에 font-display:swap 포함이라 로딩 중에도
            글이 시스템 폰트로 먼저 보인다(빈 화면 없음). 서체 이름은 'Pretendard Variable' —
            body font-family 두 번째 항목과 일치한다. */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        {children}
        <Analytics />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
