function General(edificio) {
  return (
    <div class='absolute h-[25%] inline-flex w-[100%] top-[4%] border'>
      <div class='absolute h-[100%] w-[60%]'>
        <h2 class='absolute left-[8%]'>Edificio</h2>
        <p class='absolute top-[20%] left-[4%]'>Este texto se explica el funcionamiento del "edificio" y por que Kasumi es...</p>
      </div>
      <div class='absolute w-[37%] h-[80%] bg-[#0000ff] left-[63%]'></div>
      <div class='absolute inline-flex w-[37%] h-[20%] left-[63%] bg-[#ffff00] top-[80%]'>
        <div class='absolute h-[90%] left-[5%] top-[5%] w-[40%] bg-[#00ffff]'>
          <img
            class='w-[30%]'
          />
          <p class='text-center'>1200</p>
        </div>
        <div class='absolute h-[90%] left-[55%] top-[5%] w-[40%] bg-[#00ffff]'>
          <img
            class='absolute w-[20%]'
          />
          <p class='text-center'>6565</p>  
        </div>
      </div>
    </div>
  );
}

export default General;