let crypto;

try {
  crypto = require('node:crypto');
} catch (err) {
  console.error('crypto support is disable');
}
//crear claves de cifrado y descifrado

const { publicKey, privateKey } = crypto.generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  }
});

//funciones para cifrar y decifrar

function encryptMessage(message, publicKey) {
  const encryptMessage = crypto.publicEncrypt(publicKey, Buffer.from(message));
  return encryptMessage;
}

function decryptMessage(encryptMessage, privateKey) {
  const decryptedMessage = crypto.privateDecrypt(privateKey, encryptMessage);
  return decryptMessage.toString();
}

export  { encryptMessage, decryptMessage };