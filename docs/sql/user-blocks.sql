-- ============================================================================
-- 사용자 차단
--
-- 뮤트(화면에서 가리기)와 달리 차단은 **서버가 막아야** 한다. 화면에서만 가리면
-- 상대는 여전히 내 글에 댓글을 달고 채팅을 걸 수 있어서, 약속만 하고 지키지 못하는 꼴이 된다.
--
-- ⚠️ 기존 정책(comments_insert_not_banned 등)은 건드리지 않는다.
--    잘 돌아가는 정책을 다시 쓰다가 틀리면 댓글·채팅이 통째로 멈춘다.
--    대신 `as restrictive` 정책을 덧붙인다 — 기존 정책과 AND로 묶여, 기존 조건을 통과해도
--    이 조건에서 걸리면 막힌다. 원래 정책은 그대로 두고 조건만 하나 더 얹는 방식.
--
-- ⚠️ 정책 안에서 user_notes를 직접 조회하면 안 된다. 그 표에도 RLS가 걸려 있어
--    '내 행'만 보이므로, "저 사람이 나를 차단했나"를 확인할 수 없다(항상 0행).
--    그래서 security definer 함수로 우회한다. 다만 **호출자 자신에 관한 것만** 답하게 해서
--    "A가 B를 차단했나?"를 아무나 캐물을 수 없게 막는다.
-- ============================================================================

-- 1) 차단 표시는 뮤트·메모와 같은 행에 둔다(같은 (나, 상대) 쌍에 딸린 값)
alter table public.user_notes add column if not exists blocked boolean not null default false;

-- 2) 판정 함수 — 둘 다 auth.uid()를 기준으로만 답한다

-- "p_owner가 나를 차단했나?" (내가 당한 쪽인지)
create or replace function public.blocked_me(p_owner uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((
    select n.blocked from public.user_notes n
    where n.owner_id = p_owner and n.target_id = auth.uid()
  ), false);
$$;

-- "나와 p_other 사이에 차단이 있나?" (어느 쪽이 걸었든)
create or replace function public.block_between(p_other uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists(
    select 1 from public.user_notes n
    where n.blocked
      and ((n.owner_id = auth.uid() and n.target_id = p_other)
        or (n.owner_id = p_other      and n.target_id = auth.uid()))
  );
$$;

-- ⚠️ `revoke ... from public`만으로는 부족하다(2026-08-11 실측).
--    Supabase는 기본 권한으로 anon·authenticated 역할에 EXECUTE를 **직접** 부여해 두기 때문에,
--    PUBLIC에서만 회수하면 anon은 그대로 호출할 수 있다. 역할별로 명시해서 회수해야 한다.
-- ⚠️ 다만 이건 보안 구멍은 아니다. 두 함수는 auth.uid()를 기준으로만 답하므로
--    익명(auth.uid() = null)이 불러도 항상 false다. 정리 차원의 조치다.
revoke execute on function public.blocked_me(uuid)    from public, anon;
revoke execute on function public.block_between(uuid) from public, anon;
grant  execute on function public.blocked_me(uuid)    to authenticated;
grant  execute on function public.block_between(uuid) to authenticated;

-- 3) 덧붙이는 차단 검사 (기존 정책은 그대로 둔 채 AND 조건만 추가)

-- 댓글: 글쓴이가 나를 차단했으면 못 단다
drop policy if exists comments_block_guard on public.comments;
create policy comments_block_guard on public.comments
  as restrictive for insert
  with check (
    not public.blocked_me((select p.author_id from public.posts p where p.id = post_id))
  );

-- 채팅방 만들기: 둘 사이에 차단이 있으면 못 만든다
drop policy if exists conversations_block_guard on public.conversations;
create policy conversations_block_guard on public.conversations
  as restrictive for insert
  with check (
    not public.block_between(case when auth.uid() = user1_id then user2_id else user1_id end)
  );

-- 메시지 보내기: 상대와 차단 관계면 못 보낸다(이미 있던 방이어도)
drop policy if exists messages_block_guard on public.messages;
create policy messages_block_guard on public.messages
  as restrictive for insert
  with check (
    not exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and public.block_between(case when auth.uid() = c.user1_id then c.user2_id else c.user1_id end)
    )
  );

-- 팔로우: 상대가 나를 차단했으면 못 한다
drop policy if exists follows_block_guard on public.follows;
create policy follows_block_guard on public.follows
  as restrictive for insert
  with check ( not public.blocked_me(followee_id) );

-- 확인용
-- select tablename, policyname, permissive, cmd from pg_policies
--  where policyname like '%block_guard%' order by tablename;
