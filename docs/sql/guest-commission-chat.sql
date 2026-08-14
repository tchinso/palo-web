-- ============================================================================
-- 비로그인 커미션 문의 채팅 + 채팅방 코드 (2026-08-14)
--
-- 목표: 로그인하지 않은 사람도 "커미션 문의하기"로 작가에게 말을 걸 수 있게 한다.
--       손님에게는 방 코드를 주고, 브라우저 저장소가 지워져도 그 코드로 다시 들어온다.
--
-- ■ 어떻게 막는가 (가장 중요한 부분)
--   비로그인은 auth.uid()가 없다. 그래서 기존 RLS("참여자인지 auth.uid()로 확인")가
--   통하지 않는다. 여기서 흔히 하는 실수가 "anon에게 conversations/messages 를 열어주고
--   화면에서 코드로 거르는 것"인데, 그러면 아무나 남의 대화를 통째로 읽을 수 있다.
--
--   그래서 **표는 비로그인에게 끝까지 잠가둔다.** 손님의 모든 접근은 아래
--   security definer 함수 4개로만 이뤄지고, 그 함수가 코드를 검증한 뒤
--   **그 방 하나의 내용만** 돌려준다. 코드가 곧 열쇠다.
--
-- ■ 확인하고 쓴 사실 (추측 아님, 2026-08-14 실측)
--   conversations.user1_id / user2_id : uuid NOT NULL, FK→auth.users
--   messages.sender_id                : uuid NOT NULL, FK→auth.users
--   CHECK (user1_id <> user2_id)
--   messages 트리거 2개: rl_msg(BEFORE, 도배 제한) / on_message_insert_notify(AFTER, 알림)
--
-- ■ 되돌리려면
--   맨 아래 '되돌리기' 주석 참고.
-- ============================================================================


-- ── 1. 손님 자리를 만든다 ────────────────────────────────────────────────
-- user2_id(상대방)와 sender_id(보낸 사람)를 비울 수 있게 한다. 비어 있으면 "손님"이라는 뜻.
-- ⚠️ 기존 정책은 손댈 필요가 없다. `auth.uid() = user2_id` 는 user2_id가 NULL이면
--    참이 아니라 NULL이 되고, RLS는 참일 때만 통과시키므로 그대로 막힌다.
-- ⚠️ CHECK (user1_id <> user2_id) 도 손댈 필요가 없다. NULL과 비교하면 NULL이 되고,
--    CHECK는 '거짓'일 때만 막으므로 NULL은 통과한다.
alter table public.conversations alter column user2_id drop not null;
alter table public.messages      alter column sender_id drop not null;

alter table public.conversations
  add column if not exists guest_code    text,   -- 손님이 다시 들어올 때 쓰는 열쇠(대시 없이 대문자 12자)
  add column if not exists guest_name    text,   -- 화면에 보일 임시 이름("손님 ABCD")
  add column if not exists commission_id bigint references public.commissions(id) on delete set null;

-- 코드는 유일해야 한다(같은 코드가 두 방을 가리키면 안 된다)
create unique index if not exists conversations_guest_code_uniq
  on public.conversations(guest_code) where guest_code is not null;

-- 작가가 자기 문의방을 찾을 때 쓰는 인덱스
create index if not exists conversations_guest_owner
  on public.conversations(user1_id, last_message_at desc) where guest_code is not null;

