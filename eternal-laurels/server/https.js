//Creacion de un servidor web HTTPS
const https = require('https');
const fs = require('fs');

//Carga del certificado SSL/TLS
const cert = fs.readFileSync('./cert.pem');
const key = fs.readFileSync('./key.pem');

//Creacion de un servidor HTTPS
const server = https.createServer({
  cert: cert,
  key:  key,
}, (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Finalizado');
});

server.listen(num);