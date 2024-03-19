import { FormEvent } from 'react';
import { useRouter } from 'next/router';

function Login () {

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const pasword = formData.get('password');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      router.push('/game')
    } else {
      // Notificar error
    }
  }

  return (
    <div>
      <form>
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='Password' required/>
        <button type='submit'>Ingresar</button>
      </form>
      <p>Al ingresar acepta los <a className='Terminos'>Terminos y condiciones</a>.</p>
    </div>
  );
}

export default Login;