import Image from "next/image";

function CiudadMundo () {
  function vista () {
    if (ciudad) {
      ciudad = false;
    } else {
      ciudad = true
    }
    return ciudad;
  }
  var ciudad = true;
  if (ciudad) {
    return (
      <div class='absolute w-[12.5vh] h-[12.5vh] left-[6%] top-[74%] z-30'>
        <button onClick={vista} class='relative w-full h-full'>
          <Image
            src='/icon/IconMundo.png'
            alt='Mundo'
            fill={true}
          />
        </button>
      </div>
    );
  } else {
    return (
      <div class='absolute w-[12.5vh] h-[12.5vh] left-[6%] top-[74%] z-30'>
        <button onClick={vista} class='relative w-full h-full'>
          <Image
            src='/icon/IconCiudad.png'
            alt='Ciudad'
            fill={true}
          />
        </button>
      </div>
    )
  }
}

export default CiudadMundo;