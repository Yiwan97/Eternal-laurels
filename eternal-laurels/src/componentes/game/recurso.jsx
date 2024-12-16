import Image from 'next/image';

function Recurso (props) {
  return (
    <div class='relative top-0 h-full w-[calc(100%/7)]'>
      <div class='absolute w-[24px] h-[24px] top-[16%] left-[4%]'>
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