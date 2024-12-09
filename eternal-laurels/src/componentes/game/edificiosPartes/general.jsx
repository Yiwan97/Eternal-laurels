function General (edificio) {
  return (
    <div>
      <Image
        alt='edificio.name'
        src='/edificio.image'
      />
      <p>{edificio.texto}</p>
      <div></div>
    </div>
  );
}

export default General;