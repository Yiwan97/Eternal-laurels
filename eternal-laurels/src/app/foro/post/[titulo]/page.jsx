function Post(props) {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <div>{props.contenido}</div>
      <p>Creado por <a>{props.creador}</a></p>
    </div>
  );
}

export default Post;

return <pre>{JSON.stringify(data, null, 2)}</pre>