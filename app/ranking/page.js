import PaloApp from '../PaloApp';

export const metadata = {
  title: '포인트 랭킹 · commi',
  description: 'commi에서 이번 주·이번 달 활동 포인트가 높은 회원들을 확인해보세요.',
  openGraph: { title: '포인트 랭킹 · commi' },
};

export default function RankingPage() {
  return <PaloApp variant="page" />;
}
