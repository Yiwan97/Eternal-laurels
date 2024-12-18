import supabase from "../supabase"

async function postLista() {
  const { data: posts } = await supabase.from('posts').select()
  return posts;
}
 export default postLista