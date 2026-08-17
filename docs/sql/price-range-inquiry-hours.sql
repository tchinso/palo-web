-- ============================================================
-- 커미션 가격 범위 + 프로필 문의 가능 시간 (2026-08-16)
-- ============================================================

-- ── 1. 커미션 최대 가격(선택) ───────────────────────────────
-- 기존 price(최소)는 그대로. price_max가 비면 예전처럼 "19,000원~"로 표시된다.
alter table public.commissions add column if not exists price_max text;

-- ── 2. 프로필 문의 가능 시간(선택, 40자) ────────────────────
alter table public.profiles add column if not exists inquiry_hours text;
do $$ begin
  alter table public.profiles add constraint profiles_inquiry_hours_len
    check (inquiry_hours is null or char_length(inquiry_hours) <= 40);
exception when duplicate_object then null; end $$;

-- ── 3. 확인 ─────────────────────────────────────────────────
select case when exists (select 1 from information_schema.columns
                          where table_schema='public' and table_name='commissions' and column_name='price_max')
            then '✅ price_max 칼럼 있음' else '❌ 칼럼 없음' end as chk
union all
select case when exists (select 1 from information_schema.columns
                          where table_schema='public' and table_name='profiles' and column_name='inquiry_hours')
            then '✅ inquiry_hours 칼럼 있음' else '❌ 칼럼 없음' end;
