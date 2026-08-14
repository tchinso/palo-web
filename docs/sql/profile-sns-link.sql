-- ============================================================================
-- 프로필 자유 링크(sns_link) 컬럼 추가 (2026-08-15)
-- 트위터·인스타·이메일은 그대로 두고, 아무 사이트나 넣을 수 있는 링크 하나를 더 둔다.
-- 최대 300자(클라이언트도 같은 길이로 자른다). URL 안전성(http/https만)은
-- 화면에서 pfSafeUrl 이 거른다 — 저장은 문자열로 받고, 표시할 때 검증한다.
-- ============================================================================
alter table public.profiles
  add column if not exists sns_link text;

-- 확인
select case when exists(
    select 1 from information_schema.columns
    where table_schema='public' and table_name='profiles' and column_name='sns_link'
  ) then '✅ sns_link 컬럼 있음' else '❌ 없음' end as 상태;
