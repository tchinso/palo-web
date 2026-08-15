-- ============================================================
-- 프로필 커스텀 주소(핸들) (2026-08-15)
--
-- commi.kr/<원하는이름> 으로 프로필이 열리게 한다.
--
-- ⚠️ 가장 중요한 규칙: **예약어를 반드시 막아야 한다.**
--    핸들 주소는 사이트의 최상위 경로(/커미션, /채팅 등)와 같은 자리를 쓴다.
--    누가 'commission'을 핸들로 가져가면 그 프로필은 영영 열 수 없고(라우트가 먼저 잡음),
--    'palo.min.js' 같은 파일명을 가져가면 혼란만 남는다. 새 최상위 경로/공개 파일을
--    추가할 때는 아래 예약어 목록에도 추가할 것(palo.js의 HANDLE_RESERVED와 짝).
--
-- 형식: 2~20자, 한글·영문 소문자·숫자·밑줄(_)·붙임표(-).
--    영문 대문자는 저장 전에 소문자로 접는다(주소는 대소문자를 안 가리는 게 관례).
--    마침표(.)는 제외 — 파일 확장자와 헷갈린다(robots.txt 류).
-- ============================================================

-- ── 1. 칼럼 ─────────────────────────────────────────────────
alter table public.profiles add column if not exists handle text;

-- 형식 제약(소문자만 통과 — RPC가 접어서 넣지만 SQL Editor 직접 수정도 막는다)
do $$ begin
  alter table public.profiles add constraint profiles_handle_format
    check (handle is null or handle ~ '^[a-z0-9가-힣][a-z0-9가-힣_-]{1,19}$');
exception when duplicate_object then null; end $$;

-- 고유(대소문자 무시). ⚠️ unique 제약이 아니라 인덱스로 — lower() 식이 필요해서.
create unique index if not exists profiles_handle_unique on public.profiles (lower(handle));

-- ── 2. 예약어 ───────────────────────────────────────────────
create table if not exists public.reserved_handles (word text primary key);
insert into public.reserved_handles (word) values
  -- 현재 최상위 라우트
  ('commission'),('chat'),('me'),('board'),('post'),('user'),('emoticon'),('ranking'),
  ('admin'),('api'),('terms'),('privacy'),
  -- 메타 파일(파일명 자체 + 이름 부분)
  ('rss'),('sitemap'),('robots'),('manifest'),('favicon'),
  -- public/ 파일 이름 부분
  ('palo'),('agegate'),('sw'),('og-image'),('icon-192'),('icon-512'),
  ('apple-icon'),('apple-touch-icon'),('logo-inapp'),('palo-icon'),
  -- 앞으로 쓸 확률이 높은 말(선점 방지)
  ('login'),('logout'),('signup'),('auth'),('search'),('settings'),('setting'),
  ('notice'),('notification'),('notifications'),('help'),('support'),('about'),
  ('home'),('index'),('static'),('assets'),('img'),('image'),('images'),
  ('commi'),('official'),('staff'),('mod'),('moderator'),('administrator'),
  ('write'),('edit'),('new'),('popular'),('best'),('review'),('reviews'),
  ('point'),('points'),('event'),('events'),('shop'),('market'),('attendance')
on conflict do nothing;
alter table public.reserved_handles enable row level security;
-- 정책 없음 = 클라이언트가 못 읽고 못 쓴다(검사는 아래 RPC가 definer 권한으로 한다)

-- ── 3. 설정 RPC ─────────────────────────────────────────────
-- 반환: {ok:true, handle:'...'} 또는 {ok:false, reason:'...'}
--   reason: not_authenticated / banned / invalid(형식) / reserved(예약어) / taken(선점됨)
-- p_handle 에 null·빈 문자열을 주면 핸들을 지운다(기본 /user/uuid 로 복귀).
create or replace function public.set_my_handle(p_handle text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_h   text;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false, 'reason', 'not_authenticated');
  end if;
  if exists (select 1 from public.profiles where id = v_uid and is_banned) then
    return jsonb_build_object('ok', false, 'reason', 'banned');
  end if;

  v_h := lower(btrim(coalesce(p_handle, '')));

  if v_h = '' then
    update public.profiles set handle = null where id = v_uid;
    return jsonb_build_object('ok', true, 'handle', null);
  end if;

  if v_h !~ '^[a-z0-9가-힣][a-z0-9가-힣_-]{1,19}$' then
    return jsonb_build_object('ok', false, 'reason', 'invalid');
  end if;
  if exists (select 1 from public.reserved_handles where word = v_h) then
    return jsonb_build_object('ok', false, 'reason', 'reserved');
  end if;
  -- 내 것이면 통과(같은 값 재저장), 남의 것이면 거절
  if exists (select 1 from public.profiles where lower(handle) = v_h and id <> v_uid) then
    return jsonb_build_object('ok', false, 'reason', 'taken');
  end if;

  begin
    update public.profiles set handle = v_h where id = v_uid;
  exception when unique_violation then
    -- 동시에 같은 핸들을 저장한 경우 — 위 exists 검사를 뚫어도 인덱스가 막는다
    return jsonb_build_object('ok', false, 'reason', 'taken');
  end;

  return jsonb_build_object('ok', true, 'handle', v_h);
end $$;

revoke all on function public.set_my_handle(text) from public;
grant execute on function public.set_my_handle(text) to authenticated;

-- ── 4. 확인 ─────────────────────────────────────────────────
select case when exists (select 1 from information_schema.columns
                          where table_schema='public' and table_name='profiles' and column_name='handle')
            then '✅ handle 칼럼 있음' else '❌ 칼럼 없음' end as chk
union all
select case when to_regclass('public.profiles_handle_unique') is not null
            then '✅ 고유 인덱스 있음' else '❌ 인덱스 없음' end
union all
select case when (select count(*) from public.reserved_handles) >= 40
            then '✅ 예약어 '||(select count(*) from public.reserved_handles)||'개' else '❌ 예약어 부족' end
union all
select case when to_regprocedure('public.set_my_handle(text)') is not null
            then '✅ set_my_handle() 있음' else '❌ 함수 없음' end;
