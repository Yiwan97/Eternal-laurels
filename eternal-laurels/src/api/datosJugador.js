import supabase from './supabase';
const idJ = caches.keys(id);

async function Recursos (idJ) {
  const { data, error } = await supabase
    .from('recursos')
    .select()
    .eq('id', idJ);
  if(error) {
    console.log(error)
    Recursos(idJ)
  }
  const recursos = data;
  return recursos;
}

async function Edificios (idJ) {
  const { data, error } = await supabase
    .from('edificios')
    .select()
    .eq('id', idJ);
  if(error) {
    console.log(error)
    Edificios(idJ)
  }
  const edificios = data;
  return edificios;
}

async function Ejercito (idJ) {
  const { data,  error } = await supabase
    .from('soldados')
    .select()
    .eq('id', idJ);
}