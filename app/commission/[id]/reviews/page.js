import { createClient } from '@supabase/supabase-js';
import PaloApp from '../../../PaloApp';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { data: c } = await supabase
    .from('commissions')
    .select('title')
    .eq('id', id)
    .single();

  if (!c) return { title: '커미션 후기 · commi' };

  const title = `${c.title} 후기 · commi`;
  return {
    title,
    description: `${c.title} 커미션의 후기를 확인해보세요.`,
    openGraph: { title },
  };
}

export default function CommissionReviewsPage() {
  return <PaloApp variant="page" />;
}
