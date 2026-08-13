-- ============================================================================
-- 성인 커미션 표시 (2026-08-13)
--
-- 커미션을 등록할 때 "성인(19+) 커미션"으로 표시할 수 있게 한다.
--
-- ⚠️ 표시만으로 끝내면 안 된다. 화면에서만 가리면 주소를 알거나 개발자도구를 열면
--    그대로 보이므로, 청소년 보호 관점에서 아무것도 막지 못한 것이 된다.
--    성인 게시판과 **같은 방식**으로 RLS에서 막는다 — 연령 확인(is_adult_verified)을
--    통과한 사람만 성인 커미션의 행을 받아 갈 수 있다.
--
-- ⚠️ is_adult_verified()는 1년 유효기간까지 본다(adult-verification-3.sql).
--    커미션도 그 판정을 그대로 쓰므로 기준이 두 곳으로 갈라지지 않는다.
-- ============================================================================

alter table public.commissions
  add column if not exists is_adult boolean not null default false;

-- 목록·검색에서 성인 커미션만 빠르게 걸러내기 위한 부분 인덱스
create index if not exists commissions_is_adult_idx
  on public.commissions (is_adult) where is_adult;

-- 이미지 정책에서 "이 커미션이 성인인가"를 물어야 하는데, commissions에도 RLS가 걸려 있어
-- 일반 서브쿼리로는 미인증자에게 "성인 아님"으로 잘못 답한다(행이 안 보이므로).
-- 그래서 security definer로 우회한다. 인자로 받은 커미션 한 건의 표시만 답하므로
-- 이 함수로 알아낼 수 있는 것은 "그 커미션이 성인인지"뿐이다.
create or replace function public.commission_is_adult(p_id bigint)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select is_adult from public.commissions where id = p_id), false);
$$;

-- ⚠️ RLS 정책이 부르는 함수는 **그 표에 접근하는 모든 역할**에게 EXECUTE가 있어야 한다.
--    빠뜨리면 정책 평가가 permission denied로 실패해 기능이 통째로 막힌다
--    (2026-08-13 비로그인 댓글이 그렇게 막혔다 — user-blocks-fix-anon.sql 참고).
grant execute on function public.commission_is_adult(bigint) to anon, authenticated;

-- ── 읽기 제한 ─────────────────────────────────────────────
-- ⚠️ restrictive 여야 한다. permissive면 기존 정책과 OR로 합쳐져 접근이 오히려 넓어진다.
-- ⚠️ 본인 것은 항상 보인다 — 인증이 만료돼도 자기 커미션은 관리할 수 있어야 한다.
drop policy if exists commissions_adult_read on public.commissions;
create policy commissions_adult_read on public.commissions
  as restrictive for select
  using (
    not is_adult
    or public.is_adult_verified()
    or author_id = auth.uid()
  );

drop policy if exists commission_images_adult_read on public.commission_images;
create policy commission_images_adult_read on public.commission_images
  as restrictive for select
  using (
    not public.commission_is_adult(commission_id)
    or public.is_adult_verified()
  );

-- ── 쓰기 제한 ─────────────────────────────────────────────
-- 성인 커미션으로 **표시하려면** 본인도 연령 확인을 마쳐야 한다.
-- (미성년자가 성인 커미션을 열어 두는 것을 막는다)
drop policy if exists commissions_adult_insert on public.commissions;
create policy commissions_adult_insert on public.commissions
  as restrictive for insert
  with check (not is_adult or public.is_adult_verified());

drop policy if exists commissions_adult_update on public.commissions;
create policy commissions_adult_update on public.commissions
  as restrictive for update
  with check (not is_adult or public.is_adult_verified());

-- ── 확인 ──
-- 1) 칼럼
-- select column_name, data_type, column_default from information_schema.columns
--  where table_name='commissions' and column_name='is_adult';
-- 2) 정책 (4줄 모두 RESTRICTIVE 여야 한다)
-- select tablename, policyname, permissive, cmd from pg_policies
--  where policyname like '%adult%' and tablename in ('commissions','commission_images')
--  order by tablename, policyname;
-- 3) 함수 실행 권한 (둘 다 true)
-- select has_function_privilege('anon','public.commission_is_adult(bigint)','EXECUTE') as anon_ok,
--        has_function_privilege('authenticated','public.commission_is_adult(bigint)','EXECUTE') as auth_ok;
