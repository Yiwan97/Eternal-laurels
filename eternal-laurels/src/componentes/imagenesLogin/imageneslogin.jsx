import lateral_temporal from '../imagenes/lateral_temporal.png'

function imagenesLogin () {
  return(
    <div>
      <img src={lateral_temporal} class='lateral izq' />
      <div></div>
      <img src={lateral_temporal} class='lateral der' />
    </div>
  );
}

export default imagenesLogin;