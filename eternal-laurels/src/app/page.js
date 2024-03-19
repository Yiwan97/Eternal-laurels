'use client';

import Image from "next/image";
import Inicio from './Inicio.css';
import Link from 'next/link';
import Login from '../componentes/cabeceraGame';

export default function Home() {
  return (
    <main>
      <div className='copa'>
        <Login />
      </div>
      <div className='titulo'>
        <h4>Imagen con el titulo</h4>
      </div>
      <div className='tronco'>
        <div className='laterales der'><h4>Imagen izquierda</h4></div>
        <div className='centro'><h4>Galeria de imagenes</h4></div>
        <div className='laterales izq'><h4>Imagen derecha</h4></div>
      </div>
      <div className='raiz'>
        <nav className='enlaces'>
          <Link href='https://youtu.be/AJMiYFyM4Lg?list=RDov0rdSaEAbE'>Beautiful circle</Link>
          <Link href='https://youtu.be/AJMiYFyM4Lg?list=RDov0rdSaEAbE'>Beautiful circle</Link>
          <Link href='https://youtu.be/AJMiYFyM4Lg?list=RDov0rdSaEAbE'>Beautiful circle</Link>
          <Link href='https://youtu.be/AJMiYFyM4Lg?list=RDov0rdSaEAbE'>Beautiful circle</Link>
        </nav>
      </div>
    </main>
  );
}
