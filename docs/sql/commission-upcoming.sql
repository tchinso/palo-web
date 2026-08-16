-- ============================================================
-- 커미션 상태 3단계: open(접수중) / upcoming(오픈 예정) / close(마감) (2026-08-16)
--
-- 오픈 예정: 목록·검색에 노출되지만 신청은 아직 못 받는 상태.
-- 마감: 지금과 동일 — 목록·검색 어디에도 안 보임(작가는 '내 커미션'에서 관리).
-- ============================================================

-- ── 1. 상태 값 제약 ─────────────────────────────────────────
-- 기존에 status 체크 제약이 있으면(이름을 모르므로 카탈로그에서 찾아) 지우고 새로 건다.
do $$
declare v_name text;
begin
  select conname into v_name
    from pg_constraint
   where conrelid = 'public.commissions'::regclass
     and contype = 'c'
     and pg_get_constraintdef(oid) ilike '%status%';
  if v_name is not null then
    execute format('alter table public.commissions drop constraint %I', v_name);
  end if;
  alter table public.commissions add constraint commissions_status_check
    check (status in ('open','upcoming','close'));
end $$;

-- ── 2. 성인 커미션 가림막 목록도 '오픈 예정' 포함 ───────────
-- (미인증자에게 보이는 가림막 카드 목록 — 마감만 빼고 전부)
create or replace function public.adult_commission_stubs()
returns table(id bigint, created_at timestamptz, bumped_at timestamptz)
language sql
stable
security definer
set search_path = public
as $$
  select c.id, c.created_at, coalesce(c.bumped_at, c.created_at)
    from public.commissions c
   where c.is_adult and c.status <> 'close';
$$;

-- ── 3. 확인 ─────────────────────────────────────────────────
select case when exists (select 1 from pg_constraint
                          where conrelid='public.commissions'::regclass
                            and conname='commissions_status_check'
                            and pg_get_constraintdef(oid) like '%upcoming%')
            then '✅ 상태 3단계 제약 적용됨' else '❌ 제약 없음' end as chk
union all
select case when pg_get_functiondef(to_regprocedure('public.adult_commission_stubs()')) like '%close%'
            then '✅ 성인 가림막에 오픈 예정 포함' else '❌ 함수 갱신 안 됨' end;
