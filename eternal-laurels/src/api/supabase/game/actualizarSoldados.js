import supabase from './supabase'

const { error } = await supabase
  .from('tabla')
  .update({ligero: num, pesada, num}