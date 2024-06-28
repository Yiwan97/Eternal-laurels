//monitoriar actividad del usuario
let lastActiveTime = Date.now();

document.addEventListener('mousemove', () => {
  lastActiveTime = Date.now();
});

document.addEventListener('keydown', () => {
  lastActiveTime = Date.now();
});

setInterval(() => {
  const inactiveTime = Date.now() - lastActiveTime;
  if (inactiveTime > 60000) {
    // El usuario ha estado inactivo durante 1 minuto
    // Considerar que la sesión ha expirado
  }
}, 1000);

// Enviar una petición AJAX al servidor para verificar la sesión
const xhr = new XMLHttpRequest();
xhr.open('GET', '/verificarSesion');
xhr.onload = function() {
  if (xhr.status === 200) {
    const respuesta = JSON.parse(xhr.responseText);
    if (respuesta.sesionActiva) {
      // La sesión está activa
    } else {
      // La sesión no está activa
    }
  } else {
    // Error al verificar la sesión
  }
};
xhr.send();
