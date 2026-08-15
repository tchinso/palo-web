import { createClient } from '@supabase/supabase-js';
import PaloApp from '../../PaloApp';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { data: pack } = await supabase
    .from('emoticon_packs')
    .select('title')
    .eq('id', id)
    .single();

  if (!pack) return { title: '이모티콘 · commi' };

  const title = `${pack.title} 이모티콘 · commi`;
  return { title, openGraph: { title } };
}

export default function EmoticonPackPage() {
  return <PaloApp variant="page" />;
}
