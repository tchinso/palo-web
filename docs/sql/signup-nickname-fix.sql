-- ============================================================
--  소셜 가입이 닉네임 때문에 죽던 문제 수정 (2026-08-09 실사용자 장애)
--
--  무슨 일이었나
--  ─────────────
--  Auth 로그의 500 오류 2건:
--    new row for relation "profiles" violates check constraint "profiles_nickname_format"
--  profiles.nickname 에는 '한글/영문/숫자 2~12자' 체크 제약이 있는데,
--  가입 트리거(handle_new_user)는 SNS 표시 이름에서 특수문자를 걷어낸 결과가
--  **빈 문자열일 때만** '새싹작가'로 대체했다. **1글자가 남는 이름**(예: "서✨" → "서",
--  "J ✨" → "J")이면 1글자짜리 닉네임을 넣다가 제약 위반 → 가입 트랜잭션 전체 롤백 →
--  구글·X 로그인이 마지막 단계에서 실패. (같은 사람은 구글·X 둘 다 같은 이름이라 둘 다 실패)
--
--  고치는 것
--  ─────────
--  ① 2자 미만이면 '새싹작가'로 대체 (빈 문자열만 보던 것을 확장)
--  ② 마지막 안전망: 어떤 이유로든 삽입이 거부되면 무조건 통과하는
--     무작위 닉네임('새싹작가0000'~'새싹작가9999')으로 한 번 더 시도.
--     닉네임 때문에 가입이 죽는 일은 다시 없어야 한다.
--  ③ 밴 회피 방지(banned_email_holds 확인) 로직은 그대로 유지.
--
--  실행: Supabase → SQL Editor 에 통째로 붙여넣고 Run.
-- ============================================================

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  base_nick text; candidate text; suffix int := 0; v_banned boolean := false;
begin
  base_nick := coalesce(new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'full_name', '새싹작가');
  base_nick := regexp_replace(base_nick, '[^가-힣a-zA-Z0-9]', '', 'g');
  -- ⚠️ 핵심 수정: 걷어낸 결과가 1글자면 nickname 형식 제약(2~12자) 위반으로 가입이 통째로 죽었다.
  --    '빈 문자열만' 검사하던 것을 '2자 미만'으로 넓힌다.
  if base_nick is null or length(base_nick) < 2 then base_nick := '새싹작가'; end if;
  base_nick := left(base_nick, 12);
  candidate := base_nick;
  while exists(select 1 from public.profiles where nickname = candidate) loop
    suffix := suffix + 1;
    candidate := left(base_nick, 12 - length(suffix::text)) || suffix::text;
  end loop;

  -- 밴 회피 방지: 제재 상태로 탈퇴한 이메일이면 새 프로필도 밴 상태로 (기존 로직 유지)
  begin
    v_banned := exists(
      select 1 from public.banned_email_holds h
       where h.email_hash = encode(sha256(convert_to(lower(trim(new.email)),'UTF8')),'hex')
         and (h.expires_at is null or h.expires_at > now()));
  exception when others then
    v_banned := false;  -- 밴 확인이 어떤 이유로든 실패해도 가입은 진행돼야 한다
  end;

  -- ⚠️ 마지막 안전망: 형식 위반·중복 경합 등 어떤 이유로든 거부되면
  --    무조건 형식에 맞는 무작위 닉네임으로 한 번 더. (여기까지 실패하면 그때는 드러나게 실패)
  begin
    insert into public.profiles (id, nickname, is_banned) values (new.id, candidate, v_banned);
  exception when others then
    insert into public.profiles (id, nickname, is_banned)
    values (new.id, '새싹작가' || lpad(floor(random()*10000)::text, 4, '0'), v_banned);
  end;
  return new;
end $$;

-- ── 확인: 문제가 됐던 '1글자 이름' 케이스가 이제 통과하는지 논리 검증 ──
-- (실제 가입 없이, 트리거가 만들 닉네임을 같은 규칙으로 계산해 형식 제약과 대조)
with cases(raw) as (values ('서✨'), ('J ✨'), ('★'), ('みむ'), ('멀쩡한이름'), ('Kim')),
calc as (
  select raw,
         case when length(regexp_replace(raw,'[^가-힣a-zA-Z0-9]','','g')) < 2
              then '새싹작가'
              else left(regexp_replace(raw,'[^가-힣a-zA-Z0-9]','','g'),12) end as nick
  from cases
)
select raw as "SNS 표시 이름", nick as "만들어질 닉네임",
       (nick ~ '^[가-힣a-zA-Z0-9]{2,12}$') as "형식 통과"
from calc;
