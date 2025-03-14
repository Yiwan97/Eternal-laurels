//certificados y key para desarrollo
bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days365 -nodes