import Image from "next/image";

function Citymap({}){
  setCoordinate = ({
    top: Math.round(top),
    left: Math.round(left)
  });
  var edificios = [ null, 'intendencia']
  return (
    <div class='absolute w-[180%] h-[160%] -left-[30%] -top-[calc(80/3%)]'
    style={{top: `/${coordenadas.top}px`, left: `/${coordenadas.left}px`}}>
      <Image
        src='/./general/ciudad.png'
        alt='fondo'
        layout='fill'
        name='ciudad'
      />
      <map name='ciudad'>
        <area 
          id='1'
          shape='rect'
          coords='0,0,100,100'
          onClick={edificio(edificios[0])}
        >
          <Image 
            src={`/${props.imagen}`}
            fill={true}
          />
        </area>
        <area 
          id='2'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area 
          id='3'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])} 
        />
        <area
          id='4'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area
          id='5'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area 
          id='6'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area 
          id='7'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area 
          id='8'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area 
          id='9'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area
          id='10'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area
          id='11'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area
          id='12'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area
          id='13'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
        <area
          id='14'
          shape='rect'
          coords=''
          class='bg-[url("/img/ejemplo.png")]'
          onClick={edificio(edificios[0])}
        />
      </map>
    </div>
  );
}

export default Citymap;