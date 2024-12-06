import supabase from './supabase.js';

async function createUser (body) {
  const { error } = await supabase
    .from('Users')
    .insert({ email: body.email, password: body.password })
  if (error) {
    console.error('err');
    return null
  }
  return true;
}
 export default createUser;