import Barra from '@/componentes/foro/barra';
import Contenido from '@/componentes/foro/contenido';
import Lateral from '@/componentes/foro/lateral';
import Footer from '@/componentes/home/footer';

function Foro () {
  return (
    <div>
      <Barra />
      <Contenido />
      <Lateral />
      <Footer />
    </div>
  );
}

export default Foro;