-- ============================================================================
-- 사용자 뮤트 + 메모
--
-- 한 표에 둘을 합친 이유: 둘 다 "내가 저 사람에 대해 가진 것"이라 (나, 상대) 한 쌍에
-- 딸린 값이다. 표를 나누면 같은 쌍을 두 번 조회·삭제해야 하고, 메모만 있고 뮤트는 없는
-- 상태를 두 곳에서 따로 관리하게 된다.
--
-- ⚠️ 메모는 **작성한 본인만** 볼 수 있어야 한다. 상대가 자기에 대한 메모를 읽을 수 있으면
--    안 된다 — 아래 정책이 그것을 보장한다(owner_id = auth.uid()).
-- ============================================================================

create table if not exists public.user_notes (
  owner_id   uuid not null references auth.users(id) on delete cascade,
  target_id  uuid not null references auth.users(id) on delete cascade,
  memo       text,
  muted      boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (owner_id, target_id),
  -- 자기 자신은 뮤트·메모 대상이 아니다
  constraint user_notes_not_self check (owner_id <> target_id)
);

-- 내 목록을 통째로 읽는 조회가 대부분이라 owner_id 인덱스가 유용하다
-- (primary key가 (owner_id, target_id)라 앞쪽 칼럼만으로도 인덱스를 탄다 — 별도 인덱스 불필요)

alter table public.user_notes enable row level security;

-- 읽기·쓰기 모두 '내 행'만. for all이라 select/insert/update/delete가 한 번에 덮인다.
-- ⚠️ using(읽고 고칠 수 있는 행)과 with check(만들거나 바꾼 결과)를 모두 걸어야 한다.
--    with check가 없으면 owner_id를 남의 것으로 적어 넣는 경로가 열린다.
drop policy if exists user_notes_own on public.user_notes;
create policy user_notes_own on public.user_notes
  for all
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

-- 수정 시각 자동 기록
create or replace function public.user_notes_touch()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists user_notes_touch on public.user_notes;
create trigger user_notes_touch
  before update on public.user_notes
  for each row execute function public.user_notes_touch();

-- 확인용
-- select policyname, cmd from pg_policies where tablename = 'user_notes';
