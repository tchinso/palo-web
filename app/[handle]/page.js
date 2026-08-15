// 프로필 커스텀 주소 — commi.kr/<핸들> (2026-08-15)
//
// ⚠️ 최상위 동적 세그먼트라 **다른 정적 라우트에 안 잡힌 모든 한 조각 주소**가 여기로 온다
//    (/commission 같은 기존 라우트가 항상 먼저다 — Next가 정적 라우트를 우선한다).
//    핸들이 아니면(오타·없는 주소) 굳이 404를 던지지 않고 앱 셸을 그대로 내보낸다 —
//    palo.js가 핸들 조회에 실패하면 홈으로 안내한다(SPA라 어차피 화면은 클라이언트 소관).
import { createClient } from '@supabase/supabase-js';
import PaloApp from '../PaloApp';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function generateMetadata({ params }) {
  const { handle } = await params;
  let decoded = '';
  try { decoded = decodeURIComponent(handle).toLowerCase(); } catch (e) { /* 잘못된 인코딩 → 기본 제목 */ }

  if (decoded) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('nickname, handle')
      .eq('handle', decoded)
      .single();
    if (profile) {
      const title = `${profile.nickname}님의 프로필 · commi`;
      return {
        title,
        openGraph: { title },
        // 핸들 주소가 정식 주소다 — /user/<uuid>와 내용이 같으므로 검색엔진에 하나로 알린다
        alternates: { canonical: `https://commi.kr/${profile.handle}` },
      };
    }
  }
  return { title: 'commi · 그림 그리는 사람들의 커뮤니티' };
}

export default function HandleProfilePage() {
  return <PaloApp variant="page" />;
}
