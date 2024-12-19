'use client';
import Citymap from '@/componentes/game/citymap';
import Worldmap from '@/componentes/game/worldmap';
import CabeceraGame from '@/componentes/game/cabeceraGame';
import Interaciones from '@/componentes/game/Interacciones';
import CiudadMundo from '@/componentes/game/ciudadMundo';
import redirigirLogin from '../../api/varios/redirigirLogin';

function Game () {
  return (
    <div class='w-full h-full absolute top-0 left-0'>
      <CabeceraGame />
      <div class='w-full h-[94%] top-auto left-0'>
        <Citymap />  <Worldmap />
        <Interaciones />
        <CiudadMundo />
      </div>
    </div>
  );
}

export default Game;