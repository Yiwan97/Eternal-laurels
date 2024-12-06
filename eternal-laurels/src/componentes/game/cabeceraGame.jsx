import Image from "next/image";
//import { cookies } from 'next/headers'

const recurso = {
  comida: 1000,
  madera: 1000,
  metal: 1000,
  piedra: 1000,
  caracoles: 1000
}

function CabeceraGame () {
  //const cookieStore = cookies()
  return (
    <div class='inline-flex h-[6%] w-full top-0'>
      <div className='left-auto top-0 h-full w-[14%]'>
          {/*<Image
            src='/iconComida.png'
            alt='comida'
            layout='fill'
          />*/}
          <p>1000</p>
      </div>
      <div className='left-auto top-0 h-full w-[14%]'>
          <Image
            src='/iconMadera.png'
            alt='madera'
            layout='fill'
          />
          <p>1000</p>
      </div>
      <div className='left-auto top-0 h-full w-[14%]'>
          <Image
            src='/iconMetal.png'
            alt='metal'
            layout='fill'
          />
          <p>1000</p>
      </div>
  <div className='left-auto top-0 h-full w-[16%]'>
          <Image
            src='/iconPiedra.png'
            alt='piedra'
            layout='fill'
          />
          <p>{recurso.piedra}</p>
      </div>
      <div className='left-auto top-0 h-full w-[14%]'>
          <Image
            src='/iconCaracoles.png'
            alt='caracoles'
            layout='fill'
          />
          <p>1000</p>
      </div>
      <div className='left-auto top-0 h-full w-[14%]'>
          <Image
            src='/iconCaracoles.png'
            alt='caracoles'
            layout='fill'
          />
          <p>1000</p>
      </div>
      <div className='left-auto top-0 h-full w-[14%]'>
          <Image
            src='/iconCaracoles.png'
            alt='caracoles'
            layout='fill'
          />
          <p>1000</p>
      </div>
    </div>
  );
}

export default CabeceraGame;