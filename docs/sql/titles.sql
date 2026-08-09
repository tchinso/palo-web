-- ============================================================
--  칭호 시스템 + 개척자(초기 500명) 칭호
--
--  구조
--  ────
--   · titles      : 칭호 사전(이름·이모지·설명). 새 칭호는 여기에 행만 추가하면 된다.
--   · user_titles : 누가 어떤 칭호를 보유하는가 (여러 개 보유 가능)
--   · profiles.title_id : 지금 '장착'해서 닉네임 옆에 보여줄 칭호 하나
--
--  ⚠️ 보안 — 칭호는 자랑거리라 위조 유인이 있다:
--   ① user_titles에 insert/update/delete 정책이 없다 = 브라우저에서 직접 못 넣는다.
--      지급은 트리거·관리자 SQL로만.
--   ② profiles.title_id는 본인이 update로 바꾸지만, **보유하지 않은 칭호를 달면
--      트리거가 조용히 되돌린다**(guard_profile_score_columns와 같은 패턴).
--
--  개척자 지급 규칙: **지급된 수가 500명이 될 때까지** 가입 즉시 자동 지급 + 자동 장착.
--   (가입 순서 기준. 이미 가입한 회원 전원에게는 이 SQL이 소급 지급한다)
--
--  실행: Supabase → SQL Editor 에 통째로 붙여넣고 Run. 여러 번 실행해도 안전하다.
-- ============================================================


-- ── 1. 칭호 사전 ───────────────────────────────────────────
create table if not exists public.titles (
  id          serial primary key,
  code        text not null unique,   -- 코드로 참조(예: 'pioneer')
  name        text not null,          -- 화면에 보이는 이름
  emoji       text,                   -- 이름 앞 이모지
  description text,                   -- 어떻게 얻는 칭호인지
  created_at  timestamptz not null default now()
);
alter table public.titles enable row level security;
drop policy if exists "칭호 사전 조회" on public.titles;
create policy "칭호 사전 조회" on public.titles for select using (true);
-- 쓰기 정책 없음 = 새 칭호는 관리자가 SQL로만 추가

insert into public.titles (code, name, emoji, description)
values ('pioneer', '개척자', '🚩', 'commi의 시작을 함께한 초기 회원 (선착 500명)')
on conflict (code) do nothing;


-- ── 2. 보유 기록 ───────────────────────────────────────────
create table if not exists public.user_titles (
  user_id   uuid not null references auth.users(id) on delete cascade,
  title_id  integer not null references public.titles(id) on delete cascade,
  earned_at timestamptz not null default now(),
  primary key (user_id, title_id)
);
alter table public.user_titles enable row level security;
-- 본인 것과 관리자만 조회(장착된 칭호의 '표시'는 profiles.title_id로 하므로 남의 목록은 볼 필요 없음)
drop policy if exists "칭호 보유 본인·관리자 조회" on public.user_titles;
create policy "칭호 보유 본인·관리자 조회" on public.user_titles
  for select using (user_id = auth.uid() or public.is_admin());
-- insert/update/delete 정책 없음 = 지급은 트리거·관리자 SQL로만


-- ── 3. 장착 칸 + 위조 방지 ─────────────────────────────────
alter table public.profiles
  add column if not exists title_id integer references public.titles(id) on delete set null;

-- 보유하지 않은 칭호를 장착하려 하면 조용히 원래 값으로 되돌린다.
-- (에러를 내면 프로필의 다른 정상 수정까지 통째로 실패하므로, 점수 보호와 같은 '되돌림' 방식)
create or replace function public.guard_profile_title()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.title_id is distinct from old.title_id and new.title_id is not null then
    if not exists (select 1 from public.user_titles
                    where user_id = new.id and title_id = new.title_id) then
      new.title_id := old.title_id;
    end if;
  end if;
  return new;
end $$;
drop trigger if exists profiles_guard_title on public.profiles;
create trigger profiles_guard_title before update on public.profiles
  for each row execute function public.guard_profile_title();


-- ── 4. 개척자 지급 ─────────────────────────────────────────
-- 지급 + (장착 중인 칭호가 없으면) 자동 장착
create or replace function public.grant_title(p_user uuid, p_code text)
returns void language plpgsql security definer set search_path = public as $$
declare v_tid integer;
begin
  select id into v_tid from public.titles where code = p_code;
  if v_tid is null or p_user is null then return; end if;
  insert into public.user_titles (user_id, title_id) values (p_user, v_tid)
  on conflict do nothing;
  update public.profiles set title_id = v_tid
   where id = p_user and title_id is null;
end $$;

-- 기존 회원 소급 지급: 가입이 빠른 순서로, 이미 지급된 수를 합쳐 500명까지
do $$
declare r record; v_tid integer; v_granted integer;
begin
  select id into v_tid from public.titles where code = 'pioneer';
  select count(*) into v_granted from public.user_titles where title_id = v_tid;
  for r in (
    select p.id from public.profiles p
     where not exists (select 1 from public.user_titles ut
                        where ut.user_id = p.id and ut.title_id = v_tid)
     order by p.created_at asc
     limit greatest(0, 500 - v_granted)
  ) loop
    perform public.grant_title(r.id, 'pioneer');
  end loop;
end $$;

-- 앞으로 가입하는 회원: 개척자가 500명 미만인 동안 자동 지급
-- ⚠️ 어떤 오류도 가입을 깨면 안 된다 → 통째로 삼킨다(밴 체크와 같은 원칙)
create or replace function public.trg_grant_pioneer()
returns trigger language plpgsql security definer set search_path = public as $$
declare v_tid integer; v_cnt integer;
begin
  begin
    select id into v_tid from public.titles where code = 'pioneer';
    if v_tid is not null then
      select count(*) into v_cnt from public.user_titles where title_id = v_tid;
      if v_cnt < 500 then
        perform public.grant_title(new.id, 'pioneer');
      end if;
    end if;
  exception when others then
    null;
  end;
  return null;
end $$;
drop trigger if exists profiles_grant_pioneer on public.profiles;
create trigger profiles_grant_pioneer after insert on public.profiles
  for each row execute function public.trg_grant_pioneer();


-- ── 5. 실행 권한 회수 ──────────────────────────────────────
-- grant_title이 열려 있으면 로그인한 아무나 자기에게 칭호를 지급할 수 있다.
revoke all on function public.grant_title(uuid, text)  from public, anon, authenticated;
revoke all on function public.trg_grant_pioneer()      from public, anon, authenticated;
revoke all on function public.guard_profile_title()    from public, anon, authenticated;


-- ── 6. 확인 ────────────────────────────────────────────────
select
  (select count(*) from public.titles) as "칭호 종류",
  (select count(*) from public.user_titles ut join public.titles t on t.id = ut.title_id
    where t.code = 'pioneer') as "개척자 보유자",
  (select count(*) from public.profiles where title_id is not null) as "칭호 장착 중";
