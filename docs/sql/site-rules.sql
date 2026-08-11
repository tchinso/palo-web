-- ============================================================================
-- 이용 규칙(📌 이용 규칙 & 피드백 매너)을 관리자 페이지에서 고칠 수 있게 한다.
--
-- 왜 key-value 한 줄인가:
--   규칙은 '목록 전체를 한 번에 저장'하는 성격이다. 항목마다 행을 나누면 저장 도중
--   일부만 반영되는 상태가 생기고, 순서 바꾸기도 번거로워진다. jsonb 한 칸에 통째로
--   넣으면 저장이 원자적이고 순서도 배열 그대로다.
--
-- 앞으로 다른 설정이 생겨도 이 표에 key를 추가해 재사용한다(표를 매번 새로 만들지 않게).
-- ============================================================================

create table if not exists public.site_settings (
  key        text primary key,
  value      jsonb       not null,
  updated_at timestamptz not null default now()
);

alter table public.site_settings enable row level security;

-- 읽기는 누구나. ⚠️ 규칙은 로그인하기 전에도 보여줘야 하므로 anon에게도 열어야 한다.
drop policy if exists site_settings_read on public.site_settings;
create policy site_settings_read on public.site_settings
  for select using (true);

-- 쓰기는 관리자만. ⚠️ using과 with check를 모두 걸어야 한다 —
--    using만 걸면 '기존 행 수정'은 막히지만 '새 행 삽입'은 통과한다.
drop policy if exists site_settings_write on public.site_settings;
create policy site_settings_write on public.site_settings
  for all using (public.is_admin()) with check (public.is_admin());

-- 수정 시각 자동 기록
create or replace function public.site_settings_touch()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists site_settings_touch on public.site_settings;
create trigger site_settings_touch
  before update on public.site_settings
  for each row execute function public.site_settings_touch();

-- 지금 화면에 있는 규칙을 그대로 넣어 둔다.
-- ⚠️ do nothing: 이 파일을 다시 실행해도 관리자가 고쳐 둔 내용을 덮어쓰지 않는다.
insert into public.site_settings (key, value) values (
  'rules',
  '{
    "title": "이용 규칙 & 피드백 매너",
    "items": [
      {"t": "AI 생성물 금지",          "d": "AI로 만든 그림은 올릴 수 없어요"},
      {"t": "사람 말고 그림을 이야기해요", "d": "인신공격·조롱은 바로 삭제돼요"},
      {"t": "피드백은 구체적으로",       "d": "어디를 어떻게 바꿀지 적어주세요"},
      {"t": "도용 금지",               "d": "남의 그림 무단 사용·AI 학습 제재"},
      {"t": "거래는 당사자끼리",         "d": "commi는 거래를 중개하지 않아요"},
      {"t": "댓글 달리면 수정 제한",      "d": "질문·투표·피드백 글은 신중하게"},
      {"t": "처음이라면 인사 한 줄",      "d": "수다 게시판에서 환영할게요 🎨"}
    ]
  }'::jsonb
) on conflict (key) do nothing;
