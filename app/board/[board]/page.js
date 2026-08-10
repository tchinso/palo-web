import PaloApp from '../../PaloApp';
import { renderInitialFeed } from '../../../lib/feed-ssr';

// ⚠️ 19+ 게시판(adult)은 **일부러 넣지 않았다.**
//    여기 이름이 있으면 /board/adult 응답의 <title>·description·OG에 그 이름이 실려 나가고,
//    로그인하지 않은 크롤러·광고 심사 봇이 그것만 보고 사이트를 성인 업종으로 분류한다
//    (2026-08-10 틱톡 광고 거부. 그때 실측: 그 이름이 응답에 12번 등장).
//    이름이 없으면 아래에서 사이트 공통 제목으로 떨어지고 글 목록도 서버에서 그리지 않는다
//    (renderInitialFeed도 SSR_SKIP으로 한 번 더 막는다 — 이중 방어).
//    실제 접근 제어는 palo.js가 로그인·연령 확인 여부를 보고 처리한다.
const BOARD_NAMES = {
  talk: '수다', doodle: '낙서', wip: '작업물', sketch: '그림공부',
  ask: '질문/시세문의', vote: '투표/수요조사', crit: '피드백 요청',
  collab: '협업/팀원모집', challenge: '챌린지', tip: '자료/TIP',
  request: '리퀘스트', recruit: '구인', used: '중고',
  suggest: '버그·건의사항', ilchim: '일침',
};

// 홈과 마찬가지로 글 목록을 서버에서 미리 그려 보낸다(첫 방문에 빈 화면이 안 보이게).
export const revalidate = 30;

export async function generateMetadata({ params }) {
  const { board } = await params;
  const name = BOARD_NAMES[board];
  if (!name) {
    return { title: 'commi · 그림 그리는 사람들의 커뮤니티' };
  }
  const title = `${name} · commi`;
  const description = `commi의 ${name} 게시판 — 그림 그리는 사람들의 커뮤니티`;
  return { title, description, openGraph: { title, description, images: ['/icon-512.png'] } };
}

export default async function BoardPage({ params }) {
  const { board } = await params;
  const initialFeed = BOARD_NAMES[board] ? await renderInitialFeed(board) : null;
  return <PaloApp initialFeed={initialFeed} />;
}
