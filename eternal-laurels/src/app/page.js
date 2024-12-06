'use client';

import Image from 'next/image';
import Login from '/componentes/home/loginGame';
import Idiomas from '@/componentes/home/idiomas';
import Centro from '@/componentes/home/centro';
import Lateral from '@/componentes/home/lateral';
import Footer from '@/componentes/home/footer';

var num = 0;

export default function Home() {
  return (
    /*inicio true => game */
    <main class='absolute h-[100vh] w-full'>
      <div class='relative left-0 top-0 h-[20%] w-full'>
        <Idiomas />
        <Login />
      </div>
      <div className='top-auto h-[11%] w-full'>
        <Image
          src='/titu.png'
          alt='Eternal Laurels'
          layout='fill'
        />
      </div>
      <div class='relative left-0 top-auto inline-flex h-[65%] w-full'>
        <Lateral />
        <Centro />
        <Lateral />
      </div>
      <Footer />
    </main>
  );
}
