const axios = require('axios');
const https = require('node:https');
const crypto = require('node:')

//Asumir que el archivo esta en un lugar seguro
const ca = fs.readFileSync('prod-ca-2021.crt');

//Proveer al agente del certificado
const httpsAgent = new https.Agent({
    ca,
  });
//Set the custom httpsAgent for the axios instance
 export const aplicacion = axios.create({
  httpsAgent,
});

//uso de aplicacion para realizar un pedido HTTPS
aplicacion.get('https://ejemplo.com')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