-- ⚠️ 기존 유일 인덱스 conversations_unique_pair 를 손님방에서 빼야 한다.
--    (2026-08-14 실제로 터진 뒤 추가 — 이걸 빠뜨리면 "두 번째 문의부터" 막힌다)
--    그 인덱스는 "같은 두 사람 사이에 방이 둘 생기지 않게" 이렇게 걸려 있다:
--       unique (LEAST(user1_id,user2_id), GREATEST(user1_id,user2_id))
--    그런데 LEAST/GREATEST는 NULL을 무시한다. 손님방은 user2_id가 비어 있으므로
--       LEAST(작가,NULL)=작가,  GREATEST(작가,NULL)=작가
--    가 되어 **한 작가에게 오는 모든 손님 문의가 (작가,작가) 한 자리로 뭉친다.**
--    첫 문의만 통과하고 두 번째부터 duplicate key 오류가 난다.
--    ⚠️ 이건 pg_constraint 에 안 나온다(CREATE UNIQUE INDEX 로 만든 것이라 '제약'이 아니다).
--       스키마를 조사할 땐 pg_indexes 도 함께 볼 것.
--    지금 걸린 정의를 그대로 읽어서 조건만 덧붙인다(정의를 추측하지 않는다).
do $$
declare v_def text;
begin
  select indexdef into v_def from pg_indexes
   where schemaname='public' and tablename='conversations'
     and indexname='conversations_unique_pair';
  if v_def is null then
    raise notice 'conversations_unique_pair 없음 — 건너뜀';
  elsif position(' where ' in lower(v_def)) > 0 then
    raise notice '이미 조건 있음: %', v_def;
  else
    execute 'drop index public.conversations_unique_pair';
    execute v_def || ' where guest_code is null';
    raise notice '손님방 제외로 다시 만듦';
  end if;
end $$;

-- 방의 모양을 강제한다: 손님방이면 상대가 없고, 일반방이면 상대가 있다.
-- (둘 다 채워지거나 둘 다 비는 어중간한 행이 생기지 않게)
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'conversations_guest_shape') then
    alter table public.conversations
      add constraint conversations_guest_shape check (
        (guest_code is null     and user2_id is not null) or
        (guest_code is not null and user2_id is null)
      );
  end if;
end $$;


-- ── 2. 보낸 사람이 비어 있어도 되는 경우를 서버가 정한다 ─────────────────
-- sender_id를 NULL로 열어 놨으므로, 로그인 사용자가 자기 메시지를 '손님이 보낸 것'처럼
-- 위장해 넣는 길이 생기지 않게 막는다.
-- (지금도 insert 정책이 auth.uid() = sender_id 라 실제론 막히지만, 정책 문구에 기대지 않고
--  표 자신이 지키게 둔다 — 나중에 정책을 손볼 때 조용히 뚫리지 않도록)
create or replace function public.guard_guest_message()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.sender_id is null then
    if not exists (select 1 from public.conversations c
                   where c.id = new.conversation_id and c.guest_code is not null) then
      raise exception '보낸 사람 없이 보낼 수 없어요';
    end if;
  end if;
  return new;
end $$;

drop trigger if exists guard_guest_msg on public.messages;
create trigger guard_guest_msg before insert on public.messages
  for each row execute function public.guard_guest_message();


-- ── 3. 알림 트리거 수정 (이걸 안 하면 작가가 답장을 못 한다) ──────────────
-- 기존 notify_new_message()는 받는 사람을 이렇게 고른다:
--   case when c.user1_id = new.sender_id then c.user2_id else c.user1_id end
-- 손님방에서 작가가 답장하면 user1_id = sender_id 가 참이 되어 받는 사람이 user2_id(=NULL)가 되고,
-- notifications.user_id 에 NULL을 넣으려다 예외가 난다. 그 예외는 INSERT 전체를 되돌리므로
-- **작가의 메시지 자체가 안 보내진다.** 받는 사람이 없으면 알림만 건너뛰게 한다.
create or replace function public.notify_new_message()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare recipient_id uuid; sender_nick text; is_guest_room boolean;
begin
  select case when c.user1_id = new.sender_id then c.user2_id else c.user1_id end,
         (c.guest_code is not null),
         c.guest_name
    into recipient_id, is_guest_room, sender_nick
    from public.conversations c where c.id = new.conversation_id;

  -- 받는 사람이 손님(계정 없음)이면 알림을 만들 수 없다 — 조용히 넘어간다.
  -- 손님은 채팅방을 열어 둔 동안 화면이 스스로 새 메시지를 가져온다.
  if recipient_id is null then
    return new;
  end if;

  -- 보낸 사람 이름: 손님이 보냈으면(sender_id 없음) 방에 저장해 둔 임시 이름을 쓴다.
  if new.sender_id is not null then
    select nickname into sender_nick from public.profiles where id = new.sender_id;
  end if;

  insert into public.notifications (user_id, type, icon, content, link_chat_user, link_conversation_id)
  values (recipient_id,
          case when is_guest_room then 'cm_inquiry' else 'chat' end,
          case when is_guest_room then '📩' else '💬' end,
          coalesce(sender_nick, '손님') || '님이 채팅을 보냈어요: ' || left(new.content, 24),
          new.sender_id,          -- 손님이면 NULL(누를 프로필이 없다)
          new.conversation_id);
  return new;
