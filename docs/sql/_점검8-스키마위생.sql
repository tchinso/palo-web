-- ============================================================================
-- 전체 점검 8회차 — DB 스키마 위생 (2026-08-14)
-- 전부 SELECT만 한다. 아무것도 바꾸지 않으므로 몇 번을 돌려도 안전하다.
-- 쿼리 4개를 하나씩 실행해서 결과 4개를 보내주세요(CSV 내보내기 4번).
-- ============================================================================

-- ────────────────────────────────────────────────────────────────────────────
-- [쿼리 1] 외래키 전수 조사 — 삭제 동작 + 참조하는 쪽 인덱스 유무
-- ⚠️ FK가 있어도 참조하는 쪽(자식) 칼럼에 인덱스가 없으면, 부모 행을 지울 때마다
--    자식 표를 전체 스캔한다(회원 탈퇴·글 삭제가 느려지는 전형적 원인).
-- ⚠️ pg_indexes를 함께 본다 — CREATE UNIQUE INDEX는 pg_constraint에 안 나온다(교훈).
-- ────────────────────────────────────────────────────────────────────────────
select
  conrelid::regclass::text as 자식표,
  a.attname as 자식칼럼,
  confrelid::regclass::text as 부모표,
  case confdeltype when 'c' then 'CASCADE(같이 삭제)'
                   when 'n' then 'SET NULL(비움)'
                   when 'a' then 'NO ACTION(막음)'
                   when 'r' then 'RESTRICT(막음)'
                   when 'd' then 'SET DEFAULT' end as 삭제동작,
  case when exists (
    select 1 from pg_index i
    where i.indrelid = c.conrelid
      and (i.indkey::int2[])[0] = c.conkey[1]   -- 그 칼럼이 인덱스의 첫 칼럼인가
  ) then '✅' else '❌ 인덱스 없음' end as 자식인덱스
from pg_constraint c
join pg_attribute a on a.attrelid = c.conrelid and a.attnum = c.conkey[1]
where c.contype = 'f'
  and connamespace = 'public'::regnamespace
order by 자식인덱스 desc, 자식표, 자식칼럼;

-- ────────────────────────────────────────────────────────────────────────────
-- [쿼리 2] RLS 상태 전수 조사
-- "RLS 꺼짐"이 하나라도 나오면 그 표는 anon 키로 통째로 읽힐 수 있다(가장 위험).
-- "정책 0개"는 서버 전용 표(login_ids 등)에선 의도된 것 — 목록으로 재확인만.
-- ────────────────────────────────────────────────────────────────────────────
select t.tablename as 표,
       case when t.rowsecurity then 'RLS 켜짐' else '🔴 RLS 꺼짐' end as 상태,
       coalesce(p.cnt,0) as 정책수,
       case when not t.rowsecurity then '🔴 즉시 확인 필요'
            when coalesce(p.cnt,0)=0 then '정책 0개(서버 전용이면 정상)'
            else '' end as 비고
from pg_tables t
left join (select tablename, count(*) cnt from pg_policies
           where schemaname='public' group by tablename) p
  on p.tablename = t.tablename
where t.schemaname='public'
order by t.rowsecurity, 정책수, 표;

-- ────────────────────────────────────────────────────────────────────────────
-- [쿼리 3] 묵은 데이터·약속한 보관기간 점검
-- 개인정보 처리방침이 "이용 분석 기록은 180일 보관 후 파기"라고 약속했는데,
-- 지우는 장치가 실제로 있는지 여기서 드러난다.
-- ────────────────────────────────────────────────────────────────────────────
select '이용분석(mkt_events) 전체' as 항목, count(*)::text as 값,
       coalesce(min(created_at)::date::text,'-') as 가장오래된것
from public.mkt_events
union all
select '🔴 mkt_events 180일 초과(방침 위반 여부)', count(*)::text,
       coalesce(min(created_at)::date::text,'-')
from public.mkt_events where created_at < now() - interval '180 days'
union all
select '본인확인 시도 로그(adult_verify_log)', count(*)::text,
       coalesce(min(created_at)::date::text,'-')
from public.adult_verify_log
union all
select '가입 기록(signup_log)', count(*)::text,
       coalesce(min(created_at)::date::text,'-')
from public.signup_log
union all
select '도배 방지 기록(rate_events, 자가청소 확인 — 2시간분만 있어야 정상)', count(*)::text,
       coalesce(min(at)::text,'-')
from public.rate_events
union all
select '읽은 지 30일 넘은 알림', count(*)::text,
       coalesce(min(created_at)::date::text,'-')
from public.notifications where is_read and created_at < now() - interval '30 days'
union all
select '말 없는 손님 문의방(화면에선 숨김, 행은 남음)', count(*)::text,
       coalesce(min(created_at)::date::text,'-')
from public.conversations c
where c.guest_code is not null
  and not exists (select 1 from public.messages m where m.conversation_id = c.id)
union all
select '삭제된 글을 가리키는 좋아요(likes 고아 — post FK 확인용)', count(*)::text, '-'
from public.likes l
where not exists (select 1 from public.posts p where p.id = l.post_id);

-- ────────────────────────────────────────────────────────────────────────────
-- [쿼리 4] 인덱스 건강 — 한 번도 안 쓰인 인덱스 + 표별 크기
-- idx_scan=0이 전부 나쁜 건 아니다(새 인덱스·드문 관리자 조회용). 목록만 뽑는다.
-- ────────────────────────────────────────────────────────────────────────────
select relname as 표,
       indexrelname as 인덱스,
       idx_scan as 사용횟수,
       pg_size_pretty(pg_relation_size(indexrelid)) as 크기
from pg_stat_user_indexes
where schemaname='public'
order by idx_scan, pg_relation_size(indexrelid) desc
limit 60;
