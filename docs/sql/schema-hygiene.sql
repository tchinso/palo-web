-- ============================================================================
-- 8회차 점검 후속 — 인덱스 + 보관기간 자동화 (2026-08-14, 권장안 승인분)
--
-- 구성: [1] 자주 쓰는 FK 인덱스 16개
--       [2] 이용분석 일별 집계표(지표 영구 보존) + 180일 원본 삭제
--       [3] adult_verify_log IP 마스킹(기존 행) + 1년 보관
--       [4] rate_events 청소
--       [5] 위 2~4를 매일 새벽에 돌리는 pg_cron 잡
--
-- ⚠️ pg_cron이 꺼져 있으면 [5]에서 오류가 난다.
--    대시보드 → Database → Extensions → pg_cron 켠 뒤 다시 실행하면 된다.
--    ([1]~[4]는 이미 적용된 상태로 남는다 — 전부 if not exists / 멱등)
-- ============================================================================

-- ── [1] 인덱스 ──────────────────────────────────────────────────────────
-- 화면이 매번 필터하는 칼럼 + 부모 삭제 때 전체 스캔을 막아야 하는 칼럼만.
-- (55곳 중 나머지는 저빈도라 일부러 안 만든다 — 인덱스도 쓰기 비용이다)
create index if not exists idx_comments_post          on public.comments(post_id);
create index if not exists idx_comments_parent        on public.comments(parent_id);
create index if not exists idx_messages_conversation  on public.messages(conversation_id);
-- 알림함은 user_id로 거르고 created_at 내림차순으로 50개 — 복합으로 한 번에
create index if not exists idx_notifications_user_time on public.notifications(user_id, created_at desc);
create index if not exists idx_likes_post             on public.likes(post_id);
create index if not exists idx_post_images_post       on public.post_images(post_id);
create index if not exists idx_follows_followee       on public.follows(followee_id);
create index if not exists idx_commissions_author     on public.commissions(author_id);
create index if not exists idx_commission_images_cm   on public.commission_images(commission_id);
-- 채팅 목록의 .or(user1.eq, user2.eq) — 부분 인덱스(conversations_guest_owner)는
-- guest_code 조건이 붙어 있어 일반 조회에 못 쓰인다(8회차에서 확인). 정규 인덱스로.
create index if not exists idx_conversations_user1    on public.conversations(user1_id);
create index if not exists idx_conversations_user2    on public.conversations(user2_id);
create index if not exists idx_polls_post             on public.polls(post_id);
create index if not exists idx_poll_options_poll      on public.poll_options(poll_id);
create index if not exists idx_score_log_user         on public.score_log(user_id);
create index if not exists idx_cm_applications_cm     on public.commission_applications(commission_id);
create index if not exists idx_cm_applications_user   on public.commission_applications(applicant_id);

-- ── [2] 이용분석 일별 집계표 ────────────────────────────────────────────
-- 방침이 "이용 분석 기록 180일 보관 후 파기"를 약속했다. 원본(mkt_events)은
-- 지우되, 캠페인 성과 비교가 영영 가능하도록 **개인정보 없는 숫자만** 남긴다.
-- (visitor_id·user_id를 버리므로 개인정보가 아니고 방침의 파기 대상도 아니다)
create table if not exists public.mkt_daily (
  day           date not null,
  campaign_code text not null default '',   -- ''=자연 유입(직접·검색)
  name          text not null,              -- view / click / signup …
  cnt           int  not null default 0,    -- 이벤트 수
  visitors      int  not null default 0,    -- 그날 고유 방문자 수
  primary key (day, campaign_code, name)
);
alter table public.mkt_daily enable row level security;
drop policy if exists mkt_daily_admin on public.mkt_daily;
create policy mkt_daily_admin on public.mkt_daily
  for select using (public.is_admin());   -- 조회는 관리자만, 쓰기는 아래 함수(정의자)만

-- ── [2·3·4] 매일 도는 정리 함수 ─────────────────────────────────────────
create or replace function public.run_daily_retention()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  -- (a) 180일 지난 이용분석을 집계표에 합산한 뒤 삭제
  --     ⚠️ 순서: 합산 → 삭제. 반대로 하면 숫자를 잃는다.
  insert into public.mkt_daily (day, campaign_code, name, cnt, visitors)
  select created_at::date, coalesce(campaign_code,''), name,
         count(*), count(distinct visitor_id)
    from public.mkt_events
   where created_at < now() - interval '180 days'
   group by 1,2,3
  on conflict (day, campaign_code, name) do update
    set cnt = mkt_daily.cnt + excluded.cnt,
        visitors = greatest(mkt_daily.visitors, excluded.visitors);
  delete from public.mkt_events where created_at < now() - interval '180 days';

  -- (b) 본인확인 시도 로그 1년 보관
  --     행을 즉시 지우지 않는 이유(권장안): verification_id 유니크가 인증 재사용을 막는
  --     열쇠라, 일찍 지우면 가로챈 인증번호를 재사용할 창이 열린다. 1년이면 충분히 만료.
  delete from public.adult_verify_log where created_at < now() - interval '1 year';

  -- (c) 도배 방지 기록 — 자가청소는 "같은 사용자가 다시 올 때"만 돌아서
  --     안 돌아온 사용자의 행이 영구히 남았다(8회차 실측: 열흘 전 행 잔존). 하루치만 유지.
  delete from public.rate_events where at < now() - interval '1 day';
end $$;

revoke all on function public.run_daily_retention() from public, anon, authenticated;

-- ── [3] 기존 행 IP 마스킹 (한 번만 실행되면 됨) ─────────────────────────
-- 방침에 없는 원본 IP가 무기한 저장되고 있었다(7회차). 초대 가입과 같은 기준(앞 3자리)으로.
-- 인증 재시도 남용 감별에는 앞 3자리면 충분하고, 일일 제한은 user_id 기준이라 무관.
update public.adult_verify_log
   set ip = split_part(ip,'.',1)||'.'||split_part(ip,'.',2)||'.'||split_part(ip,'.',3)
 where ip is not null and ip like '%.%.%.%'
   and ip <> split_part(ip,'.',1)||'.'||split_part(ip,'.',2)||'.'||split_part(ip,'.',3);

-- ── [5] 매일 새벽 3:20(한국시간)에 실행 ─────────────────────────────────
create extension if not exists pg_cron;
select cron.schedule('daily-retention', '20 18 * * *',
                     $$select public.run_daily_retention()$$);

-- ── 확인 (전부 ✅ 여야 함) ───────────────────────────────────────────────
select '인덱스 16개' as 항목,
       case when (select count(*) from pg_indexes
                  where schemaname='public' and indexname like 'idx\_%') >= 16
            then '✅' else '❌' end as 상태
union all
select '집계표 mkt_daily',
       case when to_regclass('public.mkt_daily') is not null then '✅' else '❌' end
union all
select '정리 함수',
       case when to_regprocedure('public.run_daily_retention()') is not null then '✅' else '❌' end
union all
select '본인확인 로그 IP 마스킹(점이 3개 남은 행 0)',
       case when not exists(select 1 from public.adult_verify_log
                            where ip like '%.%.%.%') then '✅' else '❌' end
union all
select '매일 잡 등록',
       case when exists(select 1 from cron.job where jobname='daily-retention')
            then '✅' else '❌ pg_cron 확인' end;

-- 손으로 한 번 돌려보고 싶으면(안전):  select public.run_daily_retention();