end $$;


-- ── 4. 코드 만들기 ───────────────────────────────────────────────────────
-- ⚠️ random() 을 쓰지 않는다. 예측 가능한 난수라 코드가 곧 열쇠인 여기서는 위험하다.
--    gen_random_uuid() 는 Postgres 코어에 내장(확장 아님)이고 안전한 난수를 쓴다.
--    (pgcrypto의 gen_random_bytes 는 확장 의존이라 피한다 — 예전에 digest() 때문에
--     가입 트리거가 통째로 깨진 적이 있다)
-- 알파벳은 32자: 헷갈리는 I, O, 0, 1 을 뺐다. 12자 → 32^12 = 60비트.
-- 256 % 32 = 0 이라 바이트를 32로 나눈 나머지에 치우침이 없다.
create or replace function public.gen_guest_code()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  v_code text := '';
  v_bytes bytea;
  i int;
begin
  v_bytes := uuid_send(gen_random_uuid());
  for i in 0..11 loop
    v_code := v_code || substr(alphabet, 1 + (get_byte(v_bytes, i) % 32), 1);
  end loop;
  return v_code;
end $$;

-- 사람이 입력한 코드를 비교용으로 다듬는다(소문자·대시·공백을 넣어도 통하게)
create or replace function public.norm_guest_code(p_code text)
returns text
language sql
immutable
as $$ select upper(regexp_replace(coalesce(p_code,''), '[^A-Za-z0-9]', '', 'g')) $$;


-- ── 5. 손님용 함수 4개 ───────────────────────────────────────────────────
-- 전부 security definer. 표에 직접 닿는 건 이 함수들뿐이고, 코드가 맞는 방 하나만 다룬다.

