var BOARDS=[
  {group:"이야기",items:[
    {id:"all",name:"전체 글",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M3 7l2-3h6l2 3\"/></svg>"},
    {id:"talk",name:"수다",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z\"/></svg>"}]},
  {group:"그리는 중",items:[
    {id:"doodle",name:"낙서 · 크로키",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 15c2.5-6 5 5 8-1s4-6 10 1\"/></svg>"},
    {id:"wip",name:"작업물",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 20h4L18 10l-4-4L4 16v4z\"/><path d=\"M13 7l4 4\"/></svg>"},
    {id:"sketch",name:"그림공부",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6C10 4 6 4 3 5v14c3-1 7-1 9 1 2-2 6-2 9-1V5c-3-1-7-1-9 1z\"/><path d=\"M12 6v14\"/></svg>"}]},
  {group:"궁금해요",items:[
    {id:"ask",name:"질문 · 시세문의",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7M12 17h.01\"/></svg>"},
    {id:"vote",name:"투표 · 수요조사",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/></svg>"},
    {id:"crit",name:"피드백 요청",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>"},
    {id:"ilchim",name:"일침",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 2L4.5 12.5h6L11 22l8.5-10.5h-6z\"/></svg>"}]},
  {group:"함께",items:[
    {id:"collab",name:"협업 · 팀원모집",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75\"/></svg>"},
    {id:"challenge",name:"챌린지",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 3v18\"/><path d=\"M5 4h13l-2 4 2 4H5\"/></svg>"},
    {id:"tip",name:"자료 · TIP",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 4 2 9l10 5 10-5-10-5z\"/><path d=\"M6 11v5c0 1 3 2 6 2s6-1 6-2v-5\"/></svg>"}]},
  {group:"거래",trade:true,items:[
    {id:"request",name:"리퀘스트",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 11V6a2 2 0 0 0-4 0v5\"/><path d=\"M14 10V4a2 2 0 0 0-4 0v6\"/><path d=\"M10 10.5V6a2 2 0 0 0-4 0v8\"/><path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8\"/></svg>"},
    {id:"recruit",name:"구인",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"13.5\" cy=\"6.5\" r=\"1\"/><circle cx=\"17.5\" cy=\"10.5\" r=\"1\"/><circle cx=\"8.5\" cy=\"7.5\" r=\"1\"/><circle cx=\"6.5\" cy=\"12.5\" r=\"1\"/><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.4 0 2.5-1.1 2.5-2.5 0-.6-.2-1.2-.6-1.6-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2H16c3.3 0 6-2.7 6-6 0-5-4.5-8.5-10-8.5z\"/></svg>"},
    {id:"used",name:"중고",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12l8-8h6a2 2 0 0 1 2 2v6l-8 8z\"/><circle cx=\"15\" cy=\"9\" r=\"1.4\" fill=\"currentColor\" stroke=\"none\"/></svg>"}]},
  {group:"기타",items:[
    {id:"suggest",name:"버그 · 건의사항",icon:"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z\"/><path d=\"M12 9v3M12 15h.01\"/></svg>"}]}
];
/* 19+ 게시판 노출 스위치 — 네이버 로그인 검수 기간 동안 비공개.
   ⚠️ 이 게시판의 이름·이모지·안내문·확인 UI는 이 파일에 없다. 전부 /agegate.js 에 있고,
      켜져 있을 때만(아래 loadAgeGate) 받아와서 BOARDS·CATMAP·BOARD_EMOJI·CHIP_EMOJI·
      CHIP_GROUP·BOARD_GUIDE에 끼워 넣는다.
      이유: 광고 심사 봇이 링크된 JS까지 훑어서 사이트를 잘못된 업종으로 분류했다
      (2026-08-10 틱톡 광고 거부). 화면에 안 뜨는 코드 때문에 광고가 막히지 않게 분리했다.
   ⚠️ 다시 열 때는 이 값만 true로 바꾸면 된다 — 그 순간부터 /agegate.js를 부팅 때 받아온다. */
var ADULT_BOARD_ENABLED=true;
var CATMAP={talk:{label:"수다",cls:"talk-c"},ask:{label:"고민",cls:"help-c"},crit:{label:"피드백",cls:"crit-c"},
  wip:{label:"작업과정",cls:"crit-c"},doodle:{label:"낙서",cls:"talk-c"},tip:{label:"팁",cls:"tip-c"},challenge:{label:"챌린지",cls:"chal-c"},collab:{label:"협업",cls:"help-c"},
  sketch:{label:"그림공부",cls:"tip-c"},trade:{label:"거래",cls:"free-c"},used:{label:"중고",cls:"free-c"},
  review:{label:"후기",cls:"free-c"},vote:{label:"투표",cls:"chal-c"},request:{label:"리퀘스트",cls:"free-c"},recruit:{label:"구인",cls:"free-c"},suggest:{label:"건의",cls:"chal-c"},ilchim:{label:"일침",cls:"crit-c"}};

var postsLoaded=false; // loadRealPosts()가 실제 글을 POSTS에 합친 뒤 true — 이 전에는 데모 글로 renderList()를 강제로 돌리지 않음(로그인 리다이렉트 직후 더미 글이 잠깐 보이는 버그 방지)
var userLeftHome=false; // 초기 로딩이 끝나기 전에 사용자가 피드(홈) 밖 화면(커미션/채팅/글쓰기/프로필/글·유저 상세)으로 이동했으면 true — loadRealPosts() 완료 시 홈으로 강제 복귀시키지 않기 위함
// 하단 탭 경합(레이스) 방지: 사용자가 "마지막으로 선택한" 최상위 탭을 기록. 각 탭 함수가 눌리는 즉시(동기) 갱신하고,
// 비동기 로딩이 뒤늦게 끝나 화면을 그리기 직전에 "아직 내가 이 탭인가?"를 확인해, 이전 탭 결과가 현재 화면을 덮어쓰지 않게 한다.
/* ===== 광고 성과 측정 =====
   광고 링크에 캠페인 코드를 달아 쓴다:  https://commi.kr/?c=tw0808
   처음 들어온 사람에게 무작위 방문자 번호를 발급하고, **첫 유입 캠페인만** 붙여 둔다(first-touch).
   나중에 검색으로 다시 들어와도 그 사람의 성과는 처음 데려온 광고의 몫이다.
   ⚠️ 주소는 renderList()의 pushState 등으로 곧 정리되므로 스크립트가 뜨자마자 붙잡아 둔다.
   ⚠️ 기록은 브라우저가 DB에 직접 넣지 않고 /api/track을 거친다(아무나 통계를 넣지 못하게). */
var MKT=(function(){
  var KV="palo_mkt_v",KC="palo_mkt_c",vid=null,camp=null,on=false;
  function uuid(){
    try{ if(crypto&&crypto.randomUUID)return crypto.randomUUID(); }catch(e){}
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){
      var r=Math.random()*16|0;return (c==="x"?r:((r&3)|8)).toString(16);});
  }
  try{
    vid=localStorage.getItem(KV);
    if(!vid){vid=uuid();localStorage.setItem(KV,vid);}
    camp=localStorage.getItem(KC)||null;
    var q=new URLSearchParams(location.search);
    var code=(q.get("c")||q.get("utm_campaign")||"").trim().slice(0,40);
    // 이미 붙은 캠페인이 있으면 덮어쓰지 않는다 — 처음 데려온 광고의 공로를 지키기 위해
    if(code&&!camp){camp=code;localStorage.setItem(KC,code);}
    if(code){ // 주소에서 코드는 지운다(공유했을 때 남의 방문까지 이 캠페인으로 잡히지 않게)
      q.delete("c");q.delete("utm_campaign");q.delete("utm_source");q.delete("utm_medium");
      var qs=q.toString();
      try{history.replaceState({},"",location.pathname+(qs?"?"+qs:""));}catch(e){}
    }
    on=true;
  }catch(e){on=false;} // 시크릿 모드 등으로 저장이 막히면 측정을 포기(사이트는 그대로 동작)
  var queue=[],timer=null;
  function payload(){
    var u=null;try{u=(window.AUTH&&AUTH.user)?AUTH.user.id:null;}catch(e){}
    return JSON.stringify({v:vid,c:camp,u:u,e:queue.splice(0,30)});
  }
  function flush(beacon){
    if(!on||!queue.length)return;
    var body=payload();
    try{
      if(beacon&&navigator.sendBeacon){
        navigator.sendBeacon("/api/track",new Blob([body],{type:"application/json"}));return;
      }
      fetch("/api/track",{method:"POST",headers:{"Content-Type":"application/json"},body:body,keepalive:true}).catch(function(){});
    }catch(e){}
  }
  function track(name,label){
    if(!on)return;
    queue.push({n:name,l:label||null,p:location.pathname});
    if(queue.length>=20){flush(false);return;}
    // 한 동작마다 보내면 요청이 너무 잦다 → 몇 초 모아서 한 번에 보낸다
    if(!timer)timer=setTimeout(function(){timer=null;flush(false);},4000);
  }
  // 창을 닫거나 탭을 옮길 때 남은 것을 마저 보낸다(fetch는 이때 취소되므로 sendBeacon)
  try{
    document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden")flush(true);});
    window.addEventListener("pagehide",function(){flush(true);});
  }catch(e){}
  return {track:track,flush:flush,campaign:function(){return camp;},visitor:function(){return vid;},enabled:function(){return on;}};
})();
function track(n,l){try{MKT.track(n,l);}catch(e){}}
/* ===== 친구 초대 코드 잡기 =====
   초대 링크:  https://commi.kr/?ref=ABC1234
   캠페인 코드(?c=)와 같은 이유로 **스크립트가 뜨자마자** 붙잡고 주소에서 지운다
   (지우지 않으면 그 주소를 공유했을 때 남의 가입까지 이 사람의 초대로 잡힌다).
   ⚠️ 링크를 타고 들어와도 가입은 한참 뒤에 할 수 있으므로 저장해 두었다가
      로그인이 되는 순간 딱 한 번 서버에 보낸다(maybeRegisterReferral). */
var REF=(function(){
  var K="palo_ref",code=null;
  try{
    code=localStorage.getItem(K)||null;
    var q=new URLSearchParams(location.search);
    var v=(q.get("ref")||"").trim().toUpperCase().slice(0,16);
    // 이미 담아 둔 코드는 덮어쓰지 않는다 — 먼저 데려온 사람의 공로를 지킨다
    if(v&&!code){code=v;localStorage.setItem(K,v);}
    if(v){
      q.delete("ref");
      var qs=q.toString();
      try{history.replaceState({},"",location.pathname+(qs?"?"+qs:""));}catch(e){}
    }
  }catch(e){} // 시크릿 모드 등으로 저장이 막히면 초대만 포기(사이트는 그대로)
  return {code:function(){return code;},clear:function(){try{localStorage.removeItem(K);}catch(e){}code=null;}};
})();
/* 로그인 직후 한 번 호출. 서버가 "신규 가입자인지·자기 자신은 아닌지"를 전부 판단하므로
   여기서는 조건을 따지지 않고 보내기만 한다(클라이언트 판단은 얼마든지 조작될 수 있다). */
async function maybeRegisterReferral(){
  var code=REF.code();
  if(!code||!AUTH.user||!window.supabase)return;
  try{
    var res=await window.supabase.rpc("register_referral",{p_code:code});
    var d=res&&res.data?res.data:null;
    if(res.error)return;                   // 일시적 오류면 다음 로그인 때 다시 시도
    REF.clear();                           // 성공이든 거절이든 코드는 한 번만 쓴다
    if(d&&d.ok){
      track("referral_join",code);
      toast("친구 초대로 시작했어요! 글이나 댓글을 남기면 보상을 받아요","🎁");
    }
  }catch(e){}
}
// 버튼 클릭은 버튼마다 코드를 넣지 않고 한 곳에서 잡는다.
// ⚠️ 글 제목 같은 걸 그대로 이름으로 쓰면 종류가 끝없이 늘어나 통계가 못 쓰게 된다 → 고정 이름으로 묶는다.
try{
  document.addEventListener("click",function(e){
    if(!e.target||!e.target.closest)return;
    var el=e.target.closest("[data-t],.tab,.cm-fab,.post,.post-card,.cm-card,.bn-a,.cm-chip,button");
    if(!el)return;
    var label=el.getAttribute&&el.getAttribute("data-t");
    if(!label){
      if(el.classList.contains("tab"))label="탭:"+(el.getAttribute("data-tab")||"글쓰기");
      else if(el.classList.contains("post")||el.classList.contains("post-card"))label="글 목록 클릭";
      else if(el.classList.contains("cm-card"))label="커미션 카드 클릭";
      else if(el.classList.contains("bn-a"))label="게시판 이동";
      else if(el.classList.contains("cm-chip"))label="태그 칩";
      else label=(el.innerText||el.textContent||"").replace(/\s+/g," ").trim().slice(0,30);
    }
    if(label)track("click",label);
  },true);
}catch(e){}

var curTab="home"; // "home" | "commission" | "chat" | "me"
// 매 탭 전환마다 1씩 증가하는 "번호표". 비동기 로딩을 시작한 시점의 번호를 기억해 두고, 로딩이 끝나 화면을
// 그리기 직전에 번호가 그대로인지 확인한다. 그새 다른(혹은 같은) 탭을 다시 눌렀으면 번호가 달라져 렌더를 버린다.
var navSeq=0;
var feedRefreshing=false; // refreshFeed() 중복 실행 방지(홈/로고 연타 대비)
var profileRefreshing=false; // refreshProfile() 중복 실행 방지
// 최근에 이미 불러온 데이터면 탭을 다시 눌러도 재조회를 건너뛴다(캐시 즉시 표시만) → 탭 왕복이 빨라지고
// 무거운 처리(파싱·렌더)도 덜 돌아 멈춤이 준다. 글을 바꾸는 작업(작성·삭제 등)은 낙관적 갱신으로 즉시 반영됨.
var REFRESH_THROTTLE_MS=8000;
var postsLoadedAt=0; // loadRealPosts()가 마지막으로 성공한 시각(홈·내 정보 공용)
var cmLoadedAt=0;    // 커미션 목록을 마지막으로 불러온 시각
var notifDeeplinkPending=false; // "알림 설정" 딥링크(?notif=settings)로 진입 시, 렌더 후 알림 설정 섹션으로 스크롤
var POSTS=[]; // 실제 글은 loadRealPosts()가 DB에서 채움
var TREND=[
  {name:"비 오는 창가",tag:"챌린지 1위",thumb:"t1",sub:"참여 38명"},
  {name:"인체 비례 연재",tag:"강좌 급상승",thumb:"t4",sub:"조회 905"},
  {name:"숲 속 마녀",tag:"크리틱 화제",thumb:"t2",sub:"댓글 12"},
  {name:"손 그림자 루틴",tag:"팁 인기",thumb:"t3",sub:"좋아요 96"},
  {name:"AI 정책 투표",tag:"토론 뜨거움",thumb:"t5",sub:"댓글 214"}
];
var GRADS={t1:"#6b7d63,#414f3a",t2:"#7a5a8a,#493a58",t3:"#c2410c,#8a2f08",t4:"#3a5674,#26384c",t5:"#b08968,#7a5c42"};
// searchTab: 검색 결과의 범위 탭 — all(글+댓글) / title(제목만) / author(작성자)
// searchBoard: 검색 결과를 게시판 하나로 좁히기(""=전체). ⚠️ state.board와 따로 둔다 —
//   board는 '지금 보고 있는 게시판'이라 URL·탭·글쓰기까지 얽혀 있고, 검색 중엔 all로 고정된다.
var state={board:"all",sort:"new",query:"",shown:8,tag:null,viewMode:"list",searchTab:"all",searchBoard:""};
// 추천글(개념글) 문턱 — 좋아요가 이 수를 넘으면 '추천글' 정렬에 나타난다
var BEST_LIKES=10;
(function(){try{var _b=getBoardFromPath();if(_b)state.board=_b;}catch(e){}})(); // /board/{id} 딥링크면 시작 게시판을 그걸로
var PER=40;var page=1;var READ=new Set();var FOLLOW=new Set();var FOLLOW_NAME={}; // FOLLOW=팔로우한 회원 id들, FOLLOW_NAME[id]=닉(표시용)
/* 검색 결과는 페이지를 나누지 않고 스크롤로 이어 붙인다(검색은 훑어보는 화면이라 페이지를
   오가는 것보다 계속 내려가는 편이 맞다). 게시판 목록은 그대로 페이저를 쓴다 — 그쪽은
   '몇 페이지에 있었지'로 되찾는 일이 잦다.
   ⚠️ searchShown을 되돌리는 걸 잊으면 새 검색이 남의 스크롤 위치를 물려받는다. 그래서
      호출부마다 초기화하지 않고, 아래 _searchSig가 바뀔 때 renderList가 알아서 되돌린다. */
var SEARCH_STEP=20,searchShown=SEARCH_STEP,_searchSig="",_moreObs=null;
// ⚠️ 구분자 없이 이으면 서로 다른 상태가 같은 문자열이 된다("가"+"나" === ""+"가나")
function _searchSigNow(){
  return [state.query,state.searchTab,state.searchBoard,state.sort,state.tag,state.board,state.viewMode].join("");
}
var ME={nick:"나"};
var AUTH={user:null,profile:null};
var SETTINGS={cm:true,like:true,notice:true,chat:true,cminquiry:true};
try{var _savedPrefs=JSON.parse(localStorage.getItem("palo_notif_prefs")||"null");if(_savedPrefs&&typeof _savedPrefs==="object")Object.assign(SETTINGS,_savedPrefs);}catch(e){}
var notifFilter="all";var pfTab="mine";
function dispName(a){return a==="나"?ME.nick:a}

/* ===== 사용자 뮤트 · 메모 =================================================
   둘 다 "내가 저 사람에 대해 가진 것"이라 한 표(user_notes)에 (나, 상대) 한 쌍으로 저장한다.
   ⚠️ 메모는 **나만 본다.** 서버 정책(owner_id = auth.uid())이 보장하지만, 화면에서도
      남에게 보일 자리에 절대 넣지 않는다.
   ⚠️ 로그인해야 쓸 수 있다. 비로그인은 전부 빈 상태로 동작한다(기능이 없는 것처럼). */
var MY_NOTES={};            // target_id → {memo, muted}
var _unmuted=new Set();     // 이번 화면에서 '보기'를 눌러 잠깐 펼쳐 둔 사람들(새로고침하면 초기화)
function noteOf(uid){return (uid&&MY_NOTES[uid])||null;}
function isBlocked(uid){var n=noteOf(uid);return !!(n&&n.blocked);}
/* 차단은 뮤트의 효과를 포함한다(가리기). 다만 차단은 '보기'로 펼칠 수 없다 —
   가릴지 말지를 고르는 기능이 아니라 관계를 끊는 기능이라서. */
function isMuted(uid){var n=noteOf(uid);if(!n)return false;
  if(n.blocked)return true;
  return !!n.muted&&!_unmuted.has(uid);}
function memoOf(uid){var n=noteOf(uid);return (n&&n.memo)?n.memo:"";}
/* 닉네임 뒤에 붙는 메모 딱지. 목록·상세·댓글 어디서나 같은 모양으로 쓴다. */
function memoBadge(uid){
  var m=memoOf(uid);
  return m?(' <span class="memo-tag" title="'+esc(m)+'">📝'+esc(m)+'</span>'):'';
}
async function loadMyNotes(){
  MY_NOTES={};
  if(!AUTH.user||!window.supabase)return;
  var r=await window.supabase.from("user_notes").select("target_id,memo,muted,blocked").eq("owner_id",AUTH.user.id);
  if(r.error)return;   // 표가 아직 없으면(SQL 미실행) 조용히 넘어간다 — 기능만 안 보일 뿐
  (r.data||[]).forEach(function(n){MY_NOTES[n.target_id]={memo:n.memo||"",muted:!!n.muted,blocked:!!n.blocked};});
}
/* 뮤트·메모를 저장한다. 둘 다 비면(메모 없음 + 뮤트 해제) 행을 지운다 — 빈 행을 쌓아 두지 않는다. */
async function saveMyNote(uid,patch){
  if(!AUTH.user||!window.supabase){toast("로그인이 필요해요","🔒");return false;}
  if(uid===AUTH.user.id){toast("자기 자신에게는 쓸 수 없어요");return false;}
  var cur=noteOf(uid)||{memo:"",muted:false,blocked:false};
  var next={memo:("memo" in patch)?patch.memo:cur.memo,
            muted:("muted" in patch)?patch.muted:cur.muted,
            blocked:("blocked" in patch)?patch.blocked:!!cur.blocked};
  var res;
  if(!next.memo&&!next.muted&&!next.blocked){
    res=await window.supabase.from("user_notes").delete()
      .eq("owner_id",AUTH.user.id).eq("target_id",uid);
    if(!res.error)delete MY_NOTES[uid];
  }else{
    res=await window.supabase.from("user_notes")
      .upsert({owner_id:AUTH.user.id,target_id:uid,memo:next.memo||null,muted:next.muted,blocked:next.blocked},
              {onConflict:"owner_id,target_id"}).select();
    // ⚠️ .select()로 실제 반영 여부를 확인한다 — RLS에 막히면 오류 없이 0행이 된다
    if(!res.error&&(!res.data||!res.data.length)){
      toast("저장되지 않았어요. user-notes.sql을 실행해주세요");return false;
    }
    if(!res.error)MY_NOTES[uid]=next;
  }
  if(res.error){
    toast(/relation|does not exist/i.test(res.error.message)
      ?"먼저 user-notes.sql을 실행해주세요":"저장에 실패했어요");
    return false;
  }
  return true;
}
function toggleMute(uid){
  var on=!(noteOf(uid)||{}).muted;
  saveMyNote(uid,{muted:on}).then(function(ok){
    if(!ok)return;
    _unmuted.delete(uid);   // 상태가 바뀌었으니 '이번만 펼침'은 초기화
    toast(on?"뮤트했어요 🔕":"뮤트를 풀었어요");
    if(typeof renderUserNoteBox==="function")renderUserNoteBox(uid);
    // 홈 목록일 때만 다시 그린다 — 프로필·커미션 상세에서 뮤트하면 그 화면이 홈으로 튕긴다.
    // (다른 화면에서 걸어도 홈으로 돌아갈 때 어차피 새로 그려지므로 반영은 안 놓친다)
    if(onHomeListNow())renderList();
  });
}
/* 차단. 뮤트와 달리 **서버가 막는다** — 상대는 내 글에 댓글을 달거나 채팅을 걸 수 없다.
   ⚠️ 되돌리기 쉬운 동작이 아니라서, 풀 때가 아니라 **걸 때** 한 번 확인을 받는다.
   ⚠️ 화면에서 막는 것만으로는 약속을 지킬 수 없다 — 실제 차단은 user-blocks.sql의
      restrictive 정책이 서버에서 건다. 여기서 하는 건 표시를 저장하는 것까지다. */
async function toggleBlock(uid,nick){
  var on=!isBlocked(uid);
  if(on){
    var ok=await confirmDialog(
      (nick?dispName(nick)+"님을":"이 사람을")+" 차단할까요?\n\n"+
      "· 이 사람의 글·댓글이 가려져요\n"+
      "· 내 글에 댓글을 달 수 없어요\n"+
      "· 채팅을 걸 수 없어요");
    if(!ok)return;
  }
  if(!(await saveMyNote(uid,{blocked:on})))return;
  toast(on?"차단했어요":"차단을 풀었어요");
  renderUserNoteBox(uid);
  if(onHomeListNow())renderList(); // 뮤트와 같은 이유 — 보던 화면을 홈으로 덮어쓰지 않는다
}

/* 프로필의 뮤트·메모 상자. 매번 통째로 다시 그린다(상태가 몇 개 안 돼 그게 더 단순하다). */
var _noteNick="";   // 지금 보고 있는 프로필의 닉(차단 확인 문구에 쓴다)
/* 소개 영역 안의 작은 동작 버튼 — 채팅 · 뮤트 · 차단 · 메모.
   ⚠️ 차단 중에는 뮤트 버튼을 내린다(차단이 뮤트를 포함하므로 둘 다 두면 뜻이 겹친다).
   ⚠️ 메모는 여기서 열고 닫기만 하고, 실제 입력칸은 아래 #uNoteBox가 맡는다 —
      소개 안에 입력칸까지 넣으면 자판이 올라올 때 화면이 통째로 밀린다. */
function renderPfHeroActions(uid,nick){
  var box=document.getElementById("pfHeroActions");
  if(!box)return;
  if(!AUTH.user){box.innerHTML='<div class="pfh-act-hint">로그인하면 채팅·뮤트·차단·메모를 쓸 수 있어요.</div>';return;}
  var muted=!!(noteOf(uid)||{}).muted, blocked=isBlocked(uid), memo=memoOf(uid);
  var nickArg=nick?(",'"+esc(String(nick).replace(/'/g,"")) +"'"):"";
  box.innerHTML=
    '<button class="pfh-act" onclick="openChat(\''+esc(uid)+'\')" title="1:1 채팅">💬 채팅</button>'+
    (blocked?'':'<button class="pfh-act'+(muted?" on":"")+'" onclick="toggleMute(\''+esc(uid)+'\')" title="글·댓글을 접어서 가려요">'+
      (muted?"🔕 해제":"🔕 뮤트")+'</button>')+
    '<button class="pfh-act'+(blocked?" on danger":"")+'" onclick="toggleBlock(\''+esc(uid)+'\''+nickArg+')" title="'+
      (blocked?"차단을 풀어요":"글·댓글이 가려지고 댓글·채팅을 걸 수 없어요")+'">'+
      (blocked?"🚫 차단 해제":"🚫 차단")+'</button>'+
    '<button class="pfh-act'+(memo?" on":"")+'" onclick="pfToggleMemo()" title="나만 보는 메모">📝 메모'+(memo?" ✓":"")+'</button>';
}
function pfToggleMemo(){
  var b=document.getElementById("uNoteBox");
  if(!b)return;
  if(b.hasAttribute("hidden")){
    b.removeAttribute("hidden");
    var t=document.getElementById("uNoteMemo");
    if(t){t.focus();try{t.setSelectionRange(t.value.length,t.value.length);}catch(e){}}
  }else b.setAttribute("hidden","");
}
/* 메모 입력칸. 뮤트·차단 버튼은 위 소개 영역으로 옮겼으므로 여기엔 메모만 남는다.
   ⚠️ 호출부(토글 뒤 다시 그리기 등)가 여러 곳이라, 여기서 소개 영역 버튼도 같이 갱신한다 —
      한쪽만 다시 그리면 '차단했는데 위 버튼은 그대로'인 상태가 된다. */
function renderUserNoteBox(uid,nick){
  if(nick)_noteNick=nick; nick=_noteNick;
  renderPfHeroActions(uid,nick);
  var box=document.getElementById("uNoteBox");
  if(!box)return;
  if(!AUTH.user){box.innerHTML='';box.setAttribute("hidden","");return;}
  var memo=memoOf(uid);
  box.innerHTML=
    '<div class="unote-memo">'+
      '<textarea id="uNoteMemo" maxlength="60" rows="2" placeholder="이 사람에 대한 메모 (나만 봐요)">'+esc(memo)+'</textarea>'+
      '<div class="unote-foot"><span class="unote-hint">닉네임 옆에 작게 붙어요 · 60자까지</span>'+
        '<button class="unote-save" onclick="saveUserMemo(\''+esc(uid)+'\')">저장</button></div>'+
    '</div>';
}
function saveUserMemo(uid){
  var el=document.getElementById("uNoteMemo");if(!el)return;
  var v=el.value.trim().slice(0,60);
  saveMyNote(uid,{memo:v}).then(function(ok){
    if(!ok)return;
    toast(v?"메모를 저장했어요 📝":"메모를 지웠어요");
    renderUserNoteBox(uid);
  });
}

/* 목록·댓글에서 '보기'를 눌렀을 때 — 이번만 펼친다(뮤트 자체는 그대로).
   ⚠️ 지금 열린 글을 가리키는 전역이 따로 없어서, 댓글 쪽에서는 글 id를 넘겨받아 그 글의
      댓글만 다시 그린다(renderComments). 화면 전체를 다시 그리면 스크롤이 맨 위로 튄다. */
function revealMuted(uid,postId){
  _unmuted.add(uid);
  if(postId!=null){
    var p=POSTS.filter(function(x){return x.id===postId;})[0];
    var el=document.getElementById("cmList");
    if(p&&el){el.innerHTML=renderComments(p);return;}
  }
  renderList();
}
// 비회원(익명) 글·댓글에만 붙는 IP 앞자리 표시(디시식). ip는 비회원일 때만 채워지므로 로그인 유저는 자동으로 빈 값.
function anonIpHTML(ip){return ip?(' <span class="anon-ip">('+esc(ip)+')</span>'):'';}
function avatarHTML(name,avatarUrl){
  if(avatarUrl)return '<img src="'+esc(avatarUrl)+'" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block">';
  return esc(dispName(name)[0]);
}
/* ===== 프로필 헤어(크레페 시안) ===== */
function pfSnsUrl(type,v){
  v=v.trim();
  if(/^https?:\/\//i.test(v))return v;
  v=v.replace(/^@/,'');
  return type==='twitter'?('https://x.com/'+v):('https://instagram.com/'+v);
}
/* 자유 링크를 안전한 URL로. http/https만 허용하고(javascript:·data: 등 차단),
   스킴이 없으면 https://를 붙여 준다. 만들 수 없으면 null(=링크 안 보임). */
function pfSafeUrl(v){
  v=String(v||'').trim();
  if(!v)return null;
  if(/^https?:\/\//i.test(v))return v;
  if(/^[a-z][a-z0-9+.-]*:/i.test(v))return null; // 다른 스킴(javascript:·mailto: 등)은 거부
  return 'https://'+v;                            // 스킴 없으면 https로 보정
}
function pfReviewStats(userId,nickname){
  var reviews=POSTS.filter(function(p){
    if(p.board!=='review')return false;
    return p.reviewedUserId?p.reviewedUserId===userId:p.reviewedNickname===nickname;
  });
  var good=reviews.filter(function(r){return r.commissionSentiment==='good'}).length;
  return{count:reviews.length,pct:reviews.length?Math.round(good/reviews.length*100):null};
}
async function pfBookmarkCount(userId){
  if(!window.supabase)return 0;
  var comRes=await window.supabase.from('commissions').select('id').eq('author_id',userId);
  if(comRes.error||!comRes.data||!comRes.data.length)return 0;
  var ids=comRes.data.map(function(c){return c.id});
  var cntRes=await window.supabase.from('commission_bookmarks').select('*',{count:'exact',head:true}).in('commission_id',ids);
  return cntRes.count||0;
}
/* actionsHTML: 소개 영역 안에 끼워 넣는 작은 동작 버튼 줄(남의 프로필에서만).
   ⚠️ 예전엔 소개 **아래에** 전체 폭 '채팅하기' 버튼과 큼직한 뮤트·차단·메모 상자가 따로 있어
      첫 화면을 크게 잡아먹었다. 소개 안 작은 버튼으로 모은다(2026-08-13 요청). */
function pfHeroHTML(p,isSelf,reviewStats,bookmarkCount,actionsHTML){
  var coverStyle=p.cover_url?('background-image:url(\''+cmQ(p.cover_url)+'\');background-size:cover;background-position:center'):'';
  var editCoverBtn=isSelf?'<button type="button" class="pfh-cover-edit" onclick="document.getElementById(\'coverFile\').click()" title="커버 이미지 변경" aria-label="커버 이미지 변경">🖼</button>':'';
  var editAvaBtn=isSelf?'<button type="button" class="pfh-ava-edit" onclick="document.getElementById(\'avatarFile\').click()" title="프로필 이미지 변경" aria-label="프로필 이미지 변경">📷</button>':'';
  var grade=(p.level?levelBadgeHtml(p.level,'pfh-grade-badge'):'')+titleBadgeById(p.title_id,'pfh-grade-badge');
  var bio=p.bio?esc(p.bio).replace(/\n/g,'<br>'):(isSelf?'소개글을 적어보세요.':'');
  var links='';
  if(p.sns_twitter)links+='<a class="pfh-link" href="'+esc(pfSnsUrl('twitter',p.sns_twitter))+'" target="_blank" rel="noopener" title="트위터(X)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>';
  if(p.sns_instagram)links+='<a class="pfh-link" href="'+esc(pfSnsUrl('instagram',p.sns_instagram))+'" target="_blank" rel="noopener" title="인스타그램"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>';
  if(p.sns_email)links+='<a class="pfh-link" href="mailto:'+esc(p.sns_email)+'" title="이메일"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="M4 4l8 7 8-7"/></svg></a>';
  // 자유 링크(블로그·픽시브·포트폴리오 등) — 아무 사이트나 되므로 http/https만 통과시킨다
  // (pfSafeUrl이 javascript: 같은 위험한 스킴을 걸러 낸다). 아이콘은 일반 '링크' 모양.
  var freeUrl=p.sns_link?pfSafeUrl(p.sns_link):null;
  if(freeUrl)links+='<a class="pfh-link" href="'+esc(freeUrl)+'" target="_blank" rel="noopener nofollow" title="링크"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg></a>';
  var editLinksBtn=isSelf?'<button type="button" class="pfh-edit-btn" onclick="openPfEditModal()">✏️ 소개글 · 링크 편집</button>':'';
  var pctHTML=reviewStats.pct==null?'<div class="n">-</div>':'<div class="n good">'+reviewStats.pct+'%</div>';
  var bmHTML=bookmarkCount==null?'…':bookmarkCount;
  return '<div class="pfh">'+
    '<div class="pfh-cover" style="'+coverStyle+'">'+editCoverBtn+'</div>'+
    '<div class="pfh-ava-wrap"><div class="pfh-ava">'+avatarHTML(p.nickname,p.avatar_url)+'</div>'+editAvaBtn+'</div>'+
    '<div class="pfh-name">'+esc(p.nickname)+'</div>'+
    (grade?'<div class="pfh-grade">'+grade+'</div>':'')+
    (bio?'<div class="pfh-bio">'+bio+'</div>':'')+
    (links?'<div class="pfh-links">'+links+'</div>':'')+
    editLinksBtn+
    (actionsHTML||'')+
    '<div class="pfh-stats">'+
      '<div class="pfh-stat"><div class="n">'+reviewStats.count+'</div><div class="l">후기</div></div>'+
      '<div class="pfh-stat">'+pctHTML+'<div class="l">만족율</div></div>'+
      '<div class="pfh-stat"><div class="n" id="pfhBmCount">'+bmHTML+'</div><div class="l">찜하기</div></div>'+
    '</div>'+
  '</div>';
}
function openPfEditModal(){
  document.getElementById('pfBioInput').value=(AUTH.profile&&AUTH.profile.bio)||'';
  document.getElementById('pfTwitterInput').value=(AUTH.profile&&AUTH.profile.sns_twitter)||'';
  document.getElementById('pfInstaInput').value=(AUTH.profile&&AUTH.profile.sns_instagram)||'';
  document.getElementById('pfEmailInput').value=(AUTH.profile&&AUTH.profile.sns_email)||'';
  var lk=document.getElementById('pfLinkInput');if(lk)lk.value=(AUTH.profile&&AUTH.profile.sns_link)||'';
  document.getElementById('pfEditModal').classList.add('open');
}
function closePfEdit(){document.getElementById('pfEditModal').classList.remove('open');}
async function savePfEdit(){
  if(!AUTH.user||!window.supabase)return;
  var bio=document.getElementById('pfBioInput').value.trim().slice(0,150);
  var tw=document.getElementById('pfTwitterInput').value.trim();
  var ig=document.getElementById('pfInstaInput').value.trim();
  var em=document.getElementById('pfEmailInput').value.trim();
  var lkEl=document.getElementById('pfLinkInput');
  var lk=lkEl?lkEl.value.trim().slice(0,300):'';
  // 저장 전에 안전 검증 — 위험 스킴이면 알리고 멈춘다(빈 값은 통과 = 링크 없음)
  if(lk&&!pfSafeUrl(lk)){toast('링크 주소를 확인해주세요 (http/https만 가능)');return;}
  var res=await window.supabase.from('profiles').update({bio:bio||null,sns_twitter:tw||null,sns_instagram:ig||null,sns_email:em||null,sns_link:lk||null},{count:"exact"}).eq('id',AUTH.user.id);
  if(!res.error&&res.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(res.error){toast('저장 실패: '+res.error.message);return;}
  if(AUTH.profile){AUTH.profile.bio=bio||null;AUTH.profile.sns_twitter=tw||null;AUTH.profile.sns_instagram=ig||null;AUTH.profile.sns_email=em||null;AUTH.profile.sns_link=lk||null;}
  closePfEdit();toast('프로필을 저장했어요','✓');
  openProfile();
}
async function onCoverFile(e){
  var f=e.target.files[0];if(!f)return;
  e.target.value='';
  if(!window.supabase||!AUTH.user){toast('로그인이 필요해요');return;}
  if(ALLOWED_IMAGE_TYPES.indexOf(f.type)===-1){toast('이미지 파일만 올릴 수 있어요');return;}
  if(f.size>MAX_IMAGE_BYTES){toast('40MB 이하 이미지만 올릴 수 있어요');return;}
  var uploadBlob=f,ext=(f.name.match(/\.([^.]+)$/)||[,'png'])[1];
  if(f.type!=='image/gif'){
    toast('커버 이미지 압축 중...');
    try{
      var compressed=await compressImage(f);
      uploadBlob=compressed.blob;ext=compressed.ext;
    }catch(err){console.error('커버 이미지 압축 실패, 원본으로 업로드:',err);}
  }
  toast('업로드 중...');
  var url=await uploadToStorage(uploadBlob,'cover');
  if(!url)return;
  var res=await window.supabase.from('profiles').update({cover_url:url},{count:"exact"}).eq('id',AUTH.user.id);
  if(!res.error&&res.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(res.error){toast('저장 실패: '+res.error.message);return;}
  if(AUTH.profile)AUTH.profile.cover_url=url;
  toast('커버 이미지를 변경했어요');
  openProfile();
}
var NOTIFS=[]; // 실제 알림은 loadNotificationsFromDB()가 DB에서 채움
var justAddedId=null;

function anonId(){
  var k=localStorage.getItem("palo_anon_id");
  if(!k){k=crypto.randomUUID();localStorage.setItem("palo_anon_id",k);}
  return k;
}
function myLikeId(){return AUTH.user?AUTH.user.id:anonId();}
function timeAgo(iso){
  var diff=Math.floor((Date.now()-new Date(iso).getTime())/1000);
  if(diff<60)return "방금";
  if(diff<3600)return Math.floor(diff/60)+"분 전";
  if(diff<86400)return Math.floor(diff/3600)+"시간 전";
  return Math.floor(diff/86400)+"일 전";
}
var LATEST_NOTICE=null;
var ACTIVE_ADS=[];
var ACTIVE_CAMPAIGNS=[]; // 유료 CPM 캠페인(get_servable_ads RPC로 로드) — 지면의 80%를 차지
var AD_LOCKED_COMMISSION_IDS={}; // 광고 심사중/집행중인 커미션 id들 — 수정 잠금용(POSTS의 adLocked와 동일한 목적)
var AD_PAID_SHARE=0; // 오픈 초기: 유료 광고 미서빙(0). 나중에 유료를 켜면 이 값(예: 0.80)이 유료에 배정되는 슬롯 비중이 됨.
var AD_PER_AD_SHARE_MAX=0.04; // 유저 광고 1개당 노출 상한 4%(초기에 소수 광고가 독점하는 걸 방지). 유저 광고 '전체' 상한은 없음(최대 100%까지 유저 광고로 채움).
function adTargetOnclick(ad){
  return ad.linked_commission_id?('cmOpenCommissionById('+ad.linked_commission_id+')'):('openPost('+(100000+ad.linked_post_id)+')');
}
function showNotice(){
  if(!LATEST_NOTICE)return;
  document.getElementById("noticeModalTitle").textContent="📢 "+LATEST_NOTICE.title;
  document.getElementById("noticeModalBody").innerHTML=LATEST_NOTICE.content||"";
  document.getElementById("noticeModal").classList.add("open");
}
function closeNotice(){document.getElementById("noticeModal").classList.remove("open");}
// 재진입 캐시: 마지막으로 불러온 피드를 localStorage에 저장해 두고, 다음에 앱을 다시 열 때
// 네트워크를 기다리지 않고 즉시 화면에 뿌린 뒤(백그라운드에서 최신으로 교체). content_html은
// 인라인 이미지로 커질 수 있어 저장에서 제외(목록엔 안 쓰이고, 새로고침되면 다시 채워짐).
var FEED_CACHE_KEY="palo_feed_v1";
/* ⚠️ 글만 담으면 안 된다. 공지(📢)는 DB에서 와야 그려지는데, 캐시로 목록을 즉시 그리는
      순간에는 아직 없어서 **글은 바로 뜨는데 공지만 늦게 튀어나온다**(2026-08-11 신고).
      이용 규칙(📌)이 즉시 보였던 건 palo.js에 기본값이 박혀 있었기 때문이다 —
      공지도 같은 출발선에 세우려면 함께 저장해야 한다.
      이용 규칙도 같이 담는다. 관리자가 고친 내용이 다음 방문에 바로 보이게. */
function saveFeedCache(real){
  try{
    var slim=real.map(function(p){var c={};for(var k in p){if(k!=="html")c[k]=p[k];}return c;});
    localStorage.setItem(FEED_CACHE_KEY,JSON.stringify({
      t:Date.now(),posts:slim,notice:LATEST_NOTICE||null,rules:SITE_RULES
    }));
  }catch(e){/* 용량 초과 등은 무시 — 캐시는 있으면 좋고 없어도 그만 */}
}
function loadFeedCache(){
  try{
    var raw=localStorage.getItem(FEED_CACHE_KEY);if(!raw)return null;
    var o=JSON.parse(raw);
    if(!o||!Array.isArray(o.posts))return null;
    if(Date.now()-(o.t||0)>24*3600*1000)return null; // 24시간 지난 캐시는 버림
    return o;   // {posts, notice, rules}
  }catch(e){return null;}
}
async function loadRealPosts(skipRender){
  if(!window.supabase)return;
  var sb=window.supabase;
  var nowIso=new Date().toISOString();
  // layout.js가 HTML 파싱 직후에 띄워둔 선요청(있으면 재사용). palo.js는 하이드레이션 이후에야
  // 실행되므로, 여기 도달했을 땐 이미 응답이 와 있어 왕복 한 번을 통째로 아낀다.
  // 첫 호출에서만 쓰고 비운다 — 새로고침·재조회 때 낡은 데이터를 재사용하면 안 되므로.
  var pre=window.__paloPre||{};
  window.__paloPre=null;
  function preOr(key,fallback){
    if(!pre[key])return fallback();
    return pre[key].then(function(r){return r||fallback();}); // 선요청이 실패했으면 평소 경로로
  }
  // ── 1차: 서로 독립적인 쿼리 7개를 병렬로 실행(예전엔 하나씩 순서대로 await해서 왕복 지연이 그대로 누적됐음) ──
  var wave1=await Promise.all([
    preOr("notices",function(){return sb.from("notices").select("*").order("created_at",{ascending:false}).limit(1);}),
    preOr("levels",function(){return sb.from("level_thresholds").select("*").order("level");}),
    preOr("ads",function(){return sb.from("user_ads").select("id,image_url,linked_post_id,linked_commission_id,points_spent").eq("status","active").gt("expires_at",nowIso);}),
    preOr("camps",function(){return sb.rpc("get_servable_ads");}),
    preOr("adLocks",function(){return sb.from("user_ads").select("linked_post_id,linked_commission_id,status,expires_at").in("status",["pending","active"]);}),
    preOr("posts",function(){return sb.from("posts").select("*").order("created_at",{ascending:false});}),
    preOr("profiles",function(){return sb.from("profiles").select("id,nickname,level,avatar_url");}),
    preOr("titles",function(){return sb.from("titles").select("id,name,emoji");}),
    // ⚠️ 칭호 장착 정보(title_id)는 기존 프로필 조회에 합치지 않고 따로 부른다 —
    //    titles.sql 실행 전에는 칼럼이 없어서, 합쳐 두면 프로필 조회 전체가 실패해
    //    모든 닉네임이 '익명'으로 무너진다. 분리하면 칭호만 조용히 안 보이고 만다.
    preOr("profileTitles",function(){return sb.from("profiles").select("id,title_id").not("title_id","is",null);}),
    // 이용 규칙(관리자가 고칠 수 있음). ⚠️ site-rules.sql 실행 전에는 표가 없어 오류가 오는데,
    //    그때는 palo.js의 기본 문구를 그대로 쓰면 되므로 조용히 넘긴다.
    preOr("rules",function(){return sb.from("site_settings").select("value").eq("key","rules").maybeSingle();})
  ]);
  var noticeRes=wave1[0],lvRes=wave1[1],adRes=wave1[2],campRes=wave1[3],adLockRes=wave1[4],res=wave1[5],profRes=wave1[6],titleRes=wave1[7],ptRes=wave1[8],rulesRes=wave1[9];
  if(rulesRes&&!rulesRes.error&&rulesRes.data)applySiteRules(rulesRes.data.value);
  // 칭호 사전은 몇 줄 안 되므로 통째로 캐시 — 표시할 때마다 조회하지 않는다.
  if(titleRes&&!titleRes.error)(titleRes.data||[]).forEach(function(t){TITLES_BY_ID[t.id]={name:t.name,emoji:t.emoji};});
  /* ⚠️ 조회에 성공했으면 결과가 비어 있어도 반영해야 한다(= null로 되돌린다).
        예전엔 '있을 때만' 넣었는데, 이제 캐시에서 공지를 미리 채우므로 그대로 두면
        관리자가 공지를 지워도 캐시본이 영원히 남는다. 조회 실패(error)일 때만 유지한다. */
  if(!noticeRes.error)LATEST_NOTICE=(noticeRes.data&&noticeRes.data.length)?noticeRes.data[0]:null;
  if(!lvRes.error)LEVEL_THRESHOLDS=lvRes.data||[];
  if(!adRes.error)ACTIVE_ADS=adRes.data||[];
  if(!campRes.error)ACTIVE_CAMPAIGNS=campRes.data||[];
  var adLockedIds={};
  AD_LOCKED_COMMISSION_IDS={};
  (adLockRes.data||[]).forEach(function(a){
    if(a.status==="pending"||(a.status==="active"&&a.expires_at&&a.expires_at>nowIso)){
      if(a.linked_post_id)adLockedIds[a.linked_post_id]=true;
      if(a.linked_commission_id)AD_LOCKED_COMMISSION_IDS[a.linked_commission_id]=true;
    }
  });
  if(res.error){console.error(res.error);return;}
  var dbIds=res.data.map(function(row){return row.id});
  var profById={};
  if(!profRes.error)profRes.data.forEach(function(row){profById[row.id]={nickname:row.nickname,level:row.level,avatarUrl:row.avatar_url};});
  if(ptRes&&!ptRes.error)(ptRes.data||[]).forEach(function(row){if(profById[row.id])profById[row.id].titleId=row.title_id;});
  function nameFor(uid){return uid&&profById[uid]?profById[uid].nickname:"익명";}
  function levelFor(uid){return uid&&profById[uid]?profById[uid].level:null;}
  function avatarFor(uid){return uid&&profById[uid]?profById[uid].avatarUrl:null;}
  function titleIdFor(uid){return uid&&profById[uid]?(profById[uid].titleId||null):null;}

  // ── 2차: posts에 의존하는 댓글·좋아요·이미지를 병렬로 ──
  var wave2=await Promise.all([
    dbIds.length?sb.from("comments").select("*").in("post_id",dbIds).order("created_at"):Promise.resolve({data:[]}),
    dbIds.length?sb.from("likes").select("post_id,user_id,created_at").in("post_id",dbIds):Promise.resolve({data:[]}),
    dbIds.length?sb.from("post_images").select("post_id,url,sort").in("post_id",dbIds).order("sort"):Promise.resolve({data:[]}),
    dbIds.length?sb.from("polls").select("id,post_id,anchor_key,sort").in("post_id",dbIds).order("sort"):Promise.resolve({data:[]})
  ]);
  var cmRes=wave2[0],likeRes=wave2[1],imgRes=wave2[2],pollRes=wave2[3];
  var pollsByPost={};
  (pollRes.data||[]).forEach(function(pl){(pollsByPost[pl.post_id]=pollsByPost[pl.post_id]||[]).push({id:pl.id,anchor:pl.anchor_key||null});});
  var commentIds=(cmRes.data||[]).map(function(c){return c.id});
  // ── 3차: 댓글에 의존하는 도움돼요(comment_helpful) ──
  var helpfulRes=commentIds.length?await sb.from("comment_helpful").select("comment_id,user_id").in("comment_id",commentIds):{data:[]};
  var helpfulCountByComment={},helpfulMine={};
  (helpfulRes.data||[]).forEach(function(hf){
    helpfulCountByComment[hf.comment_id]=(helpfulCountByComment[hf.comment_id]||0)+1;
    if(AUTH.user&&hf.user_id===AUTH.user.id)helpfulMine[hf.comment_id]=true;
  });
  // 댓글에 박힌 이모티콘 번호를 모아 한 번에 불러온다(렌더는 동기라 미리 채워둬야 한다)
  var _emoIds=[];
  (cmRes.data||[]).forEach(function(c){_emoIds=_emoIds.concat(emoIdsIn(c.content));});
  if(_emoIds.length)await ensureEmoticons(_emoIds);
  var commentsByPost={};
  (cmRes.data||[]).forEach(function(c){
    (commentsByPost[c.post_id]=commentsByPost[c.post_id]||[]).push({n:nameFor(c.author_id),t:timeAgo(c.created_at),txt:c.content,dbId:c.id,authorId:c.author_id,ip:c.ip_masked||null,lv:levelFor(c.author_id),tt:titleIdFor(c.author_id),av:avatarFor(c.author_id),h:helpfulCountByComment[c.id]||0,_me:!!helpfulMine[c.id]});
  });
  var likesByPost={},likeTimesByPost={};
  (likeRes.data||[]).forEach(function(l){
    (likesByPost[l.post_id]=likesByPost[l.post_id]||[]).push(l.user_id);
    (likeTimesByPost[l.post_id]=likeTimesByPost[l.post_id]||[]).push(l.created_at);
  });
  var imagesByPost={};
  (imgRes.data||[]).forEach(function(im){
    (imagesByPost[im.post_id]=imagesByPost[im.post_id]||[]).push(im.url);
  });

  var real=res.data.map(function(row){
    var likers=likesByPost[row.id]||[];
    // 개념글(추천글) 등극 시각 = **10번째 좋아요가 눌린 시각**.
    // 등극 시각을 따로 저장하지 않아도 likes의 created_at에서 그대로 계산된다.
    // (좋아요가 취소되면 10번째가 바뀌므로 값도 자연히 따라 움직인다)
    var bestAt=null;
    var lt=likeTimesByPost[row.id];
    if(lt&&lt.length>=BEST_LIKES){lt=lt.slice().sort();bestAt=lt[BEST_LIKES-1];}
    return {id:100000+row.id,dbId:row.id,authorId:row.author_id,ipMasked:row.ip_masked||null,board:row.board,title:row.title,category:row.category,author:nameFor(row.author_id),authorLevel:levelFor(row.author_id),authorTitleId:titleIdFor(row.author_id),authorAvatar:avatarFor(row.author_id),
      time:timeAgo(row.created_at),createdAt:row.created_at,likes:likers.length,_liked:likers.indexOf(myLikeId())>-1,bestAt:bestAt,
      views:row.views,thumb:"none",stage:row.stage,images:imagesByPost[row.id],polls:pollsByPost[row.id]||[],pollId:(pollsByPost[row.id]&&pollsByPost[row.id][0]?pollsByPost[row.id][0].id:null),
      isManagerPick:!!row.is_manager_pick,pickPosition:row.pick_position,pickedAt:row.picked_at,adLocked:!!adLockedIds[row.id],
      reviewedNickname:row.reviewed_nickname||null,reviewedUserId:row.reviewed_user_id||null,commissionPostId:row.commission_post_id||null,commissionSentiment:row.commission_sentiment||null,
      commissionId:row.commission_id||null,commissionCtype:row.commission_ctype||null,commissionBadReason:row.commission_bad_reason||null,acceptedCommentId:row.accepted_comment_id||null,
      content:(row.content||"").split("\n").filter(Boolean),html:row.content_html||undefined,comments:commentsByPost[row.id]||[]};
  });
  // 기존 실제 글(dbId 있음)은 방금 새로 받은 real로 교체하고, 클라이언트에만 있는 글(낙관적 추가·
  // 캐시 프라임 등 dbId 없는 것)만 남김 — loadRealPosts()를 여러 번 불러도(캐시→백그라운드 갱신) 중복 안 됨.
  POSTS=real.concat(POSTS.filter(function(p){return !p.dbId;}));
  postsLoaded=true;postsLoadedAt=Date.now();
  // 캐시 저장(모든 글 복사→JSON 문자열화→localStorage 동기 쓰기)은 모바일에서 무거워 화면 전환을 막을 수 있음.
  // 다음 방문용 캐시일 뿐이라 지금 당장 필요 없으니, 대기 중인 탭 입력이 먼저 처리되도록 지연 실행한다.
  setTimeout(function(){saveFeedCache(real);},0);
  renderNav(document.getElementById("boardNav"));renderNav(document.getElementById("boardNavM"));renderNav(document.getElementById("boardNavS"));
  renderTrend();
  // 로딩이 끝나기 전에 사용자가 이미 홈 밖 다른 화면으로 이동했다면, 그 화면을 그대로 두고
  // 홈/딥링크로 강제 복귀시키지 않음(로딩 중 탭을 눌렀다가 홈으로 튕기던 문제 해결).
  // skipRender: refreshFeed()가 호출한 경우 — 여기서 목록을 그리지 않고, 내용이 바뀐 경우에만
  // refreshFeed가 한 번 다시 그림(홈/로고 재탭 시 캐시 렌더 + 재조회 렌더로 두 번 그려지던 껌뻑임 방지).
  if(!userLeftHome&&!skipRender){
    var initialDbId=getPostIdFromPath();
    var initialPost=initialDbId?POSTS.find(function(x){return x.dbId===initialDbId}):null;
    var initialUserId=getUserIdFromPath();
    var initialCommissionId=getCommissionIdFromPath();
    var initialTab=getTabFromPath();
    if(initialPost)openPost(initialPost.id);
    else if(initialUserId)openUserProfile(initialUserId);
    else if(initialCommissionId)cmOpenCommissionById(initialCommissionId);
    else if(initialTab)openTabByKey(initialTab); // /commission·/chat·/me 로 바로 들어온 경우
    else renderList();
  }
  renderSidebarAd();
}
function getPostIdFromPath(){
  var m=location.pathname.match(/^\/post\/(\d+)$/);
  return m?parseInt(m[1],10):null;
}
/* 링크로 바로 들어왔을 때, **글 목록을 기다리지 않고** 바로 그 화면을 연다.
   커미션·프로필·탭 화면은 각자 필요한 것을 스스로 불러오므로 loadRealPosts()의
   조회 10개가 끝나기를 기다릴 이유가 없었다. 예전엔 그 뒤에 열려서 몇 초간
   서버가 보낸 홈 화면이 그대로 보였다(2026-08-14 사용자 신고).
   ⚠️ 글 상세(/post/id)만 POSTS에서 글을 찾아야 해서 loadRealPosts() 쪽에 남는다.
   ⚠️ 로그인 상태를 알아야 성인 커미션 판정이 되므로 initAuth() 다음에 부른다. */
function routeDeepLinkEarly(){
  if(userLeftHome)return false;
  var rcid=getReviewsCmIdFromPath();               // /commission/<id>/reviews — 커미션보다 먼저 본다
  if(rcid){userLeftHome=true;cmOpenReviewsById(rcid);return true;}
  var cid=getCommissionIdFromPath();
  if(cid){cmOpenCommissionById(cid);return true;} // 안에서 userLeftHome=true
  var uid=getUserIdFromPath();
  if(uid){userLeftHome=true;openUserProfile(uid);return true;}
  var eid=getEmoticonIdFromPath();
  if(eid){userLeftHome=true;openEmoticonPackById(eid);return true;}
  if(isRankingPath()){userLeftHome=true;openLeaderboard();return true;}
  var tab=getTabFromPath();
  if(tab){userLeftHome=true;openTabByKey(tab);return true;}
  return false;
}
/* 링크로 바로 들어온 경우엔 목록이 아직 없다 — 먼저 불러온 뒤 연다.
   (앱 안에서 누를 때는 이미 목록이 있어 openEmoticonPack / cmOpenReviews 가 바로 열린다) */
async function openEmoticonPackById(packId){
  if(!EMO_MARKET.length&&typeof reloadEmoticonMarket==="function"){
    try{await reloadEmoticonMarket();}catch(e){}
  }
  if(!EMO_MARKET.find(function(x){return x.id===packId;})){
    toast("이모티콘 팩을 찾을 수 없어요");goHome();return;
  }
  openEmoticonPack(packId);
}
async function cmOpenReviewsById(commissionId){
  var idx=await cmEnsureCommissionInData(commissionId);
  if(idx<0){toast("커미션을 찾을 수 없어요(삭제되었을 수 있어요)");goHome();return;}
  cmOpenReviews(commissionId);
}
function sharePost(id){
  var p=POSTS.find(function(x){return x.id===id});if(!p)return;
  var url=p.dbId?(location.origin+"/post/"+p.dbId):location.href;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(function(){toast("링크를 복사했어요")},function(){toast("복사에 실패했어요")});
  }else{
    toast("이 브라우저에서는 복사를 지원하지 않아요");
  }
}
function getCommissionIdFromPath(){
  var m=location.pathname.match(/^\/commission\/(\d+)$/);
  return m?parseInt(m[1],10):null;
}
/* 공유 가능한 화면들의 주소 (2026-08-15).
   ⚠️ 화면마다 주소가 달라야 "지금 보는 것"과 "복사되는 링크"가 어긋나지 않는다 —
      예전엔 커미션 상세에서 작가 프로필로 들어가도 주소가 /commission/6 이라,
      프로필을 공유하려고 복사하면 커미션이 열렸다(사용자 신고).
   ⚠️ /commission/12/reviews 는 위 getCommissionIdFromPath 의 정규식이 $ 로 끝나 겹치지 않는다. */
function getReviewsCmIdFromPath(){
  var m=location.pathname.match(/^\/commission\/(\d+)\/reviews$/);
  return m?parseInt(m[1],10):null;
}
function getEmoticonIdFromPath(){
  var m=location.pathname.match(/^\/emoticon\/(\d+)$/);
  return m?parseInt(m[1],10):null;
}
function isRankingPath(){return location.pathname==="/ranking";}
/* 지금 화면의 주소로 바꾼다. enterScreen 이 이미 히스토리 항목을 쌓았으므로 **교체**만 한다
   (여기서 또 push 하면 뒤로가기를 두 번 눌러야 빠져나온다 — _cmSetDetailUrl 과 같은 규칙). */
function _setScreenUrl(path,title){
  if(!path)return;
  if(location.pathname!==path){try{history.replaceState({},"",path);}catch(e){}}
  if(title)document.title=title;
}
/* ===== 하단 탭의 주소 =====================================================
   탭을 눌러 들어간 화면도 주소가 달라야 링크·새로고침·공유·뒤로가기가 된다.
   ⚠️ 여기 주소를 늘리면 app/ 아래에 같은 이름의 라우트 파일도 만들어야 한다.
      없으면 주소를 직접 치거나 링크를 눌렀을 때 404가 난다(탭 안에서만 갈 수 있는 화면이 된다). */
var TAB_PATHS={commission:"/commission",chat:"/chat",me:"/me"};
function getTabFromPath(){
  var p=location.pathname;
  for(var k in TAB_PATHS)if(TAB_PATHS[k]===p)return k;
  return null;
}
/* push=true면 히스토리에 항목을 하나 쌓는다.
   ⚠️ 커미션·채팅은 enterScreen이 이미 항목을 쌓으므로 **주소만 바꿔야 한다**(replace).
      거기서 또 push하면 뒤로가기를 두 번 눌러야 빠져나온다.
      반대로 내 정보는 enterScreen을 쓰지 않아(resetScreens만 한다) push해야 뒤로가기로 돌아온다. */
function _setTabUrl(tab,push){
  var path=TAB_PATHS[tab];
  if(!path||location.pathname===path)return;
  try{ if(push)history.pushState({},"",path); else history.replaceState({},"",path); }catch(e){}
}
// 주소로 들어왔을 때(직접 입력·링크·새로고침·뒤로가기) 그 탭 화면을 연다
function openTabByKey(tab){
  if(tab==="commission")openCommissionList();
  else if(tab==="chat")openChatList("home");
  else if(tab==="me")openProfile();
}
function getBoardFromPath(){ // /board/{id} — 유효한 게시판 id만 반환('all'·미지의 id는 null=홈)
  var m=location.pathname.match(/^\/board\/([a-z]+)$/);
  if(!m)return null;
  var id=m[1];
  if(id==="all")return null;
  for(var g of BOARDS)for(var b of g.items)if(b.id===id)return id;
  return null;
}
function _cmSetDetailUrl(id,title){ // 커미션 상세 주소를 브라우저 URL에 반영(공유·SEO). 히스토리 항목은 enterScreen이 이미 쌓았으니 현재 항목의 경로만 교체.
  if(id==null)return;
  var path="/commission/"+id;
  if(location.pathname!==path){try{history.replaceState({},"",path);}catch(e){}}
  // 제목도 같이 바꾼다 — 글 상세(openPost)는 하는데 여기만 빠져 있어서, 앱 안에서 들어오면
  // 탭·방문기록·즐겨찾기에 홈 제목("commi · 그림 그리는…")이 그대로 남았다.
  // (링크로 바로 들어온 경우엔 서버가 이미 올바른 제목을 넣어 주므로 값이 같아 바뀌지 않는다)
  if(title)document.title=title+" · commi";
}
function cmShare(id){
  if(id==null){toast("이 커미션은 아직 공유할 수 없어요");return;}
  var url=location.origin+"/commission/"+id;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(function(){toast("커미션 링크를 복사했어요","🔗")},function(){toast("복사에 실패했어요")});
  }else{
    toast("이 브라우저에서는 복사를 지원하지 않아요");
  }
}
/* ---------- 스와이프/뒤로가기로 앱 내부 화면 닫기 (커미션·채팅) ----------
   게시글·프로필은 실제 URL(/post, /user)이 있어 브라우저 기본 뒤로가기(iOS 가장자리 스와이프
   포함)가 그대로 작동함. 반면 커미션·채팅은 URL을 안 바꾸고 화면(#main/오버레이)만 교체해서
   히스토리에 흔적이 없어 뒤로가기가 안 먹혔음.
   → 화면을 열 때 history.pushState로 히스토리 항목을 하나 쌓아두고, 뒤로가기(popstate)가 오면
     그 화면의 '뒤로' 동작(부모 화면 복귀)을 대신 실행. iOS 스와이프도 결국 이 히스토리를
     따라가므로 게시글과 완전히 동일한 방식으로 일관되게 작동함. */
var screenStack=[];        // [{key, back}] — 열려 있는 앱 내부 화면들의 '뒤로' 함수
var navigatingBack=false;  // popstate로 뒤로 가는 중이면 true(중복 push 방지)
// 우리가 쌓아 두고 아직 안 쓴 히스토리 항목 수. 브라우저 히스토리는 지울 수가 없어서,
// resetScreens()로 스택만 비우면 항목이 그대로 남는다 — 탭을 오갈수록 계속 쌓여
// 나중에 뒤로가기를 여러 번 눌러야 화면이 바뀌지 않는 채로 겨우 사이트를 빠져나가게 된다.
// 그래서 남아 있는 항목이 있으면 새로 밀지 않고 그것을 다시 쓴다(최대 1개만 남음).
var pushedDepth=0;
/* 화면 스택이 바뀌면 body의 cm-page 표시를 다시 맞춘다.
   ⚠️ MutationObserver에만 맡기면 안 된다 — 스택은 DOM을 다 그린 **뒤에** 바뀌는 경우가 있어
      마지막 판정이 옛 스택으로 이뤄지고, 그 뒤로는 DOM이 안 변해 다시 불리지 않는다.
      (그래서 커미션 화면에 cm-page가 아예 안 붙는 일이 있었다 — 2026-08-13 실측) */
function _cmSyncNow(){ if(typeof _cmScheduleSync==="function")_cmScheduleSync(); }
function enterScreen(key,back){
  if(typeof syncKbOpen==="function")syncKbOpen(); // 화면 전환 때 하단 탭 상태 정리
  if(navigatingBack)return;                      // 뒤로 가는 중엔 새 항목을 쌓지 않음
  var top=screenStack[screenStack.length-1];
  if(top&&top.key===key){top.back=back;_cmSyncNow();return;}  // 같은 화면 재렌더/내부 탭 전환은 갱신만
  screenStack.push({key:key,back:back});
  if(screenStack.length>pushedDepth){            // 남아도는 항목이 없을 때만 새로 민다
    pushedDepth=screenStack.length;
    history.pushState({paloDepth:screenStack.length},"");
  }
  _cmSyncNow();
}
function screenBack(){if(screenStack.length)history.back();} // 화면 안 '‹' 버튼용
function resetScreens(){screenStack=[];_cmSyncNow();}        // 최상위(탭)로 나갈 때 스택 비우기
window.addEventListener("popstate",function(){
  if(pushedDepth>0)pushedDepth--;
  if(screenStack.length){                        // 커미션·채팅 등 앱 내부 화면이 열려 있으면
    var item=screenStack.pop();
    if(typeof syncKbOpen==="function")syncKbOpen();
    navigatingBack=true;
    try{item.back();}catch(e){}
    navigatingBack=false;
    _cmSyncNow();                                 // 뒤로 가서 화면이 바뀌었으니 표시도 다시 맞춘다
    return;                                       // 한 단계 뒤로 가고 끝(아래 URL 라우팅 안 함)
  }
  var dbId=getPostIdFromPath();
  var post=dbId?POSTS.find(function(x){return x.dbId===dbId}):null;
  var userId=getUserIdFromPath();
  var reviewsCmId=getReviewsCmIdFromPath();   // 커미션보다 먼저 — /commission/<id>/reviews
  var commissionId=getCommissionIdFromPath();
  var emoticonId=getEmoticonIdFromPath();
  var boardId=getBoardFromPath();
  var tab=getTabFromPath();
  if(post)openPost(post.id);
  else if(userId)openUserProfile(userId);
  else if(reviewsCmId)cmOpenReviewsById(reviewsCmId);
  else if(commissionId)cmOpenCommissionById(commissionId);
  else if(emoticonId)openEmoticonPackById(emoticonId);
  else if(isRankingPath())openLeaderboard();
  else if(tab)openTabByKey(tab);
  else if(boardId)selectBoard(boardId);
  // 구글 로그인 리다이렉트 직후 Supabase가 URL의 인증 토큰을 정리하면서 popstate 이벤트를
  // 발생시키는 경우가 있음 — 그때 postsLoaded가 아직 false면(실제 글을 아직 못 불러온 상태)
  // 더미 글로 목록을 그리지 않고 기다림(loadRealPosts()가 끝나면 스스로 그림).
  else if(postsLoaded||!window.__paloHasBackend){
    /* 여기까지 왔다는 건 홈으로 돌아온 것이다.
       ⚠️ 하단 탭 강조도 같이 홈으로 돌려야 한다 — 안 그러면 화면은 홈인데 '내 정보'가 켜진 채
          남는다(뒤로가기로 프로필에서 나올 때 실제로 그랬다, 2026-08-13 실측). */
    curTab="home";
    if(typeof syncTabs==="function")syncTabs("home");
    if(state.board!=="all")selectBoard("all");else renderList();
  }
});

/* ---------- 로그인 (Supabase Auth) ---------- */
var authReady=false; // getSession()이 최소 1회 끝났는지 — 그 전엔 '로그인 필요' 대신 로딩 표시(가짜 로그아웃 깜빡임 방지)
// 비밀번호 재설정 링크로 들어왔는지 표시(주소는 곧 정리되므로 스크립트가 뜨자마자 확인).
// 우리가 붙인 ?pwreset=1 과 Supabase가 붙이는 type=recovery 둘 다 확인.
var _recoveryLink=(function(){
  try{return /(^|[?&#])pwreset=1/.test(location.search+location.hash)||/type=recovery/.test(location.search+location.hash);}
  catch(e){return false;}
})();
async function initAuth(){
  if(!window.supabase)return;
  // ⚠️ 이벤트 리스너를 가장 먼저 등록해야 함 — 재설정 링크의 PASSWORD_RECOVERY 이벤트는
  //    getSession()보다 먼저 발생할 수 있어, 나중에 등록하면 놓친다(새 비밀번호 창이 안 뜨던 원인).
  window.supabase.auth.onAuthStateChange(function(event,session){
    if(event==="SIGNED_IN")track("login");
    applySession(session);
    if(event==="PASSWORD_RECOVERY")setTimeout(openNewPasswordModal,200);
  });
  var res=await window.supabase.auth.getSession();
  await applySession(res.data.session);
  authReady=true;
  if(document.getElementById("myProfileView"))openProfile(); // 로딩 상태로 그려졌으면 실제 상태로 다시 그림
  // 이벤트를 놓쳤더라도 주소로 판별해 새 비밀번호 창을 띄움(이중 안전장치)
  if(_recoveryLink){
    setTimeout(function(){
      openNewPasswordModal();
      try{history.replaceState({},"",location.pathname);}catch(e){} // 새로고침 시 또 뜨지 않게 주소 정리
    },400);
  }
  // 모바일에서 확인을 마치고 리다이렉트로 돌아온 경우 이어서 처리
  if(typeof resumeAdultVerification==="function")resumeAdultVerification();
  // /board/adult 주소로 바로 들어온 경우 — 로그인 상태를 알게 된 지금 다시 판단한다
  // (딥링크 처리는 부팅 시점에 일어나서 그때는 인증 여부를 알 수 없다)
  if(state.board==="adult"&&!isAdultVerified()){
    state.board="all";
    if(typeof renderList==="function")renderList();
    setTimeout(function(){AUTH.user?openAdultGate():openLoginModal();},300);
  }
  // PWA(홈 화면 추가)에서 백그라운드→복귀 시 세션이 로그아웃처럼 보이던 문제 완화:
  // 화면이 다시 보일 때 세션을 재확인해서 살아있으면 로그인 상태를 자동 복원(자동 토큰 갱신도 재개됨).
  document.addEventListener("visibilitychange",function(){
    if(document.visibilityState==="visible")recheckAuthSession();
  });
}
async function recheckAuthSession(){
  if(!window.supabase)return;
  try{
    var res=await window.supabase.auth.getSession();
    var sid=res.data.session?res.data.session.user.id:null;
    var cur=AUTH.user?AUTH.user.id:null;
    if(sid!==cur)await applySession(res.data.session); // 상태가 달라졌을 때만 다시 반영
  }catch(e){}
}
var globalChatNotifUserId=null;
async function applySession(session){
  // 계정이 바뀌면(로그인/로그아웃/전환) 사용자별 데이터(내 좋아요·북마크·채팅)를 다음 이동 때 강제로 새로 불러오도록
  // throttle 타임스탬프와 채팅 캐시를 리셋한다(안 그러면 8초간 이전 계정 기준 데이터가 남을 수 있음).
  var _prevUid=AUTH.user?AUTH.user.id:null, _newUid=session?session.user.id:null;
  if(_prevUid!==_newUid){postsLoadedAt=0;cmLoadedAt=0;chatListCache=null;}
  AUTH.user=session?session.user:null;
  AUTH.profile=null;
  if(AUTH.user){
    var res=await window.supabase.from("profiles").select("*").eq("id",AUTH.user.id).single();
    if(!res.error)AUTH.profile=res.data;
    ME.nick=AUTH.profile?AUTH.profile.nickname:"새싹 작가";
    if(globalChatNotifUserId!==AUTH.user.id){
      globalChatNotifUserId=AUTH.user.id;
      initGlobalChatNotifications();
    }
    // 이미 알림 권한을 켠 유저면 로그인 시 이 계정으로 구독을 확실히 저장(기기별 1회)
    if(typeof subscribeToPush==="function"&&notifPermState()==="granted")subscribeToPush();
    loadMyFollows(); // 내 팔로우 목록 로드
    // 뮤트·메모가 도착하면 목록에 반영한다. ⚠️ 단, 홈 목록을 보고 있을 때만 —
    // 이건 부팅 때 로그인한 사람에게만 실행되는데, 딥링크(/commission/6 등)로 들어온 순간에
    // 그냥 renderList()를 부르면 그 화면을 홈으로 덮어쓰고 주소도 '/'로 바꿔 버린다.
    loadMyNotes().then(function(){if(onHomeListNow())renderList();});
    loadMyPostBookmarks(); // 저장한 글
    loadMyEmoticons(); // 담아둔 이모티콘 팩
    maybeShowConsent(); // 신규 가입자면 약관·개인정보 동의 창 표시
    maybeRegisterReferral(); // 초대 링크를 타고 왔다면 이번 로그인에서 초대 관계를 확정
    guestClaimAll(); // 비로그인으로 보낸 문의가 있으면 이 계정의 일반 채팅으로 넘겨받기
  }else{
    ME.nick="나";
    globalChatNotifUserId=null;
    unsubscribeFromNotifications();
    NOTIFS=NOTIFS.filter(function(n){return !n.dbId});
    FOLLOW=new Set();FOLLOW_NAME={}; // 로그아웃 시 팔로우 비움
    MY_NOTES={};_unmuted=new Set();  // 뮤트·메모도 함께 비움(다른 사람 것이 남으면 안 된다)
    POST_BM=new Set();               // 저장한 글도 비움
    syncNotifBadge();
  }
  if(document.getElementById("myProfileView"))openProfile();
}
// ===== 구글/네이버 로그인 =====
var GOOGLE_CLIENT_ID="622866923710-mcbkmbrcvnv0o3a7uefjqaqr6e5afbhk.apps.googleusercontent.com";
var GOOGLE_G_SVG='<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
function _gisReady(){return !!(window.google&&window.google.accounts&&window.google.accounts.id);}
// 네이버 로그인 노출 스위치: 네이버 개발자센터 '검수'가 승인되면 이 값을 true로만 바꿔 배포하면 네이버 버튼이 다시 나타남.
// (검수 전에는 앱 소유자만 로그인 가능하므로 일반 사용자에게 잠시 숨김)
var NAVER_LOGIN_ENABLED=true; // 2026-08-14 네이버 검수 승인 → 일반 사용자 로그인 개방
// 트위터(X) 로그인 노출 스위치 — X 개발자 앱을 만들고 Supabase에 키를 넣은 뒤 true로 바꿔 배포하면 버튼이 나타남.
// (설정 전에 켜 두면 눌렀을 때 오류만 나므로 기본은 꺼 둠. docs/트위터-로그인-설정.md 참고)
var TWITTER_LOGIN_ENABLED=true;
// 로그인 진입점(여러 곳에서 openLogin 대신 이 이름으로 호출) — 구글+네이버가 함께 있는 모달을 엶.
function loginWithGoogle(){ openLoginModal(); }
// 트위터(X)로 로그인.
// ⚠️ provider 문자열은 "twitter"가 아니라 **"x"** 다(OAuth 2.0 방식). 예전 1.0a 방식이 "twitter"이고 곧 없어진다.
function loginWithTwitter(){
  var hint=document.getElementById("loginHint");if(hint)hint.textContent="X로 이동 중…";
  window.supabase.auth.signInWithOAuth({provider:"x",options:{redirectTo:window.location.origin}});
}
// 네이버로 로그인: 서버(start)로 이동해 네이버 인증 시작
function loginWithNaver(){
  var hint=document.getElementById("loginHint");if(hint)hint.textContent="네이버로 이동 중…";
  location.href="/api/auth/naver/start";
}
function _loginRedirectFallback(){
  window.supabase.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin}});
}
async function _makeLoginNonce(){
  var nonce=btoa(String.fromCharCode.apply(null,crypto.getRandomValues(new Uint8Array(32))));
  var buf=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(nonce));
  var hashed=Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,"0");}).join("");
  return {nonce:nonce,hashed:hashed};
}
async function openLoginModal(){
  var m=document.getElementById("loginModal");if(!m)return;
  var gwrap=document.getElementById("gsiButton");
  // 네이버 버튼은 검수 승인 전까지 숨김(NAVER_LOGIN_ENABLED로 제어)
  var nvBtn=document.querySelector(".login-naver-btn");
  if(nvBtn)nvBtn.style.display=NAVER_LOGIN_ENABLED?"flex":"none";
  var twBtn=document.querySelector(".login-x-btn");
  if(twBtn)twBtn.style.display=TWITTER_LOGIN_ENABLED?"flex":"none";
  // 항상 '로그인' 모드로 열고 입력값은 비움(제목·안내문구·버튼 문구는 setLoginMode가 맞춰줌)
  ["lgEmail","lgPw","lgPw2","lgNick"].forEach(function(id){var el=document.getElementById(id);if(el)el.value="";});
  setLoginMode("login");
  // 구글 버튼: **보이는 건** 네이버·X와 같은 모양의 우리 버튼이지만,
  // **실제 클릭은** 그 위에 투명하게 겹쳐 둔 진짜 GIS 버튼이 받는다.
  // ⚠️ 왜 — 리다이렉트(signInWithOAuth)는 Supabase 주소를 거치므로 구글 동의 화면에
  //    'commi'가 아니라 "…supabase.co로 이동"이 떠 버린다(2026-08-08 사용자 신고).
  //    우리 클라이언트 ID로 뜨는 GIS 팝업은 'commi'가 나온다. 그런데 GIS 버튼은
  //    생김새를 바꿀 수 없으므로, 보이는 버튼과 클릭받는 버튼을 분리했다.
  // ⚠️ PWA(홈 화면 추가)는 팝업이 막혀 GIS가 400을 내므로 리다이렉트를 유지한다(2026-08-04 확인).
  //    GIS가 없거나 준비가 실패해도 리다이렉트 버튼으로 내려간다 — 로그인이 잠기는 일은 없다.
  var gHtml='<button type="button" class="lg-social" onclick="_loginRedirectFallback()">'+
    '<span class="lg-social-ic gg">'+GOOGLE_G_SVG+'</span>Google로 계속하기</button>';
  if(gwrap)gwrap.innerHTML=gHtml;
  m.classList.add("open");document.body.style.overflow="hidden";
  if(gwrap&&!isStandalonePWA()&&_gisReady()){
    try{
      var n=await _makeLoginNonce();
      google.accounts.id.initialize({
        client_id:GOOGLE_CLIENT_ID,
        callback:function(resp){onGoogleCredential(resp,n.nonce);},
        nonce:n.hashed,
        ux_mode:"popup",
        auto_select:false,
        cancel_on_tap_outside:true
      });
      /* 접근성(6회차 점검): 예전엔 보이는 버튼이 Tab을 받는데 클릭이 막혀 있고(pointer-events:none),
         진짜 GIS 버튼은 aria-hidden이라 스크린리더가 못 읽었다 — 키보드·스크린리더로는
         구글 로그인이 불가능했다. 역할을 바꾼다: 보이는 버튼을 장식으로(tabindex=-1, aria-hidden),
         GIS 겹침층은 읽히게. 포커스 표시는 .lg-gwrap:focus-within이 담당(GIS가 투명이라 안 보이므로).
         ⚠️ gHtml 원본은 건드리지 않는다 — GIS 실패 시 폴백으로 단독 사용될 때는 눌리고 읽혀야 한다. */
      gwrap.innerHTML='<div class="lg-gwrap">'+
        gHtml.replace('<button type="button" class="lg-social"','<button type="button" class="lg-social" tabindex="-1" aria-hidden="true"')+
        '<div class="lg-gis"></div></div>';
      google.accounts.id.renderButton(gwrap.querySelector(".lg-gis"),
        {theme:"outline",size:"large",type:"standard",text:"continue_with",shape:"pill",width:280,locale:"ko"});
    }catch(e){ gwrap.innerHTML=gHtml; }
  }
}
function closeLoginModal(){var m=document.getElementById("loginModal");if(m)m.classList.remove("open");document.body.style.overflow="";}

/* ===== commi 자체 회원가입·로그인 (이메일 + 비밀번호) =====
   Supabase Auth의 이메일 계정 기능을 사용. 소셜 로그인(구글·네이버)과 같은 회원으로 취급되며,
   가입 시 handle_new_user 트리거가 프로필·닉네임을 만들고, 약관 동의 창도 동일하게 뜬다.
   모드: login(로그인) / signup(회원가입) / reset(비밀번호 찾기) / newpw(새 비밀번호 설정) */
var _loginMode="login";
var LOGIN_ID_DOMAIN="users.commi.kr"; // 아이디 계정을 Supabase에 저장할 때 쓰는 내부 도메인(메일 발송 없음)
var LOGIN_ID_RE=/^[a-z][a-z0-9_]{3,19}$/;
// 아이디로 입력했으면 내부 이메일로 바꿔줌. '@'가 있으면 이메일로 그대로 사용.
function _idToEmail(v){v=String(v||"").trim();return v.indexOf("@")>-1?v:(v.toLowerCase()+"@"+LOGIN_ID_DOMAIN);}
function _lgEl(id){return document.getElementById(id);}
function _lgSubmitLabel(mode){return mode==="signup"?"가입하기":mode==="reset"?"재설정 메일 보내기":mode==="newpw"?"비밀번호 변경":"로그인";}
function setLoginMode(mode){
  _loginMode=mode;
  var show=function(id,on){var el=_lgEl(id);if(el)el.style.display=on?"":"none";};
  var title=_lgEl("loginTitle"),desc=_lgEl("loginDesc"),submit=_lgEl("lgSubmit"),hint=_lgEl("loginHint");
  if(hint)hint.textContent="";
  var isLogin=mode==="login",isSignup=mode==="signup",isReset=mode==="reset",isNew=mode==="newpw";
  show("loginSocial",isLogin);                 // 소셜 버튼은 로그인 화면에서만
  show("lgSafeBox",isLogin||isSignup);         // 안전 안내는 계정을 만들거나 들어올 때만 의미 있음
  // "구글 로그인이 안 되나요? 다른 방법으로" 버튼은 제거됨(2026-08-08 사용자 요청).
  // 구글이 안 되는 환경(PWA·GIS 실패)은 openLoginModal이 알아서 리다이렉트 버튼으로 내려간다.
  show("lgEmail",!isNew);                      // 새 비밀번호 설정에선 이메일 입력 불필요
  show("lgPw",!isReset);
  show("lgPw2",isSignup||isNew);
  show("lgNick",isSignup);
  show("lgToSignup",isLogin); show("lgToReset",isLogin); show("lgToLogin",isSignup||isReset);
  if(title)title.textContent=isSignup?"회원가입":isReset?"비밀번호 찾기":isNew?"새 비밀번호":"로그인";
  if(desc)desc.textContent=isSignup?"이메일 없이 아이디만으로 가입할 수 있어요."
    :isReset?"이메일로 가입한 계정만 재설정 링크를 받을 수 있어요."
    :isNew?"새로 사용할 비밀번호를 입력해주세요."
    :"그림 그리는 사람들의 커뮤니티";
  var idIn=_lgEl("lgEmail");
  if(idIn){
    idIn.placeholder=isSignup?"아이디 (영문 소문자·숫자 4~20자)":isReset?"가입한 이메일":"아이디 또는 이메일";
    idIn.type=isReset?"email":"text";
    idIn.setAttribute("autocomplete",isSignup?"username":isReset?"email":"username");
  }
  var nick=_lgEl("lgNick");if(nick)nick.placeholder="닉네임 (2~12자, 미입력 시 아이디)";
  if(submit)submit.textContent=_lgSubmitLabel(mode);
  var pw=_lgEl("lgPw");if(pw){pw.placeholder=isSignup||isNew?"비밀번호 (8자 이상)":"비밀번호";pw.setAttribute("autocomplete",isSignup||isNew?"new-password":"current-password");}
}
function loginSubmit(){
  if(_loginMode==="signup")return emailSignup();
  if(_loginMode==="reset")return sendResetEmail();
  if(_loginMode==="newpw")return applyNewPassword();
  return emailLogin();
}
// Supabase가 주는 영어 오류 메시지를 사용자에게 보여줄 한국어 문구로 바꿈
function authErrMsg(msg){
  msg=String(msg||"");
  if(/Invalid login credentials/i.test(msg))return "이메일 또는 비밀번호가 맞지 않아요.";
  if(/Email not confirmed/i.test(msg))return "이메일 인증이 아직 안 됐어요. 메일함에서 인증 링크를 눌러주세요.";
  if(/User already registered|already been registered/i.test(msg))return "이미 가입된 이메일이에요. 로그인하거나 비밀번호 찾기를 이용해주세요.";
  if(/Password should be at least/i.test(msg))return "비밀번호가 너무 짧아요. 8자 이상으로 만들어주세요.";
  if(/rate limit|too many requests/i.test(msg))return "요청이 많아 잠시 제한됐어요. 잠시 후 다시 시도해주세요.";
  if(/Unable to validate email|invalid format/i.test(msg))return "이메일 주소 형식을 확인해주세요.";
  if(/email address.*is invalid|invalid email/i.test(msg))return "사용할 수 없는 이메일 주소예요. 실제로 쓰는 이메일을 입력해주세요.";
  if(/For security purposes|after \d+ seconds/i.test(msg))return "잠시 후 다시 시도해주세요.";
  // 이메일 변경을 확정하면 Supabase가 다른 세션들을 로그아웃시킨다 → 열려 있던 화면에서
  // 이어서 저장을 누르면 이 오류가 난다(2026-08-09 실사용자 로그에서 6회 확인)
  if(/Session not found|session_not_found/i.test(msg))return "로그인이 풀렸어요. 새로고침 후 다시 로그인해서 시도해주세요.";
  return "처리에 실패했어요: "+msg;
}
function _lgBusy(on,label){
  var b=_lgEl("lgSubmit");if(!b)return;
  b.disabled=on;
  // 버튼 문구만 되돌린다(setLoginMode를 부르면 방금 띄운 오류 안내가 지워지므로 쓰지 않음)
  b.textContent=on?(label||"처리 중…"):_lgSubmitLabel(_loginMode);
}
function _lgHint(text){var h=_lgEl("loginHint");if(h)h.textContent=text||"";}
async function emailLogin(){
  var idOrEmail=((_lgEl("lgEmail")||{}).value||"").trim(),pw=(_lgEl("lgPw")||{}).value||"";
  if(!idOrEmail||!pw){_lgHint("아이디와 비밀번호를 입력해주세요.");return;}
  _lgBusy(true,"로그인 중…");
  try{
    if(idOrEmail.indexOf("@")>-1){ // 이메일로 로그인
      var r=await window.supabase.auth.signInWithPassword({email:idOrEmail,password:pw});
      if(r.error){_lgHint(authErrMsg(r.error.message));_lgBusy(false);return;}
    }else{
      // 아이디 로그인 — 대부분은 '아이디@내부도메인'이므로 Supabase로 바로 시도(서버를 안 거쳐 빠름).
      var direct=await window.supabase.auth.signInWithPassword({email:_idToEmail(idOrEmail),password:pw});
      if(direct.error){
        // 복구용 이메일을 등록해 로그인 이메일이 바뀐 계정일 수 있으니, 그때만 서버에서 계정을 찾아 처리
        var res=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},
          body:JSON.stringify({loginId:idOrEmail.toLowerCase(),password:pw})});
        var j=null;try{j=await res.json();}catch(e){}
        if(!res.ok||!j||!j.ok){_lgHint((j&&j.message)||"아이디 또는 비밀번호가 맞지 않아요.");_lgBusy(false);return;}
        var s=await window.supabase.auth.setSession({access_token:j.access_token,refresh_token:j.refresh_token});
        if(s.error){_lgHint("로그인 처리에 실패했어요. 다시 시도해주세요.");_lgBusy(false);return;}
      }
    }
    closeLoginModal();toast("로그인했어요","✓"); // 세션 반영은 onAuthStateChange가 처리
  }catch(e){_lgHint(authErrMsg(e&&e.message));}
  _lgBusy(false);
}
/* ===== 복구용 이메일 등록 =====
   아이디로 가입한 계정은 연결된 메일함이 없어 비밀번호를 찾을 수 없다.
   여기서 실제 이메일을 등록하면 확인 메일이 가고, 링크를 누르면 그 이메일이 계정에 연결돼
   이후 "비밀번호 찾기"를 쓸 수 있다. 아이디 로그인은 login_ids 표 덕분에 그대로 유지된다. */
/* 아이디로 가입한 계정인가 — 복구용 이메일을 등록할 수 있는 유일한 대상.
   ⚠️ 소셜 계정을 provider로만 가르면 안 된다: 네이버는 서버가 admin.createUser로
      실제 이메일을 넣어 만들기 때문에 Supabase 안에서는 provider가 'email'이다
      (표식은 user_metadata.provider="naver"에만 있다).
   ⚠️ 소셜 계정이 여기서 이메일을 바꾸면 등록이 아니라 **사고**가 된다 —
      네이버 로그인은 이메일로 계정을 찾으므로, 바꾼 뒤 네이버로 다시 로그인하면
      옛 이메일로 새 계정이 만들어져 계정이 둘로 갈라진다. 구글·X도 프로필 이메일이
      실제와 어긋난다. 그리고 애초에 해줄 수 있는 게 없다 — 복구는 그 서비스 몫이다. */
function isIdAccount(){
  var u=AUTH.user;if(!u)return false;
  var md=u.user_metadata||{};
  if(md.signup_type==="id"||md.login_id)return true;   // 가입 라우트(/api/auth/signup)가 남기는 표식
  if(md.provider==="naver")return false;                // 네이버 (위 주석 참고)
  if(/@users\.commi\.kr$/i.test(u.email||""))return true; // 표식 없는 예전 아이디 계정 폴백
  return false;                                          // 구글·X 등 나머지 전부
}
function openRecoveryEmail(){
  if(!isIdAccount()){toast("구글·네이버·X로 가입한 계정은 그 서비스에서 복구할 수 있어 등록이 필요 없어요");return;}
  var m=document.getElementById("recoveryModal");if(!m)return;
  var cur=(AUTH.user&&AUTH.user.email)||"";
  var isInternal=/@users\.commi\.kr$/i.test(cur);
  var info=document.getElementById("recoveryCurrent");
  if(info)info.textContent=isInternal?"아직 등록된 이메일이 없어요.":("현재 등록된 이메일: "+cur);
  var inp=document.getElementById("recoveryInput");if(inp)inp.value="";
  var hint=document.getElementById("recoveryHint");if(hint)hint.textContent="";
  m.classList.add("open");document.body.style.overflow="hidden";
}
function closeRecoveryEmail(){var m=document.getElementById("recoveryModal");if(m)m.classList.remove("open");document.body.style.overflow="";}

/* ===== 19+ 게시판 게이트 로더 ==========================================
   실제 UI와 확인 로직은 /agegate.js 에 있다 — 이 파일에는 그 문구가 한 줄도 없다.
   (주의: 주석 안에서 별표 두 개 뒤에 슬래시가 오면 블록 주석이 거기서 닫힌다.)
   ⚠️ 광고 심사 봇은 응답 HTML만이 아니라 링크된 JS까지 훑는다. 화면에 한 번도 안 뜨는
      코드 때문에 사이트 전체가 잘못된 업종으로 분류됐다(2026-08-10 틱톡 광고 거부).
      그래서 게시판 이름·안내문·인증 UI를 통째로 별도 파일로 뺐고, 필요할 때만 받아온다.
   ⚠️ 옮긴 것은 위치뿐이다. 합격 판정은 여전히 서버(/api/auth/adult-verify)가 내린다. */
/* 성인 인증은 법(청소년보호법 시행령 제17조 기반 가이드라인)상 **연 1회** 재확인해야 한다.
   그래서 불리언만 보면 안 되고 인증 시각이 1년 안인지도 본다.
   ⚠️ 진짜 강제는 DB의 is_adult_verified()(RLS)가 한다 — 여기는 만료된 사용자에게
      게이트를 다시 띄워 주는 역할이다. 둘의 기준(1년)이 어긋나면 화면만 열리고
      글은 안 보이는 어정쩡한 상태가 되니 같이 고칠 것. */
function isAdultVerified(){
  var p=AUTH.profile;
  if(!p||!p.adult_verified||!p.adult_verified_at)return false;
  return (Date.now()-new Date(p.adult_verified_at).getTime())<365*24*3600*1000;
}

// palo.js가 배달된 버전을 그대로 따라가서 두 파일의 캐시가 어긋나지 않게 한다
var _APP_V=(function(){
  try{
    var s=document.querySelector('script[src*="/palo.js?v="]');
    var m=s&&/[?&]v=([^&]+)/.exec(s.getAttribute("src"));
    return m?m[1]:"";
  }catch(e){return "";}
})();
var _ageGateP=null;
function loadAgeGate(){
  if(window.__ageGateLoaded)return Promise.resolve();
  if(_ageGateP)return _ageGateP;
  _ageGateP=new Promise(function(resolve,reject){
    var s=document.createElement("script");
    // 배포에서는 압축본 — PaloApp이 심어 준 __paloMin 표식을 따른다(주석 노출 방지)
    s.src=(window.__paloMin?"/agegate.min.js":"/agegate.js")+(_APP_V?("?v="+_APP_V):"");
    s.onload=function(){resolve();};
    s.onerror=function(){_ageGateP=null;reject(new Error("agegate"));}; // 실패하면 다음에 다시 시도
    document.head.appendChild(s);
  });
  return _ageGateP;
}
function openAdultGate(){
  loadAgeGate().then(function(){window.__ageGate.open();},
                     function(){toast("잠시 후 다시 시도해주세요");});
}
/* 게시판을 열어 둔 경우에만 이름·이모지·안내문을 받아와 메뉴에 채워 넣는다.
   ⚠️ 표를 채운 뒤에는 이미 그려진 메뉴·상단 탭을 다시 그려야 반영된다. */
if(ADULT_BOARD_ENABLED){
  loadAgeGate().then(function(){
    window.__ageGate.registerBoard();
    ["boardNav","boardNavM","boardNavS"].forEach(function(id){
      var el=document.getElementById(id);
      if(el&&typeof renderNav==="function")renderNav(el);
    });
    if(typeof renderChips==="function")renderChips();
  },function(){});
}

// 모바일은 인증창이 새 페이지로 열려서 끝나면 ?adultVerify=1 로 돌아온다.
// 주소는 renderList()의 pushState 등으로 곧 정리되므로 스크립트가 뜨자마자 붙잡아 둔다
// (값만 여기서 보관하고, 처리는 /agegate.js가 한다).
var _adultReturnQS=(function(){
  try{return /(^|[?&])adultVerify=1/.test(location.search)?location.search:"";}catch(e){return "";}
})();
function resumeAdultVerification(){
  if(!_adultReturnQS)return;
  var qs=_adultReturnQS;_adultReturnQS="";
  loadAgeGate().then(function(){window.__ageGate.resume(qs);},function(){});
}
async function saveRecoveryEmail(){
  var inp=document.getElementById("recoveryInput"),hint=document.getElementById("recoveryHint"),btn=document.getElementById("recoverySaveBtn");
  var email=((inp||{}).value||"").trim();
  var setHint=function(t){if(hint)hint.textContent=t;};
  if(!email||email.indexOf("@")<1||email.indexOf(".")<0){setHint("이메일 주소를 확인해주세요.");return;}
  if(/@users\.commi\.kr$/i.test(email)){setHint("실제로 사용하는 이메일을 입력해주세요.");return;}
  if(!AUTH.user){setHint("로그인 상태를 확인해주세요.");return;}
  // 메뉴를 숨겼어도 함수는 남아 있으므로 저장 직전에 한 번 더 막는다(이중 안전장치).
  // 소셜 계정의 이메일을 바꾸면 네이버 로그인이 계정을 못 찾는 사고가 난다(isIdAccount 주석 참고).
  if(!isIdAccount()){setHint("외부 서비스로 가입한 계정은 복구용 이메일을 등록할 수 없어요.");return;}
  if(btn){btn.disabled=true;btn.textContent="보내는 중…";}
  try{
    var r=await window.supabase.auth.updateUser({email:email});
    if(r.error){setHint(authErrMsg(r.error.message));} // 실패하면 고칠 수 있게 창을 열어 둠
    else{
      closeRecoveryEmail(); // 성공하면 창을 닫고 안내는 토스트로
      toast("확인 메일을 보냈어요. 메일함에서 링크를 눌러주세요","✉️");
    }
  }catch(e){setHint(authErrMsg(e&&e.message));}
  if(btn){btn.disabled=false;btn.textContent="확인 메일 보내기";}
}
// 아이디 회원가입 — 서버(/api/auth/signup)가 인증 완료 상태로 계정을 만들고, 이어서 바로 로그인시킨다.
async function emailSignup(){
  var loginId=((_lgEl("lgEmail")||{}).value||"").trim().toLowerCase();
  var pw=(_lgEl("lgPw")||{}).value||"",pw2=(_lgEl("lgPw2")||{}).value||"";
  var nick=((_lgEl("lgNick")||{}).value||"").trim();
  if(!loginId){_lgHint("아이디를 입력해주세요.");return;}
  if(!LOGIN_ID_RE.test(loginId)){_lgHint("아이디는 영문 소문자로 시작하는 4~20자(영문·숫자·밑줄)로 만들어주세요.");return;}
  if(pw.length<8){_lgHint("비밀번호는 8자 이상으로 만들어주세요.");return;}
  if(pw!==pw2){_lgHint("비밀번호가 서로 달라요.");return;}
  if(nick&&(nick.length<2||nick.length>12)){_lgHint("닉네임은 2~12자로 입력해주세요.");return;}
  _lgBusy(true,"가입 중…");
  try{
    var res=await fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({loginId:loginId,password:pw,nickname:nick})});
    var j=null;try{j=await res.json();}catch(e){}
    if(!res.ok||!j||!j.ok){_lgHint((j&&j.message)||"가입에 실패했어요. 잠시 후 다시 시도해주세요.");_lgBusy(false);return;}
    // 가입 직후 바로 로그인
    var r=await window.supabase.auth.signInWithPassword({email:_idToEmail(loginId),password:pw});
    if(r.error){setLoginMode("login");_lgHint("가입은 됐어요. 아이디와 비밀번호로 로그인해주세요.");_lgBusy(false);return;}
    closeLoginModal();track("signup");toast("환영해요! 가입이 완료됐어요","🎉");
  }catch(e){_lgHint("가입 중 오류가 났어요: "+((e&&e.message)||e));}
  _lgBusy(false);
}
async function sendResetEmail(){
  var email=((_lgEl("lgEmail")||{}).value||"").trim();
  if(!email){_lgHint("가입한 이메일을 입력해주세요.");return;}
  // 아이디 계정의 내부 주소(아이디@users.commi.kr)는 실제로 받는 사람이 없어 메일이 반송된다.
  // 반송이 쌓이면 발송 평판이 나빠지므로 아예 보내지 않고 안내한다.
  if(new RegExp("@"+LOGIN_ID_DOMAIN.replace(/\./g,"\\.")+"$","i").test(email)){
    _lgHint("아이디로 가입한 계정은 먼저 '내 정보 → 설정 → 복구용 이메일'을 등록해야 재설정 링크를 받을 수 있어요.");return;
  }
  _lgBusy(true,"메일 보내는 중…");
  try{
    // ?pwreset=1 을 붙여 두면, 돌아왔을 때 이벤트를 놓쳐도 주소만 보고 새 비밀번호 창을 띄울 수 있다
    var r=await window.supabase.auth.resetPasswordForEmail(email,{redirectTo:location.origin+"/?pwreset=1"});
    if(r.error){_lgHint(authErrMsg(r.error.message));_lgBusy(false);return;}
    _lgHint("재설정 메일을 보냈어요. 메일함을 확인해주세요.");
    toast("비밀번호 재설정 메일을 보냈어요 ✉️");
  }catch(e){_lgHint(authErrMsg(e&&e.message));}
  _lgBusy(false);
}
async function applyNewPassword(){
  var pw=(_lgEl("lgPw")||{}).value||"",pw2=(_lgEl("lgPw2")||{}).value||"";
  if(pw.length<8){_lgHint("비밀번호는 8자 이상으로 만들어주세요.");return;}
  if(pw!==pw2){_lgHint("비밀번호가 서로 달라요.");return;}
  _lgBusy(true,"변경 중…");
  try{
    var r=await window.supabase.auth.updateUser({password:pw});
    if(r.error){_lgHint(authErrMsg(r.error.message));_lgBusy(false);return;}
    closeLoginModal();toast("비밀번호를 바꿨어요","✓");
  }catch(e){_lgHint(authErrMsg(e&&e.message));}
  _lgBusy(false);
}
// 비밀번호 재설정 링크로 들어온 경우 — 새 비밀번호 입력 창을 띄움
function openNewPasswordModal(){
  var m=_lgEl("loginModal");if(!m)return;
  ["lgEmail","lgPw","lgPw2","lgNick"].forEach(function(id){var el=_lgEl(id);if(el)el.value="";});
  setLoginMode("newpw");
  m.classList.add("open");document.body.style.overflow="hidden";
}
async function onGoogleCredential(resp,rawNonce){
  var hint=document.getElementById("loginHint");if(hint)hint.textContent="로그인 중…";
  try{
    var r=await window.supabase.auth.signInWithIdToken({provider:"google",token:resp.credential,nonce:rawNonce});
    if(r.error){if(hint)hint.textContent="로그인 실패: "+r.error.message;toast("로그인 실패: "+r.error.message);return;}
    closeLoginModal();toast("로그인했어요","✓");
    // 세션 반영은 onAuthStateChange→applySession이 처리(프로필 로드·동의 게이트 등)
  }catch(e){if(hint)hint.textContent="로그인 오류: "+((e&&e.message)||e);}
}
// ===== 이용약관·개인정보 처리방침 동의 (신규 가입 시 필수) =====
// agreed_at이 비어있는 신규 가입자만 표시. 동의하면 서버(agree_to_terms)에 시각 기록.
function maybeShowConsent(){
  if(!AUTH.user||!AUTH.profile)return;
  if(AUTH.profile.agreed_at)return;           // 이미 동의함
  var m=document.getElementById("consentModal");if(!m)return;
  var t=document.getElementById("consentTerms"),p=document.getElementById("consentPrivacy"),a=document.getElementById("consentAll");
  if(t)t.checked=false;if(p)p.checked=false;if(a)a.checked=false;
  consentCheck();
  m.classList.add("open");
  document.body.style.overflow="hidden";
}
function consentToggleAll(on){
  var t=document.getElementById("consentTerms"),p=document.getElementById("consentPrivacy");
  if(t)t.checked=on;if(p)p.checked=on;
  consentCheck();
}
function consentCheck(){
  var t=document.getElementById("consentTerms"),p=document.getElementById("consentPrivacy");
  var a=document.getElementById("consentAll"),b=document.getElementById("consentOkBtn");
  var both=!!(t&&t.checked&&p&&p.checked);
  if(a)a.checked=both;
  if(b)b.disabled=!both;
}
function closeConsent(){
  var m=document.getElementById("consentModal");if(m)m.classList.remove("open");
  document.body.style.overflow="";
}
async function submitConsent(){
  var t=document.getElementById("consentTerms"),p=document.getElementById("consentPrivacy");
  if(!(t&&t.checked&&p&&p.checked))return;
  if(!AUTH.user||!window.supabase){toast("로그인 상태를 확인해주세요");return;}
  var b=document.getElementById("consentOkBtn");
  if(b){b.disabled=true;b.textContent="처리 중…";}
  try{
    var res=await window.supabase.rpc("agree_to_terms");
    if(res.error){toast("동의 처리 실패: "+res.error.message);if(b){b.disabled=false;b.textContent="동의하고 시작하기";}return;}
    if(AUTH.profile)AUTH.profile.agreed_at=new Date().toISOString();
    closeConsent();
    toast("환영해요! commi에 오신 걸 축하해요","🎉");
  }catch(e){
    toast("동의 처리 중 오류: "+((e&&e.message)||e));
    if(b){b.disabled=false;b.textContent="동의하고 시작하기";}
  }
}
async function declineConsent(){
  closeConsent();
  await logout(); // 동의 안 하면 로그아웃 → 서비스 미사용
}
async function logout(){
  await window.supabase.auth.signOut();
  chatListCache=null; // 다른 계정이 이전 사용자의 채팅 목록을 보지 않도록 캐시 비움
  toast("로그아웃했어요");
  openProfile();
}

/* HTML 이스케이프. '도 &#39;로 바꾼다(2026-08-14 보강) — 이 코드베이스의 HTML 속성은 전부
   큰따옴표라 당장 뚫린 곳은 없었지만, 나중에 누가 홑따옴표 속성을 하나만 써도 그 순간
   XSS 통로가 되는 구조였다. 인라인 onclick 안의 esc(cmQ(u)) 이중 이스케이프도 안전하다 —
   HTML 엔티티가 먼저 풀린 뒤 JS가 파싱하므로 cmQ의 백슬래시가 그대로 살아 있다. */
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function boardName(id){
  for(var g of BOARDS)for(var b of g.items)if(b.id===id)return b.name;
  if(id==="trade")return"커미션 구인구직";
  if(id==="review")return"커미션 후기";
  return"전체 글";
}
function catFor(p){return CATMAP[p.board]||{label:"글",cls:"free-c"}}
// 게시판별 이모지. 글쓰기의 게시판 고르는 자리에서 한눈에 구분되게 쓴다.
// 색은 따로 정하지 않고 CATMAP의 말머리 색(talk-c·help-c…)을 그대로 가져와,
// 고를 때 본 색과 글에 붙는 말머리 색이 어긋나지 않게 한다.
var BOARD_EMOJI={talk:"💬",doodle:"✏️",wip:"🎨",sketch:"📖",ask:"❓",vote:"🗳️",crit:"👀",ilchim:"⚡",
  collab:"🤝",challenge:"🏁",tip:"💡",request:"🎁",recruit:"📢",used:"📦",suggest:"🛠️",
  review:"⭐",trade:"💰",all:"📋"};
function boardEmoji(id){return BOARD_EMOJI[id]||"📄";}
function boardCls(id){return (CATMAP[id]&&CATMAP[id].cls)||"free-c";}
// 작업 단계(러프/선화/채색/완성) 라벨은 그 개념이 있는 게시판에서만 표시.
// 자유게시판 등에 그냥 올린 그림에 "완성"이 붙던 문제 방지(예전에 저장된 글도 함께 해결).
function stageTagHTML(p){
  if(!p.stage)return"";
  if(p.board!=="wip"&&p.board!=="sketch")return"";
  return '<span class="nstage">'+esc(p.stage)+'</span>';
}
function postThumbHTML(p){
  var imgCount=p.images?p.images.length:((p.thumb!=="none")?(Math.floor(p.likes/18)%6+1):0); // demo image-count badge
  if(p.images&&p.images.length){
    return '<div class="nthumb">'+thumbImgHTML(p.images[0],'style="width:100%;height:100%;object-fit:cover"')+
      stageTagHTML(p)+
      (imgCount>1?'<span class="ncount">'+imgCount+'+</span>':'')+
    '</div>';
  }
  if(p.thumb==="none")return"";
  return '<div class="nthumb '+p.thumb+'">'+
    stageTagHTML(p)+
    (imgCount>1?'<span class="ncount">'+imgCount+'+</span>':'')+
  '</div>';
}
function fmtViews(n){return n>=1000?(n/1000).toFixed(1)+"k":n}

/* ===== 사이드 메뉴(드로어) 목록 그리기 ==================================
   데스크톱 왼쪽 사이드바(#boardNav)·시트(#boardNavS)와 **마크업이 다르다.**
   그래서 renderNav가 드로어일 때만 이쪽으로 넘긴다 — 호출하는 곳 5군데를 안 건드리려고
   함수를 새로 부르게 하지 않고 여기서 갈랐다.
   ⚠️ 지금은 아무 게시판도 빼지 않는다. '전체 글'도 원래 자리인 '이야기' 그룹에 그대로 둔다
      (예전엔 주요 메뉴로 올렸다가 '이야기' 그룹에 수다 하나만 남아 허전해져서 되돌렸다).
      다시 뺄 일이 생기면 여기에 id를 넣으면 된다 — 그룹 이름으로 빼면 나중에 그 그룹에
      게시판이 추가됐을 때 같이 사라지므로 반드시 id로 할 것. */
var DW_SKIP=[];
function _dwScreenKey(){var t=screenStack[screenStack.length-1];return t?t.key:"";}
function _dwItem(on,icon,name,onclick,badge){
  return '<div class="dw-item'+(on?" on":"")+'" onclick="'+onclick+'">'+
    '<span class="dw-ic">'+icon+'</span><span class="dw-nm">'+esc(name)+'</span>'+
    (badge?'<span class="dw-badge">'+badge+'</span>':'')+'</div>';
}
var DW_IC_CM='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a8 8 0 1 1-3.2-6.4"/><path d="M21 4v5h-5"/></svg>';
var DW_IC_CHAT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.7 8.7 0 0 1-3.8-.9L3 20.5l1.5-4.9A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4z"/></svg>';
function renderDrawerNav(el){
  var scr=_dwScreenKey();
  var onFeed=!scr;                       // 화면 스택이 비어 있으면 글 목록(홈)을 보고 있는 것
  var h='<div class="dw-main">'+
    _dwItem(scr.indexOf("cm")===0,DW_IC_CM,"커미션","closeDrawer();openCommissionList()")+
    _dwItem(scr==="chatList"||scr==="chatRoom",DW_IC_CHAT,"채팅","closeDrawer();openChatList('home')")+
  '</div><div class="dw-div"></div>';
  BOARDS.forEach(function(g){
    var items=g.items.filter(function(b){return DW_SKIP.indexOf(b.id)<0;});
    if(!items.length)return;             // 남는 게 없는 그룹은 소제목도 그리지 않는다
    h+='<p class="dw-ghead">'+esc(g.group)+'</p>';
    items.forEach(function(b){
      var ic=CHIP_EMOJI[b.id]||"📄";
      h+=_dwItem(onFeed&&state.board===b.id,ic,b.name,"selectBoard('"+b.id+"')");
    });
  });
  el.innerHTML=h;
}
function renderNav(el){
  if(!el)return;
  if(el.id==="boardNavM")return renderDrawerNav(el);
  var h="";
  BOARDS.forEach(function(g){
    h+='<div class="bn-group'+(g.trade?' trade':'')+'"><p class="bn-gl">'+g.group+'</p>';
    g.items.forEach(function(b){
      var cnt=POSTS.filter(function(p){return p.board===b.id}).length;
      // 아이콘은 상단 게시판 탭과 동일한 이모지를 사용(없으면 기존 선 아이콘으로 대체)
      var ic=CHIP_EMOJI[b.id]?('<span class="bn-emo">'+CHIP_EMOJI[b.id]+'</span>'):b.icon;
      h+='<div class="bn-a'+(state.board===b.id?' on':'')+'" onclick="selectBoard(\''+b.id+'\')">'+ic+b.name+(cnt?'<span class="cnt">'+cnt+'</span>':'')+'</div>';
    });
    h+='</div>';
  });
  el.innerHTML=h;
}
// 상단 게시판 탭에 붙는 이모지(게시판 성격에 맞춤). 왼쪽 서랍 메뉴는 기존 선 아이콘 그대로.
var CHIP_EMOJI={all:"📋",talk:"💬",doodle:"✏️",wip:"🎨",sketch:"📚",ask:"❓",vote:"📊",crit:"💡",
  collab:"🤝",challenge:"🏆",tip:"📁",request:"🙏",recruit:"🔍",used:"📦",suggest:"🛠",ilchim:"💢"};
// 성격이 비슷한 게시판끼리 같은 색 계열로 묶음 — 색만 봐도 대략 어떤 종류인지 알 수 있게(파스텔 톤)
// g-all 전체(중립) / g-talk 이야기·소통(핑크) / g-art 그림·작업(퍼플) / g-trade 거래(블루) / g-event 함께·이벤트(그린) / g-etc 기타(그레이)
var CHIP_GROUP={all:"g-all",
  talk:"g-talk",ask:"g-talk",vote:"g-talk",
  doodle:"g-art",wip:"g-art",sketch:"g-art",crit:"g-art",ilchim:"g-art",
  request:"g-trade",recruit:"g-trade",used:"g-trade",
  collab:"g-event",challenge:"g-event",tip:"g-event",
  suggest:"g-etc"};
function chipsHTML(){
  var flat=[{id:"all",name:"전체 글"}];
  BOARDS.forEach(function(g){g.items.forEach(function(b){if(b.id!=="all")flat.push(b)})});
  return flat.map(function(b){
    var emo=CHIP_EMOJI[b.id]?'<span class="chip-emo">'+CHIP_EMOJI[b.id]+'</span>':'';
    var grp=CHIP_GROUP[b.id]||"g-etc"; // 성격별 색 계열
    return '<button class="chip '+grp+(state.board===b.id?' on':'')+'" onclick="selectBoard(\''+b.id+'\')">'+emo+b.name+'</button>';
  }).join("");
}
// 게시판 탭은 화면 최상단이 아니라 목록 위(최신·인기 탭 바로 아래)에 그림 → renderList가 이 HTML을 끼워 넣음
function boardTabsHTML(){
  return '<div class="boardtabs" id="catbar"><div class="catbar-inner" id="chips">'+chipsHTML()+'</div></div>';
}
function renderChips(){
  var el=document.getElementById("chips"); // 목록 화면이 아닐 땐(커미션·프로필 등) 없으므로 건너뜀
  if(el){saveChipScroll();el.innerHTML=chipsHTML();syncChipScroll();}
}
// 목록을 다시 그리면 게시판 탭도 새로 만들어져 가로 스크롤이 맨 앞으로 초기화됨.
// → 다시 그리기 직전 위치를 기억했다가 그대로 되돌려, 보고 있던 자리에 머무르게 한다.
var _chipScrollLeft=0,_tagScrollLeft=0,_tagScrollBoard=null; // 게시판 탭 / 말머리 바의 가로 스크롤 위치
function saveChipScroll(){
  var el=document.getElementById("chips");if(el)_chipScrollLeft=el.scrollLeft;
  // 말머리는 게시판마다 목록이 다르므로, 화면에 그려져 있던 말머리가 지금 게시판 것일 때만 위치를 보존한다.
  // (게시판을 바꾼 직후엔 state.board는 새 게시판인데 DOM은 아직 이전 게시판 말머리 → 그때는 0으로)
  var tb=document.querySelector(".tagbar");
  if(tb&&_tagScrollBoard===state.board)_tagScrollLeft=tb.scrollLeft;
  else if(_tagScrollBoard!==state.board)_tagScrollLeft=0;
}
function syncChipScroll(){
  var el=document.getElementById("chips");if(el)el.scrollLeft=_chipScrollLeft;
  var tb=document.querySelector(".tagbar");if(tb)tb.scrollLeft=_tagScrollLeft;
  _tagScrollBoard=state.board; // 방금 그린 말머리가 어느 게시판 것인지 기록
}
function renderHot(){
  var el=document.getElementById("hotList");if(!el)return;
  var top=sortHot(POSTS.filter(function(p){return p.board!=="trade"&&p.board!=="review"})).slice(0,3);
  el.innerHTML=top.map(function(p,i){
    return '<div class="hot" onclick="openPost('+p.id+')"><span class="rank serif">'+(i+1)+'</span><div><div class="ht">'+esc(p.title)+'</div><div class="hm">💬 '+p.comments.length+' · '+catFor(p).label+'</div></div></div>';
  }).join("");
}
function hotMultiplier(createdAt){
  if(!createdAt)return{mult:0.6,within7:false};
  var days=Math.floor((Date.now()-new Date(createdAt).getTime())/86400000);
  if(days<7)return{mult:2-0.2*days,within7:true};
  return{mult:0.6,within7:false}; // 7일째 배수(2-0.2*7)로 고정
}
function hotScore(p){
  var base=(p.views||0)*0.02+(p.likes||0)*1+(p.comments?p.comments.length:0)*0.2;
  var m=hotMultiplier(p.createdAt);
  return{score:base*m.mult,within7:m.within7};
}
function sortHot(arr){
  var picked=arr.filter(function(p){return p.isManagerPick});
  var rest=arr.filter(function(p){return !p.isManagerPick});
  var scored=rest.map(function(p){var r=hotScore(p);return{p:p,score:r.score,within7:r.within7};});
  var freshCount=scored.filter(function(x){return x.within7}).length;
  var pool=freshCount>10?scored.filter(function(x){return x.within7}):scored;
  pool.sort(function(a,b){return b.score-a.score});
  var sortedRest=pool.map(function(x){return x.p});
  if(!picked.length)return sortedRest;

  // 매니저 픽끼리 위치가 겹치면 최근에 지정한 게 그 자리를 차지하고, 밀린 픽은 다음 빈 자리로 밀려남
  var sortedPicked=picked.slice().sort(function(a,b){
    var posA=a.pickPosition||1,posB=b.pickPosition||1;
    if(posA!==posB)return posA-posB;
    return new Date(b.pickedAt||0)-new Date(a.pickedAt||0);
  });
  var placements=[];var nextFreeMin=1;
  sortedPicked.forEach(function(p){
    var pos=Math.max(p.pickPosition||1,nextFreeMin);
    placements.push({post:p,position:pos});
    nextFreeMin=pos+1;
  });

  var result=[];var pi=0,ri=0;
  var maxPos=placements[placements.length-1].position;
  for(var pos=1;pos<=maxPos;pos++){
    if(pi<placements.length&&placements[pi].position===pos){result.push(placements[pi].post);pi++;}
    else if(ri<sortedRest.length){result.push(sortedRest[ri]);ri++;}
  }
  while(ri<sortedRest.length){result.push(sortedRest[ri]);ri++;}
  return result;
}
/* ===== 검색 =====
   검색은 **전부 브라우저에서** 한다. loadRealPosts가 글·댓글을 이미 통째로 받아 두기
   때문에(POSTS[].content, POSTS[].comments) 서버를 한 번도 더 부르지 않는다 —
   그래서 입력 즉시 결과가 나오고, 요청 제한(rate limit)에도 걸리지 않는다.
   ⚠️ 이 방식은 '메모리에 올라온 글'까지만 찾는다. 글이 수천 건으로 늘면
      Supabase 기본 응답 상한(1000행)에 먼저 걸리므로, 그때는 검색보다 목록 로딩부터
      서버 페이징으로 바꿔야 한다(그 시점에 DB 전문검색 인덱스도 함께).
   ⚠️ 비공개·삭제된 글과 댓글, 권한 없는 게시판은 애초에 POSTS에 없다(RLS). 검색이
      따로 걸러낼 필요가 없고, 걸러내려 들면 오히려 기준이 두 곳으로 갈라진다. */
function _inAuthor(p,q){
  return (p.author||"").toLowerCase().indexOf(q)>-1||
         !!(p.reviewedNickname&&p.reviewedNickname.toLowerCase().indexOf(q)>-1);
}
/* scope: all(제목·본문·댓글) / title(제목만) / author(작성자만).
   ⚠️ 작성자는 all에 넣지 않는다 — 전용 탭이 따로 있고, 넣으면 두 탭의 결과가 겹쳐
      "글+댓글 5 / 작성자 3"처럼 합이 안 맞는 것처럼 보인다. */
function matchPost(p,q,scope){
  var inTitle=(p.title||"").toLowerCase().indexOf(q)>-1;
  if(scope==="title")return inTitle?{title:true,body:false,author:false,comment:null}:null;
  if(scope==="author")return _inAuthor(p,q)?{title:false,body:false,author:true,comment:null}:null;
  var hit={title:inTitle,body:false,author:false,comment:null};
  if((p.content||[]).join(" ").toLowerCase().indexOf(q)>-1)hit.body=true;
  var cs=p.comments||[];
  for(var i=0;i<cs.length;i++){
    if((cs[i].txt||"").toLowerCase().indexOf(q)>-1){hit.comment=cs[i];break;} // 첫 번째로 걸린 댓글만 보여준다
  }
  return (hit.title||hit.body||hit.comment)?hit:null;
}
/* 탭 3개의 건수를 **한 번의 순회로** 센다.
   ⚠️ matchPost를 탭마다 부르면 댓글을 세 번 훑는다. 지금 규모(글 27)에선 티도 안 나지만,
      목록을 다시 그릴 때마다 도는 자리라 처음부터 한 번만 돌게 해 둔다. */
function searchCounts(){
  var q=(state.query||"").toLowerCase();
  if(!q)return null;
  var c={all:0,title:0,author:0};
  baseFiltered().forEach(function(p){
    var t=(p.title||"").toLowerCase().indexOf(q)>-1;
    var b=(p.content||[]).join(" ").toLowerCase().indexOf(q)>-1;
    var m=(p.comments||[]).some(function(x){return (x.txt||"").toLowerCase().indexOf(q)>-1;});
    if(t||b||m)c.all++;
    if(t)c.title++;
    if(_inAuthor(p,q))c.author++;
  });
  return c;
}
/* 검색어를 <mark>로 감싸며 이스케이프한다.
   ⚠️ esc() 먼저 하고 나중에 감싸면 안 된다 — 이스케이프로 글자 수가 달라져서
      찾아 둔 위치가 어긋난다. 원문에서 잘라 조각마다 esc()를 걸어야 한다. */
function hlEsc(t,q){
  t=String(t==null?"":t);
  if(!q)return esc(t);
  var lo=t.toLowerCase(),lq=String(q).toLowerCase(),out="",i=0,j;
  if(!lq)return esc(t);
  while((j=lo.indexOf(lq,i))>-1){
    out+=esc(t.slice(i,j))+'<mark class="sh">'+esc(t.slice(j,j+lq.length))+'</mark>';
    i=j+lq.length;
  }
  return out+esc(t.slice(i));
}
// 걸린 자리 앞뒤만 잘라 보여준다(긴 본문·댓글이 목록을 밀어내지 않게)
function snippetAround(t,q,span){
  t=String(t==null?"":t).replace(/\s+/g," ").trim();span=span||28;
  var j=t.toLowerCase().indexOf(String(q).toLowerCase());
  if(j<0)return t.slice(0,span*2)+(t.length>span*2?"…":"");
  var s=Math.max(0,j-span),e=Math.min(t.length,j+q.length+span);
  return (s>0?"…":"")+t.slice(s,e)+(e<t.length?"…":"");
}
// 게시판 좁히기(searchBoard)를 **빼고** 나머지 조건만 적용한 목록.
// 게시판 드롭다운의 건수는 이걸로 센다 — 좁힌 뒤에 세면 고른 게시판만 1개 남아 다른 선택지가 사라진다.
function _searchScopeArr(){
  var arr=POSTS.slice();
  if(state.board==="all")arr=arr.filter(function(p){return p.board!=="adult"&&(state.query||(p.board!=="trade"&&p.board!=="review"))});
  else arr=arr.filter(function(p){return p.board===state.board});
  if(state.tag)arr=arr.filter(function(p){return p.category===state.tag});
  return arr;
}
// 검색어를 **빼고** 게시판·말머리까지만 적용한 목록. 탭별 건수를 셀 때도 이 기준을 쓴다
// (탭 건수와 실제 결과가 다른 기준으로 세지면 "12건이라더니 3건만 나온다"가 된다).
function baseFiltered(){
  var arr=_searchScopeArr();
  if(state.query&&state.searchBoard)arr=arr.filter(function(p){return p.board===state.searchBoard;});
  return arr;
}
/* 정확도 점수 — 검색 정렬에만 쓴다.
   제목에 있으면 가장 크게, 앞쪽에 나올수록 조금 더. 본문·댓글·작성자는 보조.
   ⚠️ 정답이 있는 계산이 아니다. "제목에 있는 글이 위로 온다" 정도만 지키면 충분하고,
      숫자를 정교하게 만들려 들면 왜 이 순서인지 아무도 설명할 수 없게 된다. */
function relScore(p,q){
  var s=0;
  var i=(p.title||"").toLowerCase().indexOf(q);
  if(i>-1)s+=100-Math.min(i,50);
  if((p.content||[]).join(" ").toLowerCase().indexOf(q)>-1)s+=30;
  var cm=(p.comments||[]).filter(function(c){return (c.txt||"").toLowerCase().indexOf(q)>-1;}).length;
  s+=Math.min(cm,5)*4;
  if(_inAuthor(p,q))s+=20;
  return s;
}
function filteredPosts(){
  var arr=baseFiltered();
  if(state.query){
    var q=state.query.toLowerCase();
    arr=arr.filter(function(p){ p._hit=matchPost(p,q,state.searchTab); return !!p._hit; });
  }
  if(state.sort==="hot")arr=sortHot(arr);
  /* 추천글(개념글): 좋아요 10개를 넘긴 글만, **넘긴 시각의 역순**.
     인기순(좋아요 수)이 아니다 — 새로 10개를 채운 글이 맨 위에 올라오고,
     다음 글이 10개를 채우면 한 칸씩 밀려난다(디시 개념글과 같은 방식). */
  if(state.sort==="best")arr=arr.filter(function(p){return p.bestAt;})
    .sort(function(a,b){return a.bestAt<b.bestAt?1:-1;});
  /* 정확도순 — 검색 중일 때만 뜻이 있다.
     ⚠️ 점수는 비교 함수 안에서 계산하지 않는다. 정렬은 같은 항목을 여러 번 비교하므로
        그 자리에서 계산하면 글 하나의 댓글을 수십 번 훑게 된다. 한 번 매겨 두고 그걸로 정렬한다. */
  if(state.sort==="rel"&&state.query){
    var _q=state.query.toLowerCase();
    arr.forEach(function(p){p._rel=relScore(p,_q);});
    arr=arr.slice().sort(function(a,b){
      return (b._rel-a._rel)||(a.createdAt<b.createdAt?1:-1); // 점수가 같으면 최신 글이 위로
    });
  }
  return arr;
}
function renderTrend(){
  var g={t1:"#e07aa6,#9784d6",t2:"#e0a074,#e07aa6",t3:"#7cc3e0,#9784d6",t4:"#a3c07a,#7cc3e0",t5:"#ecd291,#e0a074"};
  var keys=["t1","t2","t3","t4","t5"];
  var h='<div class="trend-lead"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 7-7"/><path d="M17 8h4v4"/></svg>이번 주 인기</div>';
  var top=sortHot(POSTS.filter(function(p){return p.board!=="trade"&&p.board!=="review"})).slice(0,5);
  top.forEach(function(p,i){
    h+='<div class="trend-item" onclick="openPost('+p.id+')"><span class="trend-rank">'+(i+1)+'</span>'+
       '<span class="trend-thumb" style="background:linear-gradient(135deg,'+g[keys[i%keys.length]]+')"><svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"8\" cy=\"10\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"12\" cy=\"8\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"16\" cy=\"10\" r=\"1.3\" fill=\"currentColor\" stroke=\"none\"/></svg></span>'+
       '<span class="trend-meta"><span class="tt">'+esc(p.title)+'</span><span class="ts">'+catFor(p).label+' · 추천 '+p.likes+'</span></span></div>';
  });
  var el=document.getElementById("trendStrip");if(el)el.innerHTML=h;
}
function CATICON(board){
  return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 15l4-4 3 3 4-4 5 5"/></svg>';
}
/* 검색 결과 맨 아래 표식. 화면에 들어오면 다음 묶음을 더 그린다.
   다 봤으면 감시 대신 끝났다는 문구를 남긴다 — 아무것도 없으면 "더 있는데 안 나오는 건가?"
   싶어서 계속 스크롤하게 된다. */
function moreSentinelHTML(total){
  if(total<=searchShown)
    return total>SEARCH_STEP?'<div class="more-end">결과를 모두 봤어요 · 총 '+total+'건</div>':'';
  return '<div class="more-sentinel" id="moreSentinel"><span class="ms-dot"></span><span class="ms-dot"></span><span class="ms-dot"></span></div>';
}
var MORE_MARGIN=500; // 바닥에 닿기 전에 미리 채워 끊김을 줄인다
function loadMoreSearch(){
  if(!state.query)return;
  if(_moreObs){_moreObs.disconnect();_moreObs=null;} // 다시 그리는 동안 두 번 불리지 않게
  searchShown+=SEARCH_STEP;
  renderList(); // 위쪽 내용은 그대로라 스크롤 위치는 유지된다
}
/* ⚠️ 관찰자는 그릴 때마다 새로 붙인다. renderList가 innerHTML을 통째로 갈아끼우므로
      이전에 관찰하던 요소는 이미 사라진 상태다(그대로 두면 다시는 불리지 않는다). */
function observeSearchMore(){
  if(_moreObs){_moreObs.disconnect();_moreObs=null;}
  var el=document.getElementById("moreSentinel");
  if(!el)return;
  if(typeof IntersectionObserver==="undefined")return; // 아래 스크롤 감시가 대신 맡는다
  _moreObs=new IntersectionObserver(function(es){
    if(es[0].isIntersecting)loadMoreSearch();
  },{rootMargin:MORE_MARGIN+"px 0px"});
  _moreObs.observe(el);
}
/* 스크롤로도 같은 판정을 한다 — IntersectionObserver 하나에만 기대지 않는 이유:
   ① 문서가 hidden이면 브라우저가 교차 계산을 아예 돌리지 않는다 ② 카카오톡·인스타 같은
   인앱 브라우저에서 관찰자가 조용히 안 뛰는 경우가 있다. 그러면 결과가 잘린 채 갇히고,
   사용자는 "왜 더 안 나오지" 하며 스크롤만 하게 된다. 둘 다 loadMoreSearch로 모인다. */
function _moreScrollCheck(){
  var el=document.getElementById("moreSentinel");
  if(!el)return;
  if(el.getBoundingClientRect().top<window.innerHeight+MORE_MARGIN)loadMoreSearch();
}
if(typeof window!=="undefined"){
  var _moreTick=false;
  window.addEventListener("scroll",function(){
    if(_moreTick)return; // 스크롤 한 번에 한 번만 — 프레임마다 재계산하면 목록이 버벅인다
    _moreTick=true;
    setTimeout(function(){_moreTick=false;_moreScrollCheck();},120);
  },{passive:true});
}
function pagerHTML(tp){
  var h='<nav class="pager" aria-label="페이지">';
  h+='<button class="pg-arrow" '+(page<=1?'disabled':'')+' onclick="gotoPage('+(page-1)+')" aria-label="이전">‹</button>';
  var start=Math.max(1,page-2), end=Math.min(tp,start+4); start=Math.max(1,end-4);
  if(start>1){h+='<button class="pg-num" onclick="gotoPage(1)">1</button>';if(start>2)h+='<span class="pg-dots">…</span>';}
  for(var i=start;i<=end;i++)h+='<button class="pg-num'+(i===page?' on':'')+'" onclick="gotoPage('+i+')">'+i+'</button>';
  if(end<tp){if(end<tp-1)h+='<span class="pg-dots">…</span>';h+='<button class="pg-num" onclick="gotoPage('+tp+')">'+tp+'</button>';}
  h+='<button class="pg-arrow" '+(page>=tp?'disabled':'')+' onclick="gotoPage('+(page+1)+')" aria-label="다음">›</button>';
  return h+'</nav>';
}
function gotoPage(n){page=n;renderList();window.scrollTo({top:0,behavior:"smooth"});}
// 지면 배분(오픈 초기 = 유저 광고만): 유료는 AD_PAID_SHARE=0이라 서빙 안 함(나중에 켜면 그 비중만큼 유료).
// 유저 광고는 각 광고 확률 = min(4%, 그 광고 points_spent 지분)로 뽑음 — 개당 4% 상한만 있고 '전체' 상한은 없어
// 광고가 많으면 최대 100%까지 유저 광고로 채워지고, 남는 확률(1 - 합)은 하우스(포인트 안내 자리)로 감.
function pickServedAd(){
  if(AD_PAID_SHARE>0&&Math.random()<AD_PAID_SHARE){
    var camp=pickServableCampaign();
    if(camp)return {type:'paid',camp:camp};
  }
  if(ACTIVE_ADS.length){
    var total=ACTIVE_ADS.reduce(function(s,a){return s+(a.points_spent||1);},0);
    var r=Math.random(),cum=0;
    for(var i=0;i<ACTIVE_ADS.length;i++){
      cum+=Math.min(AD_PER_AD_SHARE_MAX,(ACTIVE_ADS[i].points_spent||1)/total); // 개당 4% 상한
      if(r<cum)return {type:'user',ad:ACTIVE_ADS[i]};
    }
  }
  return null; // 남는 확률 → 하우스
}
// 서빙된 광고 배너 HTML. extraClass로 지면별 마진 등을 얹음(.d-ad, .side-ad). 유료 배너만 data-campaign-id를 달아 측정 대상이 됨.
function servedBannerHTML(s,extraClass){
  var ec=extraClass?(' '+extraClass):'';
  if(s.type==='paid'){
    return '<div class="ad ad-banner'+ec+'" role="complementary" aria-label="광고" data-campaign-id="'+s.camp.id+'" style="cursor:pointer;position:relative" onclick="openCampaignTarget('+s.camp.id+')">'+
      '<span class="ad-label">광고</span><img src="'+esc(s.camp.image_url)+'" alt="광고"></div>';
  }
  return '<div class="ad ad-banner'+ec+'" role="complementary" aria-label="광고" style="cursor:pointer;position:relative" onclick="'+adTargetOnclick(s.ad)+'">'+
    '<span class="ad-label">유저 광고</span>'+
    '<button class="ad-report-btn" onclick="reportAd('+s.ad.id+',event)" title="이 광고 신고">🚩</button>'+
    '<img src="'+esc(s.ad.image_url)+'" alt="유저 광고"></div>';
}
function houseAdHTML(extraClass){
  var ec=extraClass?(' '+extraClass):'';
  return '<div class="ad'+ec+'" role="complementary" aria-label="광고">'+
    '<span class="ad-label">AD</span>'+
    '<div class="ad-ph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" style="width:22px;height:22px"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m4 18 5-5 4 3 3-2 4 4"/></svg></div>'+
    '<div class="ad-body"><div class="ad-t">열심히 활동해서 포인트를 모아보세요!</div>'+
    '<div class="ad-d">포인트를 사용하여 이 자리에 광고를 집행할 수 있어요!</div></div>'+
  '</div>';
}
function adRow(extraClass){
  var s=pickServedAd();
  return s?servedBannerHTML(s,extraClass):houseAdHTML(extraClass);
}
// 정적 하우스 광고 지면(게시글 상세 댓글란 위 .d-ad, 데스크톱 사이드바 .ad-widget)을 실제 서빙으로 교체.
// 재고가 없으면 기존 정적 하우스 광고를 그대로 둠.
function replaceStaticAdSlot(el,extraClass){
  if(!el)return;
  var s=pickServedAd();
  if(!s)return;
  var tmp=document.createElement('div');
  tmp.innerHTML=servedBannerHTML(s,extraClass);
  el.replaceWith(tmp.firstElementChild);
  observeAdBanners();
}
function renderDetailAd(){replaceStaticAdSlot(document.querySelector('#main .d-ad'),'d-ad');}
function renderSidebarAd(){replaceStaticAdSlot(document.querySelector('.side-r .ad-widget'),'side-ad');}
/* ---- 유료 광고 서빙(페이싱) + 뷰어블 노출 측정 ---- */
function pickServableCampaign(){
  var avail=ACTIVE_CAMPAIGNS.filter(function(c){return c.impressions_served<c.impression_goal;});
  if(!avail.length)return null;
  var now=Date.now();
  // 페이싱 가중치: "지금까지 나갔어야 할 양(목표×경과비율) − 실제 나간 양" = 뒤처진 정도. 뒤처진 캠페인일수록 우선.
  var weights=avail.map(function(c){
    var s=new Date(c.flight_start).getTime(),e=new Date(c.flight_end).getTime();
    var frac=e>s?Math.min(1,Math.max(0,(now-s)/(e-s))):1;
    var behind=c.impression_goal*frac-c.impressions_served;
    return Math.max(behind,1); // 최소 1로 바닥을 깔아 일정에 맞는 캠페인도 순번이 돌아가게
  });
  var total=weights.reduce(function(s,w){return s+w;},0);
  var r=Math.random()*total,cum=0;
  for(var i=0;i<avail.length;i++){cum+=weights[i];if(r<cum)return avail[i];}
  return avail[avail.length-1];
}
function openCampaignTarget(id){
  var c=ACTIVE_CAMPAIGNS.find(function(x){return x.id===id;});
  if(!c||!c.target_url)return;
  window.open(c.target_url,"_blank","noopener,noreferrer");
}
var adObserver=null;
var adImpressionPending={}; // campaignId -> 아직 서버에 안 보낸 노출 수
var adFlushTimer=null;
function ensureAdObserver(){
  if(adObserver||typeof IntersectionObserver==="undefined")return;
  adObserver=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      var el=en.target;
      if(en.isIntersecting&&en.intersectionRatio>=0.5){
        if(el._viewTimer)return;
        // 50% 이상이 1초 연속 보이면 뷰어블 노출 1회로 확정
        el._viewTimer=setTimeout(function(){
          el._viewTimer=null;
          if(el._counted)return;
          if(document.visibilityState!=="visible")return; // 백그라운드 탭은 제외
          el._counted=true;
          if(adObserver)adObserver.unobserve(el);
          queueAdImpression(parseInt(el.getAttribute("data-campaign-id"),10));
        },1000);
      }else if(el._viewTimer){
        clearTimeout(el._viewTimer);el._viewTimer=null; // 1초 안에 벗어나면 리셋
      }
    });
  },{threshold:[0,0.5,1]});
}
function observeAdBanners(){
  ensureAdObserver();
  if(!adObserver)return;
  var els=document.querySelectorAll("[data-campaign-id]"); // 피드(#main)뿐 아니라 사이드바(#main 밖)·상세 지면까지 포함
  for(var i=0;i<els.length;i++){
    var el=els[i];
    if(el._observed||el._counted)continue;
    el._observed=true;
    adObserver.observe(el);
  }
}
function queueAdImpression(id){
  if(!id)return;
  adImpressionPending[id]=(adImpressionPending[id]||0)+1;
  // 세션 내 페이싱/목표초과 방지를 위해 로컬 카운트도 같이 올림
  var c=ACTIVE_CAMPAIGNS.find(function(x){return x.id===id;});
  if(c){
    c.impressions_served++;
    if(c.impressions_served>=c.impression_goal)ACTIVE_CAMPAIGNS=ACTIVE_CAMPAIGNS.filter(function(x){return x.id!==id;});
  }
  if(!adFlushTimer)adFlushTimer=setTimeout(flushAdImpressions,4000);
}
async function flushAdImpressions(){
  adFlushTimer=null;
  var pending=adImpressionPending;adImpressionPending={};
  var ids=Object.keys(pending);
  if(!ids.length||!window.supabase)return;
  for(var i=0;i<ids.length;i++){
    var id=parseInt(ids[i],10),cnt=pending[ids[i]];
    while(cnt>0){
      var chunk=Math.min(cnt,20); // RPC가 한 번에 1~20만 받음
      await window.supabase.rpc("record_ad_impressions",{p_campaign_id:id,p_count:chunk});
      cnt-=chunk;
    }
  }
}
if(typeof document!=="undefined"){
  // 페이지를 떠나거나 탭이 숨겨질 때 남은 노출을 최대한 전송(완벽 보장은 아님)
  document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden")flushAdImpressions();});
}
/* 지금 화면에 '홈 목록'이 떠 있는가.
   ⚠️ 배경에서 끝난 작업(뮤트·메모 로드, 차단 저장 등) 뒤에 목록을 새로 그릴 때는 반드시 이걸 먼저 본다.
      renderList()는 #main을 홈 목록으로 통째로 덮어쓰고 **주소까지 '/'로 바꾼다**(아래 pushState).
      그래서 커미션 상세·글 상세·채팅을 보고 있을 때 부르면 보던 화면이 홈으로 튕기고,
      그 상태에서 주소창을 복사하면 홈 주소가 복사된다.
      (2026-08-14 사용자 신고: "커미션 상세 링크를 복사해 붙여넣으면 홈으로 간다" —
       원인은 로그인한 사람만 실행되는 applySession의 loadMyNotes().then(renderList)였다.
       로그아웃 상태에서는 재현되지 않아 한참 못 찾았다.)
   사용자가 직접 "목록으로"를 누른 경우처럼 **일부러 홈으로 가는** 호출에는 쓰지 않는다. */
function onHomeListNow(){
  try{
    if(typeof screenStack!=="undefined"&&screenStack.length)return false; // 커미션·채팅 등 겹쳐 띄운 화면
    if(typeof curTab!=="undefined"&&curTab!=="home")return false;         // 내 정보 탭 등
    if(document.querySelector("#main .detail"))return false;              // 글 상세
    return true;
  }catch(e){return false;}
}
function renderList(){
  leaveChat();
  saveChipScroll(); // 다시 그리기 전에 게시판 탭의 가로 스크롤 위치를 기억(아래에서 그대로 복원)
  if(!state.query){ // 게시판별 URL(공유·SEO). 검색 중엔 주소를 바꾸지 않음.
    var _wantPath=(state.board!=="all")?("/board/"+state.board):"/";
    if(location.pathname!==_wantPath){history.pushState({},"",_wantPath);}
    document.title=(state.board!=="all")?(boardName(state.board)+" · commi"):"commi · 그림 그리는 사람들의 커뮤니티";
  }
  var main=document.getElementById("main");var arr=filteredPosts();
  // 건수는 아래 범위 탭에 붙으므로 여기서는 검색어만 보여준다(같은 숫자를 두 번 쓰지 않게)
  var sub=state.query?('"'+esc(state.query)+'" 검색 결과'):(state.sort==="new"?"방금 올라온 이야기부터":"반응 많은 순으로");
  var h=boardHeaderHTML(sub); // 게시판 탭 + 말머리·정렬·보기 줄
  if(state.board==="all"&&!state.query){
    h+=notifBannerHTML(); // 알림을 아직 안 켠 사람에게만(홈 전체 글에서만 — 게시판마다 따라다니면 잔소리가 된다)
    if(LATEST_NOTICE)h+='<div class="notice" onclick="showNotice()"><span class="pin">공지</span><span class="nt">📢 '+esc(LATEST_NOTICE.title)+'</span></div>';
    h+='<div class="notice" onclick="openRules()"><span class="pin">공지</span><span class="nt">📌 '+esc(SITE_RULES.title)+'</span></div>';
  }
  if(arr.length===0){
    // 추천글이 비었을 때는 문턱(좋아요 10개)을 여기서 자연스럽게 알린다 — 상시 안내문은 두지 않는다
    // ⚠️ 검색 중에는 '첫 글을 남겨보세요'가 나오면 안 된다 — 찾는 데 실패한 사람에게
    //    글쓰기를 권하는 꼴이라 안내가 어긋난다.
    h+=state.query
      ?searchEmptyHTML()
      :(state.sort==="best"
      ?'<div class="empty"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.6 5.6 6.4.7-4.8 4.2 1.3 6L12 16.6 6.5 19.5l1.3-6L3 9.3l6.4-.7z"/></svg><h3>아직 추천글이 없어요</h3><p>좋아요를 '+BEST_LIKES+'개 받은 글이 여기에 올라와요.</p></div>'
      :'<div class="empty"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg><h3>아직 글이 없어요</h3><p>이 게시판의 첫 글을 남겨보세요.</p><button onclick="openWrite()">글쓰기</button></div>');
    main.innerHTML=h;syncChipScroll();return;
  }
  /* 검색 조건이 하나라도 바뀌면 스크롤로 늘려 둔 양을 처음으로 되돌린다.
     ⚠️ 호출부(doSearch·setSearchTab·setSearchBoard·setSort·말머리…)마다 초기화하면 한 곳만
        빠뜨려도 새 검색이 남의 스크롤 위치를 물려받는다. 그리는 자리에서 한 번에 판정한다. */
  var _sig=_searchSigNow();
  if(_sig!==_searchSig){_searchSig=_sig;searchShown=SEARCH_STEP;}
  var isSearch=!!state.query;
  var totalPages=Math.max(1,Math.ceil(arr.length/PER));if(page>totalPages)page=totalPages;
  var visible=isSearch?arr.slice(0,searchShown):arr.slice((page-1)*PER,page*PER);
  if(state.board==="review"&&!state.query){
    h+=reviewAlbumHTML(visible);
    if(totalPages>1)h+=pagerHTML(totalPages);
    main.innerHTML=h;syncChipScroll();
    return;
  }
  if(state.viewMode==="album"){
    var albumArr=arr.filter(function(p){return p.images&&p.images.length});
    var albumTotalPages=Math.max(1,Math.ceil(albumArr.length/PER));if(page>albumTotalPages)page=albumTotalPages;
    var albumVisible=isSearch?albumArr.slice(0,searchShown):albumArr.slice((page-1)*PER,page*PER);
    if(!albumArr.length){
      h+='<div class="empty"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg><h3>이미지가 있는 글이 없어요</h3><p>앨범형은 이미지가 첨부된 글만 보여줘요.</p></div>';
    }else if(isSearch){
      h+=postAlbumHTML(albumVisible)+moreSentinelHTML(albumArr.length);
    }else{
      h+=postAlbumHTML(albumVisible);
      if(albumTotalPages>1)h+=pagerHTML(albumTotalPages);
    }
    main.innerHTML=h;syncChipScroll();observeSearchMore();
    return;
  }
  h+='<div class="list">';
  var postsSinceAd=0,adGap=10+Math.floor(Math.random()*6); // 광고 간격: 10~15개 게시글마다 랜덤
  visible.forEach(function(p,idx){
    // 뮤트한 사람의 글은 자리만 남기고 접는다 — 지우지 않는 이유는 '보기'로 펼칠 수 있어야 해서다.
    if(isMuted(p.authorId)){
      // 차단은 펼칠 수 없다(관계를 끊은 것) — '보기'를 주지 않는다
      var _bk=isBlocked(p.authorId);
      h+='<div class="muted-row'+(_bk?' blocked':'')+'"'+(_bk?'':' onclick="revealMuted(\''+esc(p.authorId)+'\')"')+'>'+
         '<span class="mr-ic">'+(_bk?'🚫':'🔕')+'</span>'+
         '<span class="mr-tx">'+(_bk?'차단한 사람의 글':'뮤트한 사람의 글')+'</span>'+
         (_bk?'':'<span class="mr-go">보기</span>')+'</div>';
      return;
    }
    var c=catFor(p);
    var isHot=p.likes>=90;
    var thumb=postThumbHTML(p);
    h+='<div class="post rip'+(isHot?' hot-post':'')+(READ.has(p.id)?' read':'')+(p.id===justAddedId?' justAdded':'')+'" tabindex="0" role="button" onclick="openPost('+p.id+')" onkeydown="if(event.key===\'Enter\')openPost('+p.id+')">'+
      '<div class="pmain">'+
        '<div class="ptitle">'+(p.isManagerPick?'<span class="pick-badge">📌 매니저 픽</span> ':'')+hlEsc(p.title,state.query)+'</div>'+
        searchHitHTML(p)+
        '<div class="pmeta">'+
          '<span class="cat '+c.cls+'">'+c.label+'</span>'+
          '<span class="who"'+(p.authorId?' style="cursor:pointer" onclick="event.stopPropagation();openUserProfile(\''+p.authorId+'\')"':'')+'>'+hlEsc(dispName(p.author),state.query)+anonIpHTML(p.ipMasked)+memoBadge(p.authorId)+'</span>'+
          '<span class="sep"></span><span class="mt">'+p.time+'</span>'+
          '<span class="sep"></span><span class="mv">조회 '+fmtViews(p.views)+'</span>'+
          (p.likes?'<span class="sep"></span><span class="ml">추천 '+p.likes+'</span>':'')+
        '</div>'+
      '</div>'+
      thumb+
      '<div class="pcmt"><span class="cn'+(p.comments.length?' has':'')+'">'+p.comments.length+'</span><span class="cl">댓글</span></div>'+
    '</div>';
    postsSinceAd++;
    if(postsSinceAd>=adGap && idx!==visible.length-1){h+=adRow();postsSinceAd=0;adGap=10+Math.floor(Math.random()*6);}
  });
  h+='</div>';
  if(isSearch)h+=moreSentinelHTML(arr.length);
  else if(totalPages>1)h+=pagerHTML(totalPages);
  main.innerHTML=h;
  syncChipScroll();
  observeAdBanners();
  observeSearchMore();
}
function openPost(id){
  track("post_view");
  userLeftHome=true;
  resetScreens();
  leaveChat();
  var p=POSTS.find(function(x){return x.id===id});if(!p)return;p.views++;READ.add(id);saveRead();
  if(p.dbId&&window.supabase)window.supabase.rpc("increment_post_views",{p_id:p.dbId}).then(function(){});
  if(p.dbId){
    var targetPath="/post/"+p.dbId;
    if(location.pathname!==targetPath)history.pushState({},"",targetPath);
    document.title=p.title+" · commi";
  }
  renderPostDetail(id);
  window.scrollTo({top:0,behavior:"smooth"});
}
function likeIconSvg(liked){
  return liked?"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"currentColor\" stroke=\"none\"><path d=\"M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5c0 5-7 9.5-7 9.5z\"/></svg>":"<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5c0 5-7 9.5-7 9.5z\"/></svg>";
}
function renderPostDetail(id){
  var p=POSTS.find(function(x){return x.id===id});if(!p)return;
  var main=document.getElementById("main");var c=catFor(p);
  var safeHtml=p.html?sanitizePostHtml(p.html):null;
  var contentHasMedia=safeHtml&&/<img[\s>]|<video[\s>]/i.test(safeHtml);
  var canvas=(!contentHasMedia&&p.images&&p.images.length)?
    '<div class="d-canvas" style="height:auto;display:block;padding:0">'+(p.stage?'<span class="stage-tag">'+p.stage+' 단계</span>':'')+
      p.images.map(function(url){return '<img src="'+esc(url)+'" alt="" style="width:100%;display:block;max-height:520px;object-fit:cover">'}).join("")+
    '</div>' :
    (contentHasMedia||p.thumb==="none")?"":'<div class="d-canvas" style="background:linear-gradient(135deg,'+GRADS[p.thumb]+')">'+(p.stage?'<span class="stage-tag">'+p.stage+' 단계</span>':'')+'🎨 작품 이미지 영역</div>';
  var liked=p._liked?" liked":"";
  var h='<div class="detail"><div class="d-grip"></div><button class="d-back" onclick="renderList()"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>목록으로</button>'+
    '<div class="d-head"><div class="line1"><span class="cat '+c.cls+'">'+c.label+'</span>'+(p.isManagerPick?'<span class="pick-badge">📌 매니저 픽</span>':'')+(p.reviewedNickname?'<span class="pick-badge">🎨 @'+esc(p.reviewedNickname)+' 후기</span>':'')+'</div><h1 class="serif">'+esc(p.title)+'</h1>'+
    '<div class="d-author"><div class="d-ava serif">'+avatarHTML(p.author,p.authorAvatar)+'</div><div class="d-au-info"><div class="n"'+(p.authorId?' style="cursor:pointer" onclick="openUserProfile(\''+p.authorId+'\')"':'')+'>'+esc(dispName(p.author))+anonIpHTML(p.ipMasked)+memoBadge(p.authorId)+levelBadgeHtml(p.authorLevel,"lv-badge")+titleBadgeById(p.authorTitleId)+'</div><div class="meta">'+p.time+' · 조회 '+fmtViews(p.views)+'</div></div>'+
    ((p.authorId&&(!AUTH.user||p.authorId!==AUTH.user.id))?('<button class="d-follow'+(FOLLOW.has(p.authorId)?' following':'')+'" id="followBtn" onclick="toggleFollow(\''+esc(p.authorId)+'\',\''+esc(p.author)+'\')">'+(FOLLOW.has(p.authorId)?'팔로잉 ✓':'＋ 팔로우')+'</button>'):'')+'</div></div>'+
    canvas+'<div class="d-content">'+(safeHtml?safeHtml:p.content.map(function(x){return'<p>'+esc(x)+'</p>'}).join(""))+'</div>'+
    (p.polls&&p.polls.length?p.polls.filter(function(pl){return !pl.anchor;}).map(function(pl){return '<div class="poll" id="pollBox-'+pl.id+'"></div>';}).join(''):'')+
    '<div class="d-actions"><button class="d-act'+liked+'" id="likeBtn" onclick="toggleLike('+p.id+')">'+likeIconSvg(p._liked)+'좋아요 '+p.likes+'</button>'+
    '<button class="d-act" onclick="sharePost('+p.id+')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15l6-6"/><path d="M10 6l1-1a4 4 0 0 1 6 6l-1 1M14 18l-1 1a4 4 0 0 1-6-6l1-1"/></svg>공유</button>'+
    (p.dbId?('<button class="d-act'+(isPostBookmarked(p.dbId)?' on':'')+'" id="bmBtn" onclick="togglePostBookmark('+p.id+')">'+postBmIcon(isPostBookmarked(p.dbId))+(isPostBookmarked(p.dbId)?'저장됨':'저장')+'</button>'):'')+
    '<button class="d-act" onclick="reportPost('+p.id+')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>신고</button>'+
    ((p.dbId&&p.board==="trade"&&p.category==="구직")?'<button class="d-act" onclick="openCommissionReviews('+p.id+')">📝 후기 보기 ('+POSTS.filter(function(r){return r.board==="review"&&r.commissionPostId===p.dbId}).length+')</button>':'')+
    ((p.dbId&&p.board==="trade"&&p.category==="구직"&&AUTH.user&&AUTH.user.id!==p.authorId)?'<button class="d-act" onclick="openReviewFor('+p.id+')">✍️ 이 커미션 후기 쓰기</button>':'')+
    ((p.dbId&&AUTH.user&&p.authorId===AUTH.user.id)?(
    (postEditLocked(p)?'<span class="d-act" style="opacity:.55;cursor:default" title="다른 분의 댓글이 달려 수정·삭제할 수 없어요">🔒 수정·삭제 불가</span>':
    ((p.adLocked?'<span class="d-act" style="opacity:.55;cursor:default" title="광고를 집행 중인 글은 수정할 수 없어요">🔒 수정 불가(광고 집행 중)</span>':
    '<button class="d-act" onclick="openEditPost('+p.id+')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L20 8l-4-4L4 16v4z"/><path d="M14 6l4 4"/></svg>수정</button>')+
    '<button class="d-act" onclick="deletePost('+p.id+')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>삭제</button>'))+
    '<button class="d-act" onclick="openCreateAd('+p.id+')">📢 이 글 광고하기</button>'+
    '<button class="d-act'+((AUTH.profile&&AUTH.profile.pinned_post_id===p.dbId)?' liked':'')+'" onclick="togglePinnedPost('+p.id+')">📌 '+((AUTH.profile&&AUTH.profile.pinned_post_id===p.dbId)?"대표 글 해제":"대표 글로 고정하기")+'</button>'):'')+
    ((p.dbId&&AUTH.profile&&AUTH.profile.is_admin)?('<button class="d-act'+(p.isManagerPick?' liked':'')+'" onclick="toggleManagerPick('+p.id+')">📌 '+(p.isManagerPick?"매니저 픽 해제":"매니저 픽 지정")+'</button>'):'')+
    ((p.dbId&&AUTH.profile&&AUTH.profile.is_admin)?('<button class="d-act d-act-admindel" onclick="adminDeletePost('+p.id+')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>관리자 삭제</button>'):'')+
    '</div>'+
    '<div class="comments"><div class="cm-head"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"/></svg>댓글 '+p.comments.length+'</div>'+
    (p.board==='crit'?'<div class="cm-accept-info">💡 마음에 든 피드백을 <b>채택</b>하면 그 작성자에게 <b>광고 25점 + 활동 25점</b>을 지급해요 (하루 최대 100점).</div>':'')+
    '<div class="cm-write"><div class="d-ava serif" id="cmAva">'+avatarHTML("나",AUTH.profile&&AUTH.profile.avatar_url)+'</div><div class="box"><textarea id="cmInput" placeholder="따뜻한 피드백을 남겨주세요. 사람보다 그림을 이야기해요."></textarea>'+
    '<div class="emo-strip">'+emoStripHTML()+'</div>'+
    '<div class="row"><span class="hint">인신공격·조롱은 삭제될 수 있어요</span><button class="send" onclick="addComment('+p.id+')">등록</button></div></div></div>'+
    '<div class="ad d-ad" role="complementary" aria-label="광고"><span class="ad-label">AD</span><div class="ad-ph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" style="width:22px;height:22px"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m4 18 5-5 4 3 3-2 4 4"/></svg></div><div class="ad-body"><div class="ad-t">열심히 활동해서 포인트를 모아보세요!</div><div class="ad-d">포인트를 사용하여 이 자리에 광고를 집행할 수 있어요!</div></div></div>'+'<div class="cm-list" id="cmList">'+renderComments(p)+'</div></div></div>';
  main.innerHTML=h;
  renderDetailAd();
  if(p.polls&&p.polls.length){
    p.polls.forEach(function(pl){
      if(pl.anchor){ // 본문 마커(data-poll) 위치에 투표 박스를 끼워넣음
        var mk=main.querySelector('.d-content [data-poll="'+pl.anchor+'"]');
        if(mk){var bx=document.createElement('div');bx.className='poll';bx.id='pollBox-'+pl.id;mk.replaceWith(bx);}
        else{var dc=main.querySelector('.d-content');if(dc){var bx2=document.createElement('div');bx2.className='poll';bx2.id='pollBox-'+pl.id;dc.insertAdjacentElement('afterend',bx2);}}
      }
      loadPoll(pl.id);
    });
  }
}
/* ===== 글 상세 투표 표시/투표하기 ===== */
var _pollChannels={};       // pollId → 실시간 broadcast 채널
var _pollVotersOpen={};     // pollId → 참여자 명단 펼침 여부
var _pollVotersData={};     // pollId → [{option_id, nick}]
function _pollBox(pid){return document.getElementById('pollBox-'+pid);}
async function loadPoll(pollId){
  var box=_pollBox(pollId); if(!box||!window.supabase)return;
  _pollVotersOpen[pollId]=false;_pollVotersData[pollId]=null;
  box.innerHTML='<div class="poll-loading">투표 불러오는 중…</div>';
  var res=await window.supabase.rpc('get_poll_results',{p_poll_id:pollId});
  if(res.error||!res.data){box.innerHTML='<div class="poll-loading">투표를 불러오지 못했어요</div>';return;}
  renderPoll(pollId,res.data);
  subscribePoll(pollId); // 다른 사람 투표 시 실시간 갱신
}
// 실시간: 같은 투표를 보는 브라우저끼리 broadcast 채널로 연결(투표 테이블 직접 구독 X → 익명 보장)
function subscribePoll(pollId){
  if(!window.supabase)return;
  if(_pollChannels[pollId]){try{window.supabase.removeChannel(_pollChannels[pollId]);}catch(e){}delete _pollChannels[pollId];}
  _pollChannels[pollId]=window.supabase.channel('poll-'+pollId)
    .on('broadcast',{event:'vote'},function(){refreshPollResults(pollId);})
    .subscribe();
}
async function refreshPollResults(pollId){
  if(!_pollBox(pollId)||!window.supabase)return; // 화면 떠났으면 무시
  var res=await window.supabase.rpc('get_poll_results',{p_poll_id:pollId});
  if(res.error||!res.data)return;
  if(_pollVotersOpen[pollId]&&!res.data.is_anonymous){
    var vr=await window.supabase.rpc('get_poll_voters',{p_poll_id:pollId});
    _pollVotersData[pollId]=(vr&&vr.data&&vr.data.voters)||[];
  }
  renderPoll(pollId,res.data);
}
function togglePollVoters(pollId){ _pollVotersOpen[pollId]=!_pollVotersOpen[pollId]; refreshPollResults(pollId); }
function renderPollVotersHTML(pollId,opts){
  var vd=_pollVotersData[pollId];
  if(vd==null)return '<div class="poll-voters-loading">불러오는 중…</div>';
  if(!vd.length)return '<div class="poll-voters-empty">아직 참여자가 없어요</div>';
  var optBody={}; opts.forEach(function(o){optBody[o.id]=o.body;});
  // 사람별로 묶기(user_id 우선, 없으면 nick). 복수 선택이면 한 사람이 여러 선택지.
  var byUser={},order=[];
  vd.forEach(function(v){
    var k=v.user_id||('nick:'+v.nick);
    if(!byUser[k]){byUser[k]={nick:v.nick||'익명',opts:[]};order.push(k);}
    byUser[k].opts.push(optBody[v.option_id]||'?');
  });
  return '<div class="poll-voters">'+order.map(function(k){
    var u=byUser[k];
    return '<div class="poll-voters-row"><b>'+esc(u.nick)+'</b><span>→ '+u.opts.map(esc).join(', ')+'</span></div>';
  }).join('')+'</div>';
}
function pollDeadlineText(iso){
  var ms=new Date(iso)-Date.now();
  if(ms<=0)return '마감됨';
  var d=Math.floor(ms/86400000), hh=Math.floor(ms/3600000);
  if(d>=1)return d+'일 남음';
  if(hh>=1)return hh+'시간 남음';
  return '곧 마감';
}
function renderPoll(pollId,data){
  var box=_pollBox(pollId); if(!box||!data)return;
  var opts=data.options||[], total=data.total||0;
  var mine=data.my_options||[], voted=mine.length>0;
  var multi=!!data.allow_multiple, closed=!!data.closed;
  var showBars=voted||closed;                       // 결과 막대를 보일지
  var h='<div class="poll-q">📊 '+esc(data.question||'투표')+
    (multi?' <span class="poll-tag">복수 선택</span>':'')+
    (data.is_anonymous?' <span class="poll-tag">익명</span>':'')+
    (closed?' <span class="poll-tag closed">마감</span>':'')+'</div>';
  h+=opts.map(function(o){
    var isMine=mine.indexOf(o.id)>=0;
    var pct=total?Math.round(o.count/total*100):0;
    // 단일: 미투표일 때만 클릭 / 복수: 마감 아니면 항상 토글 가능
    var clickable=!closed && (multi || !voted);
    var inner=showBars
      ? '<div class="poll-res-bar" style="width:'+pct+'%"></div><div class="poll-res-txt"><span>'+(isMine?'✓ ':'')+esc(o.body)+'</span><span>'+pct+'% · '+o.count+'표</span></div>'
      : '<div class="poll-res-txt"><span>'+(isMine?'✓ ':'')+esc(o.body)+'</span></div>';
    return '<div class="poll-res'+(isMine?' mine':'')+(clickable?' clickable':'')+'"'+(clickable?' onclick="votePoll('+pollId+','+o.id+')"':'')+'>'+inner+'</div>';
  }).join('');
  var foot=['총 '+total+'명 참여'];
  if(closed)foot.push('마감된 투표');
  else if(data.closes_at)foot.push(pollDeadlineText(data.closes_at));
  if(multi&&!closed)foot.push('여러 개 선택 가능(다시 누르면 취소)');
  if(!voted&&!closed&&!AUTH.user)foot.push('로그인 후 투표');
  h+='<div class="poll-total">'+foot.join(' · ')+'</div>';
  // 참여자(익명/비익명)
  if(data.is_anonymous){
    h+='<div class="poll-anon">🕶 익명 투표 — 누가 골랐는지는 공개되지 않아요</div>';
  }else if(total>0){
    h+='<button class="poll-voters-btn" onclick="togglePollVoters('+pollId+')">'+(_pollVotersOpen[pollId]?'참여자 숨기기 ▲':'👥 참여자 보기 ▼')+'</button>';
    if(_pollVotersOpen[pollId])h+=renderPollVotersHTML(pollId,opts);
  }
  box.innerHTML=h;
}
async function votePoll(pollId,optionId){
  if(!AUTH.user){toast('로그인 후 투표할 수 있어요','🔒');loginWithGoogle();return;}
  if(!window.supabase)return;
  var res=await window.supabase.rpc('cast_vote',{p_poll_id:pollId,p_option_id:optionId});
  if(res.error){toast('투표 실패: '+res.error.message);return;}
  var data=res.data||{};
  if(!data.ok){
    if(data.error==='login_required'){toast('로그인 후 투표할 수 있어요','🔒');loginWithGoogle();return;}
    if(data.error==='already_voted'){toast('이미 투표했어요');renderPoll(pollId,data);return;}
    if(data.error==='closed'){toast('마감된 투표예요');renderPoll(pollId,data);return;}
    toast('투표할 수 없어요 ('+(data.error||'오류')+')');return;
  }
  if(_pollVotersOpen[pollId]){_pollVotersData[pollId]=null;} // 참여자 목록 열려있으면 갱신 필요
  renderPoll(pollId,data); // cast_vote가 최신 결과를 함께 반환(내 화면 즉시)
  if(_pollVotersOpen[pollId])refreshPollResults(pollId); // 열린 참여자 목록도 최신화
  if(_pollChannels[pollId]){try{_pollChannels[pollId].send({type:'broadcast',event:'vote',payload:{}});}catch(e){}} // 다른 사람에게 알림
}
// 이 게시판들은 '다른 사람(작성자 아닌)의 댓글'이 하나라도 달리면 작성자가 수정·삭제 불가(관리자 삭제는 예외).
var POST_EDIT_LOCK_BOARDS=['ask','vote','crit']; // 질문/시세문의 · 투표·수요조사 · 피드백 요청
function postEditLocked(p){
  return !!(p&&POST_EDIT_LOCK_BOARDS.indexOf(p.board)>=0&&(p.comments||[]).some(function(c){return c.authorId!==p.authorId;}));
}
async function deletePost(id){
  var p=POSTS.find(function(x){return x.id===id});if(!p)return;
  if(postEditLocked(p)&&!(AUTH.profile&&AUTH.profile.is_admin)){toast("다른 분의 댓글이 달려 삭제할 수 없어요");return;}
  if(!(await confirmDialog("이 글을 삭제할까요? 되돌릴 수 없어요.")))return;
  if(p.dbId&&window.supabase){
    var res=await window.supabase.from("posts").delete({count:"exact"}).eq("id",p.dbId);
    if(res.error){toast("삭제 실패: "+res.error.message);return;}
    // RLS가 막으면 오류 없이 0행 — 성공으로 오인하면 새로고침 때 글이 되살아난다
    if(res.count===0){toast("삭제되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  }
  POSTS=POSTS.filter(function(x){return x.id!==id});
  toast("글을 삭제했어요");
  renderList();
}
/* 관리자 삭제: 관리자에게만 보이는 버튼 → 사유 입력 → 확인 → 서버 RPC(admin_delete_post)로 삭제+작성자 알림.
   보안: 서버(RPC 내 is_admin())에서 관리자 여부를 확인하므로 버튼을 숨기는 것과 무관하게 일반 유저는 차단됨. */
var _adminDelState=null;
function adminDeleteReasonDialog(){
  return new Promise(function(resolve){
    var modal=document.getElementById("adminDelModal");
    var ok=document.getElementById("adminDelOkBtn");
    var ta=document.getElementById("adminDelReason");
    var silent=document.getElementById("adminDelSilent");
    if(!modal||!ok||!ta){resolve(null);return;}
    ta.value="";if(silent)silent.checked=false;
    modal.classList.add("open");
    setTimeout(function(){try{ta.focus();}catch(e){}},60);
    function cleanup(val){
      modal.classList.remove("open");
      ok.removeEventListener("click",onOk);
      _adminDelState=null;
      resolve(val);
    }
    // 사유는 선택(비워도 삭제 가능). 확인 시 {reason, notify} 반환, 취소 시 null.
    function onOk(){cleanup({reason:(ta.value||"").trim(),notify:!(silent&&silent.checked)});}
    ok.addEventListener("click",onOk);
    _adminDelState={cancel:function(){cleanup(null);}};
  });
}
function closeAdminDel(){if(_adminDelState)_adminDelState.cancel();}
function adminDelPick(t){var ta=document.getElementById("adminDelReason");if(ta){ta.value=t;ta.focus();}}
async function adminDeletePost(id){
  if(!(AUTH.profile&&AUTH.profile.is_admin)){toast("관리자만 사용할 수 있어요");return;}
  var p=POSTS.find(function(x){return x.id===id});if(!p||!p.dbId||!window.supabase)return;
  var r=await adminDeleteReasonDialog();
  if(!r)return; // 취소
  var confirmMsg=r.notify
    ?"이 글을 삭제할까요? 되돌릴 수 없고, 작성자에게 알림이 전송돼요."
    :"이 글을 삭제할까요? 되돌릴 수 없어요. (작성자에게 알림을 보내지 않습니다)";
  if(!(await confirmDialog(confirmMsg)))return;
  var res=await window.supabase.rpc("admin_delete_post",{p_post_id:p.dbId,p_reason:r.reason,p_notify:r.notify});
  if(res.error){toast("삭제 실패: "+res.error.message);return;}
  var data=res.data||{};
  if(!data.ok){toast(data.error==="not_admin"?"관리자만 사용할 수 있어요":("삭제할 수 없어요 ("+(data.error||"오류")+")"));return;}
  POSTS=POSTS.filter(function(x){return x.id!==id});
  toast(r.notify?"관리자 권한으로 글을 삭제했어요":"관리자 권한으로 글을 삭제했어요 (알림 미발송)");
  renderList();
}
async function toggleManagerPick(id){
  var p=POSTS.find(function(x){return x.id===id});if(!p||!p.dbId||!window.supabase)return;
  var newState=!p.isManagerPick;
  var position=null;
  if(newState){
    var currentPicks=POSTS.filter(function(x){return x.isManagerPick}).length;
    position=currentPicks+1;
  }
  var res=await window.supabase.rpc("set_manager_pick",{p_post_id:p.dbId,p_is_pick:newState,p_position:position});
  if(res.error){toast("처리 실패: "+res.error.message);return;}
  p.isManagerPick=newState;
  p.pickPosition=newState?position:null;
  p.pickedAt=newState?new Date().toISOString():null;
  toast(newState?("매니저 픽으로 지정했어요 📌 (위치 "+position+", \"매니저 픽 관리\"에서 조정 가능)"):"매니저 픽을 해제했어요");
  renderPostDetail(id);
}
async function togglePinnedPost(id){
  var p=POSTS.find(function(x){return x.id===id});if(!p||!p.dbId||!AUTH.user||!window.supabase)return;
  var newVal=(AUTH.profile&&AUTH.profile.pinned_post_id===p.dbId)?null:p.dbId;
  var res=await window.supabase.from("profiles").update({pinned_post_id:newVal},{count:"exact"}).eq("id",AUTH.user.id);
  if(!res.error&&res.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(res.error){toast("처리 실패: "+res.error.message);return;}
  AUTH.profile.pinned_post_id=newVal;
  toast(newVal?"프로필 대표 글로 고정했어요 📌":"대표 글을 해제했어요");
  renderPostDetail(id);
}
async function openManagerPickList(){
  if(!AUTH.profile||!AUTH.profile.is_admin)return;
  enterScreen("mgrPick",openProfile); // 뒤로가기가 프로필로 복귀
  var picks=POSTS.filter(function(p){return p.isManagerPick}).slice().sort(function(a,b){return (a.pickPosition||1)-(b.pickPosition||1);});
  renderManagerPickList(picks);
}
function renderManagerPickList(picks){
  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
    '<div class="pf-sec">📌 매니저 픽 관리 ('+picks.length+')</div>';
  if(!picks.length){
    h+='<div class="pf-empty">지정된 매니저 픽이 없어요. 글 상세 화면에서 "매니저 픽 지정" 버튼으로 추가할 수 있어요.</div>';
  }else{
    h+='<div class="list">';
    picks.forEach(function(p){
      h+='<div class="post rip"><div class="pmain" style="cursor:pointer" onclick="openPost('+p.id+')"><div class="ptitle">'+esc(p.title)+'</div>'+
        '<div class="pmeta"><span class="cat '+catFor(p).cls+'">'+catFor(p).label+'</span></div></div>'+
        '<div style="display:flex;align-items:center;gap:8px;flex-shrink:0">'+
          '<input type="number" min="1" value="'+(p.pickPosition||1)+'" id="pickPos'+p.id+'" style="width:56px;padding:8px;border:1.5px solid var(--line-2);border-radius:10px;font-family:inherit;font-size:13px;text-align:center">'+
          '<button class="d-act" onclick="savePickPosition('+p.id+')">저장</button>'+
          '<button class="d-act" onclick="unpickFromList('+p.id+')">해제</button>'+
        '</div></div>';
    });
    h+='</div>';
  }
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ===== 친구 초대 =====
   ⚠️ 화면에 보이는 보상 액수·현황은 **전부 서버(my_referral_summary)가 준 값**이다.
      규칙을 클라이언트에 적어 두면 그걸 고쳐서 받은 것처럼 꾸밀 수 있다. */
var REF_STATUS={pending:["활동 대기"],held:["확인 중"],rewarded:["지급 완료"],
                capped:["한도 초과"],revoked:["취소됨"]};
function referralShell(inner){
  return '<div class="profile"><button class="d-back" onclick="screenBack()">← 내 정보로</button>'+inner+'</div>';
}
async function openReferral(){
  if(!AUTH.user){openLoginModal();return;}
  enterScreen("referral",openProfile);
  document.getElementById("main").innerHTML=referralShell('<div class="pf-empty">불러오는 중…</div>');
  var res=await window.supabase.rpc("my_referral_summary");
  if(res.error||!res.data||!res.data.ok){
    document.getElementById("main").innerHTML=referralShell(
      '<div class="pf-empty">초대 정보를 불러오지 못했어요.'+(res.error?'<br><span style="font-size:12px;opacity:.7">'+esc(res.error.message)+'</span>':'')+'</div>');
    return;
  }
  renderReferral(res.data);
}
/* 한도 안내 문구. ⚠️ 값이 0이면 '무제한'이라 그 부분을 아예 빼야 한다 —
   그냥 숫자를 찍으면 "최대 0명까지"처럼 정반대로 읽힌다. */
function referralCapText(r){
  var d=r.daily_cap>0,t=r.total_cap>0;
  if(d&&t)return '하루 '+r.daily_cap+'명, 최대 '+r.total_cap+'명까지 받을 수 있어요.';
  if(d)return '하루 '+r.daily_cap+'명까지 받을 수 있고, 총 인원 제한은 없어요.';
  if(t)return '최대 '+r.total_cap+'명까지 받을 수 있어요.';
  return '인원 제한 없이 받을 수 있어요.';
}
function renderReferral(d){
  var link=location.origin+"/?ref="+d.code,r=d.reward,c=d.counts,e=d.earned;
  var h='<div class="pf-sec">🎁 친구 초대</div>';
  if(!d.active)h+='<div class="pf-empty">지금은 초대 보상이 잠시 중단된 상태예요.</div>';

  h+='<div class="pf-group"><div class="pf-group-title">내 초대 링크</div>'+
     '<div class="ref-code">'+esc(d.code)+'</div>'+
     '<div class="ref-link">'+esc(link)+'</div>'+
     '<div class="ref-btns">'+
       '<button class="d-act ref-main" onclick="copyReferralLink()">링크 복사</button>'+
       (navigator.share?'<button class="d-act" onclick="shareReferralLink()">공유하기</button>':'')+
     '</div></div>';

  h+='<div class="pf-group"><div class="pf-group-title">받는 보상</div>'+
     '<div class="pf-list">'+
       '<div class="pf-item"><span class="pf-item-label">초대한 나</span><span class="pf-item-count">'+r.inviter_score+'점 · 광고 '+r.inviter_points+'P</span></div>'+
       '<div class="pf-item"><span class="pf-item-label">초대받은 친구</span><span class="pf-item-count">'+r.invitee_score+'점 · 광고 '+r.invitee_points+'P</span></div>'+
     '</div>'+
     '<div class="ref-note">친구가 <b>글 '+r.need_posts+'개</b> 또는 <b>댓글 '+r.need_comments+'개</b>를 남기면 양쪽 모두에게 지급돼요. '+
     referralCapText(r)+'</div></div>';

  h+='<div class="pf-group"><div class="pf-group-title">내 초대 현황</div>'+
     '<div class="pf-stats">'+
       '<div class="pf-st"><b>'+c.total+'</b><span>초대</span></div>'+
       '<div class="pf-st"><b>'+c.rewarded+'</b><span>지급 완료</span></div>'+
       '<div class="pf-st"><b>'+c.pending+'</b><span>대기 중</span></div>'+
     '</div>'+
     '<div class="ref-note">지금까지 받은 보상: <b>'+e.score+'점 · 광고 '+e.points+'P</b></div></div>';

  h+='<div class="pf-group"><div class="pf-group-title">초대한 친구</div>';
  if(!d.list.length){
    h+='<div class="pf-empty">아직 없어요. 링크를 공유해 보세요!</div>';
  }else{
    h+='<div class="pf-list">';
    d.list.forEach(function(x){
      var s=REF_STATUS[x.status]||[x.status];
      h+='<div class="pf-item"><span class="pf-item-label">'+esc(x.nick)+
         '<i class="ref-when">'+timeAgo(x.created_at)+'</i></span>'+
         '<span class="ref-badge ref-'+esc(x.status)+'">'+s[0]+'</span></div>';
    });
    h+='</div>';
  }
  h+='</div>';
  document.getElementById("main").innerHTML=referralShell(h);
  window.scrollTo({top:0,behavior:"smooth"});
}
function copyReferralLink(){
  var el=document.querySelector(".ref-link");if(!el)return;
  var url=el.textContent;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(function(){toast("초대 링크를 복사했어요","🔗")},function(){toast("복사에 실패했어요")});
  }else{
    // 오래된 브라우저 폴백 — 임시 입력창을 만들어 선택·복사
    var t=document.createElement("textarea");t.value=url;document.body.appendChild(t);t.select();
    try{document.execCommand("copy");toast("초대 링크를 복사했어요","🔗");}catch(e){toast("복사에 실패했어요");}
    document.body.removeChild(t);
  }
  track("click","초대 링크 복사");
}
function shareReferralLink(){
  var el=document.querySelector(".ref-link");if(!el||!navigator.share)return;
  navigator.share({title:"commi",text:"그림 그리는 사람들의 커뮤니티, commi에서 같이 그려요!",url:el.textContent})
    .then(function(){track("click","초대 링크 공유");}).catch(function(){});
}

/* ===== 관리자: 초대 관리 =====
   어뷰징은 대개 '한 사람이 같은 회선에서 여러 명을 데려오는' 모양으로 나타난다.
   그래서 목록에 같은 회선 건수를 함께 보여준다. */
async function openAdminReferrals(status){
  if(!AUTH.profile||!AUTH.profile.is_admin)return;
  enterScreen("adminRef",openProfile);
  document.getElementById("main").innerHTML=referralShell('<div class="pf-empty">불러오는 중…</div>');
  var st=await window.supabase.rpc("admin_referral_stats");
  var ls=await window.supabase.rpc("admin_referral_list",{p_status:status||null,p_limit:200});
  if(st.error||ls.error){
    document.getElementById("main").innerHTML=referralShell('<div class="pf-empty">불러오지 못했어요.<br><span style="font-size:12px;opacity:.7">'+esc((st.error||ls.error).message)+'</span></div>');
    return;
  }
  renderAdminReferrals(st.data||{},ls.data||[],status||null);
}
function renderAdminReferrals(s,list,cur){
  var h='<div class="pf-sec">🛡 초대 관리</div>';
  h+='<div class="pf-group"><div class="pf-group-title">집계</div>'+
     '<div class="pf-stats">'+
       '<div class="pf-st"><b>'+(s.total||0)+'</b><span>전체</span></div>'+
       '<div class="pf-st"><b>'+(s.rewarded||0)+'</b><span>지급</span></div>'+
       '<div class="pf-st"><b>'+(s.held||0)+'</b><span>보류</span></div>'+
       '<div class="pf-st"><b>'+(s.pending||0)+'</b><span>대기</span></div>'+
     '</div>'+
     '<div class="ref-note">지급 누계: <b>'+(s.paid_score||0)+'점 · 광고 '+(s.paid_points||0)+'P</b></div></div>';

  if(s.top&&s.top.length){
    h+='<div class="pf-group"><div class="pf-group-title">많이 초대한 사람</div><div class="pf-list">';
    s.top.forEach(function(t){
      h+='<div class="pf-item"><span class="pf-item-label">'+esc(t.nick)+'</span>'+
         '<span class="pf-item-count">'+t.cnt+'명 (지급 '+t.rewarded+(t.held?' · 보류 '+t.held:'')+')</span></div>';
    });
    h+='</div></div>';
  }

  var tabs=[[null,"전체"],["held","보류"],["pending","대기"],["rewarded","지급"],["capped","한도"],["revoked","취소"]];
  h+='<div class="ref-tabs">'+tabs.map(function(t){
    return '<button class="tagbar-btn'+(cur===t[0]?" on":"")+'" onclick="openAdminReferrals('+(t[0]?"'"+t[0]+"'":"null")+')">'+t[1]+'</button>';
  }).join("")+'</div>';

  if(!list.length){
    h+='<div class="pf-empty">해당하는 초대 기록이 없어요.</div>';
  }else{
    h+='<div class="pf-group"><div class="pf-list">';
    list.forEach(function(x){
      var st=REF_STATUS[x.status]||[x.status];
      // 같은 회선에서 2건 이상이면 눈에 띄게 — 가짜 계정 판단의 가장 강한 단서
      var warn=(x.same_ip_count>1)?'<i class="ref-warn">같은 회선 '+x.same_ip_count+'건</i>':'';
      h+='<div class="pf-item ref-adm"><span class="pf-item-label">'+
           esc(x.inviter)+' → '+esc(x.invitee)+warn+
           '<i class="ref-when">'+timeAgo(x.created_at)+(x.note?' · '+esc(x.note):'')+'</i></span>'+
         '<span class="ref-adm-act"><span class="ref-badge ref-'+esc(x.status)+'">'+st[0]+'</span>'+
           (x.status==="held"||x.status==="capped"?'<button class="d-act" onclick="adminReferralApprove('+x.id+')">승인</button>':'')+
           (x.status==="rewarded"?'<button class="d-act" onclick="adminReferralRevoke('+x.id+')">회수</button>':'')+
         '</span></div>';
    });
    h+='</div></div>';
  }
  document.getElementById("main").innerHTML=referralShell(h);
  window.scrollTo({top:0,behavior:"smooth"});
}
async function adminReferralApprove(id){
  if(!confirm("이 초대를 승인하고 보상을 지급할까요?"))return;
  var res=await window.supabase.rpc("admin_referral_approve",{p_id:id});
  if(res.error||!res.data||!res.data.ok){toast("승인 실패"+(res.error?": "+res.error.message:""));return;}
  toast("승인했어요","✓");openAdminReferrals();
}
async function adminReferralRevoke(id){
  var why=prompt("회수 사유를 적어주세요(선택)","가짜 계정 의심");
  if(why===null)return;
  var res=await window.supabase.rpc("admin_referral_revoke",{p_id:id,p_reason:why||null});
  if(res.error||!res.data||!res.data.ok){toast("회수 실패"+(res.error?": "+res.error.message:""));return;}
  toast("지급을 회수했어요","↩");openAdminReferrals();
}
/* 관리자 삭제 기록 뷰어 — admin_post_deletions 표(RLS로 관리자만 조회 가능)를 읽어 목록 표시.
   각 행은 삭제된 글의 스냅샷(제목·본문·이미지 등)을 담고 있어, 클릭하면 원본 글처럼 보관본을 볼 수 있음. */
var ADMIN_DEL_LOG=[];
/* 관리자 추천 점수 조정 기록 뷰어 — commission_admin_bonus_log(RLS로 관리자만 조회) */
async function openCommissionBonusLog(){
  if(!AUTH.profile||!AUTH.profile.is_admin||!window.supabase)return;
  enterScreen("bonusLog",openProfile); // 뒤로가기가 프로필로 복귀
  var res=await window.supabase.from("commission_admin_bonus_log").select("*").order("created_at",{ascending:false}).limit(100);
  if(res.error){toast("불러오기 실패: "+res.error.message);return;}
  renderCommissionBonusLog(res.data||[]);
}
function renderCommissionBonusLog(rows){
  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
    '<div class="pf-sec">⭐ 추천 점수 조정 기록 ('+rows.length+')</div>';
  if(!rows.length){
    h+='<div class="pf-empty">아직 추천 점수 조정 기록이 없어요.</div>';
  }else{
    h+='<div class="del-log-list">';
    rows.forEach(function(r){
      var oldV=(r.old_value==null?0:r.old_value),newV=(r.new_value==null?0:r.new_value);
      var dir=newV>oldV?'<span style="color:#c0392b;font-weight:800">▲</span>':(newV<oldV?'<span style="color:#2f9e58;font-weight:800">▼</span>':'<span style="opacity:.5">—</span>');
      h+='<div class="del-log" style="cursor:default">'+
        '<div class="del-log-top"><span class="del-log-board">추천 점수 조정</span><span class="del-log-time">'+timeAgo(r.created_at)+'</span></div>'+
        '<div class="del-log-title">'+esc(r.commission_title||"(제목 없음)")+'</div>'+
        '<div class="del-log-meta">조정 관리자 <b>'+esc(r.admin_nick||"(알 수 없음)")+'</b></div>'+
        '<div class="del-log-reason">추가 점수 '+oldV+' → '+newV+' '+dir+'</div>'+
      '</div>';
    });
    h+='</div>';
  }
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
/* ===== 광고 성과 대시보드 (관리자) =====
   캠페인 한 줄 = 그 광고로 들어온 사람들의 유입·행동·전환 전부.
   비율의 분모는 언제나 **그 캠페인 방문자 수**다(좋아요율 = 좋아요 누른 사람 ÷ 방문자).
   '직접·검색 유입'이 한 줄로 같이 나와서 광고가 자연 유입보다 나은지 바로 비교된다. */
var MKT_STATS=[],MKT_RANGE=30,MKT_OPEN=null,MKT_FORM=false;
function _mktPct(n,d){return d>0?Math.round(n*1000/d)/10:0;}
function _mktFromISO(){
  if(!MKT_RANGE)return null;
  return new Date(Date.now()-MKT_RANGE*86400000).toISOString();
}
async function openAdminMkt(){
  if(!AUTH.profile||!AUTH.profile.is_admin||!window.supabase)return;
  enterScreen("mkt",openProfile);
  document.getElementById("main").innerHTML='<div class="profile"><div class="pf-empty">불러오는 중…</div></div>';
  var res=await window.supabase.rpc("get_campaign_stats",{p_from:_mktFromISO(),p_to:null});
  if(res.error){
    var miss=/Could not find the function|does not exist/.test(res.error.message);
    document.getElementById("main").innerHTML='<div class="profile">'+
      '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
      '<div class="pf-sec">📈 광고 성과</div><div class="pf-empty">'+
      (miss?'이 기능은 <b>docs/sql/marketing-analytics.sql</b>을 실행해야 켜져요.':esc(res.error.message))+
      '</div></div>';
    return;
  }
  MKT_STATS=res.data||[];
  renderAdminMkt();
}
function _mktRangeTabs(){
  return '<div class="del-tabs">'+[[7,"7일"],[30,"30일"],[90,"90일"],[0,"전체"]].map(function(x){
    return '<div class="del-tab'+(MKT_RANGE===x[0]?' on':'')+'" onclick="mktSetRange('+x[0]+')">'+x[1]+'</div>';
  }).join('')+'</div>';
}
function mktSetRange(d){MKT_RANGE=d;openAdminMkt();}
// 한 줄 요약: 방문자 → 가입까지 몇 %가 남았는지. 광고를 고를 때 제일 먼저 보는 숫자다.
function _mktCardHTML(r){
  var v=Number(r.visitors)||0;
  var rows=[
    ["글 열람",r.post_viewers],["커미션 열람",r.cm_viewers],
    ["좋아요",r.likers],["댓글",r.commenters],["글 작성",r.writers],
    ["북마크",r.bookmarkers],["커미션 신청",r.appliers],["재방문",r.repeat_visitors]
  ].map(function(x){
    var n=Number(x[1])||0;
    return '<div class="mkt-kv"><span>'+x[0]+'</span><b>'+n+'</b><i>'+_mktPct(n,v)+'%</i></div>';
  }).join('');
  var signups=Number(r.signups)||0;
  var spend=Number(r.spend)||0;
  var cpa=signups>0&&spend>0?Math.round(spend/signups).toLocaleString()+"원":"—";
  var open=MKT_OPEN===r.code;
  return '<div class="mkt-card'+(r.active===false?' off':'')+'">'+
    '<div class="mkt-head" onclick="mktToggle('+JSON.stringify(r.code).replace(/"/g,"&quot;")+')">'+
      '<div><div class="mkt-name">'+esc(r.name||r.code)+(r.channel?'<span class="mkt-ch">'+esc(r.channel)+'</span>':'')+'</div>'+
      '<div class="mkt-code">'+esc(r.code)+'</div></div>'+
      '<div class="mkt-big"><b>'+v+'</b><span>방문자</span></div>'+
    '</div>'+
    '<div class="mkt-top3">'+
      '<div class="mkt-t"><b>'+signups+'</b><span>가입</span><i>'+_mktPct(signups,v)+'%</i></div>'+
      '<div class="mkt-t"><b>'+(Number(r.pageviews)||0)+'</b><span>페이지뷰</span><i>'+(v?Math.round((Number(r.pageviews)||0)/v*10)/10:0)+'회/명</i></div>'+
      '<div class="mkt-t"><b>'+cpa+'</b><span>가입 1명당</span><i>'+(spend?spend.toLocaleString()+"원 집행":"광고비 미입력")+'</i></div>'+
    '</div>'+
    (open?('<div class="mkt-detail">'+rows+
      '<div class="mkt-clicks" id="mktClicks">버튼 클릭 불러오는 중…</div>'+
      (r.name==='직접·검색 유입'?'':(
        '<div class="mkt-tools">'+
          '<button class="mkt-tool" onclick="mktCopyLink('+JSON.stringify(r.code).replace(/"/g,"&quot;")+')">🔗 광고 링크 복사</button>'+
          '<div class="mkt-spend"><input id="mktSpend_'+esc(r.code)+'" type="number" inputmode="numeric" placeholder="광고비(원)" value="'+(spend||'')+'">'+
            '<button onclick="mktSetSpend('+JSON.stringify(r.code).replace(/"/g,"&quot;")+')">저장</button></div>'+
          '<button class="mkt-tool'+(r.active===false?'':' danger')+'" onclick="mktToggleActive('+JSON.stringify(r.code).replace(/"/g,"&quot;")+','+(r.active!==false)+')">'+
            (r.active===false?'▶ 다시 진행':'⏸ 이 캠페인 중단')+'</button>'+
        '</div>'))+
      '</div>'):'')+
  '</div>';
}
function renderAdminMkt(){
  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
    '<div class="pf-sec">📈 광고 성과</div>'+
    '<div class="mkt-guide">광고 링크에 캠페인 코드를 붙여 쓰세요 → <b>https://commi.kr/?c=코드</b><br>'+
      '처음 들어온 캠페인이 그 사람에게 계속 붙어서, 나중에 가입해도 그 광고의 성과로 잡혀요.</div>'+
    _mktRangeTabs()+
    '<button class="mkt-add" onclick="mktNewCampaign()">'+(MKT_FORM?'닫기':'+ 캠페인 만들기')+'</button>'+_mktFormHTML();
  if(!MKT_STATS.length)h+='<div class="pf-empty">아직 기록이 없어요.</div>';
  else h+='<div class="mkt-list">'+MKT_STATS.map(_mktCardHTML).join('')+'</div>';
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
  if(MKT_OPEN)_mktLoadClicks(MKT_OPEN);
}
function mktToggle(code){
  MKT_OPEN=(MKT_OPEN===code)?null:code;
  renderAdminMkt();
}
async function _mktLoadClicks(code){
  var el=document.getElementById("mktClicks");if(!el)return;
  var res=await window.supabase.rpc("get_campaign_clicks",{p_code:code,p_from:_mktFromISO(),p_to:null});
  if(res.error){el.textContent="버튼 클릭을 불러오지 못했어요.";return;}
  var list=res.data||[];
  if(!list.length){el.textContent="아직 눌린 버튼이 없어요.";return;}
  el.innerHTML='<div class="mkt-clicks-h">어떤 버튼을 눌렀나</div>'+list.map(function(c){
    return '<div class="mkt-kv"><span>'+esc(c.label)+'</span><b>'+c.clicks+'회</b><i>'+c.people+'명</i></div>';
  }).join('');
}
// 캠페인 만들기 — 코드는 링크에 그대로 들어가므로 영문·숫자로만 받는다
function mktNewCampaign(){MKT_FORM=!MKT_FORM;renderAdminMkt();}
function _mktFormHTML(){
  if(!MKT_FORM)return '';
  return '<div class="mkt-form">'+
    '<div class="cm-reg-label">캠페인 코드 <span class="cm-reg-req">*</span> <span class="cm-reg-sub">링크에 들어갈 영문·숫자</span></div>'+
    '<input class="cm-reg-input" id="mktCode" placeholder="예: tw0808" maxlength="40">'+
    '<div class="cm-reg-label">캠페인 이름 <span class="cm-reg-req">*</span></div>'+
    '<input class="cm-reg-input" id="mktName" placeholder="예: 8월 트위터 런칭" maxlength="60">'+
    '<div class="cm-reg-label">채널 <span class="cm-reg-sub">선택</span></div>'+
    '<input class="cm-reg-input" id="mktCh" placeholder="예: 트위터" maxlength="20">'+
    '<div class="cm-reg-label">집행 광고비 <span class="cm-reg-sub">선택 · 가입 1명당 비용 계산에 쓰여요</span></div>'+
    '<input class="cm-reg-input" id="mktSpend" type="number" inputmode="numeric" placeholder="예: 50000">'+
    '<button class="mkt-save" onclick="mktSaveCampaign()">만들기</button>'+
  '</div>';
}
async function mktSaveCampaign(){
  var code=(document.getElementById("mktCode").value||"").trim().toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,40);
  var name=(document.getElementById("mktName").value||"").trim().slice(0,60);
  if(!code){toast("코드를 영문·숫자로 지어주세요");return;}
  if(!name){toast("캠페인 이름을 적어주세요");return;}
  var ins=await window.supabase.from("mkt_campaigns").insert({
    code:code,name:name,
    channel:((document.getElementById("mktCh").value||"").trim().slice(0,20))||null,
    spend:parseInt((document.getElementById("mktSpend").value||"").replace(/[^0-9]/g,""),10)||0
  });
  if(ins.error){toast(/duplicate|unique/i.test(ins.error.message)?"이미 쓰고 있는 코드예요":("만들지 못했어요: "+ins.error.message));return;}
  MKT_FORM=false;
  toast("만들었어요 · 링크 /?c="+code,"📈");
  openAdminMkt();
}
// 광고비는 집행하고 나서 알게 되는 경우가 많아 나중에 고칠 수 있어야 한다.
async function mktSetSpend(code){
  var el=document.getElementById("mktSpend_"+code);if(!el)return;
  var v=parseInt((el.value||"").replace(/[^0-9]/g,""),10)||0;
  var up=await window.supabase.from("mkt_campaigns").update({spend:v}).eq("code",code);
  if(up.error){toast("저장하지 못했어요: "+up.error.message);return;}
  toast("광고비를 저장했어요");
  openAdminMkt();
}
// 효율이 나쁜 캠페인은 '중단'으로 내린다. 기록은 남기고 목록에서 흐리게만 표시된다.
async function mktToggleActive(code,cur){
  var up=await window.supabase.from("mkt_campaigns").update({active:!cur}).eq("code",code);
  if(up.error){toast("바꾸지 못했어요: "+up.error.message);return;}
  toast(cur?"중단했어요":"다시 진행 중으로 바꿨어요");
  openAdminMkt();
}
function mktCopyLink(code){
  var url=location.origin+"/?c="+code;
  try{navigator.clipboard.writeText(url);toast("링크를 복사했어요","🔗");}
  catch(e){toast(url);}
}
// 보관본은 글·댓글·커미션 세 종류. 표 이름과 화면 문구만 다르고 흐름은 같아 한 화면에서 탭으로 다룬다.
var ADMIN_DEL_KIND="post";
var ADMIN_DEL_TABLE={post:"admin_post_deletions",comment:"admin_comment_deletions",commission:"admin_commission_deletions"};
var ADMIN_DEL_LABEL={post:"글",comment:"댓글",commission:"커미션"};
async function openAdminDeletionLog(kind){
  if(!AUTH.profile||!AUTH.profile.is_admin||!window.supabase)return;
  ADMIN_DEL_KIND=ADMIN_DEL_TABLE[kind]?kind:ADMIN_DEL_KIND;
  enterScreen("delLog",openProfile); // 뒤로가기가 프로필로 복귀
  var res=await window.supabase.from(ADMIN_DEL_TABLE[ADMIN_DEL_KIND])
    .select("*").order("created_at",{ascending:false}).limit(100);
  if(res.error){
    // 표가 없으면(SQL 실행 전) 무엇을 해야 하는지 알려준다 — 그냥 "실패"만 뜨면 원인을 알 수 없다
    ADMIN_DEL_LOG=[];
    renderAdminDeletionLog([],/Could not find the table|does not exist/.test(res.error.message)
      ?"이 기록은 <b>docs/sql/deletion-archive.sql</b>을 실행해야 쌓이기 시작해요."
      :"불러오지 못했어요: "+esc(res.error.message));
    return;
  }
  ADMIN_DEL_LOG=res.data||[];
  renderAdminDeletionLog(ADMIN_DEL_LOG);
}
function _delTabsHTML(){
  return '<div class="del-tabs">'+["post","comment","commission"].map(function(k){
    return '<div class="del-tab'+(ADMIN_DEL_KIND===k?' on':'')+'" onclick="openAdminDeletionLog(\''+k+'\')">'+ADMIN_DEL_LABEL[k]+'</div>';
  }).join('')+'</div>';
}
// 되살린 뒤에는 카드에 표시를 남긴다(보관본은 지우지 않고 증거로 계속 둔다)
function _restoredTagHTML(r){
  return r.restored_at?'<span class="del-restored">되살림 · '+timeAgo(r.restored_at)+'</span>':'';
}
/* 누가 지웠는지. 본인이 지운 것도 보관하게 되면서(2026-08-08) 이 구분이 중요해졌다 —
   예전처럼 관리자 닉네임만 찍으면 본인 삭제가 전부 "관리자 (알 수 없음)"으로 보인다.
   ⚠️ deleted_by가 없는 옛 기록은 전부 관리자 삭제다(그때는 그것만 보관했으므로). */
function delActorHTML(r,kind){
  if(r.deleted_by==="author")return '<span class="del-by-self">'+(kind==="commission"?"작가 본인":"작성자 본인")+'</span>';
  if(r.deleted_by==="other") return '<span class="del-by-etc">연쇄 삭제</span>';
  return esc(r.admin_nick||"(알 수 없음)")+' <span class="del-by-adm">관리자</span>';
}
function renderAdminDeletionLog(rows,emptyMsg){
  var kind=ADMIN_DEL_KIND;
  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
    '<div class="pf-sec">🗑 삭제 기록</div>'+_delTabsHTML();
  if(!rows.length){
    h+='<div class="pf-empty">'+(emptyMsg||("아직 삭제한 "+ADMIN_DEL_LABEL[kind]+"이(가) 없어요."))+'</div>';
  }else{
    h+='<div class="del-log-list">';
    rows.forEach(function(r){
      var body=(kind==="commission"?(r.description||""):(r.content||"")).replace(/\s+/g," ").trim();
      if(body.length>140)body=body.slice(0,140)+"…";
      var head=kind==="post"?esc(boardName(r.board)||r.board||"게시판")
        :(kind==="comment"?"댓글":"커미션");
      var title=kind==="comment"
        ?("글: "+esc(r.post_title||"(삭제된 글)"))
        :esc(r.title||"(제목 없음)");
      h+='<div class="del-log" onclick="openArchivedItem('+r.id+')">'+
        '<div class="del-log-top"><span class="del-log-board">'+head+'</span>'+
          '<span class="del-log-time">'+_restoredTagHTML(r)+timeAgo(r.created_at)+'</span></div>'+
        '<div class="del-log-title">'+title+'</div>'+
        (body?'<div class="del-log-snip">'+esc(body)+'</div>':'')+
        '<div class="del-log-meta">작성자 <b>'+esc(r.author_nick||"(알 수 없음)")+'</b> · 지운 사람 <b>'+delActorHTML(r,kind)+'</b></div>'+
        '<div class="del-log-reason">사유: '+(r.reason?esc(r.reason):'<span style="opacity:.6">미입력</span>')+(r.notified?'':' · <span style="opacity:.75">알림 미발송</span>')+'</div>'+
        '<div class="del-log-open">보관본 보기 ›</div>'+
      '</div>';
    });
    h+='</div>';
  }
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
// 보관본에서 되살리기. 원래 번호가 아니라 새 번호로 다시 들어간다(그 번호를 다른 글이 쓸 수 있으므로).
async function adminRestoreItem(logId){
  var kind=ADMIN_DEL_KIND;
  var what=ADMIN_DEL_LABEL[kind];
  if(!(await confirmDialog("이 "+what+"을(를) 되살릴까요?\\n원래 작성자·작성시각 그대로 다시 올라가요.")))return;
  var fn={post:"admin_restore_post",comment:"admin_restore_comment",commission:"admin_restore_commission"}[kind];
  var res=await window.supabase.rpc(fn,{p_log_id:logId});
  if(res.error){toast("되살리지 못했어요: "+res.error.message);return;}
  var d=res.data||{};
  if(!d.ok){
    var msg={not_admin:"관리자만 사용할 수 있어요",
      already_restored:"이미 되살린 "+what+"이에요",
      post_gone:"댓글이 달려 있던 글이 사라져서 되살릴 수 없어요",
      author_gone:"작성자 계정이 사라져서 되살릴 수 없어요",
      not_found:"보관본을 찾을 수 없어요"}[d.error]||("되살리지 못했어요 ("+(d.error||"오류")+")");
    toast(msg);return;
  }
  toast(what+"을(를) 되살렸어요","♻️");
  if(kind==="post"){try{await loadRealPosts(true);}catch(e){}}
  else if(kind==="commission"){try{await cmLoadCommissions();}catch(e){}}
  openAdminDeletionLog(kind);
}
function openArchivedItem(logId){
  var row=(ADMIN_DEL_LOG||[]).find(function(x){return x.id===logId;});
  if(!row){toast("보관본을 찾을 수 없어요");return;}
  if(ADMIN_DEL_KIND==="post")renderArchivedPost(row);
  else if(ADMIN_DEL_KIND==="comment")renderArchivedComment(row);
  else renderArchivedCommission(row);
}
// 보관본 화면 위쪽에 공통으로 붙는 붉은 띠(누가·언제·왜 지웠는지 + 되살리기 버튼)
function _archivedBannerHTML(row,what){
  var meta='삭제 관리자 <b>'+esc(row.admin_nick||"(알 수 없음)")+'</b> · '+timeAgo(row.created_at)+
    ' · 사유: '+(row.reason?esc(row.reason):"미입력")+(row.notified?'':' · 알림 미발송');
  var btn=row.restored_at
    ?'<div class="archived-restored">♻️ '+timeAgo(row.restored_at)+' 되살림'+(row.restored_id?' (새 번호 '+row.restored_id+')':'')+'</div>'
    :'<button class="archived-restore" onclick="adminRestoreItem('+row.id+')">♻️ 이 '+what+' 되살리기</button>';
  return '<div class="archived-banner">🗑 삭제된 '+what+' 보관본<div class="archived-banner-sub">'+meta+'</div>'+btn+'</div>';
}
function renderArchivedComment(row){
  var h='<div class="detail">'+
    '<button class="d-back" onclick="openAdminDeletionLog(\'comment\')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>삭제 기록으로</button>'+
    _archivedBannerHTML(row,"댓글")+
    '<div class="d-head"><div class="line1"><span class="cat free-c">댓글</span></div>'+
      '<h1 class="serif">'+esc(row.post_title||"(글이 삭제됨)")+'</h1>'+
      '<div class="d-author"><div class="d-ava serif">'+avatarHTML(row.author_nick||"익명",row.author_avatar)+'</div>'+
      '<div class="d-au-info"><div class="n">'+esc(dispName(row.author_nick||"익명"))+levelBadgeHtml(row.author_level,"lv-badge")+'</div>'+
      '<div class="meta">'+(row.comment_created_at?timeAgo(row.comment_created_at):"작성시각 알 수 없음")+'</div></div></div></div>'+
    '<div class="d-content"><p>'+withEmoticons(esc(row.content||"(내용 없음)")).replace(/\n/g,"<br>")+'</p></div>'+
  '</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
function renderArchivedCommission(row){
  var imgs=row.images;
  if(typeof imgs==="string"){try{imgs=JSON.parse(imgs);}catch(e){imgs=null;}}
  var pics=(imgs&&imgs.length)?'<div class="d-canvas" style="height:auto;display:block;padding:0">'+
    imgs.map(function(u){return '<img src="'+esc(u)+'" alt="" style="width:100%;display:block;max-height:520px;object-fit:cover">';}).join("")+'</div>':'';
  var safe=row.description_html?sanitizePostHtml(row.description_html):null;
  var body=safe?safe:('<p>'+esc(row.description||"(설명 없음)").replace(/\n/g,"<br>")+'</p>');
  var rows=[["가격",row.price],["작업 기간",row.period],["모집 인원",row.slots],
    ["태그",(row.tags||[]).join(", ")],["작업물 사용 권한",row.usage_rights],["거래 정책",row.trade_policy]]
    .filter(function(x){return x[1];})
    .map(function(x){return '<div class="del-kv"><span>'+x[0]+'</span><b>'+esc(String(x[1]))+'</b></div>';}).join("");
  var h='<div class="detail">'+
    '<button class="d-back" onclick="openAdminDeletionLog(\'commission\')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>삭제 기록으로</button>'+
    _archivedBannerHTML(row,"커미션")+
    '<div class="d-head"><div class="line1"><span class="cat free-c">커미션</span></div>'+
      '<h1 class="serif">'+esc(row.title||"(제목 없음)")+'</h1>'+
      '<div class="d-author"><div class="d-ava serif">'+avatarHTML(row.author_nick||"익명",null)+'</div>'+
      '<div class="d-au-info"><div class="n">'+esc(dispName(row.author_nick||"익명"))+'</div>'+
      '<div class="meta">'+(row.commission_created_at?timeAgo(row.commission_created_at):"등록시각 알 수 없음")+'</div></div></div></div>'+
    pics+(rows?'<div class="del-kv-list">'+rows+'</div>':'')+
    '<div class="d-content">'+body+'</div>'+
  '</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
/* 삭제된 글의 스냅샷(보관본)을 원본 글 상세처럼 읽기 전용으로 재구성 */
function renderArchivedPost(row){
  var imgs=row.images;
  if(typeof imgs==="string"){try{imgs=JSON.parse(imgs);}catch(e){imgs=null;}}
  var p={board:row.board,category:row.category,title:row.title,stage:row.stage,thumb:"none",
    html:row.content_html||undefined,content:(row.content||"").split("\n").filter(Boolean),
    images:imgs,author:row.author_nick||"익명",authorAvatar:row.author_avatar,authorLevel:row.author_level,
    time:row.post_created_at?timeAgo(row.post_created_at):"삭제됨"};
  var c=catFor(p);
  var safeHtml=p.html?sanitizePostHtml(p.html):null;
  var contentHasMedia=safeHtml&&/<img[\s>]|<video[\s>]/i.test(safeHtml);
  var canvas=(!contentHasMedia&&p.images&&p.images.length)?
    '<div class="d-canvas" style="height:auto;display:block;padding:0">'+(p.stage?'<span class="stage-tag">'+esc(p.stage)+' 단계</span>':'')+
      p.images.map(function(url){return '<img src="'+esc(url)+'" alt="" style="width:100%;display:block;max-height:520px;object-fit:cover">'}).join("")+
    '</div>':'';
  var body=safeHtml?safeHtml:(p.content.length?p.content.map(function(x){return '<p>'+esc(x)+'</p>'}).join(""):'<p style="color:var(--muted)">(본문 없음)</p>');
  var h='<div class="detail">'+
    '<button class="d-back" onclick="openAdminDeletionLog(\'post\')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>삭제 기록으로</button>'+
    _archivedBannerHTML(row,"글")+
    '<div class="d-head"><div class="line1"><span class="cat '+c.cls+'">'+c.label+'</span></div><h1 class="serif">'+esc(p.title||"(제목 없음)")+'</h1>'+
    '<div class="d-author"><div class="d-ava serif">'+avatarHTML(p.author,p.authorAvatar)+'</div><div class="d-au-info"><div class="n">'+esc(dispName(p.author))+anonIpHTML(p.ipMasked)+levelBadgeHtml(p.authorLevel,"lv-badge")+'</div><div class="meta">'+esc(p.time)+'</div></div></div></div>'+
    canvas+'<div class="d-content">'+body+'</div>'+
  '</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
async function savePickPosition(id){
  var p=POSTS.find(function(x){return x.id===id});if(!p||!p.dbId||!window.supabase)return;
  var input=document.getElementById("pickPos"+id);
  var newPos=parseInt(input.value,10);
  if(!newPos||newPos<1){toast("1 이상의 숫자를 입력해주세요");return;}
  var res=await window.supabase.rpc("set_manager_pick",{p_post_id:p.dbId,p_is_pick:true,p_position:newPos});
  if(res.error){toast("처리 실패: "+res.error.message);return;}
  p.pickPosition=newPos;
  p.pickedAt=new Date().toISOString();
  toast("위치를 "+newPos+"번으로 바꿨어요");
  openManagerPickList();
}
async function unpickFromList(id){
  var p=POSTS.find(function(x){return x.id===id});if(!p||!p.dbId||!window.supabase)return;
  var res=await window.supabase.rpc("set_manager_pick",{p_post_id:p.dbId,p_is_pick:false,p_position:null});
  if(res.error){toast("처리 실패: "+res.error.message);return;}
  p.isManagerPick=false;p.pickPosition=null;p.pickedAt=null;
  toast("매니저 픽을 해제했어요");
  openManagerPickList();
}
/* ---------- 유저 광고 ---------- */
var adState={postId:null,commissionId:null,bannerUrl:null};
function openCreateAd(postId){
  var p=POSTS.find(function(x){return x.id===postId});if(!p||!p.dbId)return;
  if(!AUTH.user||p.authorId!==AUTH.user.id){toast("본인 글만 광고할 수 있어요");return;}
  adState={postId:postId,commissionId:null,bannerUrl:null};
  document.getElementById("adNoticeModal").classList.add("open");
}
function openCreateAdForCommission(commissionId){
  var c=cmMyList.find(function(x){return x.id===commissionId});
  if(!c||!AUTH.user){toast("본인 커미션만 광고할 수 있어요");return;}
  adState={postId:null,commissionId:commissionId,bannerUrl:null};
  document.getElementById("adNoticeModal").classList.add("open");
}
function closeAdNoticeModal(){document.getElementById("adNoticeModal").classList.remove("open");}
function agreeAdNotice(){
  closeAdNoticeModal();
  document.getElementById("adBannerPreview").innerHTML="";
  document.getElementById("adRateInput").value="";
  document.getElementById("adDaysInput").value="";
  document.getElementById("adModalTitle").textContent=adState.commissionId?"📢 이 커미션 광고하기":"📢 이 글 광고하기";
  document.getElementById("adPreviewText").textContent="보유 광고 포인트: "+(AUTH.profile?(AUTH.profile.ad_points||0):0)+"점 · 총 사용 포인트는 최소 500점부터 집행 가능";
  document.getElementById("adModal").classList.add("open");
}
function closeAdModal(){document.getElementById("adModal").classList.remove("open");}
async function onAdBannerFile(e){
  var f=e.target.files[0];if(!f)return;
  e.target.value="";
  if(!window.supabase){toast("업로드를 사용할 수 없어요");return;}
  if(ALLOWED_IMAGE_TYPES.indexOf(f.type)===-1){toast("이미지 파일만 올릴 수 있어요");return;}
  if(f.size>MAX_IMAGE_BYTES){toast("40MB 이하 이미지만 올릴 수 있어요");return;}
  var uploadBlob=f,ext=(f.name.match(/\.([^.]+)$/)||[,"png"])[1];
  if(f.type!=="image/gif"){
    toast("배너 이미지 압축 중...");
    try{
      var compressed=await compressImage(f);
      uploadBlob=compressed.blob;ext=compressed.ext;
    }catch(err){
      console.error("배너 압축 실패, 원본으로 업로드:",err);
    }
  }
  toast("배너 업로드 중...");
  var bannerUrl=await uploadToStorage(uploadBlob,"ad");
  if(!bannerUrl)return;
  adState.bannerUrl=bannerUrl;
  document.getElementById("adBannerPreview").innerHTML='<img src="'+esc(adState.bannerUrl)+'" style="width:100%;border-radius:10px;display:block">';
  toast("배너 이미지를 등록했어요");
}
async function onAvatarFile(e){
  var f=e.target.files[0];if(!f)return;
  e.target.value="";
  if(!window.supabase||!AUTH.user){toast("로그인이 필요해요");return;}
  if(ALLOWED_IMAGE_TYPES.indexOf(f.type)===-1){toast("이미지 파일만 올릴 수 있어요");return;}
  if(f.size>MAX_IMAGE_BYTES){toast("40MB 이하 이미지만 올릴 수 있어요");return;}
  var uploadBlob=f,ext=(f.name.match(/\.([^.]+)$/)||[,"png"])[1];
  if(f.type!=="image/gif"){
    toast("이미지 압축 중...");
    try{
      var compressed=await compressImage(f);
      uploadBlob=compressed.blob;ext=compressed.ext;
    }catch(err){
      console.error("프로필 이미지 압축 실패, 원본으로 업로드:",err);
    }
  }
  toast("업로드 중...");
  var url=await uploadToStorage(uploadBlob,"avatar");
  if(!url)return;
  var res=await window.supabase.from("profiles").update({avatar_url:url},{count:"exact"}).eq("id",AUTH.user.id);
  if(!res.error&&res.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(res.error){toast("저장 실패: "+res.error.message);return;}
  AUTH.profile.avatar_url=url;
  POSTS.forEach(function(p){
    if(p.authorId===AUTH.user.id)p.authorAvatar=url;
    if(p.comments)p.comments.forEach(function(c){if(c.authorId===AUTH.user.id)c.av=url;});
  });
  toast("프로필 이미지를 변경했어요");
  openProfile();
}
function updateAdPreview(){
  var rate=parseInt(document.getElementById("adRateInput").value,10)||0;
  var days=parseInt(document.getElementById("adDaysInput").value,10)||0;
  var pts=rate*days;
  document.getElementById("adPreviewText").textContent=(rate&&days)?
    (days+"일 동안 1일 "+rate+"점씩 · 총 "+pts+"점 소모돼요"+(pts<500?" (최소 500점 필요)":"")+" · 보유 "+(AUTH.profile?(AUTH.profile.ad_points||0):0)+"점"):
    ("보유 광고 포인트: "+(AUTH.profile?(AUTH.profile.ad_points||0):0)+"점 · 총 사용 포인트는 최소 500점부터 집행 가능");
}
async function submitAd(){
  if(!window.supabase){toast("사용할 수 없어요");return;}
  if(!adState.postId&&!adState.commissionId){toast("대상 정보를 찾을 수 없어요");return;}
  if(!adState.bannerUrl){toast("배너 이미지를 선택해주세요");return;}
  var rate=parseInt(document.getElementById("adRateInput").value,10);
  var days=parseInt(document.getElementById("adDaysInput").value,10);
  if(!rate||rate<1){toast("1일당 사용할 포인트를 입력해주세요");return;}
  if(!days||days<1){toast("노출할 날짜를 입력해주세요");return;}
  if(rate*days<500){toast("최소 500포인트부터 집행할 수 있어요");return;}
  var rpcArgs={p_image_url:adState.bannerUrl,p_points_per_day:rate,p_duration_days:days,p_post_id:null,p_commission_id:null};
  var p=null;
  if(adState.postId){
    p=POSTS.find(function(x){return x.id===adState.postId});if(!p||!p.dbId)return;
    rpcArgs.p_post_id=p.dbId;
  }else{
    rpcArgs.p_commission_id=adState.commissionId;
  }
  var res=await window.supabase.rpc("create_user_ad",rpcArgs);
  if(res.error){toast("광고 등록 실패: "+res.error.message);return;}
  closeAdModal();
  await refreshMyProfile();
  if(p){
    p.adLocked=true;
    if(typeof renderPostDetail==="function")renderPostDetail(p.id);
  }else{
    AD_LOCKED_COMMISSION_IDS[adState.commissionId]=true;
    cmOpenMy('mine');
  }
  toast("광고 신청이 접수됐어요. 관리자 승인 후 노출돼요 📋");
}
var reportingPostId=null;
var reportingConversationId=null;
var reportingReportedUserId=null;
var reportingAdId=null;
var reportingEmoticonPackId=null; // 이모티콘 팩 신고 대상
var reportingCommissionId=null;    // 커미션 신고 대상
function reportAd(adId,e){
  if(e)e.stopPropagation();
  if(!window.supabase){toast("사용할 수 없어요");return;}
  reportingAdId=adId;
  document.getElementById("reportReasonInput").value="";
  _resetReportForm();
  document.getElementById("reportModal").classList.add("open");
}
function reportPost(id){
  var p=POSTS.find(function(x){return x.id===id});if(!p)return;
  if(!p.dbId||!window.supabase){toast("신고가 접수되었어요");return;}
  reportingPostId=id;
  document.getElementById("reportReasonInput").value="";
  _resetReportForm();
  document.getElementById("reportModal").classList.add("open");
}
function reportChat(){
  if(!AUTH.user||!currentConversationId){toast("로그인이 필요해요");return;}
  reportingConversationId=currentConversationId;
  reportingReportedUserId=currentChatPartnerId;
  document.getElementById("reportReasonInput").value="";
  _resetReportForm();
  document.getElementById("reportModal").classList.add("open");
}
function closeReport(){
  reportingPostId=null;reportingConversationId=null;reportingReportedUserId=null;reportingAdId=null;reportingEmoticonPackId=null;reportingCommissionId=null;
  document.getElementById("reportModal").classList.remove("open");
}

/* ===== 신고 =====
   유형을 미리 정해 고르게 하지 않고 신고자가 직접 쓰게 한다.
   목록을 주면 거기에 없는 문제는 '기타'로 뭉뚱그려지고 정작 필요한 맥락이 빠진다.
   대신 서술을 **필수**로 받는다 — 빈 신고는 운영자가 판단할 근거가 없다. */
var URGENT_WORDS=["불법촬영","몰카","리벤지","아동","미성년","성착취","아청","초등","중학생"];
// 관리자 신고함에서 긴급해 보이는 신고를 위로 올리기 위한 판별(표시·정렬 전용).
// 자동으로 글을 가리는 등의 조치는 일절 하지 않는다.
function _isUrgentReport(r){
  var t=String((r&&r.reason)||"");
  return URGENT_WORDS.some(function(w){return t.indexOf(w)>-1;});
}
// 신고창을 열 때마다 안내를 기본 문구로 되돌린다(이전 신고의 경고가 남지 않게)
function _resetReportForm(){
  var hint=document.getElementById("reportCatHint");
  if(hint){hint.textContent="신고 내용은 운영진만 확인할 수 있어요.";hint.classList.remove("rp-urgent");}
}
async function submitReport(){
  var reason=document.getElementById("reportReasonInput").value.trim();
  if(reason.length<5){
    var hint=document.getElementById("reportCatHint");
    if(hint){hint.textContent="어떤 점이 문제인지 조금만 더 적어주세요.";hint.classList.add("rp-urgent");}
    return;
  }
  if(reportingConversationId){
    var convId=reportingConversationId,reportedUserId=reportingReportedUserId;
    var res=await window.supabase.from("reports").insert({conversation_id:convId,reported_user_id:reportedUserId,reporter_id:AUTH.user.id,reason:reason});
    closeReport();
    if(res.error){toast("신고 접수 실패: "+res.error.message);return;}
    toast("신고가 접수되었어요");
    return;
  }
  if(reportingCommissionId){
    var cId=reportingCommissionId;
    var res=await window.supabase.from("reports").insert({commission_id:cId,reporter_id:AUTH.user?AUTH.user.id:null,reason:reason});
    closeReport();
    if(res.error){toast("신고 접수 실패: "+res.error.message);return;}
    toast("신고가 접수되었어요");
    return;
  }
  if(reportingEmoticonPackId){
    var packId=reportingEmoticonPackId;
    var res=await window.supabase.from("reports").insert({emoticon_pack_id:packId,reporter_id:AUTH.user?AUTH.user.id:null,reason:reason});
    closeReport();
    if(res.error){toast("신고 접수 실패: "+res.error.message);return;}
    toast("신고가 접수되었어요");
    return;
  }
  if(reportingAdId){
    var adId=reportingAdId;
    var res=await window.supabase.from("reports").insert({ad_id:adId,reporter_id:AUTH.user?AUTH.user.id:null,reason:reason});
    closeReport();
    if(res.error){toast("신고 접수 실패: "+res.error.message);return;}
    toast("신고가 접수되었어요");
    return;
  }
  var id=reportingPostId;var p=POSTS.find(function(x){return x.id===id});if(!p)return;
  var res=await window.supabase.from("reports").insert({post_id:p.dbId,reporter_id:AUTH.user?AUTH.user.id:null,reason:reason});
  closeReport();
  if(res.error){toast("신고 접수 실패: "+res.error.message);return;}
  toast("신고가 접수되었어요");
}
function confirmDialog(message){
  return new Promise(function(resolve){
    var modal=document.getElementById("confirmModal");
    var okBtn=document.getElementById("confirmModalOkBtn");
    var cancelBtn=document.getElementById("confirmModalCancelBtn");
    document.getElementById("confirmModalBody").textContent=message;
    modal.classList.add("open");
    function cleanup(result){
      modal.classList.remove("open");
      okBtn.removeEventListener("click",onOk);
      cancelBtn.removeEventListener("click",onCancel);
      resolve(result);
    }
    function onOk(){cleanup(true);}
    function onCancel(){cleanup(false);}
    okBtn.addEventListener("click",onOk);
    cancelBtn.addEventListener("click",onCancel);
  });
}
function renderComments(p){
  if(p.comments.length===0)return '<div style="padding:26px 0;text-align:center;color:var(--muted);font-size:13px">첫 댓글을 남겨보세요 ✏️</div>';
  var isFeedback=(p.board==='crit');                                  // '피드백 요청' 게시판만 채택 기능
  var isPostAuthor=!!(AUTH.user&&p.authorId&&p.authorId===AUTH.user.id);
  var accId=p.acceptedCommentId||null;
  // 원본 인덱스(ci)는 helpful/deleteComment용으로 보존하면서, 채택된 댓글만 맨 위로 정렬
  var list=p.comments.map(function(c,ci){return {c:c,ci:ci};});
  if(isFeedback&&accId)list.sort(function(a,b){return ((a.c.dbId===accId)?0:1)-((b.c.dbId===accId)?0:1);});
  return list.map(function(item){
    var c=item.c,ci=item.ci;
    // 뮤트한 사람의 댓글도 자리를 남기고 접는다 — 통째로 지우면 답글 흐름이 끊긴다.
    // ⚠️ 글 id를 함께 넘긴다. '지금 열린 글'을 가리키는 전역이 없어서, 펼칠 때 이 값으로
    //    그 글의 댓글만 다시 그린다(화면 전체를 다시 그리면 스크롤이 맨 위로 튄다).
    if(isMuted(c.authorId)){
      var _bk=isBlocked(c.authorId);
      return '<div class="muted-row cmt'+(_bk?' blocked':'')+'"'+(_bk?'':' onclick="revealMuted(\''+esc(c.authorId)+'\','+p.id+')"')+'>'+
        '<span class="mr-ic">'+(_bk?'🚫':'🔕')+'</span>'+
        '<span class="mr-tx">'+(_bk?'차단한 사람의 댓글':'뮤트한 사람의 댓글')+'</span>'+
        (_bk?'':'<span class="mr-go">보기</span>')+'</div>';
    }
    var canDelete=c.dbId&&AUTH.user&&c.authorId===AUTH.user.id;
    // 관리자는 남의 댓글도 지울 수 있어야 한다(지금까진 버튼 자체가 없었다).
    // 본인 댓글은 위 '삭제'로 조용히 지우고, 남의 댓글은 사유를 받아 보관본을 남기는 경로로 보낸다.
    var canAdminDelete=c.dbId&&AUTH.user&&AUTH.profile&&AUTH.profile.is_admin&&c.authorId!==AUTH.user.id;
    var isAccepted=isFeedback&&accId&&c.dbId===accId;
    var acceptBtn=(isFeedback&&isPostAuthor&&c.dbId)
      ? (isAccepted?'<span class="cm-accept-btn on" onclick="acceptFeedback('+p.id+','+c.dbId+',true)">채택 취소</span>'
                   :'<span class="cm-accept-btn" onclick="acceptFeedback('+p.id+','+c.dbId+',false)">✅ 채택</span>')
      : '';
    var badge=isAccepted?'<div class="cm-accepted-badge">✅ 채택된 피드백</div>':'';
    var isReply=/^\s*@\S/.test(c.txt||''); // "@닉네임"으로 시작하면 답글
    return '<div class="cm'+(isAccepted?' accepted':'')+(isReply?' reply':'')+'"><div class="d-ava serif">'+avatarHTML(c.n,c.av)+'</div><div class="cbody">'+badge+'<div class="ch"><span class="cn"'+(c.authorId?' style="cursor:pointer" onclick="openUserProfile(\''+c.authorId+'\')"':'')+'>'+esc(c.n)+anonIpHTML(c.ip)+memoBadge(c.authorId)+'</span>'+levelBadgeHtml(c.lv,"lv-badge")+titleBadgeById(c.tt)+'<span class="ct">'+esc(c.t)+'</span></div><div class="ctext">'+withEmoticons(esc(c.txt).replace(/^@(\S+)/,'<b class="mention">@$1</b>'))+'</div><div class="cfoot"><span onclick="helpful('+p.id+','+ci+',this)"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11v9H4v-9zM7 11l4-8a2 2 0 0 1 3 2l-1 6h5a2 2 0 0 1 2 2l-1 6a2 2 0 0 1-2 1H7"/></svg>도움돼요'+(c.h?' <b>'+c.h+'</b>':'')+'</span><span onclick="replyTo(\''+esc(c.n)+'\')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"/></svg>답글</span>'+(canDelete?'<span onclick="deleteComment('+p.id+','+ci+')">삭제</span>':'')+(canAdminDelete?'<span class="c-admindel" onclick="adminDeleteComment('+p.id+','+ci+')">🗑 관리자 삭제</span>':'')+acceptBtn+'</div></div></div>';
  }).join("");
}
async function acceptFeedback(postId,commentDbId,isCancel){
  var p=POSTS.find(function(x){return x.id===postId});if(!p||!p.dbId||!window.supabase)return;
  if(!AUTH.user||p.authorId!==AUTH.user.id){toast("글 작성자만 채택할 수 있어요");return;}
  var res=await window.supabase.rpc("set_accepted_feedback",{p_post_id:p.dbId,p_comment_id:isCancel?null:commentDbId});
  if(res.error){toast("채택 실패: "+res.error.message);return;}
  var data=res.data||{};
  if(!data.ok){toast("채택할 수 없어요 ("+(data.error||"오류")+")");return;}
  p.acceptedCommentId=data.accepted||null;
  var el=document.getElementById("cmList");if(el)el.innerHTML=renderComments(p);
  var msg;
  if(isCancel)msg="채택을 취소했어요";
  else if(data.rewarded)msg="채택했어요! 작성자에게 광고 "+(data.ad!=null?data.ad:25)+"·활동 "+(data.activity!=null?data.activity:25)+"점 지급 🎁";
  else msg="채택했어요";
  toast(msg);
}
/* 관리자가 남의 댓글을 삭제 — 사유를 받고 원본을 보관본으로 남긴다.
   보안: RPC 안에서 is_admin()을 확인하므로 버튼을 숨기는 것과 무관하게 일반 유저는 막힌다. */
async function adminDeleteComment(postId,ci){
  var p=POSTS.find(function(x){return x.id===postId});if(!p)return;
  var c=p.comments[ci];if(!c||!c.dbId)return;
  var r=await adminDeleteReasonDialog();
  if(!r)return;
  if(!(await confirmDialog(r.notify?"이 댓글을 삭제할까요? 작성자에게 알림이 전송돼요.":"이 댓글을 삭제할까요? (작성자에게 알림을 보내지 않습니다)")))return;
  var res=await window.supabase.rpc("admin_delete_comment",{p_comment_id:c.dbId,p_reason:r.reason,p_notify:r.notify});
  if(res.error){toast("삭제 실패: "+res.error.message);return;}
  var d=res.data||{};
  if(!d.ok){toast(d.error==="not_admin"?"관리자만 사용할 수 있어요":("삭제할 수 없어요 ("+(d.error||"오류")+")"));return;}
  p.comments.splice(ci,1);
  var listEl=document.getElementById("cmList");
  if(listEl)listEl.innerHTML=renderComments(p);
  var head=document.querySelector(".cm-head");
  if(head)head.innerHTML='<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"/></svg>댓글 '+p.comments.length;
  toast(r.notify?"관리자 권한으로 댓글을 삭제했어요":"관리자 권한으로 댓글을 삭제했어요 (알림 미발송)");
}
async function deleteComment(postId,ci){
  var p=POSTS.find(function(x){return x.id===postId});if(!p)return;
  var c=p.comments[ci];if(!c)return;
  if(!(await confirmDialog("댓글을 삭제할까요?")))return;
  if(c.dbId&&window.supabase){
    var res=await window.supabase.from("comments").delete({count:"exact"}).eq("id",c.dbId);
    if(res.error){toast("삭제 실패: "+res.error.message);return;}
    if(res.count===0){toast("삭제되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  }
  p.comments.splice(ci,1);
  document.getElementById("cmList").innerHTML=renderComments(p);
  document.querySelector(".cm-head").innerHTML='<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"/></svg>댓글 '+p.comments.length;
  toast("댓글을 삭제했어요");
}
async function addComment(id){
  var p=POSTS.find(function(x){return x.id===id});var inp=document.getElementById("cmInput");var v=inp.value.trim();
  if(!v){toast("내용을 입력해주세요");return;}
  var newComment={n:"나",t:"방금",txt:v};
  if(p.dbId&&window.supabase){
    var res=await window.supabase.from("comments").insert({post_id:p.dbId,author_id:AUTH.user?AUTH.user.id:null,content:v}).select().single();
    if(res.error){toast("저장 실패: "+res.error.message);return;}
    newComment.dbId=res.data.id;newComment.authorId=res.data.author_id;
    refreshMyProfile();
  }
  p.comments.push(newComment);
  document.getElementById("cmList").innerHTML=renderComments(p);
  document.querySelector(".cm-head").innerHTML='<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"/></svg>댓글 '+p.comments.length;
  inp.value="";track("comment");toast("댓글을 남겼어요 ✏️");
}
async function toggleLike(id){
  var p=POSTS.find(function(x){return x.id===id});
  if(p.dbId&&window.supabase){
    var uid=myLikeId();
    if(p._liked){
      var del=await window.supabase.from("likes").delete({count:"exact"}).eq("post_id",p.dbId).eq("user_id",uid);
      if(!del.error&&del.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
      if(del.error){toast("처리 실패: "+del.error.message);return;}
      p._liked=false;p.likes--;
    }else{
      var ins=await window.supabase.from("likes").insert({post_id:p.dbId,user_id:uid});
      if(ins.error){toast("처리 실패: "+ins.error.message);return;}
      p._liked=true;p.likes++;track("like");
    }
  }else{
    p._liked=!p._liked;p.likes+=p._liked?1:-1;
  }
  // 방금의 좋아요로 문턱을 넘거나(등극) 내려가면(강등) 추천글 표시도 바로 따라간다.
  // 다음 새로고침 때는 10번째 좋아요의 실제 시각으로 다시 계산된다.
  if(p.likes>=BEST_LIKES&&!p.bestAt)p.bestAt=new Date().toISOString();
  else if(p.likes<BEST_LIKES)p.bestAt=null;
  var wasLiked=p._liked;
  var btn=document.getElementById("likeBtn");
  if(btn){
    btn.classList.toggle("liked",p._liked);
    btn.innerHTML=likeIconSvg(p._liked)+'좋아요 '+p.likes;
    btn.classList.add("pop");setTimeout(function(){btn.classList.remove("pop")},340);
  }
  if(wasLiked)toast("좋아요를 눌렀어요","♥");
}
function selectBoard(id,skipRender){
  // 19+ 게시판은 확인을 마친 계정만 들어갈 수 있다(서버 RLS로도 막혀 있고, 여기선 안내를 띄운다)
  if(id==="adult"&&!isAdultVerified()){
    closeDrawer();closeSheet();
    if(!AUTH.user){openLoginModal();toast("로그인 후 이용할 수 있어요","🔒");}
    else openAdultGate();
    return; // 게시판을 바꾸지 않고 그대로 머문다
  }
  state.board=id;state.query="";state.searchTab="all";state.searchBoard="";if(state.sort==="rel")state.sort="new";state.tag=null;page=1;
  document.getElementById("searchInput").value="";var m=document.getElementById("searchInputM");if(m)m.value="";
  renderNav(document.getElementById("boardNav"));renderNav(document.getElementById("boardNavM"));renderNav(document.getElementById("boardNavS"));
  renderChips();closeDrawer();closeSheet();syncTabs(id);
  if(!skipRender)renderList(); // skipRender: 이미 그 목록을 보고 있어 다시 그릴 필요가 없을 때(홈 재탭 등)
  window.scrollTo({top:0,behavior:"smooth"});
}
/* ===== 커미션 페이지 (cm-) : 화면 시안 이식 · 데모 데이터 ===== */
var cmGrads=['linear-gradient(135deg,#f7d5e6,#e8a5c8)','linear-gradient(135deg,#d5e3f7,#a5c0e8)',
  'linear-gradient(135deg,#f7e6d5,#e8c8a5)','linear-gradient(135deg,#e0d5f7,#bfa5e8)',
  'linear-gradient(135deg,#d5f7e3,#a5e8c0)','linear-gradient(135deg,#f7d5d5,#e8a5a5)'];
var cmData=[]; // openCommissionList()가 Supabase에서 실제로 불러와 채움
var cmDataLoaded=false;
var cmRefreshing=false; // refreshCommissions() 중복 실행 방지
// 커미션 목록이 실제로 바뀌었는지 판단용 서명(새 커미션·상태/제목/가격 변경 감지)
function cmListSignature(){
  return cmData.map(function(c){return c.id+"."+c.status+"."+(c.title||"")+"."+(c.price||"")+"."+(c.reviewEventOn?"1":"0");}).join(",");
}
// 커미션 목록을 DB에서 다시 불러와, '리스트 화면을 보고 있고 & 내용이 바뀐' 경우에만 그리드/칩을 한 번 갱신.
async function refreshCommissions(){
  if(!window.supabase||cmRefreshing)return;
  if(Date.now()-cmLoadedAt<REFRESH_THROTTLE_MS)return; // 최근에 불러왔으면 재조회 생략(캐시 그대로 사용)
  cmRefreshing=true;
  var before=cmListSignature();
  try{
    await cmLoadCommissions();
    if(cmBookmarkIds===null)await cmLoadMyBookmarks();
    cmLoadedAt=Date.now();
  }catch(e){}
  cmRefreshing=false;
  if(curTab==="commission"&&document.getElementById('cmGrid')&&cmListSignature()!==before){
    var chipsEl=document.querySelector('.cm-chips');if(chipsEl)chipsEl.innerHTML=cmChipsHTML();
    var gridEl=document.getElementById('cmGrid');if(gridEl)gridEl.innerHTML=cmGridHTML();
  }
}
var cmReviews=[
  {who:'달빛초',type:'호',ctype:'반신',txt:'퀄리티 미쳤어요... 명암 표현이 진짜 섬세하고 기한도 딱 맞춰주셨어요! 재의뢰 무조건 합니다 🥹',date:'2026.07.28'},
  {who:'구름사탕',type:'호',ctype:'두상',txt:'캐릭터 특징 너무 잘 살려주셨어요 소통도 친절하시고 만족스러운 거래였습니다!',date:'2026.07.20'},
  {who:'초코라떼',type:'불호',ctype:'흉상',txt:'그림은 좋았는데 예정보다 조금 늦어졌어요. 그래도 결과물은 만족합니다.',date:'2026.07.12'}
];
var cmMyList=[]; // cmOpenMy()가 Supabase에서 실제로 불러와 채움
var CM_BAD_REASONS=['퀄리티 불만족','마감 기한 미준수','소통이 어려웠어요','스타일이 요청과 달랐어요','기타'];
// 작가가 거래 정책을 직접 안 적었을 때 뜨는 기본 면책 문구(신청서·상세 공용)
var CM_DEFAULT_POLICY_HTML='commi는 결제를 중개하지 않고 소통 공간만 제공하는 서비스로, 거래의 당사자가 아니에요.<br>작업 범위·기한·환불 등은 작가님과 신청자님이 직접 정하며, 거래 중 사기·분쟁 등 어떤 문제가 생겨도 commi는 대금을 보증·환불하거나 법적 책임을 지지 않아요.<br>미성년자 거래는 보호자 동의가 없으면 취소될 수 있어요.';
var cmTopTags=[]; // cmLoadCommissions()가 실제 사용 빈도순으로 채움
var cmBookmarkIds=null; // 로그인 후 Set으로 채워짐(북마크한 커미션 id들)
/* showAdult: 인증을 마친 사람이 성인 커미션을 목록에 띄울지 말지. 기본은 **끔** —
   인증했다고 해서 늘 보고 싶은 건 아니고, 옆 사람과 화면을 같이 볼 수도 있다. */
var cmState={activeTag:null,wrType:null,wrCommissionId:null,query:'',sort:'home',showAdult:false};
try{cmState.showAdult=localStorage.getItem('cmShowAdult')==='1';}catch(e){}
var cmReg={images:[],tags:[],status:'open',editingId:null};
var cmDetailCtx={from:'list',idx:0};
// 지금 상세로 열려 있는 커미션 id(없으면 null=미리보기). 헤더의 공유·더보기 버튼이 쓴다.
var cmDetailCurrentId=null;
var cmPreviewObj=null;
function cmQ(s){return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'")}
/* ===== 커미션 끌올(다시 위로 올리기) =====
   24시간에 한 번, 홈·신규 정렬에서만 위로 올라온다.
   추천 점수에는 일부러 반영하지 않는다 — 버튼 한 번으로 추천 순위가 오르면 순위 조작이 된다.
   실제 제한은 서버(bump_commission RPC)가 건다. 여기 계산은 버튼 문구를 위한 것일 뿐이다. */
var CM_BUMP_COOLDOWN_MS=24*3600*1000;
var CM_BUMP_READY=false; // commission-bump.sql 실행 전이면 false → 버튼을 아예 안 그린다

// 남은 대기 시간(ms). 0이면 지금 끌올할 수 있다.
function cmBumpLeftMs(d){
  var t=d&&(d.bumpedAt||d.createdAt);
  if(!t)return 0;
  var ms=CM_BUMP_COOLDOWN_MS-(Date.now()-new Date(t).getTime());
  return ms>0?ms:0;
}
function cmFmtLeft(ms){
  var min=Math.ceil(ms/60000),h=Math.floor(min/60),m=min%60;
  if(h>0)return m?(h+"시간 "+m+"분"):(h+"시간");
  return Math.max(1,m)+"분";
}
// 끌올 버튼 하나(내 커미션 목록용). 마감이거나 SQL 실행 전이면 아무것도 안 그린다.
function cmBumpBtnHTML(c){
  if(!CM_BUMP_READY||c.status!=='open')return '';
  var left=cmBumpLeftMs(c);
  if(left>0)return '<span class="cm-my-edit cm-bump-wait" title="24시간에 한 번 올릴 수 있어요">⏳ '+cmFmtLeft(left)+' 후</span>';
  return '<button class="cm-my-edit cm-bump" onclick="cmBumpCommission('+c.id+')">🔝 끌올</button>';
}
// 서버에 끌올 요청. 성공하면 목록을 다시 그려 바로 위로 올라간 걸 보여준다.
async function cmBumpCommission(id){
  if(!AUTH.user){toast("로그인이 필요해요","🔒");openLoginModal();return;}
  var res;
  try{res=await window.supabase.rpc("bump_commission",{p_id:id});}
  catch(e){toast("끌올하지 못했어요");return;}
  if(res.error){toast("끌올하지 못했어요: "+res.error.message);return;}
  var r=res.data||{};
  if(!r.ok){
    if(r.reason==="cooldown"){
      var left=r.next_at?(new Date(r.next_at).getTime()-Date.now()):0;
      toast(left>0?(cmFmtLeft(left)+" 후에 다시 올릴 수 있어요"):"잠시 후에 다시 올릴 수 있어요","⏳");
    }
    else if(r.reason==="closed")toast("마감한 커미션은 올릴 수 없어요","⛔");
    else if(r.reason==="not_owner")toast("내 커미션만 올릴 수 있어요","🔒");
    else if(r.reason==="login")toast("로그인이 필요해요","🔒");
    else toast("끌올하지 못했어요");
    cmApplyBump(id,null); // 서버가 아는 시각으로 화면을 맞춘다(버튼이 잘못 떠 있었을 수 있음)
    return;
  }
  cmApplyBump(id,r.bumped_at);
  toast("맨 위로 올렸어요","🔝");
}
// 방금 끌올한 결과를 화면 데이터에 반영(다시 불러오지 않고 그 자리에서 갱신).
function cmApplyBump(id,bumpedAt){
  var t=bumpedAt||new Date().toISOString();
  var d=cmData.find(function(c){return c.id===id;});
  if(d&&bumpedAt)d.bumpedAt=t;
  var mine=cmMyList.find(function(c){return c.id===id;});
  if(mine&&bumpedAt)mine.bumpedAt=t;
  if(cmDetail&&cmDetail.id===id&&bumpedAt)cmDetail.bumpedAt=t;
  var myEl=document.getElementById('cmMyList');
  if(myEl)myEl.innerHTML=cmMyListHTML();
  var gridEl=document.getElementById('cmGrid');
  if(gridEl)gridEl.innerHTML=cmGridHTML();
}
// 끌올 순으로 정렬(끌올한 적 없으면 등록 시각). 목록을 통째로 받아오므로 여기서 정렬해도 된다.
// ⚠️ DB 쿼리의 order를 bumped_at으로 바꾸지 않는 이유: SQL 실행 전이면 없는 칸이라 조회가 통째로 실패한다.
function cmSortByBump(list){
  return list.slice().sort(function(a,b){
    return String(b.bumpedAt||b.createdAt||'').localeCompare(String(a.bumpedAt||a.createdAt||''));
  });
}

/* ⚠️ artistAvatar를 빠뜨리면 상세 화면의 프로필 자리가 **빈 동그라미로 남는다.**
      목록 조회에서 avatar_url을 이미 같이 받아 오는데 여기로 넘기지 않아 그랬다(2026-08-13 신고).
      호출부가 4곳이므로 새 호출부를 만들 때도 이 값을 챙길 것. */
function cmRowToData(row,artistNickname,artistAvatar){
  var imgs=(row.commission_images||[]).slice().sort(function(a,b){return a.sort-b.sort;}).map(function(x){return x.url;});
  var revs=POSTS.filter(function(p){return p.board==='review'&&p.commissionId===row.id;});
  var goodCount=revs.filter(function(r){return r.commissionSentiment==='good';}).length;
  return{
    id:row.id,authorId:row.author_id,
    artist:artistNickname||'탈퇴한 사용자',
    artistAvatar:artistAvatar||null,
    title:row.title,price:row.price,status:row.status,tags:row.tags||[],
    period:row.period,slots:row.slots,desc:row.description,descHtml:row.description_html||null,usage:row.usage_rights,policy:row.trade_policy,
    images:imgs,likes:0,views:row.views||0,createdAt:row.created_at,form:row.application_form||[],
    reviewEventOn:!!row.review_event_on,reviewEventBenefit:row.review_event_benefit||'',
    // commission-adult.sql 실행 전에는 칸이 없어 undefined → false. 그때는 성인 표시가 없는 것과 같다.
    isAdult:!!row.is_adult,
    reviewCount:revs.length,satisfaction:revs.length?(goodCount/revs.length):0,
    adLocked:!!AD_LOCKED_COMMISSION_IDS[row.id],
    // 끌올 시각. 칸 자체가 없으면(SQL 실행 전) undefined라 등록 시각으로 대신한다.
    bumpedAt:row.bumped_at||row.created_at
  };
}
async function cmLoadCommissions(){
  var res=await window.supabase.from('commissions').select('*,commission_images(url,sort)').order('created_at',{ascending:false});
  if(res.error){console.error(res.error);cmData=[];cmDataLoaded=true;return;}
  var authorIds=Array.from(new Set(res.data.map(function(r){return r.author_id;})));
  var profRes=authorIds.length?await window.supabase.from('profiles').select('id,nickname,avatar_url').in('id',authorIds):{data:[]};
  var profById={};
  (profRes.data||[]).forEach(function(p){profById[p.id]={nickname:p.nickname,avatarUrl:p.avatar_url};});
  // bumped_at 칸이 실제로 있는지로 끌올 기능 사용 가능 여부를 판단(commission-bump.sql 실행 여부)
  CM_BUMP_READY=res.data.length>0&&Object.prototype.hasOwnProperty.call(res.data[0],'bumped_at');
  cmData=cmSortByBump(res.data.map(function(row){
    var prof=profById[row.author_id];
    return cmRowToData(row,prof?prof.nickname:null,prof?prof.avatarUrl:null);
  }));
  await cmLoadBookmarkCounts();
  cmTopTags=cmComputeTopTags();
  await cmLoadRecScores();
  await cmAppendAdultStubs();
  cmDataLoaded=true;
}
/* 미인증자에게 보여줄 '가려진 카드'.
   ⚠️ 서버가 내용을 안 준다(제목·설명·이미지·작가 전부). 그러니 여기서 흐리게 그리는 건
      **모양이 아니라 사실**이다 — 개발자도구를 열어도 볼 것이 없다.
      반대로 말하면 CSS blur만 걸고 진짜 내용을 내려받는 방식은 절대 쓰면 안 된다.
   ⚠️ 태그·검색으로는 걸러낼 수 없다(내용을 모르니까). 그래서 cmFilteredIdx가
      검색어나 태그가 걸려 있을 때는 이 카드들을 빼 버린다 — 안 그러면 "검색했는데
      상관없는 가림막이 계속 나오는" 꼴이 된다.
   ⚠️ 정렬 함수들이 여러 칸을 읽으므로 빠짐없이 채워 둔다(하나만 없어도 그 정렬에서 터진다). */
async function cmAppendAdultStubs(){
  if(isAdultVerified())return;                 // 인증자는 진짜 행이 그대로 내려온다
  if(!window.supabase)return;
  var res;
  try{res=await window.supabase.rpc('adult_commission_stubs');}catch(e){return;}
  if(!res||res.error||!res.data||!res.data.length)return; // SQL 실행 전이면 조용히 넘어간다
  var stubs=res.data.map(function(r){
    return {id:r.id,authorId:null,artist:'',title:'',price:0,status:'open',tags:[],
      period:'',slots:'',desc:'',descHtml:null,usage:'',policy:'',images:[],
      likes:0,views:0,createdAt:r.created_at,bumpedAt:r.bumped_at||r.created_at,form:[],
      reviewEventOn:false,reviewEventBenefit:'',reviewCount:0,satisfaction:0,
      bookmarkCount:0,adLocked:false,recScore:0,
      isAdult:true,locked:true};                // locked = 내용 없이 가림막만 그린다
  });
  cmData=cmData.concat(stubs);
}
// 커미션별 전체 북마크 수(서버 집계). commission_bookmarks는 '본인 것만' RLS라 클라가 못 세므로
// security definer RPC(개수만 반환)로 받아 각 커미션 d.bookmarkCount에 채움.
async function cmLoadBookmarkCounts(){
  var m={};
  try{
    var res=await window.supabase.rpc("get_commission_bookmark_counts");
    if(!res.error&&res.data)res.data.forEach(function(r){m[r.commission_id]=r.cnt;});
  }catch(e){}
  cmData.forEach(function(d){d.bookmarkCount=m[d.id]||0;});
}
// 추천 점수(서버 계산)를 불러와 {커미션id: 점수} 맵으로 저장. 추천 탭 정렬에 사용.
// RPC가 아직 없거나(실행 전) 오류면 빈 맵으로 두고, 정렬은 후기 순으로 자연 폴백.
var cmRecScores={};
var cmRecBreakdown={}; // {커미션id: 요소별 점수} — 관리자만 채워짐(get_commission_rec_breakdown)
async function cmLoadRecScores(){
  try{
    var res=await window.supabase.rpc("get_commission_rec_scores");
    cmRecScores={};
    if(!res.error&&res.data)res.data.forEach(function(r){cmRecScores[r.commission_id]=r.score;});
  }catch(e){cmRecScores={};}
  await cmLoadRecBreakdown();
}
// 관리자만: 커미션별 요소 점수 분해를 불러와 cmRecBreakdown에 저장(비관리자는 서버가 0행 반환).
async function cmLoadRecBreakdown(){
  cmRecBreakdown={};
  if(!(AUTH.profile&&AUTH.profile.is_admin)||!window.supabase)return;
  try{
    var res=await window.supabase.rpc("get_commission_rec_breakdown");
    if(!res.error&&res.data)res.data.forEach(function(r){cmRecBreakdown[r.commission_id]=r;});
  }catch(e){}
}
// 관리자 전용 추천 점수 패널 HTML (요소별 값 + 가중치 라벨 + 최종). 일반 유저에겐 빈 문자열.
function cmAdminScoreHTML(d){
  if(!(AUTH.profile&&AUTH.profile.is_admin)||!d||d.id==null)return '';
  var b=cmRecBreakdown[d.id];
  if(!b)return '<div class="cm-adminscore"><div class="cm-as-h">🛠 추천 점수 <span class="cm-as-badge">관리자 전용</span></div>'+
    '<div class="cm-as-note">'+(d.status==='open'?'추천 점수를 불러오지 못했어요. 목록을 새로고침하면 표시돼요.':'이 커미션은 접수중이 아니라 추천 순위에서 제외돼요.')+'</div></div>';
  function row(label,val,w,cls){return '<div class="cm-as-row'+(cls?' '+cls:'')+'"><span>'+label+'</span><span><b>'+val+'</b>'+(w?' <span class="cm-as-w">×'+w+'</span>':'')+'</span></div>';}
  return '<div class="cm-adminscore">'+
    '<div class="cm-as-h">🛠 추천 점수 <span class="cm-as-badge">관리자 전용</span></div>'+
    row('호 후기율',b.ho_rate,'0.35')+
    row('작가 활동',b.activity_score,'0.19')+
    row('후기 개수',b.reviewcnt_score,'0.15')+
    row('작업물 활발도',b.ws_score,'0.12')+
    row('인기',b.pop_score,'0.12')+
    row('신규 보정',b.new_score,'0.07')+
    (b.gated?'<div class="cm-as-note">⚠️ 후기 품질 게이트 적용(×0.5) — 후기 '+b.rv_total+'개 중 호 후기율 낮음</div>':'')+
    row('자동 점수 합계',b.auto_score,'','cm-as-sub')+
    '<div class="cm-as-row cm-as-adjust"><span>관리자 추가 점수</span>'+
      '<span class="cm-as-ctrl">'+
        '<button onclick="cmAdjustBonus('+d.id+',0)" title="0으로">0</button>'+
        '<button onclick="cmAdjustBonus('+d.id+','+(b.admin_bonus-5)+')">−5</button>'+
        '<button onclick="cmAdjustBonus('+d.id+','+(b.admin_bonus-1)+')">−1</button>'+
        '<b class="cm-as-bonusval">'+b.admin_bonus+'</b>'+
        '<button onclick="cmAdjustBonus('+d.id+','+(b.admin_bonus+1)+')">+1</button>'+
        '<button onclick="cmAdjustBonus('+d.id+','+(b.admin_bonus+5)+')">+5</button>'+
      '</span>'+
    '</div>'+
    row('최종 점수',b.final_score,'','cm-as-final')+
  '</div>';
}
// 관리자 추가 점수 조정 — 서버 RPC(admin_set_rec_bonus)로 저장(0~30 클램프+로그), 로컬 점수·순위 즉시 반영, 패널 재렌더.
async function cmAdjustBonus(commissionId,newValue){
  if(!(AUTH.profile&&AUTH.profile.is_admin)||!window.supabase)return;
  newValue=Math.max(0,Math.min(30,parseInt(newValue,10)||0)); // 클라 클램프(서버도 클램프)
  var res=await window.supabase.rpc("admin_set_rec_bonus",{p_commission_id:commissionId,p_value:newValue});
  if(res.error){toast("조정 실패: "+res.error.message);return;}
  var data=res.data||{};
  if(!data.ok){toast(data.error==="not_admin"?"관리자만 조정할 수 있어요":("조정 실패 ("+(data.error||"오류")+")"));return;}
  var b=cmRecBreakdown[commissionId];
  if(b){
    var delta=data.value-b.admin_bonus;      // 추가 점수는 게이트 밖 선형 가산이라 최종에 그대로 반영
    b.admin_bonus=data.value;
    b.final_score=+(b.final_score+delta).toFixed(2);
    cmRecScores[commissionId]=b.final_score; // 추천 순위(목록)도 즉시 반영
  }
  toast("추가 점수를 "+data.value+"점으로 조정했어요 (상한 "+data.cap+")");
  // 화면에 떠 있는 관리자 뷰를 그 자리에서 갱신(순서는 유지, 값·최종만 갱신)
  var mgmtRow=document.getElementById('cm-mgmt-'+commissionId);
  if(mgmtRow){mgmtRow.outerHTML=cmMgmtRowHTML(commissionId);return;}
  var d=cmData.find(function(x){return x.id===commissionId;});
  var el=document.querySelector('.cm-adminscore');
  if(d&&el)el.outerHTML=cmAdminScoreHTML(d);   // 상세 패널만 다시 그림(값·최종 갱신)
}
/* 관리자 커미션 추천 관리 목록 — 접수중 커미션을 최종 점수 순으로, 요소 요약 + 그 자리 +/- 조정 */
async function openAdminCommissionMgmt(){
  if(!AUTH.profile||!AUTH.profile.is_admin||!window.supabase)return;
  enterScreen("admCmMgmt",openProfile); // 뒤로가기가 프로필로 복귀
  if(!cmDataLoaded)await cmLoadCommissions();
  else if(!Object.keys(cmRecBreakdown).length)await cmLoadRecBreakdown();
  renderAdminCommissionMgmt();
}
function cmMgmtRowHTML(id){
  var b=cmRecBreakdown[id]; var d=cmData.find(function(x){return x.id===+id;});
  if(!b||!d)return '';
  return '<div class="cm-mgmt" id="cm-mgmt-'+d.id+'">'+
    '<div class="cm-mgmt-info" onclick="cmOpenCommissionById('+d.id+')">'+
      '<div class="cm-mgmt-title">'+esc(d.title)+'</div>'+
      '<div class="cm-mgmt-sub">'+esc(d.artist)+' · 최종 <b>'+b.final_score+'</b> <span class="cm-mgmt-dim">(자동 '+b.auto_score+' + 추가 '+b.admin_bonus+')</span></div>'+
      '<div class="cm-mgmt-factors">호'+b.ho_rate+' · 활'+b.activity_score+' · 후'+b.reviewcnt_score+' · 작'+b.ws_score+' · 인'+b.pop_score+' · 신'+b.new_score+(b.gated?' · <span class="cm-mgmt-gate">⚠️게이트</span>':'')+'</div>'+
    '</div>'+
    '<div class="cm-mgmt-ctrl">'+
      '<button onclick="cmAdjustBonus('+d.id+',0)" title="0으로">0</button>'+
      '<button onclick="cmAdjustBonus('+d.id+','+(b.admin_bonus-5)+')">−5</button>'+
      '<button onclick="cmAdjustBonus('+d.id+','+(b.admin_bonus-1)+')">−1</button>'+
      '<b class="cm-mgmt-bonus">'+b.admin_bonus+'</b>'+
      '<button onclick="cmAdjustBonus('+d.id+','+(b.admin_bonus+1)+')">+1</button>'+
      '<button onclick="cmAdjustBonus('+d.id+','+(b.admin_bonus+5)+')">+5</button>'+
    '</div>'+
  '</div>';
}
function renderAdminCommissionMgmt(){
  var ids=Object.keys(cmRecBreakdown).filter(function(id){return cmData.some(function(x){return x.id===+id;});});
  ids.sort(function(a,b){return cmRecBreakdown[b].final_score-cmRecBreakdown[a].final_score;});
  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
    '<div class="pf-sec">🎯 커미션 추천 관리 ('+ids.length+')</div>'+
    '<div class="cm-mgmt-note">접수중 커미션만 점수가 매겨져요(마감 제외). 최종 점수 높은 순. 아래 +/−로 관리자 추가 점수(0~30)를 바로 조정하면 순위에 반영돼요. 요약: 호(후기율)·활(작가활동)·후(후기개수)·작(작업물)·인(인기)·신(신규).</div>';
  if(!ids.length)h+='<div class="pf-empty">접수중 커미션이 없어요.</div>';
  else h+='<div class="cm-mgmt-list">'+ids.map(cmMgmtRowHTML).join('')+'</div>';
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
function cmComputeTopTags(){
  var counts={};
  // 접수중 커미션의 태그만 집계(마감만 달린 태그가 칩에 떠서 눌러도 빈 결과 나오는 것 방지)
  cmData.forEach(function(d){if(d.status!=='open')return;(d.tags||[]).forEach(function(t){counts[t]=(counts[t]||0)+1;});});
  var tags=Object.keys(counts);
  tags.sort(function(a,b){return counts[b]-counts[a];});
  return tags.slice(0,10);
}
async function cmLoadMyBookmarks(){
  if(!AUTH.user){cmBookmarkIds=new Set();return;}
  var res=await window.supabase.from('commission_bookmarks').select('commission_id').eq('user_id',AUTH.user.id);
  cmBookmarkIds=new Set((res.data||[]).map(function(r){return r.commission_id;}));
}
/* ---- 프로필의 커미션 타입 목록(크레페 시안 2단계) ---- */
async function pfArtistCommissions(userId,nickname,avatarUrl){
  if(!window.supabase)return[];
  var res=await window.supabase.from('commissions').select('*,commission_images(url,sort)').eq('author_id',userId).order('created_at',{ascending:false});
  if(res.error||!res.data)return[];
  return res.data.map(function(row){return cmRowToData(row,nickname,avatarUrl);});
}
function pfCmListItemHTML(d){
  var hasImg=!!(d.images&&d.images.length);
  var thumb=hasImg?'':'background:'+cmGrads[d.id%cmGrads.length];
  var thumbImg=hasImg?thumbImgHTML(d.images[0],'class="thumb-fill"'):'';
  var statusHTML=d.status==='open'?'<div class="pfh-cm-status open">접수중</div>':'<div class="pfh-cm-status">신청 마감</div>';
  var bookmarked=cmBookmarkIds&&cmBookmarkIds.has(d.id);
  var tags=(d.tags||[]).map(function(t){return '<span class="pfh-cm-tag">#'+esc(t)+'</span>';}).join('');
  return '<div class="pfh-cm-item" onclick="cmOpenCommissionById('+d.id+')">'+
    '<div class="pfh-cm-thumb" style="'+thumb+'">'+thumbImg+statusHTML+'</div>'+
    '<div class="pfh-cm-info">'+
      '<div class="pfh-cm-top"><div class="pfh-cm-title">'+esc(d.title)+'</div>'+
        '<div class="cm-bm pfh-cm-bm'+(bookmarked?' on':'')+'" onclick="event.stopPropagation();cmToggleBookmark('+d.id+',this)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12v18l-6-4-6 4z"/></svg></div></div>'+
      (tags?('<div class="pfh-cm-tags">'+tags+'</div>'):'')+
      '<div class="pfh-cm-desc">'+esc(d.desc||'')+'</div>'+
    '</div>'+
  '</div>';
}
function pfCommissionListHTML(list){
  var h='<div class="pf-sec">커미션 타입</div>';
  if(!list.length)return h+'<div class="pf-empty">아직 등록된 커미션이 없어요.</div>';
  return h+'<div class="pfh-cm-list">'+list.map(pfCmListItemHTML).join('')+'</div>';
}
/* ---- 프로필의 후기 목록(크레페 시안 3단계) ---- */
var pfReviewsExpanded=false;
var pfReviewsForUserId=null;
function pfArtistReviewList(userId,nickname){
  return POSTS.filter(function(p){
    if(p.board!=='review')return false;
    return p.reviewedUserId?p.reviewedUserId===userId:p.reviewedNickname===nickname;
  });
}
/* ---- 후기 카드(텍스트 우선형) — 프로필의 후기 목록과 커미션 페이지의 후기 목록이 공유 ---- */
function reviewItemTitleFor(r){
  if(r.commissionId){
    var c=cmData.find(function(x){return x.id===r.commissionId;});
    return c?c.title:'커미션 페이지의 후기';
  }
  var cp=r.commissionPostId?POSTS.find(function(p){return p.dbId===r.commissionPostId;}):null;
  return cp?cp.title:'삭제된 커미션 글';
}
function reviewItemHTML(r){
  var bad=r.commissionSentiment==='bad';
  var txt=(r.content||[]).join('\n');
  var imgsHTML=(r.images&&r.images.length)?('<div class="rv-imgs">'+r.images.map(function(u){return '<div class="rv-img"><img src="'+esc(u)+'" alt="" loading="lazy"></div>';}).join('')+'</div>'):'';
  return '<div class="rv-item" onclick="openPost('+r.id+')">'+
    '<div class="rv-top"><span class="rv-who">'+esc(reviewItemTitleFor(r))+'</span>'+
      '<span class="rv-tag'+(bad?' bad':' good')+'">'+(bad?'😐 불호':'😊 만족')+'</span></div>'+
    (txt?('<div class="rv-txt">'+esc(txt)+'</div>'):'')+
    imgsHTML+
    '<div class="rv-meta"><span>'+esc(dispName(r.author))+'</span><span>'+esc(r.time)+'</span></div>'+
  '</div>';
}
function reviewListHTML(reviews){
  if(!reviews.length)return'';
  return '<div class="rv-list">'+reviews.map(reviewItemHTML).join('')+'</div>';
}
function pfReviewListHTML(reviews,userId){
  var h='<div class="pf-sec">후기 <span class="pfh-rv-cnt">'+reviews.length+'개</span></div>';
  if(!reviews.length)return h+'<div class="pf-empty">아직 받은 후기가 없어요.</div>';
  var showCount=pfReviewsExpanded?reviews.length:Math.min(5,reviews.length);
  h+=reviewListHTML(reviews.slice(0,showCount));
  var isSelf=AUTH.user&&AUTH.user.id===userId;
  var moreCall=isSelf?'openProfile()':('openUserProfile(\''+cmQ(userId)+'\')');
  if(reviews.length>showCount)h+='<div class="rv-more" onclick="pfReviewsExpanded=true;'+moreCall+'">더보기</div>';
  return h;
}
/* ===== 글 북마크(저장한 글) ==========================================
   커미션 북마크와 같은 방식이지만 훨씬 단순하다 — 남에게 보여줄 '저장 수'가 없어서
   집계가 필요 없고, 내가 저장했는지만 알면 된다.
   ⚠️ 키는 화면용 id(p.id = 100000+dbId)가 아니라 **DB의 진짜 id(p.dbId)** 다.
      데모 글은 dbId가 없어 저장할 수 없다(버튼도 안 보인다). */
var POST_BM=null;   // null=아직 안 불러옴 / Set=저장한 글의 dbId들
async function loadMyPostBookmarks(){
  POST_BM=new Set();
  if(!AUTH.user||!window.supabase)return;
  var r=await window.supabase.from("post_bookmarks").select("post_id").eq("user_id",AUTH.user.id);
  if(r.error)return;   // 표가 없으면(SQL 미실행) 조용히 넘어간다 — 기능만 안 보인다
  (r.data||[]).forEach(function(x){POST_BM.add(x.post_id);});
}
function isPostBookmarked(dbId){return !!(dbId&&POST_BM&&POST_BM.has(dbId));}
async function togglePostBookmark(postId){
  var p=POSTS.filter(function(x){return x.id===postId;})[0];
  if(!p||!p.dbId){toast("저장할 수 없는 글이에요");return;}
  if(!AUTH.user){toast("로그인 후 저장할 수 있어요","🔒");loginWithGoogle();return;}
  if(POST_BM===null)await loadMyPostBookmarks();
  var on=!POST_BM.has(p.dbId);
  var res=on
    ? await window.supabase.from("post_bookmarks").insert({user_id:AUTH.user.id,post_id:p.dbId})
    : await window.supabase.from("post_bookmarks").delete().eq("user_id",AUTH.user.id).eq("post_id",p.dbId);
  if(res.error){
    toast(/relation|does not exist/i.test(res.error.message)
      ?"먼저 post-bookmarks.sql을 실행해주세요":"처리에 실패했어요");
    return;
  }
  if(on)POST_BM.add(p.dbId); else POST_BM.delete(p.dbId);
  if(on)track("post_bookmark");
  toast(on?"저장했어요":"저장을 해제했어요",on?"🔖":undefined);
  // 버튼만 갈아 끼운다 — 글 상세를 통째로 다시 그리면 스크롤이 맨 위로 튄다
  var btn=document.getElementById("bmBtn");
  if(btn){btn.classList.toggle("on",on);btn.innerHTML=postBmIcon(on)+(on?"저장됨":"저장");}
}
function postBmIcon(on){
  return '<svg class="ic" viewBox="0 0 24 24" fill="'+(on?"currentColor":"none")+
    '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+
    '<path d="M6 3h12v18l-6-4-6 4z"/></svg>';
}

// 북마크 토글 시 로컬 카운트를 즉시 반영(다음 로드 때 서버 값으로 다시 맞춰짐)
function cmBumpBookmarkCount(commissionId,delta){
  var d=cmData.find(function(x){return x.id===commissionId;});
  if(d)d.bookmarkCount=Math.max(0,(d.bookmarkCount||0)+delta);
}
async function cmToggleBookmark(commissionId,el){
  if(!AUTH.user){toast('로그인 후 북마크할 수 있어요','🔒');loginWithGoogle();return;}
  if(cmBookmarkIds===null)await cmLoadMyBookmarks();
  var isBookmarked=cmBookmarkIds.has(commissionId);
  if(isBookmarked){
    var del=await window.supabase.from('commission_bookmarks').delete({count:"exact"}).eq('user_id',AUTH.user.id).eq('commission_id',commissionId);
    if(!del.error&&del.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
    if(del.error){toast('처리 실패: '+del.error.message);return;}
    cmBookmarkIds.delete(commissionId);
    cmBumpBookmarkCount(commissionId,-1);
    toast('북마크를 해제했어요');
  }else{
    var ins=await window.supabase.from('commission_bookmarks').insert({user_id:AUTH.user.id,commission_id:commissionId});
    if(ins.error){toast('처리 실패: '+ins.error.message);return;}
    cmBookmarkIds.add(commissionId);
    cmBumpBookmarkCount(commissionId,1);
    track("bookmark");toast('북마크에 저장했어요','🔖');
  }
  if(el){
    var wrap=el.classList.contains('cm-bookmark')||el.classList.contains('cm-bm')?el:el.closest('.cm-bookmark,.cm-bm');
    if(wrap)wrap.classList.toggle('on',cmBookmarkIds.has(commissionId));
  }
}
async function openCommissionList(){
  curTab="commission";navSeq++;
  userLeftHome=true;
  if(!navigatingBack)resetScreens();
  enterScreen("cmList",goHome);
  _setTabUrl("commission"); // 상세(/commission/id)에서 목록으로 와도 /commission 으로 정리된다
  closeDrawer();closeSheet();syncTabs("commission");
  // 이미 커미션 리스트 화면(#cmGrid 존재)이면 셸을 다시 안 그리고 스크롤만 → refreshCommissions가
  // 새 커미션 있을 때만 그리드를 딱 한 번 갱신(껌뻑임 없이). 다른 화면/뒤로에서 왔으면 캐시로 즉시 셸 렌더.
  if(!document.getElementById('cmGrid')){
    document.getElementById("main").innerHTML=cmListHTML();
  }
  window.scrollTo({top:0,behavior:"smooth"});
  refreshCommissions();
}
/* 커미션 카드 아래 지표 아이콘.
   이모지(👁·💬·🔖)를 쓰다가 선 아이콘으로 바꿨다 — 이모지는 기기마다 모양·크기가 제각각이라
   (특히 👁은 안드로이드에서 사실적인 눈알로 그려진다) 줄이 들쭉날쭉해 보였고,
   커미션 상세 화면은 이미 같은 계열의 선 아이콘을 쓰고 있어 화면끼리 어긋나 있었다.
   ⚠️ 글 목록 카드(`post-card-stats`)는 사용자 요청대로 이모지 그대로 뒀다. */
var CM_IC_VIEW='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/></svg>';
var CM_IC_REVIEW='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5a8.4 8.4 0 0 1-.9-3.8 8.4 8.4 0 0 1 8.4-9 8.4 8.4 0 0 1 8.6 8.3z"/></svg>';
var CM_IC_BOOKMARK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-6-4-6 4z"/></svg>';
function cmCardHTML(d,idx){
  /* 가림막 카드 — 미인증자에게만 나온다.
     ⚠️ 진짜 이미지를 깔고 CSS로 흐리게 하는 게 아니다. 애초에 이미지 주소를 받아 오지
        않았고(서버가 안 준다), 여기서 그리는 건 무늬뿐이다. 그래야 개발자도구를 열어도
        볼 것이 없다. 흐림 효과는 "가려져 있다"를 알리는 표시일 뿐 보호 장치가 아니다. */
  if(d.locked){
    return '<div class="cm-card cm-locked" onclick="cmOpenLocked()">'+
      '<div class="cm-thumb cm-lock-thumb"><div class="cm-lock-blur"></div>'+
        '<div class="cm-lock-ic">🔞</div></div>'+
      '<div class="cm-c-artist cm-lock-line"></div>'+
      '<div class="cm-c-title cm-lock-t">성인 인증이 필요해요</div>'+
      '<div class="cm-c-meta cm-lock-meta"><span>인증하면 볼 수 있어요</span></div></div>';
  }
  // 배경이미지 대신 <img> — 썸네일 404(옛 이미지) 때 원본으로 바꿔 끼우려면 onerror가 필요한데
  // background-image에는 그게 없다. 이미지가 없으면 예전처럼 그라데이션 배경.
  var hasImg=!!(d.images&&d.images[0]);
  var thumb=hasImg?'':'background:'+cmGrads[idx%cmGrads.length];
  var thumbImg=hasImg?thumbImgHTML(d.images[0],'class="thumb-fill"'):'';
  var status=d.status==='open'?'<div class="cm-status open">오픈중</div>':'';
  var revBadge=d.reviewEventOn?'<div class="cm-revevent-badge">🎁 리뷰 이벤트</div>':'';
  // 성인 커미션은 목록에서도 한눈에 구분되게 — 인증한 사람만 이 카드를 받아 보지만,
  // 그 사람에게도 "이건 19+"라는 표시는 있어야 한다.
  var adultBadge=d.isAdult?'<div class="cm-adult-badge" title="성인 커미션">19+</div>':'';
  var bookmarked=cmBookmarkIds&&cmBookmarkIds.has(d.id);
  return '<div class="cm-card" onclick="cmOpenDetail('+idx+')">'+
    '<div class="cm-thumb" style="'+thumb+'">'+thumbImg+status+revBadge+adultBadge+
      '<div class="cm-bookmark'+(bookmarked?' on':'')+'" onclick="event.stopPropagation();cmToggleBookmark('+d.id+',this)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12v18l-6-4-6 4z"/></svg></div></div>'+
    '<div class="cm-c-artist">'+esc(d.artist)+'</div>'+
    '<div class="cm-c-title">'+esc(d.title)+'</div>'+
    '<div class="cm-c-meta">'+
      // 조회수는 글 목록 카드와 같은 축약(1000 → 1.0k) — 칸이 좁아 자릿수가 늘면 줄이 넘친다
      '<span title="조회수">'+CM_IC_VIEW+fmtViews(d.views||0)+'</span>'+
      '<span title="후기">'+CM_IC_REVIEW+(d.reviewCount||0)+'</span>'+
      '<span title="저장">'+CM_IC_BOOKMARK+(d.bookmarkCount||0)+'</span>'+
    '</div></div>';
}
function cmFilteredIdx(){
  var q=(cmState.query||'').trim().toLowerCase();
  // 접수중(open)만 노출 — 마감 커미션은 홈·신규·인기·검색·추천 어디에도 안 보이게(작가는 '내 커미션'에서 관리).
  var idxs=cmData.map(function(d,i){return i;}).filter(function(i){return cmData[i].status==='open';});
  /* 성인 커미션 노출 규칙
     · 인증한 사람: 탭으로 켜고 끈다(기본 꺼짐)
     · 미인증자: 내용 없는 가림막 카드만 보인다. 단 **검색어·태그가 걸려 있으면 뺀다** —
       내용을 모르니 걸러낼 수가 없어서, 그냥 두면 무엇을 검색하든 따라 나온다. */
  idxs=idxs.filter(function(i){
    var d=cmData[i];
    if(!d.isAdult)return true;
    if(d.locked)return !(cmState.query||'').trim()&&!cmState.activeTag;
    return !!cmState.showAdult;
  });
  if(cmState.activeTag){
    idxs=idxs.filter(function(i){return (cmData[i].tags||[]).indexOf(cmState.activeTag)>=0;});
  }
  if(!q)return idxs;
  return idxs.filter(function(i){
    var d=cmData[i];
    var hay=(d.title+' '+(d.tags||[]).join(' ')).toLowerCase();
    return hay.indexOf(q)>=0;
  });
}
function cmSortedFilteredIdx(){
  var idxs=cmFilteredIdx();
  if(cmState.sort==='new'){
    // 끌올한 커미션이 다시 위로 오도록 등록 시각 대신 끌올 시각으로 정렬
    idxs=idxs.slice().sort(function(a,b){
      var ka=cmData[a].bumpedAt||cmData[a].createdAt||'',kb=cmData[b].bumpedAt||cmData[b].createdAt||'';
      return String(kb).localeCompare(String(ka));
    });
  }else if(cmState.sort==='hot'){
    idxs=idxs.slice().sort(function(a,b){return (cmData[b].reviewCount||0)-(cmData[a].reviewCount||0);});
  }else if(cmState.sort==='recommend'){
    // 접수중 필터는 cmFilteredIdx에서 공통 적용됨. 여기선 서버 추천 점수 높은 순으로만 정렬.
    idxs=idxs.slice().sort(function(a,b){
      var sa=cmRecScores[cmData[a].id],sb=cmRecScores[cmData[b].id];
      sa=(sa==null?-1:sa);sb=(sb==null?-1:sb);
      if(sb!==sa)return sb-sa;
      return (cmData[b].reviewCount||0)-(cmData[a].reviewCount||0); // 동점이면 후기 많은 순
    });
  }
  return idxs;
}
function cmGridHTML(){
  if(!cmDataLoaded)return '<div class="cm-my-empty">불러오는 중...</div>';
  if(cmData.length===0)return '<div class="cm-my-empty">아직 등록된 커미션이 없어요.</div>';
  var idxs=cmSortedFilteredIdx();
  if(idxs.length===0)return '<div class="cm-my-empty">'+(cmState.query?'검색 결과가 없어요.<br>다른 제목이나 태그로 찾아보세요.':(cmState.activeTag?'이 태그의 접수중 커미션이 없어요.':'접수중인 커미션이 없어요.'))+'</div>';
  return idxs.map(function(i){return cmCardHTML(cmData[i],i);}).join('');
}
function cmSetSort(key){
  cmState.sort=key;
  var tabsEl=document.querySelector('.cm-tabs');
  if(tabsEl)tabsEl.innerHTML=cmTabsHTML();
  var gridEl=document.getElementById('cmGrid');
  if(gridEl)gridEl.innerHTML=cmGridHTML();
}
function cmTabsHTML(){
  var h='<div class="cm-tab'+(cmState.sort==='home'?' on':'')+'" onclick="cmSetSort(\'home\')">홈</div>'+
    '<div class="cm-tab'+(cmState.sort==='recommend'?' on':'')+'" onclick="cmSetSort(\'recommend\')">추천</div>'+
    '<div class="cm-tab'+(cmState.sort==='new'?' on':'')+'" onclick="cmSetSort(\'new\')">신규</div>'+
    '<div class="cm-tab'+(cmState.sort==='hot'?' on':'')+'" onclick="cmSetSort(\'hot\')">인기</div>';
  /* 성인 커미션 켜고 끄기 — **인증을 마친 사람에게만** 나온다.
     ⚠️ 정렬 탭(홈·추천·신규·인기)과 성격이 다르다(정렬이 아니라 필터). 그래서 같은 줄에
        두되 생김새를 달리해, 누르면 정렬이 바뀌는 줄 알고 누르는 일이 없게 한다. */
  if(isAdultVerified()){
    h+='<div class="cm-tab-adult'+(cmState.showAdult?' on':'')+'" onclick="cmToggleShowAdult()"'+
       ' title="성인 커미션 보기">🔞 '+(cmState.showAdult?'보는 중':'숨김')+'</div>';
  }
  return h;
}
function cmToggleShowAdult(){
  if(!isAdultVerified()){cmOpenLocked();return;}
  cmState.showAdult=!cmState.showAdult;
  try{localStorage.setItem('cmShowAdult',cmState.showAdult?'1':'0');}catch(e){}
  var tabsEl=document.querySelector('.cm-tabs');
  if(tabsEl)tabsEl.innerHTML=cmTabsHTML();
  var gridEl=document.getElementById('cmGrid');
  if(gridEl)gridEl.innerHTML=cmGridHTML();
  toast(cmState.showAdult?'성인 커미션을 함께 봐요':'성인 커미션을 숨겼어요','🔞');
}
function cmSearch(v){
  cmState.query=v;
  document.getElementById('cmGrid').innerHTML=cmGridHTML();
}
function cmChipsHTML(){
  var all='<div class="cm-chip'+(cmState.activeTag?'':' on')+'" onclick="cmSetTag(null)">전체</div>';
  var rest=cmTopTags.map(function(t){return '<div class="cm-chip'+(cmState.activeTag===t?' on':'')+'" onclick="cmSetTag(\''+cmQ(t)+'\')">'+esc(t)+'</div>';}).join('');
  return all+rest;
}
function cmListHTML(){
  /* ⚠️ cm-root-list — PC에서 폭을 넓히는 건 **목록일 때만**이다. 상세·등록 폼·내 커미션도
     같은 .cm-root를 쓰는데 거기까지 넓어지면 글줄과 입력칸이 화면 끝까지 늘어져 읽기 나빠진다. */
  return '<div class="cm-root cm-root-list">'+
    '<div class="cm-top">'+
      '<div class="cm-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>'+
        '<input id="cmSearchInput" type="text" placeholder="커미션 검색 (제목·태그)" value="'+esc(cmState.query||'')+'" oninput="cmSearch(this.value)"></div>'+
      '<div class="cm-tabs">'+cmTabsHTML()+'</div>'+
      '<div class="cm-top-line"></div>'+
    '</div>'+
    '<div class="cm-sec"><div class="cm-sec-h">지금 많이 찾는 태그</div></div>'+
    '<div class="cm-chips">'+cmChipsHTML()+'</div>'+
    '<div class="cm-grid" id="cmGrid">'+cmGridHTML()+'</div>'+
    // 커미션 목록에만 뜨는 '만들기' 버튼. 하단 탭 위에 뜨도록 탭 높이만큼 띄운다.
    // (#main을 다시 그리면 같이 사라지므로 다른 화면으로 새어나가지 않는다)
    '<div class="cm-fab-wrap"><button class="cm-fab" onclick="cmStartRegister()">'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>'+
      '커미션 만들기</button></div>'+
  '</div>';
}
// 로그인해야 만들 수 있다. 바로 등록 화면을 열면 저장 단계에서 막혀 헛수고가 되므로 먼저 안내한다.
function cmStartRegister(){
  if(!AUTH.user){toast("로그인이 필요해요","🔒");openLoginModal();return;}
  cmOpenRegister();
}
function cmSetTag(t){
  cmState.activeTag=t;
  var chipsEl=document.querySelector('.cm-chips');
  if(chipsEl)chipsEl.innerHTML=cmChipsHTML();
  var gridEl=document.getElementById('cmGrid');
  if(gridEl)gridEl.innerHTML=cmGridHTML();
}
function cmComingSoon(){toast("아직 준비 중인 기능이에요","🛠")}
// 커미션 상세의 '구독' — 새 커미션 소식을 받으려고 작가를 팔로우하는 것과 같다.
// 이미 있는 팔로우 기능을 그대로 쓰고, 버튼 표시만 여기서 맞춘다.
async function cmToggleSubscribe(authorId,nickname){
  if(!AUTH.user){toast("로그인이 필요해요","🔒");openLoginModal();return;}
  if(!authorId||authorId===AUTH.user.id)return;
  await toggleFollow(authorId,nickname);
  var b=document.getElementById("cmSubBtn");
  if(b){var on=FOLLOW.has(authorId);b.classList.toggle("on",on);b.textContent=on?"구독 중":"구독";}
}
var cmPendingChatRef=null; // {commissionId,title,conversationId} — 다음에 보낼 메시지에 커미션 참조를 붙일지
async function cmOpenChatAbout(authorId,commissionId,commissionTitle){
  // 로그인하지 않았어도 문의는 할 수 있다 — 코드를 받아 그 방으로 다시 들어오는 방식
  // (openChat은 로그인을 요구하므로 여기서 갈라진다)
  if(!AUTH.user){guestOpenInquiry(commissionId,commissionTitle);return;}
  await openChat(authorId);
  if(!currentConversationId||!AUTH.user)return; // openChat 자체 가드(로그인/셀프채팅)에 걸린 경우
  cmPendingChatRef={commissionId:commissionId,title:commissionTitle,conversationId:currentConversationId};
  var inputRow=document.querySelector('.chat-inputrow');
  if(inputRow){
    inputRow.insertAdjacentHTML('beforebegin','<div class="cm-chat-ref-hint" id="cmChatRefHint">🎨 다음 메시지에 <b>'+esc(commissionTitle)+'</b> 참조가 함께 전송돼요 <span onclick="cmCancelChatRef()">취소</span></div>');
  }
}
function cmCancelChatRef(){
  cmPendingChatRef=null;
  var hint=document.getElementById('cmChatRefHint');
  if(hint)hint.remove();
}
var cmApp={commissionId:null,images:[]};
async function cmApply(authorId,commissionId,commissionTitle){
  if(!AUTH.user){toast('로그인 후 신청할 수 있어요','🔒');loginWithGoogle();return;}
  if(AUTH.user.id===authorId){toast('본인 커미션은 신청할 수 없어요');return;}
  var idx=await cmEnsureCommissionInData(commissionId);
  if(idx<0){toast('커미션을 찾을 수 없어요');return;}
  cmApp={commissionId:commissionId,images:[]};
  cmRenderApplyForm(cmData[idx]);
}
function cmApplyFieldInputHTML(f){
  if(f.type==='checkbox'){
    return '<label class="cm-apply-check"><input type="checkbox" id="cmAppField_'+esc(f.id)+'" onchange="cmCheckApplySubmit()"> '+esc(f.label)+(f.required?' <span class="cm-reg-req">*</span>':'')+'</label>';
  }
  return '<div class="cm-reg-label">'+esc(f.label)+(f.required?' <span class="cm-reg-req">*</span>':'')+'</div>'+
    '<input class="cm-reg-input" id="cmAppField_'+esc(f.id)+'" oninput="cmCheckApplySubmit()">';
}
function cmApplyImgsHTML(){
  var imgsHTML=cmApp.images.map(function(url,i){
    return '<div class="cm-reg-img" style="background-image:url(\''+cmQ(url)+'\');background-size:cover;background-position:center"><div class="cm-del" onclick="cmDelApplyImg('+i+')">×</div></div>';
  }).join('');
  imgsHTML+='<div class="cm-reg-addimg" onclick="cmPickApplyImg()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg><span class="cm-cnt" id="cmAppImgCnt">'+cmApp.images.length+'/5</span></div>';
  return imgsHTML;
}
function cmRenderApplyForm(commission){
  enterScreen("cmApply",function(){cmOpenCommissionById(commission.id);});
  var form=commission.form||[];
  var policyHTML=commission.policy?esc(commission.policy).replace(/\n/g,'<br>'):CM_DEFAULT_POLICY_HTML;
  document.getElementById("main").innerHTML='<div class="cm-root">'+
    '<div class="cm-sub-top"><svg onclick="screenBack()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg><b>커미션 신청서</b></div>'+
    '<div class="cm-reg">'+
      '<div class="cm-reg-label">참고 이미지 <span class="cm-reg-sub">선택 · 최대 5장</span></div>'+
      '<input type="file" id="cmAppFileInput" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp" multiple class="hidden" onchange="cmOnApplyFileChange(event)">'+
      '<div class="cm-reg-imgs" id="cmAppImgs">'+cmApplyImgsHTML()+'</div>'+
      '<div class="cm-reg-label">추가 요청사항 <span class="cm-reg-sub">선택</span></div>'+
      '<textarea class="cm-reg-textarea" id="cmAppExtra" placeholder="원하는 스타일, 참고 사항 등을 자유롭게 적어주세요."></textarea>'+
      (form.length?('<div class="cm-reg-label">작가가 요청한 항목</div>'+form.map(cmApplyFieldInputHTML).join('<div style="height:14px"></div>')):'')+
      '<div class="cm-reg-label">거래 정책</div>'+
      '<div class="cm-apply-policy">'+policyHTML+'</div>'+
      '<label class="cm-apply-check"><input type="checkbox" id="cmAppAgree" onchange="cmCheckApplySubmit()"> 위 거래 정책에 동의하며, 혹시 분쟁이 생기면 이 내용을 기준으로 처리하는 데 동의합니다. <span class="cm-reg-req">*</span></label>'+
    '</div>'+
    '<div class="cm-reg-bottom"><button class="cm-reg-btn" id="cmAppSubmit" style="flex:1" onclick="cmSubmitApplication('+commission.id+')" disabled>신청서 제출하기</button></div>'+
  '</div>';
  window.scrollTo({top:0,behavior:'smooth'});
}
function cmPickApplyImg(){
  if(cmApp.images.length>=5){toast('최대 5장까지 올릴 수 있어요','⚠');return;}
  document.getElementById('cmAppFileInput').click();
}
/* 여러 장 선택을 순서대로 업로드(2026-08-14 사용자 요청 — 예전엔 files[0]만 써서
   여러 장을 올리려면 고르기를 장수만큼 반복해야 했다).
   ⚠️ 병렬로 쏘지 않고 한 장씩 기다린다 — 고른 순서대로 들어가고(sort가 순서를 보존),
      업로드 URL 발급 제한(분당 60회)에도 여유가 남는다.
   isFull: 최대 장수 판정. 꽉 차면 남은 장수를 알려주고 멈춘다(장마다 경고가 반복되지 않게). */
async function cmUploadMany(e,uploadOne,isFull){
  var fs=[].slice.call(e.target.files||[]);
  e.target.value=''; // 같은 사진을 다시 고를 수 있게 비운다
  for(var i=0;i<fs.length;i++){
    if(isFull&&isFull()){
      if(fs.length-i>0)toast('최대 장수에 도달해 남은 '+(fs.length-i)+'장은 올리지 않았어요','⚠');
      break;
    }
    await uploadOne(fs[i]); // 형식·용량 검사와 안내는 각 업로드 함수가 한다(실패한 장만 건너뜀)
  }
}
function cmOnApplyFileChange(e){
  cmUploadMany(e,cmUploadApplyImg,function(){return cmApp.images.length>=5;});
}
async function cmUploadApplyImg(file){
  if(!AUTH.user){toast('로그인 후 이용할 수 있어요','🔒');return;}
  if(ALLOWED_IMAGE_TYPES.indexOf(file.type)===-1){toast('이미지 파일만 올릴 수 있어요');return;}
  if(file.size>MAX_IMAGE_BYTES){toast('40MB 이하 이미지만 올릴 수 있어요');return;}
  if(cmApp.images.length>=5){toast('최대 5장까지 올릴 수 있어요','⚠');return;}
  var uploadBlob=file,ext=(file.name.match(/\.([^.]+)$/)||[,'png'])[1];
  if(file.type!=='image/gif'){
    toast('이미지 압축 중...');
    try{
      var compressed=await compressImage(file);
      uploadBlob=compressed.blob;ext=compressed.ext;
    }catch(err){console.error('이미지 압축 실패, 원본으로 업로드:',err);}
  }
  toast('이미지 업로드 중...');
  var appUrl=await uploadToStorage(uploadBlob,'application');
  if(!appUrl)return;
  cmApp.images.push(appUrl);
  document.getElementById('cmAppImgs').innerHTML=cmApplyImgsHTML();
  toast('이미지를 넣었어요');
}
function cmDelApplyImg(i){
  cmApp.images.splice(i,1);
  document.getElementById('cmAppImgs').innerHTML=cmApplyImgsHTML();
}
function cmCheckApplySubmit(){
  var commission=cmData.find(function(c){return c.id===cmApp.commissionId;});
  var form=commission?(commission.form||[]):[];
  var agreeEl=document.getElementById('cmAppAgree');
  var ok=agreeEl&&agreeEl.checked;
  form.forEach(function(f){
    if(!f.required)return;
    var el=document.getElementById('cmAppField_'+f.id);
    if(!el)return;
    if(f.type==='checkbox'){if(!el.checked)ok=false;}
    else{if(!el.value.trim())ok=false;}
  });
  var btn=document.getElementById('cmAppSubmit');
  if(btn)btn.disabled=!ok;
}
async function cmSubmitApplication(commissionId){
  if(!AUTH.user)return;
  var commission=cmData.find(function(c){return c.id===commissionId;});
  var form=commission?(commission.form||[]):[];
  var answers=form.map(function(f){
    var el=document.getElementById('cmAppField_'+f.id);
    var value=f.type==='checkbox'?(el?el.checked:false):(el?el.value.trim():'');
    return{field_id:f.id,label:f.label,type:f.type,value:value};
  });
  var extra=document.getElementById('cmAppExtra').value.trim();
  var payload={
    commission_id:commissionId,
    applicant_id:AUTH.user.id,
    reference_images:cmApp.images,
    extra_request:extra,
    answers:answers,
    agreed_policy_text:commission?(commission.policy||''):'',
    status:'pending'
  };
  var res=await window.supabase.from('commission_applications').insert(payload);
  if(res.error){toast('신청 실패: '+res.error.message);return;}
  track("commission_apply","신청서 제출");toast('신청서를 제출했어요! 작가의 확인을 기다려주세요','📝');
  cmOpenCommissionById(commissionId);
}
async function cmEnsureCommissionInData(commissionId){
  if(!cmDataLoaded)await cmLoadCommissions();
  var idx=cmData.findIndex(function(d){return d.id===commissionId;});
  if(idx>=0)return idx;
  var res=await window.supabase.from('commissions').select('*,commission_images(url,sort)').eq('id',commissionId).single();
  if(res.error||!res.data)return -1;
  var profRes=await window.supabase.from('profiles').select('nickname,avatar_url').eq('id',res.data.author_id).single();
  cmData.push(cmRowToData(res.data,profRes.data?profRes.data.nickname:null,profRes.data?profRes.data.avatar_url:null));
  return cmData.length-1;
}
async function cmOpenCommissionById(commissionId){
  track("commission_view");
  userLeftHome=true; // 부팅 딥링크(/commission/id) 시 홈 재렌더가 상세를 덮어쓰지 않게
  var idx=await cmEnsureCommissionInData(commissionId);
  if(idx<0){toast('커미션을 찾을 수 없어요(삭제되었을 수 있어요)');return;}
  enterScreen("cmDetail",cmDetailBack);
  closeDrawer();closeSheet();syncTabs("commission");
  cmDetailCtx={from:'list',idx:idx};
  document.getElementById("main").innerHTML=cmDetailHTML(cmData[idx],idx);
  _cmSetDetailUrl(cmData[idx].id,cmData[idx].title);
  window.scrollTo({top:0,behavior:'smooth'});
  cmLoadWorksamples(cmData[idx].id);
}
/* ===== 커미션 상세 상단 이미지 슬라이더 =====================================
   예전엔 '첫 이미지를 배경으로 깐 빈 div + 하드코딩된 점 5개'였다 — 시안을 옮겨오면서
   껍데기만 남은 것으로, 여러 장을 올려도 1장만 보이고 아무리 밀어도 넘어가지 않았다
   (2026-08-10 사용자 신고). 이제 실제로 넘어가는 슬라이더를 만든다.
   ⚠️ 상세 화면은 세 경로(cmOpenDetail·cmBackToDetail·등록 미리보기)에서 각각
      innerHTML로 통째로 새로 그려진다. 그래서 렌더 뒤에 따로 초기화 함수를 부르는 방식은
      한 군데만 빠뜨려도 조용히 죽는다 — 상태를 DOM에서 그때그때 읽는 인라인 핸들러로 둔다. */
var CM_DOTS_MAX=10;  // 이보다 많으면 점 대신 '3 / 24' 카운터만 (점이 뭉개진다)
function cmSliderHTML(imgs,idx){
  if(!imgs||!imgs.length){
    return '<div class="cm-slider" style="background:'+cmGrads[idx%cmGrads.length]+'"></div>';
  }
  var n=imgs.length;
  // esc(cmQ(u)): cmQ로 JS 문자열 이스케이프 → esc로 속성 이스케이프. 순서가 바뀌면 안 된다.
  // ⚠️ loading="lazy"를 쓰지 않는다. 가로 스크롤 컨테이너 안에서는 옆으로 밀어 화면에 들어와도
  //    끝내 로드되지 않는 경우가 있어(실측), 밀 때마다 빈 칸이 나올 위험이 있다.
  //    어차피 아래 샘플 그리드가 같은 이미지를 전부 즉시 불러오므로 실제 전송량은 그대로다.
  var items=imgs.map(function(u,i){
    return '<div class="cm-sl-item" onpointerdown="cmSlDown(event)" onclick="cmSlTap(event,\''+esc(cmQ(u))+'\','+i+')">'+
      '<img src="'+esc(u)+'" alt="" draggable="false" decoding="async">'+
    '</div>';
  }).join('');
  return '<div class="cm-slider">'+
    '<div class="cm-sl-track" id="cmSlTrack" onscroll="cmSliderScroll(this)">'+items+'</div>'+
    (n>1?(
      '<div class="cm-sl-count" id="cmSlCount">1 / '+n+'</div>'+
      '<button type="button" class="cm-sl-nav prev" onclick="cmSliderMove(-1)" aria-label="이전 이미지">‹</button>'+
      '<button type="button" class="cm-sl-nav next" onclick="cmSliderMove(1)" aria-label="다음 이미지">›</button>'+
      (n<=CM_DOTS_MAX?('<div class="cm-dots" id="cmSlDots">'+imgs.map(function(u,i){return i?'<i></i>':'<i class="on"></i>';}).join('')+'</div>'):'')
    ):'')+
  '</div>';
}
function cmSliderScroll(el){
  if(!el)return;
  var n=el.children.length,w=el.clientWidth||1;
  var i=Math.round(el.scrollLeft/w);
  if(i<0)i=0; else if(i>n-1)i=n-1;
  var dots=document.getElementById("cmSlDots");
  if(dots)for(var k=0;k<dots.children.length;k++)dots.children[k].className=(k===i)?"on":"";
  var c=document.getElementById("cmSlCount");
  if(c)c.textContent=(i+1)+" / "+n;
}
function cmSliderMove(dir){
  var el=document.getElementById("cmSlTrack");
  if(!el)return;
  var n=el.children.length,w=el.clientWidth||1;
  var i=Math.round(el.scrollLeft/w)+dir;
  if(i<0)i=n-1; else if(i>n-1)i=0;   // 양 끝에서 순환
  el.scrollTo({left:i*w,behavior:"smooth"});
}
/* 스와이프로 넘긴 것까지 '탭'으로 오해해 원본 뷰어가 열리는 것을 막는다.
   가로로 10px 넘게 움직였으면 넘기려던 손짓으로 본다. */
var _cmSlDownX=null;
function cmSlDown(e){_cmSlDownX=e.clientX;}
function cmSlTap(e,url,i){
  var moved=(_cmSlDownX!==null&&Math.abs(e.clientX-_cmSlDownX)>10);
  _cmSlDownX=null;
  if(!moved)openImageViewer(url,cmDetailImages(),i);
}
/* 지금 보고 있는 커미션의 이미지 목록 — 원본 뷰어에서 다음 장으로 넘기는 데 쓴다.
   ⚠️ 배열을 인라인 onclick 문자열에 박아 넣지 않는다(따옴표 이스케이프가 두 겹이 되어 깨지기 쉽다).
      함수 호출로 두면 누를 때 그때의 목록을 읽는다. */
function cmDetailImages(){
  try{
    if(cmDetailCtx&&cmDetailCtx.from==='register'&&cmPreviewObj)return (cmPreviewObj.images||[]).slice();
    var d=cmData[cmDetailCtx?cmDetailCtx.idx:-1];
    return (d&&d.images)?d.images.slice():[];
  }catch(e){return [];}
}

function cmDetailHTML(d,idx){
  var artist=d.artist||'나';
  var title=d.title||'제목 없음';
  var price=d.price||'0';
  var period=d.period||'작가 설정 (예: 3~7일)';
  var desc=d.desc||'그림체 아래 샘플(팬아트, 커미션 샘플) 확인해주세요.\n\n두상: 어깨선\n흉상: 명치선 - 허리 위\n반신: 골반 - 허벅지 중간\n\n추가금 문의 편하게 주세요.';
  var descHTML=d.descHtml?sanitizePostHtml(d.descHtml):null;
  var usageHTML=d.usage?esc(d.usage).replace(/\n/g,'<br>'):'';
  var policyHTML=d.policy?('<p>'+esc(d.policy).replace(/\n/g,'<br>')+'</p>'):('<p>'+CM_DEFAULT_POLICY_HTML+'</p>');
  // 태그는 선택 입력(2026-08-15) — 없으면 줄 자체를 안 그린다.
  // ⚠️ 예전 데모 폴백(두상·흉상·반신·드림)을 그대로 두면 태그 없는 커미션에 가짜 태그가 떠 버린다.
  var tags=(d.tags&&d.tags.length)?d.tags:[];
  var hasImages=!!(d.images&&d.images.length);
  var sliderHTML=cmSliderHTML(hasImages?d.images:null,idx);
  var samples='';
  if(hasImages){
    samples=d.images.map(function(u,k){return '<div class="cm-s tap" onclick="openImageViewer(\''+esc(cmQ(u))+'\',cmDetailImages(),'+k+')" style="background-image:url(\''+esc(cmQ(u))+'\');background-size:cover;background-position:center"></div>';}).join('');
  }else if(d.images){
    samples='<div class="cm-s" style="background:var(--brand-soft)"></div>';
  }else{
    for(var j=0;j<6;j++)samples+='<div class="cm-s" style="background:'+cmGrads[(idx+j)%cmGrads.length]+'"></div>';
  }
  var realReviews=(d.id!=null)?cmCommissionReviews(d.id):[];
  var goodCnt=realReviews.filter(function(r){return r.commissionSentiment==='good'}).length;
  var badCnt=realReviews.filter(function(r){return r.commissionSentiment==='bad'}).length;
  var canReview=AUTH.user&&d.authorId&&AUTH.user.id!==d.authorId;
  var isOwner=AUTH.user&&d.authorId&&AUTH.user.id===d.authorId; // 이 커미션의 작가 본인
  var revBenefit=(d.reviewEventBenefit||'').trim();
  var showRevEvent=!!(d.reviewEventOn&&revBenefit); // 리뷰 이벤트 표시 여부
  var bookmarked=(d.id!=null)&&cmBookmarkIds&&cmBookmarkIds.has(d.id);
  var satisfactionHTML=realReviews.length>0
    ?('<div class="cm-verify"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>만족율 '+Math.round(goodCnt/realReviews.length*100)+'%</div>')
    :'';
  var channel=d.channel||(artist==='나'?'내 커미션':(artist+' 커미션'));
  /* ⚠️ 여기서 '지금 보고 있는 커미션'을 기록한다 — 헤더의 공유·더보기 버튼이 이 값을 쓴다.
     상세를 그리는 경로가 넷(목록 클릭·링크 진입·미리보기·미리보기 복귀)이라, 각 호출부에
     흩어 두면 한 곳만 빠뜨려도 조용히 어긋난다. 모두가 반드시 지나는 이 자리에 둔다.
     등록 미리보기는 id가 없어 null → 헤더 버튼도 숨는다(_cmDetailNow). */
  cmDetailCurrentId=(d&&d.id!=null)?d.id:null;
  /* 예전엔 여기에 [←] ... [공유][⋯] 만 든 59px짜리 바가 있었다. 거의 빈 줄이라
     앱 헤더로 올리고 제거했다(2026-08-15 사용자 요청) — 헤더의 ☰가 상세에선 ←가 된다. */
  return '<div class="cm-root">'+
    sliderHTML+
    '<div class="cm-d-body">'+
      satisfactionHTML+
      '<div class="cm-d-title">'+esc(title)+(showRevEvent?' <span class="cm-revevent-tag">🎁 리뷰 이벤트 중</span>':'')+'</div>'+
      (d.hidePrice?'':'<div class="cm-d-price">'+esc(price)+'원</div>')+
      '<div class="cm-artist-row" onclick="'+(d.authorId?('cmOpenAuthorProfile(\''+cmQ(d.authorId)+'\')'):('cmOpenArtistProfile(\''+cmQ(artist)+'\')'))+'">'+
        '<div class="cm-l"><div class="cm-ava">'+avatarHTML(artist,d.artistAvatar)+'</div><div><span class="cm-nm">'+esc(artist)+'</span> <span class="cm-rv">'+realReviews.length+'개 후기</span></div></div>'+
        /* ⚠️ 예전엔 뜻 모를 아이콘 옆에 **하드코딩된 0**과 숫자만 있는 조회수가 나란히 있어,
              무엇을 세는 숫자인지 알 수 없었다(2026-08-13 신고). 글자로 이름을 붙이고,
              쓰이지 않던 0은 실제 저장(북마크) 수로 바꿨다. 아이콘은 목록 카드와 같은 것을 쓴다. */
        '<div class="cm-r">'+
          '<span title="조회수">'+CM_IC_VIEW+'조회 '+fmtViews(d.views||0)+'</span>'+
          '<span title="저장한 사람 수">'+CM_IC_BOOKMARK+'저장 '+(d.bookmarkCount||0)+'</span>'+
        '</div>'+
      '</div>'+
      '<div class="cm-stats"><div class="cm-stat"><span class="cm-k">신청 가능</span><span class="cm-v">'+esc(d.slots||'8')+'개 남음</span></div>'+
        '<div class="cm-stat"><span class="cm-k">작업 기간</span><span class="cm-v">'+esc(period)+'</span></div></div>'+
      cmAdminScoreHTML(d)+
      ((isOwner&&d.id!=null)?'<div class="cm-owner-bar"><button class="cm-owner-del" onclick="cmDeleteCommission('+d.id+')">🗑 이 커미션 삭제</button></div>':'')+
      '<div class="cm-desc">'+(descHTML?descHTML:esc(desc))+'</div>'+
      (showRevEvent?('<div class="cm-revevent">'+
        '<div class="cm-revevent-h">🎁 리뷰 이벤트 진행 중</div>'+
        '<div class="cm-revevent-benefit">'+esc(revBenefit).replace(/\n/g,'<br>')+'</div>'+
        ((canReview&&d.id!=null)?'<button class="cm-revevent-cta" onclick="cmOpenWrite('+d.id+')">✍️ 후기 쓰고 혜택 받기</button>':'')+
        '<div class="cm-revevent-note">💡 이 혜택은 작가님이 직접 제공하며, commi는 중개하지 않아요.</div>'+
      '</div>'):'')+
      '<div class="cm-rv-sec"><div class="cm-rv-head"><b>커미션 후기 '+realReviews.length+'</b><span class="cm-rv-more" onclick="cmOpenReviews('+(d.id!=null?d.id:'null')+')">더보기 ></span></div>'+
        '<div class="cm-rv-summary"><div class="cm-rv-box good"><div class="cm-ic">😊</div><div class="cm-n">'+goodCnt+'</div><div class="cm-l">만족 후기</div></div>'+
          '<div class="cm-rv-box bad"><div class="cm-ic">😐</div><div class="cm-n">'+badCnt+'</div><div class="cm-l">불호 후기</div></div></div>'+
        '<div>'+(realReviews.length?reviewListHTML(realReviews.slice(0,3)):'<div class="cm-my-empty">아직 후기가 없어요.</div>')+'</div>'+
        (canReview?'<button class="cm-write-btn" style="margin-top:10px" onclick="cmOpenWrite('+d.id+')">✍️ 후기 쓰기</button>':'')+
      '</div>'+
      (d.id!=null?('<div class="cm-ws-sec"><div class="cm-rv-head"><b>최신 작업물</b>'+
        ((AUTH.user&&d.authorId&&AUTH.user.id===d.authorId)?'<span class="cm-rv-more" onclick="cmOpenWorksampleForm('+d.id+')">+ 최신 작업물 올리기</span>':'')+
        '</div><div class="cm-ws-list" id="cmWsList"><div class="cm-my-empty">불러오는 중...</div></div></div>'):'')+
      '<div class="cm-samples">'+samples+'</div>'+
      (usageHTML?('<div class="cm-acc open"><div class="cm-acc-h" onclick="this.parentElement.classList.toggle(\'open\')"><b>작업물 사용 권한</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 15l6-6 6 6"/></svg></div>'+
        '<div class="cm-acc-c"><p>'+usageHTML+'</p></div></div>'):'')+
      '<div class="cm-acc"><div class="cm-acc-h" onclick="this.parentElement.classList.toggle(\'open\')"><b>거래 정책 안내</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 15l6-6 6 6"/></svg></div>'+
        '<div class="cm-acc-c">'+policyHTML+'</div></div>'+
      (tags.length?('<div class="cm-d-tags">'+tags.map(function(t){return '<div class="cm-t">#'+esc(t)+'</div>';}).join('')+'</div>'):'')+
      '<div class="cm-sub-card"><div class="cm-l"><div class="cm-ci">P</div><div><div class="cm-nm">'+esc(channel)+'</div></div></div>'+
      // 구독 = 이 작가 팔로우. 본인 커미션에는 의미가 없어 숨긴다.
      ((d.authorId&&(!AUTH.user||AUTH.user.id!==d.authorId))
        ?('<div class="cm-btn'+(FOLLOW.has(d.authorId)?' on':'')+'" id="cmSubBtn" '+
          'onclick="cmToggleSubscribe(&quot;'+cmQ(d.authorId)+'&quot;,&quot;'+cmQ(d.artist||d.author||'')+'&quot;)">'+(FOLLOW.has(d.authorId)?'구독 중':'구독')+'</div>')
        :'')+
      '</div>'+
    '</div>'+
    '<div class="cm-pad"></div>'+
    '<div class="cm-apply-bar"><div class="cm-bm'+(bookmarked?' on':'')+'"'+(d.id!=null?(' onclick="cmToggleBookmark('+d.id+',this)"'):'')+'><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12v18l-6-4-6 4z"/></svg></div>'+
      '<div class="cm-ask" onclick="'+((d.authorId&&d.id!=null)?('cmOpenChatAbout(\''+cmQ(d.authorId)+'\','+d.id+',\''+cmQ(title)+'\')'):'cmComingSoon()')+'">문의하기</div>'+
      '<div class="cm-apply" onclick="'+((d.authorId&&d.id!=null)?('cmApply(\''+cmQ(d.authorId)+'\','+d.id+',\''+cmQ(title)+'\')'):'cmComingSoon()')+'">신청하기</div></div>'+
  '</div>';
}
/* 가림막 카드를 눌렀을 때. 상세로 보내지 않고 인증 안내만 한다
   (보낼 내용 자체가 없다 — 서버가 안 줬다). */
function cmOpenLocked(){
  if(!AUTH.user){
    toast('로그인 후 성인 인증을 하면 볼 수 있어요','🔒');
    openLoginModal();
    return;
  }
  toast('성인 인증을 하면 볼 수 있어요','🔞');
  openAdultGate();
}
function cmOpenDetail(idx){
  var _d=cmData[idx];
  if(_d&&_d.locked){cmOpenLocked();return;} // 다른 경로로 들어와도 막는다
  track("commission_view");
  enterScreen("cmDetail",cmDetailBack);
  cmDetailCtx={from:'list',idx:idx};
  var d=cmData[idx];
  document.getElementById("main").innerHTML=cmDetailHTML(d,idx);
  _cmSetDetailUrl(d.id,d.title);
  window.scrollTo({top:0,behavior:"smooth"});
  cmLoadWorksamples(d.id);
  // 조회수 +1 (추천 점수의 '인기' 요소에 쓰임) — 서버에서 증가, 조작 방지 위해 딱 이 동작만 하는 RPC
  if(d&&d.id!=null&&window.supabase){d.views=(d.views||0)+1;window.supabase.rpc("increment_commission_views",{p_id:d.id}).then(function(){});}
}
function cmDetailBack(){
  if(cmDetailCtx.from==='register')cmRenderRegisterScreen();
  else openCommissionList();
}
function cmBackToDetail(){
  if(cmDetailCtx.from==='register'&&cmPreviewObj){
    document.getElementById("main").innerHTML=cmDetailHTML(cmPreviewObj,cmDetailCtx.idx);
    window.scrollTo({top:0,behavior:"smooth"});
  }else{
    cmOpenDetail(cmDetailCtx.idx);
  }
}
// 커미션 상세에서 작가(실제 회원) 프로필로 이동 — 뒤로가기 스택에 얹어(뒤로 시 커미션 상세로 복귀)
// keepStack 모드로 openUserProfile을 열어, 커미션 흐름의 단계별 뒤로가기가 끊기지 않게 함.
function cmOpenAuthorProfile(userId){
  enterScreen("cmAuthorProfile",cmBackToDetail);
  // 주소도 프로필로 바꾼다 — 안 바꾸면 화면은 프로필인데 주소는 /commission/<id> 라
  // 링크를 복사해 공유하면 엉뚱하게 커미션이 열린다(2026-08-15 사용자 신고).
  // keepStack 모드라 openUserProfile 은 주소를 건드리지 않으므로 여기서 맡는다.
  _setScreenUrl("/user/"+userId);   // 제목은 openUserProfile 이 닉네임을 받아 채운다
  openUserProfile(userId,true);
}
function cmOpenArtistProfile(name){
  enterScreen("cmArtist",cmBackToDetail);
  document.getElementById("main").innerHTML='<div class="cm-root">'+
    '<div class="cm-pf-top"><svg onclick="screenBack()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg><b>작가 프로필</b></div>'+
    '<div class="cm-pf-head"><div class="cm-pf-ava"></div><div class="cm-pf-name">'+esc(name)+'</div><div class="cm-pf-grade">🎨 채색반</div>'+
      '<div class="cm-pf-stats"><div><div class="cm-n">'+cmReviews.length+'</div><div class="cm-l">후기</div></div>'+
        '<div><div class="cm-n">'+cmReviews.filter(function(r){return r.type==="호"}).length+'</div><div class="cm-l">만족 후기</div></div>'+
        '<div><div class="cm-n">115</div><div class="cm-l">구독자</div></div></div></div>'+
    '<div class="cm-pf-note">※ 실제로는 기존에 만든 작가 프로필 화면으로 연결됩니다.<br>(여기선 연결 예시만 표시)</div>'+
  '</div>';
  window.scrollTo({top:0,behavior:"smooth"});
}
/* ---------- 커미션 최신 작업물 (worksamples) — 커미션별 작업 결과물 쇼케이스 ---------- */
var cmWsCache={};                            // {commissionId: [worksample...]} — 상세를 재조회 없이 재사용
var cmWsForm={commissionId:null,images:[]};  // 등록 폼 상태
// 커미션 상세의 "최신 작업물" 목록을 비동기로 불러와 채움(상세 렌더 직후 호출)
async function cmLoadWorksamples(commissionId){
  var el=document.getElementById("cmWsList");
  if(!el||commissionId==null||!window.supabase)return;
  var res=await window.supabase.from("commission_worksamples")
    .select("id,title,description,work_date,created_at,commission_worksample_images(url,sort)")
    .eq("commission_id",commissionId).order("created_at",{ascending:false});
  if(res.error){el.innerHTML='<div class="cm-my-empty">최신 작업물을 불러오지 못했어요.</div>';return;}
  cmWsCache[commissionId]=res.data||[];
  if(document.getElementById("cmWsList"))document.getElementById("cmWsList").innerHTML=cmWorksampleListHTML(res.data||[],commissionId);
}
function cmWsThumb(ws){
  var imgs=(ws.commission_worksample_images||[]).slice().sort(function(a,b){return a.sort-b.sort;});
  return imgs.length?("url('"+cmQ(imgs[0].url)+"') center/cover"):cmGrads[ws.id%cmGrads.length];
}
function cmWorksampleListHTML(list,commissionId){
  if(!list.length)return '<div class="cm-my-empty">아직 올라온 작업물이 없어요.</div>';
  return '<div class="cm-ws-strip">'+list.map(function(ws){
    return '<div class="cm-ws-card" onclick="cmOpenWorksample('+ws.id+','+commissionId+')">'+
      '<div class="cm-ws-thumb" style="background:'+cmWsThumb(ws)+'"></div>'+
      '<div class="cm-ws-cap"><div class="cm-ws-t">'+esc(ws.title)+'</div>'+
        (ws.work_date?'<div class="cm-ws-dt">'+esc(ws.work_date)+'</div>':'')+'</div>'+
    '</div>';
  }).join('')+'</div>';
}
// 최신 작업물 상세 보기
function cmOpenWorksample(worksampleId,commissionId){
  enterScreen("cmWorksample",cmBackToDetail);
  var backSvg='<svg onclick="screenBack()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>';
  var list=cmWsCache[commissionId]||[];
  var ws=list.find(function(x){return x.id===worksampleId;});
  var main=document.getElementById("main");
  if(!ws){main.innerHTML='<div class="cm-root"><div class="cm-sub-top">'+backSvg+'<b>최신 작업물</b></div><div class="cm-my-empty">작업물을 찾을 수 없어요.</div></div>';return;}
  var imgs=(ws.commission_worksample_images||[]).slice().sort(function(a,b){return a.sort-b.sort;});
  main.innerHTML='<div class="cm-root">'+
    '<div class="cm-sub-top">'+backSvg+'<b>최신 작업물</b></div>'+
    '<div class="cm-ws-detail">'+
      '<div class="cm-ws-d-title">'+esc(ws.title)+'</div>'+
      (ws.work_date?'<div class="cm-ws-d-date">📅 '+esc(ws.work_date)+'</div>':'')+
      '<div class="cm-ws-d-imgs">'+imgs.map(function(im){return '<img class="cm-ws-d-img" src="'+esc(im.url)+'" alt="">';}).join('')+'</div>'+
      (ws.description?'<div class="cm-ws-d-desc">'+esc(ws.description).replace(/\n/g,'<br>')+'</div>':'')+
    '</div>'+
  '</div>';
  window.scrollTo({top:0,behavior:"smooth"});
}
// 최신 작업물 올리기 폼 (그 커미션의 작가 본인만 진입 — 버튼도 본인에게만 보이고, RLS로도 서버가 막음)
// back: 뒤로/등록 후 돌아갈 화면 함수. 기본은 커미션 상세(cmBackToDetail), 등록 페이지 흐름에선 커미션 선택 화면.
function cmOpenWorksampleForm(commissionId,back){
  if(!AUTH.user){toast('로그인 후 이용할 수 있어요','🔒');loginWithGoogle();return;}
  enterScreen("cmWsForm",back||cmBackToDetail);
  cmWsForm={commissionId:commissionId,images:[]};
  document.getElementById("main").innerHTML='<div class="cm-root">'+
    '<div class="cm-sub-top"><svg onclick="screenBack()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg><b>최신 작업물 올리기</b></div>'+
    '<div class="cm-ws-tip"><b>최근에 작업한 커미션을 올리면 해당 커미션 타입의 추천 점수가 올라가요!</b><span>신청자들은 최근 작업물을 보고 평균 퀄리티를 확인할 수 있고, 커미션 등록자는 추천 순위가 올라가는 시스템이에요!</span></div>'+
    '<div class="cm-reg">'+
      '<div class="cm-reg-label">제목 <span class="cm-reg-req">*</span></div>'+
      '<input class="cm-reg-input" id="cmWsTitle" placeholder="예: LD 반신 채색 작업" oninput="cmWsCheck()">'+
      '<div class="cm-reg-label">작업 이미지 <span class="cm-reg-req">*</span> <span class="cm-reg-sub">여러 장 가능 · 최대 10장</span></div>'+
      '<input type="file" id="cmWsFileInput" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp" multiple class="hidden" onchange="cmWsOnFileChange(event)">'+
      '<div class="cm-reg-imgs" id="cmWsImgs">'+cmWsImgsHTML()+'</div>'+
      '<div class="cm-reg-label">상세 설명 <span class="cm-reg-sub">작업 내용, 소요 기간 등 자유롭게</span></div>'+
      '<textarea class="cm-reg-textarea" id="cmWsDesc" placeholder="어떤 작업이었는지, 소요 기간, 특이사항 등을 자유롭게 적어주세요."></textarea>'+
      '<div class="cm-reg-label">작업 날짜 <span class="cm-reg-sub">선택</span></div>'+
      '<div class="cm-date-row">'+cmDateSelectsHTML()+'</div>'+
    '</div>'+
    '<div class="cm-reg-bottom"><button class="cm-reg-btn" id="cmWsSubmit" onclick="cmSubmitWorksample()" disabled>등록하기</button></div>'+
  '</div>';
  window.scrollTo({top:0,behavior:"smooth"});
}
// 커미션 등록 페이지에서 "최신 작업물 올리기"를 누르면: 내 커미션 중 어느 것에 붙일지 고르는 화면.
// 고르면 기존 등록 폼(cmOpenWorksampleForm)을 그대로 재사용하되, 뒤로는 이 선택 화면으로 돌아오게 함.
async function cmOpenWsCommissionPicker(back){
  if(!AUTH.user){toast('로그인 후 이용할 수 있어요','🔒');loginWithGoogle();return;}
  enterScreen("cmWsPicker",back||cmRenderRegisterScreen);
  document.getElementById("main").innerHTML='<div class="cm-root">'+
    '<div class="cm-sub-top"><svg onclick="screenBack()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg><b>최신 작업물을 올릴 커미션</b></div>'+
    '<div class="cm-ws-tip"><b>최근에 작업한 커미션을 올리면 해당 커미션 타입의 추천 점수가 올라가요!</b><span>신청자들은 최근 작업물을 보고 평균 퀄리티를 확인할 수 있고, 커미션 등록자는 추천 순위가 올라가는 시스템이에요!</span></div>'+
    '<div class="cm-ws-pick" id="cmWsPickList"><div class="cm-my-empty">불러오는 중...</div></div>'+
  '</div>';
  window.scrollTo({top:0,behavior:"smooth"});
  var res=await window.supabase.from('commissions').select('id,title,commission_images(url,sort)').eq('author_id',AUTH.user.id).order('created_at',{ascending:false});
  var el=document.getElementById("cmWsPickList"); if(!el)return;
  if(res.error){el.innerHTML='<div class="cm-my-empty">불러오지 못했어요: '+esc(res.error.message)+'</div>';return;}
  var list=res.data||[];
  if(!list.length){el.innerHTML='<div class="cm-my-empty">아직 등록한 커미션이 없어요.<br>먼저 커미션을 등록해주세요.</div>';return;}
  el.innerHTML=list.map(function(c){
    var imgs=(c.commission_images||[]).slice().sort(function(a,b){return a.sort-b.sort;});
    var thumb=imgs.length?("url('"+cmQ(imgs[0].url)+"') center/cover"):cmGrads[c.id%cmGrads.length];
    return '<div class="cm-ws-pick-row" onclick="cmOpenWorksampleForm('+c.id+',cmOpenWsCommissionPicker)">'+
      '<div class="cm-ws-pick-thumb" style="background:'+thumb+'"></div>'+
      '<div class="cm-ws-pick-title">'+esc(c.title||'제목 없음')+'</div>'+
      '<svg class="cm-ws-pick-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>'+
    '</div>';
  }).join('');
}
// 작업 날짜: 네이티브 date 대신 Palo 스타일 드롭다운 3개(연/월/일). y/m/d는 초기 선택값(선택).
function cmDaysInMonth(y,m){ if(!m)return 31; return new Date(y||2000,m,0).getDate(); } // 윤년 포함 그 달의 일수
function cmDateSelectsHTML(y,m,d){
  var cy=new Date().getFullYear();
  var years='<option value="">연도</option>';
  for(var yy=cy;yy>=cy-10;yy--)years+='<option value="'+yy+'"'+(y==yy?' selected':'')+'>'+yy+'년</option>';
  var months='<option value="">월</option>';
  for(var mm=1;mm<=12;mm++)months+='<option value="'+mm+'"'+(m==mm?' selected':'')+'>'+mm+'월</option>';
  var days='<option value="">일</option>';
  var dim=cmDaysInMonth(y,m);
  for(var dd=1;dd<=dim;dd++)days+='<option value="'+dd+'"'+(d==dd?' selected':'')+'>'+dd+'일</option>';
  return '<select class="cm-reg-input cm-date-sel" id="cmWsYear" onchange="cmWsSyncDays()">'+years+'</select>'+
         '<select class="cm-reg-input cm-date-sel" id="cmWsMonth" onchange="cmWsSyncDays()">'+months+'</select>'+
         '<select class="cm-reg-input cm-date-sel" id="cmWsDay">'+days+'</select>';
}
// 연/월이 바뀌면 그 달의 실제 일수로 '일' 목록을 다시 생성(2월 30일 같은 잘못된 날짜 방지)
function cmWsSyncDays(){
  var y=document.getElementById('cmWsYear').value, m=document.getElementById('cmWsMonth').value;
  var daySel=document.getElementById('cmWsDay'); if(!daySel)return;
  var cur=daySel.value, dim=cmDaysInMonth(y?+y:0,m?+m:0);
  var html='<option value="">일</option>';
  for(var dd=1;dd<=dim;dd++)html+='<option value="'+dd+'"'+(cur==dd?' selected':'')+'>'+dd+'일</option>';
  daySel.innerHTML=html;
}
function cmWsImgsHTML(){
  var h=cmWsForm.images.map(function(url,i){
    return '<div class="cm-reg-img" style="background-image:url(\''+cmQ(url)+'\');background-size:cover;background-position:center"><div class="cm-del" onclick="cmWsDelImg('+i+')">×</div></div>';
  }).join('');
  h+='<div class="cm-reg-addimg" onclick="cmWsPickImg()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg><span class="cm-cnt" id="cmWsImgCnt">'+cmWsForm.images.length+'/10</span></div>';
  return h;
}
function cmWsPickImg(){if(cmWsForm.images.length>=10){toast('최대 10장까지 올릴 수 있어요','⚠');return;}document.getElementById('cmWsFileInput').click();}
function cmWsOnFileChange(e){cmUploadMany(e,cmWsUploadImg,function(){return cmWsForm.images.length>=10;});}
async function cmWsUploadImg(file){
  if(!AUTH.user){toast('로그인 후 이용할 수 있어요','🔒');return;}
  if(ALLOWED_IMAGE_TYPES.indexOf(file.type)===-1){toast('이미지 파일만 올릴 수 있어요');return;}
  if(file.size>MAX_IMAGE_BYTES){toast('40MB 이하 이미지만 올릴 수 있어요');return;}
  if(cmWsForm.images.length>=10){toast('최대 10장까지 올릴 수 있어요','⚠');return;}
  var uploadBlob=file,ext=(file.name.match(/\.([^.]+)$/)||[,'png'])[1];
  if(file.type!=='image/gif'){
    toast('이미지 압축 중...');
    try{var c=await compressImage(file);uploadBlob=c.blob;ext=c.ext;}catch(err){console.error('압축 실패, 원본 업로드:',err);}
  }
  toast('이미지 업로드 중...');
  var wsUrl=await uploadToStorage(uploadBlob,'worksample');
  if(!wsUrl)return;
  cmWsForm.images.push(wsUrl);
  cmWsRenderImgs();cmWsCheck();
  toast('이미지를 넣었어요');
}
function cmWsRenderImgs(){var el=document.getElementById('cmWsImgs');if(el)el.innerHTML=cmWsImgsHTML();}
function cmWsDelImg(i){cmWsForm.images.splice(i,1);cmWsRenderImgs();cmWsCheck();}
function cmWsCheck(){
  var el=document.getElementById('cmWsTitle');var t=el?el.value.trim():'';
  var btn=document.getElementById('cmWsSubmit');if(btn)btn.disabled=!(t&&cmWsForm.images.length);
}
async function cmSubmitWorksample(){
  if(!AUTH.user){toast('로그인이 필요해요');return;}
  var title=document.getElementById('cmWsTitle').value.trim();
  var desc=document.getElementById('cmWsDesc').value.trim();
  var y=document.getElementById('cmWsYear').value,m=document.getElementById('cmWsMonth').value,dd=document.getElementById('cmWsDay').value;
  var date=(y&&m&&dd)?(y+'-'+(m<10?'0'+m:m)+'-'+(dd<10?'0'+dd:dd)):null;
  if(!title){toast('제목을 입력해주세요');return;}
  if(!cmWsForm.images.length){toast('작업 이미지를 최소 1장 올려주세요');return;}
  var btn=document.getElementById('cmWsSubmit');btn.disabled=true;btn.textContent='등록 중...';
  var ins=await window.supabase.from('commission_worksamples').insert({
    commission_id:cmWsForm.commissionId,author_id:AUTH.user.id,title:title,description:desc||null,work_date:date
  }).select('id').single();
  if(ins.error){toast('등록 실패: '+ins.error.message);btn.disabled=false;btn.textContent='등록하기';return;}
  var rows=cmWsForm.images.map(function(url,i){return {worksample_id:ins.data.id,url:url,sort:i};});
  var imgIns=await window.supabase.from('commission_worksample_images').insert(rows);
  if(imgIns.error){toast('이미지 저장 실패: '+imgIns.error.message);}
  delete cmWsCache[cmWsForm.commissionId];  // 캐시 무효화 → 상세 복귀 시 새로 로드
  toast('최신 작업물을 올렸어요','✅');
  screenBack();  // 폼 → 커미션 상세로 복귀(상세가 다시 그려지며 목록도 갱신됨)
}
function cmCommissionReviews(commissionId){
  return POSTS.filter(function(p){return p.board==='review'&&p.commissionId===commissionId;});
}
var cmReviewCommissionId=null;
function cmOpenReviews(commissionId){
  enterScreen("cmReviews",cmBackToDetail);
  cmReviewCommissionId=commissionId;
  if(commissionId!=null){
    var _c=cmData.find(function(c){return c.id===commissionId;});
    _setScreenUrl("/commission/"+commissionId+"/reviews",
      (_c&&_c.title?_c.title+" 후기":"커미션 후기")+" · commi");
  }
  var reviews=(commissionId!=null)?cmCommissionReviews(commissionId):[];
  var goodCnt=reviews.filter(function(r){return r.commissionSentiment==='good'}).length;
  var badCnt=reviews.filter(function(r){return r.commissionSentiment==='bad'}).length;
  var commission=(commissionId!=null)?cmData.find(function(c){return c.id===commissionId;}):null;
  var canReview=AUTH.user&&commission&&commission.authorId&&AUTH.user.id!==commission.authorId;
  document.getElementById("main").innerHTML='<div class="cm-root">'+
    '<div class="cm-sub-top"><svg onclick="screenBack()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>'+
      '<b>커미션 후기</b>'+(canReview?'<button class="cm-write-btn" onclick="cmOpenWrite('+commissionId+')">후기 쓰기</button>':'')+'</div>'+
    '<div class="cm-rv-all"><div class="cm-rv-summary">'+
      '<div class="cm-rv-box good"><div class="cm-ic">😊</div><div class="cm-n">'+goodCnt+'</div><div class="cm-l">만족 후기</div></div>'+
      '<div class="cm-rv-box bad"><div class="cm-ic">😐</div><div class="cm-n">'+badCnt+'</div><div class="cm-l">불호 후기</div></div></div>'+
      '<div>'+(reviews.length?reviewListHTML(reviews):'<div class="cm-my-empty">아직 후기가 없어요.</div>')+'</div>'+
    '</div></div>';
  window.scrollTo({top:0,behavior:"smooth"});
}
var cmWr={images:[]};
function cmWrImgsHTML(){
  var imgsHTML=cmWr.images.map(function(url,i){
    return '<div class="cm-reg-img" style="background-image:url(\''+cmQ(url)+'\');background-size:cover;background-position:center"><div class="cm-del" onclick="cmDelWrImg('+i+')">×</div></div>';
  }).join('');
  imgsHTML+='<div class="cm-reg-addimg" onclick="cmPickWrImg()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg><span class="cm-cnt" id="cmWrImgCnt">'+cmWr.images.length+'/5</span></div>';
  return imgsHTML;
}
function cmPickWrImg(){
  if(cmWr.images.length>=5){toast('최대 5장까지 올릴 수 있어요','⚠');return;}
  document.getElementById('cmWrFileInput').click();
}
function cmOnWrFileChange(e){
  cmUploadMany(e,cmUploadWrImg,function(){return cmWr.images.length>=5;});
}
async function cmUploadWrImg(file){
  if(!AUTH.user){toast('로그인 후 이용할 수 있어요','🔒');return;}
  if(ALLOWED_IMAGE_TYPES.indexOf(file.type)===-1){toast('이미지 파일만 올릴 수 있어요');return;}
  if(file.size>MAX_IMAGE_BYTES){toast('40MB 이하 이미지만 올릴 수 있어요');return;}
  if(cmWr.images.length>=5){toast('최대 5장까지 올릴 수 있어요','⚠');return;}
  var uploadBlob=file,ext=(file.name.match(/\.([^.]+)$/)||[,'png'])[1];
  if(file.type!=='image/gif'){
    toast('이미지 압축 중...');
    try{
      var compressed=await compressImage(file);
      uploadBlob=compressed.blob;ext=compressed.ext;
    }catch(err){console.error('이미지 압축 실패, 원본으로 업로드:',err);}
  }
  toast('이미지 업로드 중...');
  var rvUrl=await uploadToStorage(uploadBlob,'review');
  if(!rvUrl)return;
  cmWr.images.push(rvUrl);
  document.getElementById('cmWrImgs').innerHTML=cmWrImgsHTML();
  cmCheckWriteSubmit();
  toast('이미지를 넣었어요');
}
function cmDelWrImg(i){
  cmWr.images.splice(i,1);
  document.getElementById('cmWrImgs').innerHTML=cmWrImgsHTML();
  cmCheckWriteSubmit();
}
var cmWrCommissions=[]; // 후기 작성 화면의 선택지(이 작가의 커미션 {id,title} 목록)
async function cmOpenWrite(commissionId){
  if(!AUTH.user){
    toast('로그인 후 후기를 작성할 수 있어요','🔒');
    loginWithGoogle();
    return;
  }
  enterScreen("cmWrite",function(){cmOpenReviews(commissionId);});
  cmReviewCommissionId=commissionId;
  cmState.wrType=null;cmState.wrBadReason=null;
  cmWr={images:[]};
  var commission=cmData.find(function(c){return c.id===commissionId;});
  /* "어떤 커미션이었나요?"의 선택지 — 예전엔 이 커미션의 **태그**(두상·흉상…)를 보여줬는데,
     골라도 저장만 되고 아무 데도 안 쓰였다(commission_ctype은 표시하는 곳이 없다).
     이제 이 작가의 **커미션 제목**을 보여주고, 고르면 후기가 그 커미션의 id에 연결된다
     (2026-08-14 사용자 요청). 그래야 만족률·후기 목록·후기 카드 제목이 고른 커미션으로
     정확히 집계된다 — 전부 commission_id 기준이라 연동이 자동으로 따라온다. */
  cmWrCommissions=[{id:commissionId,title:(commission&&commission.title)||'이 커미션'}];
  cmState.wrCommissionId=commissionId; // 들어온 커미션을 기본 선택 — 대부분 그 커미션 후기다
  if(commission&&commission.authorId&&window.supabase){
    // 성인 커미션은 RLS(restrictive)가 미인증자에게 행 자체를 안 주므로 여기서도 자동으로 빠진다
    var listRes=await window.supabase.from('commissions').select('id,title')
      .eq('author_id',commission.authorId).order('created_at',{ascending:false});
    if(!listRes.error&&listRes.data&&listRes.data.length){
      cmWrCommissions=listRes.data;
      if(!cmWrCommissions.some(function(c){return c.id===commissionId;}))
        cmWrCommissions.unshift({id:commissionId,title:(commission&&commission.title)||'이 커미션'});
    }
  }
  document.getElementById("main").innerHTML='<div class="cm-root">'+
    '<div class="cm-sub-top"><svg onclick="screenBack()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg><b>후기 작성</b></div>'+
    '<div class="cm-wr">'+
      '<div class="cm-wr-label">이 커미션 어떠셨나요?</div>'+
      '<div class="cm-hb">'+
        '<div class="cm-hb-btn good" id="cmHbGood" onclick="cmSelectHB(\'good\')"><div class="cm-ic">😊</div><div class="cm-t">만족 후기</div></div>'+
        '<div class="cm-hb-btn bad" id="cmHbBad" onclick="cmSelectHB(\'bad\')"><div class="cm-ic">😐</div><div class="cm-t">불호 후기</div></div>'+
      '</div>'+
      '<div class="cm-wr-label">받은 커미션 <span class="cm-wr-sub">어떤 커미션이었나요?</span></div>'+
      '<div class="cm-wr-types" id="cmWrTypes">'+cmWrCommissions.map(function(c){
        return '<div class="cm-wr-type'+(c.id===cmState.wrCommissionId?' sel':'')+'" onclick="cmSelectCommission(this,'+c.id+')">'+esc(c.title||'제목 없음')+'</div>';
      }).join('')+'</div>'+
      '<div class="cm-wr-label" id="cmWrReasonLabel" style="display:none">불호 이유 <span class="cm-wr-sub">해당하는 이유를 골라주세요</span></div>'+
      '<div class="cm-wr-types" id="cmWrReasons" style="display:none">'+CM_BAD_REASONS.map(function(r){return '<div class="cm-wr-type cm-wr-reason" onclick="cmSelectBadReason(this,\''+cmQ(r)+'\')">'+esc(r)+'</div>';}).join('')+'</div>'+
      '<div class="cm-wr-label">받은 커미션 사진 <span class="cm-reg-req">*</span> <span class="cm-wr-sub">필수 · 최대 5장</span></div>'+
      '<input type="file" id="cmWrFileInput" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp" multiple class="hidden" onchange="cmOnWrFileChange(event)">'+
      '<div class="cm-reg-imgs" id="cmWrImgs">'+cmWrImgsHTML()+'</div>'+
      '<div class="cm-wr-label">후기 내용 <span class="cm-wr-sub">선택 · 한 줄도 좋아요</span></div>'+
      '<textarea class="cm-wr-text" id="cmWrText" placeholder="작가님과의 거래는 어떠셨나요? (안 쓰셔도 괜찮아요)"></textarea>'+
      '<div class="cm-wr-hint">💡 솔직하고 예의 있는 후기는 다른 분들께 큰 도움이 돼요.</div>'+
    '</div>'+
    '<div class="cm-wr-submit"><button id="cmWrSubmit" onclick="cmSubmitReview()" disabled>후기 등록하기</button></div>'+
  '</div>';
  window.scrollTo({top:0,behavior:"smooth"});
}
function cmSelectHB(v){
  cmState.wrType=v;
  document.getElementById('cmHbGood').classList.toggle('sel',v==='good');
  document.getElementById('cmHbBad').classList.toggle('sel',v==='bad');
  var showReason=v==='bad';
  document.getElementById('cmWrReasonLabel').style.display=showReason?'':'none';
  document.getElementById('cmWrReasons').style.display=showReason?'':'none';
  if(!showReason){
    cmState.wrBadReason=null;
    document.querySelectorAll('.cm-wr-reason').forEach(function(x){x.classList.remove('sel')});
  }
  cmCheckWriteSubmit();
}
function cmSelectCommission(el,id){
  cmState.wrCommissionId=id;
  document.querySelectorAll('#cmWrTypes .cm-wr-type').forEach(function(x){x.classList.remove('sel')});
  el.classList.add('sel');
  cmCheckWriteSubmit();
}
function cmSelectBadReason(el,r){
  cmState.wrBadReason=r;
  document.querySelectorAll('.cm-wr-reason').forEach(function(x){x.classList.remove('sel')});
  el.classList.add('sel');
  cmCheckWriteSubmit();
}
function cmCheckWriteSubmit(){
  var ok=cmState.wrType&&cmState.wrCommissionId!=null&&(cmState.wrType!=='bad'||cmState.wrBadReason)&&cmWr.images.length>0;
  document.getElementById('cmWrSubmit').disabled=!ok;
}
async function cmSubmitReview(){
  if(!AUTH.user){toast('로그인 후 후기를 작성할 수 있어요','🔒');return;}
  var targetId=(cmState.wrCommissionId!=null)?cmState.wrCommissionId:cmReviewCommissionId;
  if(targetId==null){toast('커미션 정보를 찾을 수 없어요');return;}
  if(!cmWr.images.length){toast('후기 사진을 최소 1장 넣어주세요','📷');return;}
  // 작가 정보는 들어온 커미션에서 — 선택지가 전부 같은 작가의 커미션이라 어느 걸 골라도 같다
  var commission=cmData.find(function(c){return c.id===cmReviewCommissionId;});
  // ctype 칸에는 고른 커미션의 제목을 남긴다(예전 데이터와 같은 성격 — "무엇에 대한 후기인지"의 글자 표기)
  var picked=cmWrCommissions.find(function(c){return c.id===targetId;});
  var pickedTitle=picked?(picked.title||''):'';
  var txt=document.getElementById('cmWrText').value.trim();
  var sentiment=cmState.wrType;
  var title=sentimentTitle(sentiment);
  var saved=await window.supabase.from('posts').insert({
    author_id:AUTH.user.id,
    board:'review',
    category:null,
    title:title,
    content:txt,
    content_html:null,
    stage:null,
    reviewed_nickname:commission?commission.artist:null,
    reviewed_user_id:commission?commission.authorId:null,
    commission_post_id:null,
    commission_sentiment:sentiment,
    commission_id:targetId,
    commission_ctype:pickedTitle||null,
    commission_bad_reason:sentiment==='bad'?cmState.wrBadReason:null
  }).select().single();
  if(saved.error){toast('저장 실패: '+saved.error.message);return;}
  if(cmWr.images.length){
    var imgRows=cmWr.images.map(function(url,i){return{post_id:saved.data.id,url:url,sort:i};});
    var savedImgs=await window.supabase.from('post_images').insert(imgRows);
    if(savedImgs.error)toast('사진 저장 실패: '+savedImgs.error.message);
  }
  POSTS.unshift({id:100000+saved.data.id,dbId:saved.data.id,authorId:AUTH.user.id,board:'review',title:title,category:null,
    author:ME.nick,authorLevel:AUTH.profile?AUTH.profile.level:null,authorAvatar:AUTH.profile?AUTH.profile.avatar_url:null,
    time:'방금',createdAt:new Date().toISOString(),likes:0,_liked:false,views:0,thumb:'none',stage:null,
    images:cmWr.images.length?cmWr.images.slice():undefined,
    isManagerPick:false,pickPosition:null,pickedAt:null,adLocked:false,
    reviewedNickname:commission?commission.artist:null,reviewedUserId:commission?commission.authorId:null,commissionPostId:null,commissionSentiment:sentiment,
    commissionId:targetId,commissionCtype:pickedTitle||null,commissionBadReason:sentiment==='bad'?cmState.wrBadReason:null,
    content:txt?txt.split('\n').filter(Boolean):[],html:undefined,comments:[]});
  toast('후기가 등록되었어요! 감사합니다','😊');
  cmOpenReviews(targetId); // 후기가 붙은(고른) 커미션의 후기 목록으로 — 방금 쓴 글이 바로 보인다
}
function cmOpenRegister(editId){
  if(!AUTH.user){
    toast('로그인 후 커미션을 등록할 수 있어요','🔒');
    loginWithGoogle();
    return;
  }
  cmRegSubmitting=false; // 화면을 새로 열면 잠금 초기화 — 이전 시도가 네트워크에서 영영 안 돌아온 경우의 고착 방지
  cmReg={images:[],tags:[],status:'open',editingId:editId||null,title:'',price:'',period:'',slots:'',desc:'',descHtml:'',usage:'',policy:'',form:[],reviewEventOn:false,reviewEventBenefit:'',isAdult:false};
  if(editId){
    var c=cmMyList.find(function(x){return x.id===editId});
    if(c&&c.adLocked){toast('광고를 집행 중인 커미션은 수정할 수 없어요');return;}
    if(c){
      cmReg.images=c.images.slice();cmReg.tags=c.tags.slice();cmReg.status=c.status;
      cmReg.title=c.title;cmReg.price=c.price;cmReg.period=c.period;cmReg.slots=c.slots;
      cmReg.desc=c.desc;cmReg.descHtml=c.descHtml||'';cmReg.usage=c.usage||'';cmReg.policy=c.policy||'';
      cmReg.reviewEventOn=!!c.reviewEventOn;cmReg.reviewEventBenefit=c.reviewEventBenefit||'';
      cmReg.isAdult=!!c.isAdult;
      cmReg.form=(c.form||[]).map(function(f){return{id:f.id,type:f.type,label:f.label,required:!!f.required};});
    }
  }
  cmRenderRegisterScreen();
}
function cmSyncReg(){
  cmReg.title=document.getElementById('cmRegTitle').value;
  cmReg.price=document.getElementById('cmRegPrice').value;
  cmReg.period=document.getElementById('cmRegPeriod').value;
  cmReg.slots=document.getElementById('cmRegSlots').value;
  var descEl=document.getElementById('cmRegDescEditor');
  if(descEl){cmReg.descHtml=sanitizePostHtml(descEl.innerHTML.trim());cmReg.desc=descEl.textContent.trim();}
  cmReg.usage=document.getElementById('cmRegUsage').value;
  cmReg.policy=document.getElementById('cmRegPolicy').value;
  var rb=document.getElementById('cmRegRevBenefit');
  if(rb)cmReg.reviewEventBenefit=rb.value;
}
function cmRenderRegisterScreen(){
  enterScreen("cmRegister",function(){if(cmReg.editingId)cmOpenMy();else openCommissionList();});
  var editing=!!cmReg.editingId;
  var imgsHTML=cmReg.images.map(function(url,i){
    return '<div class="cm-reg-img" style="background-image:url(\''+cmQ(url)+'\');background-size:cover;background-position:center"><div class="cm-del" onclick="cmDelSampleImg('+i+')">×</div></div>';
  }).join('');
  imgsHTML+='<div class="cm-reg-addimg" onclick="cmPickSampleImg()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg><span class="cm-cnt" id="cmRegImgCnt">'+cmReg.images.length+'/10</span></div>';
  var tagsHTML=cmReg.tags.map(function(t){return '<div class="cm-reg-tagchip">#'+esc(t)+'<span class="cm-x" onclick="cmRemoveTag(\''+cmQ(t)+'\')">×</span></div>';}).join('');
  document.getElementById("main").innerHTML='<div class="cm-root">'+
    '<div class="cm-sub-top"><svg onclick="screenBack()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg><b>'+(editing?'커미션 수정':'커미션 등록')+'</b></div>'+
    '<div class="cm-ws-shortcut" onclick="cmOpenWsCommissionPicker()"><span>🎨 이미 등록한 커미션에 최신 작업물 올리기</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></div>'+
    '<div class="cm-reg">'+
      '<div class="cm-reg-label">샘플 이미지 <span class="cm-reg-req">*</span> <span class="cm-reg-sub">최대 10장</span></div>'+
      '<input type="file" id="cmRegFileInput" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp" multiple class="hidden" onchange="cmOnRegFileChange(event)">'+
      '<div class="cm-reg-imgs" id="cmRegImgs">'+imgsHTML+'</div>'+
      '<div class="cm-reg-label">커미션 제목 <span class="cm-reg-req">*</span></div>'+
      '<input class="cm-reg-input" id="cmRegTitle" placeholder="예: LD 반신 채색 커미션" oninput="cmCheckReg()" value="'+esc(cmReg.title)+'">'+
      '<div class="cm-reg-label">가격 <span class="cm-reg-req">*</span></div>'+
      '<div class="cm-reg-price"><input class="cm-reg-input" id="cmRegPrice" type="number" inputmode="numeric" min="0" step="1000" placeholder="19000" oninput="cmCheckReg()" value="'+esc(cmReg.price)+'"><span class="cm-unit">원 ~</span></div>'+
      '<div class="cm-reg-label">커미션 태그 <span class="cm-reg-sub">선택 · 최대 5개 · 검색어 노출에 사용돼요</span></div>'+
      '<input class="cm-reg-input" id="cmRegTagInput" placeholder="예: 반신, 두상, 빠른마감 (입력 후 Enter)" onkeydown="cmOnTagKey(event)">'+
      '<div class="cm-reg-taglist" id="cmRegTagList">'+tagsHTML+'</div>'+
      '<div class="cm-reg-taghint'+(cmReg.tags.length>=5?' full':'')+'" id="cmRegTagHint">'+cmReg.tags.length+'/5개</div>'+
      '<div class="cm-reg-label">접수 상태</div>'+
      '<div class="cm-reg-toggle"><div class="cm-reg-tg'+(cmReg.status==='open'?' sel':'')+'" id="cmTgOpen" onclick="cmSetStatus(\'open\')">🟢 접수중</div>'+
        '<div class="cm-reg-tg'+(cmReg.status==='close'?' sel':'')+'" id="cmTgClose" onclick="cmSetStatus(\'close\')">⛔ 마감</div></div>'+
      /* 성인(19+) 표시. 접수 상태 바로 아래에 둔다 — 나중에 물으면 이미 다 적은 뒤라
         되돌리기 번거롭고, 무엇보다 "누가 볼 수 있는지"를 정하는 항목이라 앞에 있어야 한다. */
      '<div class="cm-reg-label">🔞 성인 커미션 <span class="cm-reg-sub">19세 미만이 보면 안 되는 내용이면 표시해주세요</span></div>'+
      '<div class="cm-reg-toggle"><div class="cm-reg-tg'+(cmReg.isAdult?' sel':'')+'" id="cmTgAdultOn" onclick="cmSetAdult(true)">🔞 성인</div>'+
        '<div class="cm-reg-tg'+(!cmReg.isAdult?' sel':'')+'" id="cmTgAdultOff" onclick="cmSetAdult(false)">전체 이용가</div></div>'+
      /* ⚠️ 이 문구는 **실제 동작과 반드시 일치해야 한다.** 1단계(성인 커미션을 통째로 숨김)
            때 쓴 "목록에 나오지 않아요"를 2단계(가림막 카드를 보여줌)로 바꾸면서 안 고쳐,
            작가에게 사실과 다른 약속을 하고 있었다(2026-08-13 사용자 지적).
            동작을 바꾸면 이 줄도 같이 볼 것. */
      '<div class="cm-reg-note" id="cmRegAdultNote" style="'+(cmReg.isAdult?'':'display:none')+'">'+
        '제목·설명·이미지는 <b>본인확인을 마친 만 19세 이상</b>에게만 보여요. '+
        '인증하지 않은 사람에게는 내용이 가려진 카드로만 보이고, 눌러도 인증 안내만 떠요. '+
        '검색·태그 결과에는 나오지 않아요.</div>'+
      '<div class="cm-reg-label">작업 기간 <span class="cm-reg-sub">직접 입력</span></div>'+
      '<input class="cm-reg-input" id="cmRegPeriod" placeholder="예: 3~7일 이내" oninput="cmCheckReg()" value="'+esc(cmReg.period)+'">'+
      '<div class="cm-reg-label">신청 가능 수 <span class="cm-reg-sub">몇 명까지 받을지</span></div>'+
      '<input class="cm-reg-input" id="cmRegSlots" type="number" placeholder="예: 8" oninput="cmCheckReg()" value="'+esc(cmReg.slots)+'">'+
      '<div class="cm-reg-label">커미션 설명 <span class="cm-reg-req">*</span> <span class="cm-reg-sub">필수 · 입력해야 등록할 수 있어요</span></div>'+
      /* 설명란 서식 도구.
         ⚠️ 글쓰기에 있는 **투표·링크·파일은 일부러 넣지 않았다** — 커미션 설명은 안내문이지
            게시글이 아니고, 그 셋은 각각 투표 저장·외부 링크 검사·업로드 경로가 딸려 온다.
         ⚠️ 모든 버튼이 onmousedown에서 preventDefault를 한다. 안 그러면 버튼을 누르는 순간
            편집기에서 포커스가 빠져나가 선택 영역이 사라진다(=서식이 아무 데도 안 걸린다). */
      '<div class="cm-reg-toolbar" id="cmDescRowMain">'+
        '<button type="button" title="굵게" onmousedown="cmDescFmt(event,\'bold\')"><span style="font-weight:900">B</span></button>'+
        '<button type="button" title="기울임" onmousedown="cmDescFmt(event,\'italic\')"><span style="font-style:italic;font-family:serif">I</span></button>'+
        '<button type="button" title="밑줄" onmousedown="cmDescFmt(event,\'underline\')"><span style="text-decoration:underline">U</span></button>'+
        '<button type="button" title="취소선" onmousedown="cmDescFmt(event,\'strikeThrough\')"><span style="text-decoration:line-through">S</span></button>'+
        '<span class="cm-reg-tb-div"></span>'+
        '<button type="button" class="cm-tb-more" onmousedown="cmDescSaveSelection();event.preventDefault()" onclick="cmDescView(\'color\')">색 <i>›</i></button>'+
        '<button type="button" class="cm-tb-more" onmousedown="cmDescSaveSelection();event.preventDefault()" onclick="cmDescView(\'font\')">글꼴 <i>›</i></button>'+
        '<button type="button" class="cm-tb-more" onmousedown="cmDescSaveSelection();event.preventDefault()" onclick="cmDescView(\'size\')">크기 <i>›</i></button>'+
        '<span class="cm-reg-tb-div"></span>'+
        '<button type="button" title="목록" onmousedown="cmDescFmt(event,\'insertUnorderedList\')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>'+
        '<button type="button" title="이미지" onmousedown="cmDescPickImage(event)"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m4 18 5-5 4 3 3-2 4 4"/></svg></button>'+
      '</div>'+
      '<div class="cm-reg-toolbar cm-tb-sub" id="cmDescRowColor" hidden>'+
        '<button type="button" class="cm-tb-back" onmousedown="event.preventDefault()" onclick="cmDescView(\'main\')" aria-label="뒤로">‹</button>'+
        /* ⚠️ 버튼마다 **누르는 순간 선택 영역을 먼저 저장**한다(cmDescSaveSelection).
              '색 ›'을 거쳐 오지 않고 곧바로 견본을 누르는 경우가 있는데, 그때 저장된 영역이
              없으면 글 맨 끝에 서식이 걸려 "눌러도 아무 일이 없는" 것처럼 보인다
              (2026-08-13 신고: 색·글꼴·크기가 작동하지 않음). */
        CM_DESC_COLORS.map(function(c){
          return '<button type="button" class="cm-tb-sw" title="글자색" onmousedown="cmDescSaveSelection();event.preventDefault();cmDescSetColor(\''+c+'\')" style="background:'+c+'"></button>';
        }).join('')+
        '<span class="cm-reg-tb-div"></span>'+
        CM_DESC_HILITES.map(function(c){
          return '<button type="button" class="cm-tb-sw cm-tb-hl" title="형광펜" onmousedown="cmDescSaveSelection();event.preventDefault();cmDescSetHilite(\''+c+'\')" style="background:'+c+'"></button>';
        }).join('')+
        '<button type="button" class="cm-tb-sw cm-tb-hl cm-tb-none" title="형광펜 지우기" onmousedown="cmDescSaveSelection();event.preventDefault();cmDescSetHilite(\'transparent\')">✕</button>'+
      '</div>'+
      '<div class="cm-reg-toolbar cm-tb-sub" id="cmDescRowFont" hidden>'+
        '<button type="button" class="cm-tb-back" onmousedown="event.preventDefault()" onclick="cmDescView(\'main\')" aria-label="뒤로">‹</button>'+
        CM_DESC_FONTS.map(function(f){
          return '<button type="button" onmousedown="cmDescSaveSelection();event.preventDefault();cmDescSetFont(&quot;'+f[1]+'&quot;)" style="font-family:'+f[1]+'">'+f[0]+'</button>';
        }).join('')+
      '</div>'+
      '<div class="cm-reg-toolbar cm-tb-sub" id="cmDescRowSize" hidden>'+
        '<button type="button" class="cm-tb-back" onmousedown="event.preventDefault()" onclick="cmDescView(\'main\')" aria-label="뒤로">‹</button>'+
        CM_DESC_SIZES.map(function(s){
          return '<button type="button" onmousedown="cmDescSaveSelection();event.preventDefault();cmDescSetSize('+s[1]+')" style="font-size:'+Math.min(s[1],20)+'px">'+s[0]+'</button>';
        }).join('')+
      '</div>'+
      '<input type="file" id="cmRegDescFileInput" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp" multiple class="hidden" onchange="cmDescOnFile(event)">'+
      '<div class="cm-reg-editor" id="cmRegDescEditor" contenteditable="true" data-ph="그림체, 작업 범위(두상/흉상/반신), 추가금 안내 등을 자유롭게 적어주세요." oninput="cmCheckReg()">'+(cmReg.descHtml||(cmReg.desc?esc(cmReg.desc).replace(/\n/g,"<br>"):''))+'</div>'+
      '<div class="cm-reg-label">작업물 사용 권한 <span class="cm-reg-sub">선택</span></div>'+
      '<textarea class="cm-reg-textarea" id="cmRegUsage" placeholder="예: 비상업적 굿즈/SNS 게시 가능, 출처 표기 부탁" oninput="cmCheckReg()">'+esc(cmReg.usage)+'</textarea>'+
      '<div class="cm-reg-label">거래 안내 / 정책 <span class="cm-reg-sub">선택</span></div>'+
      '<textarea class="cm-reg-textarea" id="cmRegPolicy" placeholder="예: 작업 시작 후 단순 변심 환불 불가, 저작권은 작가 귀속 등" oninput="cmCheckReg()">'+esc(cmReg.policy)+'</textarea>'+
      '<div class="cm-reg-label">🎁 리뷰 이벤트 <span class="cm-reg-sub">후기를 남기면 혜택을 주는 이벤트 (선택)</span></div>'+
      '<div class="cm-reg-toggle"><div class="cm-reg-tg'+(cmReg.reviewEventOn?' sel':'')+'" id="cmTgRevOn" onclick="cmSetReviewEvent(true)">🎁 진행</div>'+
        '<div class="cm-reg-tg'+(!cmReg.reviewEventOn?' sel':'')+'" id="cmTgRevOff" onclick="cmSetReviewEvent(false)">안 함</div></div>'+
      '<div id="cmRegRevWrap" style="'+(cmReg.reviewEventOn?'':'display:none')+'">'+
        '<div class="cm-reg-label">혜택 내용 <span class="cm-reg-req">*</span> <span class="cm-reg-sub">후기 작성자에게 줄 혜택</span></div>'+
        '<textarea class="cm-reg-textarea" id="cmRegRevBenefit" placeholder="예: 후기 남겨주시면 다음 커미션 10% 할인 / 추가 컷 1장 무료" oninput="cmCheckReg()">'+esc(cmReg.reviewEventBenefit)+'</textarea>'+
        '<div class="cm-reg-note">이 혜택은 작가님이 직접 제공하며, commi는 중개하지 않아요.</div>'+
      '</div>'+
      '<div class="cm-reg-label">신청서 커스텀 항목 <span class="cm-reg-sub">참고 이미지·추가 요청사항은 신청서에 기본으로 포함돼요</span></div>'+
      '<div class="cm-reg-formlist" id="cmRegFormList">'+cmFormListHTML()+'</div>'+
      '<div class="cm-reg-formadd">'+
        '<input class="cm-reg-input" id="cmFormFieldLabel" placeholder="예: 원하는 배경색">'+
        '<select class="cm-reg-input" id="cmFormFieldType"><option value="text">텍스트 입력</option><option value="checkbox">체크박스(예/아니오)</option></select>'+
        '<label class="cm-reg-formreq"><input type="checkbox" id="cmFormFieldRequired"> 필수 항목</label>'+
        '<button type="button" class="cm-reg-formaddbtn" onclick="cmAddFormField()">+ 항목 추가</button>'+
      '</div>'+
    '</div>'+
    '<div class="cm-reg-bottom"><button class="cm-prev" onclick="cmPreviewReg()">미리보기</button>'+
      '<button class="cm-reg-btn is-off" id="cmRegSubmit" aria-disabled="true" onclick="cmSubmitReg()">'+(editing?'수정 완료':'등록하기')+'</button></div>'+
  '</div>';
  window.scrollTo({top:0,behavior:"smooth"});
  cmCheckReg();
}
function cmFormListHTML(){
  if(cmReg.form.length===0)return '<div class="cm-reg-sub">아직 추가한 항목이 없어요.</div>';
  return cmReg.form.map(function(f,i){
    return '<div class="cm-reg-formitem"><span>['+(f.type==='checkbox'?'체크박스':'텍스트')+'] '+esc(f.label)+(f.required?' <b>(필수)</b>':'')+'</span>'+
      '<button type="button" onclick="cmRemoveFormField('+i+')">삭제</button></div>';
  }).join('');
}
function cmAddFormField(){
  var label=document.getElementById('cmFormFieldLabel').value.trim();
  if(!label){toast('항목 이름을 입력해주세요');return;}
  var type=document.getElementById('cmFormFieldType').value;
  var required=document.getElementById('cmFormFieldRequired').checked;
  cmReg.form.push({id:Date.now()+'-'+Math.random().toString(36).slice(2,8),type:type,label:label,required:required});
  document.getElementById('cmFormFieldLabel').value='';
  document.getElementById('cmFormFieldRequired').checked=false;
  document.getElementById('cmRegFormList').innerHTML=cmFormListHTML();
}
function cmRemoveFormField(i){
  cmReg.form.splice(i,1);
  document.getElementById('cmRegFormList').innerHTML=cmFormListHTML();
}
function cmPickSampleImg(){
  if(cmReg.images.length>=10){toast('최대 10장까지 올릴 수 있어요','⚠');return;}
  document.getElementById('cmRegFileInput').click();
}
function cmOnRegFileChange(e){
  cmUploadMany(e,cmUploadSampleImg,function(){return cmReg.images.length>=10;});
}
async function cmUploadSampleImg(file){
  if(!AUTH.user){toast('로그인 후 이용할 수 있어요','🔒');return;}
  if(ALLOWED_IMAGE_TYPES.indexOf(file.type)===-1){toast('이미지 파일만 올릴 수 있어요');return;}
  if(file.size>MAX_IMAGE_BYTES){toast('40MB 이하 이미지만 올릴 수 있어요');return;}
  if(cmReg.images.length>=10){toast('최대 10장까지 올릴 수 있어요','⚠');return;}
  var uploadBlob=file,ext=(file.name.match(/\.([^.]+)$/)||[,'png'])[1];
  if(file.type!=='image/gif'){
    toast('이미지 압축 중...');
    try{
      var compressed=await compressImage(file);
      uploadBlob=compressed.blob;ext=compressed.ext;
    }catch(err){console.error('이미지 압축 실패, 원본으로 업로드:',err);}
  }
  toast('이미지 업로드 중...');
  var regUrl=await uploadToStorage(uploadBlob,'commission');
  if(!regUrl)return;
  cmReg.images.push(regUrl);
  cmRenderRegImgs();
  cmCheckReg();
  toast('이미지를 넣었어요');
}
function cmRenderRegImgs(){
  var wrap=document.getElementById('cmRegImgs');
  var addbtn=wrap.querySelector('.cm-reg-addimg');
  wrap.querySelectorAll('.cm-reg-img').forEach(function(x){x.remove()});
  cmReg.images.forEach(function(url,i){
    var img=document.createElement('div');
    img.className='cm-reg-img';
    img.style.backgroundImage="url('"+url.replace(/'/g,"\\'")+"')";
    img.style.backgroundSize='cover';img.style.backgroundPosition='center';
    img.innerHTML='<div class="cm-del" onclick="cmDelSampleImg('+i+')">×</div>';
    wrap.insertBefore(img,addbtn);
  });
  document.getElementById('cmRegImgCnt').textContent=cmReg.images.length+'/10';
}
function cmDelSampleImg(i){
  cmReg.images.splice(i,1);
  cmRenderRegImgs();
  cmCheckReg();
}
/* ---- 커미션 설명란 서식 툴바 ----
   ⚠️ 글꼴 목록은 글쓰기(body-html.js의 edFmtFont)와 **같은 목록을 쓴다.** 한쪽만 늘리면
      "글쓰기에는 있는 글꼴이 커미션엔 없다"가 되므로 바꿀 때 두 곳을 같이 볼 것. */
var CM_DESC_FONTS=[
  ["기본","inherit"],
  ["나눔고딕","'Nanum Gothic', sans-serif"],
  ["나눔명조","'Nanum Myeongjo', serif"],
  ["나눔손글씨","'Nanum Pen Script', cursive"],
  ["고운돋움","'Gowun Dodum', sans-serif"],
  ["주아","'Jua', sans-serif"],
  ["도현","'Do Hyeon', sans-serif"],
  ["검은고딕","'Black Han Sans', sans-serif"]
];
var CM_DESC_SIZES=[["아주 작게",13],["작게",15],["보통",17],["크게",20],["더 크게",24],["제목만큼",30]];
var CM_DESC_COLORS=["#3a2c36","#d1608f","#bf400c","#c9a227","#3f8f4f","#2f6fb0","#7a5cc4","#8a8a8a"];
var CM_DESC_HILITES=["#fbe9c8","#ffd9e4","#d9f0dc","#d9e8fb","#ece0fa"];
function cmDescFmt(e,cmd){
  e.preventDefault();
  document.getElementById('cmRegDescEditor').focus();
  document.execCommand(cmd,false,null);
  cmCheckReg();
}
var cmDescSavedRange=null;
function cmDescSaveSelection(){
  var sel=window.getSelection();
  if(sel&&sel.rangeCount>0){
    var r=sel.getRangeAt(0);
    var el=document.getElementById('cmRegDescEditor');
    if(el&&el.contains(r.commonAncestorContainer))cmDescSavedRange=r.cloneRange();
  }
}
function cmDescRestoreSelection(){
  var el=document.getElementById('cmRegDescEditor');
  el.focus();
  var sel=window.getSelection();
  sel.removeAllRanges();
  if(cmDescSavedRange)sel.addRange(cmDescSavedRange);
  else{var r=document.createRange();r.selectNodeContents(el);r.collapse(false);sel.addRange(r);}
}
/* 선택 영역(또는 커서 자리)에 style을 입힌다 — 글쓰기의 edApplyInline과 같은 방식.
   ⚠️ **execCommand를 쓰지 않는다.** 폐기 예정인 데다 `<font size=7>` 같은 옛 태그를 만들어
      매번 span으로 바꿔 심어야 했고(예전 cmDescSetSize가 그랬다), 창에 포커스가 없으면
      조용히 아무 일도 하지 않는다. Range API로 직접 감싸면 결과가 예측 가능하다.
   ⚠️ 아무것도 선택하지 않았으면 빈 span에 커서를 둔다 — '미리 골라 두고 이어서 입력'이 된다. */
function cmDescApplyInline(setStyle){
  var ed=document.getElementById('cmRegDescEditor');if(!ed)return;
  cmDescRestoreSelection();
  var sel=window.getSelection();if(!sel||!sel.rangeCount)return;
  var r=sel.getRangeAt(0);
  if(!ed.contains(r.commonAncestorContainer))return;
  var span=document.createElement('span');
  setStyle(span);
  if(sel.isCollapsed){
    span.appendChild(document.createTextNode("​")); // 폭 없는 글자 — 커서가 머무를 자리
    r.insertNode(span);
    var r2=document.createRange();r2.setStart(span.firstChild,1);r2.collapse(true);
    sel.removeAllRanges();sel.addRange(r2);
  }else{
    try{
      r.surroundContents(span);          // 한 요소 안의 선택이면 이걸로 깔끔하게
    }catch(e){
      span.appendChild(r.extractContents()); // 여러 요소에 걸쳐 있으면 떼어내 감싼다
      r.insertNode(span);
    }
    var r3=document.createRange();r3.selectNodeContents(span);
    sel.removeAllRanges();sel.addRange(r3);
  }
  cmDescSaveSelection();
  cmCheckReg();
}
function cmDescSetSize(px){ cmDescApplyInline(function(el){el.style.fontSize=px+'px';}); }
function cmDescSetColor(c){ cmDescApplyInline(function(el){el.style.color=c;}); }
/* ⚠️ `background` 단축 속성을 쓰면 **저장할 때 통째로 지워진다** — DOMPurify가 style 안의
      CSS를 자체 허용목록으로 거르는데 단축형은 거기 없다(실측: 형광펜만 사라졌다).
      `background-color`로 적어야 살아남는다. 글쓰기 쪽 hiliteColor도 같은 속성을 만든다. */
function cmDescSetHilite(c){ cmDescApplyInline(function(el){el.style.backgroundColor=c;}); }
function cmDescSetFont(f){
  if(typeof edEnsureWebFonts==='function')edEnsureWebFonts(); // 쓸 때만 웹폰트를 받아온다
  cmDescApplyInline(function(el){el.style.fontFamily=f;});
}
/* 도구 줄 전환(기본 ↔ 글꼴 ↔ 크기 ↔ 색). 창을 띄우지 않고 같은 자리를 갈아 끼운다 —
   모바일에서 창이 뜨면 자판이 내려가 커서 자리를 잃는다. */
function cmDescView(which){
  ['Main','Font','Size','Color'].forEach(function(k){
    var el=document.getElementById('cmDescRow'+k);
    if(el)el.hidden=(k.toLowerCase()!==which);
  });
}
function cmDescPickImage(e){
  e.preventDefault();
  cmDescSaveSelection();
  document.getElementById('cmRegDescFileInput').click();
}
function cmDescOnFile(e){
  // 설명 본문 삽입은 장수 제한이 없다 — 고른 순서대로 커서 위치에 차례로 들어간다
  cmUploadMany(e,cmUploadDescImg,null);
}
async function cmUploadDescImg(file){
  if(!AUTH.user){toast('로그인 후 이용할 수 있어요','🔒');return;}
  if(ALLOWED_IMAGE_TYPES.indexOf(file.type)===-1){toast('이미지 파일만 올릴 수 있어요');return;}
  if(file.size>MAX_IMAGE_BYTES){toast('40MB 이하 이미지만 올릴 수 있어요');return;}
  var uploadBlob=file,ext=(file.name.match(/\.([^.]+)$/)||[,'png'])[1];
  if(file.type!=='image/gif'){
    toast('이미지 압축 중...');
    try{
      var compressed=await compressImage(file);
      uploadBlob=compressed.blob;ext=compressed.ext;
    }catch(err){console.error('이미지 압축 실패, 원본으로 업로드:',err);}
  }
  toast('이미지 업로드 중...');
  var descUrl=await uploadToStorage(uploadBlob,'cm-desc');
  if(!descUrl)return;
  cmDescRestoreSelection();
  document.execCommand('insertHTML',false,'<img src="'+esc(descUrl)+'"><br>');
  cmCheckReg();
  toast('이미지를 넣었어요');
}
function cmOnTagKey(e){
  if(e.key==='Enter'){
    e.preventDefault();
    var inp=document.getElementById('cmRegTagInput');
    var v=inp.value.trim().replace(/,/g,'');
    if(!v)return;
    if(cmReg.tags.length>=5){toast('태그는 최대 5개까지 입력할 수 있어요','⚠');return;}
    if(cmReg.tags.indexOf(v)>=0){inp.value='';return;}
    cmReg.tags.push(v);
    inp.value='';
    cmRenderTagList();
    cmCheckReg();
  }
}
function cmRemoveTag(t){
  cmReg.tags=cmReg.tags.filter(function(x){return x!==t});
  cmRenderTagList();
  cmCheckReg();
}
function cmRenderTagList(){
  document.getElementById('cmRegTagList').innerHTML=cmReg.tags.map(function(t){
    return '<div class="cm-reg-tagchip">#'+esc(t)+'<span class="cm-x" onclick="cmRemoveTag(\''+cmQ(t)+'\')">×</span></div>';
  }).join('');
  var hint=document.getElementById('cmRegTagHint');
  hint.textContent=cmReg.tags.length+'/5개';
  hint.classList.toggle('full',cmReg.tags.length>=5);
}
function cmSetStatus(v){
  cmReg.status=v;
  document.getElementById('cmTgOpen').classList.toggle('sel',v==='open');
  document.getElementById('cmTgClose').classList.toggle('sel',v==='close');
}
/* 성인 표시를 켜려면 본인도 연령 확인을 마쳐야 한다.
   ⚠️ 진짜 강제는 서버(RLS)가 한다 — 여기서 막는 건 저장을 눌렀다가 실패하는 대신
      그 자리에서 인증 창을 띄워 주기 위한 것이다. */
function cmSetAdult(on){
  if(on&&!isAdultVerified()){
    if(!AUTH.user){toast('로그인 후 이용할 수 있어요','🔒');openLoginModal();return;}
    toast('성인 커미션은 본인확인 후 등록할 수 있어요','🔞');
    openAdultGate();
    return;
  }
  cmReg.isAdult=!!on;
  document.getElementById('cmTgAdultOn').classList.toggle('sel',cmReg.isAdult);
  document.getElementById('cmTgAdultOff').classList.toggle('sel',!cmReg.isAdult);
  var note=document.getElementById('cmRegAdultNote');
  if(note)note.style.display=cmReg.isAdult?'':'none';
  cmCheckReg();
}
function cmSetReviewEvent(on){
  cmReg.reviewEventOn=!!on;
  document.getElementById('cmTgRevOn').classList.toggle('sel',cmReg.reviewEventOn);
  document.getElementById('cmTgRevOff').classList.toggle('sel',!cmReg.reviewEventOn);
  var wrap=document.getElementById('cmRegRevWrap');
  if(wrap)wrap.style.display=cmReg.reviewEventOn?'':'none';
  cmCheckReg();
}
/* 아직 안 채운 필수 항목들. 버튼 활성 판정·안내 문구·빈 칸 표시·스크롤이 전부 이 목록 하나를
   쓴다 — 여러 곳이 따로 살면 안내와 실제 조건이 어긋난다. el은 화면에서 그 칸을 찾는 id. */
/* 가격은 0 이상의 정수만 받는다 — number 입력은 음수·소수·지수까지 허용해서
   (실측: -5000·1.5·999999999999 통과) "-5,000원~" 같은 값이 저장됐다.
   반환: 올바르면 정수 문자열, 아니면 null. */
function cmNormalizePrice(v){
  var s=String(v==null?'':v).trim();
  if(!/^\d+$/.test(s))return null;      // 숫자만(음수·소수·문자 배제)
  var n=parseInt(s,10);
  if(!(n>=0)||n>100000000)return null;  // 0 ~ 1억 원
  return String(n);
}
function cmRegMissing(){
  var m=[];
  if(!cmReg.images.length)m.push({label:'샘플 이미지',el:'cmRegImgs'});
  if(!cmReg.title.trim())m.push({label:'제목',el:'cmRegTitle'});
  if(cmNormalizePrice(cmReg.price)==null)m.push({label:'가격',el:'cmRegPrice'});
  if(!cmReg.desc.trim())m.push({label:'설명',el:'cmRegDescEditor'});
  if(cmReg.reviewEventOn&&!cmReg.reviewEventBenefit.trim())m.push({label:'리뷰 이벤트 혜택',el:'cmRegRevBenefit'});
  return m;
}
/* 빈 필수 칸을 눈에 보이게 — 붉은 테두리를 붙이고, 채워지면 다음 cmCheckReg 때 걷힌다 */
var CM_REG_REQ_ELS=['cmRegImgs','cmRegTitle','cmRegPrice','cmRegDescEditor','cmRegRevBenefit'];
function cmRegMarkMissing(list){
  var missIds={};list.forEach(function(x){missIds[x.el]=1;});
  CM_REG_REQ_ELS.forEach(function(id){
    var el=document.getElementById(id);
    if(el)el.classList.toggle('cm-reg-miss',!!missIds[id]);
  });
}
function cmCheckReg(){
  cmSyncReg();
  /* ⚠️ disabled 대신 .is-off 클래스 — disabled면 클릭 이벤트 자체가 안 와서,
     눌러도 왜 안 되는지 알려줄 방법이 없다(2026-08-15 사용자 요청). 모양은 잿빛 그대로,
     실제 차단은 cmSubmitReg 첫머리의 빈 항목 검사가 한다. */
  var btn=document.getElementById('cmRegSubmit');
  var missing=cmRegMissing();
  btn.classList.toggle('is-off',missing.length>0);
  btn.setAttribute('aria-disabled',missing.length?'true':'false');
  btn.disabled=false; // 예전 코드가 남긴 disabled가 있으면 해제
  // 이미 붉게 표시된 칸이 채워졌으면 표시를 걷는다.
  // ⚠️ 표시를 '새로 붙이는' 건 등록을 눌렀을 때만(cmSubmitReg) — 입력하는 족족 아직
  //    안 간 칸까지 붉어지면 혼내는 폼이 된다. 여기서는 지우기만.
  if(document.querySelector('.cm-reg-miss'))cmRegMarkMissing(missing.filter(function(x){
    return document.getElementById(x.el)&&document.getElementById(x.el).classList.contains('cm-reg-miss');
  }));
}
function cmPreviewReg(){
  cmSyncReg();
  var title=cmReg.title.trim()||'제목 없음';
  var price=(cmReg.price?Number(cmReg.price).toLocaleString():'0')+'원~';
  var period=cmReg.period.trim()||'작가 설정';
  var slots=cmReg.slots.trim();
  var desc=cmReg.desc.trim()||'(설명 없음)';
  var usage=cmReg.usage.trim();
  var policy=cmReg.policy.trim();
  cmPreviewObj={artist:'나',channel:'내 커미션',title:title,price:price,hidePrice:true,period:period,slots:slots,
    desc:desc,descHtml:cmReg.descHtml,usage:usage,policy:policy,tags:cmReg.tags.slice(),images:cmReg.images.slice(),likes:0,
    reviewEventOn:cmReg.reviewEventOn,reviewEventBenefit:cmReg.reviewEventBenefit.trim(),isAdult:!!cmReg.isAdult};
  cmDetailCtx={from:'register',idx:0};
  document.getElementById('main').innerHTML=cmDetailHTML(cmPreviewObj,0);
  window.scrollTo({top:0,behavior:'smooth'});
}
var cmRegSubmitting=false; // 재진입 잠금 — 응답을 기다리는 동안 또 누르면 커미션이 두 개 생긴다
async function cmSubmitReg(){
  cmSyncReg();
  // 빈 필수 항목이 있으면: ①무엇인지 말하고 ②그 칸들을 붉게 표시하고 ③첫 칸으로 데려간다
  // — 조용한 무반응은 "버튼이 고장났다"로 읽힌다
  var missing=cmRegMissing();
  if(missing.length){
    var names=missing.map(function(x){return x.label;});
    toast(missing.length===1
      ? names[0]+' 항목이 아직 비어 있어요'
      : '아직 '+missing.length+'곳이 비어 있어요 — '+names.join(', '),'✍️');
    cmRegMarkMissing(missing);
    var first=document.getElementById(missing[0].el);
    if(first)first.scrollIntoView({behavior:'smooth',block:'center'});
    return;
  }
  if(!AUTH.user){toast('로그인 후 이용할 수 있어요','🔒');return;}
  if(cmRegSubmitting){toast('저장 중이에요, 잠시만요');return;} // 조용히 무시하면 "안 눌린다"가 된다
  cmRegSubmitting=true;
  // 누르자마자 버튼으로 반응을 보여준다 — 서버 응답까지 1~2초간 아무 일도 없으면
  // "씹혔다"고 느껴 다시 누르게 된다(2026-08-14 사용자 신고의 한 축)
  var _btn=document.getElementById('cmRegSubmit');
  var _label=_btn?_btn.textContent:'';
  if(_btn){_btn.disabled=true;_btn.textContent=cmReg.editingId?'수정 중…':'등록 중…';}
  function _fail(){cmRegSubmitting=false;if(_btn){_btn.disabled=false;_btn.textContent=_label;}}
  var row={
    title:cmReg.title.trim(),
    price:cmNormalizePrice(cmReg.price),  // 검증을 통과한 정수 문자열로 저장(음수·소수 차단)
    tags:cmReg.tags.slice(),
    status:cmReg.status,
    period:cmReg.period.trim(),
    slots:cmReg.slots,
    description:cmReg.desc.trim(),
    description_html:cmReg.descHtml||null,
    usage_rights:cmReg.usage.trim(),
    trade_policy:cmReg.policy.trim(),
    application_form:cmReg.form,
    review_event_on:!!cmReg.reviewEventOn,
    review_event_benefit:cmReg.reviewEventOn?(cmReg.reviewEventBenefit.trim()||null):null,
    is_adult:!!cmReg.isAdult
  };
  var commissionId;
  var imgRows=cmReg.images.map(function(url,i){return{commission_id:null,url:url,sort:i};});
  try{
    if(cmReg.editingId){
      commissionId=cmReg.editingId;
      imgRows.forEach(function(r){r.commission_id=commissionId;});
      /* ⚠️ 순서 주의(2026-08-15 점검): 이미지를 지우기 **전에 새 이미지부터 넣는다.**
         예전엔 update → 전체 delete → insert 였는데, 마지막 insert가 실패하면
         옛 이미지는 이미 지워졌고 새 이미지는 안 들어와 **커미션에서 사진이 통째로 사라졌다**
         (그런데도 "수정되었어요" 토스트). 이제 새 이미지 insert가 성공한 뒤에만 옛것을 지운다. */
      var newImgs=imgRows.length?await window.supabase.from('commission_images').insert(imgRows).select('id'):{data:[]};
      if(newImgs.error){toast('이미지 저장에 실패했어요. 다시 시도해주세요');_fail();return;}
      var keepIds=(newImgs.data||[]).map(function(x){return x.id;});
      var delOld=keepIds.length
        ? await window.supabase.from('commission_images').delete().eq('commission_id',commissionId).not('id','in','('+keepIds.join(',')+')')
        : await window.supabase.from('commission_images').delete().eq('commission_id',commissionId);
      if(delOld.error)console.error(delOld.error); // 옛것이 남는 건 사진이 사라지는 것보다 훨씬 낫다
      var upd=await window.supabase.from('commissions').update(row).eq('id',commissionId).select().single();
      if(upd.error){toast('수정 실패: '+upd.error.message);_fail();return;}
    }else{
      row.author_id=AUTH.user.id;
      var saved=await window.supabase.from('commissions').insert(row).select().single();
      if(saved.error){toast('등록 실패: '+saved.error.message);_fail();return;}
      commissionId=saved.data.id;
      if(imgRows.length){
        imgRows.forEach(function(r){r.commission_id=commissionId;});
        var savedImgs=await window.supabase.from('commission_images').insert(imgRows);
        // ⚠️ 이미지 실패를 조용히 넘기면(예전 동작) 커미션이 사진 없이 등록되는데도 "등록 성공"이 뜬다.
        //    커미션은 이미 만들어졌으므로 되돌리지 않되(다시 등록하면 중복), 사실대로 알린다.
        if(savedImgs.error){toast('커미션은 등록됐지만 사진 저장에 실패했어요. 수정에서 다시 올려주세요','⚠️');}
      }
    }
  }catch(e){toast('저장 중 오류가 났어요. 다시 시도해주세요');_fail();return;}
  cmRegSubmitting=false; // 성공 — 화면이 곧 내 커미션 목록으로 바뀌므로 버튼은 복구할 필요 없음
  toast(cmReg.editingId?'커미션이 수정되었어요!':'커미션이 등록되었어요!',cmReg.editingId?'✏️':'🎨');
  cmDataLoaded=false;
  cmOpenMy();
}
function cmMyListHTML(){
  if(cmMyList.length===0)return '<div class="cm-my-empty">아직 등록한 커미션이 없어요.<br>+ 새 커미션 버튼으로 등록해보세요!</div>';
  return cmMyList.map(function(c){
    var st=c.status==='open'?'<span class="cm-my-badge open">🟢 접수중</span>':'<span class="cm-my-badge close">⛔ 마감</span>';
    var thumbStyle=c.images[0]?'':'background:var(--brand-soft)';
    var thumbImg=c.images[0]?thumbImgHTML(c.images[0],'class="thumb-fill"'):'';
    var editBtn=c.adLocked
      ?'<span class="cm-my-edit" style="opacity:.55;cursor:default" title="광고를 집행 중인 커미션은 수정할 수 없어요">🔒 수정 불가</span>'
      :'<button class="cm-my-edit" onclick="cmOpenRegister('+c.id+')">수정</button>';
    return '<div class="cm-my-item"><div class="cm-my-thumb" style="'+thumbStyle+'">'+thumbImg+'</div>'+
      '<div class="cm-my-info"><div class="cm-my-title">'+esc(c.title)+'</div>'+
        '<div class="cm-my-price">'+Number(c.price).toLocaleString()+'원~</div>'+st+'</div>'+
      '<div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0">'+cmBumpBtnHTML(c)+editBtn+
        '<button class="cm-my-edit" onclick="openCreateAdForCommission('+c.id+')">📢 광고</button>'+
        '<button class="cm-my-edit cm-my-del" onclick="cmDeleteCommission('+c.id+')">🗑 삭제</button></div></div>';
  }).join('');
}
var cmMyBookmarks=[];
var cmMyApplications=[];
// 커미션 삭제(작가 본인만). 확인창 → DB 삭제(RLS가 서버에서도 본인만 허용) → 목록/상세에서 제거.
// 연결 데이터: commission_images·worksamples·applications·user_ads는 FK on delete cascade로 자동 삭제,
// 후기(posts.commission_id)·알림·메시지는 on delete set null로 남김(작가 평판 보존 — 2단계에서 스토리지 파일도 정리 예정).
/* ===== 액션 시트(더보기 메뉴) =====
   아래에서 올라오는 목록. 게시판 이동 시트(#sheet)와 별개로 두어 서로 덮어쓰지 않게 한다. */
function openActionSheet(title,items){
  var el=document.getElementById("actionSheet"),sc=document.getElementById("actionScrim");
  if(!el||!sc)return;
  document.getElementById("actionSheetTitle").textContent=title||"";
  document.getElementById("actionSheetBody").innerHTML=items.map(function(it){
    return '<button type="button" class="as-item'+(it.danger?' danger':'')+'"'+
      (it.disabled?' disabled':' onclick="'+it.onclick+'"')+'>'+
      '<span class="as-ic">'+it.icon+'</span><span class="as-label">'+esc(it.label)+
      (it.desc?'<span class="as-desc">'+esc(it.desc)+'</span>':'')+'</span></button>';
  }).join("");
  el.classList.add("open");sc.classList.add("open");document.body.style.overflow="hidden";
}
function closeActionSheet(){
  var el=document.getElementById("actionSheet"),sc=document.getElementById("actionScrim");
  if(el)el.classList.remove("open");
  if(sc)sc.classList.remove("open");
  document.body.style.overflow="";
}

/* ── 커미션 상세의 '더보기(점 3개)' ── */
// 커미션 신고는 reports.commission_id 컬럼이 있어야 한다. 아직 없는 환경에서
// 눌렀다가 실패하지 않도록, 한 번만 확인해서 메뉴에 넣을지 정한다.
var _cmReportSupported=null;
async function cmCanReportCommission(){
  if(_cmReportSupported!==null)return _cmReportSupported;
  try{
    var r=await window.supabase.from("reports").select("commission_id").limit(1);
    _cmReportSupported=!r.error;
  }catch(e){_cmReportSupported=false;}
  return _cmReportSupported;
}
async function cmOpenMoreMenu(id){
  if(id==null)return;
  var d=cmData.find(function(c){return c.id===id;})||cmDetail||{};
  var isOwner=!!(AUTH.user&&d.authorId&&AUTH.user.id===d.authorId);
  var adLocked=!!AD_LOCKED_COMMISSION_IDS[id];
  var items=[];

  if(isOwner&&CM_BUMP_READY&&d.status==='open'){
    var bumpLeft=cmBumpLeftMs(d);
    items.push({
      label:bumpLeft>0?(cmFmtLeft(bumpLeft)+" 후에 올릴 수 있어요"):"맨 위로 끌올",
      desc:bumpLeft>0?"끌올은 24시간에 한 번만 할 수 있어요":"홈·신규 목록에서 맨 위로 올라가요",
      icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>',
      onclick:"closeActionSheet();cmBumpCommission("+id+")",
      disabled:bumpLeft>0
    });
  }
  if(isOwner){
    items.push({
      label:adLocked?"수정할 수 없어요":"커미션 수정",
      desc:adLocked?"광고를 집행 중인 커미션은 수정할 수 없어요":"",
      icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
      onclick:"closeActionSheet();cmOpenRegister("+id+")",
      disabled:adLocked
    });
  }
  items.push({
    label:"링크 복사",
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    onclick:"closeActionSheet();cmShare("+id+")"
  });
  if(d.authorId){
    items.push({
      label:"작가 프로필 보기",
      icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
      onclick:"closeActionSheet();openUserProfile('"+cmQ(d.authorId)+"')"
    });
  }
  if(!isOwner&&AUTH.user&&await cmCanReportCommission()){
    items.push({
      label:"신고",
      icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
      onclick:"closeActionSheet();reportCommission("+id+")"
    });
  }
  if(isOwner){
    items.push({
      label:"커미션 삭제",
      icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>',
      onclick:"closeActionSheet();cmDeleteCommission("+id+")",
      danger:true
    });
  }
  openActionSheet(d.title||"커미션",items);
}
function reportCommission(id){
  if(!AUTH.user){toast("로그인이 필요해요");return;}
  reportingCommissionId=id;
  document.getElementById("reportReasonInput").value="";
  _resetReportForm();
  document.getElementById("reportModal").classList.add("open");
}

async function cmDeleteCommission(id){
  if(id==null||!window.supabase)return;
  if(!(await confirmDialog("이 커미션을 삭제할까요? 삭제하면 되돌릴 수 없어요.")))return;
  // DB에서 커미션 삭제(RLS로 본인만). cascade로 이미지·작업사례·신청·광고 '기록'이 자동 삭제됨.
  // 삭제 직전에 DB 트리거가 보관본(admin_commission_deletions)에 사본을 남긴다.
  var res=await window.supabase.from("commissions").delete({count:"exact"}).eq("id",id);
  if(!res.error&&res.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(res.error){toast("삭제 실패: "+res.error.message);return;}
  // ⚠️ **저장소 파일은 일부러 지우지 않는다(2026-08-08).**
  //    예전에는 여기서 R2 파일까지 지웠는데, 그러면 보관본에 주소만 남고 그림은 사라져
  //    분쟁이 생겼을 때 "무엇을 걸고 판 커미션이었는지"를 확인할 수 없다.
  //    커미션은 돈이 오가는 거래라 근거가 특히 중요하다 → 파일을 남긴다.
  //    (관리자 삭제 경로는 원래부터 파일을 남기고 있었다. 이제 본인 삭제도 같아졌다.)
  cmData=cmData.filter(function(c){return c.id!==id;});
  if(Array.isArray(cmMyList))cmMyList=cmMyList.filter(function(c){return c.id!==id;});
  if(cmWsCache)delete cmWsCache[id];
  toast("커미션을 삭제했어요","🗑");
  // ⚠️ 예전엔 상단바(.cm-d-top)의 존재로 상세 화면인지 판단했는데, 그 바를 헤더로 합치면서
  //    사라졌다(2026-08-15). 이제 화면 스택으로 판단한다 — 사라질 수 있는 마크업 대신 상태를 본다.
  if(document.body.classList.contains('cm-detail')||
     (typeof screenStack!=="undefined"&&screenStack.length&&screenStack[screenStack.length-1].key==="cmDetail")){
    screenBack();
  }else if(document.getElementById('cmMyList')){          // 내 커미션 목록이면 그 자리에서 갱신
    document.getElementById('cmMyList').innerHTML=cmMyListHTML();
  }else if(document.getElementById('cmGrid')){            // 전체 커미션 목록이면 그리드 갱신
    document.getElementById('cmGrid').innerHTML=cmGridHTML();
  }
}
async function cmOpenMy(tab){
  if(!AUTH.user){
    toast('로그인 후 내 커미션을 볼 수 있어요','🔒');
    loginWithGoogle();
    return;
  }
  enterScreen("cmMy",openCommissionList);
  var activeTab=(tab==='bookmarks')?'bookmarks':(tab==='applications')?'applications':'mine';
  var containerClass=activeTab==='bookmarks'?'cm-grid':'cm-my-list';
  document.getElementById("main").innerHTML='<div class="cm-root">'+
    '<div class="cm-sub-top"><svg onclick="screenBack()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg><b>내 커미션</b>'+
      (activeTab==='mine'?('<div class="cm-sub-actions">'+
        '<button class="cm-write-btn ghost" onclick="cmOpenWsCommissionPicker(cmOpenMy)">🎨 최신 작업물</button>'+
        '<button class="cm-write-btn" onclick="cmOpenRegister()">+ 새 커미션</button>'+
      '</div>'):'')+
    '</div>'+
    '<div class="cm-tabs" style="padding:14px 18px 0">'+
      '<div class="cm-tab'+(activeTab==='mine'?' on':'')+'" onclick="cmOpenMy(\'mine\')">내가 등록한 커미션</div>'+
      '<div class="cm-tab'+(activeTab==='applications'?' on':'')+'" onclick="cmOpenMy(\'applications\')">📝 신청 관리</div>'+
      '<div class="cm-tab'+(activeTab==='bookmarks'?' on':'')+'" onclick="cmOpenMy(\'bookmarks\')">🔖 보관함</div>'+
    '</div>'+
    (activeTab==='mine'?('<div class="cm-my-bulk"><button class="cm-open-all" onclick="cmBulkStatus(\'open\')">🟢 전체 열기</button>'+
      '<button class="cm-close-all" onclick="cmBulkStatus(\'close\')">⛔ 전체 마감</button></div>'):'')+
    '<div class="'+containerClass+'" id="cmMyList"><div class="cm-my-empty">불러오는 중...</div></div>'+
  '</div>';
  window.scrollTo({top:0,behavior:"smooth"});
  if(activeTab==='mine'){
    var res=await window.supabase.from('commissions').select('*,commission_images(url,sort)').eq('author_id',AUTH.user.id).order('created_at',{ascending:false});
    if(res.error){toast('불러오기 실패: '+res.error.message);return;}
    cmMyList=res.data.map(function(row){
      var imgs=(row.commission_images||[]).slice().sort(function(a,b){return a.sort-b.sort;}).map(function(x){return x.url;});
      return{id:row.id,title:row.title,price:row.price,tags:row.tags||[],status:row.status,period:row.period,
        slots:row.slots,desc:row.description,descHtml:row.description_html||null,usage:row.usage_rights,policy:row.trade_policy,images:imgs,
        reviewEventOn:!!row.review_event_on,reviewEventBenefit:row.review_event_benefit||'',
        form:row.application_form||[],adLocked:!!AD_LOCKED_COMMISSION_IDS[row.id],
        createdAt:row.created_at,bumpedAt:row.bumped_at||row.created_at};
    });
    var listEl=document.getElementById('cmMyList');
    if(listEl)listEl.innerHTML=cmMyListHTML();
  }else if(activeTab==='applications'){
    var ares=await window.supabase.from('commission_applications').select('*,commissions!inner(title,author_id)').eq('commissions.author_id',AUTH.user.id).order('created_at',{ascending:false});
    if(ares.error){toast('불러오기 실패: '+ares.error.message);return;}
    var applicantIds=Array.from(new Set(ares.data.map(function(r){return r.applicant_id;})));
    var aprofRes=applicantIds.length?await window.supabase.from('profiles').select('id,nickname').in('id',applicantIds):{data:[]};
    var aprofById={};(aprofRes.data||[]).forEach(function(p){aprofById[p.id]=p.nickname;});
    cmMyApplications=ares.data.map(function(row){
      return{id:row.id,commissionId:row.commission_id,commissionTitle:row.commissions?row.commissions.title:'',
        applicantId:row.applicant_id,applicantName:aprofById[row.applicant_id]||'알 수 없음',
        images:row.reference_images||[],extraRequest:row.extra_request||'',answers:row.answers||[],
        agreedPolicyText:row.agreed_policy_text||'',status:row.status,createdAt:row.created_at};
    });
    var appEl=document.getElementById('cmMyList');
    if(appEl)appEl.innerHTML=cmMyApplicationsHTML();
  }else{
    if(cmBookmarkIds===null)await cmLoadMyBookmarks();
    var bres=await window.supabase.from('commission_bookmarks').select('commission_id,commissions(*,commission_images(url,sort))').eq('user_id',AUTH.user.id).order('created_at',{ascending:false});
    if(bres.error){toast('불러오기 실패: '+bres.error.message);return;}
    var rows=(bres.data||[]).map(function(b){return b.commissions;}).filter(Boolean);
    var authorIds=Array.from(new Set(rows.map(function(r){return r.author_id;})));
    var profRes=authorIds.length?await window.supabase.from('profiles').select('id,nickname').in('id',authorIds):{data:[]};
    var profById={};(profRes.data||[]).forEach(function(p){profById[p.id]=p.nickname;});
    cmMyBookmarks=rows.map(function(row){
      var imgs=(row.commission_images||[]).slice().sort(function(a,b){return a.sort-b.sort;}).map(function(x){return x.url;});
      return{id:row.id,authorId:row.author_id,artist:profById[row.author_id]||'탈퇴한 사용자',
        title:row.title,price:row.price,status:row.status,tags:row.tags||[],images:imgs,likes:0};
    });
    cmMyBookmarks.forEach(function(bm){
      if(!cmData.some(function(d){return d.id===bm.id;}))cmData.push(bm);
    });
    var bmEl=document.getElementById('cmMyList');
    if(bmEl){
      if(cmMyBookmarks.length===0)bmEl.innerHTML='<div class="cm-my-empty">아직 저장한 커미션이 없어요.<br>마음에 드는 커미션을 북마크해보세요!</div>';
      else bmEl.innerHTML=cmMyBookmarks.map(function(bm){
        var idx=cmData.findIndex(function(d){return d.id===bm.id;});
        return cmCardHTML(bm,idx);
      }).join('');
    }
  }
}
function cmMyApplicationsHTML(){
  if(cmMyApplications.length===0)return '<div class="cm-my-empty">아직 들어온 신청이 없어요.</div>';
  return cmMyApplications.map(function(a){
    var statusLabel=a.status==='pending'?'<span class="cm-my-badge open">⏳ 대기중</span>':a.status==='accepted'?'<span class="cm-my-badge open">✅ 수락됨</span>':'<span class="cm-my-badge close">❌ 거절됨</span>';
    var answersHTML=a.answers.length?a.answers.map(function(ans){
      return '<div class="cm-app-answer"><b>'+esc(ans.label)+'</b> '+(ans.type==='checkbox'?(ans.value?'✅ 예':'❌ 아니오'):esc(ans.value||'(미입력)'))+'</div>';
    }).join(''):'';
    var imagesHTML=a.images.length?('<div class="cm-app-refimgs">'+a.images.map(function(u){return '<img src="'+esc(u)+'" alt="">';}).join('')+'</div>'):'';
    var actionsHTML=a.status==='pending'?('<div class="cm-app-actions"><button class="cm-open-all" onclick="cmDecideApplication('+a.id+',\'accepted\')">✅ 수락</button>'+
      '<button class="cm-close-all" onclick="cmDecideApplication('+a.id+',\'rejected\')">❌ 거절</button></div>'):'';
    return '<div class="cm-app-card">'+
      '<div class="cm-app-head"><b>'+esc(a.commissionTitle)+'</b>'+statusLabel+'</div>'+
      '<div class="cm-app-applicant">신청자: '+esc(a.applicantName)+'</div>'+
      (a.extraRequest?('<div class="cm-app-answer"><b>추가 요청사항</b> '+esc(a.extraRequest)+'</div>'):'')+
      answersHTML+imagesHTML+
      actionsHTML+
    '</div>';
  }).join('');
}
async function cmDecideApplication(applicationId,status){
  var app=cmMyApplications.find(function(x){return x.id===applicationId;});
  if(!app)return;
  var upd=await window.supabase.from('commission_applications').update({status:status,decided_at:new Date().toISOString()},{count:"exact"}).eq('id',applicationId);
  if(!upd.error&&upd.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(upd.error){toast('처리 실패: '+upd.error.message);return;}
  app.status=status;
  var listEl=document.getElementById('cmMyList');
  if(listEl)listEl.innerHTML=cmMyApplicationsHTML();
  if(status==='accepted'){
    toast('신청을 수락했어요. 채팅으로 연결할게요','✅');
    await cmOpenChatAbout(app.applicantId,app.commissionId,app.commissionTitle);
    var acceptInp=document.getElementById('chatInput');
    if(acceptInp){
      var myNick=AUTH.profile?AUTH.profile.nickname:ME.nick;
      acceptInp.value=myNick+'님이 커미션 신청을 수락했어요';
      await sendChatMessage();
    }
  }else{
    toast('신청을 거절했어요');
  }
}
async function cmBulkStatus(status){
  if(!AUTH.user)return;
  if(cmMyList.length===0){toast('등록된 커미션이 없어요','⚠');return;}
  var upd=await window.supabase.from('commissions').update({status:status},{count:"exact"}).eq('author_id',AUTH.user.id);
  if(!upd.error&&upd.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(upd.error){toast('처리 실패: '+upd.error.message);return;}
  cmMyList.forEach(function(c){c.status=status;});
  document.getElementById('cmMyList').innerHTML=cmMyListHTML();
  cmDataLoaded=false;
  toast(status==='open'?'커미션을 모두 열었어요':'커미션을 모두 마감했어요',status==='open'?'🟢':'⛔');
}
/* 탭바가 가리는 높이를 --cm-tabbar-h 에 넣는다(본문 여백·떠 있는 버튼들이 이 값을 쓴다).
   ⚠️ **window.innerHeight로 재지 않는다.** 인앱 브라우저(네이버 등)는 스크롤할 때 자기 툴바를
      접었다 폈다 하며 innerHeight를 계속 바꾼다. 그 순간 innerHeight는 즉시 바뀌지만
      고정 요소의 위치(rect.top)는 다음 프레임에야 따라오므로 둘의 차가 몇 px씩 흔들린다.
      그 값이 흔들리면 → footer 여백이 흔들리고 → 문서 높이가 흔들리고 → 스크롤 위치가 밀려
      **탭이 움찔거린다.** 탭바를 바닥에 붙인 뒤로는 탭바 자신의 높이가 곧 가리는 높이다.
   ⚠️ 값이 그대로면 아무것도 쓰지 않는다 — 같은 값을 다시 넣어도 재배치 비용은 그대로 든다. */
var _cmTabH=-1;
function cmSyncTabbarHeight(){
  var tb=document.querySelector('.tabbar');
  var h=tb?Math.round(tb.offsetHeight):0;   // display:none 이면 0이 나온다
  if(h===_cmTabH)return;
  _cmTabH=h;
  document.documentElement.style.setProperty('--cm-tabbar-h',h+'px');
  if(typeof syncTabInd==="function")syncTabInd(true); // 탭바가 나타났다 사라질 때 자리 재계산
}
/* 지금 **보이는** 화면이 커미션인가.
   ⚠️ `#main`에 .cm-root가 있는지만 보면 안 된다 — 글쓰기·채팅은 #main 위에 덮이는 화면이라
      그 아래에 커미션 목록이 그대로 남는다. 그래서 커미션 → 채팅으로 가면 cm-page가 붙은 채
      남아, 그 화면이 커미션 규칙(게시판 탭·사이드바·검색 숨김, '내 커미션' 버튼 노출)을
      뒤집어썼다. 실측: 채팅 헤더에서 검색이 사라지고 '내 커미션'이 떠 있었다(2026-08-13).
   그래서 앱이 이미 들고 있는 화면 스택을 본다. 맨 위가 cm으로 시작하면 커미션 화면이다
   (사이드 메뉴의 renderDrawerNav도 같은 규칙으로 현재 화면을 판정한다).
   실측 확인: 홈=[] · 커미션=["cmList"] · 글쓰기=[](에디터가 스택을 비운다) · 채팅=["chatList"]. */
function _cmPageNow(){
  try{
    if(typeof screenStack==="undefined"||!screenStack.length)return false;
    var top=screenStack[screenStack.length-1];
    return !!(top&&top.key&&top.key.indexOf("cm")===0);
  }catch(e){return false;}
}
/* ⚠️ requestAnimationFrame으로 묶지 말 것. **탭이 숨겨져 있으면 rAF가 아예 안 돈다** —
      그 사이 화면을 옮기면 표시가 옛 상태로 남는다(2026-08-13 실측: 스택은 cmList인데
      cm-page가 안 붙음). 판정은 screenStack을 읽는 것뿐이라 바로 하는 편이 안전하다.
   ⚠️ 관찰은 childList만. class까지 보면 우리가 붙이는 cm-page가 다시 관찰을 부른다. */
/* 지금 화면이 '커미션 상세'인가 — 헤더의 공유·더보기·뒤로 아이콘을 이때만 보여준다.
   ⚠️ id가 없는 경우(등록 미리보기)는 제외한다 — 공유할 대상이 없는데 버튼만 뜨면 눌러도 헛일이다. */
function _cmDetailNow(){
  try{
    if(typeof screenStack==="undefined"||!screenStack.length)return false;
    var top=screenStack[screenStack.length-1];
    return !!(top&&top.key==="cmDetail"&&cmDetailCurrentId!=null);
  }catch(e){return false;}
}
function _cmScheduleSync(){
  document.body.classList.toggle('cm-page',_cmPageNow());
  document.body.classList.toggle('cm-detail',_cmDetailNow());
  cmSyncTabbarHeight();
}
new MutationObserver(_cmScheduleSync)
  .observe(document.body,{childList:true,subtree:true});
cmSyncTabbarHeight();

/* 화면 크기가 바뀔 때의 뒷정리.
   ⚠️ 인앱 브라우저의 툴바 여닫힘 때문에 resize는 스크롤 중에 연달아 쏟아진다.
      바뀌는 '도중'의 어중간한 값을 반영하면 그게 곧 떨림이 되므로, 멈춘 뒤 한 번만 처리한다. */
var _vpT;
window.addEventListener('resize',function(){
  clearTimeout(_vpT);
  _vpT=setTimeout(function(){
    cmSyncSafeArea();
    cmSyncTabbarHeight();
    if(typeof syncTabInd==="function")syncTabInd(true);
  },120);
});

/* 아래 안전영역(아이폰 홈 인디케이터 자리)을 --cm-sab 에 담아 두고 탭바 패딩이 그걸 쓰게 한다.
   ⚠️ 인앱 브라우저는 자기 툴바를 감출 때 env(safe-area-inset-bottom)을 0 ↔ 34px 로 오간다.
      패딩에 env()를 그대로 쓰면 **스크롤할 때마다 탭바 높이가 바뀌어 움찔거린다.**
      → 한 번 커진 값은 다시 줄이지 않는다(줄이는 쪽만 무시하므로 가려지는 일은 없다).
      화면을 돌리면(orientationchange) 값이 진짜로 달라지므로 그때만 다시 잰다. */
var _sabProbe=null,_sab=-1;
function cmReadSafeArea(){
  if(!_sabProbe){
    _sabProbe=document.createElement('div');
    _sabProbe.setAttribute('aria-hidden','true');
    _sabProbe.style.cssText='position:fixed;left:-9999px;top:0;width:0;visibility:hidden;pointer-events:none;height:env(safe-area-inset-bottom,0px)';
    document.body.appendChild(_sabProbe);
  }
  return _sabProbe.offsetHeight||0;
}
function cmSyncSafeArea(reset){
  var v=cmReadSafeArea();
  if(reset)_sab=v; else if(v<=_sab)return;   // 줄어드는 쪽은 무시 = 떨리지 않는다
  _sab=v;
  document.documentElement.style.setProperty('--cm-sab',_sab+'px');
  cmSyncTabbarHeight();
}
window.addEventListener('orientationchange',function(){setTimeout(function(){cmSyncSafeArea(true);},300);});
cmSyncSafeArea(true);
function tagFilterBarHTML(){
  var tags=TAGS_BY_BOARD[state.board];
  if(!tags||state.query)return"";
  var h='<div class="tagbar">';
  h+='<button class="tagbar-btn'+(!state.tag?' on':'')+'" onclick="toggleTagFilter(null)">전체</button>';
  tags.forEach(function(t){
    h+='<button class="tagbar-btn'+(state.tag===t?' on':'')+'" onclick="toggleTagFilter(\''+esc(t)+'\')">'+esc(t)+'</button>';
  });
  return h+'</div>';
}
function toggleTagFilter(tag,e){
  if(e)e.stopPropagation();
  state.tag=(tag===null?null:(state.tag===tag?null:tag));
  page=1;renderList();
  window.scrollTo({top:0,behavior:"smooth"});
}
function setSort(s){if(s==="rel"&&!state.query)return;state.sort=s;page=1;renderList()}
function setViewMode(m){state.viewMode=m;page=1;renderList()}
function toggleViewMode(){setViewMode(state.viewMode==="album"?"list":"album");}

/* ===== 목록 화면 상단 영역 =====
   게시판 탭(맨 위) → 같은 줄에 말머리(왼쪽) + 정렬 드롭다운·보기 토글(오른쪽).
   제목은 표시하지 않음(게시판 탭에서 현재 게시판이 강조되므로 중복). */
var ICON_LIST='<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
var ICON_GRID='<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/></svg>';
function _sortDropdownHTML(){ // 정렬(최신/인기)을 드롭다운 하나로
  return '<select class="sort-dd" aria-label="정렬 기준" onchange="setSort(this.value)">'+
    // 정확도는 검색 중에만 내놓는다 — 검색어가 없으면 점수를 매길 기준 자체가 없다
    (state.query?'<option value="rel"'+(state.sort==="rel"?" selected":"")+'>정확도</option>':'')+
    '<option value="new"'+(state.sort==="new"?" selected":"")+'>최신</option>'+
    '<option value="hot"'+(state.sort==="hot"?" selected":"")+'>인기</option>'+
    '<option value="best"'+(state.sort==="best"?" selected":"")+'>추천글</option></select>';
}
/* 검색 결과를 게시판 하나로 좁히는 드롭다운.
   ⚠️ 결과가 있는 게시판만 내놓는다. 16개를 다 늘어놓으면 대부분 0건이라 고를 이유가 없고,
      건수를 옆에 붙여야 "여기 3건 있네" 하고 고를 수 있다.
   ⚠️ 건수는 _searchScopeArr()(=좁히기 전)로 센다. 좁힌 뒤에 세면 고른 게시판만 남아
      다른 선택지가 목록에서 사라져 되돌아갈 수가 없다. */
function searchBoardCounts(){
  var q=(state.query||"").toLowerCase();
  if(!q)return {};
  var out={};
  _searchScopeArr().forEach(function(p){
    if(matchPost(p,q,state.searchTab))out[p.board]=(out[p.board]||0)+1;
  });
  return out;
}
function _searchBoardDropdownHTML(){
  if(!state.query)return"";
  var counts=searchBoardCounts(),total=0;
  for(var k in counts)total+=counts[k];
  var h='<select class="sort-dd sb-dd" aria-label="게시판 좁히기" onchange="setSearchBoard(this.value)">'+
    '<option value=""'+(!state.searchBoard?" selected":"")+'>전체 게시판 '+total+'</option>';
  var listed={};
  function opt(id,name){
    if(listed[id])return;
    listed[id]=true;
    var n=counts[id]||0;
    if(!n&&state.searchBoard!==id)return; // 0건은 숨기되, 지금 고른 것은 남긴다(안 그러면 선택이 튕긴다)
    h+='<option value="'+esc(id)+'"'+(state.searchBoard===id?" selected":"")+'>'+esc(name)+' '+n+'</option>';
  }
  (window.BOARDS||[]).forEach(function(g){
    (g.items||[]).forEach(function(b){
      if(b.id==="all")return; // '전체 글'은 게시판이 아니라 모아보기 화면이다
      opt(b.id,b.name);
    });
  });
  /* ⚠️ BOARDS에 없는 게시판이 결과에 섞인다 — trade·review는 커미션으로 분리하면서 BOARDS에서
        뺐지만 옛 글이 DB에 그대로 남아 있고, 검색은 그 글까지 찾는다(baseFiltered가 검색 중엔
        trade·review를 안 걸러낸다). 여기서 빠뜨리면 "전체 17건인데 목록의 합은 15건"이 되고
        그 2건은 좁혀볼 방법이 없어진다. 이름은 boardName()이 알고 있다. */
  Object.keys(counts).forEach(function(id){opt(id,boardName(id));});
  return h+'</select>';
}
function setSearchBoard(b){
  state.searchBoard=b||"";page=1;renderList();
  window.scrollTo({top:0,behavior:"smooth"});
}
function _viewToggleHTML(){ // 보기 방식을 아이콘 하나로 토글(지금 상태를 아이콘으로 표시)
  var isAlbum=state.viewMode==="album";
  return '<button class="viewtoggle" onclick="toggleViewMode()" aria-label="보기 전환" title="'+(isAlbum?"앨범형 · 누르면 목록형":"목록형 · 누르면 앨범형")+'">'+(isAlbum?ICON_GRID:ICON_LIST)+'</button>';
}
function _searchNoteHTML(sub){ return state.query?'<div class="bh-note">'+sub+'</div>':''; } // 제목이 없으므로 검색 결과 안내는 여기로
/* 검색 결과 범위 탭 — 글+댓글 / 제목 / 작성자.
   ⚠️ 검색 중일 때만 그린다. 평소 목록에 늘 떠 있으면 게시판 탭과 헷갈린다.
   ⚠️ 건수가 0인 탭도 숨기지 않는다 — "작성자 0"이 보여야 그 이름으로 쓴 글이
      없다는 걸 알 수 있고, 탭이 들쭉날쭉 사라지면 누르려던 자리가 바뀐다. */
var SEARCH_TABS=[["all","글+댓글"],["title","제목"],["author","작성자"]];
function searchTabsHTML(){
  if(!state.query)return"";
  var c=searchCounts();
  var h='<div class="stabs" role="tablist">';
  SEARCH_TABS.forEach(function(t){
    var on=state.searchTab===t[0];
    h+='<button class="stab'+(on?" on":"")+'" role="tab" aria-selected="'+(on?"true":"false")+'"'+
       ' onclick="setSearchTab(\''+t[0]+'\')">'+t[1]+
       '<span class="stab-n">'+c[t[0]]+'</span></button>';
  });
  return h+'</div>';
}
/* 지금 탭에 결과가 없을 때의 안내.
   ⚠️ 탭은 검색어를 바꿔도 유지된다(제목 탭에서 글자를 더 치면 제목 탭에 머무는 게 자연스럽다).
      그래서 '작성자' 탭에 머문 채 새 낱말을 검색하면 0건이 나올 수 있는데, 그때 그냥
      "결과가 없어요"만 띄우면 **검색이 고장 난 것처럼 보인다.** 다른 탭에 결과가 있으면
      그쪽을 알려주고 바로 넘어갈 수 있게 한다. */
var SEARCH_EMPTY_IC='<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';
function searchEmptyHTML(){
  /* 게시판으로 좁혀 놓은 탓에 0건이면 그것부터 알린다 — 탭보다 이쪽이 원인일 때가 많고,
     "전체 게시판에는 12건이 있다"는 걸 모르면 검색어가 잘못된 줄 안다. */
  if(state.searchBoard){
    var bc=searchBoardCounts(),tot=0;
    for(var k in bc)tot+=bc[k];
    if(tot>0)
      return '<div class="empty">'+SEARCH_EMPTY_IC+'<h3>이 게시판에는 없어요</h3>'+
        '<p>전체 게시판에는 '+tot+'건이 있어요.</p>'+
        '<button onclick="setSearchBoard(\'\')">전체 게시판에서 보기</button></div>';
  }
  var c=searchCounts()||{},cur="";
  SEARCH_TABS.forEach(function(t){if(t[0]===state.searchTab)cur=t[1];});
  var other=SEARCH_TABS.filter(function(t){return t[0]!==state.searchTab&&(c[t[0]]||0)>0;});
  if(!other.length)
    return '<div class="empty">'+SEARCH_EMPTY_IC+'<h3>검색 결과가 없어요</h3>'+
      '<p>제목·내용·댓글·작성자를 모두 찾아봤어요.<br>다른 낱말로 검색해보세요.</p></div>';
  var best=other[0];
  return '<div class="empty">'+SEARCH_EMPTY_IC+'<h3>‘'+esc(cur)+'’에는 없어요</h3>'+
    '<p><b>'+esc(best[1])+'</b>에 '+c[best[0]]+'건이 있어요.</p>'+
    '<button onclick="setSearchTab(\''+best[0]+'\')">'+esc(best[1])+' 결과 보기</button></div>';
}
// 탭을 바꿔도 검색어(state.query)는 건드리지 않는다 — 범위만 갈아끼운다
function setSearchTab(t){
  if(state.searchTab===t)return;
  state.searchTab=t;page=1;renderList();
  window.scrollTo({top:0,behavior:"smooth"});
}
function boardHeaderHTML(sub){
  return boardTabsHTML()+
    '<div class="bh-row bh-a">'+tagFilterBarHTML()+_searchNoteHTML(sub)+
      '<div class="bh-right">'+_searchBoardDropdownHTML()+_sortDropdownHTML()+_viewToggleHTML()+'</div></div>'+
    searchTabsHTML();
}
/* 검색 결과에서 "왜 이 글이 걸렸는지"를 한 줄로 보여준다.
   ⚠️ 제목에서 걸린 글은 제목 하이라이트만으로 이유가 보이므로 줄을 더하지 않는다 —
      모든 결과에 붙이면 목록이 두 배로 길어지기만 한다.
   댓글에서 걸린 경우가 특히 중요하다: 제목·본문 어디에도 검색어가 없어서
      이 줄이 없으면 왜 나왔는지 알 수가 없다. */
function searchHitHTML(p){
  if(!state.query||!p._hit||p._hit.title)return"";
  var hit=p._hit;
  if(hit.comment)
    return '<div class="p-hit"><span class="ph-ic">💬</span>'+hlEsc(snippetAround(hit.comment.txt,state.query),state.query)+'</div>';
  if(hit.body)
    return '<div class="p-hit"><span class="ph-ic">📄</span>'+hlEsc(snippetAround((p.content||[]).join(" "),state.query),state.query)+'</div>';
  return""; // 작성자만 걸린 경우는 닉네임 하이라이트로 이미 보인다
}
function postCardHTML(p){
  var c=catFor(p);
  return '<div class="post-card" onclick="openPost('+p.id+')">'+
    '<div class="post-card-img">'+thumbImgHTML(p.images[0],'')+'</div>'+
    '<div class="post-card-body">'+
      (p.isManagerPick?'<span class="pick-badge">📌 매니저 픽</span> ':'')+
      '<div class="post-card-title">'+esc(p.title)+'</div>'+
      '<div class="post-card-meta"><span class="cat '+c.cls+'">'+c.label+'</span><span class="post-card-author">'+esc(dispName(p.author))+anonIpHTML(p.ipMasked)+'</span></div>'+
      '<div class="post-card-stats"><span>👁 '+fmtViews(p.views)+'</span><span>♥ '+p.likes+'</span><span>💬 '+p.comments.length+'</span></div>'+
    '</div>'+
  '</div>';
}
function postAlbumHTML(posts){
  if(!posts.length)return"";
  return '<div class="post-album">'+posts.map(postCardHTML).join("")+'</div>';
}
function showMore(){state.shown+=6;renderList()}
function goHome(){
  // 이미 '전체 글' 홈 피드를 보고 있으면 캐시로 다시 안 그림 → refreshFeed가 새 글 있을 때만 딱 한 번,
  // 그것도 최신(새 글 포함)으로 그림. 다른 화면/게시판에서 왔으면 즉시 전환용으로 캐시를 그림.
  curTab="home";navSeq++;
  var onHomeFeed=(!userLeftHome&&state.board==="all"&&!state.query&&!state.tag);
  resetScreens();userLeftHome=false;
  selectBoard("all",onHomeFeed);
  /* 이미 홈 피드를 보고 있을 때 홈 탭을 누르는 건 "지금 새로 보여줘"라는 명시적 요청이다.
     그때만 force — 8초 쓰로틀을 건너뛰고 새 글이 없어도 다시 그려서 눈에 보이게 한다.
     ⚠️ 다른 탭에서 돌아온 경우에는 force를 주면 안 된다. 바로 위 selectBoard가 이미 한 번
        그렸는데 force면 내용이 같아도 또 그려서 **두 번 새로고침되는 것처럼 보인다**
        (2026-08-13 신고). force 없이 두면 내용이 실제로 바뀐 때만 한 번 더 그린다. */
  refreshFeed(onHomeFeed);
}
// 홈 피드를 DB에서 다시 불러와 갱신. goHome이 이미 캐시로 한 번 그렸으므로, 재조회 후에는
// 내용이 실제로 바뀐 경우에만 딱 한 번 더 그림(안 바뀌면 다시 안 그려서 껌뻑임 없음).
function feedSignature(){
  return POSTS.filter(function(p){return p.dbId;})
    .map(function(p){return p.dbId+"."+p.likes+"."+(p.comments?p.comments.length:0);}).join(",");
}
async function refreshFeed(force){
  if(!window.supabase||feedRefreshing)return;
  if(!force&&Date.now()-postsLoadedAt<REFRESH_THROTTLE_MS)return; // 최근에 불러왔으면 재조회 생략(캐시 그대로 사용). 당겨서 새로고침 등은 force로 강제.
  feedRefreshing=true;
  var before=feedSignature();
  try{await loadRealPosts(true);}catch(e){} // true = loadRealPosts는 목록을 안 그림(중복 렌더 방지)
  feedRefreshing=false;
  // 홈 탭·당겨서 새로고침처럼 사용자가 직접 요청한 경우(force)는 내용이 그대로여도 다시 그린다.
  // 안 그러면 "눌러도 아무 일도 안 일어나는" 것처럼 보인다(새 글이 없으면 서명이 같아서 건너뛰므로).
  // 반대로 배경 자동 갱신은 예전대로 — 바뀐 게 있을 때만 그려서 목록이 껌뻑이지 않게 둔다.
  if(!userLeftHome&&(force||feedSignature()!==before))renderList();
}
var _searchT;
function liveSearch(v){clearTimeout(_searchT);_searchT=setTimeout(function(){doSearch(v)},180);}
function doSearch(v){state.query=v.trim();page=1;if(state.query)state.board="all";
  // 검색을 지우면 범위·게시판 좁히기도 처음으로(다음 검색이 엉뚱한 조건에서 시작하지 않게).
  // 정확도순은 검색어가 있어야 뜻이 있으므로 최신순으로 되돌린다 — 안 그러면 드롭다운에서
  // 사라진 값이 선택된 채로 남아 목록이 정렬되지 않은 것처럼 보인다.
  if(!state.query){state.searchTab="all";state.searchBoard="";if(state.sort==="rel")state.sort="new";}
  renderNav(document.getElementById("boardNav"));renderNav(document.getElementById("boardNavM"));renderNav(document.getElementById("boardNavS"));
  renderChips();renderList();closeDrawer();window.scrollTo({top:0,behavior:"smooth"})}
function syncTabs(id){
  document.querySelectorAll(".tab[data-tab]").forEach(function(t){
    var d=t.getAttribute("data-tab");
    t.classList.toggle("on",(id==="all"&&d==="home")||(id===d));
  });
  syncTabInd();
}
// 선택 표시(유리 조각)를 현재 탭 자리로 옮긴다. 위치만 바꾸므로 CSS 전환이 붙어
// 탭을 바꿀 때 '미끄러져 가는 과정'이 보인다.
/* quiet=true 면 출렁임 없이 자리만 맞춘다.
   ⚠️ 화면 크기 변화(인앱 브라우저 툴바 여닫힘 등)로 불린 경우엔 반드시 quiet여야 한다 —
      스크롤 중에 출렁임이 재생되면 그게 바로 '탭이 움찔거리는' 모습이 된다.
      출렁임은 사람이 탭을 바꿨을 때(syncTabs)만 나와야 한다. */
function syncTabInd(quiet){
  var inner=document.querySelector(".tabbar-inner"),ind=document.getElementById("tabInd");
  if(!inner||!ind)return;
  var on=inner.querySelector(".tab.on");
  // 탭바가 안 보이는 상태(PC·키보드 올라옴)에선 폭이 0이라 자리를 못 잡는다 → 숨긴다
  if(!on||!inner.offsetWidth){ind.style.opacity="0";return;}
  ind.style.opacity="1";
  var x=on.offsetLeft;
  var moved=(ind.dataset.x!==String(x));
  var w=on.offsetWidth+"px";
  if(ind.style.width!==w)ind.style.width=w;   // 같은 값을 다시 쓰지 않는다(불필요한 재배치 방지)
  ind.style.translate=x+"px 0";   // transform이 아니라 translate — scale(출렁임)과 겹치지 않게
  ind.dataset.x=String(x);
  // 자리를 실제로 옮겼을 때만 출렁임을 다시 재생(같은 탭을 또 눌러도 흔들리면 산만하다)
  if(moved&&!quiet){
    ind.classList.remove("wobble");
    void ind.offsetWidth;         // 클래스를 뗐다 붙이는 것만으론 애니메이션이 다시 안 돈다
    ind.classList.add("wobble");
  }
}
// 처음 한 번은 전환 없이 제자리에 놓는다(페이지가 뜨자마자 왼쪽에서 미끄러져 오면 어색하다)
function initTabInd(){
  var ind=document.getElementById("tabInd");if(!ind)return;
  var keep=ind.style.transition;ind.style.transition="none";
  syncTabInd();
  ind.classList.remove("wobble");  // 첫 표시는 출렁임 없이 조용히
  void ind.offsetWidth;            // 위치를 먼저 반영시킨 뒤 전환을 되살린다
  ind.style.transition=keep;
}
/* resize 때의 자리 재계산은 위쪽 뒷정리 타이머(_vpT)가 quiet 모드로 맡는다.
   여기서 직접 붙이면 툴바가 여닫히는 매 프레임마다 출렁임이 재생될 수 있다. */

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initTabInd);
else initTabInd();
/* ---------- editor ---------- */
var TAGS_BY_BOARD={
  talk:["잡담","질문","정보"],ask:["질문","시세문의"],crit:["피드백 요청"],doodle:["낙서","크로키"],
  wip:["러프","선화","채색","완성"],sketch:["러프","선화","채색"],tip:["강좌","꿀팁","자료"],challenge:["참가작"],
  collab:["협업","팀원모집"],
  vote:["투표","수요조사"],request:["모집중","모집완료","리퀘완료","후기글"],recruit:["개인용","비상업용","방송용","상업용","외주"],
  trade:["구인","구직"],used:["판매","구매"],suggest:["버그","건의","개선"]
};
var edState={board:null,tag:null,img:false,images:[]};
var editingPostId=null;
function stripTag(title,cat){
  if(cat&&title.indexOf("["+cat+"] ")===0)return title.slice(cat.length+3);
  return title;
}
function sentimentTitle(s){return s==="good"?"😊 만족 후기":"😞 불호 후기";}
function updateReviewNickField(){
  var isReview=(edState.board==="review");
  document.getElementById("edReviewNickInput").style.display=isReview?"block":"none";
  document.getElementById("wTitle").style.display=isReview?"none":"block";
  document.getElementById("edRatingRow").style.display=isReview?"flex":"none";
  document.getElementById("edContentHint").style.display=isReview?"block":"none";
  if(!isReview){
    document.getElementById("edCommissionList").style.display="none";
    document.getElementById("edCommissionList").innerHTML="";
  }
  renderCommissionSelected();
  renderEdSentiment();
}
function setEdSentiment(v){edState.sentiment=v;renderEdSentiment();}
function renderEdSentiment(){
  var btns=document.querySelectorAll("#edSentimentBtns .ed-sentiment-btn");
  btns.forEach(function(btn){
    var isGood=btn.classList.contains("good");
    btn.classList.toggle("on",edState.sentiment===(isGood?"good":"bad"));
  });
}
function searchCommissionPosts(){
  var q=document.getElementById("edReviewNickInput").value.trim();
  var list=document.getElementById("edCommissionList");
  if(!q){list.style.display="none";list.innerHTML="";return;}
  var matches=POSTS.filter(function(p){
    return p.board==="trade"&&p.category==="구직"&&p.author&&p.author.indexOf(q)>-1;
  }).slice(0,8);
  if(!matches.length){
    list.innerHTML='<div class="ed-commission-empty">일치하는 구직 글이 없어요. 닉네임을 다시 확인해주세요.</div>';
  }else{
    list.innerHTML=matches.map(function(p){
      return '<div class="ed-commission-item" onclick="selectCommissionPost('+p.id+')"><b>'+esc(p.author)+'</b> · '+esc(p.title)+'</div>';
    }).join("");
  }
  list.style.display="block";
}
function selectCommissionPost(postId){
  var p=POSTS.find(function(x){return x.id===postId});if(!p)return;
  edState.commissionPostId=p.dbId;
  edState.reviewedNick=p.author;
  edState.reviewedUserId=p.authorId||null;
  document.getElementById("edReviewNickInput").value="";
  document.getElementById("edCommissionList").style.display="none";
  document.getElementById("edCommissionList").innerHTML="";
  renderCommissionSelected();
}
function clearCommissionSelection(){
  edState.commissionPostId=null;edState.reviewedNick=null;edState.reviewedUserId=null;
  renderCommissionSelected();
}
function renderCommissionSelected(){
  var el=document.getElementById("edCommissionSelected");
  if(edState.board!=="review"||!edState.commissionPostId){el.style.display="none";el.innerHTML="";return;}
  var p=POSTS.find(function(x){return x.dbId===edState.commissionPostId});
  el.innerHTML='<span>✅ 확인됨: <b>'+esc(edState.reviewedNick||"")+'</b> · '+(p?esc(p.title):"(글 정보 없음)")+'</span><button type="button" onclick="clearCommissionSelection()">변경</button>';
  el.style.display="flex";
}
function openWrite(){
  userLeftHome=true;
  resetScreens();
  editingPostId=null;
  edState={board:(state.board!=="all")?state.board:null,tag:null,img:false,images:[],commissionPostId:null,reviewedNick:null,reviewedUserId:null,sentiment:null};
  buildBoardMenu();refreshBoardLabel();renderEdTags();
  document.getElementById("wTitle").value="";
  document.getElementById("edReviewNickInput").value="";
  updateReviewNickField();
  document.getElementById("wContent").innerHTML="";
  document.getElementById("edImages").innerHTML="";
  edState.polls={};
  document.getElementById("edCrit").checked=(edState.board==="crit");
  document.getElementById("edTitleLabel").textContent="글쓰기";
  edSetSubmitLabel("등록"); // 상단·폼 끝 두 버튼 모두
  document.getElementById("writeModal").classList.add("open");
  edEnterPage();   // 문서 자체가 글쓰기 페이지가 된다(뒤 페이지 감춤 + 맨 위로)
  document.getElementById("edBoardMenu").classList.remove("open");
  edOfferDraft(); // 쓰던 글이 있으면 알리기만 — 채우는 건 [불러오기]를 눌렀을 때
}
function openEditPost(id){
  var p=POSTS.find(function(x){return x.id===id});if(!p)return;
  if(!p.dbId||!AUTH.user||p.authorId!==AUTH.user.id){toast("수정 권한이 없어요");return;}
  if(p.adLocked){toast("광고를 집행 중인 글은 수정할 수 없어요");return;}
  if(postEditLocked(p)){toast("다른 분의 댓글이 달려 수정할 수 없어요");return;}
  editingPostId=id;
  edState={board:p.board,tag:p.category||null,img:!!(p.images&&p.images.length),images:p.images?p.images.slice():[],commissionPostId:p.commissionPostId||null,reviewedNick:p.reviewedNickname||null,reviewedUserId:p.reviewedUserId||null,sentiment:p.commissionSentiment||null};
  buildBoardMenu();refreshBoardLabel();renderEdTags();
  document.getElementById("wTitle").value=stripTag(p.title,p.category);
  document.getElementById("edReviewNickInput").value="";
  document.getElementById("edCommissionList").style.display="none";
  updateReviewNickField();
  document.getElementById("wContent").innerHTML=p.html?sanitizePostHtml(p.html):p.content.map(function(x){return"<p>"+esc(x)+"</p>"}).join("");
  renderEdImages();
  edState.polls={}; // 수정 시엔 투표 편집 미지원(1단계) — 버튼도 숨김
  document.getElementById("edCrit").checked=(edState.board==="crit");
  document.getElementById("edTitleLabel").textContent="글 수정";
  edSetSubmitLabel("수정 완료");
  document.getElementById("writeModal").classList.add("open");
  edEnterPage();   // 문서 자체가 글쓰기 페이지가 된다(뒤 페이지 감춤 + 맨 위로)
  document.getElementById("edBoardMenu").classList.remove("open");
  var _db=document.getElementById("edDraftBar");if(_db)_db.style.display="none"; // 수정 화면엔 임시저장 안내가 안 뜬다
}
var commissionReviewFilter=null;
function openCommissionReviews(postId){
  commissionReviewFilter=null;
  renderCommissionReviews(postId);
}
function setCommissionReviewFilter(postId,sentiment){
  commissionReviewFilter=(sentiment===null)?null:(commissionReviewFilter===sentiment?null:sentiment);
  renderCommissionReviews(postId);
}
function renderCommissionReviews(postId){
  var p=POSTS.find(function(x){return x.id===postId});if(!p||!p.dbId)return;
  var allReviews=POSTS.filter(function(r){return r.board==="review"&&r.commissionPostId===p.dbId});
  var goodCount=allReviews.filter(function(r){return r.commissionSentiment==="good"}).length;
  var badCount=allReviews.filter(function(r){return r.commissionSentiment==="bad"}).length;
  var reviews=commissionReviewFilter?allReviews.filter(function(r){return r.commissionSentiment===commissionReviewFilter}):allReviews;
  var h='<div class="profile"><button class="d-back" onclick="openPost('+postId+')"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>글로 돌아가기</button>'+
    '<div class="pf-sec">📝 '+esc(stripTag(p.title,p.category))+' 후기 ('+allReviews.length+')</div>';
  if(allReviews.length){
    h+='<div class="tagbar">'+
      '<button class="tagbar-btn'+(!commissionReviewFilter?' on':'')+'" onclick="setCommissionReviewFilter('+postId+',null)">전체 ('+allReviews.length+')</button>'+
      '<button class="tagbar-btn'+(commissionReviewFilter==="good"?' on':'')+'" onclick="setCommissionReviewFilter('+postId+',\'good\')">😊 만족 ('+goodCount+')</button>'+
      '<button class="tagbar-btn'+(commissionReviewFilter==="bad"?' on':'')+'" onclick="setCommissionReviewFilter('+postId+',\'bad\')">😞 불호 ('+badCount+')</button>'+
    '</div>';
  }
  h+=reviews.length?reviewAlbumHTML(reviews):'<div class="pf-empty">'+(commissionReviewFilter?'해당하는 후기가 없어요.':'아직 이 커미션에 대한 후기가 없어요.')+'</div>';
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
function openReviewFor(postId){
  if(!AUTH.user){toast("로그인 후 후기를 작성할 수 있어요");return;}
  var p=POSTS.find(function(x){return x.id===postId});
  if(!p||!p.dbId){toast("글 정보를 찾을 수 없어요");return;}
  openWrite();
  pickBoard("review");
  edState.commissionPostId=p.dbId;
  edState.reviewedNick=p.author;
  edState.reviewedUserId=p.authorId||null;
  renderCommissionSelected();
}
function closeWrite(){
  edSaveDraft();   // 나가기 전에 마지막 모습을 저장 — 실수로 닫아도 글이 사라지지 않는다
  editingPostId=null;
  document.getElementById("writeModal").classList.remove("open");
  document.body.style.overflow="";
  edLeavePage();   // 뒤 페이지를 되살리고 보던 목록 위치로
}


/* ===== 임시저장 =====
   글쓰기는 실수로 닫히기 너무 쉽다(나가기 오터치·ESC·뒤로가기·브라우저 이탈).
   예전엔 그 순간 쓰던 글이 통째로 사라졌다 → 입력할 때마다 자동 저장하고, 다시 열면 되살린다.
   ⚠️ 글 '수정'(editingPostId) 중에는 저장하지 않는다 — 원본이 DB에 있으므로 잃을 게 없고,
      수정하다 만 내용이 새 글 화면에 되살아나면 더 혼란스럽다. */
var ED_DRAFT_KEY="palo_draft_v1";
var _edDraftT=null;
function edSaveDraftSoon(){
  // ⚠️ 새 글을 쓰기 시작하면 저장분이 그것으로 덮어써진다 → 안내 줄을 그대로 두면
  //    "쓰던 글: 옛 제목"이라 해 놓고 불러오면 방금 쓴 글이 나오는 상태가 된다. 그래서 먼저 내린다.
  var bar=document.getElementById("edDraftBar");
  if(bar&&bar.style.display!=="none")bar.style.display="none";
  clearTimeout(_edDraftT);_edDraftT=setTimeout(edSaveDraft,800);
}
function edSaveDraft(){
  clearTimeout(_edDraftT);
  if(editingPostId)return;
  var tEl=document.getElementById("wTitle"),ed=document.getElementById("wContent");
  if(!tEl||!ed)return;
  var title=tEl.value,text=ed.textContent.replace(/​/g,"").trim();
  if(!title.trim()&&!text&&!edState.images.length){ // 빈 화면이면 남겨 둘 것도 없다
    try{localStorage.removeItem(ED_DRAFT_KEY);}catch(e){}
    return;
  }
  try{
    localStorage.setItem(ED_DRAFT_KEY,JSON.stringify({
      board:edState.board,tag:edState.tag,title:title,html:ed.innerHTML,
      images:edState.images,polls:edState.polls||{},ts:Date.now()
    }));
  }catch(e){} // 저장 공간 부족 등 — 임시저장은 보조 기능이라 조용히 포기
}
function edLoadDraft(){
  try{
    var d=JSON.parse(localStorage.getItem(ED_DRAFT_KEY)||"null");
    if(!d)return null;
    if(Date.now()-(d.ts||0)>3*24*3600*1000){localStorage.removeItem(ED_DRAFT_KEY);return null;} // 3일 지나면 버림
    return d;
  }catch(e){return null;}
}
function edClearDraft(){
  try{localStorage.removeItem(ED_DRAFT_KEY);}catch(e){}
  var b=document.getElementById("edDraftBar");if(b)b.style.display="none";
}
function edDropDraft(){ // 저장해 둔 글을 버린다(화면은 이미 비어 있으므로 다시 열 필요 없다)
  edClearDraft();
  toast("저장해 둔 글을 지웠어요");
}
/* 글쓰기를 열면 **빈 화면이 기본**이다(2026-08-09 사용자 요청).
   쓰던 글이 있으면 그 사실만 알려 주고, [불러오기]를 눌렀을 때만 채운다 —
   자동으로 채우면 새 글을 쓰려던 사람이 지난 글을 지우는 일부터 해야 한다. */
function edOfferDraft(){
  var bar=document.getElementById("edDraftBar");if(!bar)return;
  var d=edLoadDraft();
  if(!d){bar.style.display="none";return;}
  var min=Math.max(1,Math.round((Date.now()-(d.ts||Date.now()))/60000));
  var when=min<60?(min+"분 전"):(min<1440?(Math.round(min/60)+"시간 전"):(Math.round(min/1440)+"일 전"));
  var title=(d.title||"").trim();
  var peek=title?('"'+(title.length>14?title.slice(0,14)+"…":title)+'"'):"제목 없는 글";
  document.getElementById("edDraftBarMsg").textContent="쓰던 글이 있어요 · "+peek+" ("+when+")";
  bar.style.display="flex";
}
function edRestoreDraft(){
  var bar=document.getElementById("edDraftBar");
  var d=edLoadDraft();
  if(!d){if(bar)bar.style.display="none";return;}
  edState.board=d.board||null;
  edState.tag=d.tag||null;
  edState.images=(d.images||[]).slice();
  edState.img=edState.images.length>0;
  edState.polls=d.polls||{};
  buildBoardMenu();refreshBoardLabel();renderEdTags();updateReviewNickField();
  document.getElementById("wTitle").value=d.title||"";
  var ed=document.getElementById("wContent");
  // ⚠️ localStorage도 본문과 같은 살균을 거친다(내 저장소라도 그대로 innerHTML에 넣지 않는다).
  //    살균이 투표 블록 안의 편집/삭제 버튼을 지우므로 마커마다 안쪽을 다시 그린다.
  ed.innerHTML=sanitizePostHtml(d.html||"");
  ed.querySelectorAll("[data-poll]").forEach(function(el){
    var key=el.getAttribute("data-poll");
    el.className="poll-anchor";el.setAttribute("contenteditable","false");
    el.innerHTML=edPollBlockInner(key);
  });
  renderEdImages();
  document.getElementById("edCrit").checked=(edState.board==="crit");
  if(bar)bar.style.display="none"; // 불러왔으면 안내 줄은 할 일이 끝났다
  toast("쓰던 글을 불러왔어요","📄");
}
// 입력할 때마다(0.8초 잠잠해지면) 저장
(function(){
  var t=document.getElementById("wTitle"),ed=document.getElementById("wContent");
  if(t)t.addEventListener("input",edSaveDraftSoon);
  if(ed)ed.addEventListener("input",edSaveDraftSoon);
})();
function buildBoardMenu(){
  var h="";
  BOARDS.forEach(function(g){
    var items=g.items.filter(function(b){return b.id!=="all"});
    if(!items.length)return;
    h+='<div class="ed-bm-g">'+g.group+'</div>';
    items.forEach(function(b){
      h+='<div class="ed-bm-a'+(edState.board===b.id?' on':'')+'" onclick="pickBoard(\''+b.id+'\')">'+
        '<span class="ed-bm-ic '+boardCls(b.id)+'">'+boardEmoji(b.id)+'</span>'+
        '<span class="ed-bm-n">'+esc(b.name)+'</span></div>';
    });
  });
  document.getElementById("edBoardMenu").innerHTML=h;
}
function toggleBoardMenu(e){e.stopPropagation();document.getElementById("edBoardMenu").classList.toggle("open")}
function pickBoard(id){
  // 확인하지 않은 계정이 19+ 게시판을 고르면 여기서 막는다(DB 정책으로도 저장이 거부된다)
  if(id==="adult"&&!isAdultVerified()){openAdultGate();return;}
  if(id==="review"&&!AUTH.user){toast("로그인 후 후기를 작성할 수 있어요");return;}
  edState.board=id;edState.tag=null;buildBoardMenu();refreshBoardLabel();renderEdTags();
  document.getElementById("edBoardMenu").classList.remove("open");
  document.getElementById("edCrit").checked=(id==="crit");
  if(id!=="review"){
    document.getElementById("edReviewNickInput").value="";
    edState.commissionPostId=null;edState.reviewedNick=null;edState.reviewedUserId=null;edState.sentiment=null;
  }
  updateReviewNickField();}
var BOARD_GUIDE={
  talk:"주제 제한 없이 자유롭게 이야기 나누는 공간이에요. 가입 인사도 여기에 남겨주세요!",
  doodle:"가볍게 그린 낙서·자유 그림을 올리는 곳이에요.",
  wip:"작업 중이거나 완성한 그림을 공유해요.",
  sketch:"연습·강좌 등 그림 공부 기록을 나눠요.",
  ask:"궁금한 점이나 커미션 시세를 물어봐요.",
  vote:"투표로 의견·수요를 모으는 곳이에요.",
  crit:"내 그림에 대한 피드백(크리틱)을 요청해요.",
  collab:"함께 작업할 팀원·협업 상대를 찾아요.",
  challenge:"챌린지 주제·참가작을 공유해요.",
  tip:"유용한 자료·꿀팁·강좌를 나눠요.",
  request:"리퀘스트 글을 올려보세요! 원하는 사람들이 댓글로 캐릭터와 설명을 달아줄 거예요!",
  recruit:"커미션 작가를 구인해요. 거래는 당사자끼리 직접 진행해요.",
  used:"중고 장비를 사고팔아요. 거래 책임은 당사자에게 있어요.",
  suggest:"버그 제보·건의사항을 남겨주세요. 운영에 참고할게요.",
  ilchim:"돌려 말하지 않는 솔직한 지적을 주고받는 곳이에요. 그림에 대해서만 말하고, 사람을 깎아내리지 말아주세요.",
  review:"커미션 이용 후기를 남기는 곳이에요."
};
function refreshBoardLabel(){
  // 고른 게시판도 목록과 같은 모양(이모지+색)으로 보여줘서 무엇을 골랐는지 바로 알게 한다
  var lb=document.getElementById("edBoardLabel");
  if(edState.board){
    lb.innerHTML='<span class="ed-bm-ic '+boardCls(edState.board)+'">'+boardEmoji(edState.board)+'</span>'+
      esc(boardName(edState.board));
  }else lb.textContent="게시판 선택";
  var bg=document.getElementById("edBoardGuide");
  if(bg){
    var g=edState.board?BOARD_GUIDE[edState.board]:null;
    if(g){bg.style.display="";bg.textContent="📋 "+g;}
    else{bg.style.display="none";bg.textContent="";}
  }
  var ln=document.getElementById("edLockNotice");
  if(ln){
    if(POST_EDIT_LOCK_BOARDS.indexOf(edState.board)>=0){
      ln.style.display="";
      ln.textContent="⚠️ 다른 분의 댓글이 달리면 이 글을 수정·삭제할 수 없어요. 신중하게 작성해주세요.";
    }else{ln.style.display="none";ln.textContent="";}
  }
  var an=document.getElementById("edAcceptNotice");
  if(an){
    if(edState.board==="crit"){
      an.style.display="";
      an.textContent="💡 답변을 채택하면 그 작성자에게 포인트를 지급해요 — 광고 25점 + 활동 25점 (하루 최대 100점).";
    }else{an.style.display="none";an.textContent="";}
  }
}
function renderEdTags(){
  var el=document.getElementById("edTags");
  var tags=edState.board?TAGS_BY_BOARD[edState.board]:null;
  if(!tags){el.innerHTML="";return;}
  el.innerHTML='<span style="font-size:12.5px;font-weight:800;color:var(--muted);align-self:center;margin-right:2px">말머리</span>'+
    tags.map(function(t){return '<button class="ed-tag'+(edState.tag===t?' on':'')+'" onclick="pickTag(\''+t+'\')">'+t+'</button>'}).join("");
}
function pickTag(t){edState.tag=(edState.tag===t?null:t);renderEdTags()}
/* formatting */
function fmt(e,cmd,val){e.preventDefault();document.getElementById("wContent").focus();document.execCommand(cmd,false,val||null)}
function insertQuote(e){e.preventDefault();document.getElementById("wContent").focus();document.execCommand("formatBlock",false,"blockquote")}
var savedEditorRange=null;
function saveEditorSelection(){
  var sel=window.getSelection();
  if(sel&&sel.rangeCount>0){
    var r=sel.getRangeAt(0);
    var cEl=document.getElementById("wContent");
    if(cEl&&cEl.contains(r.commonAncestorContainer))savedEditorRange=r.cloneRange();
  }
}
function restoreEditorSelection(){
  var cEl=document.getElementById("wContent");
  cEl.focus();
  var sel=window.getSelection();
  sel.removeAllRanges();
  if(savedEditorRange){
    sel.addRange(savedEditorRange);
  }else{
    var r=document.createRange();
    r.selectNodeContents(cEl);
    r.collapse(false);
    sel.addRange(r);
  }
}
function advanceSavedSelection(){
  var sel=window.getSelection();
  if(sel&&sel.rangeCount>0)savedEditorRange=sel.getRangeAt(0).cloneRange();
}
/* 본문 커서 자리에 그림을 넣는다.
   ⚠️ **execCommand("insertHTML")을 쓰지 않는다.** 사진 선택 창(앨범 앱)이 열렸다 닫히면
      본문이 포커스를 잃는데, iOS는 코드로 다시 focus() 해도 편집 영역에 포커스를 돌려주지 않는다.
      그 상태의 execCommand는 **조용히 아무 일도 하지 않아** 그림이 안 들어가거나 맨 끝에 붙는다.
      Range API로 직접 넣으면 포커스와 무관하게 저장해 둔 자리에 정확히 들어간다.
   ⚠️ margin:10px auto = 가운데 정렬. 넣은 뒤 이미지를 눌러 왼/오른쪽으로 바꿀 수 있다. */
function insertInlineMedia(url){
  var ed=document.getElementById("wContent");if(!ed)return;
  var img=document.createElement("img");
  img.setAttribute("src",url);
  img.setAttribute("style","max-width:100%;border-radius:10px;display:block;margin:10px auto");
  var br=document.createElement("br");

  // 저장해 둔 커서 자리. 없거나 본문 밖이면 맨 끝에 붙인다.
  var r=null;
  if(savedEditorRange&&ed.contains(savedEditorRange.commonAncestorContainer)){
    try{r=savedEditorRange.cloneRange();}catch(e){r=null;}
  }
  if(!r){r=document.createRange();r.selectNodeContents(ed);r.collapse(false);}
  r.deleteContents();
  r.insertNode(br);
  r.insertNode(img);   // br 앞에 넣어야 <img><br> 순서가 된다

  // 다음 그림은 이 그림 바로 아래로 들어가게 커서를 옮겨 둔다
  var after=document.createRange();
  after.setStartAfter(br);after.collapse(true);
  savedEditorRange=after.cloneRange();
  try{var sel=window.getSelection();sel.removeAllRanges();sel.addRange(after);}catch(e){}
}

/* 본문 안 커서 위치를 **계속** 기억해 둔다.
   ⚠️ 사진을 고르는 동안 선택이 사라지므로, 버튼을 누른 순간에만 저장하면 놓치는 경우가 있다
      (툴바를 먼저 만졌거나, 앨범 앱을 다녀오며 선택이 버려진 경우).
      본문에 커서가 놓일 때마다 기록해 두면 '원하는 위치'가 훨씬 안정적으로 유지된다. */
document.addEventListener("selectionchange",function(){
  var ed=document.getElementById("wContent");if(!ed)return;
  var sel=window.getSelection();if(!sel||!sel.rangeCount)return;
  var r=sel.getRangeAt(0);
  if(ed.contains(r.commonAncestorContainer)){
    try{savedEditorRange=r.cloneRange();}catch(e){}
  }
});

/* ===== 글꼴 · 글자 크기 =====================================================
   ⚠️ 웹폰트는 **필요할 때만** 불러온다. 한글 폰트는 글자 수가 많아 무겁고,
      글꼴을 쓰지 않는 대부분의 방문에는 한 바이트도 받을 이유가 없다.
      → 글꼴 메뉴를 처음 열 때, 그리고 그 폰트를 쓴 글을 실제로 그릴 때만 부른다.
      (구글이 unicode-range로 잘게 쪼개 보내므로 실제로 쓰인 글자 조각만 받는다) */
var _edFontsLoaded=false;
function edEnsureWebFonts(){
  if(_edFontsLoaded)return;
  _edFontsLoaded=true;
  var l=document.createElement("link");
  l.rel="stylesheet";
  l.href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon"+
         "&family=Gowun+Dodum&family=Jua&family=Nanum+Gothic:wght@400;700"+
         "&family=Nanum+Myeongjo:wght@400;700&family=Nanum+Pen+Script&display=swap";
  document.head.appendChild(l);
}
// 드롭다운을 누르는 순간 커서가 본문에서 빠진다 → 그 직전 위치를 붙잡아 둔다
/* 서식 도구를 누르기 직전에 커서를 붙잡아 둔다.
   ⚠️ **preventDefault가 핵심** — 이걸 안 하면 mousedown이 본문의 포커스를 빼앗고,
      모바일에서는 그 순간 **자판이 내려간다**(글꼴·크기를 고르려는데 화면이 통째로 출렁인다).
      굵게·기울임 등은 fmt()가 이미 막고 있었는데 글꼴·크기 쪽만 빠져 있었다(2026-08-09 사용자 신고).
   ⚠️ preventDefault를 해도 selectionchange가 이미 저장해 둔 커서는 그대로라 적용에는 문제가 없다. */
function edSaveForMenu(e){
  if(e&&e.preventDefault)e.preventDefault();
  saveEditorSelection();
  if(e&&e.currentTarget&&e.currentTarget.id==="edFontSel")edEnsureWebFonts();
}
/* 선택 영역(또는 커서 자리)에 style을 입힌다.
   ⚠️ **execCommand를 쓰지 않는다.** 폐기 예정인 API인 데다 `<font size=7>` 같은 옛 태그를 만들어
      매번 span으로 바꿔 심어야 했고, 창에 포커스가 없으면 조용히 아무 일도 하지 않는다.
      Range API로 직접 감싸면 그런 조건에 기대지 않고 결과도 예측 가능하다.
   ⚠️ 아무것도 선택하지 않았으면 빈 span을 만들고 그 안에 커서를 둔다 —
      그래야 네이버처럼 '미리 골라 두고 이어서 입력'이 된다. */
function edApplyInline(setStyle){
  var ed=document.getElementById("wContent");if(!ed)return;
  restoreEditorSelection();
  var sel=window.getSelection();if(!sel||!sel.rangeCount)return;
  var r=sel.getRangeAt(0);
  if(!ed.contains(r.commonAncestorContainer))return;
  var span=document.createElement("span");
  setStyle(span);
  if(sel.isCollapsed){
    span.appendChild(document.createTextNode("​")); // 폭 없는 글자 — 커서가 머무를 자리
    r.insertNode(span);
    var r2=document.createRange();
    r2.setStart(span.firstChild,1);r2.collapse(true);
    sel.removeAllRanges();sel.addRange(r2);
  }else{
    try{
      r.surroundContents(span);            // 한 요소 안의 선택이면 이걸로 깔끔하게 감싼다
    }catch(e){
      // 선택이 여러 요소에 걸쳐 있으면 surroundContents가 거부한다 → 떼어내서 감싸 넣는다
      span.appendChild(r.extractContents());
      r.insertNode(span);
    }
    var r3=document.createRange();
    r3.selectNodeContents(span);
    sel.removeAllRanges();sel.addRange(r3);
  }
  advanceSavedSelection();
}
function edSetSize(px){
  if(!px)return;
  edApplyInline(function(el){el.style.fontSize=px+"px";});
  edSaveDraftSoon();
}
function edSetFont(family){
  if(!family)return;
  edEnsureWebFonts();
  edApplyInline(function(el){el.style.fontFamily=family;});
  edSaveDraftSoon();
}

/* ===== 본문에 넣은 이미지 조절 ==============================================
   이미지를 누르면 그 아래에 작은 도구가 뜬다: 정렬 · 크기 · 위아래 이동 · 대표 지정 · 삭제.
   ⚠️ 도구는 position:fixed 로 화면에 띄우고 스크롤할 때마다 자리를 다시 잡는다.
      본문 안에 넣으면 그것까지 글 내용으로 저장돼 버린다. */
var edImgTarget=null;
function edImgBar(){
  var b=document.getElementById("edImgBar");
  if(b)return b;
  b=document.createElement("div");
  b.id="edImgBar";b.className="ed-imgbar";b.style.display="none";
  b.innerHTML=
    '<button type="button" title="왼쪽" onclick="edImgAlign(\'left\')">⬅</button>'+
    '<button type="button" title="가운데" onclick="edImgAlign(\'center\')">⬍</button>'+
    '<button type="button" title="오른쪽" onclick="edImgAlign(\'right\')">➡</button>'+
    '<span class="ed-imgbar-div"></span>'+
    '<button type="button" title="작게" onclick="edImgSize(50)">작게</button>'+
    '<button type="button" title="중간" onclick="edImgSize(75)">중간</button>'+
    '<button type="button" title="원래대로" onclick="edImgSize(100)">100%</button>'+
    '<span class="ed-imgbar-div"></span>'+
    '<button type="button" title="위로 옮기기" onclick="edImgMove(-1)">↑</button>'+
    '<button type="button" title="아래로 옮기기" onclick="edImgMove(1)">↓</button>'+
    '<span class="ed-imgbar-div"></span>'+
    '<button type="button" class="ed-imgbar-rep" onclick="edImgMakeCover()">★ 대표</button>'+
    '<button type="button" class="ed-imgbar-del" onclick="edImgDelete()">삭제</button>';
  document.body.appendChild(b);
  return b;
}
function edPlaceImgBar(){
  if(!edImgTarget||!document.body.contains(edImgTarget)){edHideImgBar();return;}
  var b=edImgBar(),r=edImgTarget.getBoundingClientRect();
  b.style.display="flex";
  var top=r.bottom+8;
  if(top>window.innerHeight-60)top=Math.max(8,r.top-b.offsetHeight-8); // 화면 아래로 나가면 위쪽에
  b.style.top=Math.round(top)+"px";
  var left=r.left+r.width/2-b.offsetWidth/2;
  left=Math.max(8,Math.min(left,window.innerWidth-b.offsetWidth-8));   // 화면 밖으로 새지 않게
  b.style.left=Math.round(left)+"px";
}
function edShowImgBar(img){
  edImgTarget=img;
  img.classList.add("ed-img-on");
  edImgBar();edPlaceImgBar();
}
function edHideImgBar(){
  var b=document.getElementById("edImgBar");if(b)b.style.display="none";
  if(edImgTarget)edImgTarget.classList.remove("ed-img-on");
  edImgTarget=null;
}
document.addEventListener("click",function(e){
  var ed=document.getElementById("wContent");if(!ed)return;
  var t=e.target;
  if(t&&t.tagName==="IMG"&&ed.contains(t)){edShowImgBar(t);return;}
  if(t&&t.closest&&t.closest("#edImgBar"))return;  // 도구 자체를 누른 건 유지
  edHideImgBar();
});
/* ⚠️ iOS 사파리는 편집 영역 안의 이미지를 톡 눌렀을 때 click을 안 만들어 주는 경우가 있다
   (그림 선택 제스처로 가져가 버린다). 그래서 pointerup으로도 한 번 더 잡는다.
   click까지 오면 같은 동작이 두 번 실행되지만 결과가 같아 문제되지 않는다. */
document.addEventListener("pointerup",function(e){
  var ed=document.getElementById("wContent");if(!ed)return;
  var t=e.target;
  if(t&&t.tagName==="IMG"&&ed.contains(t))edShowImgBar(t);
},true);
window.addEventListener("scroll",function(){if(edImgTarget)edPlaceImgBar();},{passive:true});
window.addEventListener("resize",function(){if(edImgTarget)edPlaceImgBar();});
function edImgAlign(how){
  if(!edImgTarget)return;
  var s=edImgTarget.style;
  s.display="block";
  s.marginLeft = (how==="left")  ? "0"    : "auto";
  s.marginRight= (how==="right") ? "0"    : "auto";
  edPlaceImgBar();
}
function edImgSize(pct){
  if(!edImgTarget)return;
  edImgTarget.style.maxWidth=pct+"%";
  edPlaceImgBar();
}
// 에디터 바로 아래 단계까지 올라가서 그 덩어리째 옮긴다(문단 안에 들어 있는 경우 대비)
function edImgBlockOf(img){
  var ed=document.getElementById("wContent"),n=img;
  while(n&&n.parentNode&&n.parentNode!==ed)n=n.parentNode;
  return n;
}
function edImgMove(dir){
  if(!edImgTarget)return;
  var blk=edImgBlockOf(edImgTarget);if(!blk||!blk.parentNode)return;
  // 그림을 넣을 때 바로 뒤에 붙인 <br>은 그림의 일부처럼 같이 옮긴다.
  // 안 그러면 그림만 빠져나가고 빈 줄이 원래 자리에 남는다.
  var tail=(blk.nextElementSibling&&blk.nextElementSibling.tagName==="BR")?blk.nextElementSibling:null;
  var last=tail||blk;
  var sib=(dir<0)?blk.previousElementSibling:last.nextElementSibling;
  if(!sib){toast(dir<0?"맨 위예요":"맨 아래예요");return;}
  if(dir<0){
    blk.parentNode.insertBefore(blk,sib);
    if(tail)blk.parentNode.insertBefore(tail,sib);
  }else{
    blk.parentNode.insertBefore(sib,blk);
  }
  edPlaceImgBar();
}
function edImgMakeCover(){
  if(!edImgTarget)return;
  var i=edState.images.indexOf(edImgTarget.getAttribute("src"));
  if(i<0){toast("이 그림은 목록에 없어요");return;}
  edSetCover(i);
}
function edImgDelete(){
  if(!edImgTarget)return;
  var url=edImgTarget.getAttribute("src");
  var blk=edImgBlockOf(edImgTarget);
  edImgTarget.remove();
  // 이미지만 있던 덩어리는 빈 껍데기로 남으므로 같이 치운다
  if(blk&&blk!==edImgTarget&&blk.parentNode&&!blk.textContent.trim()&&!blk.querySelector("img,video"))blk.remove();
  edHideImgBar();
  var j=edState.images.indexOf(url);
  if(j>-1){edState.images.splice(j,1);renderEdImages();}
  toast("그림을 뺐어요");
}
function pickImage(e){e.preventDefault();saveEditorSelection();document.getElementById("edFile").click()}

/* ===== 하단 도구 도크 =====================================================
   ⚠️ position:fixed 만으로는 모바일에서 키보드가 올라올 때 도크가 가려진다.
      키보드는 '보이는 영역(visualViewport)'만 줄이고 레이아웃 뷰포트는 그대로 두기 때문에,
      바닥에 붙인 요소가 키보드 뒤로 숨는다. visualViewport의 높이·스크롤을 따라
      도크를 그만큼 끌어올려야 항상 손끝(키보드 바로 위)에 남는다. */
/* ===== 글쓰기 페이지 진입/이탈 ==========================================
   글쓰기는 **오버레이가 아니라 문서 자체가 글쓰기 페이지**가 되는 방식이다(디시식).
   ⚠️ 예전에 쓰던 `position:fixed` 오버레이 + 내부 스크롤 + `body{overflow:hidden}` 조합은
      iOS에서 자판이 올라올 때 브라우저의 '커서를 보이게 스크롤'과 싸워 **커서가 자판 뒤로
      들어가고 화면이 튀었다.** 문서 흐름에 맡기면 그 문제가 통째로 사라진다.
   그래서 열 때: 뒤 페이지(header·목록·footer·탭바)를 감춰 문서 높이를 글쓰기와 일치시키고,
   닫을 때: 되살리고 보던 목록 위치로 돌아간다. */
function edEnterPage(){
  document.body._edBackY=window.scrollY||0;
  document.body.classList.add("ed-page");
  document.body.style.overflow="";              // 문서가 굴러야 하므로 잠그지 않는다
  try{window.scrollTo({top:0,behavior:"auto"});}catch(e){window.scrollTo(0,0);}
}
function edLeavePage(){
  if(!document.body.classList.contains("ed-page"))return;
  document.body.classList.remove("ed-page");
  var back=document.body._edBackY||0;
  try{window.scrollTo({top:back,behavior:"auto"});}catch(e){window.scrollTo(0,back);}
}

/* 서식 패널 안에서 '기본 / 글꼴 / 크기' 세 화면을 같은 한 줄 자리에서 바꿔 낀다.
   ⚠️ <select>의 네이티브 팝업을 쓰지 않는 이유 — 모바일에서 화면 절반을 덮는 별도 창이 뜨고,
      그동안 본문이 안 보여 무엇에 적용되는지 알 수 없다. 여기서는 줄만 바뀌므로 본문이 계속 보인다. */
function edFmtView(which){
  var ids={main:"edFmtMain",font:"edFmtFont",size:"edFmtSize"};
  Object.keys(ids).forEach(function(k){
    var el=document.getElementById(ids[k]);if(!el)return;
    if(k===which)el.removeAttribute("hidden");else el.setAttribute("hidden","");
  });
  if(which==="font")edEnsureWebFonts();
  var sub=document.getElementById(ids[which]);
  if(sub)sub.scrollLeft=0;  // 다시 열 때 항상 왼쪽부터
}
/* 도크는 flex 자식이라 본문 영역이 알아서 줄어든다 — 여백 보정이 필요 없다.
   (예전엔 fixed라 .ed-scroll에 padding-bottom을 계산해 넣어야 했다) */

/* ── 링크 넣기 ── */
function edInsertLink(){
  var url=prompt("링크 주소를 입력해 주세요","https://");
  if(!url)return;
  url=url.trim();
  if(!/^https?:\/\//i.test(url)){toast("http:// 또는 https:// 로 시작하는 주소만 넣을 수 있어요");return;}
  var ed=document.getElementById("wContent");if(!ed)return;
  restoreEditorSelection();
  var sel=window.getSelection();if(!sel||!sel.rangeCount)return;
  var r=sel.getRangeAt(0);
  if(!ed.contains(r.commonAncestorContainer))return;
  var a=document.createElement("a");
  a.setAttribute("href",url);
  if(sel.isCollapsed){
    a.textContent=url;              // 고른 글자가 없으면 주소를 그대로 글자로
    r.insertNode(a);
  }else{
    try{r.surroundContents(a);}
    catch(e){a.appendChild(r.extractContents());r.insertNode(a);}
  }
  var after=document.createRange();after.setStartAfter(a);after.collapse(true);
  sel.removeAllRanges();sel.addRange(after);
  advanceSavedSelection();
  edSaveDraftSoon();
  toast("링크를 넣었어요","🔗");
}

/* ── 이모티콘 넣기 (본문은 contenteditable이라 댓글용 피커와 삽입 방식이 다르다) ── */
function edPickEmoticon(){
  saveEditorSelection();
  openEmoticonPicker("__editor__");
}
function edInsertEmoticonImg(url){
  var ed=document.getElementById("wContent");if(!ed)return;
  restoreEditorSelection();
  var img=document.createElement("img");
  img.setAttribute("src",url);
  // ⚠️ class는 살균기가 값까지 제한하지만, 크기는 style로 박아 둬야 글 상세에서도 그대로 보인다
  img.setAttribute("style","width:120px;height:auto;display:inline-block;vertical-align:middle;margin:2px");
  var sel=window.getSelection();if(!sel||!sel.rangeCount)return;
  var r=sel.getRangeAt(0);
  if(!ed.contains(r.commonAncestorContainer)){r=document.createRange();r.selectNodeContents(ed);r.collapse(false);}
  r.deleteContents();r.insertNode(img);
  var after=document.createRange();after.setStartAfter(img);after.collapse(true);
  sel.removeAllRanges();sel.addRange(after);
  advanceSavedSelection();
  edSaveDraftSoon();
}

/* ── 파일 첨부 ── */
function pickAttachFile(e){
  e.preventDefault();
  saveEditorSelection();
  document.getElementById("edAttachFile").click();
}
function fmtBytes(n){
  if(n<1024)return n+"B";
  if(n<1024*1024)return (n/1024).toFixed(0)+"KB";
  return (n/1024/1024).toFixed(1)+"MB";
}
async function onAttachFile(e){
  var f=(e.target.files||[])[0];
  e.target.value="";
  if(!f)return;
  if(f.size>MAX_IMAGE_BYTES){toast("40MB 이하 파일만 올릴 수 있어요");return;}
  // 이미지를 고르면 그냥 본문 그림으로 넣어 준다(사용자가 '파일'로 골랐다고 첨부칩이 되면 어색하다)
  if(ALLOWED_IMAGE_TYPES.indexOf(f.type)>-1){await uploadAndInsertImage(f);return;}
  toast("파일 올리는 중…");
  var url=await uploadToStorage(f,"file");
  if(!url)return;
  var ed=document.getElementById("wContent");if(!ed)return;
  restoreEditorSelection();
  var a=document.createElement("a");
  a.setAttribute("href",url);
  a.setAttribute("class","ed-file");
  a.setAttribute("download","");
  a.textContent="📎 "+f.name+" ("+fmtBytes(f.size)+")";
  var sel=window.getSelection();if(!sel||!sel.rangeCount)return;
  var r=sel.getRangeAt(0);
  if(!ed.contains(r.commonAncestorContainer)){r=document.createRange();r.selectNodeContents(ed);r.collapse(false);}
  r.deleteContents();
  var br=document.createElement("br");
  r.insertNode(br);r.insertNode(a);
  var after=document.createRange();after.setStartAfter(br);after.collapse(true);
  sel.removeAllRanges();sel.addRange(after);
  advanceSavedSelection();
  edSaveDraftSoon();
  toast("파일을 첨부했어요","📎");
}
function loadImageFromFile(file){
  return new Promise(function(resolve,reject){
    var img=new Image();
    var url=URL.createObjectURL(file);
    img.onload=function(){URL.revokeObjectURL(url);resolve(img);};
    img.onerror=function(err){URL.revokeObjectURL(url);reject(err);};
    img.src=url;
  });
}
/* ===== 파일 저장소 (Cloudflare R2) =====
   예전엔 supabase.storage에 직접 올렸다. 이제는 서버에서 짧은 수명의 서명 URL을 받아
   브라우저가 R2로 **직접** PUT 한다. 파일이 우리 서버를 거치지 않으므로
   Vercel의 요청 본문 제한(4.5MB)에 걸리지 않고, 40MB짜리 GIF도 올라간다.

   저장 경로는 서버가 정한다(클라이언트가 경로를 고르면 남의 파일을 덮어쓸 수 있다).
   성공하면 공개 주소를, 실패하면 null을 돌려주고 안내는 여기서 띄운다. */
/* ===== 목록용 썸네일 =====================================================
   목록은 167px 칸에 219KB 원본을 통째로 내려받고 있었다(3회차 점검).
   업로드할 때 작은 webp를 하나 더 만들어 원본 키 + ".thumb.webp" 로 올린다.
   ⚠️ DB에 기록하지 않는다 — 썸네일 주소는 원본 주소에서 **유도**한다(thumbOf).
      옛 이미지는 썸네일이 없어 404가 나는데, 그때 thumbFail이 원본으로 바꿔 끼운다.
   ⚠️ GIF도 첫 프레임으로 정지 썸네일을 만든다 — 목록에서 GIF 원본(수 MB~수십 MB)을
      받는 게 가장 큰 전송량이었다. 원본 보기(뷰어·상세)는 그대로 움직인다. */
/* 썸네일을 **두 규격**으로 만든다 — 한 규격으로는 폰과 PC를 동시에 만족시킬 수 없다.
     sm(360px) : 배율 1인 화면(대부분의 PC 모니터)용. 카드가 220px 안팎이라 이게 딱 맞는다.
     lg(720px) : 배율 2~3인 화면(폰·레티나)용. 같은 카드가 실제로는 330~500px다.
   ⚠️ 한 규격만 두면 반드시 한쪽이 깨진다. 360만 두면 폰에서 확대돼 뭉개지고(2026-08-15 신고),
      720만 두면 PC에서 원본급을 3배 넘게 줄이게 돼 선화가 계단처럼 깨진다(2026-08-15 PC 신고).
   ⚠️ 원본은 한 번만 디코딩하고 캔버스만 두 번 그린다 — 큰 이미지를 두 번 읽으면 폰에서 느리다. */
async function makeThumbBlobs(blob){
  var none={sm:null,lg:null};
  try{
    var img=await loadImageFromFile(blob);
    var w0=img.naturalWidth,h0=img.naturalHeight;
    if(!w0||!h0)return none;
    async function at(maxSide){
      var w=w0,h=h0,longSide=Math.max(w,h);
      // 원본이 이미 작으면 키우지 않는다 — 확대해 봐야 화질은 그대로고 용량만 는다
      if(longSide>maxSide){var sc=maxSide/longSide;w=Math.round(w*sc);h=Math.round(h*sc);}
      var c=document.createElement("canvas");c.width=w;c.height=h;
      c.getContext("2d").drawImage(img,0,0,w,h);
      var t=await canvasToBlob(c,"image/webp",0.82); // 0.72는 그림에서 뭉개짐이 보였다
      if(!t||t.type!=="image/webp")return null;   // webp를 못 만드는 브라우저면 썸네일 없이 감
      if(t.size>=blob.size)return null;           // 원본보다 크면 의미가 없다(아주 작은 원본)
      return t;
    }
    return {sm:await at(360),lg:await at(720)};
  }catch(e){return none;}
}
async function uploadToStorage(blob,folder){
  if(!window.supabase){toast("업로드를 사용할 수 없어요");return null;}
  var sess=await window.supabase.auth.getSession();
  var token=sess.data.session?sess.data.session.access_token:null;
  if(!token){toast("로그인이 필요해요");return null;}
  var type=blob.type||"application/octet-stream";
  // 이미지 슬롯이면 썸네일도 준비(파일 첨부·비이미지는 제외). 실패해도 원본 업로드는 계속.
  var th=(folder!=="file"&&/^image\//.test(type))?await makeThumbBlobs(blob):{sm:null,lg:null};
  try{
    var r=await fetch("/api/storage/upload-url",{
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
      body:JSON.stringify({folder:folder,contentType:type,size:blob.size,
        thumbSize:th.sm?th.sm.size:0,thumb2Size:th.lg?th.lg.size:0})
    });
    var j=null;try{j=await r.json();}catch(e){}
    if(!r.ok||!j||!j.ok){toast("업로드 실패: "+((j&&j.message)||"잠시 후 다시 시도해주세요"));return null;}
    // 서명에 Content-Type이 포함돼 있으므로 여기서도 같은 값을 보내야 한다
    var put=await fetch(j.uploadUrl,{method:"PUT",body:blob,headers:{"Content-Type":type}});
    if(!put.ok){toast("업로드 실패: 파일을 저장하지 못했어요");return null;}
    // 썸네일은 곁다리 — 실패해도 원본은 이미 올라갔으니 업로드 전체를 실패시키지 않는다
    // (썸네일이 없으면 목록에서 404 → thumbFail이 원본으로 대체하므로 동작엔 지장 없음)
    if(th.sm&&j.thumbUploadUrl){
      try{await fetch(j.thumbUploadUrl,{method:"PUT",body:th.sm,headers:{"Content-Type":"image/webp"}});}catch(e){}
    }
    if(th.lg&&j.thumb2UploadUrl){
      try{await fetch(j.thumb2UploadUrl,{method:"PUT",body:th.lg,headers:{"Content-Type":"image/webp"}});}catch(e){}
    }
    return j.publicUrl;
  }catch(e){
    toast("업로드 실패: 네트워크를 확인해주세요");return null;
  }
}
/* 원본 주소 → 썸네일 주소. 우리 저장소(이미지 도메인) 주소일 때만 — 외부·데모 주소는 그대로.
   썸네일 주소는 DB에 없고 원본 주소에서 **유도**한다(접미사를 붙인다).
   THUMB_SM=360px / THUMB_LG=720px 두 규격이 있고, 화면 배율로 무엇을 먼저 쓸지 고른다.

   ⚠️ 세대 번호를 올려서 규격을 바꾸는 방식은 쓰지 말 것. 2026-08-15에 thumb→thumb2로
      올렸더니 **이미 올라가 있던 썸네일이 전부 404가 되어** 모든 카드가 1800px 원본을
      받았다. PC(배율 1)에서는 그걸 219px 칸에 넣느라 4.9배 축소가 일어나 선화가 깨졌다.
      규격을 늘릴 땐 **접미사를 새로 추가하고 옛 것을 후보로 남긴다.** */
var THUMB_SM=".thumb.webp";   // 360px — 배율 1 (대부분의 PC 모니터, 카드 220px 안팎)
var THUMB_LG=".thumb2.webp";  // 720px — 배율 2~3 (폰·레티나, 같은 카드가 실제 330~500px)
/* ⚠️⚠️ 썸네일 주소 뒤에 붙이는 판 번호. **이미지 서버가 404 응답에도
   `Cache-Control: max-age=31536000`(1년)을 붙인다**(2026-08-15 실측). 그래서 썸네일이
   아직 없을 때 그 주소를 한 번 요청한 브라우저는 **1년 동안 404를 기억하고**, 나중에
   썸네일을 만들어 둬도 계속 원본으로 폴백한다(백필을 돌리고도 안 바뀌어서 발견).
   판 번호를 올리면 주소가 달라져 그 죽은 캐시를 통째로 건너뛴다.
   → 썸네일을 대량으로 새로 만든 뒤에는 이 번호를 올릴 것.
   ※ 근본 해결은 Cloudflare 캐시 규칙에서 **404에 긴 TTL을 주지 않게** 고치는 것이다. */
var THUMB_V="?v=2";
/* 시도할 주소를 우선순위대로. 앞의 것이 404면 thumbFail 이 다음으로 넘어간다.
   ⚠️⚠️ **화면 배율만 보고 고르면 안 된다. 카드는 정사각으로 잘라 쓰므로(object-fit:cover)
      실제로 필요한 건 '짧은 변'인데, 썸네일 규격(360/720)은 '긴 변' 기준이다.**
      1083×1800 같은 세로 그림이면 sm(긴 변 360)의 짧은 변은 **217px밖에 안 된다.**
      PC 카드가 250px이니 줄어드는 게 아니라 **확대**돼서 뭉개진다. 2026-08-15에
      "PC는 배율 1이니 360이면 충분"이라고 판단한 것이 바로 이 착각이었다.
      (게다가 같은 날 카드를 219→250px로 키워서 더 나빠졌다.)
   → 그래서 **어느 배율에서든 lg(720)를 먼저 쓴다.** 720의 짧은 변은 세로 그림도 430px 안팎이라
      250px 카드를 넉넉히 덮는다. sm은 lg가 없을 때의 보조 후보로만 남긴다.
   ⚠️ 규격이나 카드 크기를 바꿀 땐 **긴 변이 아니라 짧은 변으로** 검산할 것.
      세로 3:5 그림 기준 짧은 변 ≈ 긴 변 × 0.6.
   ⚠️ 판 번호는 썸네일에만 붙인다 — 원본은 늘 200이라 죽은 캐시가 생길 일이 없다. */
function thumbChain(u){
  if(!u||typeof u!=="string")return [u];
  if(u.indexOf("img.commi.kr")===-1&&u.indexOf("r2.dev")===-1)return [u];
  if(/\.thumb\d*\.webp$/.test(u))return [u];
  return ((window.devicePixelRatio||1)>1.25)
    ? [u+THUMB_LG+THUMB_V,u]                        // 폰·레티나 — sm은 너무 작아 후보로도 안 쓴다
    : [u+THUMB_LG+THUMB_V,u+THUMB_SM+THUMB_V,u];    // PC
}
/* 404면 다음 후보로. 남은 후보를 data-alts에 담아 두고 하나씩 꺼낸다.
   ⚠️ 마지막 후보(원본)에서 또 실패하면 onerror를 비워 무한 반복을 막는다.
   ⚠️ 구분자가 공백인 것은 안전하다 — URL에는 공백이 들어갈 수 없다(%20으로 인코딩된다). */
function thumbFail(el){
  var alts=(el.getAttribute("data-alts")||"").split(" ").filter(Boolean);
  if(!alts.length){el.onerror=null;return;}
  var next=alts.shift();
  el.setAttribute("data-alts",alts.join(" "));
  if(!alts.length)el.onerror=null;
  el.src=next;
}
/* 목록 칸에 꽉 차게 들어가는 썸네일 img 태그. extra엔 class·style 등 추가 속성. */
function thumbImgHTML(u,extra){
  var chain=thumbChain(u);
  if(chain.length<2)return '<img src="'+esc(u)+'" alt="" loading="lazy" '+(extra||'')+'>'; // 유도 불가 주소
  return '<img src="'+esc(chain[0])+'" data-alts="'+esc(chain.slice(1).join(" "))+
    '" onerror="thumbFail(this)" alt="" loading="lazy" '+(extra||'')+'>';
}
// 커미션을 지울 때 딸린 이미지 정리. 실패해도 서비스 동작엔 지장 없으므로 조용히 넘어간다.
async function deleteFromStorage(urls){
  if(!urls||!urls.length||!window.supabase)return;
  try{
    var sess=await window.supabase.auth.getSession();
    var token=sess.data.session?sess.data.session.access_token:null;
    if(!token)return;
    await fetch("/api/storage/delete",{
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
      body:JSON.stringify({urls:urls})
    });
  }catch(e){}
}

/* ===== 이모티콘 =====
   회원이 만든 이모티콘을 팩 단위로 담아 댓글에서 쓴다.
   본문에는 주소가 아니라 `[[e:12]]` 같은 **번호 토큰만** 저장하고, 그릴 때 우리 DB의
   주소로만 바꾼다. 본문에 URL을 그대로 넣게 하면 외부 이미지를 심을 수 있기 때문. */
var EMO_BY_ID={};      // 번호 → {url} — 화면에 그릴 때 쓰는 캐시
var MY_EMO_PACKS=[];   // 내 이모티콘함(담아둔 팩)
var EMO_PICKER_TARGET=null; // 이모티콘을 넣을 입력창 id
var EMO_RECENT=[];          // 최근 쓴 이모티콘 번호(최신순) — 자주 쓰는 걸 앞에 두려고
try{var _er=JSON.parse(localStorage.getItem("palo_emo_recent")||"[]");if(Array.isArray(_er))EMO_RECENT=_er;}catch(e){}
function noteEmoticonUsed(id){
  EMO_RECENT=[id].concat(EMO_RECENT.filter(function(x){return x!==id;})).slice(0,20);
  try{localStorage.setItem("palo_emo_recent",JSON.stringify(EMO_RECENT));}catch(e){}
}

function emoIdsIn(text){
  var ids=[],m,re=/\[\[e:(\d+)\]\]/g;
  while((m=re.exec(String(text||""))))ids.push(Number(m[1]));
  return ids;
}
// 아직 모르는 번호만 골라 한 번에 채운다(댓글마다 조회하지 않도록)
async function ensureEmoticons(ids){
  if(!window.supabase||!ids||!ids.length)return;
  var need=[];
  ids.forEach(function(id){if(id&&!EMO_BY_ID[id]&&need.indexOf(id)<0)need.push(id);});
  if(!need.length)return;
  try{
    var r=await window.supabase.from("emoticons").select("id,url").in("id",need);
    (r.data||[]).forEach(function(e){EMO_BY_ID[e.id]={url:e.url};});
  }catch(e){}
}
// esc()를 거친 문자열에서 토큰만 이미지로 바꾼다.
// 모르는 번호(지워진 이모티콘)는 조용히 지운다.
function withEmoticons(escapedText){
  return String(escapedText).replace(/\[\[e:(\d+)\]\]/g,function(_,id){
    var e=EMO_BY_ID[id];
    if(!e)return "";
    return '<img class="emo" src="'+esc(e.url)+'" alt="이모티콘" loading="lazy">';
  });
}

async function loadMyEmoticons(){
  MY_EMO_PACKS=[];
  if(!AUTH.user||!window.supabase)return;
  try{
    var mine=await window.supabase.from("user_emoticon_packs").select("pack_id").order("added_at",{ascending:false});
    var ids=(mine.data||[]).map(function(r){return r.pack_id;});
    if(!ids.length)return;
    var res=await Promise.all([
      window.supabase.from("emoticon_packs").select("id,title,status").in("id",ids),
      window.supabase.from("emoticons").select("id,pack_id,url,sort").in("pack_id",ids).order("sort")
    ]);
    var byId={};
    (res[0].data||[]).forEach(function(p){ if(p.status==="public")byId[p.id]={id:p.id,title:p.title,items:[]}; });
    (res[1].data||[]).forEach(function(e){
      EMO_BY_ID[e.id]={url:e.url};
      if(byId[e.pack_id])byId[e.pack_id].items.push({id:e.id,url:e.url});
    });
    MY_EMO_PACKS=ids.map(function(id){return byId[id];}).filter(Boolean); // 담은 순서 유지
  }catch(e){}
}

/* ── 피커 ── */
function openEmoticonPicker(targetInputId){
  if(!AUTH.user){toast("로그인이 필요해요");return;}
  EMO_PICKER_TARGET=targetInputId;
  var m=document.getElementById("emoPicker");if(!m)return;
  renderEmoticonPicker();
  m.classList.add("open");
}
function closeEmoticonPicker(){
  var m=document.getElementById("emoPicker");if(m)m.classList.remove("open");
  EMO_PICKER_TARGET=null;
}
var _emoTab=0;
function renderEmoticonPicker(){
  var body=document.getElementById("emoPickerBody");if(!body)return;
  if(!MY_EMO_PACKS.length){
    body.innerHTML='<div class="emo-empty">담아둔 이모티콘이 없어요.<br>'+
      '<button class="emo-go" onclick="closeEmoticonPicker();openEmoticonMarket()">이모티콘 둘러보기</button></div>';
    return;
  }
  if(_emoTab>=MY_EMO_PACKS.length)_emoTab=0;
  var tabs=MY_EMO_PACKS.map(function(p,i){
    return '<button class="emo-tab'+(i===_emoTab?' on':'')+'" onclick="_emoTab='+i+';renderEmoticonPicker()">'+esc(p.title)+'</button>';
  }).join("");
  var pack=MY_EMO_PACKS[_emoTab];
  var grid=pack.items.map(function(e){
    return '<button class="emo-cell" onclick="pickEmoticon('+e.id+')"><img src="'+esc(e.url)+'" alt="" loading="lazy"></button>';
  }).join("")||'<div class="emo-empty">이 팩은 비어 있어요.</div>';
  body.innerHTML='<div class="emo-tabs">'+tabs+'</div><div class="emo-grid">'+grid+'</div>';
}
// 입력창 커서 위치에 토큰을 넣는다
function pickEmoticon(id,target){
  noteEmoticonUsed(id);
  var t=target||EMO_PICKER_TARGET;
  // 글 본문은 <input>이 아니라 contenteditable이라 토큰이 아니라 <img>로 직접 넣는다
  if(t==="__editor__"){
    var e=EMO_BY_ID[id];
    if(e&&e.url)edInsertEmoticonImg(e.url);
    closeEmoticonPicker();
    return;
  }
  var inp=document.getElementById(t||"cmInput");
  if(!inp){closeEmoticonPicker();return;}
  var tok="[[e:"+id+"]]";
  var s=inp.selectionStart==null?inp.value.length:inp.selectionStart;
  var e=inp.selectionEnd==null?s:inp.selectionEnd;
  inp.value=inp.value.slice(0,s)+tok+inp.value.slice(e);
  var pos=s+tok.length;
  try{inp.setSelectionRange(pos,pos);}catch(err){}
  inp.focus();
  closeEmoticonPicker();
}

/* 입력칸 아래에 담아둔 이모티콘을 바로 펼쳐 둔다.
   버튼을 눌러 창을 여는 것보다 한 번 덜 누르고, 이모티콘이 있다는 걸 눈으로 알 수 있다. */
function emoStripHTML(target){
  var t=target||"cmInput";
  var owned={};
  MY_EMO_PACKS.forEach(function(p){p.items.forEach(function(e){owned[e.id]=e;});});
  // 최근 쓴 것 → 나머지 순. 매번 팩을 넘기지 않아도 자주 쓰는 게 바로 잡힌다.
  var flat=[],seen={};
  EMO_RECENT.forEach(function(id){if(owned[id]&&!seen[id]&&flat.length<14){flat.push(owned[id]);seen[id]=1;}});
  MY_EMO_PACKS.forEach(function(p){
    p.items.forEach(function(e){if(!seen[e.id]&&flat.length<14){flat.push(e);seen[e.id]=1;}});
  });
  if(!flat.length){
    return '<button type="button" class="emo-strip-go" onclick="openEmoticonMarket()">🙂 이모티콘 담으러 가기</button>';
  }
  return flat.map(function(e){
    return '<button type="button" class="emo-s" onclick="pickEmoticon('+e.id+',&quot;'+t+'&quot;)"><img src="'+esc(e.url)+'" alt="" loading="lazy"></button>';
  }).join("")+'<button type="button" class="emo-s more" onclick="openEmoticonPicker(&quot;'+t+'&quot;)" aria-label="이모티콘 전체 보기">⋯</button>';
}
// 이모티콘함이 바뀌면 열려 있는 댓글 입력줄도 갱신
function refreshEmoStrip(){
  var cm=document.querySelector(".emo-strip:not(.chat)");
  if(cm)cm.innerHTML=emoStripHTML("cmInput");
  var ch=document.getElementById("chatEmoStrip");
  if(ch)ch.innerHTML=emoStripHTML("chatInput");
}

/* ── 내 이모티콘 관리 ── */
async function openEmoticonManage(){
  if(!AUTH.user||!window.supabase){toast("로그인이 필요해요");return;}
  emoEditPackId=null;
  enterScreen("emoManage",openEmoticonMarket);
  document.getElementById("main").innerHTML='<div class="profile"><div class="pf-sec">🗂 이모티콘 관리</div><div class="pf-empty">불러오는 중…</div></div>';
  var res=await Promise.all([
    window.supabase.from("emoticon_packs").select("id,title,status,created_at").eq("author_id",AUTH.user.id).order("created_at",{ascending:false}),
    window.supabase.from("user_emoticon_packs").select("pack_id")
  ]);
  var made=res[0].data||[];
  var addedIds=(res[1].data||[]).map(function(r){return r.pack_id;});
  var madeIds=made.map(function(p){return p.id;});
  var cntRes=madeIds.length?await window.supabase.from("emoticons").select("id,pack_id").in("pack_id",madeIds):{data:[]};
  var cnt={};(cntRes.data||[]).forEach(function(e){cnt[e.pack_id]=(cnt[e.pack_id]||0)+1;});
  // 담은 팩 중 내가 만들지 않은 것(내가 만든 건 위에 이미 나옴)
  var otherIds=addedIds.filter(function(id){return madeIds.indexOf(id)<0;});
  var otherRes=otherIds.length?await window.supabase.from("emoticon_packs").select("id,title").in("id",otherIds):{data:[]};

  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 이모티콘으로</button>'+
    '<div class="pf-sec">✏️ 내가 만든 이모티콘 ('+made.length+')</div>';
  h+= made.length ? made.map(function(p){
    return '<div class="emo-mrow"><div class="emo-mname">'+esc(p.title)+
      '<span class="emo-msub">'+(cnt[p.id]||0)+'개'+(p.status!=="public"?' · 비공개 처리됨':'')+'</span></div>'+
      '<div class="emo-macts">'+
        '<button class="d-act" onclick="openEmoticonPackEdit('+p.id+')">편집</button>'+
        '<button class="d-act" onclick="renameEmoticonPack('+p.id+',&quot;'+esc(p.title).replace(/"/g,"&quot;")+'&quot;)">이름 변경</button>'+
        '<button class="d-act" onclick="deleteEmoticonPack('+p.id+')">삭제</button>'+
      '</div></div>';
  }).join("") : '<div class="pf-empty">아직 만든 이모티콘이 없어요.</div>';

  h+='<div class="pf-sec" style="margin-top:20px">📥 담아둔 이모티콘 ('+(otherRes.data||[]).length+')</div>';
  h+= (otherRes.data||[]).length ? (otherRes.data||[]).map(function(p){
    return '<div class="emo-mrow"><div class="emo-mname">'+esc(p.title)+'</div>'+
      '<div class="emo-macts"><button class="d-act" onclick="unaddEmoticonPack('+p.id+')">빼기</button></div></div>';
  }).join("") : '<div class="pf-empty">담아둔 이모티콘이 없어요.</div>';
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
var emoEditPackId=null; // 편집 중인 팩(파일 선택 시 이 팩에 바로 넣는다)
async function openEmoticonPackEdit(packId){
  if(!AUTH.user||!window.supabase)return;
  emoEditPackId=packId;
  enterScreen("emoPackEdit",openEmoticonManage);
  document.getElementById("main").innerHTML='<div class="profile"><div class="pf-sec">✏️ 팩 편집</div><div class="pf-empty">불러오는 중…</div></div>';
  await renderEmoticonPackEdit();
}
async function renderEmoticonPackEdit(){
  var res=await Promise.all([
    window.supabase.from("emoticon_packs").select("id,title").eq("id",emoEditPackId).single(),
    window.supabase.from("emoticons").select("id,url,sort").eq("pack_id",emoEditPackId).order("sort")
  ]);
  var pack=res[0].data,items=res[1].data||[];
  if(!pack){toast("팩을 찾을 수 없어요");screenBack();return;}
  var grid=items.map(function(e){
    return '<div class="emo-slot"><img src="'+esc(e.url)+'" alt="">'+
      '<button class="emo-del" onclick="removeEmoticonFromPack('+e.id+')">×</button></div>';
  }).join("");
  document.getElementById("main").innerHTML='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 관리로</button>'+
    '<div class="pf-sec">✏️ '+esc(pack.title)+'</div>'+
    '<p class="nick-hint">× 를 눌러 잘못 넣은 이모티콘을 뺄 수 있어요. 최소 1개는 남아야 합니다.</p>'+
    '<div class="emo-slots">'+grid+
      (items.length<24?'<button class="emo-slot add" onclick="document.getElementById(&quot;emoFile&quot;).click()">+</button>':'')+
    '</div>'+
    '<p class="nick-hint">현재 '+items.length+'개 / 최대 24개</p>'+
    '</div>';
}
async function removeEmoticonFromPack(emoId){
  var cnt=await window.supabase.from("emoticons").select("id").eq("pack_id",emoEditPackId);
  if((cnt.data||[]).length<=1){toast("최소 1개는 남아야 해요");return;}
  if(!(await confirmDialog("이 이모티콘을 팩에서 뺄까요?")))return;
  var row=(cnt.data||[]).find(function(x){return x.id===emoId;});
  var urlRes=await window.supabase.from("emoticons").select("url").eq("id",emoId).single();
  var r=await window.supabase.from("emoticons").delete({count:"exact"}).eq("id",emoId);
  if(!r.error&&r.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(r.error){toast("실패: "+r.error.message);return;}
  if(urlRes.data&&urlRes.data.url)deleteFromStorage([urlRes.data.url]); // 저장소 파일도 정리
  delete EMO_BY_ID[emoId];
  await loadMyEmoticons();refreshEmoStrip();
  toast("뺐어요");
  renderEmoticonPackEdit();
}
async function renameEmoticonPack(id,cur){
  var v=prompt("팩 이름을 입력하세요",cur||"");
  if(v==null)return;
  v=v.trim();
  if(v.length<2){toast("2자 이상 적어주세요");return;}
  var r=await window.supabase.from("emoticon_packs").update({title:v},{count:"exact"}).eq("id",id);
  if(!r.error&&r.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(r.error){toast("변경 실패: "+r.error.message);return;}
  toast("이름을 바꿨어요");
  await loadMyEmoticons();
  openEmoticonManage();
}
async function deleteEmoticonPack(id){
  if(!(await confirmDialog("이 이모티콘 팩을 삭제할까요? 담아간 사람들에게서도 사라지고, 이미 쓴 댓글에서는 보이지 않게 됩니다.")))return;
  // 지우기 전에 파일 주소를 모아둔다(행이 사라지면 알 수 없다)
  var urls=[];
  try{
    var u=await window.supabase.from("emoticons").select("url").eq("pack_id",id);
    urls=(u.data||[]).map(function(x){return x.url;}).filter(Boolean);
  }catch(e){}
  var r=await window.supabase.from("emoticon_packs").delete({count:"exact"}).eq("id",id);
  if(!r.error&&r.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(r.error){toast("삭제 실패: "+r.error.message);return;}
  if(urls.length)deleteFromStorage(urls); // 저장소에 파일만 남지 않게
  toast("삭제했어요","🗑");
  await loadMyEmoticons();refreshEmoStrip();
  openEmoticonManage();
}
async function unaddEmoticonPack(id){
  var r=await window.supabase.from("user_emoticon_packs").delete({count:"exact"}).eq("user_id",AUTH.user.id).eq("pack_id",id);
  if(!r.error&&r.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(r.error){toast("실패: "+r.error.message);return;}
  toast("이모티콘함에서 뺐어요");
  await loadMyEmoticons();
  openEmoticonManage();
}

/* ── 이모티콘 둘러보기 ── */
var EMO_MARKET=[]; // 공개된 팩 목록
var EMO_SORT="hot";   // hot(인기순) / new(최신순)
var EMO_QUERY="";
async function openEmoticonMarket(){
  if(!window.supabase)return;
  enterScreen("emoMarket",openProfile); // 뒤로가기가 프로필로 복귀
  document.getElementById("main").innerHTML='<div class="profile"><div class="pf-sec">🙂 이모티콘</div><div class="pf-empty">불러오는 중…</div></div>';
  await reloadEmoticonMarket();
}
async function reloadEmoticonMarket(){
  // 인기순은 점수를 계산해 둔 뷰(emoticon_pack_rank)에서 가져온다.
  // 점수 = 최근 사용 40% + 최근 담김 30% + 누적 사용 20% + 누적 담김 10% (+ 신규 보정)
  var hot=(EMO_SORT==="hot");
  var q=window.supabase.from(hot?"emoticon_pack_rank":"emoticon_packs")
    .select(hot?"id,title,author_id,created_at,saved_count,use_count,recent_saves,recent_uses,score"
               :"id,title,author_id,created_at,saved_count,use_count")
    .eq("status","public");
  if(EMO_QUERY)q=q.ilike("title","%"+EMO_QUERY+"%");
  q=hot?q.order("score",{ascending:false}).order("created_at",{ascending:false})
       :q.order("created_at",{ascending:false});
  var res=await Promise.all([
    q.limit(60),
    AUTH.user?window.supabase.from("user_emoticon_packs").select("pack_id"):Promise.resolve({data:[]})
  ]);
  // 3차 SQL을 아직 실행하지 않아 점수 뷰가 없으면, 담은 수 기준으로라도 보여준다
  if(hot&&res[0].error){
    res[0]=await window.supabase.from("emoticon_packs")
      .select("id,title,author_id,created_at,saved_count")
      .eq("status","public").order("saved_count",{ascending:false}).limit(60);
  }
  var packs=res[0].data||[];
  var mineSet={};(res[1].data||[]).forEach(function(r){mineSet[r.pack_id]=true;});
  var ids=packs.map(function(p){return p.id;});
  var itemsRes=ids.length?await window.supabase.from("emoticons").select("id,pack_id,url,sort").in("pack_id",ids).order("sort"):{data:[]};
  var byPack={};
  (itemsRes.data||[]).forEach(function(e){
    EMO_BY_ID[e.id]={url:e.url};
    (byPack[e.pack_id]=byPack[e.pack_id]||[]).push(e);
  });
  var authorIds=Array.from(new Set(packs.map(function(p){return p.author_id;}).filter(Boolean)));
  var profRes=authorIds.length?await window.supabase.from("profiles").select("id,nickname").in("id",authorIds):{data:[]};
  var nick={};(profRes.data||[]).forEach(function(p){nick[p.id]=p.nickname;});
  EMO_MARKET=packs.map(function(p){
    return {id:p.id,title:p.title,author:nick[p.author_id]||"알 수 없음",authorId:p.author_id,
      saved:p.saved_count||0,used:p.use_count||0,recentUses:p.recent_uses||0,
      items:byPack[p.id]||[],count:(byPack[p.id]||[]).length,mine:!!mineSet[p.id]};
  });
  renderEmoticonMarket();
}
function renderEmoticonMarket(){
  var isAdmin=!!(AUTH.profile&&AUTH.profile.is_admin);
  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
    '<div class="pf-sec">🙂 이모티콘</div>'+
    (AUTH.user?'<button class="pf-edit" onclick="openEmoticonStudio()">+ 내 이모티콘 만들기</button>'+
      '<button class="pf-edit" onclick="openEmoticonManage()" style="margin:8px 0 4px">🗂 내 이모티콘 관리</button>':'')+
    '<div class="emo-search">'+
      '<input id="emoSearchInput" placeholder="이모티콘 이름 검색" value="'+esc(EMO_QUERY)+'" '+
        'onkeydown="if(event.key===&quot;Enter&quot;)doEmoticonSearch()">'+
      '<button onclick="doEmoticonSearch()">검색</button>'+
      (EMO_QUERY?'<button class="clear" onclick="clearEmoticonSearch()">×</button>':'')+
    '</div>'+
    '<div class="emo-sorts">'+
      '<button class="emo-sort'+(EMO_SORT==="hot"?" on":"")+'" onclick="setEmoticonSort(&quot;hot&quot;)">🔥 인기순</button>'+
      '<button class="emo-sort'+(EMO_SORT==="new"?" on":"")+'" onclick="setEmoticonSort(&quot;new&quot;)">🆕 최신순</button>'+
    '</div>'+
    (EMO_SORT==="hot"&&!EMO_QUERY?'<p class="emo-rank-note">최근에 실제로 쓰인 이모티콘을 먼저 보여줘요</p>':'');
  if(!EMO_MARKET.length){
    h+='<div class="pf-empty">'+(EMO_QUERY?'검색 결과가 없어요.':'아직 등록된 이모티콘이 없어요.<br>처음으로 만들어보세요!')+'</div>';
  }else{
    h+=EMO_MARKET.map(function(p,i){
      // 인기순으로 볼 때, 검색 중이 아니면 상위 3개에 순위를 붙인다
      var rank=(EMO_SORT==="hot"&&!EMO_QUERY&&i<3)?'<span class="emo-rank r'+(i+1)+'">'+(i+1)+'</span>':'';
      var prev=p.items.slice(0,6).map(function(e){return '<img src="'+esc(e.url)+'" alt="" loading="lazy">';}).join("");
      return '<div class="emo-pack">'+
        '<div class="emo-pack-head">'+
          '<div class="emo-pack-info" onclick="openEmoticonPack('+p.id+')">'+rank+
            '<div><div class="emo-pack-title">'+esc(p.title)+'</div>'+
            '<div class="emo-pack-sub">'+esc(p.author)+' · '+p.count+'개 · 담음 '+p.saved+' · 사용 '+p.used+'</div></div></div>'+
          (AUTH.user?'<button class="emo-add'+(p.mine?' on':'')+'" onclick="togglePack('+p.id+')">'+(p.mine?'담음':'담기')+'</button>':'')+
        '</div>'+
        '<div class="emo-pack-prev" onclick="openEmoticonPack('+p.id+')">'+prev+'</div>'+
        '<div class="emo-pack-foot">'+
          (AUTH.user?'<button onclick="reportEmoticonPack('+p.id+')">🚩 신고</button>':'')+
          (isAdmin?'<button class="danger" onclick="adminDeleteEmoticonPack('+p.id+')">삭제</button>':'')+
        '</div></div>';
    }).join("");
  }
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
function setEmoticonSort(v){EMO_SORT=v;reloadEmoticonMarket();}
function doEmoticonSearch(){
  var el=document.getElementById("emoSearchInput");
  EMO_QUERY=el?el.value.trim():"";
  reloadEmoticonMarket();
}
function clearEmoticonSearch(){EMO_QUERY="";reloadEmoticonMarket();}

// 팩 상세 — 미리보기 6개 말고 전부 보기
function openEmoticonPack(packId){
  var p=EMO_MARKET.find(function(x){return x.id===packId;});if(!p)return;
  enterScreen("emoPack",openEmoticonMarket);
  _setScreenUrl("/emoticon/"+packId,p.title+" 이모티콘 · commi");
  var grid=p.items.map(function(e){return '<div class="emo-slot"><img src="'+esc(e.url)+'" alt=""></div>';}).join("");
  var isAdmin=!!(AUTH.profile&&AUTH.profile.is_admin);
  document.getElementById("main").innerHTML='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 이모티콘으로</button>'+
    '<div class="pf-sec">'+esc(p.title)+'</div>'+
    '<div class="emo-pack-sub" style="margin-bottom:12px">'+
      (p.authorId?'<span style="cursor:pointer;text-decoration:underline" onclick="openUserProfile(\''+p.authorId+'\')">'+esc(p.author)+'</span>':esc(p.author))+
      ' · '+p.count+'개 · 담음 '+p.saved+' · 사용 '+p.used+'</div>'+
    (AUTH.user?'<button class="pf-edit" onclick="togglePack('+p.id+')">'+(p.mine?'이모티콘함에서 빼기':'이모티콘함에 담기')+'</button>':'')+
    '<div class="emo-slots" style="margin-top:14px">'+grid+'</div>'+
    (AUTH.user?'<div class="emo-pack-foot" style="margin-top:10px"><button onclick="reportEmoticonPack('+p.id+')">🚩 신고</button>'+
      (isAdmin?'<button class="danger" onclick="adminDeleteEmoticonPack('+p.id+')">삭제</button>':'')+'</div>':'')+
    '</div>';
  window.scrollTo({top:0,behavior:"smooth"});
}

// 신고 — 기존 신고창을 그대로 쓴다(사유를 직접 적는 방식)
function reportEmoticonPack(packId){
  if(!AUTH.user){toast("로그인이 필요해요");return;}
  reportingEmoticonPackId=packId;
  document.getElementById("reportReasonInput").value="";
  _resetReportForm();
  document.getElementById("reportModal").classList.add("open");
}
// 관리자는 신고가 없어도 바로 내릴 수 있다
async function adminDeleteEmoticonPack(packId){
  if(!(AUTH.profile&&AUTH.profile.is_admin))return;
  if(!(await confirmDialog("이 이모티콘 팩을 삭제할까요? 담아간 사람들에게서도 사라집니다.")))return;
  var r=await window.supabase.from("emoticon_packs").delete({count:"exact"}).eq("id",packId);
  if(!r.error&&r.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(r.error){toast("삭제 실패: "+r.error.message);return;}
  await _logModeration("delete",null,null,"이모티콘 팩 #"+packId);
  toast("이모티콘을 삭제했어요","🗑");
  await loadMyEmoticons();refreshEmoStrip();
  reloadEmoticonMarket();
}


async function togglePack(packId){
  if(!AUTH.user){toast("로그인이 필요해요");return;}
  var p=EMO_MARKET.find(function(x){return x.id===packId;});if(!p)return;
  if(p.mine){
    var d=await window.supabase.from("user_emoticon_packs").delete({count:"exact"}).eq("user_id",AUTH.user.id).eq("pack_id",packId);
    if(!d.error&&d.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
    if(d.error){toast("실패: "+d.error.message);return;}
    p.mine=false;toast("이모티콘함에서 뺐어요");
  }else{
    var i=await window.supabase.from("user_emoticon_packs").insert({user_id:AUTH.user.id,pack_id:packId});
    if(i.error){toast("실패: "+i.error.message);return;}
    p.mine=true;toast("이모티콘함에 담았어요","🙂");
  }
  await loadMyEmoticons();
  refreshEmoStrip();
  renderEmoticonMarket();
}

/* ── 이모티콘 만들기 ── */
var emoStudio={title:"",images:[]};
function openEmoticonStudio(){
  if(!AUTH.user){toast("로그인이 필요해요");return;}
  emoStudio={title:"",images:[]};
  emoEditPackId=null; // 새로 만드는 중 — 파일 선택이 편집 팩으로 새지 않게
  enterScreen("emoStudio",openEmoticonMarket);
  renderEmoticonStudio();
}
function renderEmoticonStudio(){
  document.getElementById("main").innerHTML='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 이모티콘 목록으로</button>'+
    '<div class="pf-sec">✏️ 이모티콘 만들기</div>'+
    '<input id="emoTitle" class="nick-in" maxlength="20" placeholder="팩 이름 (예: 우리 고양이)" value="'+esc(emoStudio.title)+'" oninput="emoStudio.title=this.value">'+
    '<p class="nick-hint">투명 배경 PNG를 권장해요. 움직이는 GIF도 됩니다. 2~24개까지 넣을 수 있어요.</p>'+
    '<div class="emo-notice"><b>등록하면 모든 회원이 담아서 쓸 수 있어요.</b><br>'+
      '나만 쓰는 이모티콘으로는 만들 수 없어요. 직접 그렸거나 사용 허락을 받은 그림만 올려주세요 — '+
      '남의 그림을 올리면 저작권 침해로 삭제·제재될 수 있어요.</div>'+
    '<div class="emo-slots" id="emoSlots">'+emoSlotsHTML()+'</div>'+
    '<p class="login-hint" id="emoStudioHint"></p>'+
    '<button class="r-ok" id="emoSaveBtn" onclick="saveEmoticonPack()" style="margin-top:6px">이모티콘 등록</button>'+
    '</div>';
  window.scrollTo({top:0,behavior:"smooth"});
}
// 슬롯만 따로 그린다 — 이미지를 추가할 때 화면 전체를 다시 그리면
// 제목 입력칸이 사라지면서 입력 중이던 커서와 포커스가 날아간다.
function emoSlotsHTML(){
  var imgs=emoStudio.images.map(function(url,i){
    return '<div class="emo-slot"><img src="'+esc(url)+'" alt=""><button class="emo-del" onclick="emoRemoveImage('+i+')">×</button></div>';
  }).join("");
  return imgs+(emoStudio.images.length<24
    ? '<button class="emo-slot add" onclick="document.getElementById(&quot;emoFile&quot;).click()">+</button>' : '');
}
function renderEmoSlots(){
  var el=document.getElementById("emoSlots");
  if(el)el.innerHTML=emoSlotsHTML(); else renderEmoticonStudio();
}
function emoRemoveImage(i){emoStudio.images.splice(i,1);renderEmoSlots();}
async function onEmoticonFile(ev){
  var files=Array.from(ev.target.files||[]);ev.target.value="";
  if(!files.length)return;
  if(emoEditPackId){await addEmoticonsToPack(files);return;} // 팩 편집 중이면 그 팩에 바로 추가
  for(var i=0;i<files.length;i++){
    if(emoStudio.images.length>=24){toast("24개까지만 넣을 수 있어요");break;}
    var f=files[i];
    if(ALLOWED_IMAGE_TYPES.indexOf(f.type)===-1){toast("이미지 파일만 올릴 수 있어요");continue;}
    if(f.size>MAX_IMAGE_BYTES){toast("40MB 이하만 올릴 수 있어요");continue;}
    toast("올리는 중… ("+(i+1)+"/"+files.length+")");
    // GIF는 움직임이 깨지니 원본 그대로, 나머지는 줄여서 올린다
    var blob=f;
    if(f.type!=="image/gif"){
      try{var c=await compressImage(f);blob=c.blob;}catch(e){}
    }
    var url=await uploadToStorage(blob,"emoticon");
    if(!url)break;
    emoStudio.images.push(url);
    renderEmoSlots();
  }
  toast("이미지를 넣었어요");
}
// 이미 만든 팩에 이모티콘을 더 넣는다
async function addEmoticonsToPack(files){
  var cur=await window.supabase.from("emoticons").select("id,sort").eq("pack_id",emoEditPackId).order("sort");
  var n=(cur.data||[]).length;
  var nextSort=n?((cur.data[n-1].sort||0)+1):0;
  for(var i=0;i<files.length;i++){
    if(n>=24){toast("24개까지만 넣을 수 있어요");break;}
    var f=files[i];
    if(ALLOWED_IMAGE_TYPES.indexOf(f.type)===-1){toast("이미지 파일만 올릴 수 있어요");continue;}
    if(f.size>MAX_IMAGE_BYTES){toast("40MB 이하만 올릴 수 있어요");continue;}
    toast("올리는 중… ("+(i+1)+"/"+files.length+")");
    var blob=f;
    if(f.type!=="image/gif"){try{var c=await compressImage(f);blob=c.blob;}catch(e){}}
    var url=await uploadToStorage(blob,"emoticon");
    if(!url)break;
    var ins=await window.supabase.from("emoticons").insert({pack_id:emoEditPackId,url:url,sort:nextSort++});
    if(ins.error){toast("추가 실패: "+ins.error.message);break;}
    n++;
  }
  await loadMyEmoticons();refreshEmoStrip();
  toast("이모티콘을 추가했어요");
  renderEmoticonPackEdit();
}
async function saveEmoticonPack(){
  var hint=document.getElementById("emoStudioHint");
  var setHint=function(t){if(hint)hint.textContent=t||"";};
  var title=(emoStudio.title||"").trim();
  if(title.length<2){setHint("팩 이름을 2자 이상 적어주세요.");return;}
  if(emoStudio.images.length<2){setHint("이모티콘을 2개 이상 넣어주세요.");return;}
  if(!(await confirmDialog("‘"+title+"’ 이모티콘을 등록할까요? 등록하면 모든 회원이 담아서 쓸 수 있어요.")))return;
  var btn=document.getElementById("emoSaveBtn");
  if(btn){btn.disabled=true;btn.textContent="등록 중…";}
  var pack=await window.supabase.from("emoticon_packs")
    .insert({author_id:AUTH.user.id,title:title,cover_url:emoStudio.images[0]}).select().single();
  if(pack.error){
    setHint("등록에 실패했어요: "+pack.error.message);
    if(btn){btn.disabled=false;btn.textContent="이모티콘 등록";}
    return;
  }
  var rows=emoStudio.images.map(function(url,i){return {pack_id:pack.data.id,url:url,sort:i};});
  var ins=await window.supabase.from("emoticons").insert(rows);
  if(ins.error){
    // 이모티콘이 하나도 안 들어간 빈 팩이 남지 않게 되돌린다
    try{await window.supabase.from("emoticon_packs").delete().eq("id",pack.data.id);}catch(e){}
    setHint("등록에 실패했어요: "+ins.error.message);
    if(btn){btn.disabled=false;btn.textContent="이모티콘 등록";}
    return;
  }
  // 만든 사람은 바로 쓸 수 있게 자동으로 담아준다
  try{await window.supabase.from("user_emoticon_packs").insert({user_id:AUTH.user.id,pack_id:pack.data.id});}catch(e){}
  await loadMyEmoticons();
  toast("이모티콘을 등록했어요","🙂");
  openEmoticonMarket();
}

function canvasToBlob(canvas,type,quality){
  return new Promise(function(resolve){canvas.toBlob(resolve,type,quality);});
}
async function compressImage(file){
  var img=await loadImageFromFile(file);
  var w=img.naturalWidth,h=img.naturalHeight;
  var maxSide=1800;
  var longSide=Math.max(w,h);
  if(longSide>maxSide){
    var scale=maxSide/longSide;
    w=Math.round(w*scale);
    h=Math.round(h*scale);
  }
  var canvas=document.createElement("canvas");
  canvas.width=w;canvas.height=h;
  canvas.getContext("2d").drawImage(img,0,0,w,h);

  var quality=0.8;
  var blob=await canvasToBlob(canvas,"image/webp",quality);
  var ext="webp";
  if(!blob||blob.type!=="image/webp"){
    blob=await canvasToBlob(canvas,"image/jpeg",quality);
    ext="jpg";
  }
  return{blob:blob,ext:ext};
}
var ALLOWED_IMAGE_TYPES=["image/jpeg","image/png","image/webp","image/gif","image/bmp"];
var MAX_IMAGE_BYTES=40*1024*1024;
/* 한 장을 올리고 본문 커서 자리에 넣는다. 성공하면 true.
   idx/total을 주면 "2/5장" 처럼 진행 상황을 알려 준다(여러 장 올릴 때). */
async function uploadAndInsertImage(f,idx,total){
  var step=(idx&&total&&total>1)?("("+idx+"/"+total+") "):"";
  if(!window.supabase){toast("이미지 업로드를 사용할 수 없어요");return false;}
  if(ALLOWED_IMAGE_TYPES.indexOf(f.type)===-1){toast("이미지 파일만 올릴 수 있어요");return false;}
  if(f.size>MAX_IMAGE_BYTES){toast("40MB 이하 이미지만 올릴 수 있어요");return false;}
  var uploadBlob=f;
  if(f.type==="image/gif"){
    // GIF는 애니메이션이 깨지니 압축 없이 원본 그대로 업로드
  }else{
    toast(step+"이미지 압축 중...");
    try{
      var compressed=await compressImage(f);
      uploadBlob=compressed.blob;
      console.log("[이미지 압축] "+f.name+": "+(f.size/1024).toFixed(1)+"KB → "+(uploadBlob.size/1024).toFixed(1)+"KB ("+Math.round((1-uploadBlob.size/f.size)*100)+"% 감소)");
    }catch(err){
      console.error("이미지 압축 실패, 원본으로 업로드:",err);
    }
  }

  toast(step+"이미지 업로드 중...");
  var postUrl=await uploadToStorage(uploadBlob,"post");
  if(!postUrl)return false;
  edState.images.push(postUrl);
  edState.img=true;
  renderEdImages();
  // ⚠️ 예전엔 여기서 `pub.data.publicUrl`을 넘겼다. Supabase Storage → R2로 옮길 때 놓친 옛 변수라
  //    **본문에 넣기 직전에 ReferenceError로 죽었고**, 그래서 그림이 아래 목록에만 생기고
  //    본문에는 들어가지 않았다(오류가 조용히 삼켜져 원인이 안 보였다).
  insertInlineMedia(postUrl);
  if(!step)toast("이미지를 넣었어요");   // 여러 장일 땐 마지막에 한 번만 알린다
  return true;
}
/* ===== 사진 고르기 → 확인 → 올리기 ==========================================
   고르자마자 올리지 않는다. 잘못 고른 걸 되돌릴 수 없고, 여러 장을 한꺼번에
   올릴 때 몇 장이 들어가는지도 알 수 없기 때문이다.
   → 고른 목록을 먼저 보여 주고, '넣기'를 눌러야 그때 올린다.
   ⚠️ 커서 자리는 파일 선택 창을 열기 전(pickImage)에 이미 잡아 뒀고,
      selectionchange가 계속 갱신하므로 앨범을 다녀와도 그 자리가 유지된다. */
var imgPick=[];   // [{file, url(미리보기용 objectURL)}]
function onImage(e){
  var files=[].slice.call(e.target.files||[]);
  e.target.value="";                 // 같은 사진을 다시 고를 수 있게 비운다
  if(!files.length)return;
  openImgPick(files);
}
function openImgPick(files){
  var reject=[];
  imgPick=[];
  files.forEach(function(f){
    if(ALLOWED_IMAGE_TYPES.indexOf(f.type)===-1){reject.push(f.name+" (이미지 파일이 아님)");return;}
    if(f.size>MAX_IMAGE_BYTES){reject.push(f.name+" (40MB 초과)");return;}
    imgPick.push({file:f,url:URL.createObjectURL(f)});
  });
  var warn=document.getElementById("imgPickWarn");
  if(reject.length){
    warn.style.display="block";
    warn.innerHTML="다음 "+reject.length+"개는 넣을 수 없어요 — "+esc(reject.join(", "));
  }else warn.style.display="none";
  if(!imgPick.length){toast("넣을 수 있는 사진이 없어요");warn.style.display="none";return;}
  renderImgPick();
  document.getElementById("imgPickModal").classList.add("open");
}
function renderImgPick(){
  var g=document.getElementById("imgPickGrid");if(!g)return;
  g.innerHTML=imgPick.map(function(it,i){
    return '<div class="imgpick-item">'+
      '<img src="'+it.url+'" alt="">'+
      '<span class="imgpick-no">'+(i+1)+'</span>'+
      '<button type="button" class="imgpick-x" onclick="imgPickRemove('+i+')" aria-label="빼기">×</button>'+
    '</div>';
  }).join("");
  document.getElementById("imgPickTitle").textContent="사진 "+imgPick.length+"장";
  document.getElementById("imgPickOk").textContent=imgPick.length?("넣기 ("+imgPick.length+"장)"):"넣기";
  document.getElementById("imgPickOk").disabled=!imgPick.length;
}
function imgPickRemove(i){
  var it=imgPick[i];if(!it)return;
  try{URL.revokeObjectURL(it.url);}catch(e){}
  imgPick.splice(i,1);
  if(!imgPick.length){closeImgPick();return;}
  renderImgPick();
}
function closeImgPick(){
  // ⚠️ 미리보기용 objectURL은 반드시 풀어 준다. 안 그러면 브라우저가 파일을 계속 붙들고 있는다.
  imgPick.forEach(function(it){try{URL.revokeObjectURL(it.url);}catch(e){}});
  imgPick=[];
  var m=document.getElementById("imgPickModal");if(m)m.classList.remove("open");
  var w=document.getElementById("imgPickWarn");if(w)w.style.display="none";
}
async function confirmImgPick(){
  if(!imgPick.length)return;
  var list=imgPick.slice();
  imgPick=[];                                   // 닫기가 objectURL을 풀기 전에 목록만 넘겨받는다
  document.getElementById("imgPickModal").classList.remove("open");
  var ok=0;
  for(var i=0;i<list.length;i++){
    // 순서대로 올리고 순서대로 넣는다(insertInlineMedia가 넣을 때마다 커서를 그 아래로 옮긴다)
    var done=await uploadAndInsertImage(list[i].file,i+1,list.length);
    if(done)ok++;
    try{URL.revokeObjectURL(list[i].url);}catch(e){}
  }
  toast(ok===list.length?(ok+"장을 넣었어요"):(ok+"장만 들어갔어요 ("+(list.length-ok)+"장 실패)"),"🖼");
}
function rangeFromPoint(x,y){
  if(document.caretRangeFromPoint)return document.caretRangeFromPoint(x,y);
  if(document.caretPositionFromPoint){
    var pos=document.caretPositionFromPoint(x,y);
    if(!pos)return null;
    var r=document.createRange();
    r.setStart(pos.offsetNode,pos.offset);
    r.collapse(true);
    return r;
  }
  return null;
}
function onEditorDragOver(e){
  e.preventDefault();
  document.getElementById("wContent").classList.add("drag-over");
}
function onEditorDragLeave(){
  document.getElementById("wContent").classList.remove("drag-over");
}
async function onEditorDrop(e){
  var files=e.dataTransfer&&e.dataTransfer.files;
  if(!files||!files.length)return; // 파일이 아니면(내부 텍스트 드래그 등) 브라우저 기본 동작을 그대로 둠
  e.preventDefault();
  document.getElementById("wContent").classList.remove("drag-over");
  if(!window.supabase){toast("업로드를 사용할 수 없어요");return;}
  var range=rangeFromPoint(e.clientX,e.clientY);
  if(range){
    var sel=window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
  saveEditorSelection();
  for(var i=0;i<files.length;i++){
    await uploadAndInsertImage(files[i]);
  }
}
/* 올린 그림 목록. **맨 앞(대표)이 글 목록의 미리보기 그림이 된다**
   — post_images.sort 순서가 곧 이 배열 순서이고, 목록은 images[0]을 쓴다.
   그래서 '대표로'를 누르면 그 그림을 배열 맨 앞으로 옮긴다(따로 칸을 두지 않아도 된다). */
function renderEdImages(){
  var el=document.getElementById("edImages");if(!el)return;
  if(!edState.images.length){el.innerHTML="";return;}
  el.innerHTML=edState.images.map(function(url,i){
    return '<div class="ed-thumb'+(i===0?" rep":"")+'">'+
      '<img src="'+esc(url)+'" alt="">'+
      (i===0?'<span class="ed-thumb-badge">대표</span>'
            :'<button type="button" class="ed-thumb-set" onclick="edSetCover('+i+')">대표로</button>')+
      '<button type="button" class="ed-thumb-x" onclick="removeEdImage('+i+')" aria-label="빼기">×</button>'+
    '</div>';
  }).join("")+
  (edState.images.length>1
    ? '<p class="ed-thumb-help">글 목록에는 <b>대표</b> 그림 한 장만 미리보기로 보여요. 바꾸려면 다른 그림의 “대표로”를 누르세요.</p>'
    : '');
}
function edSetCover(i){
  if(i<=0||i>=edState.images.length)return;
  var u=edState.images.splice(i,1)[0];
  edState.images.unshift(u);
  renderEdImages();
  toast("대표 그림을 바꿨어요","🖼");
}
function removeEdImage(i){
  var url=edState.images[i];
  edState.images.splice(i,1);
  renderEdImages();
  var cEl=document.getElementById("wContent");
  if(cEl)cEl.querySelectorAll('img[src="'+url+'"]').forEach(function(img){img.remove()});
}
// 본문 서식에 쓰는 안전한 CSS 속성만 허용한다.
// position·top/left·width/height·z-index·transform 같은 '레이아웃 탈취' 속성을 빼서
// 글이 화면 전체를 덮는 오버레이(클릭재킹·가짜 UI 피싱)를 만들지 못하게 한다.
var _SAFE_CSS=/^(color|background-color|font-weight|font-style|font-size|font-family|text-decoration|text-decoration-line|text-align|line-height|letter-spacing|max-width|border-radius|opacity|margin|margin-top|margin-bottom|margin-left|margin-right|padding|display|white-space)$/;
function _filterStyle(v){
  return String(v||"").split(";").map(function(d){
    var i=d.indexOf(":");if(i<0)return "";
    var prop=d.slice(0,i).trim().toLowerCase(), val=d.slice(i+1).trim();
    if(!_SAFE_CSS.test(prop))return "";                       // 허용 목록 밖 속성 제거
    if(/url\s*\(|expression|javascript:|\/\*/i.test(val))return ""; // url()·expression 등 제거
    if(/\d\s*v[wh]/i.test(val))return "";                     // 100vw/100vh 등 뷰포트 크기 제거
    if(prop==="display"&&!/^(inline|inline-block|block|none)$/i.test(val))return ""; // flex/grid 등 차단
    return prop+":"+val;
  }).filter(Boolean).join(";");
}
// 본문 이미지·영상은 우리 저장소만 허용 — 외부 주소를 넣어 열람자 IP를 수집하는 추적 픽셀 차단.
function _safeMediaSrc(src){
  src=String(src||"");
  if(/^https:\/\/img\.commi\.kr\//i.test(src))return src;     // R2(현재 저장소)
  if(/^https:\/\/[a-z0-9-]+\.supabase\.co\/storage\//i.test(src))return src; // 옛 이미지(마이그레이션 전)
  if(/^data:image\//i.test(src))return src;
  return "";                                                  // 그 외 외부 주소는 제거
}
var _domPurifyHooked=false;
function _hookDomPurify(){
  if(_domPurifyHooked||!window.DOMPurify)return;
  _domPurifyHooked=true;
  window.DOMPurify.addHook("afterSanitizeAttributes",function(node){
    if(node.hasAttribute&&node.hasAttribute("style")){
      var f=_filterStyle(node.getAttribute("style"));
      if(f)node.setAttribute("style",f);else node.removeAttribute("style");
    }
    var tag=node.tagName&&node.tagName.toLowerCase();
    // 링크는 항상 새 창 + rel로 잠근다(opener 탈취·리퍼러 유출 방지). 우리 판단이지 작성자 선택이 아니다.
    if(tag==="a"){
      if(node.getAttribute("href")){
        node.setAttribute("target","_blank");
        node.setAttribute("rel","noopener noreferrer nofollow ugc");
      }else{
        node.removeAttribute("target");node.removeAttribute("rel");
      }
    }
    // class는 우리가 쓰는 값만 남긴다(임의 클래스로 사이트 스타일을 흉내 내지 못하게)
    if(node.hasAttribute&&node.hasAttribute("class")){
      var keep=String(node.getAttribute("class")||"").split(/\s+/)
        .filter(function(c){return c==="ed-file"||c==="emo";}).join(" ");
      if(keep)node.setAttribute("class",keep);else node.removeAttribute("class");
    }
    if((tag==="img"||tag==="video"||tag==="source")&&node.getAttribute("src")){
      var s=_safeMediaSrc(node.getAttribute("src"));
      if(s)node.setAttribute("src",s);else node.removeAttribute("src");
    }
  });
}
function sanitizePostHtml(html){
  if(!html)return "";
  if(!window.DOMPurify)return "";
  _hookDomPurify();
  var out=window.DOMPurify.sanitize(html,{
    // a: 링크 넣기 / class: 첨부 파일 칩 표시용(아래 ALLOWED_CLASSES로 값까지 제한)
    ALLOWED_TAGS:["b","strong","i","em","u","font","span","ul","ol","li","blockquote","br","div","p","img","video","source","a"],
    ALLOWED_ATTR:["style","color","src","controls","alt","data-poll","href","target","rel","class","download"],
    // ⚠️ 링크는 http(s)와 mailto만. javascript:·data: 는 클릭 한 번에 스크립트가 도는 통로다.
    ALLOWED_URI_REGEXP:/^(?:https?:|mailto:|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  });
  // 글꼴을 쓴 글을 그릴 때만 웹폰트를 불러온다(안 쓰는 글에서는 한 바이트도 받지 않는다)
  if(out.indexOf("font-family")>-1&&typeof edEnsureWebFonts==="function")edEnsureWebFonts();
  return out;
}
/* ===== 글쓰기 투표(다중·본문 삽입형) ===== edState.polls = {key:{question,options,allowMultiple,anonymous,closesDays}} */
function edPollBlockInner(key){ // 본문 안 투표 블록의 표시 내용(라벨+편집/삭제)
  var pd=edState.polls[key]||{};
  var label=(pd.question||'').trim()?esc(pd.question.trim()):'투표 (편집을 눌러 설정)';
  var n=(pd.options||[]).filter(function(o){return (o||'').trim();}).length;
  return '<span class="pa-q">📊 '+label+(n?' · '+n+'개 선택지':'')+'</span>'+
    '<span class="pa-act"><button type="button" onmousedown="event.preventDefault()" onclick="edEditPoll(\''+key+'\')">편집</button>'+
    '<button type="button" onmousedown="event.preventDefault()" onclick="edRemovePoll(\''+key+'\')">삭제</button></span>';
}
function edInsertPoll(e){ // 커서 위치에 투표 블록 삽입 → 편집 모달 열기 (Range API로 안정 삽입)
  if(e)e.preventDefault();
  var ed=document.getElementById("wContent"); if(!ed)return; ed.focus();
  var key='p'+Date.now().toString(36)+Math.floor(Math.random()*1296).toString(36);
  if(!edState.polls)edState.polls={};
  edState.polls[key]={question:'',options:['',''],allowMultiple:false,anonymous:false,closesDays:null};
  var wrap=document.createElement('div');
  wrap.innerHTML='<div class="poll-anchor" data-poll="'+key+'" contenteditable="false">'+edPollBlockInner(key)+'</div><p><br></p>';
  var frag=document.createDocumentFragment(), nodes=[];
  while(wrap.firstChild){nodes.push(wrap.firstChild);frag.appendChild(wrap.firstChild);}
  var sel=window.getSelection();
  var range=(sel&&sel.rangeCount&&ed.contains(sel.anchorNode))?sel.getRangeAt(0):null;
  if(range){
    range.deleteContents(); range.insertNode(frag);
    var last=nodes[nodes.length-1];
    if(last){try{var nr=document.createRange();nr.setStart(last,0);nr.collapse(true);sel.removeAllRanges();sel.addRange(nr);}catch(e2){}}
  }else{ nodes.forEach(function(n){ed.appendChild(n);}); }
  edEditPoll(key);
}
function refreshPollBlockLabel(key){
  var el=document.querySelector('#wContent .poll-anchor[data-poll="'+key+'"]');
  if(el)el.innerHTML=edPollBlockInner(key);
}
function edRemovePoll(key){
  var el=document.querySelector('#wContent .poll-anchor[data-poll="'+key+'"]');
  if(el)el.remove();
  if(edState.polls)delete edState.polls[key];
  if(_edPollKey===key)closePollEdit();
}
var _edPollKey=null, _pmOpts=[];
function edEditPoll(key){
  var pd=edState.polls&&edState.polls[key]; if(!pd)return;
  _edPollKey=key;
  _pmOpts=(pd.options&&pd.options.length?pd.options.slice():['','']);
  document.getElementById('pmQ').value=pd.question||'';
  document.getElementById('pmMulti').checked=!!pd.allowMultiple;
  document.getElementById('pmAnon').checked=!!pd.anonymous;
  document.getElementById('pmClose').value=pd.closesDays?String(pd.closesDays):'';
  pmRenderOpts();
  document.getElementById('pollEditModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function pmSyncOpts(){ var arr=[]; document.querySelectorAll('#pmOpts .ed-poll-opt-in').forEach(function(inp){arr.push(inp.value);}); if(arr.length)_pmOpts=arr; }
function pmRenderOpts(){
  document.getElementById('pmOpts').innerHTML=_pmOpts.map(function(o,i){
    return '<div class="ed-poll-optrow"><input class="ed-poll-opt-in" placeholder="선택지 '+(i+1)+'" value="'+esc(o||'')+'"><button type="button" class="ed-poll-optdel" onclick="pmRemoveOption('+i+')" title="선택지 삭제">×</button></div>';
  }).join('');
}
function pmAddOption(){ pmSyncOpts(); if(_pmOpts.length>=8){toast('선택지는 최대 8개예요');return;} _pmOpts.push(''); pmRenderOpts(); }
function pmRemoveOption(i){ pmSyncOpts(); if(_pmOpts.length<=2){toast('선택지는 최소 2개가 필요해요');return;} _pmOpts.splice(i,1); pmRenderOpts(); }
function closePollEdit(){ var m=document.getElementById('pollEditModal'); if(m)m.classList.remove('open'); document.body.style.overflow=''; _edPollKey=null; }
function edRemovePollFromModal(){ var k=_edPollKey; closePollEdit(); if(k)edRemovePoll(k); }
function edSavePollModal(){
  var key=_edPollKey; if(!key||!edState.polls||!edState.polls[key])return;
  pmSyncOpts();
  var q=(document.getElementById('pmQ').value||'').trim();
  var opts=_pmOpts.map(function(o){return (o||'').trim();}).filter(Boolean);
  if(!q){toast('투표 질문을 입력해주세요');return;}
  if(opts.length<2){toast('선택지를 2개 이상 입력해주세요');return;}
  edState.polls[key]={question:q,options:opts,allowMultiple:document.getElementById('pmMulti').checked,anonymous:document.getElementById('pmAnon').checked,closesDays:(document.getElementById('pmClose').value?parseInt(document.getElementById('pmClose').value,10):null)};
  refreshPollBlockLabel(key);
  closePollEdit();
  toast('투표를 저장했어요','📊');
}
/* 등록 버튼 이중 실행 방지 — 업로드가 느릴 때 연타하면 같은 글이 여러 번 올라갔다.
   진행 중에는 버튼을 잠그고 "올리는 중…"으로 바꿔 뭔가 되고 있음을 보여 준다. */
var _postSubmitting=false;
/* 등록 버튼은 **두 개**다 — 상단 바(늘 보임)와 폼 끝.
   ⚠️ 한쪽만 잠그면 다른 쪽으로 두 번 눌러 글이 두 번 올라간다. 항상 둘 다 다룬다.
      (상단 버튼이 없던 시절에는 사람들이 제목 옆 '글쓰기' 글자를 누르고 등록된 줄 알았다 —
       그래서 진짜 버튼을 상단에도 뒀다, 2026-08-13 신고) */
function edSubmitBtns(){ return Array.prototype.slice.call(document.querySelectorAll(".js-ed-submit")); }
function edSetSubmitLabel(text){ edSubmitBtns().forEach(function(b){b.textContent=text;}); }
async function submitPost(){
  if(_postSubmitting)return;
  _postSubmitting=true;
  var btns=edSubmitBtns();
  var keep=btns.length?btns[0].textContent:"";
  btns.forEach(function(b){b.disabled=true;b.textContent=editingPostId?"수정 중…":"올리는 중…";});
  try{ await _submitPostBody(); }
  finally{
    _postSubmitting=false;
    btns.forEach(function(b){b.disabled=false;b.textContent=keep;});
  }
}
async function _submitPostBody(){
  var t=document.getElementById("wTitle").value.trim();
  var cEl=document.getElementById("wContent");
  var html=sanitizePostHtml(cEl.innerHTML.trim());
  var text=cEl.textContent.trim();
  var isReview=edState.board==="review";
  if(!edState.board){toast("게시판을 선택해주세요");document.getElementById("edBoardMenu").classList.add("open");return}
  if(isReview&&!AUTH.user){toast("로그인 후 후기를 작성할 수 있어요");return}
  if(!isReview&&!t){toast("제목을 입력해주세요");return}
  if(!isReview&&!text&&!edState.img){toast("내용을 입력해주세요");return}
  if(isReview&&!edState.commissionPostId){toast("확인할 커미션 구직 글을 검색해서 선택해주세요");return}
  if(isReview&&!edState.sentiment){toast("만족 후기인지 불호 후기인지 선택해주세요");return}
  var sentiment=isReview?edState.sentiment:null;
  var title=isReview?sentimentTitle(sentiment):((edState.tag?"["+edState.tag+"] ":"")+t);
  var stage=(["러프","선화","채색","완성"].indexOf(edState.tag)>-1)?edState.tag:null;
  var reviewedNick=isReview?edState.reviewedNick:null;
  var reviewedUserId=isReview?edState.reviewedUserId:null;
  var commissionPostId=isReview?edState.commissionPostId:null;

  // 본문에 넣은 투표들: 각각 질문 + 선택지 2개 이상 필수
  var _tmpv=document.createElement('div'); _tmpv.innerHTML=html;
  var _pmk=[].slice.call(_tmpv.querySelectorAll('[data-poll]'));
  for(var _vi=0;_vi<_pmk.length;_vi++){
    var _vk=_pmk[_vi].getAttribute('data-poll'); var _vpd=edState.polls&&edState.polls[_vk];
    if(!_vpd||!(_vpd.question||'').trim()){toast('투표 질문을 입력해주세요 (본문의 투표 블록에서 [편집])');return;}
    if((_vpd.options||[]).map(function(o){return (o||'').trim();}).filter(Boolean).length<2){toast('투표 선택지를 2개 이상 입력해주세요');return;}
  }

  if(editingPostId){
    var ep=POSTS.find(function(x){return x.id===editingPostId});
    if(!ep){editingPostId=null;toast("수정할 글을 찾을 수 없어요");return;}
    if(window.supabase&&ep.dbId){
      var upd=await window.supabase.from("posts").update({
        board:edState.board,category:edState.tag,title:title,content:text,content_html:html||null,
        stage:edState.img?stage:null,reviewed_nickname:reviewedNick,reviewed_user_id:reviewedUserId,commission_post_id:commissionPostId,
        commission_sentiment:sentiment
      },{count:"exact"}).eq("id",ep.dbId);
      if(upd.error){toast("수정 실패: "+upd.error.message);return;}
      // RLS가 막으면 오류 없이 0행 — 이대로 진행하면 이미지만 갈아끼워져 글이 반쯤 수정된 것처럼 보인다
      if(upd.count===0){toast("수정되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
      var delImgs=await window.supabase.from("post_images").delete().eq("post_id",ep.dbId);
      if(delImgs.error)console.error(delImgs.error);
      if(edState.images.length){
        var newImgRows=edState.images.map(function(url,i){return{post_id:ep.dbId,url:url,sort:i};});
        var savedNewImgs=await window.supabase.from("post_images").insert(newImgRows);
        if(savedNewImgs.error)console.error(savedNewImgs.error);
      }
    }
    ep.board=edState.board;ep.category=edState.tag;ep.title=title;
    ep.stage=edState.img?stage:null;
    ep.images=edState.images.length?edState.images.slice():undefined;
    ep.reviewedNickname=reviewedNick;
    ep.reviewedUserId=reviewedUserId;
    ep.commissionPostId=commissionPostId;
    ep.commissionSentiment=sentiment;
    ep.html=html;ep.content=text.split("\n").filter(Boolean);
    editingPostId=null;
    closeWrite();
    toast("글을 수정했어요");
    openPost(ep.id);
    return;
  }

  if(window.supabase){
    var saved=await window.supabase.from("posts").insert({
      author_id:AUTH.user?AUTH.user.id:null,
      board:edState.board,
      category:edState.tag,
      title:title,
      content:text,
      content_html:html||null,
      stage:edState.img?stage:null,
      reviewed_nickname:reviewedNick,
      reviewed_user_id:reviewedUserId,
      commission_post_id:commissionPostId,
      commission_sentiment:sentiment
    }).select().single();
    if(saved.error){
      console.error(saved.error);
      toast("저장 실패: "+saved.error.message);
      return;
    }
    if(edState.images.length){
      var imgRows=edState.images.map(function(url,i){return{post_id:saved.data.id,url:url,sort:i};});
      var savedImgs=await window.supabase.from("post_images").insert(imgRows);
      if(savedImgs.error)console.error(savedImgs.error);
    }
    // 투표 저장: 본문에 남은 투표 마커(data-poll)마다 polls 1행 + options. RLS가 '이 글 작성자만' 확인.
    var _insertedPolls=[];
    if(edState.polls){
      var _tmp=document.createElement('div'); _tmp.innerHTML=html;
      var _mk=[].slice.call(_tmp.querySelectorAll('[data-poll]'));
      var _psort=0;
      for(var _mi=0;_mi<_mk.length;_mi++){
        var _key=_mk[_mi].getAttribute('data-poll'); var _pd=edState.polls[_key]; if(!_pd)continue;
        var _q=(_pd.question||'').trim();
        var _opts=(_pd.options||[]).map(function(o){return (o||'').trim();}).filter(Boolean);
        if(!_q||_opts.length<2)continue;
        var _closesAt=_pd.closesDays?new Date(Date.now()+_pd.closesDays*86400000).toISOString():null;
        var pollRes=await window.supabase.from("polls").insert({post_id:saved.data.id,question:_q,
          allow_multiple:!!_pd.allowMultiple,is_anonymous:!!_pd.anonymous,closes_at:_closesAt,anchor_key:_key,sort:_psort++}).select().single();
        if(pollRes.error){console.error(pollRes.error);toast("투표 저장 실패: "+pollRes.error.message);continue;}
        var optRows=_opts.map(function(b,i){return {poll_id:pollRes.data.id,body:b,sort:i};});
        var optIns=await window.supabase.from("poll_options").insert(optRows);
        if(optIns.error)console.error(optIns.error);
        _insertedPolls.push({id:pollRes.data.id,anchor:_key});
      }
    }
    refreshMyProfile();
  }

  var np={id:Date.now(),board:edState.board,title:title,author:"나",time:"방금",createdAt:new Date().toISOString(),likes:0,views:1,
    thumb:edState.img?"t1":"none",stage:edState.img?stage:null,
    images:edState.images.length?edState.images.slice():undefined,
    dbId:saved&&saved.data?saved.data.id:undefined,authorId:saved&&saved.data?saved.data.author_id:undefined,
    reviewedNickname:reviewedNick,reviewedUserId:reviewedUserId,commissionPostId:commissionPostId,commissionSentiment:sentiment,
    polls:(typeof _insertedPolls!=="undefined"?_insertedPolls:[]),pollId:(typeof _insertedPolls!=="undefined"&&_insertedPolls[0]?_insertedPolls[0].id:null),
    html:html,content:text.split("\n").filter(Boolean),comments:[]};
  justAddedId=np.id;setTimeout(function(){justAddedId=null},1800);POSTS.unshift(np);
  closeWrite();
  edClearDraft(); // ⚠️ closeWrite가 마지막 모습을 임시저장하므로, 등록 성공 후엔 반드시 그 뒤에 지운다
  state.board=edState.board;state.query="";state.sort="new";state.shown=8;
  renderNav(document.getElementById("boardNav"));renderNav(document.getElementById("boardNavM"));renderNav(document.getElementById("boardNavS"));
  page=1;renderChips();renderList();track("write");toast("글을 올렸어요! ✏️");window.scrollTo({top:0,behavior:"smooth"});
}
/* drawer / sheet / toast */
var drawer=document.getElementById('drawer'),scrim=document.getElementById('scrim');

/* 아래쪽 페이드 켜고 끄기 — 더 내려갈 데가 남았을 때만 보인다.
   ⚠️ 4px의 여유를 둔다. 브라우저가 소수점 높이를 다루다 보면 맨 아래에서도
      1px쯤 남았다고 계산되는 일이 있어, 0으로 비교하면 페이드가 안 꺼진다. */
function dwSyncFade(){
  var sc=document.getElementById('dwScroll');
  if(!sc||!sc.parentElement)return;
  var more=(sc.scrollHeight-sc.scrollTop-sc.clientHeight)>4;
  sc.parentElement.classList.toggle('more',more);
}
/* 메뉴를 열 때, 지금 보고 있는 게시판이 접혀 있으면 그 자리로 옮겨 준다.
   ⚠️ 이미 보이는 항목이면 건드리지 않는다 — 멀쩡히 보이는데 목록이 움직이면 더 어수선하다.
   ⚠️ 부드러운 스크롤을 쓰지 않는다. 메뉴가 미끄러져 들어오는 동안 목록까지 따로 움직이면
      두 개가 겹쳐 보여서 오히려 산만하다. 열리기 전에 조용히 자리를 잡아 둔다. */
function dwScrollToCurrent(){
  var sc=document.getElementById('dwScroll');
  if(!sc)return;
  var on=sc.querySelector('.dw-item.on');
  if(!on){sc.scrollTop=0;return;}
  var top=on.offsetTop, bottom=top+on.offsetHeight;
  if(top>=sc.scrollTop&&bottom<=sc.scrollTop+sc.clientHeight)return; // 이미 보임
  sc.scrollTop=Math.max(0,top-(sc.clientHeight-on.offsetHeight)/2);  // 가운데쯤에 두기
}
// 열 때마다 다시 그린다 — 그래야 '지금 보고 있는 곳' 표시가 항상 맞는다
// (커미션·채팅으로 옮겨간 것은 게시판을 고른 게 아니라서 renderNav가 다시 불리지 않는다)
function openDrawer(){
  var nav=document.getElementById('boardNavM');
  if(nav)renderNav(nav);
  dwScrollToCurrent();   // ⚠️ 다시 그린 **뒤에** 해야 항목 위치가 제대로 잡힌다
  dwSyncFade();
  drawer.classList.add('open');scrim.classList.add('open');document.body.style.overflow='hidden';
}
(function(){
  var sc=document.getElementById('dwScroll');
  if(sc)sc.addEventListener('scroll',dwSyncFade,{passive:true}); // passive: 스크롤을 막지 않아 더 부드럽다
})();
function closeDrawer(){drawer.classList.remove('open');scrim.classList.remove('open');document.body.style.overflow=''}
// 커미션 상세에서는 같은 버튼이 ← 로 바뀌므로(위 CSS) 동작도 뒤로가기여야 한다
document.getElementById('menuBtn').addEventListener('click',function(){
  if(document.body.classList.contains('cm-detail'))screenBack();
  else openDrawer();
});
document.getElementById('drawerClose').addEventListener('click',closeDrawer);
scrim.addEventListener('click',closeDrawer);

var sheet=document.getElementById('sheet'),sheetScrim=document.getElementById('sheetScrim');
function openSheet(){sheet.classList.add('open');sheetScrim.classList.add('open');document.body.style.overflow='hidden'}
function closeSheet(){sheet.classList.remove('open');sheetScrim.classList.remove('open');document.body.style.overflow=''}
sheetScrim.addEventListener('click',closeSheet);

document.addEventListener('click',function(e){
  var menu=document.getElementById('edBoardMenu');
  if(menu&&menu.classList.contains('open')&&!e.target.closest('.ed-metarow'))menu.classList.remove('open');
});
var toastEl=document.getElementById('toast'),toastT;
function toast(msg,icon){toastEl.innerHTML=(icon?'<span style="font-size:15px">'+icon+'</span>':'')+'<span>'+msg+'</span>';toastEl.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){toastEl.classList.remove('show')},2000)}
document.getElementById("searchInput").addEventListener("keydown",function(e){if(e.key==="Enter")doSearch(this.value)});
var mSearch=document.getElementById("searchInputM");if(mSearch)mSearch.addEventListener("keydown",function(e){if(e.key==="Enter")doSearch(this.value)});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeWrite();closeDrawer();closeSheet()}});

renderNav(document.getElementById("boardNav"));renderNav(document.getElementById("boardNavM"));renderNav(document.getElementById("boardNavS"));
// 딥링크로 들어온 경우엔 홈 셸을 그리지 않는다(곧 그 화면이 덮어쓰므로 깜빡임만 생긴다)
if(!getPostIdFromPath()&&!getUserIdFromPath()&&!getCommissionIdFromPath()&&!getTabFromPath()
   &&!getReviewsCmIdFromPath()&&!getEmoticonIdFromPath()&&!isRankingPath()){
  renderChips();renderHot();
  // renderTrend()는 이제 실제 글의 인기 순위를 보여주므로 loadRealPosts()가 끝난 뒤에 그림(아래 참고).
  // 실제 글은 loadRealPosts()가 곧 채워줌 — 여기서 더미 글로 renderList()를 한 번 더 돌리면
  // "더미 글이 잠깐 보였다 실제 글로 바뀌는" 깜빡임과 그로 인한 스크롤 튐이 생김.
  // Supabase 연동이 없는 로컬 데모 환경 등에서만 폴백으로 더미 글을 보여줌.
  if(!window.__paloHasBackend){renderTrend();renderList();}
}

var toTop=document.getElementById('toTop');
if(toTop){
  var getY=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;};
  var onScroll=function(){getY()>360?toTop.classList.add('show'):toTop.classList.remove('show');};
  window.addEventListener('scroll',onScroll,{passive:true});
  document.addEventListener('scroll',onScroll,{passive:true,capture:true});
  toTop.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});document.documentElement.scrollTop=0;document.body.scrollTop=0;});
}
document.addEventListener('click',function(e){
  var el=e.target.closest('.rip');if(!el)return;
  var r=el.getBoundingClientRect();var d=Math.max(r.width,r.height);
  var sp=document.createElement('span');sp.className='ripple';
  sp.style.width=sp.style.height=d+'px';
  sp.style.left=(e.clientX-r.left-d/2)+'px';sp.style.top=(e.clientY-r.top-d/2)+'px';
  el.appendChild(sp);setTimeout(function(){sp.remove()},520);
},true);


// ---- easier search wiring ----
var si=document.getElementById("searchInput"), sc=document.getElementById("searchClear");
if(si){
  si.addEventListener("input",function(){
    if(sc)sc.style.display=this.value?"flex":"none";
    liveSearch(this.value);
  });
}
if(sc){
  sc.addEventListener("click",function(){
    si.value="";sc.style.display="none";state.query="";state.searchTab="all";state.searchBoard="";
    if(state.sort==="rel")state.sort="new";
    state.board=state.board||"all";
    doSearch("");si.focus();
  });
}
// mobile search overlay
var msEl=document.getElementById("msearch"), msi=document.getElementById("msearchInput");
function openMSearch(){msEl.classList.add("open");setTimeout(function(){msi.focus()},50);}
function closeMSearch(){msEl.classList.remove("open");}
if(msi){
  msi.addEventListener("input",function(){liveSearch(this.value);});
  msi.addEventListener("keydown",function(e){if(e.key==="Enter"){doSearch(this.value);closeMSearch();}});
}


// ===== 알림함 =====
function syncNotifBadge(){
  var un=NOTIFS.filter(function(n){return !n.read}).length;
  var dot=document.getElementById("notiDot");if(dot)dot.style.display=un?"block":"none";
  var bd=document.getElementById("notiBadge");
  if(bd){bd.textContent=un;bd.style.display=un?"flex":"none";}
}
function setNotifFilter(f){notifFilter=f;renderNotifs();}
function delNotif(i){
  var n=NOTIFS[i];
  if(n&&n.dbId)window.supabase.from("notifications").delete().eq("id",n.dbId).then(function(){});
  NOTIFS.splice(i,1);renderNotifs();syncNotifBadge();toast("알림을 삭제했어요");
}
function renderNotifs(){
  var el=document.getElementById("npList");if(!el)return;
  var tabs=[["all","전체"],["cm","댓글"],["like","좋아요"],["chat","채팅"],["commission","커미션"],["sys","공지"]];
  var th='<div class="np-tabs">'+tabs.map(function(t){
    return '<button class="np-tab'+(notifFilter===t[0]?' on':'')+'" onclick="event.stopPropagation();setNotifFilter(\''+t[0]+'\')">'+t[1]+'</button>';
  }).join("")+'</div>';
  var items=[];
  NOTIFS.forEach(function(n,i){ if(notifFilter==="all"||n.type===notifFilter) items.push([n,i]); });
  var body=items.length?items.map(function(pair){
    var n=pair[0],i=pair[1];
    return '<div class="np-item'+(n.read?'':' unread')+'" onclick="notifClick('+i+')">'+
      '<span class="np-ico">'+n.icon+'</span>'+
      '<span class="np-txt">'+esc(n.txt)+'<div class="np-time">'+esc(n.time)+'</div></span>'+
      '<button class="np-del" onclick="event.stopPropagation();delNotif('+i+')" aria-label="삭제">✕</button></div>';
  }).join(""):'<div class="np-empty">해당 알림이 없어요</div>';
  el.innerHTML=th+body;
}
function toggleNotif(e){
  if(e)e.stopPropagation();
  var p=document.getElementById("notifPanel");
  var opening=!p.classList.contains("open");
  p.classList.toggle("open");
  if(opening)renderNotifs();
}
function closeNotif(){document.getElementById("notifPanel").classList.remove("open");}
function notifClick(i){
  var n=NOTIFS[i];n.read=true;syncNotifBadge();closeNotif();
  if(n.dbId)window.supabase.from("notifications").update({is_read:true}).eq("id",n.dbId).then(function(){});
  if(n.type==="review_alert")openReviewAnalysis(n.reviewUser);
  else if(n.chatUser)openChat(n.chatUser);
  else if(n.conversationId)openConversationById(n.conversationId); // 손님 문의처럼 상대 계정이 없는 방
  else if(n.post)openPost(n.post);
  else if(n.commission)cmOpenCommissionById(n.commission);
  else if(n.cmTarget==="reviews")cmOpenReviews();
  else if(n.type==="commission")cmOpenMy('applications');
  else openRules();
}
function markAllRead(){
  NOTIFS.forEach(function(n){n.read=true});renderNotifs();syncNotifBadge();toast("모든 알림을 읽음 처리했어요");
  if(AUTH.user&&window.supabase)window.supabase.from("notifications").update({is_read:true}).eq("user_id",AUTH.user.id).eq("is_read",false).then(function(){});
}
/* ===== 웹 푸시 알림 설정 (PWA) ===== */
function toggleNotifPref(key,on,label){
  SETTINGS[key]=on;
  try{localStorage.setItem("palo_notif_prefs",JSON.stringify(SETTINGS));}catch(e){}
  // 서버 발송이 이 설정을 참고하므로 내 구독의 prefs도 갱신
  if(AUTH.user&&window.supabase)window.supabase.from("push_subscriptions").update({prefs:SETTINGS}).eq("user_id",AUTH.user.id).then(function(){});
  toast(on?(label+" 알림을 켰어요"):(label+" 알림을 껐어요"));
}
function urlBase64ToUint8Array(base64String){
  var padding="=".repeat((4-base64String.length%4)%4);
  var base64=(base64String+padding).replace(/-/g,"+").replace(/_/g,"/");
  var raw=window.atob(base64);var arr=new Uint8Array(raw.length);
  for(var i=0;i<raw.length;i++)arr[i]=raw.charCodeAt(i);
  return arr;
}
async function subscribeToPush(){
  if(!AUTH.user||!pushSupported()||!window.supabase)return false;
  if(!window.VAPID_PUBLIC_KEY)return false; // VAPID 공개키 미설정(2단계 환경변수 설정 전)
  try{
    var reg=await navigator.serviceWorker.ready;
    var sub=await reg.pushManager.getSubscription();
    if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:urlBase64ToUint8Array(window.VAPID_PUBLIC_KEY)});
    var j=sub.toJSON();
    if(!j||!j.endpoint||!j.keys)return false;
    var res=await window.supabase.from("push_subscriptions").upsert({
      user_id:AUTH.user.id,endpoint:j.endpoint,p256dh:j.keys.p256dh,auth:j.keys.auth,prefs:SETTINGS
    },{onConflict:"endpoint"});
    return !res.error;
  }catch(e){console.error("푸시 구독 실패:",e);return false;}
}
function pushSupported(){return ("Notification" in window)&&("serviceWorker" in navigator)&&("PushManager" in window);}
function isIOSDevice(){return /iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;}
function isStandalonePWA(){return window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;}
function notifPermState(){return (typeof Notification!=="undefined")?Notification.permission:"unsupported";}

/* ===== 알림 권유 배너 (홈 목록 맨 위) ==================================
   ⚠️ **아직 안 물어본 사람("default")에게만** 띄운다.
      · granted  = 이미 켬 → 띄울 이유가 없다
      · denied   = 거절함 → **다시 물어볼 수 없다.** 브라우저 설정에서만 되돌릴 수 있어
                   배너를 띄워 봐야 눌러도 아무 일이 없고 짜증만 남는다
   ⚠️ iOS 사파리는 **홈 화면에 추가해야만** 알림이 된다 → 그 경우엔 '알림 켜기'가 아니라
      '홈 화면에 추가' 안내로 갈라야 한다(눌러도 안 되는 버튼을 보여주지 않는다).
   ⚠️ 닫으면 7일간 다시 뜨지 않는다 — 권유는 한 번 거절당하면 반복할수록 손해다. */
var NOTIF_BANNER_KEY="palo_notif_banner_until";
function notifBannerHidden(){
  try{
    var until=parseInt(localStorage.getItem(NOTIF_BANNER_KEY)||"0",10);
    return until>Date.now();
  }catch(e){return false;}
}
function dismissNotifBanner(e){
  if(e&&e.stopPropagation)e.stopPropagation();
  try{localStorage.setItem(NOTIF_BANNER_KEY,String(Date.now()+7*24*3600*1000));}catch(err){}
  var el=document.getElementById("notifBanner");
  if(el)el.remove();
}
/* 이 계정이 이미 어딘가에서 알림을 켜 뒀는지(기기 무관).
   ⚠️ iOS는 **사파리와 홈 화면 앱을 서로 다른 컨텍스트로** 취급한다. 홈 화면 앱에서 알림을 켜도
      사파리에서 본 `Notification.permission` 은 여전히 "default" 다.
      그래서 권한만 보고 판단하면 **이미 켠 사람에게 또 권유하게 된다**(2026-08-09 사용자 신고).
      계정에 푸시 구독이 하나라도 있으면 '이미 켠 사람'으로 보고 배너를 접는다. */
var _notifHasSub=null;   // null=아직 모름 / true·false=확인함
function notifCheckSubscribed(){
  if(_notifHasSub!==null||!AUTH.user||!window.supabase)return;
  _notifHasSub=false;   // 조회 중 중복 요청 방지
  window.supabase.from("push_subscriptions").select("id").eq("user_id",AUTH.user.id).limit(1)
    .then(function(res){
      if(!res.error&&res.data&&res.data.length){
        _notifHasSub=true;
        var el=document.getElementById("notifBanner");if(el)el.remove();
      }
    },function(){});
}
/* 배너를 보여줄 상황인지. 보여줄 만하면 그 '종류'를 돌려준다(ask | ios). */
function notifBannerKind(){
  if(!AUTH.user)return null;                       // 로그인해야 구독을 저장할 수 있다
  if(notifBannerHidden())return null;
  // ⚠️ **권한 판정이 iOS 분기보다 먼저 와야 한다.** 순서가 반대면 아이폰 사용자는
  //    이미 알림을 켰어도 '홈 화면에 추가하세요' 배너를 계속 보게 된다(그 순서가 실제 버그였다).
  var st=notifPermState();
  if(st==="granted"||st==="denied")return null;
  if(_notifHasSub)return null;                     // 다른 기기·앱에서 이미 켠 계정
  notifCheckSubscribed();                          // 아직 모르면 조용히 확인해 둔다(다음 렌더부터 반영)
  if(isIOSDevice()&&!isStandalonePWA())return "ios";  // 홈 화면 추가부터 안내
  if(!pushSupported())return null;                 // 지원 안 하는 브라우저엔 권유할 게 없다
  return (st==="default")?"ask":null;
}
/* 종 아이콘 — 이모지는 기기마다 모양·크기가 제각각이라 배너 정렬이 흔들린다. SVG로 고정. */
var NB_ICON_BELL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 6-3 7-3 7h18s-3-1-3-7"/><path d="M13.7 20a1.9 1.9 0 0 1-3.4 0"/></svg>';
var NB_ICON_PHONE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.6"/><path d="M12 7v6M9 10h6"/></svg>';
function notifBannerHTML(){
  var kind=notifBannerKind();
  if(!kind)return "";
  var ios=(kind==="ios");
  return '<div class="notif-banner" id="notifBanner">'+
    '<span class="nb-ic">'+(ios?NB_ICON_PHONE:NB_ICON_BELL)+'</span>'+
    '<span class="nb-tx">'+
      // 문구는 짧게 — 텍스트 칸이 좁아서(아이콘·버튼·닫기가 폭을 가져간다) 길면 3줄로 늘어진다
      '<b>'+(ios?'홈 화면에 추가하면 알림을 받아요':'새 댓글을 바로 알려드려요')+'</b>'+
      '<span>'+(ios?'아이폰은 홈 화면에 추가해야 알림을 보낼 수 있어요.':'내 글의 댓글·좋아요, 커미션 문의까지.')+'</span>'+
    '</span>'+
    '<button type="button" class="nb-go" onclick="'+(ios?'openNotifSettings(event)':'notifBannerEnable(event)')+'">'+
      (ios?'방법 보기':'알림 켜기')+'</button>'+
    '<button type="button" class="nb-x" onclick="dismissNotifBanner(event)" aria-label="닫기">'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'+
    '</button>'+
  '</div>';
}
async function notifBannerEnable(e){
  if(e&&e.stopPropagation)e.stopPropagation();
  await enablePushNotifications();
  // 켰든 거절했든 이 배너는 할 일이 끝났다(거절이면 다시 물어볼 수 없다)
  var el=document.getElementById("notifBanner");if(el)el.remove();
  if(notifPermState()!=="granted")dismissNotifBanner();
}
function openNotifSettings(e){
  if(e&&e.stopPropagation)e.stopPropagation();
  openProfile();
  setTimeout(function(){
    var s=document.getElementById("notifSettingsSec");
    if(s)s.scrollIntoView({behavior:"smooth",block:"center"});
  },260);
}
async function enablePushNotifications(){
  if(!pushSupported()){toast("이 브라우저는 알림을 지원하지 않아요");return;}
  if(isIOSDevice()&&!isStandalonePWA()){toast("먼저 홈 화면에 추가한 뒤 그 아이콘으로 열어주세요","📲");return;}
  if(!AUTH.user){toast("로그인 후 알림을 켤 수 있어요","🔒");loginWithGoogle();return;}
  var perm;
  try{perm=await Notification.requestPermission();}catch(e){perm=notifPermState();}
  if(perm==="granted"){
    var ok=await subscribeToPush(); // 실제 푸시 구독을 서버에 저장
    try{
      var reg=await navigator.serviceWorker.ready;
      reg.showNotification("commi",{body:"알림이 켜졌어요! 🔔 받고 싶은 알림 종류를 골라주세요.",icon:"/icon-192.png",badge:"/icon-192.png",data:{url:"/?notif=settings"}});
    }catch(e){}
    toast(ok?"알림을 켰어요 🔔":"알림 권한을 켰어요 (발송 준비 중)");
  }else if(perm==="denied"){
    toast("알림이 차단돼 있어요. 브라우저 설정에서 허용해주세요");
  }else{
    toast("알림 권한을 허용하지 않았어요");
  }
  if(document.getElementById("myProfileView"))openProfile();
}
function notifEnableHTML(){
  if(isIOSDevice()&&!isStandalonePWA()){
    return '<div class="pf-notif-guide">'+
      '<b>📲 iPhone에서 알림 받기</b>'+
      '<ol><li>Safari 하단 <b>공유</b> 버튼(<span aria-hidden="true">⎋</span>)을 탭</li>'+
      '<li><b>"홈 화면에 추가"</b> 선택</li>'+
      '<li>홈 화면의 <b>commi 아이콘</b>으로 다시 열기</li>'+
      '<li>그 화면에서 <b>알림 켜기</b> 누르기</li></ol>'+
      '<span class="pf-notif-sub">아이폰은 홈 화면에 추가해야만 알림이 와요 (iOS 16.4 이상).</span></div>';
  }
  if(!pushSupported()){
    return '<div class="pf-notif-guide"><b>이 브라우저는 알림을 지원하지 않아요</b><span class="pf-notif-sub">크롬·엣지·최신 사파리에서 사용해주세요.</span></div>';
  }
  var st=notifPermState();
  if(st==="granted")return '<div class="pf-notif-guide on"><b>🔔 알림이 켜져 있어요</b><span class="pf-notif-sub">아래에서 받고 싶은 알림 종류를 골라주세요.</span></div>';
  if(st==="denied")return '<div class="pf-notif-guide"><b>알림이 차단돼 있어요</b><span class="pf-notif-sub">주소창 옆 자물쇠 → 알림 → 허용으로 바꿔주세요.</span></div>';
  return '<button class="pf-notif-btn" onclick="enablePushNotifications()">🔔 알림 켜기</button>';
}

// ===== 내 정보 (프로필) =====
function reviewCardHTML(p){
  var isGood=p.commissionSentiment==="good";
  var img=(p.images&&p.images.length)?p.images[0]:null;
  return '<div class="review-card" onclick="openPost('+p.id+')">'+
    (img?'<div class="review-img"><img src="'+esc(img)+'" alt="" loading="lazy"></div>':'<div class="review-img review-img-empty">💬</div>')+
    '<div class="review-meta">'+
      '<span class="review-sentiment '+(isGood?"good":"bad")+'">'+(isGood?"😊 만족":"😞 불호")+'</span>'+
      '<span class="review-author">'+esc(dispName(p.author))+'</span>'+
      '<span class="review-time">'+p.time+'</span>'+
    '</div>'+
  '</div>';
}
function reviewAlbumHTML(reviews){
  if(!reviews.length)return"";
  return '<div class="review-album">'+reviews.map(reviewCardHTML).join("")+'</div>';
}
function profileRow(p){
  var c=catFor(p);
  return '<div class="post rip" onclick="openPost('+p.id+')">'+
    '<div class="pmain"><div class="ptitle">'+esc(p.title)+'</div>'+
    '<div class="pmeta"><span class="cat '+c.cls+'">'+c.label+'</span>'+
    '<span class="mt">'+p.time+'</span><span class="sep"></span><span class="mv">조회 '+fmtViews(p.views)+'</span>'+
    (p.likes?'<span class="sep"></span><span class="ml">추천 '+p.likes+'</span>':'')+'</div></div>'+
    postThumbHTML(p)+
    '<div class="pcmt"><span class="cn">'+p.comments.length+'</span><span class="cl">댓글</span></div></div>';
}
function pinnedPostCardHTML(pinnedPostId){
  if(!pinnedPostId)return"";
  var p=POSTS.find(function(x){return x.dbId===pinnedPostId});
  if(!p)return"";
  var c=catFor(p);
  var thumb=p.images&&p.images.length?p.images[0]:null;
  return '<div class="pinned-post" onclick="openPost('+p.id+')">'+
    '<span class="pinned-label">📌 대표 글</span>'+
    (thumb?thumbImgHTML(thumb,'class="pinned-thumb"'):'')+
    '<div class="pinned-body"><div class="pinned-title">'+esc(p.title)+'</div>'+
    '<div class="pinned-meta"><span class="cat '+c.cls+'">'+c.label+'</span><span>추천 '+p.likes+' · 댓글 '+p.comments.length+'</span></div></div>'+
  '</div>';
}
function setPfTab(t){pfTab=t;openProfile();}
function listOrEmpty(arr,emptyMsg,cta){
  if(arr.length)return '<div class="list">'+arr.map(profileRow).join("")+'</div>';
  return '<div class="pf-empty">'+emptyMsg+(cta?'<button onclick="openWrite()">✏️ 첫 글 쓰기</button>':'')+'</div>';
}
// 포스타입식 메뉴 한 줄: 왼쪽 선(line) 아이콘 + 이름, 오른쪽 개수/화살표. opts:{count, chev:false, danger}
function pfMiniIcon(inner){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+inner+'</svg>';}
/* 프로필 섹션 카드 — 제목 + 한 줄 설명 + 내용을 연한 회색 카드로 묶는다 */
function pfSection(title,desc,inner,id){
  // 줄 목록은 하나의 이어진 카드로 감싼다 — 낱개로 띄워 두면 경계가 흐려 구분이 안 된다.
  // 2x2 타일은 격자라 감싸지 않는다.
  var body=(inner.indexOf('class="pf-tiles"')>-1)?inner:('<div class="pf-list">'+inner+'</div>');
  return '<div class="pf-group"'+(id?' id="'+id+'"':'')+'>'+
    '<div class="pf-group-head"><div class="pf-group-title">'+title+'</div>'+
    (desc?'<div class="pf-group-desc">'+desc+'</div>':'')+'</div>'+body+'</div>';
}
/* 자주 쓰는 기능은 2x2 타일로 — 아이콘 + 제목 + 작은 설명 */
function pfTile(icon,title,sub,onclick,count){
  return '<button type="button" class="pf-tile" onclick="'+onclick+'">'+
    '<span class="pf-tile-ic">'+icon+'</span>'+
    '<span class="pf-tile-t">'+title+(count!=null?'<i>'+count+'</i>':'')+'</span>'+
    '<span class="pf-tile-s">'+sub+'</span></button>';
}
function pfRow(icon,label,onclick,opts){
  opts=opts||{};
  var right='';
  if(opts.count!=null)right+='<span class="pf-item-count">'+opts.count+'</span>';
  if(opts.chev!==false)right+='<svg class="pf-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
  return '<button type="button" class="pf-item'+(opts.danger?' danger':'')+'" onclick="'+onclick+'">'+
    '<span class="pf-item-ic">'+icon+'</span>'+
    '<span class="pf-item-label">'+label+'</span>'+
    '<span class="pf-item-right">'+right+'</span></button>';
}
// 프로필의 '내 글' 계열(쓴 글/댓글 단 글/좋아요/최근 본 글)을 각각 별도 화면으로 표시(메뉴 행에서 진입)
function openPfList(kind){
  if(!AUTH.user)return;
  userLeftHome=true;
  enterScreen("pfList",openProfile); // 히스토리에 프로필을 남겨, 스와이프/뒤로가기가 프로필로 정확히 복귀
  var mine=POSTS.filter(function(p){return p.author==="나"||(AUTH.user&&p.authorId===AUTH.user.id)});
  var commented=POSTS.filter(function(p){return p.author!=="나"&&p.comments.some(function(c){return c.n==="나"})});
  var likedArr=POSTS.filter(function(p){return p._liked});
  var recent=[];Array.from(READ).reverse().forEach(function(id){var p=POSTS.find(function(x){return x.id===id});if(p)recent.push(p)});
  // 저장한 글 — POST_BM에는 DB의 진짜 id(dbId)가 들어 있다
  var saved=POSTS.filter(function(p){return p.dbId&&isPostBookmarked(p.dbId);});
  recent=recent.slice(0,10);
  var M={mine:["쓴 글",mine,'아직 쓴 글이 없어요.<br>첫 이야기를 올려볼까요?',true],
         cm:["댓글 단 글",commented,'댓글을 단 글이 아직 없어요.<br>마음에 드는 글에 댓글을 남겨보세요!',false],
         liked:["좋아요",likedArr,'좋아요한 글이 아직 없어요.<br>마음에 드는 그림에 하트를 눌러보세요!',false],
         recent:["최근 본 글",recent,'최근 본 글이 없어요.',false],
         saved:["저장한 글",saved,'저장한 글이 아직 없어요.<br>글 상세에서 저장을 눌러보세요!',false]};
  var m=M[kind]||M.mine;
  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>내 정보로</button>'+
    '<div class="pf-list-head">'+m[0]+' <span>'+m[1].length+'</span></div>'+
    listOrEmpty(m[1],m[2],m[3])+
  '</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"auto"});
}
// keepStack=true면 커미션·채팅 같은 앱 내부 화면 흐름 '안에서' 열린 것 — 스택을 비우거나
// URL(/user/)로 바꾸지 않고, 그 화면 흐름의 뒤로가기 스택에 그대로 얹혀 한 단계씩 돌아가게 함.
async function openUserProfile(userId,keepStack){
  if(!userId||!window.supabase)return;
  userLeftHome=true;
  if(!keepStack)resetScreens();
  leaveChat();
  closeNotif();
  var res=await window.supabase.from("profiles").select("*").eq("id",userId).single();
  if(res.error||!res.data){
    document.getElementById("main").innerHTML='<div class="profile"><div class="empty"><h3>사용자를 찾을 수 없어요</h3></div></div>';
    return;
  }
  var profile=res.data;
  if(!keepStack){
    var targetPath="/user/"+userId;
    if(location.pathname!==targetPath)history.pushState({},"",targetPath);
  }
  document.title=profile.nickname+"님의 프로필 · commi";
  var theirPosts=POSTS.filter(function(p){return p.authorId===userId});
  var likeSum=theirPosts.reduce(function(a,p){return a+p.likes},0);
  var canChat=AUTH.user&&AUTH.user.id!==userId;
  var theirReviewStats=pfReviewStats(userId,profile.nickname);
  var theirBookmarkCount=await pfBookmarkCount(userId);
  var artistCommissions=await pfArtistCommissions(userId,profile.nickname,profile.avatar_url);
  artistCommissions.forEach(function(d){if(!cmData.some(function(x){return x.id===d.id;}))cmData.push(d);});
  if(AUTH.user&&cmBookmarkIds===null)await cmLoadMyBookmarks();
  if(pfReviewsForUserId!==userId){pfReviewsExpanded=false;pfReviewsForUserId=userId;}
  var theirReviewList=pfArtistReviewList(userId,profile.nickname);
  var h='<div class="profile">';
  h+=pfHeroHTML({nickname:profile.nickname,level:profile.level,avatar_url:profile.avatar_url,
    cover_url:profile.cover_url,bio:profile.bio,sns_twitter:profile.sns_twitter,sns_instagram:profile.sns_instagram,sns_email:profile.sns_email,sns_link:profile.sns_link},
    false,theirReviewStats,theirBookmarkCount,
    // 채팅·뮤트·차단·메모는 남의 프로필에서만(자기 자신에겐 의미가 없다). 내용은 renderPfHeroActions가 채운다.
    canChat?'<div class="pfh-acts" id="pfHeroActions"></div>':'');
  // 메모 입력칸은 접어 둔다 — 소개 영역의 '📝 메모'를 누르면 펼쳐진다
  if(canChat)h+='<div class="unote" id="uNoteBox" hidden></div>';
  h+=pfCommissionListHTML(artistCommissions);
  h+=pinnedPostCardHTML(profile.pinned_post_id);
  h+=pfReviewListHTML(theirReviewList,userId);
  h+='<div class="pf-stats">'+
     '<div class="pf-st"><b>'+(profile.score||0)+'</b><span>활동 점수</span></div>'+
     '<div class="pf-st"><b>'+theirPosts.length+'</b><span>쓴 글</span></div>'+
     '<div class="pf-st"><b>'+likeSum+'</b><span>받은 추천</span></div></div>';
  h+='<div class="pf-follow-bar" id="pfFollowBar"></div>';
  h+='<div class="pf-sec">쓴 글 ('+theirPosts.length+')</div>';
  h+=listOrEmpty(theirPosts,esc(profile.nickname)+'님이 쓴 글이 아직 없어요.');
  h+='<button class="pf-edit" style="margin-top:16px" onclick="renderList()">← 목록으로</button>';
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  renderUserNoteBox(userId,profile.nickname);
  loadFollowBar(userId);
  window.scrollTo({top:0,behavior:"smooth"});
}
function getUserIdFromPath(){
  var m=location.pathname.match(/^\/user\/([0-9a-fA-F-]{36})$/);
  return m?m[1]:null;
}

/* ---------- 1:1 채팅 ---------- */
var currentConversationId=null;
var currentChatPartnerId=null;
var currentChatPartnerName="";
var currentChatPartnerAvatar=null;
var chatChannel=null;
var chatRoomVpListener=null;
var chatScrollLockY=null;
function unsubscribeFromChat(){
  if(chatChannel){window.supabase.removeChannel(chatChannel);chatChannel=null;}
}
// 채팅방이 열려 있는 동안 배경(피드) 스크롤을 잠가, iOS가 입력창 포커스 시 페이지를 스크롤(→고정 헤더가 위로 사라지고 하단에 빈 여백 생김)하는 것을 막는다.
function lockBodyForChat(){
  if(chatScrollLockY!=null)return;
  chatScrollLockY=window.scrollY||window.pageYOffset||0;
  var b=document.body.style;
  b.position="fixed";b.top=(-chatScrollLockY)+"px";b.left="0";b.right="0";b.width="100%";
}
function unlockBodyForChat(){
  if(chatScrollLockY==null)return;
  var b=document.body.style;
  b.position="";b.top="";b.left="";b.right="";b.width="";
  window.scrollTo(0,chatScrollLockY);
  chatScrollLockY=null;
}
// 입력창 높이를 내용에 맞춰 한 줄 → 여러 줄로 자연스럽게 확장(최대 100px)
function autoGrowChatInput(ta){
  if(!ta)return;
  ta.style.height="auto";
  ta.style.height=Math.min(ta.scrollHeight,100)+"px";
  var box=document.getElementById("chatMessages");if(box)box.scrollTop=box.scrollHeight;
}
// 채팅방 오버레이: top은 고정(헤더 안 움직임)하고 bottom만 키보드 높이만큼 올려 아래에서만 줄어들게 함.
// CSS transition(bottom)으로 한 프레임 점프가 아니라 부드럽게 올라오는 효과.
/* ⚠️ body.kb-open(키보드 중 하단 바 숨김)의 주인은 **아래쪽 focusin/focusout 한 곳뿐**이다.
   2026-08-14에 여기 visualViewport resize 기반 토글러를 하나 더 얹었다가 —
   기존 focus 기반 시스템이 있는 걸 모르고 — 두 주인이 경쟁했다: focusout이 끈 것을
   키보드 닫힘 애니메이션 중의 늦은 resize가 다시 켜서, **탭바가 사라진 채 고착**됐다
   (같은 날 사용자 신고로 발견·제거). 키보드 판정을 다시 만들 일이 있으면 먼저
   focusin/focusout 쪽(isTextInput·touchKeyboard·syncKbOpen)을 볼 것. */

/* instant=true 면 전환 없이 즉시 이동.
   ⚠️ 키보드 개폐(resize)는 부드럽게 미끄러지고, 손가락 팬(scroll)은 즉시 따라가야 한다 —
      스크롤에까지 전환을 걸면 화면이 손가락을 0.2초 늦게 따라오는 고무줄이 된다.
   ⚠️ 상단(top)은 **일부러 보정하지 않는다**(2026-08-14 사용자 결정). 한때 iOS가 화면을
      밀 때(vv.offsetTop) 헤더·배너를 붙잡으려 top도 옮겼는데, iOS의 자체 이동과 싸우느라
      움직임이 튀고 틈이 비치는 문제만 낳았다. 키보드가 떠 있는 동안 머리가 잠시 가려지는
      건 허용한다 — 아래(입력줄)만 키보드 위에 정확히 얹는 것이 이 함수의 일이다. */
function fitChatRoom(instant){
  var el=document.getElementById("chatRoom");if(!el||!el.classList.contains("open"))return;
  el.style.transition=instant?"none":"bottom .22s cubic-bezier(.33,0,.2,1)";
  var vv=window.visualViewport;
  var kb=vv?Math.max(0,Math.round((window.innerHeight||0)-vv.height-(vv.offsetTop||0))):0;
  el.style.bottom=kb+"px";
  el.classList.toggle("kb-up",kb>2); // 키보드가 떠 있으면 입력줄 하단 여백 축소
  var box=document.getElementById("chatMessages");if(box)box.scrollTop=box.scrollHeight;
}
function leaveChat(){
  unsubscribeFromChat();
  // 비로그인 문의방은 실시간 대신 주기적으로 가져오므로, 방을 떠날 때 반드시 멈춘다
  // (안 멈추면 다른 화면에서도 5초마다 조회가 계속 나간다)
  if(typeof guestStopPoll==="function")guestStopPoll();
  currentConversationId=null;
  currentChatPartnerId=null;
  cmPendingChatRef=null;
  document.body.classList.remove("chat-open");
  unlockBodyForChat();
  var el=document.getElementById("chatRoom");
  if(el){el.classList.remove("open","kb-up");el.innerHTML="";el.style.height="";el.style.transform="";el.style.bottom="";el.style.top="";el.style.transition="";}
  if(chatRoomVpListener&&window.visualViewport){window.visualViewport.removeEventListener("resize",chatRoomVpListener);window.visualViewport.removeEventListener("scroll",chatRoomVpListener);chatRoomVpListener=null;}
}
/* ---------- 알림 (DB 저장, notifications 테이블) ---------- */
var globalNotifChannel=null;
function dbRowToNotif(row){
  // ⚠️ conversationId를 빠뜨리면 안 된다 — 손님(비로그인) 문의 알림에는 link_chat_user가 없어서
  //    (계정이 없으므로) notifClick이 갈 곳을 못 찾고 맨 아래 openRules()로 떨어진다.
  //    실제로 "손님 문의 알림을 누르면 이용규칙 창이 뜨는" 증상이 났다(2026-08-14 사용자 신고).
  return {dbId:row.id,type:row.type,icon:row.icon||"🔔",txt:row.content,time:timeAgo(row.created_at),chatUser:row.link_chat_user,conversationId:row.link_conversation_id||null,post:row.link_post_id?100000+row.link_post_id:null,commission:row.link_commission_id||null,reviewUser:row.link_reviewed_user_id||null,read:row.is_read};
}
async function loadNotificationsFromDB(){
  var res=await window.supabase.from("notifications").select("*").eq("user_id",AUTH.user.id).order("created_at",{ascending:false}).limit(50);
  if(res.error)return;
  var dbNotifs=(res.data||[]).map(dbRowToNotif);
  NOTIFS=dbNotifs.concat(NOTIFS.filter(function(n){return !n.dbId}));
  syncNotifBadge();
}
async function initGlobalChatNotifications(){
  if(!AUTH.user||!window.supabase)return;
  await loadNotificationsFromDB();
  subscribeToNotifications();
}
function subscribeToNotifications(){
  unsubscribeFromNotifications();
  globalNotifChannel=window.supabase.channel("notifications-"+AUTH.user.id)
    .on("postgres_changes",{event:"INSERT",schema:"public",table:"notifications",filter:"user_id=eq."+AUTH.user.id},function(payload){
      var row=payload.new;
      if(row.type==="chat"){
        if(!SETTINGS.chat)return;
        if(row.link_conversation_id===currentConversationId)return;
      }else if(row.type==="cm"&&!SETTINGS.cm)return;
      else if(row.type==="like"&&!SETTINGS.like)return;
      else if(row.type==="cm_inquiry"&&!SETTINGS.cminquiry)return;
      NOTIFS.unshift(dbRowToNotif(row));
      syncNotifBadge();
      toast(row.content,row.icon||"🔔");
    })
    .subscribe();
}
function unsubscribeFromNotifications(){
  if(globalNotifChannel){window.supabase.removeChannel(globalNotifChannel);globalNotifChannel=null;}
}
function subscribeToChat(conversationId){
  unsubscribeFromChat();
  chatChannel=window.supabase.channel("chat-"+conversationId)
    .on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:"conversation_id=eq."+conversationId},function(payload){
      var m=payload.new;
      if(m.sender_id===AUTH.user.id)return;
      appendChatMessage(m);
      window.supabase.rpc("mark_messages_read",{p_conversation_id:conversationId}).then(function(){});
    })
    .on("postgres_changes",{event:"UPDATE",schema:"public",table:"messages",filter:"conversation_id=eq."+conversationId},function(payload){
      var m=payload.new;
      if(m.sender_id===AUTH.user.id&&m.is_read)markBubbleAsRead(m.id);
    })
    .subscribe();
}
function markBubbleAsRead(messageId){
  var el=document.querySelector('[data-msg-id="'+messageId+'"] .chat-read-status');
  if(el)el.textContent="읽음";
}
function appendChatMessage(m){
  var box=document.getElementById("chatMessages");
  if(!box)return;
  // 처음 보는 이모티콘이면 주소를 받아온 뒤 그 말풍선만 다시 그린다
  var need=emoIdsIn(m.content).filter(function(id){return !EMO_BY_ID[id];});
  if(need.length){
    ensureEmoticons(need).then(function(){
      var el=box.querySelector('[data-msg-id="'+m.id+'"] .chat-bubble');
      if(el)el.innerHTML=withEmoticons(esc(m.content));
    });
  }
  var empty=box.querySelector(".pf-empty");if(empty)empty.remove();
  var div=document.createElement("div");
  div.className="chat-msg";
  div.setAttribute("data-msg-id",m.id);
  div.innerHTML='<div class="chat-bubble"></div>';
  // 이모티콘 토큰을 이미지로 바꿔야 하므로 innerHTML을 쓴다.
  // esc()로 먼저 막고, withEmoticons가 우리 DB의 이모티콘만 넣는다(임의 HTML은 못 들어옴).
  div.querySelector(".chat-bubble").innerHTML=m.image_url
    ? '<img class="cr-img" src="'+esc(m.image_url)+'" alt="사진" loading="lazy">'
    : withEmoticons(esc(m.content));
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
}
async function findOrCreateConversation(otherUserId){
  var q="and(user1_id.eq."+AUTH.user.id+",user2_id.eq."+otherUserId+"),and(user1_id.eq."+otherUserId+",user2_id.eq."+AUTH.user.id+")";
  var find=await window.supabase.from("conversations").select("*").or(q).maybeSingle();
  if(find.data)return find.data;
  var ins=await window.supabase.from("conversations").insert({user1_id:AUTH.user.id,user2_id:otherUserId}).select().single();
  if(!ins.error)return ins.data;
  var retry=await window.supabase.from("conversations").select("*").or(q).maybeSingle();
  if(retry.data)return retry.data;
  toast("채팅방을 여는 데 실패했어요: "+ins.error.message);
  return null;
}
async function openChat(otherUserId){
  if(!AUTH.user){toast("로그인이 필요해요");loginWithGoogle();return;}
  if(otherUserId===AUTH.user.id){toast("나 자신과는 채팅할 수 없어요");return;}
  // 내가 차단한 사람 — 서버도 막지만, 화면을 열었다가 보내기에서 실패하면 더 답답하다.
  // (상대가 나를 차단한 경우는 여기서 알 수 없다. 그건 서버가 막고 안내 문구로 알린다.)
  if(isBlocked(otherUserId)){toast("차단한 사람이에요. 차단을 풀면 채팅할 수 있어요","🚫");return;}
  closeNotif();
  document.getElementById("main").innerHTML='<div class="profile"><p style="padding:40px 0;text-align:center;color:var(--muted)">불러오는 중...</p></div>';

  var conv=await findOrCreateConversation(otherUserId);
  if(!conv)return;
  currentConversationId=conv.id;
  currentChatPartnerId=otherUserId;

  var profRes=await window.supabase.from("profiles").select("nickname,avatar_url").eq("id",otherUserId).single();
  var partnerName=profRes.data?profRes.data.nickname:"상대방";
  currentChatPartnerName=partnerName;
  currentChatPartnerAvatar=profRes.data?profRes.data.avatar_url:null;

  var msgRes=await window.supabase.from("messages").select("*").eq("conversation_id",conv.id).order("created_at",{ascending:true});
  if(msgRes.error){toast("대화를 불러오지 못했어요: "+msgRes.error.message);return;}
  enterScreen("chatRoom",openChatList);
  await ensureChatEmoticons(msgRes.data||[]); // 말풍선을 그리기 전에 이모티콘 주소를 채운다
  await chatImageSupported();                // '+' 버튼을 보여줄지 미리 판단
  renderChatView(partnerName,msgRes.data||[]);
  subscribeToChat(conv.id);
  window.supabase.rpc("mark_messages_read",{p_conversation_id:conv.id}).then(function(){});
}
var CHAT_WEEKDAYS=["일","월","화","수","목","금","토"];
function chatTimeLabel(iso){var d=new Date(iso);var hh=d.getHours(),ampm=hh<12?"오전":"오후",h12=hh%12||12;return ampm+" "+String(h12).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");}
function chatDividerLabel(iso){var d=new Date(iso);return d.getFullYear()+"."+String(d.getMonth()+1).padStart(2,"0")+"."+String(d.getDate()).padStart(2,"0")+" ("+CHAT_WEEKDAYS[d.getDay()]+")";}
// 대화에 쓰인 이모티콘을 한 번에 불러온다. 없으면 말풍선이 빈 채로 보인다.
async function ensureChatEmoticons(messages){
  var ids=[];
  (messages||[]).forEach(function(m){ids=ids.concat(emoIdsIn(m.content));});
  if(ids.length)await ensureEmoticons(ids);
}
function chatMessagesHtml(messages){
  if(!messages.length)return '<div class="cr-empty">아직 대화가 없어요. 첫 메시지를 보내보세요!</div>';
  var h="",lastDay="",prevSender=null;
  messages.forEach(function(m){
    var dayKey=new Date(m.created_at).toDateString();
    if(dayKey!==lastDay){h+='<div class="cr-divider"><span>'+esc(chatDividerLabel(m.created_at))+'</span></div>';lastDay=dayKey;prevSender=null;}
    var mine=m.sender_id===AUTH.user.id;
    var firstOfGroup=(m.sender_id!==prevSender);prevSender=m.sender_id;
    var time='<span class="cr-time">'+esc(chatTimeLabel(m.created_at))+'</span>';
    var bcls='cr-bubble'+(m.commission_id?' cr-commission':'');
    var bclick=m.commission_id?(' onclick="cmOpenCommissionById('+m.commission_id+')"'):'';
    // 사진 메시지는 이미지로, 그 외엔 글자로. 주소는 우리가 저장한 값만 쓴다.
    var content=(m.image_url
        ? '<img class="cr-img" src="'+esc(m.image_url)+'" alt="사진" loading="lazy" onclick="openImageViewer(&quot;'+cmQ(m.image_url)+'&quot;)">'
        : withEmoticons(esc(m.content)))
      +(m.commission_id?' <span class="cr-arrow">→</span>':'');
    if(mine){
      h+='<div class="cr-row mine">'+
        '<div class="cr-meta">'+(m.is_read?'<span class="cr-read">읽음</span>':'')+time+'</div>'+
        '<div class="'+bcls+'"'+bclick+'>'+content+'</div>'+
      '</div>';
    }else{
      h+='<div class="cr-row other'+(firstOfGroup?' first':'')+'">'+
        '<div class="cr-ava">'+(firstOfGroup?avatarHTML(currentChatPartnerName,currentChatPartnerAvatar):'')+'</div>'+
        '<div class="cr-other-main">'+
          (firstOfGroup?'<div class="cr-name">'+esc(currentChatPartnerName)+'</div>':'')+
          '<div class="cr-other-line"><div class="'+bcls+'"'+bclick+'>'+content+'</div>'+time+'</div>'+
        '</div>'+
      '</div>';
    }
  });
  return h;
}
var chatListCache=null; // 마지막으로 그린 채팅 목록 데이터 — 재방문 시 즉시 표시용(뒤에서 최신으로 교체)
var _chatListBack=null; // 채팅 목록에서 '뒤로' 갈 곳(들어온 곳 기억): 홈 탭이면 goHome, 프로필 메뉴면 openProfile
/* 방 번호로 채팅 열기 — 알림에서 쓴다. 방을 읽어 상대를 알아낸 뒤,
   일반 방이면 openChat(상대), 손님 문의방이면 openGuestRoomAsOwner로 간다. */
async function openConversationById(conversationId){
  if(!AUTH.user||!conversationId)return;
  var res=await window.supabase.from("conversations").select("*").eq("id",conversationId).maybeSingle();
  if(res.error||!res.data){toast("대화방을 찾을 수 없어요(삭제되었을 수 있어요)");return;}
  var c=res.data;
  if(c.guest_code){openGuestRoomAsOwner(c.id,c.guest_name||"손님");return;}
  var other=(c.user1_id===AUTH.user.id)?c.user2_id:c.user1_id;
  if(other)openChat(other);
}

/* 작가가 비로그인 문의방을 여는 경로.
   손님은 계정이 없어서 openChat(상대id)를 쓸 수 없다 — 방 번호로 직접 연다.
   작가 자신은 user1_id라 RLS를 그대로 통과하므로 표를 평소처럼 조회하면 된다. */
async function openGuestRoomAsOwner(conversationId,guestName){
  if(!AUTH.user)return;
  closeNotif();
  currentConversationId=conversationId;
  currentChatPartnerId=null;              // 누를 프로필이 없다
  currentChatPartnerName=guestName||"손님";
  currentChatPartnerAvatar=null;
  var msgRes=await window.supabase.from("messages").select("*")
    .eq("conversation_id",conversationId).order("created_at",{ascending:true});
  if(msgRes.error){toast("대화를 불러오지 못했어요: "+msgRes.error.message);return;}
  enterScreen("chatRoom",openChatList);
  await ensureChatEmoticons(msgRes.data||[]);
  await chatImageSupported();
  renderChatView(currentChatPartnerName,msgRes.data||[],{guest:true});
  subscribeToChat(conversationId);
  window.supabase.rpc("mark_messages_read",{p_conversation_id:conversationId}).then(function(){});
}

/* ===== 비로그인 커미션 문의 ===================================================
   로그인하지 않은 사람도 작가에게 문의할 수 있게 한다. 계정이 없으니 방을 다시 찾을
   열쇠가 따로 필요한데, 그게 **채팅방 코드**다.
   ⚠️ 표는 비로그인에게 잠겨 있다. 여기서 하는 모든 일은 guest_* RPC로만 이뤄진다
      (docs/sql/guest-commission-chat.sql). 화면에서 코드로 거르는 게 아니라 **서버가 검증한다** —
      화면에서만 거르면 아무나 남의 대화를 통째로 읽을 수 있다.
   ⚠️ 실시간(Realtime)도 RLS를 따르므로 손님에겐 이벤트가 오지 않는다.
      대신 방을 열어 둔 동안에만 주기적으로 새 메시지를 가져온다(닫으면 멈춘다). */
var GUEST={code:null,convId:null,artist:"작가",lastId:0,timer:null};
var GUEST_KEY="palo_guest_chats";
function guestSaved(){try{var a=JSON.parse(localStorage.getItem(GUEST_KEY)||"[]");return Array.isArray(a)?a:[];}catch(e){return[];}}
function guestRemember(rec){
  var a=guestSaved().filter(function(x){return x.code!==rec.code;});
  a.unshift(rec);if(a.length>20)a=a.slice(0,20);
  try{localStorage.setItem(GUEST_KEY,JSON.stringify(a));}catch(e){}
}
function guestFmtCode(c){ // 화면에 보일 때만 4자씩 끊는다(저장·비교는 붙여서)
  c=String(c||"");
  return c.length===12?(c.slice(0,4)+"-"+c.slice(4,8)+"-"+c.slice(8)):c;
}
var GUEST_ERRS={
  empty_message:"문의 내용을 적어주세요",
  too_long:"내용이 너무 길어요(2000자까지)",
  no_commission:"커미션을 찾을 수 없어요",
  adult_login_required:"성인 커미션은 로그인 후 본인확인을 해야 문의할 수 있어요",
  no_room:"그 코드로 된 문의를 찾을 수 없어요. 코드를 다시 확인해주세요"
};
/* "문의하기"(비로그인) — 별도 창 없이 바로 채팅 화면을 연다(2026-08-14 사용자 요청).
   방은 아직 없다(첫 메시지를 보내는 순간 만든다 — 열어만 보고 나가면 빈 방이 안 생긴다).
   경고는 창 대신 대화창 상단 배너로 보여준다. */
function guestOpenInquiry(commissionId,title){
  GUEST.code=null;GUEST.convId=null;GUEST.lastId=0;
  GUEST.draftCommissionId=commissionId;GUEST.draftTitle=title||"커미션";
  // 작가 이름은 화면에 이미 있다 — 상세 컨텍스트에서 가져온다(못 찾으면 "작가")
  try{var d=cmData[cmDetailCtx.idx];GUEST.artist=(d&&d.artist)||"작가";}catch(e){GUEST.artist="작가";}
  userLeftHome=true;
  // 뒤로가기 = 채팅 덮개만 닫는다 → 밑에 있던 커미션 상세가 그대로 드러난다
  enterScreen("guestRoom",function(){guestStopPoll();leaveChat();});
  guestRenderRoom({messages:[]},false);
  // ⚠️ 입력창에 자동 포커스를 주지 않는다 — 폰에서 키보드가 바로 올라오면서 화면이
  //    입력창 쪽으로 밀려, 상단의 비로그인 경고·코드 안내 배너가 시야 밖으로 나갔다
  //    (2026-08-14 사용자 신고: "스크롤을 위로 올려야 보여"). 안내를 먼저 읽게 두고,
  //    입력은 사용자가 직접 탭할 때 시작한다.
}
/* 코드로 방 열기. firstTime이면 코드 배너를 펼친 채로 시작한다 —
   여기서 코드를 놓치면 대화를 통째로 잃기 때문에 처음 한 번은 접어두지 않는다. */
async function guestOpenRoom(code,firstTime){
  var res=await window.supabase.rpc("guest_fetch_chat",{p_code:code,p_after:0});
  if(res.error){toast("불러오지 못했어요: "+res.error.message);return;}
  var d=res.data||{};
  if(!d.ok){toast(GUEST_ERRS[d.error]||"불러오지 못했어요");return;}
  GUEST.code=code;GUEST.convId=d.conversation_id;GUEST.artist=d.artist_nickname||"작가";
  GUEST.lastId=0;
  guestRemember({code:code,title:(guestSaved().find(function(x){return x.code===code;})||{}).title||"",at:Date.now()});
  userLeftHome=true;
  // 문의 초안(guestOpenInquiry)에서 넘어온 경우엔 이미 guestRoom 화면 위다 —
  // 또 쌓으면 뒤로가기를 두 번 눌러야 나가진다.
  var top=screenStack.length&&screenStack[screenStack.length-1];
  if(!(top&&top.key==="guestRoom"))enterScreen("guestRoom",function(){guestStopPoll();leaveChat();});
  guestRenderRoom(d,firstTime);
  guestStartPoll();
  window.supabase.rpc("guest_mark_read",{p_code:code}).then(function(){});
}
function guestMessagesHtml(msgs){
  if(!msgs||!msgs.length)return '<div class="cr-empty">아직 대화가 없어요.</div>';
  var h="",lastDay="";
  msgs.forEach(function(m){
    var dayKey=new Date(m.created_at).toDateString();
    if(dayKey!==lastDay){h+='<div class="cr-divider"><span>'+esc(chatDividerLabel(m.created_at))+'</span></div>';lastDay=dayKey;}
    var time='<span class="cr-time">'+esc(chatTimeLabel(m.created_at))+'</span>';
    var content=(m.image_url
      ? '<img class="cr-img" src="'+esc(m.image_url)+'" alt="사진" loading="lazy" onclick="openImageViewer(&quot;'+cmQ(m.image_url)+'&quot;)">'
      : withEmoticons(esc(m.content)));
    // mine: 서버가 'sender_id가 비어 있음'(=손님이 보냄)으로 판정해서 내려준다
    if(m.mine){
      h+='<div class="cr-row mine"><div class="cr-meta">'+time+'</div>'+
        '<div class="cr-bubble">'+content+'</div></div>';
    }else{
      h+='<div class="cr-row other first"><div class="cr-ava">'+avatarHTML(GUEST.artist,null)+'</div>'+
        '<div class="cr-other-main"><div class="cr-name">'+esc(GUEST.artist)+'</div>'+
        '<div class="cr-other-line"><div class="cr-bubble">'+content+'</div>'+time+'</div></div></div>';
    }
  });
  return h;
}
function guestCodeBoxHTML(open){
  return '<div class="g-codebox'+(open?' open':'')+'" id="guestCodeBox">'+
    '<div class="g-code-head" onclick="guestToggleCode()">'+
      '<span class="g-code-key">🔑 채팅방 코드</span>'+
      '<code class="g-code">'+esc(guestFmtCode(GUEST.code))+'</code>'+
      '<span class="g-code-toggle">▾</span></div>'+
    '<div class="g-code-body">'+
      '<p>이 코드를 <b>저장해두세요.</b> 로그인하지 않아서, 브라우저 기록이 지워지면 이 코드가 대화를 되찾는 유일한 방법이에요. 답장 알림도 받을 수 없어요.</p>'+
      '<div class="g-row"><button type="button" class="g-btn" onclick="guestCopyCode()">코드 복사</button>'+
      '<button type="button" class="g-btn ghost" onclick="openLoginModal()">로그인해서 계속 받기</button></div>'+
    '</div></div>';
}
function guestToggleCode(){var b=document.getElementById("guestCodeBox");if(b)b.classList.toggle("open");}
function guestCopyCode(){
  var v=guestFmtCode(GUEST.code);
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(v).then(function(){toast("코드를 복사했어요","🔑")},function(){toast("복사에 실패했어요")});
  }else toast("이 브라우저에서는 복사를 지원하지 않아요");
}
function guestRenderRoom(d,firstTime){
  var el=document.getElementById("chatRoom");
  if(!el)return;
  // 코드가 아직 없으면(=방을 만들기 전, 문의 초안) 코드 상자 대신 경고 배너를 보여준다
  var band=GUEST.code
    ? guestCodeBoxHTML(!!firstTime)
    : '<div class="g-draftwarn">'+
        '<div class="g-dw-ic">🔓</div>'+
        '<div class="g-dw-body">'+
          '<b class="g-dw-title">로그인하지 않고 문의하는 중이에요</b>'+
          '<p>답장이 와도 <b>알림을 받을 수 없고</b>, 브라우저 기록이 지워지면 채팅방으로 다시 돌아오지 못할 수 있어요. 첫 메시지를 보내면 드리는 <b>채팅방 코드</b>를 입력하면 돌아올 수 있지만, 로그인하고 문의하시는 걸 추천드려요.</p>'+
          '<button type="button" class="g-dw-cta" onclick="openLoginModal()">로그인하고 문의하기</button>'+
        '</div>'+
      '</div>';
  el.innerHTML=
    '<div class="cr-top">'+
      '<button class="cr-back" onclick="guestStopPoll();screenBack()" aria-label="뒤로"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>'+
      '<div class="cr-title">'+esc(GUEST.artist)+'</div>'+
    '</div>'+
    band+
    '<div id="chatMessages" class="cr-msgs">'+guestMessagesHtml(d.messages)+'</div>'+
    '<div class="cr-inputrow">'+
      '<textarea id="guestInput" rows="1" placeholder="메시지를 입력하세요." oninput="autoGrowChatInput(this)" onkeydown="if(event.key===\'Enter\'&&!event.shiftKey){event.preventDefault();guestSend();}"></textarea>'+
      '<button class="cr-send" onclick="guestSend()" aria-label="전송"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></button>'+
    '</div>';
  el.classList.add("open");
  lockBodyForChat();fitChatRoom();
  // ⚠️ 키보드 추적 리스너 — 로그인 채팅방(renderChatView)은 붙이는데 여기만 빠져 있었다.
  //    없으면 키보드가 떠도 방 크기가 안 줄어 입력창이 키보드 뒤에 숨고, iOS가 화면을
  //    밀어 상단 배너가 시야 밖으로 나갔다(2026-08-14 사용자 신고의 진짜 원인).
  if(window.visualViewport&&!chatRoomVpListener){
    chatRoomVpListener=function(e){fitChatRoom(!!e&&e.type==="scroll");};
    window.visualViewport.addEventListener("resize",chatRoomVpListener);
    window.visualViewport.addEventListener("scroll",chatRoomVpListener);
  }
  (d.messages||[]).forEach(function(m){if(m.id>GUEST.lastId)GUEST.lastId=m.id;});
  var box=document.getElementById("chatMessages");if(box)box.scrollTop=box.scrollHeight;
}
async function guestSend(){
  var inp=document.getElementById("guestInput");if(!inp)return;
  var v=inp.value.trim();if(!v)return;
  // 첫 메시지 = 이 순간 방을 만든다(문의 초안 상태). 코드가 생기면 배너를 펼쳐 보여준다.
  if(!GUEST.code){
    if(!GUEST.draftCommissionId)return;
    inp.disabled=true;
    var st=await window.supabase.rpc("guest_start_commission_chat",
      {p_commission_id:GUEST.draftCommissionId,p_message:v});
    inp.disabled=false;
    if(st.error){toast("보내지 못했어요: "+st.error.message);return;}
    var sd=st.data||{};
    if(!sd.ok){toast(GUEST_ERRS[sd.error]||"보내지 못했어요");return;}
    guestRemember({code:sd.code,title:sd.commission_title||GUEST.draftTitle||"",commissionId:GUEST.draftCommissionId,at:Date.now()});
    GUEST.draftCommissionId=null;
    // 방이 생겼으니 정식 화면으로 전환(코드 배너 펼침) + 주기 조회 시작
    await guestOpenRoom(sd.code,true);
    return;
  }
  inp.disabled=true;
  var res=await window.supabase.rpc("guest_send_message",{p_code:GUEST.code,p_content:v});
  inp.disabled=false;
  if(res.error){toast("전송 실패: "+res.error.message);return;}
  var d=res.data||{};
  if(!d.ok){toast(GUEST_ERRS[d.error]||"전송 실패");return;}
  inp.value="";autoGrowChatInput(inp);
  await guestPoll();
}
async function guestPoll(){
  if(!GUEST.code)return;
  var res=await window.supabase.rpc("guest_fetch_chat",{p_code:GUEST.code,p_after:GUEST.lastId});
  if(res.error||!res.data||!res.data.ok)return;
  var fresh=res.data.messages||[];
  if(!fresh.length)return;
  var box=document.getElementById("chatMessages");if(!box)return;
  if(box.querySelector(".cr-empty"))box.innerHTML="";
  var atBottom=(box.scrollHeight-box.scrollTop-box.clientHeight)<60; // 위를 읽는 중이면 끌어내리지 않는다
  box.insertAdjacentHTML("beforeend",guestMessagesHtml(fresh));
  fresh.forEach(function(m){if(m.id>GUEST.lastId)GUEST.lastId=m.id;});
  if(atBottom)box.scrollTop=box.scrollHeight;
  window.supabase.rpc("guest_mark_read",{p_code:GUEST.code}).then(function(){});
}
function guestStartPoll(){
  guestStopPoll();
  // ⚠️ 화면이 숨겨져 있으면 브라우저가 타이머를 늦추므로, 돌아왔을 때 한 번 즉시 가져온다.
  GUEST.timer=setInterval(function(){if(document.visibilityState==="visible")guestPoll();},5000);
}
function guestStopPoll(){if(GUEST.timer){clearInterval(GUEST.timer);GUEST.timer=null;}}
/* 로그인하면 이 브라우저에서 보낸 손님 문의를 전부 내 계정의 일반 채팅으로 바꾼다.
   서버 RPC(guest_claim_chat)가 방의 손님 자리를 내 계정으로 채우고, 같은 작가와의
   기존 대화가 있으면 거기로 합친다. 성공하든 이미 처리됐든(no_room) 목록에서 지운다 —
   남겨두면 로그인할 때마다 다시 시도한다. (RPC가 아직 없으면 조용히 건너뛴다) */
async function guestClaimAll(){
  var list=guestSaved();
  if(!list.length||!window.supabase)return;
  var kept=[],claimed=0;
  for(var i=0;i<list.length;i++){
    try{
      var r=await window.supabase.rpc("guest_claim_chat",{p_code:list[i].code});
      if(r.error){kept.push(list[i]);continue;}   // 함수 미설치·일시 오류 → 다음 로그인에 재시도
      var d=r.data||{};
      if(d.ok)claimed++;
      else if(d.error==="own_room")kept.push(list[i]); // 작가 본인 계정 — 넘겨받을 수 없는 방
      // no_room = 이미 넘겨받았거나 삭제됨 → 목록에서만 지운다
    }catch(e){kept.push(list[i]);}
  }
  try{localStorage.setItem(GUEST_KEY,JSON.stringify(kept));}catch(e){}
  if(claimed){
    chatListCache=null; // 다음에 채팅 탭을 열 때 새로 불러와 넘겨받은 방이 보이게
    toast("비로그인 문의 "+claimed+"건을 내 채팅으로 가져왔어요","💬");
  }
}
/* 코드로 다시 들어오기 */
function guestPromptCode(){
  var v=prompt("채팅방 코드를 입력해주세요 (예: ABCD-EFGH-JKLM)");
  if(v==null)return;
  v=v.trim();
  if(!v){toast("코드를 입력해주세요");return;}
  guestOpenRoom(v.replace(/[^A-Za-z0-9]/g,"").toUpperCase(),false);
}
/* 비로그인 상태의 채팅 탭 — 로그인을 강요하는 대신 내가 보낸 문의를 보여준다 */
function guestRenderChatTab(){
  var list=guestSaved();
  var h='<div class="chatlist"><div class="g-tab-head"><h3>문의 내역</h3>'+
    '<button type="button" class="g-btn ghost" onclick="guestPromptCode()">코드로 열기</button></div>';
  if(!list.length){
    h+='<div class="pf-empty">아직 문의한 커미션이 없어요.<br>커미션 상세에서 "문의하기"를 눌러보세요.<br><br>'+
       '<span style="color:var(--muted);font-size:12.5px">예전에 받은 채팅방 코드가 있다면 위 <b>코드로 열기</b>를 눌러주세요.</span></div>';
  }else{
    h+='<div class="chatlist-rows">';
    list.forEach(function(x){
      h+='<div class="clist-row" onclick="guestOpenRoom(\''+cmQ(x.code)+'\',false)">'+
        '<div class="clist-ava"><div class="clist-guest">📩</div></div>'+
        '<div class="clist-mid"><div class="clist-name">'+esc(x.title||"커미션 문의")+'</div>'+
        '<div class="clist-last">코드 '+esc(guestFmtCode(x.code))+'</div></div></div>';
    });
    h+='</div><div class="g-tab-note">이 목록은 <b>이 브라우저에만</b> 저장돼요. 기록을 지우면 사라지니 코드를 따로 보관해주세요.</div>';
  }
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}

async function openChatList(origin){
  if(!AUTH.user){
    // 로그인을 강요하지 않는다 — 비로그인으로 보낸 문의가 있을 수 있다
    curTab="chat";userLeftHome=true;
    if(!navigatingBack)resetScreens();
    enterScreen("chatList",function(){goHome();});
    _setTabUrl("chat");leaveChat();closeNotif();syncTabs("chat");
    guestRenderChatTab();
    return;
  }
  // origin: 'profile'→뒤로=프로필, 'home'→뒤로=홈, 미지정→기존 유지(채팅방에서 목록으로 복귀할 때 원래 자리 보존)
  if(origin==='profile')_chatListBack=openProfile;
  else if(origin==='home')_chatListBack=goHome;
  curTab="chat";navSeq++;
  var mySeq=navSeq; // 이 로딩을 시작한 시점의 번호표. 아래 렌더 직전에 아직 최신인지 확인.
  userLeftHome=true;
  if(!navigatingBack)resetScreens();
  enterScreen("chatList",function(){(_chatListBack||goHome)();}); // 뒤로가기 시 기억해 둔 곳(홈/프로필)으로
  _setTabUrl("chat");
  leaveChat();
  closeNotif();
  syncTabs("chat");
  // 캐시가 있으면 즉시 그려서 대기 없이 바로 보이게(아래에서 최신 데이터로 교체). 없으면 로딩 표시.
  if(chatListCache){
    renderChatList(chatListCache.convs,chatListCache.partnerIds,chatListCache.nickById,chatListCache.avaById,chatListCache.lastMsgByConv,chatListCache.unreadByConv);
  }else{
    document.getElementById("main").innerHTML='<div class="profile"><p style="padding:40px 0;text-align:center;color:var(--muted)">불러오는 중...</p></div>';
  }

  var convRes=await window.supabase.from("conversations").select("*")
    .or("user1_id.eq."+AUTH.user.id+",user2_id.eq."+AUTH.user.id)
    .order("last_message_at",{ascending:false});
  if(mySeq!==navSeq)return; // 로딩 중 사용자가 다른 탭으로 이동함 → 더 진행하지 않음(현재 화면 유지)
  if(convRes.error){toast("채팅 목록을 불러오지 못했어요: "+convRes.error.message);return;}
  var convs=convRes.data||[];
  var partnerIds=convs.map(function(c){return c.user1_id===AUTH.user.id?c.user2_id:c.user1_id;});
  var convIds=convs.map(function(c){return c.id;});

  // 프로필·메시지 조회는 서로 독립적이라 병렬로 실행(예전엔 순차 await라 왕복 지연이 2배로 쌓였음 → 채팅 로딩이 느려 씹힘 창이 컸음)
  var profMsg=await Promise.all([
    partnerIds.length?window.supabase.from("profiles").select("id,nickname,avatar_url").in("id",partnerIds):Promise.resolve({data:[]}),
    convIds.length?window.supabase.from("messages").select("conversation_id,sender_id,content,is_read,created_at,commission_id,image_url").in("conversation_id",convIds).order("created_at",{ascending:true}):Promise.resolve({data:[]})
  ]);
  var profRes=profMsg[0],msgRes=profMsg[1];
  var nickById={},avaById={};(profRes.data||[]).forEach(function(p){nickById[p.id]=p.nickname;avaById[p.id]=p.avatar_url;});

  var lastMsgByConv={},unreadByConv={};
  (msgRes.data||[]).forEach(function(m){
    lastMsgByConv[m.conversation_id]=m;
    if(m.sender_id!==AUTH.user.id&&!m.is_read)unreadByConv[m.conversation_id]=(unreadByConv[m.conversation_id]||0)+1;
  });

  /* 말 한마디 없는 방은 목록에서 숨긴다.
     "채팅하기"를 누르는 순간 conversations 행이 먼저 만들어지는 구조라, 그냥 눌러만 보고 나와도
     빈 방이 목록에 남았다(2026-08-14 사용자 신고). 방을 지우지 않고 **표시만** 거르므로,
     예전에 만들어진 빈 방도 그대로 사라지고(소급 적용), 나중에 실제로 말을 걸면
     openOrCreateConversation이 같은 행을 다시 찾아 쓰므로 대화가 이어진다. */
  var kept=[],keptPartners=[];
  convs.forEach(function(c,i){ if(lastMsgByConv[c.id]){kept.push(c);keptPartners.push(partnerIds[i]);} });
  convs=kept;partnerIds=keptPartners;

  chatListCache={convs:convs,partnerIds:partnerIds,nickById:nickById,avaById:avaById,lastMsgByConv:lastMsgByConv,unreadByConv:unreadByConv}; // 다음 재방문 시 즉시 표시용
  if(mySeq!==navSeq)return; // 로딩이 끝났지만 그새 다른 탭으로 이동함 → 채팅으로 화면을 덮어쓰지 않음
  renderChatList(convs,partnerIds,nickById,avaById,lastMsgByConv,unreadByConv);
}
function chatListDate(iso){
  if(!iso)return"";
  var d=new Date(iso),now=new Date();
  if(d.toDateString()===now.toDateString()){
    var hh=d.getHours(),ampm=hh<12?"오전":"오후",h12=hh%12||12;
    return ampm+" "+h12+":"+String(d.getMinutes()).padStart(2,"0");
  }
  if(d.getFullYear()===now.getFullYear())return (d.getMonth()+1)+"월 "+d.getDate()+"일";
  return d.getFullYear()+". "+(d.getMonth()+1)+". "+d.getDate();
}
function renderChatList(convs,partnerIds,nickById,avaById,lastMsgByConv,unreadByConv){
  var h='<div class="chatlist">'+
    '<div class="chatlist-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>'+
      '<input id="chatSearchInput" placeholder="채팅방, 대화내용 검색" oninput="filterChatList(this.value)"></div>';
  if(!convs.length){
    h+='<div class="pf-empty">아직 채팅한 사람이 없어요.<br>회원 프로필에서 "채팅하기"로 시작해보세요.</div>';
  }else{
    h+='<div class="chatlist-rows" id="chatlistRows">';
    convs.forEach(function(c,i){
      var pid=partnerIds[i];
      // 비로그인 문의방은 상대 계정이 없다(user2_id가 비어 있음). 그대로 두면 "알 수 없음"이 뜨므로
      // 방에 저장해 둔 임시 이름을 쓰고, 누르면 계정 대신 방 번호로 연다.
      var isGuest=!!c.guest_code;
      var name=isGuest?(c.guest_name||"손님"):(nickById[pid]||"알 수 없음");
      var last=lastMsgByConv[c.id];
      var preview=last?(last.commission_id?"🎨 커미션 문의":(last.image_url?"📷 사진":last.content)):"";
      var unread=unreadByConv[c.id]||0;
      var srch=(name+" "+(last?last.content:"")).toLowerCase();
      var open=isGuest?('openGuestRoomAsOwner('+c.id+',\''+cmQ(name)+'\')'):('openChat(\''+cmQ(pid)+'\')');
      var nameHtml=esc(name)+(isGuest?' <span class="g-badge">비로그인</span>':'');
      h+='<div class="clist-row" data-search="'+esc(srch)+'" onclick="'+open+'">'+
        '<div class="clist-ava">'+(isGuest?'<div class="clist-guest">📩</div>':avatarHTML(name,avaById&&avaById[pid]))+'</div>'+
        '<div class="clist-mid"><div class="clist-name">'+nameHtml+'</div>'+
          '<div class="clist-last">'+esc(preview)+'</div></div>'+
        '<div class="clist-right"><div class="clist-date">'+(last?chatListDate(last.created_at):"")+'</div>'+
          (unread>0?'<span class="clist-unread">'+unread+'</span>':'')+'</div>'+
      '</div>';
    });
    h+='</div>';
  }
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
function filterChatList(q){
  q=(q||"").trim().toLowerCase();
  var rows=document.querySelectorAll("#chatlistRows .clist-row");
  for(var i=0;i<rows.length;i++){
    var s=rows[i].getAttribute("data-search")||"";
    rows[i].style.display=(!q||s.indexOf(q)>=0)?"":"none";
  }
}
function renderChatView(partnerName,messages,opts){
  var el=document.getElementById("chatRoom");
  if(!el)return;
  // 비로그인 문의방(작가 시점): 제목에 배지 + 상대의 상태를 설명하는 띠를 붙인다.
  // 작가가 알아야 답장 템포를 조절할 수 있다 — 상대는 알림을 못 받아 답이 늦을 수 있다.
  var isGuest=!!(opts&&opts.guest);
  el.innerHTML=
    '<div class="cr-top">'+
      '<button class="cr-back" onclick="screenBack()" aria-label="뒤로"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>'+
      '<div class="cr-title">'+esc(partnerName)+(isGuest?' <span class="g-badge">비로그인</span>':'')+'</div>'+
      '<button class="cr-report" onclick="reportChat()" aria-label="신고"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg></button>'+
    '</div>'+
    (isGuest?'<div class="g-owner-band">📩 로그인하지 않고 보낸 문의예요. 상대는 <b>알림을 받지 못해</b> 답이 늦을 수 있고, 채팅방 코드로 다시 들어와요.</div>':'')+
    '<div id="chatMessages" class="cr-msgs">'+chatMessagesHtml(messages)+'</div>'+
    '<div class="cr-inputrow">'+
      '<button class="cr-icon" id="chatAttachBtn" style="display:'+(_chatImgSupported?'':'none')+'" onclick="pickChatImage()" aria-label="사진 보내기"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></button>'+
      '<textarea id="chatInput" rows="1" placeholder="메시지를 입력하세요." oninput="autoGrowChatInput(this)" onkeydown="if(event.key===\'Enter\'&&!event.shiftKey){event.preventDefault();sendChatMessage();}"></textarea>'+
      '<button class="cr-send" onclick="sendChatMessage()" aria-label="전송"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></button>'+
    '</div>'+
    '<div class="emo-strip chat" id="chatEmoStrip">'+emoStripHTML("chatInput")+'</div>';
  el.classList.add("open");
  lockBodyForChat();
  fitChatRoom();
  autoGrowChatInput(document.getElementById("chatInput"));
  if(window.visualViewport&&!chatRoomVpListener){
    chatRoomVpListener=function(e){fitChatRoom(!!e&&e.type==="scroll");};
    window.visualViewport.addEventListener("resize",chatRoomVpListener);
    window.visualViewport.addEventListener("scroll",chatRoomVpListener);
  }
  var box=document.getElementById("chatMessages");
  if(box)box.scrollTop=box.scrollHeight;
}
/* ── 채팅 이미지 첨부 ──
   messages.image_url 칸이 있어야 동작한다. 없는 환경에서 눌렀다 실패하지 않도록
   한 번만 확인해서 '+' 버튼 자체를 숨긴다(SQL을 실행하면 자동으로 나타남). */
var _chatImgSupported=null;
async function chatImageSupported(){
  if(_chatImgSupported!==null)return _chatImgSupported;
  try{
    var r=await window.supabase.from("messages").select("image_url").limit(1);
    _chatImgSupported=!r.error;
  }catch(e){_chatImgSupported=false;}
  return _chatImgSupported;
}
/* 사진 원본 보기 — 말풍선 속 이미지는 작게 나오므로 눌러서 크게 볼 수 있게 한다 */
/* ===== 원본 이미지 뷰어 =====================================================
   예전엔 주소 한 장만 받아서 띄우고 끝이었다 — 커미션 상세에서 사진을 키우면
   거기서 다음 장으로 넘어갈 방법이 없었다(2026-08-14 사용자 신고).
   이제 목록과 위치를 함께 받아 휠·스와이프·화살표키·좌우 버튼으로 넘긴다.
   목록을 안 주면 예전처럼 한 장짜리로 동작한다(채팅 사진 등). */
var IV={list:[],i:0,wheelAt:0,swipedAt:0};
function openImageViewer(url,list,i){
  var v=document.getElementById("imgViewer");
  if(!v||!url)return;
  if(Array.isArray(list)&&list.length){
    IV.list=list.slice();
    IV.i=(typeof i==="number"&&i>=0&&i<list.length)?i:Math.max(0,list.indexOf(url));
  }else{
    IV.list=[url];IV.i=0;
  }
  v.classList.add("open");
  document.body.style.overflow="hidden";
  ivShow();
}
function ivShow(){
  var im=document.getElementById("imgViewerImg"),c=document.getElementById("ivCount"),
      p=document.getElementById("ivPrev"),nx=document.getElementById("ivNext");
  var n=IV.list.length,solo=(n<2);
  if(im)im.src=IV.list[IV.i]||"";
  if(c){c.textContent=solo?"":((IV.i+1)+" / "+n);c.hidden=solo;}
  if(p)p.hidden=solo;
  if(nx)nx.hidden=solo;
}
function ivMove(e,dir){
  if(e){e.stopPropagation();e.preventDefault();} // 바깥 클릭(=닫기)으로 번지지 않게
  var n=IV.list.length;if(n<2)return;
  IV.i=(IV.i+dir+n)%n;   // 양 끝에서 순환 — 커미션 슬라이더(cmSliderMove)와 같은 규칙
  ivShow();
}
// 뒤 배경(또는 사진)을 눌렀을 때. 방금 스와이프로 넘긴 직후면 닫지 않는다
// (손가락을 떼는 순간 click도 같이 오기 때문에, 넘기자마자 창이 닫혀 버린다)
function ivBackdrop(){
  if(Date.now()-IV.swipedAt<400)return;
  closeImageViewer();
}
function closeImageViewer(){
  var v=document.getElementById("imgViewer"),im=document.getElementById("imgViewerImg");
  if(v)v.classList.remove("open");
  if(im)im.src="";               // 큰 이미지를 메모리에 물고 있지 않게
  IV.list=[];IV.i=0;
  document.body.style.overflow="";
}
(function(){
  var v=document.getElementById("imgViewer");if(!v)return;
  // 휠·트랙패드. 한 번 굴려도 이벤트가 여러 번 오므로 220ms 안의 연속 입력은 한 번으로 친다.
  // passive:false — preventDefault로 뒤 화면이 같이 스크롤되는 것을 막는다.
  v.addEventListener("wheel",function(e){
    if(!v.classList.contains("open"))return;
    e.preventDefault();
    if(IV.list.length<2)return;
    var now=Date.now();if(now-IV.wheelAt<220)return;
    var d=(Math.abs(e.deltaY)>=Math.abs(e.deltaX))?e.deltaY:e.deltaX; // 세로·가로 어느 쪽으로 굴려도 넘어간다
    if(Math.abs(d)<4)return;
    IV.wheelAt=now;ivMove(null,d>0?1:-1);
  },{passive:false});
  // 손가락 좌우 스와이프
  var sx=0,sy=0,on=false;
  v.addEventListener("touchstart",function(e){
    if(e.touches.length!==1){on=false;return;}
    on=true;sx=e.touches[0].clientX;sy=e.touches[0].clientY;
  },{passive:true});
  v.addEventListener("touchend",function(e){
    if(!on)return;on=false;
    if(IV.list.length<2)return;
    var t=e.changedTouches&&e.changedTouches[0];if(!t)return;
    var dx=t.clientX-sx,dy=t.clientY-sy;
    if(Math.abs(dx)<40||Math.abs(dx)<Math.abs(dy))return; // 세로로 움직였으면 넘기려던 게 아니다
    IV.swipedAt=Date.now();ivMove(null,dx<0?1:-1);
  },{passive:true});
  document.addEventListener("keydown",function(e){
    if(!v.classList.contains("open"))return;
    if(e.key==="ArrowRight")ivMove(null,1);
    else if(e.key==="ArrowLeft")ivMove(null,-1);
    else if(e.key==="Escape")closeImageViewer();
  });
})();
function pickChatImage(){
  if(!currentConversationId||!AUTH.user){toast("채팅방을 먼저 열어주세요");return;}
  document.getElementById("chatImgFile").click();
}
async function onChatImageFile(ev){
  var f=ev.target.files&&ev.target.files[0];ev.target.value="";
  if(!f)return;
  if(!currentConversationId||!AUTH.user)return;
  if(ALLOWED_IMAGE_TYPES.indexOf(f.type)===-1){toast("이미지 파일만 보낼 수 있어요");return;}
  if(f.size>MAX_IMAGE_BYTES){toast("40MB 이하만 보낼 수 있어요");return;}
  toast("사진 보내는 중…");
  // GIF는 움직임이 깨지니 원본 그대로, 나머지는 줄여서 보낸다
  var blob=f;
  if(f.type!=="image/gif"){
    try{var c=await compressImage(f);blob=c.blob;}catch(e){}
  }
  var url=await uploadToStorage(blob,"chat");
  if(!url)return;
  var payload={conversation_id:currentConversationId,sender_id:AUTH.user.id,content:"",image_url:url};
  var res=await window.supabase.from("messages").insert(payload);
  if(res.error){toast("전송 실패: "+res.error.message);return;}
  await refreshChatRoom();
}

async function sendChatMessage(){
  var inp=document.getElementById("chatInput");
  var v=inp.value.trim();
  if(!v||!currentConversationId||!AUTH.user)return;
  inp.disabled=true;
  var payload={conversation_id:currentConversationId,sender_id:AUTH.user.id,content:v};
  var usingRef=cmPendingChatRef&&cmPendingChatRef.conversationId===currentConversationId;
  if(usingRef)payload.commission_id=cmPendingChatRef.commissionId;
  var res=await window.supabase.from("messages").insert(payload);
  inp.disabled=false;
  if(res.error){toast("전송 실패: "+res.error.message);return;}
  if(usingRef)cmCancelChatRef();
  window.supabase.from("conversations").update({last_message_at:new Date().toISOString()}).eq("id",currentConversationId).then(function(){});
  inp.value="";
  autoGrowChatInput(inp); // 전송 후 입력창을 한 줄 높이로 복귀
  var msgRes=await window.supabase.from("messages").select("*").eq("conversation_id",currentConversationId).order("created_at",{ascending:true});
  var box=document.getElementById("chatMessages");
  if(box){
    await ensureChatEmoticons(msgRes.data||[]);
    box.innerHTML=chatMessagesHtml(msgRes.data||[]);box.scrollTop=box.scrollHeight;
  }
}

/* ---------- 등급 시스템 (점수·등급은 서버 트리거가 계산 — profiles.score/level 그대로 신뢰) ---------- */
var LEVEL_THRESHOLDS=[]; // {level,min_score,name}[], loadRealPosts()에서 DB로부터 채워짐 — 기준을 바꾸려면 level_thresholds 테이블만 수정하면 됨
var TITLES_BY_ID={}; // {id:{name,emoji}} — titles 표 통째 캐시(몇 줄 안 됨). titles.sql 실행 전엔 빈 채로 남아 칭호만 안 보인다
function titleBadgeById(tid,extraClass){
  var t=tid&&TITLES_BY_ID[tid];
  if(!t)return "";
  return '<span class="title-chip'+(extraClass?" "+extraClass:"")+'">'+esc(t.emoji||"")+' '+esc(t.name)+'</span>';
}
function levelName(lv){
  var t=LEVEL_THRESHOLDS.find(function(x){return x.level===lv});
  return t?t.name:"새싹";
}
/* ===== 칭호 선택 =====
   보유한 칭호 목록을 보여주고 하나를 골라 장착한다(또는 표시 안 함).
   ⚠️ 서버 트리거가 '보유하지 않은 칭호'를 조용히 되돌리므로 여기서의 검증은 편의일 뿐이다. */
function closeTitlePicker(){var m=document.getElementById("titlePickModal");if(m)m.remove();}
async function openTitlePicker(){
  if(!AUTH.user)return;
  var res=await window.supabase.from("user_titles")
    .select("title_id,earned_at,titles(name,emoji,description)")
    .eq("user_id",AUTH.user.id).order("earned_at");
  if(res.error){toast("칭호를 불러오지 못했어요: "+res.error.message);return;}
  var mine=res.data||[];
  var cur=AUTH.profile?AUTH.profile.title_id:null;
  var h='<div class="rules-scrim open" id="titlePickModal" onclick="if(event.target===this)closeTitlePicker()"><div class="rules">'+
    '<h3>🏷 칭호</h3>';
  if(!mine.length){
    h+='<p style="color:var(--ink-2);line-height:1.6;margin-bottom:16px">아직 받은 칭호가 없어요. 활동하면서 하나씩 모아 보세요!</p>';
  }else{
    h+='<div class="title-list">';
    h+='<button type="button" class="title-opt'+(cur==null?' on':'')+'" onclick="equipTitle(null)">'+
       '<span class="title-opt-n">표시 안 함</span><span class="title-opt-d">닉네임 옆에 칭호를 달지 않아요</span></button>';
    mine.forEach(function(r){
      var t=r.titles||{};
      h+='<button type="button" class="title-opt'+(cur===r.title_id?' on':'')+'" onclick="equipTitle('+r.title_id+')">'+
         '<span class="title-opt-n">'+esc(t.emoji||"")+' '+esc(t.name||"칭호")+(cur===r.title_id?' <i>장착 중</i>':'')+'</span>'+
         (t.description?'<span class="title-opt-d">'+esc(t.description)+'</span>':'')+'</button>';
    });
    h+='</div>';
  }
  h+='<button class="r-ok" onclick="closeTitlePicker()" style="margin-top:14px">닫기</button></div></div>';
  closeTitlePicker();
  document.body.insertAdjacentHTML("beforeend",h);
}
async function equipTitle(tid){
  if(!AUTH.user)return;
  var res=await window.supabase.from("profiles").update({title_id:tid}).eq("id",AUTH.user.id).select("title_id").single();
  if(res.error){toast("변경 실패: "+res.error.message);return;}
  // 서버 트리거가 되돌렸을 수도 있으므로 서버가 확정한 값을 그대로 쓴다
  if(AUTH.profile)AUTH.profile.title_id=res.data?res.data.title_id:tid;
  closeTitlePicker();
  toast(tid==null?"칭호를 내렸어요":"칭호를 달았어요","🏷");
  if(document.getElementById("myProfileView"))openProfile();
}
function levelBadgeHtml(lv,extraClass){
  if(!lv)return "";
  var t=LEVEL_THRESHOLDS.find(function(x){return x.level===lv});
  if(!t)return "";
  return '<span class="pf-lv'+(extraClass?" "+extraClass:"")+'">'+esc(t.emoji||"")+' '+esc(t.name)+'</span>';
}
function levelProgress(score,level){
  var sorted=LEVEL_THRESHOLDS.slice().sort(function(a,b){return a.level-b.level});
  var cur=sorted.find(function(x){return x.level===level});
  var next=sorted.find(function(x){return x.level===level+1});
  if(!next)return{pct:100,remain:0,nextName:null,maxed:true};
  var span=next.min_score-(cur?cur.min_score:0);
  var progressed=score-(cur?cur.min_score:0);
  var pct=span>0?Math.max(0,Math.min(100,Math.round(progressed/span*100))):100;
  return{pct:pct,remain:Math.max(0,next.min_score-score),nextName:next.name,maxed:false};
}
async function refreshMyProfile(){
  if(!AUTH.user||!window.supabase)return;
  var res=await window.supabase.from("profiles").select("*").eq("id",AUTH.user.id).single();
  if(!res.error)AUTH.profile=res.data;
}
var SCORE_EVENT_LABELS={post_create:"글 작성",comment_create:"댓글 작성",like_received:"글이 추천받음",helpful_received:"댓글이 도움돼요 받음",attendance:"출석체크"};

/* ===================== 썸네일 백필 (관리자) =====================
   썸네일 기능 이전에 올라간 이미지에 360/720 썸네일을 붙인다.
   ⚠️ 한 번에 다 하지 않는다 — 서버가 이미지를 받아 두 규격으로 줄여 다시 올리는 작업이라
      한 호출에 몇 장씩만 처리하고, 남은 개수가 0이 될 때까지 여기서 반복 호출한다. */
var BF={running:false,stop:false,made:0,processed:0,failed:0,skipped:0};
async function bfCall(payload){
  var sess=await window.supabase.auth.getSession();
  var token=sess.data.session?sess.data.session.access_token:null;
  if(!token)throw new Error("로그인이 필요해요");
  var r=await fetch("/api/storage/backfill-thumbs",{
    method:"POST",
    headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
    body:JSON.stringify(payload||{})
  });
  var j=null;try{j=await r.json();}catch(e){}
  if(!r.ok||!j||!j.ok)throw new Error((j&&j.message)||"요청에 실패했어요");
  return j;
}
async function openThumbBackfill(){
  if(!AUTH.profile||!AUTH.profile.is_admin){toast("관리자만 사용할 수 있어요");return;}
  enterScreen("thumbBackfill",openProfile);
  document.getElementById("main").innerHTML='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
    '<div class="pf-sec">썸네일 백필</div>'+
    '<div class="pf-group"><div class="pf-group-head"><div class="pf-group-title">옛 이미지에 썸네일 붙이기</div>'+
      '<div class="pf-group-desc">썸네일이 없는 이미지는 목록에서 원본을 그대로 받아 화질이 깨져 보여요. 한 번에 몇 장씩 처리하며, 이미 있는 건 건너뜁니다.</div></div>'+
      '<div class="bf-stat" id="bfStat">먼저 얼마나 남았는지 확인해 보세요.</div>'+
      '<div class="bf-bar"><div class="bf-fill" id="bfFill" style="width:0%"></div></div>'+
      '<div class="bf-actions">'+
        '<button type="button" class="at-btn" id="bfScan" onclick="bfScan()">남은 개수 확인</button>'+
        '<button type="button" class="at-btn" id="bfRun" onclick="bfRun()" disabled>백필 시작</button>'+
      '</div>'+
      '<div class="at-note" id="bfLog"></div>'+
    '</div></div>';
  window.scrollTo({top:0,behavior:"auto"});
}
function bfSet(msg,pct){
  var s=document.getElementById("bfStat");if(s)s.textContent=msg;
  var f=document.getElementById("bfFill");if(f&&pct!=null)f.style.width=Math.max(0,Math.min(100,pct))+"%";
}
function bfLog(msg){var l=document.getElementById("bfLog");if(l)l.innerHTML=esc(msg);}
async function bfScan(){
  if(BF.running)return;
  bfSet("확인 중...",0);
  try{
    var j=await bfCall({dryRun:true});
    BF.total=j.missing;
    bfSet(j.missing?("썸네일이 없는 이미지 "+j.missing+"장 (전체 "+j.scanned+"개 훑음)"):"모두 처리되어 있어요 🎉",j.missing?0:100);
    var b=document.getElementById("bfRun");if(b)b.disabled=!j.missing;
  }catch(e){bfSet("확인 실패: "+e.message,0);}
}
async function bfRun(){
  if(BF.running)return;
  BF.running=true;BF.stop=false;BF.made=0;BF.processed=0;BF.failed=0;BF.skipped=0;
  var run=document.getElementById("bfRun"),scan=document.getElementById("bfScan");
  if(scan)scan.disabled=true;
  if(run){run.textContent="중단";run.onclick=function(){BF.stop=true;bfLog("현재 묶음까지 끝내고 멈춥니다...");};}
  var total=BF.total||0;
  try{
    while(!BF.stop){
      var j=await bfCall({limit:8});
      BF.processed+=j.processed;BF.made+=j.made;BF.failed+=j.failed;BF.skipped+=j.skipped;
      if(!total)total=j.missing+BF.processed;
      var left=j.remaining;
      bfSet("남은 "+left+"장 · 만든 썸네일 "+BF.made+"개",total?((total-left)/total*100):100);
      if(j.errors&&j.errors.length)bfLog("최근 실패: "+j.errors.join(" / "));
      if(j.done||left<=0){bfSet("백필 완료 🎉 · 만든 썸네일 "+BF.made+"개"+(BF.failed?(" · 실패 "+BF.failed+"장"):""),100);break;}
      // 한 묶음이 아무것도 처리하지 못하면(전부 실패) 무한 반복이 되므로 멈춘다
      if(j.processed===0&&j.failed>0){bfSet("처리에 계속 실패해서 멈췄어요. 로그를 확인해주세요.",null);break;}
    }
  }catch(e){bfSet("백필 실패: "+e.message,null);}
  BF.running=false;
  if(scan)scan.disabled=false;
  if(run){run.textContent="백필 시작";run.onclick=bfRun;run.disabled=false;}
}
/* ===================== /썸네일 백필 ===================== */

/* ===================== 출석체크 =====================
   하루 한 번 출석하면 활동 포인트 20 + 광고 포인트 20.
   ⚠️ 지급은 전적으로 서버(check_in_today RPC)가 한다 — 여기서는 결과를 보여줄 뿐이다.
      화면의 상태(오늘 했는지)는 어디까지나 표시용이고, 두 번 눌러도 DB의
      (user_id, day) 기본키가 막는다.
   ⚠️ 날짜는 **한국 시간 기준**으로 계산한다. 브라우저 표준시가 무엇이든
      서버가 쓰는 Asia/Seoul 날짜와 어긋나면 "오늘"이 하루씩 밀린다. */
var AT={days:null,total:0,busy:false};
var AT_VIEW=null; // 달력에서 보고 있는 달 'YYYY-MM'

function atYmd(d){return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);}
/* 한국 시간의 '벽시계'를 그대로 담은 Date — 연/월/일만 읽는 용도다(시각은 의미 없음) */
function atTodayDate(){return new Date(Date.now()+new Date().getTimezoneOffset()*60000+9*3600000);}
function atTodayStr(){return atYmd(atTodayDate());}
function atHas(k){return !!(AT.days&&AT.days.has(k));}

async function atLoad(fromYmd,toYmd){
  if(!AUTH.user||!window.supabase)return;
  var r=await window.supabase.from("attendance").select("day")
    .eq("user_id",AUTH.user.id).gte("day",fromYmd).lte("day",toYmd);
  if(!AT.days)AT.days=new Set();
  if(r.error)return;
  (r.data||[]).forEach(function(x){AT.days.add(String(x.day).slice(0,10));});
}
async function atLoadMonth(ym){
  var y=+ym.slice(0,4),m=+ym.slice(5,7);
  await atLoad(ym+"-01",ym+"-"+("0"+new Date(y,m,0).getDate()).slice(-2));
}
async function atLoadTotal(){
  if(!AUTH.user||!window.supabase)return;
  var r=await window.supabase.from("attendance").select("day",{count:"exact",head:true}).eq("user_id",AUTH.user.id);
  if(!r.error)AT.total=r.count||0;
}
/* 연속 출석일 — 오늘(아직 안 했으면 어제)부터 거꾸로 끊기지 않은 날 수.
   불러온 범위 안에서만 셀 수 있으므로 카드가 최근 60일을 미리 받아 둔다. */
function atStreak(){
  if(!AT.days)return 0;
  var d=atTodayDate(),n=0;
  if(!AT.days.has(atYmd(d)))d.setDate(d.getDate()-1);
  while(AT.days.has(atYmd(d))){n++;d.setDate(d.getDate()-1);}
  return n;
}

/* ---- 내 정보 위쪽의 작은 출석 카드 ---- */
/* ⚠️ .pf-group 을 반드시 함께 단다 — 내 정보 화면의 카드는 전부 이 클래스로 유리 마감이
   걸려 있어서(파일 끝 '글래스모피즘 마감' 층), 빼면 혼자 불투명한 흰 상자로 떠 보인다. */
function atCardHTML(){return '<div class="pf-group at-card" id="atCard"></div>';}
async function atFillCard(){
  if(!document.getElementById("atCard"))return;
  if(AT.days===null){
    var t=atTodayDate(),from=new Date(t.getTime()-59*86400000);
    await atLoad(atYmd(from),atYmd(t));
  }
  var el=document.getElementById("atCard"); // 기다리는 사이 화면이 바뀌었을 수 있다
  if(el)el.innerHTML=atCardInnerHTML();
}
function atCardInnerHTML(){
  var today=atTodayStr(),done=atHas(today),st=atStreak(),W=["일","월","화","수","목","금","토"];
  var d=atTodayDate();d.setDate(d.getDate()-6);
  var strip="";
  for(var i=0;i<7;i++){
    var k=atYmd(d);
    strip+='<div class="at-d'+(atHas(k)?" on":"")+(k===today?" now":"")+'">'+
      '<span>'+W[d.getDay()]+'</span><i>'+d.getDate()+'</i></div>';
    d.setDate(d.getDate()+1);
  }
  // 제목 줄은 다른 카드(pfSection)와 같은 구조를 쓴다 — 여기만 다르게 만들면 바로 티가 난다
  return '<div class="pf-group-head"><div class="pf-group-title">출석체크'+
      (st>0?' <span class="at-streak">🔥 '+st+'일 연속</span>':'')+'</div>'+
      '<div class="pf-group-desc">하루 한 번 출석하고 활동 20P · 광고 20P를 받아요</div></div>'+
    '<div class="at-strip">'+strip+'</div>'+
    '<button type="button" class="at-btn'+(done?" done":"")+'"'+(done?" disabled":' onclick="atCheckIn()"')+'>'+
      (done?"오늘 출석 완료":"오늘 출석하기")+'</button>'+
    '<button type="button" class="at-more" onclick="openAttendance()">달력으로 보기'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>';
}

/* ---- 출석 실행 ---- */
async function atCheckIn(){
  if(!AUTH.user){openLoginModal();return;}
  if(!window.supabase||AT.busy)return;
  AT.busy=true;
  Array.prototype.forEach.call(document.querySelectorAll(".at-btn"),function(b){b.disabled=true;b.textContent="확인 중...";});
  var r=await window.supabase.rpc("check_in_today");
  AT.busy=false;
  if(r.error){toast("출석에 실패했어요: "+r.error.message);atRefreshUI();return;}
  var d=r.data||{};
  if(!d.ok){
    toast(d.reason==="banned"?"이용이 제한된 계정이에요.":"로그인이 필요해요.");
    atRefreshUI();return;
  }
  if(!AT.days)AT.days=new Set();
  AT.days.add(String(d.day).slice(0,10));
  if(!d.already){
    AT.total=(AT.total||0)+1;
    // 화면의 점수·포인트를 곧바로 맞춘다. 등급이 오를 수도 있어 프로필도 다시 받아온다.
    if(AUTH.profile){
      AUTH.profile.score=(AUTH.profile.score||0)+(d.score||0);
      AUTH.profile.ad_points=(AUTH.profile.ad_points||0)+(d.points||0);
    }
    toast("출석 완료! 활동 "+(d.score||0)+"P · 광고 "+(d.points||0)+"P 받았어요"+
      ((d.streak||0)>1?" · "+d.streak+"일 연속 🔥":""));
    atRefreshUI();
    refreshMyProfile().then(atPatchScoreUI);
    return;
  }
  toast("오늘은 이미 출석했어요.");
  atRefreshUI();
}
/* 출석 카드와 달력을 지금 상태로 다시 그린다(화면 전체를 다시 그리면 스크롤이 튄다) */
function atRefreshUI(){
  var c=document.getElementById("atCard");
  if(c)c.innerHTML=atCardInnerHTML();
  if(document.getElementById("atCal"))renderAttendance();
}
/* 내 정보 화면에 떠 있는 점수·광고 포인트·등급 진행바만 살짝 갱신 */
function atPatchScoreUI(){
  if(!AUTH.profile)return;
  var s=document.getElementById("pfScoreStat");
  if(s)s.textContent=AUTH.profile.score||0;
  var p=document.getElementById("pfAdPtSub");
  if(p)p.textContent="광고 P "+(AUTH.profile.ad_points||0);
  var bar=document.querySelector("#myProfileView .pp-fill");
  if(bar){
    var pr=levelProgress(AUTH.profile.score||0,AUTH.profile.level||1);
    bar.style.width=pr.pct+"%";
    var row=document.querySelector("#myProfileView .pp-row");
    if(row)row.innerHTML='<span>'+esc(levelName(AUTH.profile.level||1))+'</span><span>'+
      (pr.maxed?'최고 등급 달성! 🎉':('다음 등급('+esc(pr.nextName)+')까지 '+pr.remain+'점'))+'</span>';
  }
}

/* ---- 달력 화면 ---- */
async function openAttendance(){
  if(!AUTH.user){openLoginModal();return;}
  enterScreen("attendance",openProfile);
  var t=atTodayDate();
  AT_VIEW=t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2);
  document.getElementById("main").innerHTML='<div class="profile"><p style="padding:40px 0;text-align:center;color:var(--muted)">불러오는 중...</p></div>';
  await atLoadMonth(AT_VIEW);
  await atLoadTotal();
  renderAttendance();
  window.scrollTo({top:0,behavior:"auto"});
}
async function atShiftMonth(delta){
  if(!AT_VIEW)return;
  var y=+AT_VIEW.slice(0,4),m=+AT_VIEW.slice(5,7)-1+delta;
  var d=new Date(y,m,1),ym=d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2);
  if(ym>atTodayStr().slice(0,7))return; // 다음 달은 볼 것이 없다
  AT_VIEW=ym;
  await atLoadMonth(ym);
  renderAttendance();
}
function renderAttendance(){
  var ym=AT_VIEW||atTodayStr().slice(0,7);
  var y=+ym.slice(0,4),m=+ym.slice(5,7);
  var today=atTodayStr(),thisMonth=today.slice(0,7);
  var lead=new Date(y,m-1,1).getDay(),last=new Date(y,m,0).getDate();
  var W=["일","월","화","수","목","금","토"];
  var head="";
  for(var i=0;i<7;i++)head+='<div class="at-w'+(i===0?" sun":(i===6?" sat":""))+'">'+W[i]+'</div>';
  var cells="",monthCount=0;
  for(var b=0;b<lead;b++)cells+='<div class="at-c gap"></div>';
  for(var day=1;day<=last;day++){
    var k=ym+"-"+("0"+day).slice(-2),on=atHas(k);
    if(on)monthCount++;
    cells+='<div class="at-c'+(on?" on":"")+(k===today?" now":"")+(k>today?" fut":"")+'">'+day+'</div>';
  }
  var done=atHas(today),st=atStreak();
  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
    '<div class="pf-sec">출석체크</div>'+
    // 통계 3칸은 내 정보의 .pf-stats 를 그대로 쓴다(따로 만들면 유리 마감을 못 물려받는다)
    '<div class="pf-stats">'+
      '<div class="pf-st"><b>'+st+'</b><span>연속 출석</span></div>'+
      '<div class="pf-st"><b>'+monthCount+'</b><span>'+m+'월 출석</span></div>'+
      '<div class="pf-st"><b>'+(AT.total||0)+'</b><span>누적 출석</span></div>'+
    '</div>'+
    '<div class="pf-group at-cal" id="at-cal">'+
      '<div class="at-nav">'+
        '<button type="button" aria-label="이전 달" onclick="atShiftMonth(-1)">'+
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button>'+
        '<div class="at-ym">'+y+'년 '+m+'월</div>'+
        '<button type="button" aria-label="다음 달"'+(ym>=thisMonth?" disabled":"")+' onclick="atShiftMonth(1)">'+
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>'+
      '</div>'+
      // pf-group 안쪽 내용은 흰 판(.pf-list 계열) 위에 얹는 것이 이 화면의 규칙이다
      '<div class="at-sheet"><div class="at-grid at-wk">'+head+'</div>'+
        '<div class="at-grid">'+cells+'</div></div>'+
      '<div class="at-legend"><span class="at-dot"></span>출석한 날</div>'+
    '</div>'+
    '<button type="button" class="at-btn big'+(done?" done":"")+'"'+(done?" disabled":' onclick="atCheckIn()"')+'>'+
      (done?"오늘 출석 완료":"오늘 출석하기 · 활동 20P + 광고 20P")+'</button>'+
    '<p class="at-note">출석은 한국 시간 기준으로 하루에 한 번만 할 수 있어요. 받은 포인트는 <b>내 정보 → 포인트</b>에서 확인할 수 있어요.</p>'+
    '</div>';
  document.getElementById("main").innerHTML=h;
}
/* ===================== /출석체크 ===================== */
async function openScoreLog(){
  if(!AUTH.user||!window.supabase)return;
  enterScreen("scoreLog",openProfile); // 뒤로가기가 프로필로 정확히 복귀하도록 히스토리 남김
  document.getElementById("main").innerHTML='<div class="profile"><p style="padding:40px 0;text-align:center;color:var(--muted)">불러오는 중...</p></div>';
  var res=await window.supabase.from("score_log").select("*").eq("user_id",AUTH.user.id).order("created_at",{ascending:false}).limit(100);
  if(res.error){toast("불러오기 실패: "+res.error.message);return;}
  renderScoreLog(res.data||[]);
}
function renderScoreLog(rows){
  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
    '<div class="pf-sec">포인트 내역</div>';
  if(!rows.length){
    h+='<div class="pf-empty">아직 받은 점수가 없어요.</div>';
  }else{
    h+='<div class="list">';
    rows.forEach(function(r){
      var label=SCORE_EVENT_LABELS[r.event]||r.event;
      h+='<div class="post rip"><div class="pmain"><div class="ptitle">'+esc(label)+'</div>'+
        '<div class="pmeta"><span class="mt">'+timeAgo(r.created_at)+'</span></div></div>'+
        '<div class="pcmt"><span class="cn" style="color:var(--brand)">+'+r.amount+'</span><span class="cl">점</span></div></div>';
    });
    h+='</div>';
  }
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
async function openLeaderboard(period){
  period=(period==="month")?"month":"week";
  closeNotif();
  /* 이 화면은 enterScreen 을 쓰지 않으므로(화면 스택 없이 #main 만 교체) 주소는 여기서 직접 쌓는다.
     ⚠️ 이미 /ranking 이면 아무것도 안 한다 — '이번 주 / 이번 달'을 번갈아 누를 때마다
        히스토리가 쌓이면 뒤로가기를 여러 번 눌러야 빠져나온다. */
  if(location.pathname!=="/ranking"){try{history.pushState({},"","/ranking");}catch(e){}}
  document.title="포인트 랭킹 · commi";
  document.getElementById("main").innerHTML='<div class="profile"><p style="padding:40px 0;text-align:center;color:var(--muted)">불러오는 중...</p></div>';
  if(!window.supabase){toast("사용할 수 없어요");return;}
  var days=period==="month"?30:7;
  var res=await window.supabase.rpc("get_score_leaderboard",{p_days:days,p_limit:10});
  if(res.error){toast("불러오기 실패: "+res.error.message);return;}
  renderLeaderboard(res.data||[],period);
}
function renderLeaderboard(rows,period){
  var h='<div class="profile">'+
    '<button class="d-back" onclick="renderList()">← 목록으로</button>'+
    '<div class="pf-sec">🏆 포인트 랭킹</div>'+
    '<div style="display:flex;gap:8px;margin-bottom:14px">'+
      '<button class="d-act'+(period==="week"?" liked":"")+'" onclick="openLeaderboard(\'week\')">이번 주</button>'+
      '<button class="d-act'+(period==="month"?" liked":"")+'" onclick="openLeaderboard(\'month\')">이번 달</button>'+
    '</div>';
  if(!rows.length){
    h+='<div class="pf-empty">아직 순위가 없어요.</div>';
  }else{
    h+='<div class="chat-room-list">';
    rows.forEach(function(r,i){
      h+='<div class="chat-room-row" style="cursor:pointer" onclick="openUserProfile(\''+r.user_id+'\')">'+
        '<div class="pf-ava" style="width:40px;height:40px;font-size:15px;flex-shrink:0;position:relative">'+avatarHTML(r.nickname,r.avatar_url)+'<span class="rank-badge">'+(i+1)+'</span></div>'+
        '<div class="chat-room-info"><div class="chat-room-name">'+esc(r.nickname)+levelBadgeHtml(r.level,"lv-badge")+'</div></div>'+
        '<div class="chat-room-meta" style="color:var(--brand);font-weight:800">'+r.total_points+'점</div>'+
      '</div>';
    });
    h+='</div>';
  }
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
function openProfile(){
  curTab="me";navSeq++;
  userLeftHome=true;
  resetScreens();
  // ⚠️ 여기는 enterScreen을 쓰지 않아 히스토리에 아무것도 안 쌓인다. push로 쌓아 줘야
  //    뒤로가기로 원래 있던 화면으로 돌아간다(replace로 하면 그 자리를 덮어써 못 돌아간다).
  //    단 뒤로가기로 들어온 경우(navigatingBack)는 이미 그 항목 위에 있으므로 쌓지 않는다.
  _setTabUrl("me",!navigatingBack);
  leaveChat();
  closeNotif();
  if(!AUTH.user){
    if(!authReady){
      // 세션 확인이 아직 안 끝남 — 로그인돼 있는데 로그아웃 화면이 잠깐 뜨는 걸 막기 위해 로딩 표시
      document.getElementById("main").innerHTML=
        '<div class="profile" id="myProfileView" data-auth="loading"><div class="empty" style="color:var(--muted)">불러오는 중…</div></div>';
      syncTabs("me");return;
    }
    document.getElementById("main").innerHTML=
      '<div class="profile" id="myProfileView" data-auth="out"><div class="empty"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>'+
      '<h3>로그인이 필요해요</h3><p>로그인하면 내 닉네임으로 글을 쓰고 활동을 볼 수 있어요.</p>'+
      '<button onclick="loginWithGoogle()">로그인하기</button></div></div>';
    syncTabs("me");window.scrollTo({top:0,behavior:"smooth"});
    return;
  }
  // 이미 내 정보 화면이면 캐시로 다시 안 그림(스크롤만) → refreshProfile이 내용 바뀐 경우에만 한 번 그림.
  // 다른 화면에서 왔으면 캐시로 즉시 렌더.
  // 이미 '로그인된 내 정보'가 그려져 있을 때만 다시 안 그림.
  // (로그아웃·로딩 화면도 같은 id를 쓰기 때문에 data-auth로 구분 — 안 그러면 로그인 직후에도 옛 화면이 남음)
  var _pv=document.getElementById("myProfileView");
  if(_pv&&_pv.getAttribute("data-auth")==="in"){syncTabs("me");pfScrollAfterRender();}
  else renderMyProfile();
  refreshProfile();
}
// 내 정보 화면을 실제로 그리는 부분(캐시 데이터 기준). openProfile/refreshProfile 양쪽에서 호출.
function renderMyProfile(){
  if(!AUTH.user)return;
  var mine=POSTS.filter(function(p){return p.author==="나"||(AUTH.user&&p.authorId===AUTH.user.id)});
  var commented=POSTS.filter(function(p){return p.author!=="나"&&p.comments.some(function(c){return c.n==="나"})});
  var likedArr=POSTS.filter(function(p){return p._liked});
  var recent=[];Array.from(READ).reverse().forEach(function(id){var p=POSTS.find(function(x){return x.id===id});if(p)recent.push(p)});
  var savedCount=POSTS.filter(function(p){return p.dbId&&isPostBookmarked(p.dbId);}).length;
  recent=recent.slice(0,10);
  var likeSum=mine.reduce(function(a,p){return a+p.likes},0);
  var cmSum=mine.reduce(function(a,p){return a+p.comments.length},0);
  var myScore=AUTH.profile?(AUTH.profile.score||0):0;
  var myLevel=AUTH.profile?(AUTH.profile.level||1):1;
  var lvName=levelName(myLevel);
  var prog=levelProgress(myScore,myLevel);
  var myReviewStats=pfReviewStats(AUTH.user.id,ME.nick);
  var h='<div class="profile" id="myProfileView" data-auth="in">';
  // 화면 제목 + 알림 (참고 디자인의 상단 구조)
  h+='<div class="pf-pagetop"><h1>내 정보</h1>'+
     '<button type="button" class="pf-bell" aria-label="알림" onclick="toggleNotif(event)">'+
     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg></button></div>';
  h+=pfHeroHTML({nickname:ME.nick,level:myLevel,avatar_url:AUTH.profile&&AUTH.profile.avatar_url,
    cover_url:AUTH.profile&&AUTH.profile.cover_url,bio:AUTH.profile&&AUTH.profile.bio,
    sns_twitter:AUTH.profile&&AUTH.profile.sns_twitter,sns_instagram:AUTH.profile&&AUTH.profile.sns_instagram,sns_email:AUTH.profile&&AUTH.profile.sns_email,sns_link:AUTH.profile&&AUTH.profile.sns_link},
    true,myReviewStats,null);
  // 내 공개 프로필 보기 (포스타입식 '프로필 보기' 링크)
  h+='<button type="button" class="pf-viewpublic" onclick="openUserProfile(\''+AUTH.user.id+'\')"><span>내 공개 프로필 보기</span>'+
     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>';
  h+='<div class="pf-follow-bar" id="pfFollowBar"></div>'; // 팔로잉/팔로워 수(비동기 채움)
  // 등급 진행바
  h+='<div class="pf-progress"><div class="pp-row"><span>'+lvName+'</span><span>'+
     (prog.maxed?'최고 등급 달성! 🎉':('다음 등급('+prog.nextName+')까지 '+prog.remain+'점'))+'</span></div>'+
     '<div class="pp-bar"><div class="pp-fill" style="width:'+prog.pct+'%"></div></div></div>';
  // 통계 3개. 광고 포인트는 광고 낼 때만 쓰는 값이라 상단에서 빼고 [내 활동]으로 옮겼다.
  h+='<div class="pf-stats">'+
     '<div class="pf-st"><b id="pfScoreStat">'+myScore+'</b><span>활동 점수</span></div>'+
     '<div class="pf-st"><b>'+likeSum+'</b><span>받은 추천</span></div>'+
     '<div class="pf-st"><b>'+cmSum+'</b><span>받은 댓글</span></div></div>';
  // 출석체크 — 매일 하는 행동이라 눈에 잘 띄는 위쪽에 둔다(내용은 비동기로 채운다)
  h+=atCardHTML();
  // 고정한 글 + 받은 후기(콘텐츠)
  h+=pinnedPostCardHTML(AUTH.profile?AUTH.profile.pinned_post_id:null);
  if(pfReviewsForUserId!==AUTH.user.id){pfReviewsExpanded=false;pfReviewsForUserId=AUTH.user.id;}
  h+=pfReviewListHTML(pfArtistReviewList(AUTH.user.id,ME.nick),AUTH.user.id);
  // ===== 메뉴 (포스타입식 섹션: 소제목 + 한 줄에 하나씩) =====
  h+=pfSection('내 글','내가 쓴 글과 반응을 확인해요','<div class="pf-tiles">'+
     pfTile(pfMiniIcon('<path d="M4 20h4L20 8l-4-4L4 16v4z"/><path d="M14 6l4 4"/>'),'쓴 글','내가 올린 글',"openPfList('mine')",mine.length)+
     pfTile(pfMiniIcon('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),'댓글 단 글','내가 남긴 댓글',"openPfList('cm')",commented.length)+
     pfTile(pfMiniIcon('<path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5c0 5-7 9.5-7 9.5z"/>'),'좋아요','내가 누른 글',"openPfList('liked')",likedArr.length)+
     pfTile(pfMiniIcon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'),'최근 본 글','다시 찾아보기',"openPfList('recent')",recent.length)+
     pfTile(pfMiniIcon('<path d="M6 3h12v18l-6-4-6 4z"/>'),'저장한 글','나중에 다시 보기',"openPfList('saved')",savedCount)+
     '</div>');
  h+=pfSection('내 활동','커미션·채팅·이모티콘을 관리해요','<div class="pf-tiles">'+
     pfTile(pfMiniIcon('<path d="M8 12l3 3 5-5"/><path d="M3 10l5-5 4 3 4-3 5 5-6 8H9z"/>'),'내 커미션','등록·신청 관리',"cmOpenMy()")+
     pfTile(pfMiniIcon('<path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8 8.38 8.38 0 0 1 8.5-8.5 8.5 8.5 0 0 1 8.5 8.5z"/>'),'채팅','주고받은 대화',"openChatList('profile')")+
     pfTile(pfMiniIcon('<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>'),'이모티콘','담기·만들기',"openEmoticonMarket()")+
     pfTile(pfMiniIcon('<circle cx="12" cy="12" r="9"/><path d="M12 8v8M9 12h6"/>'),'포인트','<span id="pfAdPtSub">광고 P '+(AUTH.profile?(AUTH.profile.ad_points||0):0)+'</span>',"openScoreLog()")+
     pfTile(pfMiniIcon('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>'),'친구 초대','보상 받기',"openReferral()")+
     pfTile(pfMiniIcon('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M9 15l2 2 4-4"/>'),'출석체크','매일 40P',"openAttendance()")+
     '</div>');
  h+=pfSection('알림','받고 싶은 알림만 골라서 켜요',notifEnableHTML()+
     '<label class="pf-toggle-row"><span class="pf-item-label">내 글에 댓글이 달리면 알림</span><input type="checkbox" '+(SETTINGS.cm?'checked':'')+' onchange="toggleNotifPref(\'cm\',this.checked,\'댓글\')"></label>'+
     '<label class="pf-toggle-row"><span class="pf-item-label">좋아요 알림</span><input type="checkbox" '+(SETTINGS.like?'checked':'')+' onchange="toggleNotifPref(\'like\',this.checked,\'좋아요\')"></label>'+
     '<label class="pf-toggle-row"><span class="pf-item-label">공지·챌린지 알림</span><input type="checkbox" '+(SETTINGS.notice?'checked':'')+' onchange="toggleNotifPref(\'notice\',this.checked,\'공지\')"></label>'+
     '<label class="pf-toggle-row"><span class="pf-item-label">채팅 알림</span><input type="checkbox" '+(SETTINGS.chat?'checked':'')+' onchange="toggleNotifPref(\'chat\',this.checked,\'채팅\')"></label>'+
     '<label class="pf-toggle-row"><span class="pf-item-label">커미션 문의 알림</span><input type="checkbox" '+(SETTINGS.cminquiry?'checked':'')+' onchange="toggleNotifPref(\'cminquiry\',this.checked,\'커미션 문의\')"></label>'
     ,'notifSettingsSec');
  h+=pfSection('설정','프로필과 계정 정보를 관리해요',
     pfRow(pfMiniIcon('<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>'),'닉네임 변경',"openNickModal()",{})+
     pfRow(pfMiniIcon('<path d="M4 4h16v9H9l-5 3z"/><path d="M4 4v16"/>'),'칭호'+(AUTH.profile&&AUTH.profile.title_id&&TITLES_BY_ID[AUTH.profile.title_id]?' <span class="pf-item-count">'+esc(TITLES_BY_ID[AUTH.profile.title_id].name)+'</span>':''),"openTitlePicker()",{})+
     // 복구용 이메일은 아이디 계정 전용 — 소셜 계정은 메뉴 자체를 숨긴다(눌렀다 거절당하는 것보다 낫다)
     (isIdAccount()?pfRow(pfMiniIcon('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),'복구용 이메일',"openRecoveryEmail()",{}):''));
  h+=pfSection('약관','서비스 약관과 개인정보 처리방침을 확인해요',
     pfRow(pfMiniIcon('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>'),'이용약관',"location.href='/terms'",{})+
     pfRow(pfMiniIcon('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),'개인정보처리방침',"location.href='/privacy'",{}));
  if(AUTH.profile&&AUTH.profile.is_admin){
    var suspN=(function(){var n=reviewSuspicionCountSync();return n?' <span class="pf-item-badge">'+n+'</span>':'';})();
    h+='<div class="pf-group"><div class="pf-group-title">🛡 관리자</div>'+
       pfRow(pfMiniIcon('<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/>'),'신고 목록',"openAdminReports()",{})+
       pfRow(pfMiniIcon('<path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8 8.38 8.38 0 0 1 8.5-8.5 8.5 8.5 0 0 1 8.5 8.5z"/>'),'전체 채팅 목록',"openAdminChatList()",{})+
       pfRow(pfMiniIcon('<path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 4-5"/>'),'광고 심사',"openAdminAdReview()",{})+
       pfRow(pfMiniIcon('<path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 4-5"/>'),'전체 광고 목록',"openAdminAdList()",{})+
       pfRow(pfMiniIcon('<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>'),'유료 광고 관리',"openAdminCampaigns()",{})+
       pfRow(pfMiniIcon('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),'후기 분석'+suspN,"openReviewAnalysis()",{})+
       pfRow(pfMiniIcon('<path d="M9 3v6l-4 4v8h14v-8l-4-4V3z"/>'),'매니저 픽 관리',"openManagerPickList()",{})+
       pfRow(pfMiniIcon('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>'),'초대 관리',"openAdminReferrals()",{})+
       pfRow(pfMiniIcon('<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>'),'삭제 기록',"openAdminDeletionLog()",{})+
       pfRow(pfMiniIcon('<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>'),'썸네일 백필',"openThumbBackfill()",{})+
       pfRow(pfMiniIcon('<path d="M3 3v18h18"/><path d="M7 15l3-4 3 2 4-6"/><circle cx="17" cy="7" r="1.6"/>'),'광고 성과',"openAdminMkt()",{})+
       pfRow(pfMiniIcon('<path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"/><path d="M16 3l5 5-9 9H7v-5z"/>'),'커미션 추천 관리',"openAdminCommissionMgmt()",{})+
       pfRow(pfMiniIcon('<path d="M12 2l2.4 7.4H22l-6 4.3 2.3 7.3-6.3-4.6-6.3 4.6 2.3-7.3-6-4.3h7.6z"/>'),'추천 점수 조정 기록',"openCommissionBonusLog()",{})+
       '</div>';
  }
  h+='</div>';
  h+='<div class="pf-bottom"><button type="button" class="pf-logout" onclick="logout()">로그아웃</button>'+
     '<button type="button" class="pf-withdraw" onclick="openWithdraw()">회원 탈퇴</button></div>';
  document.getElementById("main").innerHTML=h;
  syncTabs("me");pfScrollAfterRender();
  loadFollowBar(AUTH.user.id);
  atFillCard();
  pfBookmarkCount(AUTH.user.id).then(function(n){
    var el=document.getElementById("pfhBmCount");
    if(el)el.textContent=n;
  });
}
// 내 정보 내용(점수/등급/광고포인트, 내 글 수, 받은 후기 수)이 바뀌었는지 판단용 서명
function profileSignature(){
  var p=AUTH.profile||{}; var uid=AUTH.user&&AUTH.user.id;
  var posts=POSTS.filter(function(x){return x.dbId&&x.authorId===uid;}).length;
  var reviews=POSTS.filter(function(x){return x.dbId&&x.board==='review'&&x.reviewedUserId===uid;}).length;
  return (p.score||0)+"."+(p.level||0)+"."+(p.ad_points||0)+"|"+posts+"|"+reviews;
}
// 내 프로필(AUTH.profile)과 글/후기(POSTS)를 다시 불러와, 내 정보 화면을 보고 있고 내용이 바뀐 경우에만 한 번 다시 그림.
async function refreshProfile(){
  if(!window.supabase||profileRefreshing||!AUTH.user)return;
  if(Date.now()-postsLoadedAt<REFRESH_THROTTLE_MS)return; // 홈에서 방금 불러왔으면 내 정보 진입 시 재조회 생략
  profileRefreshing=true;
  var before=profileSignature();
  try{await refreshMyProfile();await loadRealPosts(true);}catch(e){} // loadRealPosts(true)=피드는 안 그림
  profileRefreshing=false;
  if(curTab==="me"&&document.getElementById("myProfileView")&&profileSignature()!==before)renderMyProfile();
}
// "알림 설정" 딥링크(시스템 알림 클릭 → /?notif=settings) 처리: 내 정보를 열고 알림 설정 섹션으로 스크롤
function handleNotifSettingsDeeplink(){
  var params;
  try{params=new URLSearchParams(location.search);}catch(e){return;}
  if(params.get("notif")!=="settings")return;
  history.replaceState({},"","/");        // 파라미터 정리(새로고침·공유 시 재실행 방지)
  if(!AUTH.user)return;                     // 비로그인이면 스킵(로그인 후 내 정보에서 설정 가능)
  notifDeeplinkPending=true;
  openProfile();
  setTimeout(function(){notifDeeplinkPending=false;},2200); // 이 시간 동안의 렌더는 알림 설정으로 스크롤
}
// 프로필 렌더 직후 스크롤: 알림 설정 딥링크 중이면 그 섹션으로, 아니면 맨 위로
function pfScrollAfterRender(){
  if(notifDeeplinkPending){
    var ns=document.getElementById("notifSettingsSec");
    if(ns){ns.scrollIntoView({behavior:"smooth",block:"start"});return;}
  }
  window.scrollTo({top:0,behavior:"smooth"});
}
function pfScrollToFollowing(){var el=document.getElementById("pfFollowingSec");if(el)el.scrollIntoView({behavior:"smooth",block:"start"});}
/* ===== SNS식 팔로잉/팔로워 수 + 목록 모달 ===== */
async function getFollowCounts(userId){
  var g=await window.supabase.from("follows").select("*",{count:"exact",head:true}).eq("follower_id",userId);
  var r=await window.supabase.from("follows").select("*",{count:"exact",head:true}).eq("followee_id",userId);
  return {following:(g.count||0), followers:(r.count||0)};
}
// 프로필의 '팔로잉 N · 팔로워 N' 바를 비동기로 채움(두 프로필 공용)
var _followBarUserId=null; // 현재 보고 있는 프로필의 userId(모달에서 팔로우 토글 후 수 갱신용)
async function loadFollowBar(userId){
  var bar=document.getElementById("pfFollowBar"); if(!bar||!window.supabase||!userId)return;
  _followBarUserId=userId;
  var c=await getFollowCounts(userId);
  if(!document.getElementById("pfFollowBar"))return; // 그새 화면 이동
  bar.innerHTML=
    '<div class="pf-fb" onclick="openFollowList(\''+esc(userId)+'\',\'following\')"><b>'+c.following+'</b><span>팔로잉</span></div>'+
    '<div class="pf-fb" onclick="openFollowList(\''+esc(userId)+'\',\'followers\')"><b>'+c.followers+'</b><span>팔로워</span></div>';
}
// 목록 모달: tab='following'(그 사람이 팔로우한 사람들) / 'followers'(그 사람을 팔로우한 사람들)
async function openFollowList(userId,tab){
  var modal=document.getElementById("followListModal"); if(!modal||!window.supabase)return;
  document.getElementById("followModalTitle").textContent=(tab==="followers"?"팔로워":"팔로잉");
  document.getElementById("followModalList").innerHTML='<div class="follow-modal-msg">불러오는 중…</div>';
  modal.classList.add("open");document.body.style.overflow="hidden";
  var joinCol=(tab==="followers")?"follower_id":"followee_id";   // 화면에 보여줄 사람
  var filterCol=(tab==="followers")?"followee_id":"follower_id"; // 기준 사용자
  var res=await window.supabase.from("follows")
    .select("profiles:"+joinCol+"(id,nickname,avatar_url,level)")
    .eq(filterCol,userId).order("created_at",{ascending:false});
  var listEl=document.getElementById("followModalList"); if(!listEl)return;
  if(res.error){listEl.innerHTML='<div class="follow-modal-msg">불러오지 못했어요</div>';return;}
  var users=(res.data||[]).map(function(r){return r.profiles;}).filter(Boolean);
  if(!users.length){listEl.innerHTML='<div class="follow-modal-msg">'+(tab==="followers"?"아직 팔로워가 없어요":"아직 팔로우한 사람이 없어요")+'</div>';return;}
  var meId=AUTH.user?AUTH.user.id:null;
  listEl.innerHTML=users.map(function(u){
    // 로그인 상태 + 내가 아닐 때만 팔로우/언팔로우 버튼(내 팔로우 상태 반영)
    var btn=(meId&&u.id!==meId)
      ? '<button class="follow-item-btn'+(FOLLOW.has(u.id)?' following':'')+'" onclick="event.stopPropagation();toggleFollowFromList(\''+esc(u.id)+'\',\''+esc(u.nickname)+'\',this)">'+(FOLLOW.has(u.id)?'팔로잉':'＋ 팔로우')+'</button>'
      : '';
    return '<div class="follow-item" onclick="closeFollowList();openUserProfile(\''+esc(u.id)+'\')">'+
      '<div class="follow-item-ava">'+avatarHTML(u.nickname,u.avatar_url)+'</div>'+
      '<div class="follow-item-info"><span class="follow-item-nick">'+esc(u.nickname)+'</span>'+levelBadgeHtml(u.level,"lv-badge")+'</div>'+
      btn+
    '</div>';
  }).join("");
}
// 목록에서 팔로우/언팔로우(로그인 필수, 서버 저장). 버튼 즉시 갱신 + 프로필 숫자 갱신.
async function toggleFollowFromList(userId,nickname,btnEl){
  if(!AUTH.user){toast("로그인 후 팔로우할 수 있어요","🔒");loginWithGoogle();return;}
  if(userId===AUTH.user.id||!window.supabase)return;
  var following=FOLLOW.has(userId);
  if(btnEl)btnEl.disabled=true;
  if(following){
    var del=await window.supabase.from("follows").delete({count:"exact"}).eq("follower_id",AUTH.user.id).eq("followee_id",userId);
    if(!del.error&&del.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
    if(del.error){toast("처리 실패: "+del.error.message);if(btnEl)btnEl.disabled=false;return;}
    FOLLOW.delete(userId);
  }else{
    var ins=await window.supabase.from("follows").insert({follower_id:AUTH.user.id,followee_id:userId});
    if(ins.error){toast("처리 실패: "+ins.error.message);if(btnEl)btnEl.disabled=false;return;}
    FOLLOW.add(userId);if(nickname)FOLLOW_NAME[userId]=nickname;
  }
  var nowF=FOLLOW.has(userId);
  if(btnEl){btnEl.disabled=false;btnEl.classList.toggle("following",nowF);btnEl.textContent=nowF?"팔로잉":"＋ 팔로우";}
  if(_followBarUserId)loadFollowBar(_followBarUserId); // 프로필의 팔로잉/팔로워 수 갱신
}
function closeFollowList(){var m=document.getElementById("followListModal");if(m)m.classList.remove("open");document.body.style.overflow="";}
async function unfollowFromProfile(uid){
  if(!AUTH.user||!window.supabase)return;
  var del=await window.supabase.from("follows").delete({count:"exact"}).eq("follower_id",AUTH.user.id).eq("followee_id",uid);
  if(!del.error&&del.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(del.error){toast("처리 실패: "+del.error.message);return;}
  var nm=FOLLOW_NAME[uid]||"회원";
  FOLLOW.delete(uid);
  toast(dispName(nm)+"님 팔로우를 취소했어요");openProfile();
}
async function openAdminReports(){
  var res=await window.supabase.from("reports").select("*").eq("resolved",false).order("created_at",{ascending:false});
  if(res.error){toast("불러오기 실패: "+res.error.message);return;}
  var reports=res.data;
  // 긴급 신고(불법촬영물·아동성착취물)를 맨 위로 올린다 — 시간순만으로는 묻히기 때문
  reports.sort(function(a,b){
    var ua=_isUrgentReport(a)?0:1, ub=_isUrgentReport(b)?0:1;
    if(ua!==ub)return ua-ub;
    return new Date(b.created_at)-new Date(a.created_at);
  });
  var postIds=Array.from(new Set(reports.filter(function(r){return r.post_id}).map(function(r){return r.post_id})));
  var postRes=postIds.length?await window.supabase.from("posts").select("id,title,board,blinded").in("id",postIds):{data:[]};
  var postById={};(postRes.data||[]).forEach(function(pr){postById[pr.id]=pr;});
  var cmIds=Array.from(new Set(reports.filter(function(r){return r.commission_id}).map(function(r){return r.commission_id})));
  var cmRes2=cmIds.length?await window.supabase.from("commissions").select("id,title,author_id").in("id",cmIds):{data:[]};
  var cmById={};(cmRes2.data||[]).forEach(function(c){cmById[c.id]=c;});
  var emoIds=Array.from(new Set(reports.filter(function(r){return r.emoticon_pack_id}).map(function(r){return r.emoticon_pack_id})));
  var emoRes=emoIds.length?await window.supabase.from("emoticon_packs").select("id,title,author_id").in("id",emoIds):{data:[]};
  var emoById={};(emoRes.data||[]).forEach(function(e){emoById[e.id]=e;});
  var adIds=Array.from(new Set(reports.filter(function(r){return r.ad_id}).map(function(r){return r.ad_id})));
  var adRes=adIds.length?await window.supabase.from("user_ads").select("id,user_id,image_url,status,linked_post_id,linked_commission_id").in("id",adIds):{data:[]};
  var adById={};(adRes.data||[]).forEach(function(a){adById[a.id]=a;});
  var reportedUserIds=Array.from(new Set(reports.filter(function(r){return r.reported_user_id}).map(function(r){return r.reported_user_id})));
  var adUserIds=(adRes.data||[]).map(function(a){return a.user_id});
  reportedUserIds=Array.from(new Set(reportedUserIds.concat(adUserIds)));
  var profRes=reportedUserIds.length?await window.supabase.from("profiles").select("id,nickname").in("id",reportedUserIds):{data:[]};
  var nickById={};(profRes.data||[]).forEach(function(p){nickById[p.id]=p.nickname;});
  var h='<div class="profile"><div class="pf-sec">🛡 신고 목록 ('+reports.length+')</div>';
  if(!reports.length){
    h+='<div class="pf-empty">처리할 신고가 없어요.</div>';
  }else{
    h+='<div class="list">';
    reports.forEach(function(r){
      if(r.conversation_id){
        var name=nickById[r.reported_user_id]||"알 수 없음";
        h+='<div class="post rip"><div class="pmain" style="cursor:pointer" onclick="adminViewConversation('+r.conversation_id+','+r.id+',\'reports\')"><div class="ptitle">💬 채팅 신고 — '+esc(name)+'</div>'+
          '<div class="pmeta"><span class="mt">'+timeAgo(r.created_at)+'</span>'+(r.reason?'<span class="sep"></span><span class="mv">사유: '+esc(r.reason)+'</span>':'')+'</div></div>'+
          '<div style="display:flex;gap:8px;flex-shrink:0">'+
            '<button class="d-act" onclick="adminViewConversation('+r.conversation_id+','+r.id+',\'reports\')">대화 보기</button>'+
            '<button class="d-act" onclick="dismissReport('+r.id+')">무시</button>'+
          '</div></div>';
      }else if(r.commission_id){
        var cm=cmById[r.commission_id];
        h+='<div class="post rip"><div class="pmain"'+(cm?' style="cursor:pointer" onclick="cmOpenCommissionById('+r.commission_id+')"':'')+'>'+
          '<div class="ptitle">🎨 커미션 신고 — '+(cm?esc(cm.title):"(이미 삭제된 커미션)")+'</div>'+
          '<div class="pmeta"><span class="mt">'+timeAgo(r.created_at)+'</span>'+(r.reason?'<span class="sep"></span><span class="mv">사유: '+esc(r.reason)+'</span>':'')+'</div></div>'+
          '<div style="display:flex;gap:8px;flex-shrink:0">'+
            (cm?'<button class="d-act" onclick="adminDeleteReportedCommission('+r.id+','+r.commission_id+')">커미션 삭제</button>':'')+
            '<button class="d-act" onclick="dismissReport('+r.id+')">무시</button>'+
          '</div></div>';
      }else if(r.emoticon_pack_id){
        var pack=emoById[r.emoticon_pack_id];
        h+='<div class="post rip"><div class="pmain">'+
          '<div class="ptitle">🙂 이모티콘 신고 — '+(pack?esc(pack.title):"(이미 삭제된 팩)")+'</div>'+
          '<div class="pmeta"><span class="mt">'+timeAgo(r.created_at)+'</span>'+(r.reason?'<span class="sep"></span><span class="mv">사유: '+esc(r.reason)+'</span>':'')+'</div></div>'+
          '<div style="display:flex;gap:8px;flex-shrink:0">'+
            (pack?'<button class="d-act" onclick="adminDeleteReportedEmoticon('+r.id+','+r.emoticon_pack_id+')">팩 삭제</button>':'')+
            '<button class="d-act" onclick="dismissReport('+r.id+')">무시</button>'+
          '</div></div>';
      }else if(r.ad_id){
        var ad=adById[r.ad_id];
        var adName=ad?(nickById[ad.user_id]||"알 수 없음"):null;
        h+='<div class="post rip"><div class="pmain"'+(ad?' style="cursor:pointer" onclick="'+adTargetOnclick(ad)+'"':'')+'>'+
          (ad?'<img src="'+esc(ad.image_url)+'" alt="" style="width:100%;max-width:220px;height:56px;object-fit:cover;border-radius:8px;margin-bottom:6px;display:block">':'')+
          '<div class="ptitle">📢 광고 신고 — '+(ad?((ad.linked_commission_id?'🎨 ':'📝 ')+esc(adName)):"(이미 삭제된 광고)")+'</div>'+
          '<div class="pmeta"><span class="mt">'+timeAgo(r.created_at)+'</span>'+(r.reason?'<span class="sep"></span><span class="mv">사유: '+esc(r.reason)+'</span>':'')+'</div></div>'+
          '<div style="display:flex;gap:8px;flex-shrink:0">'+
            (ad&&ad.status==="active"?'<button class="d-act" onclick="adminDeleteReportedAd('+r.id+','+r.ad_id+',true)">삭제+환수</button>'+
            '<button class="d-act" onclick="adminDeleteReportedAd('+r.id+','+r.ad_id+',false)">삭제만</button>':'')+
            '<button class="d-act" onclick="dismissReport('+r.id+')">무시</button>'+
          '</div></div>';
      }else{
        var post=postById[r.post_id];
        var blinded=post&&post.blinded;
        h+='<div class="post rip"><div class="pmain"'+(post?' style="cursor:pointer" onclick="openPost('+(100000+post.id)+')"':'')+'>'+
          '<div class="ptitle">'+(blinded?'<span class="blind-tag">가림</span>':'')+(_isUrgentReport(r)?'<span class="blind-tag">⚠️ 확인 요망</span>':'')+(post?esc(post.title):"(이미 삭제된 글)")+'</div>'+
          '<div class="pmeta"><span class="mt">'+timeAgo(r.created_at)+'</span>'+(r.reason?'<span class="sep"></span><span class="mv">사유: '+esc(r.reason)+'</span>':'')+'</div></div>'+
          '<div style="display:flex;gap:8px;flex-shrink:0">'+
            (post?(blinded
              ?'<button class="d-act" onclick="adminBlindPost('+r.id+','+post.id+',false)">가림 해제</button>'
              :'<button class="d-act" onclick="adminBlindPost('+r.id+','+post.id+',true)">임시 가림</button>'):'')+
            (post?'<button class="d-act" onclick="adminDeleteReportedPost('+r.id+','+post.id+')">글 삭제</button>':'')+
            '<button class="d-act" onclick="dismissReport('+r.id+')">무시</button>'+
          '</div></div>';
      }
    });
    h+='</div>';
  }
  h+='<button class="pf-edit" onclick="openProfile()" style="margin-top:16px">내 정보로 돌아가기</button></div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
// 조치 이력 기록 — 이의신청이나 분쟁이 생겼을 때 근거가 된다. 실패해도 조치 자체는 진행.
async function _logModeration(action,postId,reportId,note){
  try{
    await window.supabase.from("moderation_log").insert({
      post_id:postId||null,report_id:reportId||null,
      actor_id:AUTH.user?AUTH.user.id:null,action:action,note:note||null
    });
  }catch(e){}
}
/* 임시조치(블라인드) — 삭제와 달리 글은 남고 작성자·운영자에게만 보인다.
   판단이 끝나기 전에 노출만 멈추는 조치라, 오신고였으면 되돌릴 수 있다.
   (정보통신망법 제44조의2가 말하는 '임시조치'에 해당) */
async function adminBlindPost(reportId,postDbId,on){
  if(on&&!(await confirmDialog("이 글을 임시로 가릴까요?\\n작성자와 운영자에게만 보이게 됩니다.")))return;
  if(!on&&!(await confirmDialog("가림을 해제할까요? 다시 모두에게 보이게 됩니다.")))return;
  var res=await window.supabase.from("posts").update(
    on?{blinded:true,blinded_at:new Date().toISOString(),blind_reason:"운영자 임시조치"}
      :{blinded:false,blinded_at:null,blind_reason:null}
  ,{count:"exact"}).eq("id",postDbId);
  if(res.error){toast("처리 실패: "+res.error.message);return;}
  if(res.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  await _logModeration(on?"blind":"unblind",postDbId,reportId,null);
  postsLoadedAt=0; // 목록에 반영되도록 다음 이동 때 새로 불러옴
  toast(on?"글을 가렸어요":"가림을 해제했어요");
  openAdminReports();
}
async function adminDeleteReportedCommission(reportId,commissionId){
  // 커미션은 돈이 오가는 거래라 근거가 특히 중요하다 → 보관본을 남기는 RPC로 지운다.
  // (이미지 파일은 지우지 않아 보관본에서 그림이 그대로 보인다)
  var q=await adminDeleteReasonDialog();
  if(!q)return;
  if(!(await confirmDialog(q.notify?"이 커미션을 삭제할까요? 작가에게 알림이 전송돼요.":"이 커미션을 삭제할까요? (작가에게 알림을 보내지 않습니다)")))return;
  var r=await window.supabase.rpc("admin_delete_commission",{p_commission_id:commissionId,p_reason:q.reason,p_notify:q.notify});
  if(r.error){toast("삭제 실패: "+r.error.message);return;}
  var rd=r.data||{};
  if(!rd.ok){toast(rd.error==="not_admin"?"관리자만 사용할 수 있어요":("삭제할 수 없어요 ("+(rd.error||"오류")+")"));return;}
  await window.supabase.from("reports").update({resolved:true}).eq("id",reportId);
  await _logModeration("delete",null,reportId,"커미션 #"+commissionId+(q.reason?(" — "+q.reason):""));
  cmData=cmData.filter(function(c){return c.id!==commissionId;});
  toast("커미션을 삭제했어요","🗑");
  openAdminReports();
}
async function adminDeleteReportedEmoticon(reportId,packId){
  if(!(await confirmDialog("이 이모티콘 팩을 삭제할까요? 담아간 사람들에게서도 사라집니다.")))return;
  var r=await window.supabase.from("emoticon_packs").delete({count:"exact"}).eq("id",packId);
  if(!r.error&&r.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
  if(r.error){toast("삭제 실패: "+r.error.message);return;}
  await window.supabase.from("reports").update({resolved:true}).eq("id",reportId);
  await _logModeration("delete",null,reportId,"이모티콘 팩 #"+packId);
  toast("이모티콘을 삭제했어요","🗑");
  await loadMyEmoticons();refreshEmoStrip();
  openAdminReports();
}
async function dismissReport(reportId){
  var res=await window.supabase.from("reports").update({resolved:true}).eq("id",reportId);
  if(res.error){toast("처리 실패: "+res.error.message);return;}
  await _logModeration("dismiss",null,reportId,null);
  toast("신고를 처리했어요");
  openAdminReports();
}
async function adminDeleteReportedPost(reportId,postDbId){
  // ⚠️ 예전엔 여기서 posts를 직접 지워 보관본이 남지 않았다. 글 상세의 관리자 삭제와 같은 RPC를 써서
  //    사유 입력과 원본 스냅샷이 똑같이 남게 한다(신고 건이야말로 나중에 이의신청이 들어온다).
  var r=await adminDeleteReasonDialog();
  if(!r)return;
  if(!(await confirmDialog(r.notify?"이 글을 삭제할까요? 작성자에게 알림이 전송돼요.":"이 글을 삭제할까요? (작성자에게 알림을 보내지 않습니다)")))return;
  var res=await window.supabase.rpc("admin_delete_post",{p_post_id:postDbId,p_reason:r.reason,p_notify:r.notify});
  if(res.error){toast("삭제 실패: "+res.error.message);return;}
  var data=res.data||{};
  if(!data.ok){toast(data.error==="not_admin"?"관리자만 사용할 수 있어요":("삭제할 수 없어요 ("+(data.error||"오류")+")"));return;}
  await window.supabase.from("reports").update({resolved:true}).eq("id",reportId);
  await _logModeration("delete",postDbId,reportId,r.reason||null);
  POSTS=POSTS.filter(function(x){return x.dbId!==postDbId});
  toast("글을 삭제했어요");
  openAdminReports();
}
async function adminDeleteReportedAd(reportId,adId,refund){
  if(!(await confirmDialog(refund?"이 광고를 삭제하고 포인트를 환수할까요?":"이 광고를 삭제할까요? (환수 없음)")))return;
  var res=await window.supabase.rpc("admin_remove_ad",{p_ad_id:adId,p_refund:refund});
  if(res.error){toast("삭제 실패: "+res.error.message);return;}
  if(reportId)await window.supabase.from("reports").update({resolved:true}).eq("id",reportId);
  ACTIVE_ADS=ACTIVE_ADS.filter(function(a){return a.id!==adId});
  toast("광고를 삭제했어요");
  if(reportId)openAdminReports();else openAdminAdList();
}
async function openAdminAdList(){
  var res=await window.supabase.from("user_ads").select("id,user_id,image_url,status,points_spent,duration_days,created_at,expires_at,linked_post_id,linked_commission_id").order("created_at",{ascending:false});
  if(res.error){toast("불러오기 실패: "+res.error.message);return;}
  var ads=res.data;
  var userIds=Array.from(new Set(ads.map(function(a){return a.user_id})));
  var profRes=userIds.length?await window.supabase.from("profiles").select("id,nickname").in("id",userIds):{data:[]};
  var nickById={};(profRes.data||[]).forEach(function(p){nickById[p.id]=p.nickname;});
  var statusLabel={active:"진행중",expired:"기간 만료",removed_by_admin:"관리자 삭제",pending:"심사 대기",rejected:"반려됨"};
  var h='<div class="profile"><div class="pf-sec">🛡 전체 광고 목록 ('+ads.length+')</div>';
  if(!ads.length){
    h+='<div class="pf-empty">등록된 광고가 없어요.</div>';
  }else{
    h+='<div class="list">';
    ads.forEach(function(a){
      var actions="";
      if(a.status==="pending"){
        actions='<button class="d-act" onclick="approveUserAd('+a.id+',\'list\')">승인</button>'+
          '<button class="d-act" onclick="rejectUserAd('+a.id+',\'list\')">거절</button>';
      }else if(a.status==="active"){
        actions='<button class="d-act" onclick="adminDeleteReportedAd(null,'+a.id+',true)">삭제+환수</button>'+
          '<button class="d-act" onclick="adminDeleteReportedAd(null,'+a.id+',false)">삭제만</button>';
      }
      h+='<div class="post rip"><div class="pmain" style="cursor:pointer" onclick="'+adTargetOnclick(a)+'">'+
        '<img src="'+esc(a.image_url)+'" alt="" style="width:100%;max-width:220px;height:56px;object-fit:cover;border-radius:8px;margin-bottom:6px;display:block">'+
        '<div class="ptitle">'+(a.linked_commission_id?'🎨 ':'📝 ')+esc(nickById[a.user_id]||"알 수 없음")+' · '+(statusLabel[a.status]||a.status)+'</div>'+
        '<div class="pmeta"><span class="mt">'+timeAgo(a.created_at)+'</span><span class="sep"></span><span class="mv">'+a.points_spent+'P · '+a.duration_days+'일</span></div></div>'+
        '<div style="display:flex;gap:8px;flex-shrink:0">'+actions+'</div></div>';
    });
    h+='</div>';
  }
  h+='<button class="pf-edit" onclick="openProfile()" style="margin-top:16px">내 정보로 돌아가기</button></div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
async function openAdminAdReview(){
  var res=await window.supabase.from("user_ads").select("id,user_id,image_url,linked_post_id,linked_commission_id,points_spent,duration_days,created_at").eq("status","pending").order("created_at",{ascending:true});
  if(res.error){toast("불러오기 실패: "+res.error.message);return;}
  var ads=res.data;
  var userIds=Array.from(new Set(ads.map(function(a){return a.user_id})));
  var profRes=userIds.length?await window.supabase.from("profiles").select("id,nickname").in("id",userIds):{data:[]};
  var nickById={};(profRes.data||[]).forEach(function(p){nickById[p.id]=p.nickname;});
  var h='<div class="profile"><div class="pf-sec">🛡 광고 심사 ('+ads.length+')</div>';
  if(!ads.length){
    h+='<div class="pf-empty">심사할 광고가 없어요.</div>';
  }else{
    h+='<div class="list">';
    ads.forEach(function(a){
      h+='<div class="post rip"><div class="pmain" style="cursor:pointer" onclick="'+adTargetOnclick(a)+'">'+
        '<img src="'+esc(a.image_url)+'" alt="" style="width:100%;max-width:220px;height:56px;object-fit:cover;border-radius:8px;margin-bottom:6px;display:block">'+
        '<div class="ptitle">'+(a.linked_commission_id?'🎨 ':'📝 ')+esc(nickById[a.user_id]||"알 수 없음")+'</div>'+
        '<div class="pmeta"><span class="mt">'+timeAgo(a.created_at)+'</span><span class="sep"></span><span class="mv">'+a.points_spent+'P · '+a.duration_days+'일 신청</span></div></div>'+
        '<div style="display:flex;gap:8px;flex-shrink:0">'+
          '<button class="d-act" onclick="approveUserAd('+a.id+',\'queue\')">승인</button>'+
          '<button class="d-act" onclick="rejectUserAd('+a.id+',\'queue\')">거절</button>'+
        '</div></div>';
    });
    h+='</div>';
  }
  h+='<button class="pf-edit" onclick="openProfile()" style="margin-top:16px">내 정보로 돌아가기</button></div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
async function approveUserAd(adId,backTo){
  var res=await window.supabase.rpc("approve_user_ad",{p_ad_id:adId});
  if(res.error){toast("승인 실패: "+res.error.message);return;}
  toast("광고를 승인했어요");
  if(backTo==="list")openAdminAdList();else openAdminAdReview();
}
var rejectingAdId=null,rejectingAdBackTo=null;
function rejectUserAd(adId,backTo){
  rejectingAdId=adId;rejectingAdBackTo=backTo;
  document.getElementById("adRejectReasonInput").value="";
  document.getElementById("adRejectRefundInput").checked=true;
  document.getElementById("adRejectModal").classList.add("open");
}
function closeAdRejectModal(){
  rejectingAdId=null;rejectingAdBackTo=null;
  document.getElementById("adRejectModal").classList.remove("open");
}
async function submitAdReject(){
  if(!rejectingAdId)return;
  var adId=rejectingAdId,backTo=rejectingAdBackTo;
  var refund=document.getElementById("adRejectRefundInput").checked;
  var reason=document.getElementById("adRejectReasonInput").value.trim()||null;
  var res=await window.supabase.rpc("reject_user_ad",{p_ad_id:adId,p_refund:refund,p_reason:reason});
  if(res.error){toast("반려 실패: "+res.error.message);return;}
  closeAdRejectModal();
  toast("광고를 반려했어요");
  if(backTo==="list")openAdminAdList();else openAdminAdReview();
}

/* ---------- 유료 광고 캠페인 (관리자, CPM) ---------- */
var campaignDraft={imageUrl:null};
function campDate(iso){if(!iso)return"";var d=new Date(iso);return d.getFullYear()+"."+String(d.getMonth()+1).padStart(2,"0")+"."+String(d.getDate()).padStart(2,"0");}
async function openAdminCampaigns(){
  if(!AUTH.profile||!AUTH.profile.is_admin){toast("관리자만 사용할 수 있어요");return;}
  var res=await window.supabase.from("ad_campaigns").select("*").order("created_at",{ascending:false});
  if(res.error){toast("불러오기 실패: "+res.error.message);return;}
  var camps=res.data||[];
  var statusLabel={active:"진행중",paused:"멈춤",completed:"완료",archived:"보관"};
  var h='<div class="profile"><div class="pf-sec">🎯 유료 광고 캠페인 등록</div>';
  h+='<div style="padding:0 2px 8px">'+
     '<div style="font-size:13px;font-weight:700;color:var(--muted);margin:4px 2px 6px">배너 이미지 <span style="color:var(--brand)">*</span></div>'+
     '<div id="campBannerPreview" style="margin-bottom:8px">'+(campaignDraft.imageUrl?'<img src="'+esc(campaignDraft.imageUrl)+'" style="width:100%;border-radius:10px;display:block">':'')+'</div>'+
     '<input type="file" id="campBannerFile" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp" class="hidden" onchange="onCampaignBannerFile(event)">'+
     '<button class="pf-edit" onclick="document.getElementById(\'campBannerFile\').click()" style="width:100%;justify-content:center;margin-bottom:10px">배너 이미지 선택</button>'+
     '<input id="campAdvertiser" class="nick-in" placeholder="광고주 이름(메모용)" style="margin-bottom:8px">'+
     '<input id="campTarget" class="nick-in" placeholder="클릭 시 이동할 주소 (https://...)" style="margin-bottom:8px">'+
     '<input id="campGoal" type="number" min="1" step="1" class="nick-in" placeholder="판매한 총 노출수 (예: 50000)" style="margin-bottom:8px">'+
     '<input id="campCpm" type="number" min="0" step="0.01" class="nick-in" placeholder="CPM 단가 (1000노출당, 선택)" style="margin-bottom:8px">'+
     '<div style="font-size:13px;font-weight:700;color:var(--muted);margin:4px 2px 6px">집행 기간</div>'+
     '<div style="display:flex;gap:8px;margin-bottom:12px"><input id="campStart" type="date" class="nick-in" style="flex:1"><input id="campEnd" type="date" class="nick-in" style="flex:1"></div>'+
     '<button class="r-ok" onclick="submitCampaign()" style="width:100%">캠페인 등록</button>'+
     '</div>';
  h+='<div class="pf-sec">등록된 캠페인 ('+camps.length+')</div>';
  if(!camps.length){
    h+='<div class="pf-empty">아직 등록된 캠페인이 없어요.</div>';
  }else{
    h+='<div class="list">';
    camps.forEach(function(c){
      var pct=c.impression_goal?Math.min(100,Math.round(c.impressions_served/c.impression_goal*100)):0;
      var actions='<button class="d-act" onclick="openCampaignReport('+c.id+')">📊 리포트</button>';
      if(c.status==="active")actions+='<button class="d-act" onclick="setCampaignStatus('+c.id+',\'paused\')">멈춤</button>';
      else if(c.status==="paused")actions+='<button class="d-act" onclick="setCampaignStatus('+c.id+',\'active\')">재개</button>';
      if(c.status!=="archived")actions+='<button class="d-act" onclick="setCampaignStatus('+c.id+',\'archived\')">보관</button>';
      actions+='<button class="d-act" onclick="deleteCampaign('+c.id+')">삭제</button>';
      h+='<div class="post rip"><div class="pmain">'+
        '<img src="'+esc(c.image_url)+'" alt="" style="width:100%;max-width:220px;height:56px;object-fit:cover;border-radius:8px;margin-bottom:6px;display:block">'+
        '<div class="ptitle">'+esc(c.advertiser||"(광고주 미기재)")+' · '+(statusLabel[c.status]||c.status)+'</div>'+
        '<div class="pmeta"><span class="mv">'+Number(c.impressions_served).toLocaleString()+' / '+Number(c.impression_goal).toLocaleString()+' 노출 ('+pct+'%)</span></div>'+
        '<div class="pp-bar" style="margin:6px 0"><div class="pp-fill" style="width:'+pct+'%"></div></div>'+
        '<div class="pmeta"><span class="mt">'+campDate(c.flight_start)+' ~ '+campDate(c.flight_end)+'</span>'+(c.cpm_price!=null?'<span class="sep"></span><span class="mv">CPM '+Number(c.cpm_price).toLocaleString()+'</span>':'')+'</div></div>'+
        '<div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0">'+actions+'</div></div>';
    });
    h+='</div>';
  }
  h+='<button class="pf-edit" onclick="openProfile()" style="margin-top:16px">내 정보로 돌아가기</button></div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
async function onCampaignBannerFile(e){
  var f=e.target.files[0];if(!f)return;
  e.target.value="";
  if(!window.supabase){toast("업로드를 사용할 수 없어요");return;}
  if(ALLOWED_IMAGE_TYPES.indexOf(f.type)===-1){toast("이미지 파일만 올릴 수 있어요");return;}
  if(f.size>MAX_IMAGE_BYTES){toast("40MB 이하 이미지만 올릴 수 있어요");return;}
  var uploadBlob=f,ext=(f.name.match(/\.([^.]+)$/)||[,"png"])[1];
  if(f.type!=="image/gif"){
    toast("배너 이미지 압축 중...");
    try{var c=await compressImage(f);uploadBlob=c.blob;ext=c.ext;}catch(err){console.error("배너 압축 실패, 원본 사용:",err);}
  }
  toast("배너 업로드 중...");
  var campUrl=await uploadToStorage(uploadBlob,"campaign");
  if(!campUrl)return;
  campaignDraft.imageUrl=campUrl;
  var prev=document.getElementById("campBannerPreview");
  if(prev)prev.innerHTML='<img src="'+esc(campaignDraft.imageUrl)+'" style="width:100%;border-radius:10px;display:block">';
  toast("배너 이미지를 등록했어요");
}
async function submitCampaign(){
  if(!campaignDraft.imageUrl){toast("배너 이미지를 선택해주세요");return;}
  var advertiser=document.getElementById("campAdvertiser").value.trim();
  var target=document.getElementById("campTarget").value.trim();
  var goal=parseInt(document.getElementById("campGoal").value,10);
  var cpmRaw=document.getElementById("campCpm").value.trim();
  var cpm=cpmRaw===""?null:parseFloat(cpmRaw);
  var start=document.getElementById("campStart").value;
  var end=document.getElementById("campEnd").value;
  if(!/^https?:\/\//i.test(target)){toast("이동 주소는 http:// 또는 https://로 시작해야 해요");return;}
  if(!goal||goal<1){toast("판매한 총 노출수를 입력해주세요");return;}
  if(!start||!end){toast("집행 기간(시작일·종료일)을 입력해주세요");return;}
  var startIso=new Date(start+"T00:00:00").toISOString();
  var endIso=new Date(end+"T23:59:59").toISOString();
  if(new Date(endIso)<=new Date(startIso)){toast("종료일이 시작일보다 뒤여야 해요");return;}
  var row={advertiser:advertiser||null,image_url:campaignDraft.imageUrl,target_url:target,
    impression_goal:goal,cpm_price:(cpm==null||isNaN(cpm))?null:cpm,
    flight_start:startIso,flight_end:endIso,status:"active"};
  var res=await window.supabase.from("ad_campaigns").insert(row);
  if(res.error){toast("등록 실패: "+res.error.message);return;}
  campaignDraft={imageUrl:null};
  toast("캠페인을 등록했어요 🎯");
  openAdminCampaigns();
}
async function setCampaignStatus(id,status){
  var res=await window.supabase.from("ad_campaigns").update({status:status}).eq("id",id);
  if(res.error){toast("변경 실패: "+res.error.message);return;}
  openAdminCampaigns();
}
async function deleteCampaign(id){
  if(!(await confirmDialog("이 캠페인을 삭제할까요? 집계된 노출 기록도 함께 삭제됩니다.")))return;
  var res=await window.supabase.from("ad_campaigns").delete().eq("id",id);
  if(res.error){toast("삭제 실패: "+res.error.message);return;}
  toast("캠페인을 삭제했어요");
  openAdminCampaigns();
}
async function openCampaignReport(id){
  if(!AUTH.profile||!AUTH.profile.is_admin){toast("관리자만 사용할 수 있어요");return;}
  var cRes=await window.supabase.from("ad_campaigns").select("*").eq("id",id).single();
  if(cRes.error){toast("불러오기 실패: "+cRes.error.message);return;}
  var c=cRes.data;
  var dRes=await window.supabase.from("ad_impression_daily").select("date,count").eq("campaign_id",id).order("date");
  if(dRes.error){toast("불러오기 실패: "+dRes.error.message);return;}
  var byDate={};(dRes.data||[]).forEach(function(r){byDate[r.date]=r.count;});
  // 집행 시작 ~ min(오늘, 종료)까지 하루 단위로 채움(데이터 없는 날은 0)
  var start=new Date(c.flight_start),end=new Date(c.flight_end),today=new Date();
  var last=end<today?end:today;
  var d=new Date(start.getFullYear(),start.getMonth(),start.getDate());
  var lastD=new Date(last.getFullYear(),last.getMonth(),last.getDate());
  var days=[],guard=0;
  while(d<=lastD&&guard<400){
    var key=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
    days.push({label:(d.getMonth()+1)+"/"+d.getDate(),count:byDate[key]||0});
    d.setDate(d.getDate()+1);guard++;
  }
  var maxc=days.reduce(function(m,x){return Math.max(m,x.count);},1);
  var sum=days.reduce(function(s,x){return s+x.count;},0);
  var pct=c.impression_goal?Math.min(100,Math.round(c.impressions_served/c.impression_goal*100)):0;
  var avg=days.length?Math.round(sum/days.length):0;
  var bars=days.map(function(x){
    var hpct=Math.round(x.count/maxc*100);
    return '<div style="flex:0 0 auto;width:26px;height:100%;display:flex;flex-direction:column;align-items:center" title="'+x.label+': '+x.count.toLocaleString()+'회">'+
      '<div style="flex:1;width:100%;display:flex;align-items:flex-end;justify-content:center">'+
        '<div style="width:60%;min-height:'+(x.count?2:0)+'px;height:'+hpct+'%;background:var(--brand);border-radius:4px 4px 0 0"></div></div>'+
      '<div style="font-size:9px;color:var(--muted);margin-top:5px;white-space:nowrap">'+x.label+'</div></div>';
  }).join('');
  var h='<div class="profile"><div class="pf-sec">📊 광고 리포트</div>';
  h+='<div class="post"><div class="pmain">'+
    '<img src="'+esc(c.image_url)+'" alt="" style="width:100%;max-width:280px;height:70px;object-fit:cover;border-radius:8px;margin-bottom:8px;display:block">'+
    '<div class="ptitle">'+esc(c.advertiser||"(광고주 미기재)")+'</div>'+
    '<div class="pmeta"><span class="mv">'+Number(c.impressions_served).toLocaleString()+' / '+Number(c.impression_goal).toLocaleString()+' 노출 ('+pct+'%)</span></div>'+
    '<div class="pp-bar" style="margin:8px 0"><div class="pp-fill" style="width:'+pct+'%"></div></div>'+
    '<div class="pmeta"><span class="mt">'+campDate(c.flight_start)+' ~ '+campDate(c.flight_end)+'</span><span class="sep"></span><span class="mv">일 평균 '+avg.toLocaleString()+'회</span></div>'+
  '</div></div>';
  h+='<div class="pf-sec">일별 노출</div>';
  if(!sum){
    h+='<div class="pf-empty">아직 집계된 노출이 없어요.</div>';
  }else{
    h+='<div style="display:flex;gap:5px;overflow-x:auto;align-items:flex-end;height:170px;padding:10px 2px;border-bottom:1px solid var(--line-2)">'+bars+'</div>';
  }
  h+='<button class="pf-edit" onclick="openAdminCampaigns()" style="margin-top:16px">← 광고 관리로 돌아가기</button></div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ---------- 후기 조작 탐지·분석 (관리자) — DB 트리거와 같은 임계값을 클라이언트에서 재계산 ---------- */
var REVIEW_SURGE=5, REVIEW_REPEAT=2, REVIEW_NEWACCT=3;
function reviewPosts(){return POSTS.filter(function(p){return p.board==='review'&&p.reviewedUserId;});}
function reviewPairSet(){ // "X가 Y를 후기함" 쌍 집합 — 상호 후기 판정용
  var s={};reviewPosts().forEach(function(p){if(p.authorId&&p.reviewedUserId)s[p.authorId+'|'+p.reviewedUserId]=true;});return s;
}
function reviewAnalysisScan(createdMap){ // createdMap 있으면 신규계정 신호 포함
  var byArtist={};
  reviewPosts().forEach(function(p){
    (byArtist[p.reviewedUserId]=byArtist[p.reviewedUserId]||{id:p.reviewedUserId,nick:p.reviewedNickname||'(알 수 없음)',revs:[]}).revs.push(p);
  });
  var pairs=reviewPairSet(),now=Date.now(),D=86400000,out=[];
  Object.keys(byArtist).forEach(function(aid){
    var g=byArtist[aid],revs=g.revs,times=revs.map(function(r){return new Date(r.createdAt).getTime();});
    var surge=0;
    for(var i=0;i<times.length;i++){var cnt=0;for(var j=0;j<times.length;j++){if(times[j]>=times[i]&&times[j]<times[i]+D)cnt++;}if(cnt>surge)surge=cnt;}
    var byAuthor={};revs.forEach(function(r){if(r.authorId)byAuthor[r.authorId]=(byAuthor[r.authorId]||0)+1;});
    var repeatMax=0,repeatReviewers=0;
    Object.keys(byAuthor).forEach(function(k){if(byAuthor[k]>repeatMax)repeatMax=byAuthor[k];if(byAuthor[k]>=REVIEW_REPEAT)repeatReviewers++;});
    var recip=Object.keys(byAuthor).some(function(rv){return pairs[aid+'|'+rv];});
    var newAcct=0;
    if(createdMap){var seen={};revs.forEach(function(r){if(!r.authorId||seen[r.authorId])return;var ca=createdMap[r.authorId];if(ca&&(now-new Date(ca).getTime()<7*D)&&(now-new Date(r.createdAt).getTime()<7*D)){seen[r.authorId]=true;newAcct++;}});}
    var sig=[];
    if(surge>=REVIEW_SURGE)sig.push('급증 24h '+surge+'건');
    if(repeatReviewers>0)sig.push('중복 리뷰어 '+repeatReviewers+'명(최다 '+repeatMax+'건)');
    if(recip)sig.push('상호 후기(품앗이)');
    if(newAcct>=REVIEW_NEWACCT)sig.push('신규 계정 '+newAcct+'명');
    if(!sig.length)return;
    var score=(surge>=REVIEW_SURGE?2:0)+(repeatReviewers>0?3:0)+(recip?3:0)+(newAcct>=REVIEW_NEWACCT?2:0);
    out.push({id:aid,nick:g.nick,revs:revs,signals:sig,score:score,total:revs.length,byAuthor:byAuthor});
  });
  out.sort(function(a,b){return b.score-a.score||b.total-a.total;});
  return out;
}
function reviewSuspicionCountSync(){try{return reviewAnalysisScan(null).length;}catch(e){return 0;}}
async function reviewFetchCreatedMap(){
  var ids={};reviewPosts().forEach(function(p){if(p.authorId)ids[p.authorId]=true;});
  var list=Object.keys(ids);
  if(!list.length||!window.supabase)return {};
  var res=await window.supabase.from('profiles').select('id,created_at').in('id',list);
  var m={};(res.data||[]).forEach(function(r){m[r.id]=r.created_at;});
  return m;
}
async function openReviewAnalysis(focusArtistId){
  if(!AUTH.profile||!AUTH.profile.is_admin){toast("관리자만 사용할 수 있어요");return;}
  var createdMap=await reviewFetchCreatedMap();
  var flagged=reviewAnalysisScan(createdMap);
  if(focusArtistId){
    var target=flagged.find(function(x){return x.id===focusArtistId;});
    if(!target){
      var rv=reviewPosts().filter(function(p){return p.reviewedUserId===focusArtistId;});
      var ba={};rv.forEach(function(r){if(r.authorId)ba[r.authorId]=(ba[r.authorId]||0)+1;});
      target={id:focusArtistId,nick:(rv[0]&&rv[0].reviewedNickname)||'(알 수 없음)',revs:rv,signals:[],score:0,total:rv.length,byAuthor:ba};
    }
    document.getElementById("main").innerHTML=reviewAnalysisArtistHTML(target,createdMap);
    window.scrollTo({top:0,behavior:"smooth"});return;
  }
  var h='<div class="profile"><div class="pf-sec">🔍 후기 조작 분석</div>';
  h+='<div style="text-align:left;padding:12px 14px;background:var(--surface-2);border-radius:10px;margin-bottom:12px;font-size:12.5px;line-height:1.7;color:var(--ink-2)">'+
     '의심 <b>신호</b>가 걸린 작가만 표시됩니다. 정상적인 인기 급증도 걸릴 수 있어 최종 판단은 관리자 몫이에요.<br>'+
     '기준: 급증 24h '+REVIEW_SURGE+'건↑ · 중복 리뷰어 '+REVIEW_REPEAT+'건↑ · 신규계정 '+REVIEW_NEWACCT+'명↑ · 상호 후기</div>';
  if(!flagged.length){
    h+='<div class="pf-empty">의심되는 후기 패턴이 없어요 👍</div>';
  }else{
    h+='<div class="list">';
    flagged.forEach(function(f){
      h+='<div class="post rip" onclick="openReviewAnalysis(\''+cmQ(f.id)+'\')"><div class="pmain">'+
        '<div class="ptitle">⚠️ '+esc(f.nick)+' <span style="font-size:12px;color:var(--muted);font-weight:500">· 후기 '+f.total+'건 · 위험도 '+f.score+'</span></div>'+
        '<div class="pmeta" style="flex-wrap:wrap;gap:5px">'+f.signals.map(function(s){return '<span style="background:#fbe6ec;color:#c0392b;padding:2px 7px;border-radius:6px;font-size:11.5px">'+esc(s)+'</span>';}).join('')+'</div>'+
      '</div></div>';
    });
    h+='</div>';
  }
  h+='<button class="pf-edit" onclick="openProfile()" style="margin-top:16px">내 정보로 돌아가기</button></div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
function reviewAnalysisArtistHTML(f,createdMap){
  var now=Date.now(),D=86400000;
  var revs=f.revs.slice().sort(function(a,b){return new Date(b.createdAt)-new Date(a.createdAt);});
  var good=revs.filter(function(r){return r.commissionSentiment==='good';}).length;
  var bad=revs.filter(function(r){return r.commissionSentiment==='bad';}).length;
  var byDay={};revs.forEach(function(r){var d=new Date(r.createdAt);var k=(d.getMonth()+1)+'/'+d.getDate();byDay[k]=(byDay[k]||0)+1;});
  var days=[];for(var i=13;i>=0;i--){var d=new Date(now-i*D);var k=(d.getMonth()+1)+'/'+d.getDate();days.push({label:k,count:byDay[k]||0});}
  var maxc=days.reduce(function(m,x){return Math.max(m,x.count);},1);
  var bars=days.map(function(x){var hp=Math.round(x.count/maxc*100);return '<div style="flex:0 0 auto;width:22px;height:100%;display:flex;flex-direction:column;align-items:center" title="'+x.label+': '+x.count+'건"><div style="flex:1;width:100%;display:flex;align-items:flex-end;justify-content:center"><div style="width:60%;min-height:'+(x.count?2:0)+'px;height:'+hp+'%;background:'+(x.count>=REVIEW_SURGE?'#c0392b':'var(--brand)')+';border-radius:3px 3px 0 0"></div></div><div style="font-size:8px;color:var(--muted);margin-top:4px;white-space:nowrap">'+x.label+'</div></div>';}).join('');
  var pairs=reviewPairSet();
  var authors=Object.keys(f.byAuthor).map(function(aid){
    var rev=revs.find(function(r){return r.authorId===aid;});
    var ca=createdMap&&createdMap[aid];
    return {id:aid,nick:(rev&&rev.author)||'(익명)',count:f.byAuthor[aid],newAcct:ca&&(now-new Date(ca).getTime()<7*D),recip:!!pairs[f.id+'|'+aid]};
  }).sort(function(a,b){return b.count-a.count;});
  var h='<div class="profile"><div class="pf-sec">🔍 '+esc(f.nick)+' 후기 분석</div>';
  if(f.signals.length){
    h+='<div class="pmeta" style="flex-wrap:wrap;gap:5px;margin-bottom:12px">'+f.signals.map(function(s){return '<span style="background:#fbe6ec;color:#c0392b;padding:3px 9px;border-radius:7px;font-size:12px;font-weight:700">⚠️ '+esc(s)+'</span>';}).join('')+'</div>';
  }
  h+='<div class="pf-stats"><div class="pf-st"><b>'+revs.length+'</b><span>총 후기</span></div>'+
     '<div class="pf-st"><b>'+good+'</b><span>😊 만족</span></div>'+
     '<div class="pf-st"><b>'+bad+'</b><span>😞 불호</span></div></div>';
  h+='<div class="pf-sec">최근 14일 후기 추이</div>';
  h+='<div style="display:flex;gap:4px;overflow-x:auto;align-items:flex-end;height:130px;padding:8px 2px;border-bottom:1px solid var(--line-2)">'+bars+'</div>';
  h+='<div class="pf-sec">리뷰어별 ('+authors.length+'명)</div><div class="list">';
  authors.forEach(function(a){
    var tags=[];
    if(a.count>=REVIEW_REPEAT)tags.push('중복 '+a.count+'건');
    if(a.recip)tags.push('품앗이');
    if(a.newAcct)tags.push('신규계정');
    h+='<div class="post"><div class="pmain">'+
      '<div class="ptitle" style="cursor:pointer" onclick="openUserProfile(\''+cmQ(a.id)+'\')">'+esc(a.nick)+'</div>'+
      '<div class="pmeta"><span class="mv">후기 '+a.count+'건</span>'+(tags.length?'<span class="sep"></span><span class="mv" style="color:#c0392b;font-weight:700">'+esc(tags.join(' · '))+'</span>':'')+'</div>'+
    '</div></div>';
  });
  h+='</div>';
  h+='<div class="pf-sec">후기 목록</div><div class="list">';
  revs.forEach(function(r){
    var body=(r.content&&r.content.length)?r.content.join(' ').slice(0,60):'';
    h+='<div class="post rip" onclick="openPost('+r.id+')"><div class="pmain">'+
      '<div class="ptitle">'+(r.commissionSentiment==='good'?'😊':'😞')+' '+esc(r.author)+' <span style="font-size:12px;color:var(--muted);font-weight:500">'+esc(r.time)+'</span></div>'+
      (body?'<div class="pmeta"><span class="mv">'+esc(body)+'</span></div>':'')+
    '</div></div>';
  });
  h+='</div>';
  h+='<button class="pf-edit" onclick="openReviewAnalysis()" style="margin-top:16px">← 분석 목록으로</button></div>';
  return h;
}
async function adminViewConversation(conversationId,reportId,backTo){
  var convRes=await window.supabase.from("conversations").select("*").eq("id",conversationId).single();
  if(convRes.error){toast("대화를 불러오지 못했어요: "+convRes.error.message);return;}
  var conv=convRes.data;
  var profRes=await window.supabase.from("profiles").select("id,nickname").in("id",[conv.user1_id,conv.user2_id]);
  var nickById={};(profRes.data||[]).forEach(function(p){nickById[p.id]=p.nickname;});
  var msgRes=await window.supabase.from("messages").select("*").eq("conversation_id",conversationId).order("created_at",{ascending:true});
  if(msgRes.error){toast("메시지를 불러오지 못했어요: "+msgRes.error.message);return;}
  var logRes=await window.supabase.from("chat_admin_access_logs").insert({admin_id:AUTH.user.id,conversation_id:conversationId,report_id:reportId||null});
  if(logRes.error)console.error("관리자 채팅 열람 로그 기록 실패:",logRes.error.message);
  renderAdminChatView(conv,nickById,msgRes.data||[],backTo);
}
function renderAdminChatView(conv,nickById,messages,backTo){
  var backOnclick=backTo==="all"?"openAdminChatList()":"openAdminReports()";
  var backLabel=backTo==="all"?"← 전체 채팅 목록으로":"← 신고 목록으로";
  var h='<div class="profile">'+
    '<button class="d-back" onclick="'+backOnclick+'">'+backLabel+'</button>'+
    '<div class="pf-sec">🛡 대화 내용 (읽기 전용)</div>'+
    '<div class="pf-card"><div class="pf-info"><div class="pf-name">'+esc(nickById[conv.user1_id]||"알 수 없음")+' ↔ '+esc(nickById[conv.user2_id]||"알 수 없음")+'</div></div></div>'+
    '<div class="chat-list">'+(messages.length?messages.map(function(m){
      return '<div class="chat-msg"><div class="chat-bubble">'+esc(nickById[m.sender_id]||"알 수 없음")+': '+withEmoticons(esc(m.content))+'</div></div>';
    }).join(""):'<div class="pf-empty">메시지가 없어요.</div>')+'</div>'+
  '</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
async function openAdminChatList(searchTerm){
  searchTerm=(searchTerm||"").trim();
  enterScreen("admChat",openProfile); // 뒤로가기가 프로필로 복귀(검색 재호출은 같은 key라 중복 안 쌓임)
  document.getElementById("main").innerHTML='<div class="profile"><p style="padding:40px 0;text-align:center;color:var(--muted)">불러오는 중...</p></div>';
  var convRes;
  if(searchTerm){
    var profRes=await window.supabase.from("profiles").select("id,nickname").ilike("nickname","%"+searchTerm+"%");
    if(profRes.error){toast("검색 실패: "+profRes.error.message);return;}
    var ids=(profRes.data||[]).map(function(p){return p.id});
    if(!ids.length){renderAdminChatList([],{},searchTerm);return;}
    var orExpr=ids.map(function(id){return "user1_id.eq."+id+",user2_id.eq."+id}).join(",");
    convRes=await window.supabase.from("conversations").select("*").or(orExpr).order("last_message_at",{ascending:false}).limit(200);
  }else{
    convRes=await window.supabase.from("conversations").select("*").order("last_message_at",{ascending:false}).limit(200);
  }
  if(convRes.error){toast("불러오기 실패: "+convRes.error.message);return;}
  var convs=convRes.data||[];
  var partnerIds=Array.from(new Set(convs.reduce(function(acc,c){acc.push(c.user1_id,c.user2_id);return acc;},[])));
  var nickRes=partnerIds.length?await window.supabase.from("profiles").select("id,nickname").in("id",partnerIds):{data:[]};
  var nickById={};(nickRes.data||[]).forEach(function(p){nickById[p.id]=p.nickname;});
  renderAdminChatList(convs,nickById,searchTerm);
}
function renderAdminChatList(convs,nickById,searchTerm){
  var h='<div class="profile">'+
    '<button class="d-back" onclick="screenBack()">← 내 정보로</button>'+
    '<div class="pf-sec">🛡 전체 채팅 목록 ('+convs.length+')</div>'+
    '<div style="display:flex;gap:8px;margin-bottom:14px">'+
      '<input id="adminChatSearchInput" class="nick-in" style="flex:1;margin-bottom:0" placeholder="닉네임으로 검색" value="'+esc(searchTerm||"")+'" onkeydown="if(event.key===\'Enter\'){openAdminChatList(this.value)}">'+
      '<button class="d-act" onclick="openAdminChatList(document.getElementById(\'adminChatSearchInput\').value)">검색</button>'+
    '</div>';
  if(!convs.length){
    h+='<div class="pf-empty">'+(searchTerm?"검색 결과가 없어요.":"채팅방이 없어요.")+'</div>';
  }else{
    h+='<div class="chat-room-list">';
    convs.forEach(function(c){
      var n1=nickById[c.user1_id]||"알 수 없음",n2=nickById[c.user2_id]||"알 수 없음";
      h+='<div class="chat-room-row" onclick="adminViewConversation('+c.id+',null,\'all\')">'+
        '<div class="pf-ava" style="width:44px;height:44px;font-size:16px;flex-shrink:0">'+esc(n1[0])+'</div>'+
        '<div class="chat-room-info"><div class="chat-room-name">'+esc(n1)+' ↔ '+esc(n2)+'</div>'+
        '<div class="chat-room-preview">마지막 메시지: '+timeAgo(c.last_message_at||c.created_at)+'</div></div>'+
      '</div>';
    });
    h+='</div>';
  }
  h+='</div>';
  document.getElementById("main").innerHTML=h;
  window.scrollTo({top:0,behavior:"smooth"});
}
function openNickModal(){
  document.getElementById("nickInput").value=ME.nick==="나"?"":ME.nick;
  document.getElementById("nickModal").classList.add("open");
  setTimeout(function(){document.getElementById("nickInput").focus()},60);
}
function closeNick(){document.getElementById("nickModal").classList.remove("open");}
async function saveNick(){
  var v=document.getElementById("nickInput").value.trim();
  if(v.length<2||v.length>12){toast("닉네임은 2~12자여야 해요");return;}
  if(!/^[가-힣a-zA-Z0-9]+$/.test(v)){toast("닉네임에는 한글·영문·숫자만 사용할 수 있어요");return;}
  if(AUTH.user&&window.supabase){
    var res=await window.supabase.from("profiles").update({nickname:v},{count:"exact"}).eq("id",AUTH.user.id);
    if(!res.error&&res.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
    if(res.error){
      if(res.error.code==="23505"){toast("이미 사용 중인 닉네임이에요");}
      else{toast("저장 실패: "+res.error.message);}
      return;
    }
    if(AUTH.profile)AUTH.profile.nickname=v;
  }
  ME.nick=v;closeNick();toast("닉네임을 \'"+v+"\'(으)로 바꿨어요","✓");
  openProfile();
}
// ===== 회원 탈퇴 (계정 삭제) =====
// 서버 RPC delete_my_account()가 처리: 글·댓글은 익명화(내용 유지), 프로필·커미션·채팅·팔로우·투표·알림·좋아요 등은 삭제, 로그인 계정 삭제.
function openWithdraw(){
  if(!AUTH.user){toast("로그인 후 이용할 수 있어요");return;}
  var i=document.getElementById("withdrawConfirm");if(i)i.value="";
  withdrawCheck();
  document.getElementById("withdrawModal").classList.add("open");
  setTimeout(function(){try{i.focus();}catch(e){}},60);
}
function closeWithdraw(){document.getElementById("withdrawModal").classList.remove("open");}
function withdrawCheck(){ // 실수 방지: '회원탈퇴'를 정확히 입력해야 버튼 활성화
  var i=document.getElementById("withdrawConfirm");var b=document.getElementById("withdrawGoBtn");
  if(!i||!b)return;
  b.disabled=((i.value||"").trim()!=="회원탈퇴");
}
async function doWithdraw(){
  var i=document.getElementById("withdrawConfirm");var b=document.getElementById("withdrawGoBtn");
  if(!i||(i.value||"").trim()!=="회원탈퇴")return;
  if(!AUTH.user||!window.supabase){toast("로그인 상태를 확인해주세요");return;}
  if(b){b.disabled=true;b.textContent="처리 중…";}
  try{
    var res=await window.supabase.rpc("delete_my_account");
    if(res.error){toast("탈퇴 실패: "+res.error.message);if(b){b.disabled=false;b.textContent="탈퇴하기";}return;}
    var d=res.data||{};
    if(d.ok===false){toast("탈퇴 실패: "+(d.error==="not_authenticated"?"로그인 상태가 아니에요":(d.error||"알 수 없는 오류")));if(b){b.disabled=false;b.textContent="탈퇴하기";}return;}
    // 성공 → 세션 정리 후 홈으로
    try{await window.supabase.auth.signOut();}catch(e){}
    closeWithdraw();
    toast("회원 탈퇴가 완료되었어요. 그동안 감사했습니다.","👋");
    setTimeout(function(){location.href="/";},1400);
  }catch(e){
    toast("탈퇴 처리 중 오류: "+((e&&e.message)||e));
    if(b){b.disabled=false;b.textContent="탈퇴하기";}
  }
}
// ===== 이용규칙 =====
/* ===== 이용 규칙 — 관리자 페이지에서 고칠 수 있다 =========================
   ⚠️ 아래 기본값은 지우면 안 된다. DB 조회가 실패하거나(표가 아직 없거나 네트워크 오류)
      아직 안 왔을 때 이 값으로 그린다. 규칙은 처음 온 사람에게 보여줘야 하는 내용이라
      "못 불러왔으니 아무것도 안 보여준다"가 가장 나쁜 결과다.
   ⚠️ 항목은 '제목 한 줄 + 설명 한 줄' 구조를 지킨다. 375px 화면에서 한 줄에 들어가는
      한글은 19자뿐이라(실측), 그보다 길게 쓰면 두 줄로 흘러 위계가 무너진다. */
var SITE_RULES={
  title:"이용 규칙 & 피드백 매너",
  items:[
    {t:"AI 생성물 금지",          d:"AI로 만든 그림은 올릴 수 없어요"},
    {t:"사람 말고 그림을 이야기해요", d:"인신공격·조롱은 바로 삭제돼요"},
    {t:"피드백은 구체적으로",       d:"어디를 어떻게 바꿀지 적어주세요"},
    {t:"도용 금지",               d:"남의 그림 무단 사용·AI 학습 제재"},
    {t:"거래는 당사자끼리",         d:"commi는 거래를 중개하지 않아요"},
    {t:"댓글 달리면 수정 제한",      d:"질문·투표·피드백 글은 신중하게"},
    {t:"처음이라면 인사 한 줄",      d:"수다 게시판에서 환영할게요 🎨"}
  ]
};
/* DB에서 받은 값을 SITE_RULES에 반영. 형태가 어긋나면 기본값을 그대로 둔다
   (관리자가 실수로 빈 목록을 저장해도 화면이 비어버리지 않게). */
function applySiteRules(v){
  if(!v||typeof v!=="object")return;
  if(typeof v.title==="string"&&v.title.trim())SITE_RULES.title=v.title.trim();
  if(Array.isArray(v.items)){
    var ok=v.items.filter(function(x){return x&&typeof x.t==="string"&&x.t.trim();});
    if(ok.length)SITE_RULES.items=ok.map(function(x){return {t:String(x.t),d:String(x.d||"")};});
  }
  renderRulesModal();
}
function renderRulesModal(){
  var m=document.getElementById("rulesModal");if(!m)return;
  var h3=m.querySelector("h3"),ol=m.querySelector("ol");
  if(h3)h3.textContent="📌 "+SITE_RULES.title;
  if(ol)ol.innerHTML=SITE_RULES.items.map(function(x){
    return "<li><b>"+esc(x.t)+"</b>"+(x.d?"<span>"+esc(x.d)+"</span>":"")+"</li>";
  }).join("");
}
function openRules(){renderRulesModal();document.getElementById("rulesModal").classList.add("open");document.body.style.overflow="hidden";}
function closeRules(){document.getElementById("rulesModal").classList.remove("open");document.body.style.overflow="";}

// ===== 팔로우 =====
async function toggleFollow(followeeId,nickname){
  if(!AUTH.user){toast("로그인 후 팔로우할 수 있어요","🔒");loginWithGoogle();return;}
  if(!followeeId||followeeId===AUTH.user.id||!window.supabase)return;
  var following=FOLLOW.has(followeeId);
  if(following){
    var del=await window.supabase.from("follows").delete({count:"exact"}).eq("follower_id",AUTH.user.id).eq("followee_id",followeeId);
    if(!del.error&&del.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
    if(del.error){toast("처리 실패: "+del.error.message);return;}
    FOLLOW.delete(followeeId);
    toast(dispName(nickname)+"님 팔로우를 취소했어요");
  }else{
    var ins=await window.supabase.from("follows").insert({follower_id:AUTH.user.id,followee_id:followeeId});
    if(ins.error){toast("처리 실패: "+ins.error.message);return;}
    FOLLOW.add(followeeId);
    if(nickname)FOLLOW_NAME[followeeId]=nickname;
    toast(dispName(nickname)+"님을 팔로우했어요","✓");
  }
  var btn=document.getElementById("followBtn");
  if(btn){var f=FOLLOW.has(followeeId);btn.classList.toggle("following",f);btn.textContent=f?"팔로잉 ✓":"＋ 팔로우";}
}
// 로그인 시 내 팔로우 목록을 DB에서 불러옴(회원 id 기준 + 표시용 닉)
async function loadMyFollows(){
  FOLLOW=new Set();FOLLOW_NAME={};
  if(!AUTH.user||!window.supabase)return;
  var f=await window.supabase.from("follows").select("followee_id").eq("follower_id",AUTH.user.id);
  if(f.error)return;
  var ids=(f.data||[]).map(function(x){return x.followee_id;});
  ids.forEach(function(id){FOLLOW.add(id);});
  if(ids.length){
    var pr=await window.supabase.from("profiles").select("id,nickname").in("id",ids);
    (pr.data||[]).forEach(function(p){FOLLOW_NAME[p.id]=p.nickname;});
  }
}

// ===== 댓글 상호작용 =====
async function helpful(pid,ci,el){
  var p=POSTS.find(function(x){return x.id===pid});if(!p)return;
  var c=p.comments[ci];
  if(!c.dbId||!window.supabase){toast("이 댓글엔 지원하지 않아요");return;}
  if(!AUTH.user){toast("로그인이 필요해요");loginWithGoogle();return;}
  var b=el.querySelector("b");
  if(c._me){
    var del=await window.supabase.from("comment_helpful").delete({count:"exact"}).eq("comment_id",c.dbId).eq("user_id",AUTH.user.id);
    if(!del.error&&del.count===0){toast("반영되지 않았어요. 새로고침 후 다시 시도해주세요");return;}
    if(del.error){toast("처리 실패: "+del.error.message);return;}
    c.h=Math.max(0,(c.h||1)-1);c._me=false;
    if(c.h<=0&&b)b.remove();else if(b)b.textContent=c.h;
    toast("도움돼요를 취소했어요");return;
  }
  var ins=await window.supabase.from("comment_helpful").insert({comment_id:c.dbId,user_id:AUTH.user.id});
  if(ins.error){toast("처리 실패: "+ins.error.message);return;}
  c.h=(c.h||0)+1;c._me=true;
  if(!b){b=document.createElement("b");b.style.marginLeft="3px";el.appendChild(b);}
  b.textContent=c.h;
  toast("도움돼요를 눌렀어요","👍");
}
function replyTo(name){
  var t=document.getElementById("cmInput");
  if(t){t.value="@"+name+" ";t.focus();t.scrollIntoView({behavior:"smooth",block:"center"});}
}

// notif: close on outside click / Escape
document.addEventListener("click",function(e){
  var p=document.getElementById("notifPanel");
  if(!p||!p.classList.contains("open"))return;
  if(!e.target.isConnected)return;               // 필터 탭 등 재렌더로 분리된 요소 → 무시
  if(e.target.closest(".notif-panel"))return;    // 패널 내부 클릭 → 유지
  if(e.target.closest('[aria-label="알림"]'))return; // 종 아이콘 → toggleNotif가 처리
  closeNotif();
});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeNotif();closeRules();}});
syncNotifBadge();


// Safari 방어: 렌더 누락 시 재시도
(function(){
  function ensureRendered(){
    var m=document.getElementById("main");
    if(m && m.innerHTML.trim().length<50){
      // postsLoaded가 false면 loadRealPosts()가 아직 안 끝난 것 — 여기서 데모 글로 renderList()를 돌리면
      // "더미 글이 잠깐 보였다 실제 글로 바뀌는" 깜빡임이 생김(로그인 리다이렉트 직후 특히 잘 보임).
      // 곧 loadRealPosts()가 끝나면 스스로 renderList()를 부르니, 그때까진 목록만 건너뛰고 기다림.
      if(!postsLoaded&&window.supabase)return;
      try{ renderChips();renderHot();renderTrend();renderList(); }catch(e){}
    }
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",ensureRendered);}
  else{ensureRendered();}
  window.addEventListener("load",ensureRendered);
})();

// ===== 서비스워커 등록 (PWA·웹 푸시 기반) =====
(function(){
  if(!("serviceWorker" in navigator))return;
  function reg(){navigator.serviceWorker.register("/sw.js").catch(function(err){console.error("SW 등록 실패:",err);});}
  // palo.js는 afterInteractive로 로드돼 load 이벤트 뒤에 실행될 수 있으므로, 이미 로드됐으면 즉시 등록
  if(document.readyState==="complete")reg();
  else window.addEventListener("load",reg);
})();

// ===== 모바일 키보드: 텍스트 입력창 포커스 시 하단 탭바 숨김(키보드에 밀려 튀는 것 방지) =====
// 단, 화면 키보드가 뜨는 터치 기기(주 포인터가 coarse)에서만. PC는 물리 키보드라 화면을 안 가리므로
// 좁게 봐도(모바일처럼) 탭바를 숨기지 않음.
/* 하단 탭 — 손을 뗄 때(pointerup) 곧바로 실행한다.
   브라우저는 터치를 클릭으로 바꾸기 전에 "두 번 두드리기(확대)"인지 잠깐 지켜본다.
   그 사이에 다음 탭을 눌러 버리면 지켜보던 클릭이 통째로 사라진다 —
   탭을 연달아 빠르게 누를 때 마지막 것이 씹히던 원인이 이것이다.
   pointerup은 그 판정을 기다리지 않으므로 몇 번을 연달아 눌러도 전부 들어간다.
   (누른 채 손가락을 끌어서 버튼 밖에서 떼면 취소되는 동작은 그대로 유지) */
(function(){
  if(!window.PointerEvent)return;              // 지원 안 하면 기존 클릭 방식 그대로
  function tabAt(e){return e.target&&e.target.closest?e.target.closest(".tabbar .tab"):null;}
  var down=null,ranAt=0,ours=false;
  // 접힌 탭바를 눌러 '펼치기만' 한 직후인지. 그 손짓이 탭 선택으로 이어지면 안 된다.
  document.addEventListener("pointerdown",function(e){
    if(e.button!==0)return;
    var btn=tabAt(e);
    down=btn?{btn:btn,x:e.clientX,y:e.clientY,id:e.pointerId}:null;
  });
  document.addEventListener("pointerup",function(e){
    var d=down;down=null;
    if(!d||e.pointerId!==d.id)return;
    if(Math.abs(e.clientX-d.x)>10||Math.abs(e.clientY-d.y)>10)return; // 끌었으면 누른 걸로 안 봄
    if(tabAt(e)!==d.btn)return;                                       // 다른 탭 위에서 뗐으면 취소
    ranAt=Date.now();
    // 마크업의 onclick을 그대로 실행 — 탭별 동작 정의는 한 곳에만 둔다.
    // click()은 동기라 아래 ours=false가 반드시 처리 후에 실행된다.
    ours=true;
    try{d.btn.click();}finally{ours=false;}
  });
  document.addEventListener("pointercancel",function(){down=null;});
  // 위에서 이미 실행했으니, 브라우저가 뒤늦게 보내오는 클릭은 한 번만 무시(중복 실행 방지).
  // 키보드(엔터·스페이스)로 온 클릭은 pointerup을 거치지 않아 ranAt이 비어 있으므로 그대로 통과한다.
  document.addEventListener("click",function(e){
    if(ours||!ranAt||Date.now()-ranAt>700||!tabAt(e))return;
    ranAt=0;e.stopPropagation();e.preventDefault();
  },true);
})();

(function(){
  /* PC에서 가로로 넘기는 줄(게시판 칩·말머리·이모티콘)을 마우스로 끌어서 스크롤.
     터치는 브라우저가 알아서 해주지만 마우스는 휠 말고는 방법이 없어서,
     "잡아 끌기"가 안 먹는 것처럼 느껴진다. */
  var HSCROLLERS="#chips,.boardtabs,.tagbar,.emo-strip,.emo-tabs,.catbar-inner,.emo-pack-prev";
  var hdrag=null;
  document.addEventListener("pointerdown",function(e){
    if(e.pointerType!=="mouse"||e.button!==0)return;      // 터치·오른쪽 버튼은 그대로 둔다
    if(!e.target||!e.target.closest)return;
    if(e.target.closest("input,textarea,select"))return;  // 글자 선택을 방해하지 않게
    var el=e.target.closest(HSCROLLERS);
    if(!el||el.scrollWidth<=el.clientWidth+2)return;      // 넘칠 내용이 없으면 할 일 없음
    hdrag={el:el,startX:e.clientX,startScroll:el.scrollLeft,moved:0};
  });
  document.addEventListener("pointermove",function(e){
    if(!hdrag)return;
    var dx=e.clientX-hdrag.startX;
    if(Math.abs(dx)<=3)return;                            // 손떨림 정도는 클릭으로 본다
    if(!hdrag.moved)document.body.classList.add("hscroll-drag"); // 끄는 동안 글자 선택 끔
    hdrag.moved=Math.max(hdrag.moved,Math.abs(dx));
    hdrag.el.scrollLeft=hdrag.startScroll-dx;
    e.preventDefault();
  });
  function endHDrag(){
    if(!hdrag)return;
    var moved=hdrag.moved;
    hdrag=null;
    document.body.classList.remove("hscroll-drag");
    if(moved>5){
      // 끌고 나서 손을 뗀 자리의 칩이 눌리지 않게, 바로 뒤따르는 클릭 한 번만 막는다
      var block=function(ev){ev.stopPropagation();ev.preventDefault();};
      document.addEventListener("click",block,{capture:true,once:true});
      setTimeout(function(){document.removeEventListener("click",block,true);},80);
    }
  }
  document.addEventListener("pointerup",endHDrag);
  document.addEventListener("pointercancel",endHDrag);
  window.addEventListener("blur",endHDrag);

  function isTextInput(el){return el&&(el.tagName==="INPUT"||el.tagName==="TEXTAREA"||el.isContentEditable);}
  function touchKeyboard(){return !!(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches);}
  document.addEventListener("focusin",function(e){if(isTextInput(e.target)&&touchKeyboard())document.body.classList.add("kb-open");});
  document.addEventListener("focusout",function(e){
    if(!isTextInput(e.target))return;
    document.body.classList.remove("kb-open");
    /* iOS 홈 화면 앱(standalone): 키보드가 닫혀도 화면이 밀린 채(visualViewport.offsetTop>0)로
       남는 경우가 있다 — 사파리는 스스로 되돌리지만 홈 화면 앱은 안 되돌려서, 고정된 하단
       탭바가 뜬 채 스크롤을 따라다닌다(2026-08-15 사용자 신고). 키보드 애니메이션이 끝난 뒤
       밀림이 남아 있으면 제자리 스크롤로 강제 재정착시킨다(밀림이 없으면 아무 일도 안 함). */
    setTimeout(function(){
      var vv=window.visualViewport;
      if(vv&&(vv.offsetTop||0)>0&&!isTextInput(document.activeElement)){
        window.scrollTo(window.scrollX||0,window.scrollY||0);
      }
    },250);
  });
  // 포커스된 입력칸이 화면 교체로 **사라지면 focusout이 오지 않는** 브라우저가 있다.
  // 그러면 하단 탭이 숨은 채 남는다 → 화면이 바뀔 때 실제 포커스를 보고 맞춘다.
  window.syncKbOpen=function(){
    var a=document.activeElement;
    if(!(a&&isTextInput(a)&&touchKeyboard()))document.body.classList.remove("kb-open");
  };
})();

// ===== 피드 pull-to-refresh: 목록 최상단에서 아래로 당기면 새로고침 =====
// iOS 자체 고무줄(rubber-band) 스크롤이 '당기는 움직임'을 담당하므로 콘텐츠(#main)는 직접 안 옮김
// (안 그러면 네이티브 바운스 + 내 이동이 겹쳐 이중으로 움직여 부자연스러움). 당김 정도에 반응하는
// 스피너만 보여주고, 당기는 동안은 transition을 꺼서 손가락을 즉시 따라오게 함.
(function(){
  var startY=0, dist=0, active=false, refreshing=false, THRESH=72;
  // 목록 화면인지 판단 — 게시판 탭(.boardtabs)이 있으면 피드(상단 제목 .board-head는 이제 안 씀)
  function onFeed(){var m=document.getElementById("main");return !!(m&&m.querySelector(".boardtabs")&&!m.querySelector(".detail,.cm-root,.profile"));}
  function ind(){var el=document.getElementById("ptrSpin");if(!el){el=document.createElement("div");el.id="ptrSpin";el.className="ptr";el.innerHTML='<div class="ptr-spin"></div>';document.body.appendChild(el);}return el;}
  document.addEventListener("touchstart",function(e){
    if(refreshing||window.scrollY>4||!onFeed())return;
    startY=e.touches[0].clientY; active=true; dist=0;
  },{passive:true});
  document.addEventListener("touchmove",function(e){
    if(!active)return;
    dist=e.touches[0].clientY-startY;
    var el=ind(), sp=el.querySelector(".ptr-spin");
    if(dist<=0){el.style.transition="";el.style.opacity="0";el.style.transform="translateY(0)";if(sp){sp.style.transition="";sp.style.transform="";}return;}
    el.style.transition="none"; // 당기는 동안 지연 없이 손가락 따라오게
    el.style.opacity=String(Math.min(1,dist/THRESH));
    el.style.transform="translateY("+Math.min(dist*0.4,48)+"px)";
    el.classList.toggle("ready",dist>THRESH);
    // 당긴(그리고 다시 올린) 정도에 비례해 스피너 회전 — 손가락을 즉시 따라 돌고, 올리면 되돌아감
    if(sp){sp.style.transition="none";sp.style.transform="rotate("+(dist*2)+"deg)";}
  },{passive:true});
  document.addEventListener("touchend",function(){
    if(!active)return; active=false;
    var el=ind(), sp=el.querySelector(".ptr-spin");
    el.style.transition="opacity .22s,transform .22s"; // 놓는 순간부터는 부드럽게
    if(dist>THRESH){
      refreshing=true;
      el.classList.remove("ready");
      if(sp){sp.style.transition="";sp.style.transform="";} // 인라인 회전 제거 → CSS 연속 스핀 애니메이션이 이어받음
      el.classList.add("spinning");
      el.style.opacity="1"; el.style.transform="translateY(34px)";
      Promise.resolve(typeof refreshFeed==="function"?refreshFeed(true):null).then(function(){
        setTimeout(function(){el.classList.remove("spinning");el.style.opacity="0";el.style.transform="translateY(0)";refreshing=false;},450);
      });
    }else{
      el.classList.remove("ready"); el.style.opacity="0"; el.style.transform="translateY(0)";
      if(sp){sp.style.transition="transform .22s";sp.style.transform="rotate(0deg)";} // 임계값 미만이면 부드럽게 원위치
    }
    dist=0;
  });
})();


// ===== 스와이프/드래그로 닫기 =====
(function(){
  // 1) 바텀시트: 아래로 스와이프하면 닫기
  var sheet=document.getElementById("sheet");
  if(sheet){
    var sy=0,cur=0,drag=false;
    sheet.addEventListener("touchstart",function(e){
      // 스크롤이 최상단일 때만 드래그 시작
      if(sheet.scrollTop>0)return;
      sy=e.touches[0].clientY;drag=true;sheet.classList.add("dragging");
    },{passive:true});
    sheet.addEventListener("touchmove",function(e){
      if(!drag)return;
      cur=e.touches[0].clientY-sy;
      if(cur<0)cur=0;
      sheet.style.transform="translateY("+cur+"px)";
    },{passive:true});
    sheet.addEventListener("touchend",function(){
      if(!drag)return;drag=false;sheet.classList.remove("dragging");
      sheet.style.transform="";
      if(cur>110){ if(typeof closeSheet==="function")closeSheet(); }
      cur=0;
    });
  }

  // 2) 상세글: 최상단에서 아래로 당기면 목록으로 (당김 제스처)
  var pullStartY=0, pulling=false, pullDist=0;
  function onMain(){
    document.addEventListener("touchstart",function(e){
      var d=document.querySelector("#main .detail");
      if(!d)return;
      if(window.scrollY>4)return;              // 페이지 최상단일 때만
      pullStartY=e.touches[0].clientY;pulling=true;pullDist=0;
    },{passive:true});
    document.addEventListener("touchmove",function(e){
      if(!pulling)return;
      var d=document.querySelector("#main .detail");if(!d)return;
      pullDist=e.touches[0].clientY-pullStartY;
      if(pullDist>0){
        d.classList.add("dragging");
        d.style.transform="translateY("+Math.min(pullDist*0.5,80)+"px)";
        d.style.opacity=String(Math.max(0.5,1-pullDist/400));
      }
    },{passive:true});
    document.addEventListener("touchend",function(){
      if(!pulling)return;pulling=false;
      var d=document.querySelector("#main .detail");if(!d){return;}
      d.classList.remove("dragging");
      if(pullDist>90){
        d.classList.add("closing");
        setTimeout(function(){ if(typeof renderList==="function")renderList(); },240);
      }else{
        d.style.transform="";d.style.opacity="";
      }
      pullDist=0;
    });
  }
  onMain();
})();

// 재진입 시 즉시 표시: 지난번 피드를 캐시에서 꺼내 바로 그림(빈 스켈레톤 대기 없이).
// 곧이어 initAuth→loadRealPosts가 최신 데이터로 교체함. 딥링크(글·유저)나 이미 다른 화면으로
// 이동한 경우엔 캐시로 홈을 그리지 않음.
// 읽은 글(READ) 표시를 기기에 저장(localStorage) — 새로고침해도 유지. 최근 1000개까지만.
function loadReadCache(){ try{var a=JSON.parse(localStorage.getItem("palo_read")||"[]");if(Array.isArray(a))READ=new Set(a);}catch(e){} }
function saveRead(){ try{var a=Array.from(READ);if(a.length>1000)a=a.slice(a.length-1000);localStorage.setItem("palo_read",JSON.stringify(a));}catch(e){} }
loadReadCache();
(function primeFromCache(){
  if(getPostIdFromPath()||getUserIdFromPath()||getCommissionIdFromPath()||getTabFromPath()
     ||getReviewsCmIdFromPath()||getEmoticonIdFromPath()||isRankingPath()||userLeftHome)return;
  if(!window.__paloHasBackend)return; // 백엔드 없는 로컬 데모는 기존 폴백에 맡김
  var cached=loadFeedCache();
  if(cached&&cached.posts&&cached.posts.length){
    POSTS=cached.posts.concat(POSTS.filter(function(p){return !p.dbId;}));
    // ⚠️ 그리기 **전에** 공지·규칙을 채운다. 뒤에 채우면 배너가 한 박자 늦게 튀어나온다.
    // ⚠️ try 안에 함께 둔다. 여기는 캐시로 첫 화면을 그리는 가장 빠른 경로라,
    //    낡은 캐시 모양 때문에 예외가 나면 목록 자체가 안 그려진다.
    try{
      if(!LATEST_NOTICE&&cached.notice)LATEST_NOTICE=cached.notice;
      if(cached.rules)applySiteRules(cached.rules);
      renderChips();renderHot();renderTrend();renderList();
    }catch(e){}
  }
})();
// palo.js는 이제 하이드레이션 전에 실행된다(위 primeFromCache가 캐시 피드를 즉시 그림).
// window.supabase는 React 모듈이 평가될 때 주입되므로, 준비 신호를 받고 나서 이어간다.
// 이미 와 있으면(스크립트 순서가 뒤바뀐 경우) 곧바로 시작 — 어느 쪽이든 한 번만 돈다.
function _bootBackend(){
  track("view");
  // 딥링크 화면을 먼저 연다 — 그래야 홈이 잠깐 비쳤다 바뀌지 않는다.
  // (routeDeepLinkEarly가 열었으면 userLeftHome=true라, 뒤이은 loadRealPosts는 홈을 그리지 않는다)
  initAuth().then(function(){routeDeepLinkEarly();loadRealPosts();handleNotifSettingsDeeplink();handleLoginError();});
}
if(window.supabase)_bootBackend();
else window.addEventListener("palo-supabase-ready",_bootBackend,{once:true});
// 네이버 로그인 실패 시 서버가 /?login_error=... 로 돌려보냄 → 사유를 토스트로 안내하고 주소 정리
function handleLoginError(){
  var params;try{params=new URLSearchParams(location.search);}catch(e){return;}
  var code=params.get("login_error");
  if(code){
    try{history.replaceState({},"","/");}catch(_){}
    var msg={state:"보안 확인에 실패했어요. 다시 시도해 주세요.",no_email:"네이버 이메일 제공에 동의해야 로그인할 수 있어요.",config:"네이버 로그인이 아직 준비 중이에요. 잠시 후 다시 시도해 주세요.",token:"네이버 인증에 실패했어요. 다시 시도해 주세요.",profile:"네이버 정보를 불러오지 못했어요.",link:"로그인 처리에 실패했어요. 다시 시도해 주세요."}[code]||"네이버 로그인에 실패했어요.";
    toast(msg);
    return;
  }
  // ⚠️ 구글·X처럼 Supabase를 거치는 로그인이 실패하면 Supabase가
  //    주소 뒤에 #error=...&error_description=... 을 붙여 돌려보낸다.
  //    예전엔 이걸 아무도 읽지 않아 **사용자는 아무 안내 없이 첫 화면만 봤다**
  //    (2026-08-09 실사용자 신고 — "없는 계정으로 뜬다"고 추측만 하게 됨).
  var h=location.hash||"";
  if(h.indexOf("error")<0)return;
  var hp;try{hp=new URLSearchParams(h.replace(/^#/,""));}catch(e){return;}
  var code2=hp.get("error")||"";                       // 예: access_denied / server_error
  var desc=hp.get("error_description")||code2;
  if(!desc)return;
  // ⚠️ 즉시 지우기만 하면 부팅 중 다른 코드(SDK 초기화 등)가 해시를 되살리는 경우가 있어(프로덕션 실측)
  //    한 박자 뒤에 한 번 더 지운다 — 남겨 두면 새로고침마다 실패 안내가 또 뜬다.
  var _clean=function(){try{if((location.hash||"").indexOf("error")>-1)history.replaceState({},"",location.pathname+location.search);}catch(_){}};
  try{history.replaceState({},"",location.pathname);}catch(_){}
  setTimeout(_clean,1500);
  console.error("[로그인 실패 상세]",h); // 원문은 콘솔에 남겨 문의 대응에 쓴다
  // ⚠️ 만료된 메일 링크도 error=access_denied 로 오므로(error_code=otp_expired),
  //    '취소' 분기보다 먼저 검사해야 한다 — 안 그러면 만료 안내가 "취소했어요"로 잘못 나간다.
  var codeDetail=hp.get("error_code")||"";
  var friendly=
    /otp_expired/i.test(codeDetail)||/invalid or has expired|One-time token/i.test(desc)
      ?"링크가 만료됐거나 이미 사용됐어요. 메일을 다시 요청해주세요."
    :/Error getting user (profile|email) from external provider/i.test(desc)
      ?"소셜 계정에서 정보를 받아오지 못했어요. 잠시 후 다시 시도해 주세요."
    :/Database error saving new user/i.test(desc)
      ?"가입 처리 중 문제가 생겼어요. 잠시 후 다시 시도해 주세요."
    :/Signups not allowed/i.test(desc)
      ?"지금은 새 가입을 받지 않고 있어요."
    :/access_denied/i.test(code2)||/cancell?ed|denied/i.test(desc)
      ?"로그인을 취소했어요."
    :"로그인에 실패했어요: "+desc;
  toast(friendly,"⚠");
}

// ===== 게시글 이미지 미리보기 (PC 마우스 호버 / 모바일 길게 누르기) =====
var _imgPrevEl=null,_imgPrevTimer=null,_imgPrevActive=false,_imgPrevStart=null,_imgPrevSuppressClick=false;
var _canHover=(function(){try{return window.matchMedia("(hover:hover) and (pointer:fine)").matches;}catch(e){return false;}})();
function _ensureImgPrev(){
  if(_imgPrevEl)return _imgPrevEl;
  _imgPrevEl=document.createElement("div");
  _imgPrevEl.id="imgPreview";
  _imgPrevEl.innerHTML='<img alt="미리보기">';
  document.body.appendChild(_imgPrevEl);
  return _imgPrevEl;
}
// 그 게시글에 이미지가 있으면 첫 이미지 주소 반환(미리보기용). 없으면 null.
function _postImgSrc(post){var img=post&&post.querySelector(".nthumb img");return img?img.src:null;}
// 선택한 게시글의 '왼쪽 아래'에 붙여 배치. 문서 좌표(absolute)라 스크롤하면 그 게시글과 함께 움직임.
function _anchorImgPrev(post){
  var el=_imgPrevEl;if(!el||!post)return;
  var r=post.getBoundingClientRect();
  var sx=window.pageXOffset||document.documentElement.scrollLeft||0;
  var sy=window.pageYOffset||document.documentElement.scrollTop||0;
  el.style.left=Math.round(r.left+sx)+"px";
  el.style.top=Math.round(r.bottom+sy)+"px";
}
function showImgPreview(src,post){
  if(!src)return;
  var el=_ensureImgPrev(),im=el.querySelector("img");
  if(im.getAttribute("src")!==src)im.src=src;
  el.classList.add("show");
  _anchorImgPrev(post);
}
function hideImgPreview(){if(_imgPrevEl)_imgPrevEl.classList.remove("show");_imgPrevActive=false;}
function initImgPreview(){
  var main=document.getElementById("main");if(!main||main._imgPrevInit)return;main._imgPrevInit=true;
  // PC: 호버하면 그 글의 왼쪽 아래에 표시, 글에서 벗어나면 숨김
  if(_canHover){
    main.addEventListener("mouseover",function(e){
      var post=e.target.closest(".post");if(!post)return;
      var src=_postImgSrc(post);if(!src)return;
      showImgPreview(src,post);
    });
    main.addEventListener("mouseout",function(e){
      var post=e.target.closest(".post");
      if(post&&(!e.relatedTarget||!post.contains(e.relatedTarget)))hideImgPreview();
    });
  }
  // 모바일: 손가락을 대면 곧바로 그 글의 왼쪽 아래에 표시. 손을 떼도 계속 남아 있고, 스크롤하면 글과 함께 움직임.
  // 짧게 탭하면 평소처럼 글이 열리고(그때 미리보기 정리), 오래 눌렀다 떼면 글은 안 열리고 미리보기만 남음.
  // 미리보기를 닫으려면 빈 곳(글이 아닌 곳)을 탭하면 됨.
  main.addEventListener("touchstart",function(e){
    var post=e.target.closest(".post");if(!post)return;
    var src=_postImgSrc(post);if(!src)return;
    var t=e.touches[0];_imgPrevStart={x:t.clientX,y:t.clientY,at:Date.now()};
    _imgPrevActive=true;
    showImgPreview(src,post);
  },{passive:true});
  main.addEventListener("touchend",function(e){
    var held=_imgPrevStart?(Date.now()-_imgPrevStart.at):0;
    // 오래 눌렀다 뗀 경우에만 뒤따르는 click(글 열기)을 막음 → 미리보기를 보던 중이므로 글은 열지 않음
    if(_imgPrevActive&&held>=350){_imgPrevSuppressClick=true;setTimeout(function(){_imgPrevSuppressClick=false;},450);}
    _imgPrevStart=null; // 미리보기는 그대로 유지(손을 떼도 안 사라짐)
  });
  main.addEventListener("touchcancel",function(){_imgPrevStart=null;});
  // 길게 눌러 미리보기를 띄운 경우 뒤이어 오는 click(글 열기)은 무시. 그 외의 클릭은 화면이 바뀌므로 미리보기 정리.
  main.addEventListener("click",function(e){
    if(_imgPrevSuppressClick){e.stopPropagation();e.preventDefault();return;}
    hideImgPreview();
  },true);
  // 글이 아닌 빈 곳을 탭/클릭하면 미리보기 닫기
  document.addEventListener("touchstart",function(e){if(!e.target.closest(".post"))hideImgPreview();},{passive:true,capture:true});
  document.addEventListener("click",function(e){if(!e.target.closest(".post"))hideImgPreview();},true);
}
initImgPreview();

