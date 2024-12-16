import Image from "next/image";

const Entrenar = (props) => {
  return (
    <div class='absolute border w-full h-[25%] top-[10%]'>
      <div class='absolute w-full h-[82%] inline-flex'>
        <div class='relative w-[25%] h-[100%]'>
          <div>
            <Image />
          </div>
          <p class='absolute text-center w-full top-[76%]'>200</p>
        </div>
        <div class='relative'>
          <h3>{props.trabajador}</h3>
          <p>{props.texto}</p>
          <form class=''>
            <input class='absolute w-[60%] top-[75%] left-[5%]' id='rangeWood' type='range' min='0' max='wood' />
            <input class='absolute rounded w-[20%] top-[70%] text-center left-[70%]'type='num' placeholder='0'/>
          </form>
        </div>
      </div>
      <div class='absolute inline-flex bg-[#b67b23e8] w-full h-[18%] top-[82%]'>
        <div name='costoComida' class='absolute w-[15%] left-[5%]'>
          <div>
            <Image />
          </div>
          <p class='text-right'>{props.comida}</p>
        </div>
        <div name='costoMoneda' class='absolute w-[15%] left-[30%]'>
          <div>
            <Image />
          </div>
          <p class='text-right'>{props.moneda}</p>
        </div>
        <div name='Tiempo' class='absolute w-[15%] left-[55%]'>
          <div>
            <Image />
          </div>
          <p class='text-right'>{props.tiempo}</p>
        </div>
        <button class='absolute w-[25%] left-[75%] rounded bg-[#20dd20]'>Confirmar</button>
      </div>
    </div>
  );
}

export default Entrenar;