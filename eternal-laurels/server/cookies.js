import { aplicacion } from "./server";
const cookieParser = require('cookie-parser');

//utiliza la cookie-parser como midddleware
aplicacion.use(cookieParser());

//crear una cookie
aplicacion.get('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'value' , { maxAge: 60000 });
  res.send('Cookie creada');
});

//lee una cookie
aplicacion.get('/get-cookie', (req, res) => {
  const value = req.cookies['myCookie'];
  if (value) {
    res.send('El valor de la cookie es: ${value}')
  } else {
    res.send('No se encontro la cookie');
  }
});

//elimina una cookie
aplicacion.get('/delete-cookie', (req, res) => {
  res.clearCookie('myCookie');
  res.send('Cookie eliminada');
});

