const jwt = require('jsonwebtoken');
const crypto = require('crypto');

//Definir carga util
/*const datosjugador = {
  userId: user.id,
  email: user.email,
};*/
 
function crearToken(datosjugador) {
  //tiempo de duracion del token 4 horas
  const expiresIn = 60 * 60 * 4;
  //generar clave secreta de 32-byte hex para firmar el token
  const secretKey = crypto.randomBytes(32).toString('hex');
  // crear el JWT
  const token = jwt.sign(datosjugador, secretKey, {expiresIn});
  return token;
}
export default crearToken;

//accesible solo para la ventana actual
sessionStorage.setItem(user, true);
//persistente eliminar luego de x horas
localStorage.setItem(user, true);