import { createClient } from '@/api/supabase';

export default async function Notes() {
  const supabase = createClient();
  const { data } = await supabase.from("notes").select();

  return (
    <pre>
      {JSON.stringify(notes, null, 2)}
    </pre>
  );
}