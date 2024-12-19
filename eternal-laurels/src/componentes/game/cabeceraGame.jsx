import Recurso from './recurso'

function CabeceraGame () {
  return (
    <div class='sticky absolute inline-flex h-[6%] w-full top-0 bg-[#6f3125]'>
      <Recurso 
        imagen='./icon/IconComida.png'
        alt='comida'
        valor='1000'
      />
      <Recurso
        imagen='./icon/IconMadera.png'
        alt='madera'
        valor='1000'/>
      <Recurso 
        imagen='./icon/IconPiedra.png'
        alt='piedra'
        valor='1000'/>
      <Recurso
        imagen='./icon/IconPerla.png'
        alt='perlas'
        valor='1000'/>
      <Recurso 
        imagen='./icon/IconOro.png'
        alt='oro'
        valor='1000'/>
      <Recurso 
        imagen='./icon/IconPapiro.png'
        alt='papiro'
        valor='1000'/>
      <Recurso 
        imagen='./icon/IconHierro.png'
        alt='metal'
        valor='1000'/>
    </div>
  );
}

export default CabeceraGame;