-- (1) 문의 시작 — 방을 만들고 첫 메시지를 넣고, 코드를 돌려준다
create or replace function public.guest_start_commission_chat(
  p_commission_id bigint,
  p_message       text,
  p_guest_name    text default null
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_author uuid; v_title text; v_code text; v_conv bigint; v_name text;
  v_msg text := btrim(coalesce(p_message, ''));
begin
  if length(v_msg) = 0 then
    return json_build_object('ok', false, 'error', 'empty_message');
  end if;
  if length(v_msg) > 2000 then
    return json_build_object('ok', false, 'error', 'too_long');
  end if;

  select author_id, title into v_author, v_title
    from public.commissions where id = p_commission_id;
  if v_author is null then
    return json_build_object('ok', false, 'error', 'no_commission');
  end if;

  -- 성인 커미션은 비로그인으로 문의할 수 없다(본인확인을 할 방법이 없다)
  if public.commission_is_adult(p_commission_id) then
    return json_build_object('ok', false, 'error', 'adult_login_required');
  end if;

  v_code := public.gen_guest_code();
  v_name := coalesce(nullif(btrim(p_guest_name), ''), '손님 ' || right(v_code, 4));

  insert into public.conversations (user1_id, user2_id, guest_code, guest_name, commission_id)
  values (v_author, null, v_code, left(v_name, 20), p_commission_id)
  returning id into v_conv;

  -- 도배 제한(rl_msg)과 알림(on_message_insert_notify)은 이 INSERT에서 그대로 작동한다.
  -- 비로그인은 IP 기준으로 제한된다.
  insert into public.messages (conversation_id, sender_id, content, commission_id)
  values (v_conv, null, v_msg, p_commission_id);

  return json_build_object(
    'ok', true, 'conversation_id', v_conv, 'code', v_code,
    'guest_name', left(v_name, 20), 'commission_title', v_title);
end $$;

-- (2) 대화 읽기 — 코드가 맞는 방 하나만
create or replace function public.guest_fetch_chat(p_code text, p_after bigint default 0)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare v_conv record; v_msgs json;
begin
  select c.id, c.guest_name, c.commission_id, c.last_message_at,
         p.nickname as artist_nickname, p.avatar_url as artist_avatar
    into v_conv
    from public.conversations c
    left join public.profiles p on p.id = c.user1_id
   where c.guest_code = public.norm_guest_code(p_code);

  if v_conv.id is null then
    return json_build_object('ok', false, 'error', 'no_room');
  end if;

  select coalesce(json_agg(x order by x.id), '[]'::json) into v_msgs
    from (select m.id, m.content, m.image_url, m.commission_id, m.created_at,
                 (m.sender_id is null) as mine   -- 손님 화면에서는 '보낸 사람 없음' = 내 메시지
            from public.messages m
           where m.conversation_id = v_conv.id
             and m.id > coalesce(p_after, 0)
           order by m.id) x;

  return json_build_object('ok', true, 'conversation_id', v_conv.id,
    'guest_name', v_conv.guest_name, 'commission_id', v_conv.commission_id,
    'artist_nickname', v_conv.artist_nickname, 'artist_avatar', v_conv.artist_avatar,
    'messages', v_msgs);
end $$;

-- (3) 보내기
create or replace function public.guest_send_message(p_code text, p_content text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare v_conv bigint; v_cm bigint; v_id bigint;
  v_msg text := btrim(coalesce(p_content, ''));
begin
  if length(v_msg) = 0 then
    return json_build_object('ok', false, 'error', 'empty_message');
  end if;
  if length(v_msg) > 2000 then
    return json_build_object('ok', false, 'error', 'too_long');
  end if;

  select id, commission_id into v_conv, v_cm
    from public.conversations where guest_code = public.norm_guest_code(p_code);
  if v_conv is null then
    return json_build_object('ok', false, 'error', 'no_room');
  end if;

  insert into public.messages (conversation_id, sender_id, content)
  values (v_conv, null, v_msg)
  returning id into v_id;

  update public.conversations set last_message_at = now() where id = v_conv;
  return json_build_object('ok', true, 'message_id', v_id);
end $$;

-- (4) 읽음 처리 — 작가가 보낸 메시지를 읽었다고 표시
create or replace function public.guest_mark_read(p_code text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare v_conv bigint;
begin
  select id into v_conv
    from public.conversations where guest_code = public.norm_guest_code(p_code);
  if v_conv is null then
    return json_build_object('ok', false, 'error', 'no_room');
  end if;
  update public.messages set is_read = true
   where conversation_id = v_conv and sender_id is not null and is_read = false;
  return json_build_object('ok', true);
end $$;


-- ── 5.5 읽음 처리 RPC의 NULL 함정 (2026-08-14 실제로 터진 뒤 추가) ────────
-- 기존 mark_messages_read 는 "내가 안 보낸 메시지"를 이렇게 골랐다:
--    sender_id != auth.uid()
-- 손님 메시지는 sender_id 가 NULL 이라 NULL != uid → NULL(참 아님) → 갱신 안 됨.
-- 작가가 방을 열어 읽어도 손님 메시지가 영영 '안 읽음'으로 남아 배지 1이 안 사라졌다.
-- is distinct from 은 NULL 을 '다른 값'으로 취급하므로 손님 메시지도 잡힌다.
create or replace function public.mark_messages_read(p_conversation_id bigint) returns void as $$
begin
  update public.messages
  set is_read = true
  where conversation_id = p_conversation_id
    and sender_id is distinct from auth.uid()
    and is_read = false;
end;
$$ language plpgsql security definer set search_path = public;


-- ── 6. 실행 권한 ─────────────────────────────────────────────────────────
-- ⚠️ Postgres는 함수를 만들 때 EXECUTE를 PUBLIC에 준다.
--    `revoke from anon` 만으로는 안 막히고 **PUBLIC에서 회수**해야 한다(예전에 겪음).
--    내부용 함수부터 전부 회수한 뒤, 손님이 부를 4개만 다시 연다.
revoke all on function public.gen_guest_code()                                  from public, anon, authenticated;
revoke all on function public.guard_guest_message()                             from public, anon, authenticated;
revoke all on function public.notify_new_message()                              from public, anon, authenticated;
revoke all on function public.guest_start_commission_chat(bigint, text, text)   from public;
revoke all on function public.guest_fetch_chat(text, bigint)                    from public;
revoke all on function public.guest_send_message(text, text)                    from public;
revoke all on function public.guest_mark_read(text)                             from public;

grant execute on function public.norm_guest_code(text)                          to anon, authenticated;
grant execute on function public.guest_start_commission_chat(bigint, text, text) to anon, authenticated;
grant execute on function public.guest_fetch_chat(text, bigint)                 to anon, authenticated;
grant execute on function public.guest_send_message(text, text)                 to anon, authenticated;
grant execute on function public.guest_mark_read(text)                          to anon, authenticated;


-- ── 7. 확인 ──────────────────────────────────────────────────────────────
-- 아래를 실행하면 전부 ✅ 여야 한다.
select '손님 칸 열림'  as 항목,
       case when (select is_nullable from information_schema.columns
                   where table_schema='public' and table_name='conversations' and column_name='user2_id') = 'YES'
             and (select is_nullable from information_schema.columns
                   where table_schema='public' and table_name='messages' and column_name='sender_id') = 'YES'
            then '✅' else '❌' end as 상태
union all
select '코드 유일 인덱스',
       case when to_regclass('public.conversations_guest_code_uniq') is not null then '✅' else '❌' end
union all
select '방 모양 제약',
       case when exists(select 1 from pg_constraint where conname='conversations_guest_shape') then '✅' else '❌' end
union all
select '중복방 인덱스에서 손님방 제외',
       case when exists(select 1 from pg_indexes
                        where schemaname='public' and indexname='conversations_unique_pair'
                          and indexdef ilike '%where%guest_code is null%') then '✅'
            when not exists(select 1 from pg_indexes
                        where schemaname='public' and indexname='conversations_unique_pair') then '— (인덱스 없음)'
            else '❌ 두 번째 문의부터 막힌다' end
union all
select '손님 메시지 가드',
       case when exists(select 1 from pg_trigger where tgname='guard_guest_msg') then '✅' else '❌' end
union all
select '알림 트리거 수정(손님 건너뛰기)',
       case when exists(select 1 from pg_proc p join pg_namespace n on n.oid=p.pronamespace
                        where n.nspname='public' and p.proname='notify_new_message'
                          and p.prosrc like '%recipient_id is null%') then '✅' else '❌' end
union all
select '손님 함수 4개 실행권한',
       case when (select count(*) from pg_proc p join pg_namespace n on n.oid=p.pronamespace
                  where n.nspname='public'
                    and p.proname in ('guest_start_commission_chat','guest_fetch_chat',
                                      'guest_send_message','guest_mark_read')) = 4
            then '✅' else '❌' end
union all
select '표는 여전히 잠겨 있음(손님 직접 접근 불가)',
       case when not exists(
              select 1 from pg_policies
               where schemaname='public' and tablename in ('conversations','messages')
                 and 'anon' = any(roles)) then '✅' else '❌ anon 정책이 생겼다' end;

-- 코드가 잘 만들어지는지 눈으로:
--   select public.gen_guest_code();   -- 실행권한을 회수했으므로 SQL Editor(postgres)에서만 됨


-- ============================================================================
-- 되돌리기 (필요할 때만)
-- ----------------------------------------------------------------------------
-- drop trigger if exists guard_guest_msg on public.messages;
-- drop function if exists public.guard_guest_message();
-- drop function if exists public.guest_start_commission_chat(bigint, text, text);
-- drop function if exists public.guest_fetch_chat(text, bigint);
-- drop function if exists public.guest_send_message(text, text);
-- drop function if exists public.guest_mark_read(text);
-- drop function if exists public.gen_guest_code();
-- drop function if exists public.norm_guest_code(text);
-- alter table public.conversations drop constraint if exists conversations_guest_shape;
-- ⚠️ user2_id/sender_id를 다시 NOT NULL로 되돌리려면 손님방 행을 먼저 지워야 한다:
--   delete from public.conversations where guest_code is not null;
--   alter table public.conversations alter column user2_id set not null;
--   alter table public.messages      alter column sender_id set not null;
-- ⚠️ notify_new_message()는 되돌리지 말 것 — 손님방이 없어도 잘 동작한다.
-- ============================================================================
