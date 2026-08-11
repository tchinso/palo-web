-- ============================================================================
-- 공지(notices)에 UPDATE 정책을 추가한다.
--
-- 왜 필요한가:
--   notices에는 insert/delete 정책만 있었다(notices_insert_admin / notices_delete_admin).
--   관리자 페이지에 '수정' 기능을 넣었더니, RLS가 UPDATE를 막아 **오류 없이 0행이 처리**되고
--   화면에는 저장됐다고 뜨는 상태가 됐다(2026-08-11).
--   RLS에 걸린 UPDATE는 예외가 아니라 '해당 행 없음'으로 조용히 지나간다 — 그래서 눈치채기 어렵다.
--
-- ⚠️ using과 with check를 모두 걸어야 한다.
--    using      = 어떤 행을 수정할 수 있는가
--    with check = 수정한 결과가 어떤 조건을 만족해야 하는가
--    with check가 없으면 관리자가 아닌 값으로 바꿔치기하는 경로가 열린다.
-- ============================================================================

drop policy if exists notices_update_admin on public.notices;
create policy notices_update_admin on public.notices
  for update
  using (public.is_admin())
  with check (public.is_admin());

-- 확인용: 실행 후 이 표에 update 정책이 보여야 한다
-- select policyname, cmd from pg_policies where tablename = 'notices' order by cmd;
