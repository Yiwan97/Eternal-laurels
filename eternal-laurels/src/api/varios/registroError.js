function registroError(error) {
  //Obtener informacion relevante
  const timestamp = new Date().toISOString();
  const userAgent = navigator.userAgent;
  const errorInfo = {
    message: error.message,
    stack: error.stack,
    timestamp,
    userAgent
  };
  //Convertit el objeto a string
  const guardar = JSON.stringify(errorInfo, null, 2);
  //Crear un blob con el contenido
  const block = new Blob([guardar], { type: 'text/plain'});
  //Retornar 'block' para guardarlo en la base de datos
  return block;
}

export default registroError;