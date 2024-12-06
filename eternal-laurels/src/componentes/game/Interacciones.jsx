import Image from 'next/image';

function Interaciones() {
  return (
    <div class='relative left-[5%] top-[85vh] z-10 inline-flex h-[6vh] w-[90%]'>
      <div class='top-0 h-full w-[12.5%]'>
        <Image 
          src='ciencia.png'
          alt='ciencia'
          layout='fill'
          onclick={() => <Ciencia />}
        />
      </div>
      <div class='top-0 h-full w-[12.5%]'>
        <Image 
          src='militar.png'
          alt='militar'
          layout='fill'
          onclick={<Militar />}
        />
        </div>
        <div class='top-0 h-full w-[12.5%]'>
          <Image
            src='naval.png'
            alt='naval'
            layout='fill'
            onclick={<Naval />} 
          />
        </div>
        <div class='top-0 h-full w-[12.5%]'>
          <Image
            src='labor.png'
            alt='trabajadores'
            layout='fill'
            onclick={<Trabajadores />}
          />
          </div>
          <div class='top-0 h-full w-[12.5%]'>
            <Image
              src='comercio.png'
              alt='comercio'
              layout='fill'
              onclick={<Comercio />}
            />
          </div>
          <div class='top-0 h-full w-[12.5%]'>
            <Image
              src='diplomacia.png'
              alt='diplomacia'
              layout='fill'
              onclick={<Diplomacia />}
            />
          </div>
          <div class='top-0 h-full w-[12.5%]'>
            <Image
              src='premium.png'
              alt='premium'
              layout='fill'
              onclick={<Premium />}
            />
          </div>
          <div class='top-0 h-full w-[12.5%]'>
            <Image
              src='ajustes.png'
              alt='ajustes'
              layout='fill'
              onclick={<Ajustes />}
            />
          </div>
    </div>
  );
}


export default Interaciones;