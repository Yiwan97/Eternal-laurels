import Image from 'next/image';

function Funcion(props) {
  const handleClick = (renderizarComponente) => {
    console.log('Have a nice day')
  }
  return (
    <div class='h-full top-0 w-[6%] bg-[#ff0000]'>
      <div class='relative w-[9vh] h-[9vh] left-[4%] top-[1%]'>
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