import Image from 'next/image';

function Funcion(props) {
  const handleClick = (renderizarComponente) => {
    console.log('Have a nice day')
  }
  return (
    <div class='h-full top-0 w-[12.5%]'>
      <div class='relative w-[98%] h-[98%] left-[1%] top-[1%]'>
        <Image
        src={`/${props.imagen}`}
        alt={props.alt}
        fill={true}
        onClick={() => handleClick(props.componentToRender)}
        />
      </div>
    </div>
  );
}
export default Funcion;