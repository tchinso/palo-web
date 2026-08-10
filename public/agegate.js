/* ===== 19+ 게시판 게이트 (별도 파일 · 필요할 때만 받아온다) =====================
   palo.js에서 떼어낸 이유:
     광고 심사 봇은 응답 HTML만 읽는 게 아니라 링크된 JS까지 훑을 수 있다. 게시판 이름·안내
     문구·본인확인 UI가 palo.js 안에 있으면, 화면에 한 번도 안 뜨는 코드 때문에 사이트 전체가
     성인 업종으로 분류된다(2026-08-10 틱톡 광고 거부 → 초기 HTML에서 뺐고, 이 파일로 한 번 더).
   그래서 이 파일은 **아무도 요청하지 않으면 브라우저가 받아오지 않는다.**
     · 게시판이 켜져 있을 때(ADULT_BOARD_ENABLED=true) — 메뉴를 그리기 전에 palo.js가 부른다
     · 게시판에 들어가려 하거나 본인확인을 마치고 돌아왔을 때 — 그 순간에 부른다

   ⚠️ palo.js보다 **뒤에** 실행된다는 전제로 쓴다(AUTH·toast·supabase 등 전역을 그대로 쓴다).
   ⚠️ 인증 로직은 palo.js에 있던 것을 그대로 옮긴 것이다. 판정은 여기서 하지 않는다 —
      실제 합격 판정은 /api/auth/adult-verify 가 포트원 API로 다시 조회해서 내린다.
      (브라우저가 보낸 값을 믿으면 콘솔에서 한 줄로 우회당한다.)                        */
