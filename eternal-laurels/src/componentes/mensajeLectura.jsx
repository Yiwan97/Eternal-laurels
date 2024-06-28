'use client';
import 

function mensajeLectura (prop) {
  return (
    <div>
      <p>{prop}</p>
      <p onClick={Reportar(prop)}>reportar</p>
    </div>
  );
}