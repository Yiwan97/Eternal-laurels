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
      <div class='relative left-0 top-0 h-[20%] w-full bg-gradient-to-b from-[80%] from-[#ff0000] to-[#0000ff]'>
        <Idiomas />
        <Login />
      </div>
      <div className=''>
        <Image
          src='/Titulo.png'
          alt='Eternal Laurels'
          width={1300}
          height={500}
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
