-- ============================================================
-- 커미션 커스텀 주소(슬러그) (2026-08-15)
--
-- commi.kr/<원하는이름> 으로 개별 커미션이 열리게 한다.
--
-- ⚠️ 프로필 핸들과 **같은 이름공간을 쓴다** — 둘 다 최상위 한 조각 주소라서,
--    같은 단어를 프로필과 커미션이 따로 가져가면 한쪽이 영영 가려진다(프로필이 먼저 조회됨).
--    그래서 양쪽 RPC가 서로의 표를 교차 검사하고, 동시 선점은 advisory lock 으로 막는다.
--    (교차 unique 인덱스는 표가 달라 불가능 — lock 이 그 빈틈을 메운다)
-- 형식·예약어는 프로필 핸들과 동일: 2~20자 [a-z0-9가-힣][a-z0-9가-힣_-]{1,19}, reserved_handles.
-- ============================================================

-- ── 1. 칼럼 ─────────────────────────────────────────────────
alter table public.commissions add column if not exists slug text;

do $$ begin
  alter table public.commissions add constraint commissions_slug_format
    check (slug is null or slug ~ '^[a-z0-9가-힣][a-z0-9가-힣_-]{1,19}$');
exception when duplicate_object then null; end $$;

create unique index if not exists commissions_slug_unique on public.commissions (lower(slug));

-- ── 2. 커미션 슬러그 설정 RPC ───────────────────────────────
-- 반환: {ok:true, slug:'...'} / {ok:false, reason:'not_authenticated'|'banned'|'not_owner'|'invalid'|'reserved'|'taken'}
-- 빈 값(null·'')을 주면 슬러그를 지운다(기본 /commission/<id> 로 복귀).
create or replace function public.set_commission_slug(p_commission_id bigint, p_slug text)
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
  -- 내 커미션에만 (남의 커미션 주소를 바꾸는 것을 서버에서 막는다)
  if not exists (select 1 from public.commissions where id = p_commission_id and author_id = v_uid) then
    return jsonb_build_object('ok', false, 'reason', 'not_owner');
  end if;

  v_h := lower(btrim(coalesce(p_slug, '')));

  if v_h = '' then
    update public.commissions set slug = null where id = p_commission_id;
    return jsonb_build_object('ok', true, 'slug', null);
  end if;

  if v_h !~ '^[a-z0-9가-힣][a-z0-9가-힣_-]{1,19}$' then
    return jsonb_build_object('ok', false, 'reason', 'invalid');
  end if;
  if exists (select 1 from public.reserved_handles where word = v_h) then
    return jsonb_build_object('ok', false, 'reason', 'reserved');
  end if;

  -- 같은 단어의 동시 선점을 직렬화 — 프로필 핸들 RPC와 같은 키를 쓴다
  perform pg_advisory_xact_lock(hashtext('commi_slug:' || v_h));

  if exists (select 1 from public.profiles where lower(handle) = v_h) then
    return jsonb_build_object('ok', false, 'reason', 'taken');   -- 프로필이 선점
  end if;
  if exists (select 1 from public.commissions where lower(slug) = v_h and id <> p_commission_id) then
    return jsonb_build_object('ok', false, 'reason', 'taken');   -- 다른 커미션이 선점
  end if;

  begin
    update public.commissions set slug = v_h where id = p_commission_id;
  exception when unique_violation then
    return jsonb_build_object('ok', false, 'reason', 'taken');
  end;

  return jsonb_build_object('ok', true, 'slug', v_h);
end $$;

revoke all on function public.set_commission_slug(bigint, text) from public;
grant execute on function public.set_commission_slug(bigint, text) to authenticated;

-- ── 3. 프로필 핸들 RPC 갱신 — 커미션 슬러그 교차 검사 + advisory lock 추가 ──
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

  perform pg_advisory_xact_lock(hashtext('commi_slug:' || v_h));

  if exists (select 1 from public.profiles where lower(handle) = v_h and id <> v_uid) then
    return jsonb_build_object('ok', false, 'reason', 'taken');
  end if;
  if exists (select 1 from public.commissions where lower(slug) = v_h) then
    return jsonb_build_object('ok', false, 'reason', 'taken');   -- 커미션이 선점
  end if;

  begin
    update public.profiles set handle = v_h where id = v_uid;
  exception when unique_violation then
    return jsonb_build_object('ok', false, 'reason', 'taken');
  end;

  return jsonb_build_object('ok', true, 'handle', v_h);
end $$;

-- ── 4. 확인 ─────────────────────────────────────────────────
select case when exists (select 1 from information_schema.columns
                          where table_schema='public' and table_name='commissions' and column_name='slug')
            then '✅ slug 칼럼 있음' else '❌ 칼럼 없음' end as chk
union all
select case when to_regclass('public.commissions_slug_unique') is not null
            then '✅ 고유 인덱스 있음' else '❌ 인덱스 없음' end
union all
select case when to_regprocedure('public.set_commission_slug(bigint, text)') is not null
            then '✅ set_commission_slug() 있음' else '❌ 함수 없음' end
union all
select case when pg_get_functiondef(to_regprocedure('public.set_my_handle(text)')) like '%commissions%'
            then '✅ 핸들 RPC에 교차 검사 반영됨' else '❌ 핸들 RPC 갱신 안 됨' end;
