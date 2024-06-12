'use client';
import Citymap from "@/componentes/citymap";
import Worldmap from "@/componentes/worldmap";
import CabeceraGame from '@/componentes/CabeceraGame';
import Image from "next/image";
import redirigirLogin from '../../api/redirigirLogin';
var visible = false;

function Game () {
  const auth = cache.get(authenticate);
  redirigirLogin(auth);

  return (
    <div>
      <CabeceraGame />
      ( city ? <Citymap /> : <Worldmap /> );
      <div>
        <Intereraciones />
        <div>
          <img src='carac' onClick='tropas' className='' />
        </div>
      </div>
    </div>
  );
}

export default Game;