import Funcion from './funcion';

function Interaciones() {
  return (
    <div class='relative left-[5%] top-[85vh] z-10 inline-flex h-[7%] w-[90%]'>
      <Funcion
        imagen='./icon/IconConocimientos.png'
        alt='ciencia'
        click=''
      />
      <Funcion
        imagen='./icon/IconEspadas.png'
        alt='militar'
        click='2'/>
      <Funcion
        imagen='./icon/IconNaval.png'
        alt='naval'
        click=''
      />
      <Funcion
        imagen='./icon/IconTrabajadores.png'
        alt='trabajadores'
        click='4'/>
      <Funcion
        imagen='./icon/IconConstrucion.png'
        alt='construcion'
        click='5'
      />
      <Funcion
        imagen='./icon/IconComercio.png'
        alt='comercio'
        click='6'/>
      <Funcion
        imagen='./icon/IconDiplomacia.png'
        alt='diplomacia'
        click='7'
      />
      <Funcion
        imagen='./icon/IconEngranaje.png'
        alt='ajustes'
        click='8'/>
    </div>
  );
}


export default Interaciones;