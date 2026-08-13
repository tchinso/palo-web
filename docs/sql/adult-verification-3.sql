-- ============================================================================
-- 성인 인증 1년 유효기간 (2026-08-13)
--
-- 여성가족부 가이드라인: 청소년유해매체물 제공 시 나이·본인 여부를
-- **최소 연 1회** 재확인해야 한다(청소년보호법 시행령 제17조 기반).
-- 그런데 기존 is_adult_verified()는 adult_verified 불리언만 봐서
-- 한 번 인증하면 영구히 통과했다 — 여기서 1년 만료를 건다.
--
-- ⚠️ 고칠 곳은 이 함수 하나다. 성인 게시판의 읽기·쓰기·댓글·이미지 RLS가
--    전부 이 함수를 호출하므로, 함수만 바꾸면 서버 강제가 한꺼번에 걸린다.
--    (adult-verification.sql의 정책들을 다시 만들 필요 없다)
-- ⚠️ adult_verified_at은 처음부터 기록해 왔으므로 기존 인증자에게도 소급된다.
--    재인증하면 /api/auth/adult-verify가 adult_verified_at을 갱신한다
--    (중복 차단은 .neq(id, 본인)이라 본인 재인증은 통과한다 — 코드 수정 불필요).
-- ============================================================================

create or replace function public.is_adult_verified()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    (select adult_verified
        and adult_verified_at is not null
        and adult_verified_at > now() - interval '1 year'
       from public.profiles where id = auth.uid()),
    false);
$$;

-- 확인용: 본인 계정으로 실행하면 인증 여부가 나온다
-- select public.is_adult_verified();
