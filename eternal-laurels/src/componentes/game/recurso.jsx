import Image from 'next/image';

function Recurso (props) {
  return (
    <div class='relative top-0 h-full w-[calc(100%/7)] bg-[#6f3125]'>
      <div class='absolute w-[5vh] h-[5vh] top-[2%] left-[4%] bg-[#b48c3c]'>
        <Image
          src={`/${props.imagen}`}
          alt={props.alt}
          fill='fill'
        /></div>
      <p class='absolute left-[40%]'>{props.valor}</p>
    </div>
  );
}

export default Recurso