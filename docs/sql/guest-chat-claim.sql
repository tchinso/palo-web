-- ============================================================================
-- 손님 문의를 로그인 계정으로 넘겨받기 (2026-08-14)
--
-- 비로그인으로 문의를 보낸 사람이 나중에 로그인하면, 그 방을 자기 계정의
-- 일반 채팅으로 바꿔준다. 그러면 알림도 받고, 코드 없이도 채팅 목록에서 찾을 수 있다.
--
-- ⚠️ 먼저 guest-commission-chat.sql 을 실행해 두어야 한다.
-- ============================================================================

create or replace function public.guest_claim_chat(p_code text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_id bigint; v_owner uuid; v_existing bigint;
begin
  if v_uid is null then
    return json_build_object('ok', false, 'error', 'not_authenticated');
  end if;

  select id, user1_id into v_id, v_owner
    from public.conversations
   where guest_code = public.norm_guest_code(p_code);
  if v_id is null then
    return json_build_object('ok', false, 'error', 'no_room');
  end if;

  -- 작가 본인이 자기 문의방을 가져가면 user1_id = user2_id 가 되어
  -- conversations_distinct_users CHECK에 걸린다. 애초에 말이 안 되는 요청이므로 막는다.
  if v_owner = v_uid then
    return json_build_object('ok', false, 'error', 'own_room');
  end if;

  -- 이미 이 작가와 일반 대화방이 있으면 그쪽으로 합친다.
  -- ⚠️ 합치지 않고 그냥 user2_id만 채우면 conversations_unique_pair
  --    (LEAST/GREATEST 한 쌍당 하나)에 걸려 실패한다.
  select id into v_existing
    from public.conversations
   where guest_code is null
     and ((user1_id = v_owner and user2_id = v_uid)
       or (user1_id = v_uid   and user2_id = v_owner))
   limit 1;

  if v_existing is not null then
    -- ⚠️ 메시지를 먼저 옮기고 방을 지운다(방을 먼저 지우면 cascade로 메시지까지 사라진다)
    update public.messages
       set conversation_id = v_existing,
           sender_id = coalesce(sender_id, v_uid)   -- 손님으로 보낸 것은 이제 이 사람이 보낸 것
     where conversation_id = v_id;
    update public.conversations set last_message_at = now() where id = v_existing;
    delete from public.conversations where id = v_id;
    return json_build_object('ok', true, 'conversation_id', v_existing, 'merged', true);
  end if;

  -- 합칠 방이 없으면 이 방을 그대로 일반 방으로 바꾼다.
  -- 순서 주의: 메시지의 보낸 사람을 먼저 채우고, 그다음 방의 모양을 바꾼다.
  update public.messages set sender_id = v_uid
   where conversation_id = v_id and sender_id is null;

  update public.conversations
     set user2_id = v_uid, guest_code = null, guest_name = null
   where id = v_id;

  return json_build_object('ok', true, 'conversation_id', v_id, 'merged', false);
end $$;

-- 로그인한 사람만 부를 수 있다(손님이 부를 일이 없다).
-- ⚠️ 함수를 만들면 EXECUTE가 PUBLIC에 붙으므로 PUBLIC에서 회수해야 한다.
revoke all on function public.guest_claim_chat(text) from public, anon;
grant execute on function public.guest_claim_chat(text) to authenticated;


-- ── 확인 ─────────────────────────────────────────────────────────────────
select '넘겨받기 함수' as 항목,
       case when exists(select 1 from pg_proc p join pg_namespace n on n.oid=p.pronamespace
                        where n.nspname='public' and p.proname='guest_claim_chat')
            then '✅' else '❌' end as 상태
union all
select '로그인 사용자만 실행 가능',
       case when     has_function_privilege('authenticated','public.guest_claim_chat(text)','EXECUTE')
                 and not has_function_privilege('anon','public.guest_claim_chat(text)','EXECUTE')
            then '✅' else '❌' end;
