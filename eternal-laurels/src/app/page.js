'use client';

import Image from 'next/image';
import Login from '@/componentes/home/loginGame';
import Idiomas from '@/componentes/home/idiomas';
import Centro from '@/componentes/home/centro';
import Lateral from '@/componentes/home/lateral';
import Footer from '@/componentes/home/footer';

var num = 0;

export default function Home() {
  return (
    /*inicio true => game */
    <main class='absolute h-[100vh] w-full'>
      <div class='relative left-0 top-0 h-[15%] w-full bg-[#6f4a25]'>
        <Idiomas />
        <Login />
      </div>
      <div className='relative w-full h-[20%] top-auto left-0 '>
        <Image
          src='/Titulo.png'
          alt='Eternal Laurels'
          fill={true}
        />
      </div>
      <div class='relative left-0 top-auto inline-flex h-[65%] w-full bg-[#0000ff]'>
        <Lateral />
        <Centro />
        <Lateral />
      </div>
      <Footer />
    </main>
  );
}
