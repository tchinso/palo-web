-- ============================================================================
-- 🐛 비로그인 댓글이 막히던 문제 수정 (2026-08-13)
--
-- 증상: 로그인하지 않은 상태에서 댓글을 달면
--         permission denied for function blocked_me  (SQLSTATE 42501)
--
-- 원인: user-blocks.sql에서 `revoke execute ... from public, anon` 을 했는데,
--       **댓글 INSERT 정책(comments_block_guard)이 바로 그 함수를 호출한다.**
--       RLS 정책 안의 함수도 결국 **질의를 던진 역할(anon)의 권한으로** 실행되므로,
--       anon에게 EXECUTE가 없으면 정책 평가 자체가 실패한다 → 댓글이 안 달린다.
--
-- ⚠️ 그 revoke는 애초에 보안 조치가 아니었다. user-blocks.sql 주석에도
--    "보안 구멍은 아니다 … 정리 차원의 조치다"라고 적어 뒀는데,
--    그 '정리'가 멀쩡한 기능을 끊었다.
--    **RLS 정책이 호출하는 함수는 그 표에 접근하는 모든 역할에게 EXECUTE가 있어야 한다.**
--
-- 안전한가: 그렇다. 두 함수는 auth.uid()를 기준으로만 답한다.
--   익명은 auth.uid()가 null이라 어느 행과도 매칭되지 않아 **항상 false**를 돌려준다.
--   즉 "A가 B를 차단했나?"를 익명이 캐물을 수 없다는 성질은 그대로 유지된다.
-- ============================================================================

grant execute on function public.blocked_me(uuid)    to anon;
grant execute on function public.block_between(uuid) to anon;

-- ── 확인 1: 이번 건 ──
-- 둘 다 true가 나와야 정상.
select has_function_privilege('anon', 'public.blocked_me(uuid)',    'EXECUTE') as blocked_me_anon,
       has_function_privilege('anon', 'public.block_between(uuid)', 'EXECUTE') as block_between_anon;

-- ── 확인 2: 같은 유형의 버그가 더 있는지 전수 점검 ──
-- RLS 정책이 부르는 public 함수 중 anon·authenticated에게 EXECUTE가 없는 것을 모두 찾는다.
-- **결과가 0행이어야 정상.** 행이 나오면 그 표의 그 동작이 해당 역할에게 막혀 있다는 뜻이다.
-- (앞으로 정책이나 권한을 건드린 뒤에는 이 쿼리를 한 번 돌려볼 것)
select p.tablename, p.policyname, p.cmd, f.proname as 함수,
       has_function_privilege('anon',          f.oid, 'EXECUTE') as anon_실행가능,
       has_function_privilege('authenticated', f.oid, 'EXECUTE') as 로그인_실행가능
from pg_policies p
join pg_proc f
  on f.pronamespace = 'public'::regnamespace
 and (coalesce(p.qual, '') || ' ' || coalesce(p.with_check, '')) ~ ('\m' || f.proname || '\M')
where p.schemaname = 'public'
  and not (has_function_privilege('anon',          f.oid, 'EXECUTE')
       and has_function_privilege('authenticated', f.oid, 'EXECUTE'))
order by p.tablename, p.policyname;
