-- ============================================================
--  실행 여부 점검 — 아무것도 바꾸지 않고 "무엇이 이미 들어가 있는지"만 확인한다.
--  Supabase SQL Editor에 통째로 붙여넣고 실행하면, 파일별로 ✅ / ❌ 가 나온다.
--  ❌ 로 나온 파일만 다시 실행하면 된다.
--  (SELECT만 하므로 몇 번을 돌려도 안전하다)
-- ============================================================
with chk as (
  select * from (values
    ('adult-verification.sql',      to_regprocedure('public.post_is_adult(bigint)')     is not null),
    ('adult-verification-2.sql',    to_regprocedure('public.protect_adult_fields()')    is not null),
    ('adult-verification-3.sql',    to_regprocedure('public.is_adult_verified()')       is not null),
    ('commission-adult.sql',        to_regprocedure('public.commission_is_adult(bigint)') is not null),
    ('commission-adult-2.sql',      to_regprocedure('public.adult_commission_stubs()')  is not null),
    ('commission-bump.sql',         to_regprocedure('public.bump_commission(bigint)')   is not null),
    ('user-blocks.sql',             to_regprocedure('public.blocked_me()')              is not null),
    ('user-notes.sql',              to_regclass('public.user_notes')                    is not null),
    ('post-bookmarks.sql',          to_regclass('public.post_bookmarks')                is not null),
    ('site-rules.sql',              to_regclass('public.site_settings')                 is not null),
    ('titles.sql',                  to_regclass('public.titles')                        is not null),
    ('emoticons.sql',               to_regclass('public.emoticon_packs')                is not null),
    ('emoticons-3.sql',             to_regclass('public.emoticon_uses')                 is not null),
    ('marketing-analytics.sql',     to_regclass('public.mkt_events')                    is not null),
    ('marketing-analytics-2.sql',   to_regprocedure('public.get_campaign_stats(text)')  is not null),
    ('deletion-archive.sql',        to_regclass('public.admin_comment_deletions')       is not null),
    ('deletion-archive-2.sql',      to_regprocedure('public.deleter_role(uuid,uuid)')   is not null),
    ('referral.sql',                to_regclass('public.referral_rules')                is not null),
    ('report-takedown.sql',         to_regprocedure('public.is_admin()')                is not null),
    ('signup-nickname-fix.sql',     to_regprocedure('public.handle_new_user()')         is not null),
    ('notices-update.sql',          exists(select 1 from pg_policies
                                           where schemaname='public' and tablename='notices'
                                             and policyname='notices_update_admin')),
    ('bi-readonly.sql',             exists(select 1 from information_schema.views
                                           where table_schema='bi'))
  ) as t(파일, 있음)
)
select 파일, case when 있음 then '✅ 실행됨' else '❌ 아직' end as 상태
from chk order by 상태 desc, 파일;

-- ── 별도 확인 1) user-blocks-fix-anon.sql ────────────────────
-- 비로그인 댓글이 막혔던 문제를 고친 것. 함수를 새로 만드는 게 아니라 **실행 권한을 되돌려주는** 파일이라
-- 위 목록으로는 판별이 안 된다. anon 에 EXECUTE 가 있으면 실행된 것.
select 'user-blocks-fix-anon.sql' as 파일,
       case when has_function_privilege('anon','public.blocked_me()','EXECUTE')
            then '✅ 실행됨 (anon 실행권한 있음)'
            else '❌ 아직 — 비로그인 댓글이 막힐 수 있음' end as 상태;

-- ── 별도 확인 2) adult-verification-3.sql (1년 유효기간) ─────
-- is_adult_verified() 는 1차 파일에도 있어서 "함수가 있다"만으로는 3차 실행 여부를 모른다.
-- 본문에 365일 조건이 들어갔는지 직접 본다.
select 'adult-verification-3.sql (1년 만료)' as 파일,
       case when prosrc like '%365%' then '✅ 실행됨 (1년 만료 반영)'
            else '❌ 아직 — 한 번 인증하면 영구 유효' end as 상태
from pg_proc where oid = to_regprocedure('public.is_adult_verified()');

-- ── 별도 확인 3) chat-image.sql / commission-report.sql ──────
-- 둘 다 컬럼·인덱스만 추가하는 작은 파일이라 함수가 없다.
select 'chat-image.sql' as 파일,
       case when exists(select 1 from information_schema.columns
                        where table_schema='public' and table_name='messages' and column_name='image_url')
            then '✅ 실행됨' else '❌ 아직' end as 상태
union all
select 'commission-report.sql',
       case when exists(select 1 from information_schema.columns
                        where table_schema='public' and table_name='reports' and column_name='commission_id')
            then '✅ 실행됨' else '❌ 아직' end;
