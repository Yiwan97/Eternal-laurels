import supabase from '../supabase';

async function Post({ params: { id } }: { params: { id: string } }) {
  const { data } = await supabase.from('posts').select().match({ id }).single()
  return data;
}

export default Post;