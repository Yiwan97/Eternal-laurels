'use client'
import userLogeado from '@/api/auth'
const login = CacheStorage.has(user);

function UserForo (login) {
  if(user){
    return (
      <div>
        <form>
          
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <button>Crear Post</button>
        <button>Mis Post</button>
        <button>Editar perfil</button>
      </div>
    );
  }
}
export default UserForo;