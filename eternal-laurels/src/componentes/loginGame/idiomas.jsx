import './idiomas.css';

function Idiomas () {
  let selec = localStorage.getItem('len');
  function guardar(idio) {
    localStorage.setItem('len', idio);
  }

  return (
    <div class='idiomas' name='idiomas' id='idiomas'>
      <select class='selector'>
        <option value='arabe'> عربي </option>
        <option value='chino'> 简体中文）</option>
        <option value='castellano'> Español </option>
        <option value='ruso'> Русский </option>
        <option value='frances'> Français </option>
        <option value='ingles'> English </option> 
      </select>
    </div> 
  );
}

export default Idiomas;