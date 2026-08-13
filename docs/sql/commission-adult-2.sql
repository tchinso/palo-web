-- ============================================================================
-- 성인 커미션 2단계 — 미인증자에게 '가려진 카드'만 보여주기 (2026-08-13)
--
-- 1단계(commission-adult.sql)는 성인 커미션을 **통째로** 숨겼다. 그런데 요구가 바뀌었다:
--   미인증자에게도 "여기 성인 커미션이 있다"는 것은 보여주고, 누르면 인증을 안내한다.
--
-- ⚠️ 그렇다고 행을 그냥 열어 주면 안 된다. CSS로 흐리게 하는 건 **보호가 아니다** —
--    개발자도구를 열면 제목·설명·이미지 주소가 그대로 보인다. 청소년유해매체물은
--    '가려 보이게' 하는 게 아니라 **실제로 못 받게** 해야 한다.
-- 그래서 내용은 계속 막고, **내용이 없는 껍데기(id·시각)만** 돌려주는 함수를 따로 둔다.
--
-- ⚠️ 이 파일은 1단계 정책도 다시 만든다(idempotent). 1단계가 일부만 실행돼
--    차단이 안 걸린 상태였다 — 이 파일 하나만 끝까지 실행하면 정상이 된다.
-- ============================================================================

-- ── 0. 칼럼(1단계에서 이미 만들었으면 그대로) ──────────────
alter table public.commissions
  add column if not exists is_adult boolean not null default false;

create index if not exists commissions_is_adult_idx
  on public.commissions (is_adult) where is_adult;

-- ── 1. 판정 함수 ───────────────────────────────────────────
-- commission_images 정책이 "이 커미션이 성인인가"를 물어야 하는데, commissions에도 RLS가
-- 걸려 있어 일반 서브쿼리로는 미인증자에게 '성인 아님'으로 잘못 답한다(행이 안 보이므로).
create or replace function public.commission_is_adult(p_id bigint)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select is_adult from public.commissions where id = p_id), false);
$$;

-- ⚠️ RLS 정책이 부르는 함수는 **그 표를 만지는 모든 역할**에게 EXECUTE가 있어야 한다.
--    빠뜨리면 정책 평가가 permission denied로 실패해 기능이 통째로 막힌다.
grant execute on function public.commission_is_adult(bigint) to anon, authenticated;

-- ── 2. 껍데기 목록 ─────────────────────────────────────────
-- 미인증자에게 '가려진 카드'를 몇 장, 어떤 순서로 그릴지 알려 주는 최소 정보.
-- ⚠️ 제목·설명·이미지·작가는 **일부러 돌려주지 않는다.** 여기서 새는 순간
--    아무리 흐리게 그려도 소용이 없다. 돌려주는 건 id와 시각뿐이다.
create or replace function public.adult_commission_stubs()
returns table(id bigint, created_at timestamptz, bumped_at timestamptz)
language sql
stable
security definer
set search_path = public
as $$
  select c.id, c.created_at, coalesce(c.bumped_at, c.created_at)
    from public.commissions c
   where c.is_adult and c.status = 'open';
$$;
grant execute on function public.adult_commission_stubs() to anon, authenticated;

-- ── 3. 읽기 제한 (내용은 계속 막는다) ──────────────────────
-- ⚠️ restrictive 여야 한다. permissive면 기존 정책과 OR로 합쳐져 접근이 **오히려 넓어진다.**
drop policy if exists commissions_adult_read on public.commissions;
create policy commissions_adult_read on public.commissions
  as restrictive for select
  using (
    not is_adult
    or public.is_adult_verified()
    or author_id = auth.uid()          -- 본인 것은 인증이 만료돼도 관리할 수 있어야 한다
  );

drop policy if exists commission_images_adult_read on public.commission_images;
create policy commission_images_adult_read on public.commission_images
  as restrictive for select
  using (
    not public.commission_is_adult(commission_id)
    or public.is_adult_verified()
  );

-- ── 4. 쓰기 제한 ───────────────────────────────────────────
-- 성인으로 **표시하려면** 본인도 연령 확인을 마쳐야 한다.
drop policy if exists commissions_adult_insert on public.commissions;
create policy commissions_adult_insert on public.commissions
  as restrictive for insert
  with check (not is_adult or public.is_adult_verified());

drop policy if exists commissions_adult_update on public.commissions;
create policy commissions_adult_update on public.commissions
  as restrictive for update
  with check (not is_adult or public.is_adult_verified());

-- ============================================================================
-- 확인 — 아래 3개를 실행해 결과를 그대로 확인할 것
-- ============================================================================

-- ① 정책 4줄이 모두 RESTRICTIVE 여야 한다
select tablename, policyname, permissive, cmd
  from pg_policies
 where policyname in ('commissions_adult_read','commissions_adult_insert',
                      'commissions_adult_update','commission_images_adult_read')
 order by tablename, policyname;

-- ② 함수 3개가 anon·authenticated 모두 실행 가능해야 한다 (전부 true)
select 'commission_is_adult' as fn,
       has_function_privilege('anon','public.commission_is_adult(bigint)','EXECUTE') as anon_ok,
       has_function_privilege('authenticated','public.commission_is_adult(bigint)','EXECUTE') as auth_ok
union all
select 'adult_commission_stubs',
       has_function_privilege('anon','public.adult_commission_stubs()','EXECUTE'),
       has_function_privilege('authenticated','public.adult_commission_stubs()','EXECUTE')
union all
select 'is_adult_verified',
       has_function_privilege('anon','public.is_adult_verified()','EXECUTE'),
       has_function_privilege('authenticated','public.is_adult_verified()','EXECUTE');

-- ③ 이 유형의 버그가 더 없는지 전수 점검 — **0행이어야 정상**
--    (RLS 정책이 부르는 함수 중 권한이 빠진 것을 모두 찾는다)
select p.tablename, p.policyname, f.proname as fn,
       has_function_privilege('anon', f.oid, 'EXECUTE') as anon_ok,
       has_function_privilege('authenticated', f.oid, 'EXECUTE') as auth_ok
  from pg_policies p
  join pg_proc f
    on f.pronamespace = 'public'::regnamespace
   and (coalesce(p.qual,'') || ' ' || coalesce(p.with_check,'')) ~ ('\m' || f.proname || '\M')
 where p.schemaname = 'public'
   and not (has_function_privilege('anon', f.oid, 'EXECUTE')
        and has_function_privilege('authenticated', f.oid, 'EXECUTE'))
 order by p.tablename, p.policyname;
