import PaloApp from '../PaloApp';

// 하단 탭 '채팅'의 주소(/chat). 로그인한 본인만 볼 수 있는 화면이라
// ⚠️ 검색엔진에 올리지 않는다(noindex) — 내용이 없어도 개인 공간의 주소를 색인할 이유가 없다.
export const metadata = {
  title: '채팅 · commi',
  robots: { index: false, follow: false },
};

export default function ChatPage() {
  return <PaloApp variant="page" />;
}