(function () {
  "use strict";
  if (window.__ageGate) return; // 두 번 실행돼도 안전하게

  var BOARD_ID = "adult";
  var BOARD_NAME = "에치치";
  var BOARD_ICON = '<span class="ic" style="font-size:18px;line-height:1">🔞</span>';

  /* ── 게시판 메타를 palo.js의 표에 끼워 넣는다 ─────────────────────────────
     palo.js에는 이 게시판의 이름·이모지·안내문이 아예 없다. 게시판을 열어 둔 경우에만
     여기서 채워 넣는다(그래서 닫아 두면 palo.js 어디에도 흔적이 없다).
     ⚠️ 메뉴(renderNav)·말머리(CATMAP)·글쓰기 선택(BOARD_EMOJI)·상단 탭(CHIP_EMOJI)이
        각각 다른 표를 보므로 네 곳을 모두 채워야 한다. 하나라도 빠지면 그 화면만 깨진다. */
  function registerBoard() {
    try {
      var etc = null;
      for (var i = 0; i < window.BOARDS.length; i++) {
        if (window.BOARDS[i].group === "기타") { etc = window.BOARDS[i]; break; }
      }
      if (!etc) { etc = { group: "기타", items: [] }; window.BOARDS.push(etc); }
      var already = etc.items.some(function (b) { return b.id === BOARD_ID; });
      if (!already) etc.items.push({ id: BOARD_ID, name: BOARD_NAME, icon: BOARD_ICON });

      window.CATMAP[BOARD_ID] = { label: BOARD_NAME, cls: "help-c" };
      window.BOARD_EMOJI[BOARD_ID] = "🔞";
      window.CHIP_EMOJI[BOARD_ID] = "🔞";
      window.CHIP_GROUP[BOARD_ID] = "g-etc";
      window.BOARD_GUIDE[BOARD_ID] = "성인 대상 게시판이에요. 청소년은 이용할 수 없어요.";
    } catch (e) { /* 표 구조가 바뀌었어도 게이트 자체는 동작해야 한다 */ }
  }

  // ── 포트원(PortOne) V2 + KG이니시스 통합 본인확인 ──
  var PORTONE_STORE_ID = "";   // 관리자 콘솔 → 결제 연동에서 확인 (계약 후 입력)
  var PORTONE_CHANNEL_KEY = ""; // 채널 관리 탭의 KG이니시스 통합 본인확인 채널 키
  var READY = !!(PORTONE_STORE_ID && PORTONE_CHANNEL_KEY);

  var el = null;
  function hint(t) { var h = document.getElementById("adultHint"); if (h) h.textContent = t || ""; }
  function busy(on, label) {
    var b = document.getElementById("adultStartBtn"); if (!b) return;
    b.disabled = !!on; b.textContent = on ? (label || "확인 중…") : "본인인증 하기";
  }

  /* 모달은 열릴 때 만들어 붙인다.
     ⚠️ `.rules-scrim`은 display:none ↔ flex라 전환 애니메이션이 없다. 그래서 붙이자마자
        바로 .open을 줘도 된다(트랜지션이 있었다면 리플로우를 한 번 강제해야 한다). */
  function ensure() {
    if (el && document.body.contains(el)) return el;
    var m = document.createElement("div");
    m.className = "rules-scrim";
    m.id = "adultModal";
    m.addEventListener("click", function (e) { if (e.target === m) close(); });
    m.innerHTML =
      '<div class="rules">' +
        "<h3>🔞 성인 인증이 필요해요</h3>" +
        '<p class="nick-hint" style="margin-bottom:10px">이 게시판은 <b>만 19세 이상</b>만 이용할 수 있어요. 청소년보호법에 따라 본인확인 기관을 통한 연령 확인이 필요합니다.</p>' +
        '<div class="adult-privacy">' +
          '<div class="adult-privacy-t">🔒 이렇게 처리해요</div>' +
          "<ul>" +
            "<li>이름·생년월일·휴대폰번호는 <b>저장하지 않아요</b></li>" +
            "<li>나이 확인에만 사용하고 즉시 폐기해요</li>" +
            "<li>중복 인증 방지용 암호화 값만 남겨요</li>" +
            "<li>인증은 <b>계정당 한 번</b>만 하면 돼요</li>" +
          "</ul>" +
        "</div>" +
        '<p class="login-hint" id="adultHint"></p>' +
        '<button class="r-ok" id="adultStartBtn">본인인증 하기</button>' +
        '<button class="r-no">나중에 할게요</button>' +
      "</div>";
    // onclick 속성 대신 여기서 연결 — 마크업이 문자열로 도는 자리라 속성 이스케이프가 헷갈린다
    m.querySelector("#adultStartBtn").addEventListener("click", function () { start(); });
    m.querySelector(".r-no").addEventListener("click", function () { close(); });
    document.body.appendChild(m);
    el = m;
    return m;
  }

  function open() {
    var m = ensure();
    hint(""); busy(false);
    m.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    if (el) el.classList.remove("open");
    document.body.style.overflow = "";
  }

  // 포트원 브라우저 SDK도 필요할 때만 불러온다
  function loadSdk() {
    if (window.PortOne) return Promise.resolve();
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = "https://cdn.portone.io/v2/browser-sdk.js";
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error("sdk")); };
      document.head.appendChild(s);
    });
  }

  // 인증 결과 id를 서버로 보내 최종 판정을 받는다
  async function submit(verificationId) {
    var sess = await window.supabase.auth.getSession();
    var token = sess.data.session ? sess.data.session.access_token : null;
    if (!token) { hint("로그인이 필요해요."); busy(false); return false; }
    var res = await fetch("/api/auth/adult-verify", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      body: JSON.stringify({ identityVerificationId: verificationId }),
    });
    var j = null; try { j = await res.json(); } catch (e) {}
    if (!res.ok || !j || !j.ok) {
      hint((j && j.message) || "인증에 실패했어요. 잠시 후 다시 시도해주세요.");
      busy(false); return false;
    }
    // 프로필을 다시 읽어 adult_verified를 반영(이 값으로 게시판 접근이 열린다)
    var pr = await window.supabase.from("profiles").select("*").eq("id", window.AUTH.user.id).single();
    if (!pr.error) window.AUTH.profile = pr.data;
    close();
    window.toast("성인 인증이 완료됐어요", "🔞");
    return true;
  }

  async function start() {
    if (!window.AUTH.user) { hint("먼저 로그인해주세요."); return; }
    if (!READY) { hint("본인확인 서비스가 아직 연결되지 않았어요."); return; }
    hint(""); busy(true, "인증창을 여는 중…");
    try {
      await loadSdk();
      var vid = "adult-" + window.AUTH.user.id.slice(0, 8) + "-" + Date.now();
      var r = await window.PortOne.requestIdentityVerification({
        storeId: PORTONE_STORE_ID,
        channelKey: PORTONE_CHANNEL_KEY,
        identityVerificationId: vid,
        redirectUrl: location.origin + "/?adultVerify=1",
      });
      if (r && r.code) { hint(r.message || "인증이 취소됐어요."); busy(false); return; }
      busy(true, "확인 중…");
      await submit(vid);
    } catch (e) {
      hint("인증창을 열지 못했어요. 잠시 후 다시 시도해주세요.");
      busy(false);
    }
  }

  /* 모바일은 인증창이 새 페이지로 열려서, 끝나면 ?adultVerify=1 로 되돌아온다.
     palo.js가 그 표식을 보고 이 파일을 불러온 뒤 이 함수를 호출한다. */
  async function resume(search) {
    var q = new URLSearchParams(search || "");
    var vid = q.get("identityVerificationId");
    try { history.replaceState({}, "", location.pathname); } catch (e) {}
    if (!vid || !window.AUTH.user) return;
    open(); busy(true, "확인 중…");
    var code = q.get("code");
    if (code) { hint(q.get("message") || "인증이 취소됐어요."); busy(false); return; }
    await submit(vid);
  }

  window.__ageGate = { open: open, close: close, resume: resume, registerBoard: registerBoard, ready: READY };
  window.__ageGateLoaded = true;
})();
