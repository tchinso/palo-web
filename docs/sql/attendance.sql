-- ============================================================
-- 출석체크 (2026-08-15)
--
-- 하루에 한 번 출석하면 활동 포인트 +20, 광고 포인트 +20.
--
-- ⚠️ 설계에서 가장 중요한 점 두 가지
--  ① **포인트는 클라이언트가 못 만든다.** attendance 테이블에는 insert 정책을
--     아예 두지 않고, 오직 아래 security definer RPC 만 기록한다. 예전에
--     award_score 를 누구나 호출할 수 있어 포인트를 무한 지급할 수 있던 사고가
--     있었으므로, "지급 함수"가 아니라 "출석 함수"만 열어 준다.
--  ② **하루 두 번은 DB가 막는다.** (user_id, day) 기본키 + on conflict do nothing.
--     함수 안에서 "오늘 출석했나?"를 먼저 조회하고 나중에 insert 하는 방식은
--     동시에 두 번 누르면 둘 다 통과할 수 있다(경쟁 조건). 삽입이 실제로
--     일어났는지(returning)로 판단해야 중복 지급이 원천적으로 불가능하다.
--
-- 하루의 경계는 한국 시간(Asia/Seoul) 기준. UTC 기준으로 하면 한국에서
-- 오전 9시에 날짜가 바뀌어 "어제 저녁에 했는데 또 되네" 같은 일이 생긴다.
-- ============================================================

-- ── 1. 표 ───────────────────────────────────────────────────
create table if not exists public.attendance (
  user_id        uuid    not null references auth.users(id) on delete cascade,
  day            date    not null,                 -- 한국 시간 기준 날짜
  score_awarded  integer not null default 0,
  points_awarded integer not null default 0,
  created_at     timestamptz not null default now(),
  primary key (user_id, day)
);

-- 달력은 "특정 사용자의 특정 달"을 읽는다 → 기본키(user_id, day)가 그대로 쓰인다.
-- 별도 인덱스는 필요 없다(기본키가 이미 (user_id, day) 순서라 범위 조회에 그대로 먹는다).

alter table public.attendance enable row level security;

-- 본인 것만 조회. insert/update/delete 정책은 **일부러 없다** → RPC 외에는 못 쓴다.
drop policy if exists attendance_select_own on public.attendance;
create policy attendance_select_own on public.attendance
  for select to authenticated
  using (user_id = auth.uid());

grant select on public.attendance to authenticated;


-- ── 2. 출석 RPC ─────────────────────────────────────────────
-- 반환: jsonb
--   {ok:true,  already:false, day, score, points, streak, total}  ← 방금 출석함
--   {ok:true,  already:true,  day, streak, total}                 ← 이미 오늘 했음
--   {ok:false, reason:'not_authenticated'|'banned'}
create or replace function public.check_in_today()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid    uuid := auth.uid();
  v_today  date;
  v_ins    integer;
  v_score  integer := 20;   -- 활동 포인트
  v_points integer := 20;   -- 광고 포인트
  v_streak integer := 0;
  v_total  integer := 0;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false, 'reason', 'not_authenticated');
  end if;
  if exists (select 1 from public.profiles where id = v_uid and is_banned) then
    return jsonb_build_object('ok', false, 'reason', 'banned');
  end if;

  v_today := (now() at time zone 'Asia/Seoul')::date;

  -- 삽입이 실제로 됐을 때만 v_ins 에 값이 들어온다(이미 있으면 null).
  insert into public.attendance (user_id, day, score_awarded, points_awarded)
  values (v_uid, v_today, v_score, v_points)
  on conflict (user_id, day) do nothing
  returning 1 into v_ins;

  if v_ins is not null then
    -- ⚠️ 점수·포인트 컬럼은 guard_profile_score_columns() 트리거로 잠겨 있다.
    --    신뢰 신호를 먼저 켜지 않으면 update 가 **조용히 되돌려진다**(에러도 안 난다).
    perform set_config('app.trusted_score_update', 'true', true);
    update public.profiles
       set score     = coalesce(score, 0)     + v_score,
           ad_points = coalesce(ad_points, 0) + v_points
     where id = v_uid;

    -- 등급 갱신. recalc_level() 이 없는 환경도 있으므로 등급표로 직접 계산하는 길을 남긴다.
    begin
      perform public.recalc_level(v_uid);
    exception when undefined_function then
      update public.profiles p
         set level = coalesce((select max(l.level) from public.level_thresholds l
                                where l.min_score <= coalesce(p.score, 0)), 1)
       where p.id = v_uid;
    end;

    -- 포인트 내역(내 정보 → 포인트)에 남긴다. 이 표는 트리거만 쓰도록 되어 있어
    -- 컬럼 구성이 달라질 수 있으므로, 실패해도 출석 자체는 막지 않는다.
    begin
      insert into public.score_log (user_id, amount, event, source_table, source_id)
      values (v_uid, v_score, 'attendance', 'attendance', null);
    exception when others then null;
    end;
  end if;

  -- 연속 출석일 — 오늘부터 거꾸로 하루도 안 빠진 날 수.
  -- 날짜가 연속이면 (day + 역순 순번)이 항상 같은 값(오늘+1)이 된다.
  select count(*) into v_streak
    from (select day + (row_number() over (order by day desc))::int as g
            from public.attendance
           where user_id = v_uid and day <= v_today) t
   where t.g = v_today + 1;

  select count(*) into v_total from public.attendance where user_id = v_uid;

  return jsonb_build_object(
    'ok', true,
    'already', (v_ins is null),
    'day', v_today,
    'score', case when v_ins is null then 0 else v_score end,
    'points', case when v_ins is null then 0 else v_points end,
    'streak', v_streak,
    'total', v_total
  );
end $$;

revoke all on function public.check_in_today() from public;
grant execute on function public.check_in_today() to authenticated;


-- ── 3. 확인 ─────────────────────────────────────────────────
-- 아래를 실행하면 ✅ 3줄이 나와야 한다.
select case when to_regclass('public.attendance') is not null
            then '✅ attendance 표 생성됨' else '❌ 표 없음' end as chk
union all
select case when exists (select 1 from pg_policies
                          where schemaname='public' and tablename='attendance')
            then '✅ RLS 정책 있음(조회 전용)' else '❌ 정책 없음' end
union all
select case when to_regprocedure('public.check_in_today()') is not null
            then '✅ check_in_today() 생성됨' else '❌ 함수 없음' end;
