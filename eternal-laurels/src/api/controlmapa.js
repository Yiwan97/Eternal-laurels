const { Storage } = require('@supabase/storage');
const PNG = require('png-js');
import supabase from './supabase';

const storage = new Storage(supabase);

//descargar la imagen
storage.download('url/de/la/imagen')
  .then(response => {
    const imageData = response.data;
    //Decodificar la imagen
    const png = new PNG();
    png.on('parsed', () => {
      //Modificar la imagen
      //Codificar la imagen modificada
      png.encode((data) => {
        //subir la imagen modificada
        storage.upload('URL/de/la/imagen', data)
          .then(() => {
            console.log('');
          })
          .catch(error => {
            console.error(error);
          });
      });
    });
    png.write(imageData);
  })
  .catch(error => {
    console.error(error);
  });
  