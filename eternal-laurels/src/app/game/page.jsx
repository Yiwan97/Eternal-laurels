'use client';
import Citymap from '@/componentes/citymap';
import Worldmap from '@/componentes/worldmap';
import CabeceraGame from '@/componentes/CabeceraGame';
import redirigirLogin from '../../api/varios/redirigirLogin';


function Game () {
  const auth = cache.get(authenticate);
  redirigirLogin(auth);

  return (
    <div>
      <CabeceraGame />
      <div>
        ( city ? <Citymap /> : <Worldmap /> );
        <Intereraciones />
      </div>
    </div>
  );
}

export default Game;