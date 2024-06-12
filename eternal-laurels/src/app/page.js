'use client';

import Image from "next/image";
import Inicio from './Inicio.css';
import Link from 'next/link';
import Login from '../componentes/loginGame/loginGame';
import Idiomas from '@/componentes/loginGame/idiomas';
import Centro from '@/componentes/Centro';

var num = 0;

export default function Home() {
  return (
    /*inicio true => game */
    <main>
      <Idiomas />
      <Login />
      <div className='titulo'>
        <Image
          src='/titu.png'
          alt='Eternal Laurels'
          layout='fill'
        />
      </div>
      <div className='imagenes'>
        <div className='lateral' id='izq'>
          <Image
            src='/tempo.png'
            alt='Lateral'
            layout='fill'
          />
        </div>
        <div className='centro'>
          <div><Centro /></div>
          <div className='flechas'>
            <div className='direc' id='flechaizq'>
              <Image 
                src='/izquierda.png'
                alt='izquierda'
                layout='fill'
                onClick={num = num - 1}/>
            </div>
            <div className='direc' id='flechader'>
              <Image
                src='/derecha.png'
                alt='derecha'
                layout='fill'
                onClick={num = num + 1}
              />
            </div>
          </div>
        </div>
        <div className='lateral' id='der'>
          <Image
            src='/tempo.png'
            alt='Lateral'
            layout='fill'
          />
        </div>
      </div>
      <div className='pie'>
        <nav className='navlogin'>
          <Link href='https://youtu.be/AJMiYFyM4Lg?list=RDov0rdSaEAbE'>Beautiful circle</Link>
          <Link href='https://youtu.be/osbK3oaChQ8?list=PLwt7ThN5Mu1NmPHNwtVjLErJsy5oxfLS0'>Cherish</Link>
          <Link href='https://youtu.be/AJMiYFyM4Lg?list=RDov0rdSaEAbE'>Beautiful circle</Link>
          <Link href='https://youtu.be/oA0CpI0vCK4?list=RDEeF3a4ZtQVs'>Mumei</Link>
        </nav>
      </div>
    </main>
  );
}
