'use client';

import Image from "next/image";
import Link from 'next/link';
import Login from '../componentes/loginGame/loginGame';
import Idiomas from '@/componentes/loginGame/idiomas';
import Centro from '@/componentes/centro';
import Lateral from '@/componentes/home/lateral';

var num = 0;

export default function Home() {
  return (
    /*inicio true => game */
    <main class='absolute h-[100vh] w-full'>
      <div class='relative left-0 top-0 h-[20%] w-full'>
        <Idiomas />
        <Login />
      </div>
      <div 
      className='top-auto h-[11%] w-full'>
        <Image
          src='/titu.png'
          alt='Eternal Laurels'
          layout='fill'
        />
      </div>

      <div class='relative left-0 top-auto inline-flex h-[65%] w-full'>
        <Lateral></Lateral>
        <Centro></Centro>
        <Lateral></Lateral>
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
