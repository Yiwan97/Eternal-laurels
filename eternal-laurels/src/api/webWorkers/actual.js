addEventListener('message', function(event) {
  //Recibir datos del hilo principal
  const data = event.data;

  //Procesar los datos y obtener actualizaciones
  const updates = processData(data);

  //Enviar actualizaciones al hilo principal
  postMessage(updates);
});

function processData(data) {
  //Simular la recuperacion de datos de un servidor
  return fetch('')
    .then(response => response.json())
    .then (data => {
      //Procesar los datos JSON y convertirlos en actualizaciones
      return {
        newData: data.newData
      };
    });
}

//Iniciar Web Workers desde el hilo principal

const trabajador = new Worker('nameWorker.js');