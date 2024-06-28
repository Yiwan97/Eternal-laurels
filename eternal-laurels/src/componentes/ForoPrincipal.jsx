'use client'
const eye = localStorage(eye);
const autorizacionUser = localStorage(autoridad);
function foroPrincipal (eye) {
  switch (eye) {
    case ('default') : return (
      <Ultimos />
    );
    break;
    case ('lectura') : return (
      <Post />
    );
    break;
    case ('crear') : 
      if (!user) {
        return (message ('Por favor registrate o inicia sesion para crear contenido'));
      } else {
        return (
          <Editor />
        );
      }
    break;
    case ('editar') :
      if (!user) {
        return (message ('Por favor registrate o inicia sesion para crear contenido'));
      } else {
        if(userPost == idUser) {
          return (
            <Editor />
          );
        } 
      }
  }
}

export default foroPrincipal;