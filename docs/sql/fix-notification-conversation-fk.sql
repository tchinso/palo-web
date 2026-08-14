-- ============================================================================
-- 🔴 알림→대화방 FK가 삭제를 막던 문제 (2026-08-14, 8회차 점검에서 발견)
--
-- notifications.link_conversation_id → conversations 가 NO ACTION 이라,
-- 알림이 가리키는 대화방은 지울 수 없었다. 이것 때문에:
--   ① 회원 탈퇴 실패 — 내 대화방 CASCADE 삭제를 상대방의 채팅 알림이 막음
--   ② 손님 문의 넘겨받기(guest_claim_chat) 병합 실패 — 손님방 삭제를 작가의 문의 알림이 막음
--   ③ 테스트 손님방 정리 SQL도 같은 이유로 실패
--
-- 고치는 방법: FK를 ON DELETE CASCADE 로 — 방이 사라지면 그 방을 가리키는 알림도
-- 함께 사라진다. 갈 곳 없는 알림을 남기면 누를 때 이용규칙 창이 뜨는(예전 버그)
-- 모양이 되므로, 비우는(SET NULL) 것보다 지우는 게 맞다.
-- ⚠️ 제약 이름을 추측하지 않고 카탈로그에서 찾아 바꾼다.
-- ============================================================================

do $$
declare v_name text;
begin
  select conname into v_name
    from pg_constraint
   where conrelid = 'public.notifications'::regclass
     and confrelid = 'public.conversations'::regclass
     and contype = 'f';
  if v_name is null then
    raise notice '해당 FK 없음 — 건너뜀';
    return;
  end if;
  execute format('alter table public.notifications drop constraint %I', v_name);
  execute format(
    'alter table public.notifications add constraint %I '||
    'foreign key (link_conversation_id) references public.conversations(id) on delete cascade',
    v_name);
  raise notice 'FK를 CASCADE로 바꿈: %', v_name;
end $$;

-- ── 넘겨받기 병합 경로 보완 ──────────────────────────────────────────────
-- 병합할 때는 알림을 지우지 말고 **합쳐진 방으로 옮긴다** — 작가의 문의 알림이
-- 계속 유효해야 누르면 (합쳐진) 대화방이 열린다. 옮기지 않으면 위 CASCADE가
-- 방을 지우면서 알림도 같이 지워 버린다.
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

  if v_owner = v_uid then
    return json_build_object('ok', false, 'error', 'own_room');
  end if;

  select id into v_existing
    from public.conversations
   where guest_code is null
     and ((user1_id = v_owner and user2_id = v_uid)
       or (user1_id = v_uid   and user2_id = v_owner))
   limit 1;

  if v_existing is not null then
    -- 순서가 중요: ①알림을 새 방으로 ②메시지를 새 방으로 ③빈 손님방 삭제
    -- (방을 먼저 지우면 CASCADE가 알림을 지우고, 메시지도 같이 사라진다)
    update public.notifications set link_conversation_id = v_existing
     where link_conversation_id = v_id;
    update public.messages
       set conversation_id = v_existing,
           sender_id = coalesce(sender_id, v_uid)
     where conversation_id = v_id;
    update public.conversations set last_message_at = now() where id = v_existing;
    delete from public.conversations where id = v_id;
    return json_build_object('ok', true, 'conversation_id', v_existing, 'merged', true);
  end if;

  update public.messages set sender_id = v_uid
   where conversation_id = v_id and sender_id is null;

  update public.conversations
     set user2_id = v_uid, guest_code = null, guest_name = null
   where id = v_id;

  return json_build_object('ok', true, 'conversation_id', v_id, 'merged', false);
end $$;

revoke all on function public.guest_claim_chat(text) from public, anon;
grant execute on function public.guest_claim_chat(text) to authenticated;

-- ── 테스트 손님방 정리 (이제 CASCADE 덕에 그냥 지워진다) ─────────────────
delete from public.conversations
where guest_code in ('2CQTN9PM2D6J','8MVGW7NTQXGS','TVXZ8JQFNG2Z','7YGXHWFVW7H7');

-- ── 확인 (전부 ✅ 여야 함) ───────────────────────────────────────────────
select 'FK가 CASCADE로 바뀜' as 항목,
       case when exists(select 1 from pg_constraint
                        where conrelid='public.notifications'::regclass
                          and confrelid='public.conversations'::regclass
                          and contype='f' and confdeltype='c')
            then '✅' else '❌' end as 상태
union all
select '넘겨받기 함수에 알림 이전 포함',
       case when exists(select 1 from pg_proc p join pg_namespace n on n.oid=p.pronamespace
                        where n.nspname='public' and p.proname='guest_claim_chat'
                          and p.prosrc like '%link_conversation_id = v_existing%')
            then '✅' else '❌' end
union all
select '테스트 손님방 정리됨',
       case when not exists(select 1 from public.conversations
                            where guest_code in ('2CQTN9PM2D6J','8MVGW7NTQXGS','TVXZ8JQFNG2Z','7YGXHWFVW7H7'))
            then '✅' else '❌' end;
