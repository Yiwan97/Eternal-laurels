import supabase from './supabase.js';

async function checkUser (body) {
  const { data, error } = await supabase
    .from('tabla')
    .select()
    .eq('email', body.email)
  if (error) {
    console.error('eer');
    return null;
  }
  return true;
}

async function checkUserPass (body) {
  const { data, error } = await supabase
    .from('tabla')
    .select('id')
    .eq('email', body.email)
    .eq('password', body.password);
  if (error) {
    console.error('eer');
    return null;
  }
  const length = data.length > 0;
  return (length, data);
}
export { checkUser, checkUserPass };

