//Creacion con PIXI JS
import * as Pixi from 'pixi.js';

const app = new Pixi.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

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