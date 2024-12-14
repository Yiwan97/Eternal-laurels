//Creacion con PIXI JS
import * as Pixi from 'pixi.js';
import { window } from 'pixi/platform';
//Crear la aplicacion
const app = new Pixi.Application();
//Iniciar la aplicacion
await app.init({ background: '#ffffff', resize: window });
document.body.appendChild(app.canvas);

const loader = Pixi.Loader.shared;
loader.add('hexagon', 'hexagon.png');
loader.load(setup);

function setup() {
  const hexagonTexture = loader.resources['hexagon'].texture;

  //Funcion para crear un hexagono en una posicion dada
  function createHexagon(x, y) {
    const hexagon = new Pixi.Sprite(hexagonTexture);
    hexagon.x = x;
    hexagon.y = y;
    app.stage.addChild(hexagon);
  }

  //Ejemplo de creaciion de una fila de hexagonos
  const spacing = 79;
  for (let i = 0; i < 10; i++) {
    createHexagon(i * spacing, 0);
  }
}

export default setup;

//Buscar sobre pool de sprites, PIXI.Container