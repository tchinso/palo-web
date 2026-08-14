import PaloApp from '../PaloApp';

// 하단 탭 '커미션'의 주소(/commission). 이 파일이 없으면 주소창에 직접 치거나
// 링크를 눌러 들어올 때 404가 난다 — 탭 안에서만 갈 수 있는 화면이 되어 버린다.
// 화면 자체는 palo.js가 그린다(getTabFromPath가 이 주소를 보고 목록을 연다).
export const metadata = {
  title: '커미션 · commi',
  description: '그림 커미션을 찾고 신청해보세요 — commi',
  openGraph: {
    title: '커미션 · commi',
    description: '그림 커미션을 찾고 신청해보세요 — commi',
    images: ['/icon-512.png'],
  },
};

export default function CommissionListPage() {
  return <PaloApp variant="page" />;
}
