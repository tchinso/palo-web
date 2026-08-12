-- ============================================================================
-- 글 북마크(저장한 글)
--
-- 커미션 북마크(commission_bookmarks)와 같은 원칙으로 만든다:
--   복합 PK로 중복 저장을 막고, RLS는 '본인 것만'.
--
-- ⚠️ 커미션 북마크는 카드에 '저장 수'를 보여주느라 별도 집계 RPC가 필요했는데,
--    글 북마크는 남에게 보여줄 숫자가 없다(내가 저장했는지만 쓴다).
--    그래서 집계 함수 없이 '본인 것만' 정책 하나로 끝난다.
-- ============================================================================

create table if not exists public.post_bookmarks (
  user_id    uuid   not null references auth.users(id) on delete cascade,
  post_id    bigint not null references public.posts(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, post_id)
);

-- 저장 목록은 최근에 담은 것부터 보여주므로 그 순서로 뽑는 인덱스를 둔다
create index if not exists post_bookmarks_user_recent
  on public.post_bookmarks (user_id, created_at desc);

alter table public.post_bookmarks enable row level security;

-- 읽기·쓰기 모두 '내 것만'.
-- ⚠️ 남의 저장 목록은 볼 수 없어야 한다 — 무엇을 저장해 뒀는지는 사적인 정보다.
-- ⚠️ using과 with check를 모두 걸어야 한다. with check가 없으면 user_id를 남의 것으로
--    적어 넣는 경로가 열린다.
drop policy if exists post_bookmarks_own on public.post_bookmarks;
create policy post_bookmarks_own on public.post_bookmarks
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- 확인용
-- select policyname, cmd from pg_policies where tablename = 'post_bookmarks';
