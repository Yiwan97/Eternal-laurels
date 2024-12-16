import Recurso from './recurso'

function CabeceraGame () {
  cache.get()
  return (
    <div class='inline-flex h-[6%] w-full top-0'>
      <Recurso 
        imagen='./icon/IconComida.png'
        alt='comida'
        valor='1000'
      />
      <Recurso
        imagen='./icon/IconMadera'
        alt='madera'
        valor='1000'/>
      <Recurso 
        imagen='./icon/IconPiedra'
        alt='piedra'
        valor='1000'/>
      <Recurso
        imagen='./icon/IconPerla'
        alt='perlas'
        valor='1000'/>
      <Recurso 
        imagen='./icon/IconOro'
        alt='oro'
        valor='1000'/>
      <Recurso 
        imagen='./icon/Papiros'
        alt='papiro'
        valor='1000'/>
      <Recurso 
        imagen='./icon/Metal'
        alt='metal'
        valor='1000'/>
    </div>
  );
}

export default CabeceraGame;