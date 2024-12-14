function Barra() {
  return (
    <div class='absolute h-[13%] w-full bg-gradient-to-br from-[#0000ff] to-[#ff0000]'>
      <form class='relative left-[10%] top-[34%] h-[40%]'>
        <input type='search' 
          class='w-[50%] h-full text-center rounded-md'
          placeholder='Busca publicaciones o Usuarios' />
      </form>
    </div>
  );
}

export default Barra;