function recursosTabla () {
  return (
    <div id='0' style='line-height:13px;' update='true'>
      <table style='width:100%'>
        <tbody>
          <tr>
            <td class='smallFont'>Recurso:</td>
            <td>{$recurso.cant}</td>
          </tr>
          <tr>
            <td class='smallFont'>Trabajadores:</td>
            <td>{$recurso.trab} /h</td>
          </tr>
          <tr>
            <td class='smallFont'>Ciudadanos:</td>
            <td>{$recurso.ciud} /h</td>
          </tr>
          <tr>
            <td class='smallFont'>Prisioneros:</td>
            <td>{$recurso.prisio} /h</td>
          </tr>
          <tr>
            <td class='smallFont'>Recurso:</td>
            <td>{$recurso.cant}</td>
          </tr>
          <tr>
            <td class='smallFont'>Total:</td>
            <td>{$recurso.total} /h</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}