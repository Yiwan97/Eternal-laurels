import Barra from '@/componentes/foro/barra';
import Lateral from '@/componentes/foro/lateral';
import Footer from '@/componentes/home/footer';

function ForoLayout({ children }) {
  return (
    <div class='w-full h-full absolute top-0 left-0'>
      <Barra />
      {children}
      <Lateral />
      <Footer />
    </div>
  );
}

export default ForoLayout;