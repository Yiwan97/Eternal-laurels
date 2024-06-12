import { aplicacion } from "./server";
import Home from '@/app/page';
import Game from '@/app/game/page';
import Foro from '@/app/foro/page';

aplicacion.get('/', function (req, res) {
  res.send(Home);
});

aplicacion.get('/game', function (req, res) {
  if(caches.keys(login)){
    res.send(Game);
  } else {
    res.send(Home);
  }
});

aplicacion.get('/foro', function (req, res) {
  res.send(Foro);
});

