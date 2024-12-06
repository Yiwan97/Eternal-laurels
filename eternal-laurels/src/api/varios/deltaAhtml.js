const quill = require("quill");

const htmlContent = '<p>Watame no es comida<p>';
const deltaContent = quill.importHTML(htmlContent);

const deltaContenido = {
  ops: [
    { insert: 'Watame no es comida,' },
    { insert: '\n', attributes: { break: 'line' } },
    { insert: 'es watamiga' },
  ]
};

const htmlContenido = quill.exportHTML(deltaContenido);
//la cadena devuelta por quill.exportHTML() puede usarse para mostrar
//el contenido del editor en una pagina web