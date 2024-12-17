import Image from "next/image";

function Citymap(){
  return (
    <div class='absolute w-[180%] h-[160%] -left-[30%] -top-[calc(80/3%)] overf'>
      <Image
        src='/./general/ciudad.png'
        alt='fondo'
        layout='fill'
        name='ciudad'
      />
      <map name='ciudad'>
        <area 
          id='1'
          shape='poly'
        />
        <area 
          id='2'
          shape='poly'
        />
        <area 
          id='3'
          shape='poly' 
        />
        <area
          id='4'
          shape='poly'
        />
        <area
          id='5'
          shape='poly'
        />
        <area 
          id='6'
          shape='poly'
        />
        <area 
          id='7'
          shape='poly'
        />
        <area 
          id='8'
          shape='poly'
        />
        <area 
          id='9'
          shape='poly'
        />
        <area
          id='10'
          shape='poly'
        />
        <area
          id='11'
          shape='poly'
        />
      </map>
    </div>
  );
}

export default Citymap;