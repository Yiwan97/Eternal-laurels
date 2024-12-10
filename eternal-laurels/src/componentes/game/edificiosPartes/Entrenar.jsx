function Entrenar () {
  return (
    <div name='Educar' class='absolute border w-full h-[25%] top-[10%]'>
      <div class='absolute w-full h-[82%] inline-flex'>
        <div class='relative w-[25%] h-[100%]'>
          <img class='absolute bg-[#ff00ff] w-[80%] h-[70%] top-[5%] left-[10%]'/>
          <p class='absolute text-center w-full top-[76%]'>200</p>
        </div>
        <div class='relative'>
          <h3>Leñador</h3>
          <p>Texto explicando las utilidades de tener Leñadores cualificados</p>
          <form class=''>
            <input class='absolute w-[60%] top-[75%] left-[5%]' id='rangeWood' type='range' min='0' max='wood' />
            <input class='absolute rounded w-[20%] top-[70%] text-center left-[70%]'type='num' placeholder='0'/>
          </form>
        </div>
      </div>
      <div class='absolute inline-flex bg-[#b67b23e8] w-full h-[18%] top-[82%]'>
        <div name='costoComida' class='absolute w-[15%] left-[5%]'>
          <img src='' />
          <p class='text-right'>1290</p>
        </div>
        <div name='costoMoneda' class='absolute w-[15%] left-[30%]'>
          <img src='' />
          <p class='text-right'>8985</p>
        </div>
        <div name='Tiempo' class='absolute w-[15%] left-[55%]'>
          <img src='' />
          <p class='text-right'>00:20</p>
        </div>
        <button class='absolute w-[25%] left-[75%] rounded bg-[#20dd20]'>Comfirmar</button>
      </div>
    </div>
  );
}

export default Entrenar;