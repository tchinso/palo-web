-- ============================================================
--  실행 여부 점검 — 아무것도 바꾸지 않고 "무엇이 이미 들어가 있는지"만 확인한다.
--  Supabase SQL Editor에 통째로 붙여넣고 실행하면 파일별로 ✅ / ❌ 가 나온다.
--  ❌ 로 나온 파일만 다시 실행하면 된다. (SELECT만 하므로 몇 번을 돌려도 안전하다)
--
--  ⚠️ 함수는 **이름만** 본다(인자 타입까지 맞추면, 타입을 잘못 적었을 때
--     들어가 있는데도 ❌로 나와서 괜히 다시 돌리게 된다).
-- ============================================================

-- 함수가 있는지(이름만)
create or replace function pg_temp.has_fn(p_name text) returns boolean
language sql stable as $$
  select exists(
    select 1 from pg_proc p join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.proname = p_name);
$$;

-- 정책이 있는지
create or replace function pg_temp.has_policy(p_table text, p_policy text) returns boolean
language sql stable as $$
  select exists(
    select 1 from pg_policies
    where schemaname = 'public' and tablename = p_table and policyname = p_policy);
$$;

-- 컬럼이 있는지
create or replace function pg_temp.has_col(p_table text, p_col text) returns boolean
language sql stable as $$
  select exists(
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = p_table and column_name = p_col);
$$;

select 파일,
       case when 있음 then '✅ 실행됨' else '❌ 아직' end as 상태,
       근거
from (values
  ('adult-verification.sql',    pg_temp.has_fn('post_is_adult'),                         '함수 post_is_adult'),
  ('adult-verification-2.sql',  pg_temp.has_col('adult_verify_log','verification_id'),   '칼럼 adult_verify_log.verification_id'),
  ('adult-verification-3.sql',  exists(select 1 from pg_proc p join pg_namespace n on n.oid=p.pronamespace
                                       where n.nspname='public' and p.proname='is_adult_verified'
                                         and p.prosrc like '%365%'),                     '1년 만료(365) 반영 여부'),
  ('commission-adult.sql',      pg_temp.has_fn('commission_is_adult'),                   '함수 commission_is_adult'),
  ('commission-adult-2.sql',    pg_temp.has_fn('adult_commission_stubs'),                '함수 adult_commission_stubs'),
  ('commission-bump.sql',       pg_temp.has_fn('bump_commission'),                       '함수 bump_commission'),
  ('commission-report.sql',     pg_temp.has_col('reports','commission_id'),              '칼럼 reports.commission_id'),
  ('chat-image.sql',            pg_temp.has_col('messages','image_url'),                 '칼럼 messages.image_url'),
  ('user-blocks.sql',           pg_temp.has_fn('blocked_me'),                            '함수 blocked_me'),
  ('user-blocks-fix-anon.sql',  coalesce(has_function_privilege('anon','public.blocked_me()','EXECUTE'), false),
                                                                                         'anon 의 blocked_me 실행권한'),
  ('user-notes.sql',            to_regclass('public.user_notes') is not null,            '표 user_notes'),
  ('post-bookmarks.sql',        to_regclass('public.post_bookmarks') is not null,        '표 post_bookmarks'),
  ('site-rules.sql',            to_regclass('public.site_settings') is not null,         '표 site_settings'),
  ('notices-update.sql',        pg_temp.has_policy('notices','notices_update_admin'),    '정책 notices_update_admin'),
  ('titles.sql',                to_regclass('public.titles') is not null,                '표 titles'),
  ('emoticons.sql',             to_regclass('public.emoticon_packs') is not null,        '표 emoticon_packs'),
  ('emoticons-2.sql',           pg_temp.has_fn('bump_pack_saved_count'),                 '함수 bump_pack_saved_count'),
  ('emoticons-3.sql',           to_regclass('public.emoticon_uses') is not null,         '표 emoticon_uses'),
  ('marketing-analytics.sql',   to_regclass('public.mkt_events') is not null,            '표 mkt_events'),
  ('marketing-analytics-2.sql', pg_temp.has_fn('get_campaign_stats'),                    '함수 get_campaign_stats'),
  ('deletion-archive.sql',      to_regclass('public.admin_comment_deletions') is not null,'표 admin_comment_deletions'),
  ('deletion-archive-2.sql',    pg_temp.has_fn('deleter_role'),                          '함수 deleter_role'),
  ('referral.sql',              to_regclass('public.referral_rules') is not null,        '표 referral_rules'),
  ('report-takedown.sql',       pg_temp.has_fn('is_admin'),                              '함수 is_admin'),
  ('signup-nickname-fix.sql',   exists(select 1 from pg_proc p join pg_namespace n on n.oid=p.pronamespace
                                       where n.nspname='public' and p.proname='handle_new_user'
                                         and p.prosrc like '%full_name%'),               'handle_new_user 에 full_name 처리'),
  ('bi-readonly.sql',           exists(select 1 from information_schema.views where table_schema='bi'),
                                                                                         'bi 스키마 뷰')
) as t(파일, 있음, 근거)
order by 있음, 파일;
