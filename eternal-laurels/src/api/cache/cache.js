//Configuracion del cache en el servisor
app.get('/resource', (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.send('Este recurso se almacenara en cache cinco minutos.');
});

//Uso del cache en el cliente

const response = await fetch('/resource');

if (response.cached) {
  const data = await response.json();
  // ...
} else {
  //El recurso no esta en cache, por lo que se debe descargar
  const data = response.json();
}