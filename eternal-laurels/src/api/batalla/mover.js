unidad = [idU,idJ, [x,y]]

function Mover(unidad, idJ, [x,y]) {
  if(unidad.jugador == jugador) {
    if(unidad.posicion == null) {
      if(posicion[1] < 2) {
        return Movimientos;
      } else {
        return MessageEvent('La unidad no se puede mover a esa posicion en este turno')
      }
    } else {
      if(posicion){
        
      }
    }
  } else {
    return MessageEvent('Solo puedes mover tus unidades')
  }
}