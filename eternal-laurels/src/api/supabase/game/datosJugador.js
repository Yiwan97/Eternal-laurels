import supabase from '../supabase';
const idJ = caches.keys(id);
//new user

async function Recursos (idJ) {
  const { error } = await supabase
    .from('recursos')
    .insert({id: idJ, food: 1500,etc})
  if(error) {
    console.log(error)
  }
}

async function Edificios (idJ) {
  const { error } = await supabase
    .from('edificios')
    .insert({})
  if(error) {
    console.log(error)
  }
}

async function Ejercito (idJ) {
  const { error } = await supabase
    .from('soldados')
    .insert({})
  if (error){
    console.log(error)
  }
}

export async function Investigacion (idJ) {
  const { error } = await supabase 
    .from('ciencia')
    .insert({})
  if(error){
    console.log(error)
  }
}

export async function Workers (idJ) {
  const { error } = await supabase 
    .from('trabajo')
    .insert({})
  if(error){
    console.log(error)
  }
} 