import Recurso from './recurso'

//import { cookies } from 'next/headers'

function CabeceraGame () {
  //const cookieStore = cookies()
  return (
    <div class='inline-flex h-[6%] w-full top-0'>
      <Recurso 
        imagen=''
        alt=''
        valor=''
      />
      <Recurso
        imagen=''
        alt=''
        valor=''/>
      <Recurso 
        imagen=''
        alt=''
        valor=''/>
      <Recurso
        imagen=''
        alt=''
        valor=''/>
      <Recurso 
        imagen=''
        alt=''
        valor=''/>
      <Recurso 
        imagen=''
        alt=''
        valor=''/>
      <Recurso 
        imagen=''
        alt=''
        valor=''/>
    </div>
  );
}

export default CabeceraGame;