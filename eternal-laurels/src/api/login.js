import { NextResponse } from 'next/server';
import { checkUserPass, checkUser } from './checkUserPass';
import createUser from './createUser';

 async function ingreso () {
  const user = await checkUser(body);
  if(!user) {
    const createdUser = await createUser(body);
    if(createdUser) {
      console.log('Usuario creado exitosamente');
      return NextResponse.redirect(new URL('/game', request.url));
    } else {
      console.error('Hubo un error al crear al usuario');
    }
  } else {
    const isAutheticated = await checkUserPass(body);
    if (isAutheticated) {
      console.log('Usuario verificado');
      return NextResponse.redirect(new URL('/game', request.url));
    } else {
      console.error('Usuario y contraseñas no concidentes')
    }
  }
};

export default ingreso;

