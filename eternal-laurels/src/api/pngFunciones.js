const png = require('png-js');

//Carga una imagen png desde una ruta de archivo, URL o bufer
png.load(recurso);

//Recupera los valores de color (R,G,B,A) de un pixel en las coordenadas (x, y)
pngInstance.getPixel(x, y);

//Establece los valores de color en (R,G,B,A) de un pixel en las coordenadas (x, y)
pngInstance.setPixel(x, y, color);

//Aplica una funcion de filtro a cada pixel de la imagen,
//modificando sus valores de color en el lugar
pngInstance.filter(FuncionFiltro);

//Codifica un PNG objeto en un bufer de datos PNG
PNG.encode(pngInstance);

//Guarda un PNG objeto en una ruta de archivo especificada
PNG.save(pngInstance, rutaArchivo);
