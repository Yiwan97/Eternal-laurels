'use client';
import  React, { useState } from 'react';
import { supabase } from '../../api/supabase';
import './loginGame.css';
//import { encryptMessage } from '@/api/encriptacion';
import Ingreso from '@/api/login'

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
    <div className='cabecera'>
      <form onSubmit={handleSubmit} class='form'>
        <input 
          type='email' 
          name='email' 
          placeholder='exampleEmail@site.com'
          onChange={e => setEmail(e.target.value)}
          class='dat email'
        />
        <input
          type='password'
          name='password'
          placeholder='Your password'
          onChange={p => setPass(p.target.value)}
          class='dat pass'
        />
        <button class='enviar'>Login</button>
      </form>
    </div>
  )
}


export default Login;