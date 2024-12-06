'use client';
import  React, { useState } from 'react';
import { supabase } from '../../api/supabase/supabase';
import './loginGame.css';
//import { encryptMessage } from '@/api/encriptacion';
import Ingreso from '@/api/supabase/login'

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleCleanInput = (value) => {
    return Limpieza(value);
  }
  //const encriptacion = (value) => {
  //  return encryptMessage(value);
  //}
  const body = {
    emailEn: email,
    passEn: pass
  };
  //la funcion recibe un objeto de evento (e) como parametro
   //se evita la recarga de la pagina completa e.preventDefault()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/ingreso', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'aplication/json' },
      });
      if (!response.ok) {
        //manejar errores basados en response estado codigo
        console.error('Error:', await response.text());
      } else {
        console.log('Ingreso exitoso');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className=''>
      <form 
      onSubmit={handleSubmit} 
      class='absolute left-0 top-10 h-4/6 w-full'>
        <input 
          type='email' 
          name='email' 
          placeholder='exampleEmail@site.com'
          onChange={e => setEmail(e.target.value)}
          class='relative left-8 rounded-md border border-black text-center'
        />
        <input
          type='password'
          name='password'
          placeholder='Your password'
          onChange={p => setPass(p.target.value)}
          class='relative left-20 rounded-md border border-black text-center'
        />
        <button class='relative left-32 rounded-md border border-black text-center h-6 w-36 bg-green-600'>Ingresar</button>
        <button class='relative left-44 rounded-md border border-black text-center h-6 w-36 bg-green-600'>Registrarse</button>
        <p class="relative top-3 text-center">Al hacer click en 'Login' aceptas los <a href="https://www.youtube.com/watch?v=kLzICexlPzU">Terminos & Condiciones</a>.</p>
      </form>
    </div>
  )
}


export default Login;