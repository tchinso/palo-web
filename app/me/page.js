import PaloApp from '../PaloApp';

// 하단 탭 '내 정보'의 주소(/me). 본인 전용 화면이라 ⚠️ noindex.
// (다른 사람의 프로필은 /user/{id}로 따로 있고 그쪽은 색인 대상이다)
export const metadata = {
  title: '내 정보 · commi',
  robots: { index: false, follow: false },
};

export default function MePage() {
  return <PaloApp variant="page" />;
}
