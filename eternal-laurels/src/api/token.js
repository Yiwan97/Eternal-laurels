const jwt = require('jsonwebtoken');

//Definir carga util

const payload = {
  userId: user.id,
  email: user.email,
  password: user.password
};

//clave secreta para firmar el token

const secretKey = 'aleatoridad';

//tiempo de duracion del token
const expiresIn = 60 * 60 * 24; //24 horas

// crear el JWT
const token = jwt.sign(payload, secretKey, {expiresIn});