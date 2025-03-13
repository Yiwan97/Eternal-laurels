import supabase from './supabase.js'

const { error } = await supabase
  .from('tabla')
  .insert({id: idJ, valor: 1})