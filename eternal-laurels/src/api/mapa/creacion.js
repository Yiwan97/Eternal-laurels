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
    const hexagon = new Pixi.Sprite
  }
}