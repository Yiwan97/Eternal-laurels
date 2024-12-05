function Reportar(props) {
  const [num, setNum] = useState(0);
  const [razonReporte, setRazonReporte] = useState('');
  const [respuestas, setRespuestas] = useState({});

  const handleRazonSeleccionada = (nuevaRazon) => {
    setNum(nuevaRazon);
    setRazonReporte(nuevaRazon);
  };

  const handleRespuestaCambio = (pregunta, valor) => {
    setRespuestas({ ...respuestas, [pregunta]: valor });
  };

  const enviarReporte = () => {
    // Enviar datos del reporte al servidor (incluyendo razonReporte y respuestas)
    console.log('Reporte enviado: ', razonReporte, respuestas);
  };

  // ... (renderizado condicional similar al código original)

  return (
    <div>
      {/* ... (renderizado de botones para seleccionar razón de reporte) */}

      {num > 0 && (
        <div>
          <p>Pregunta y respuestas de seguimiento</p>
          {/* ... (renderizado de preguntas y respuestas según razónReporte) */}
          <button onClick={enviarReporte}>Enviar Reporte</button>
        </div>
      )}
    </div>
  );
}