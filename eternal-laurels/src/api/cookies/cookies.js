//importar modulo
import { cookies } from 'next/headers'

async function borrar (data) {
  await cookies().set('name', 'value', { maxAge: 180000 })
}

function Cache() {
  const cookiesStore = cookies()
  
  cookies().has('idJ') 
  const id = cookiesStore.get('idJ');
  return id;
}

export default Page;

//guardar un valor
localStorage.setItem('idJ', 'data.id');
//acceder a un valor
let id = localStorage.getItem('idJ');
id;
//eliminar un valor
localStorage.removeItem('idJ');