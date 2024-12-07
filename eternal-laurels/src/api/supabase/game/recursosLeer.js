import supabase from '../supabase';
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

export default Recursos;