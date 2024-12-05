import Image from 'next/image';
import '/interaciones.css';

function Intereraciones(visible) {
  if(visible) {
    return (
      <div className='componente'>
        <div className='barra' id='primera'>
          <div className='vista'>
            <Image 
              src='ocultar.png'
              alt='ocultar'
              layout='fill'
              onClick={visible=false}
              />
          </div>
        </div>
        <div className='barra' id='segunda'>
          <div className='inte' id='ciencia'>
            <Image 
              src='ciencia.png'
              alt='ciencia'
              layout='fill'
              onclick={() => <Ciencia />}
            />
          </div>
          <div className='inte' id='militar'>
            <Image 
              src='militar.png'
              alt='militar'
              layout='fill'
              onclick={<Militar />}
            />
          </div>
          <div className='inte' id='naval'>
            <Image
              src='naval.png'
              alt='naval'
              layout='fill'
              onclick={<Naval />} 
            />
          </div>
          <div className='inte' id='labor'>
            <Image
              src='labor.png'
              alt='trabajadores'
              layout='fill'
              onclick={<Trabajadores />}
            />
          </div>
          <div className='inte' id='comercio'>
            <Image
              src='comercio.png'
              alt='comercio'
              layout='fill'
              onclick={<Comercio />}
            />
          </div>
          <div className='inte' id='diplomacia'>
            <Image
              src='diplomacia.png'
              alt='diplomacia'
              layout='fill'
              onclick={<Diplomacia />}
            />
          </div>
          <div className='inte' id='premium'>
            <Image
              src='premium.png'
              alt='premium'
              layout='fill'
              onclick={<Premium />}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='barra'>
        <div className='vista'>
          <Image 
            src='mostrar.png'
            alt='mostrar'
            layout='fill'
            onClick={visible=true}/>
        </div>
      </div>
    );
  }
}

export default Intereraciones;