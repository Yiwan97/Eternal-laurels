import Barra from '@/componentes/Barra';
import Contenido from '@/componentes/Contenido';
import Lateral from '@/componentes/Lateral';
import Pie from '@/componentes/Pie';

function Foro () {
  return (
    <div>
      <Barra />
      <Contenido />
      <Lateral />
      <Pie />
    </div>
  );
}

export default Foro;