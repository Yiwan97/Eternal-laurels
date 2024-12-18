import supabase from "../supabase"

const { data: posts } = await supabase.from('posts').select()