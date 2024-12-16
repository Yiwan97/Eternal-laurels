import Image from 'next/image';
const General = (props) => {
  return (
    <div></div>
  );
}

export default General;

<div name="general" class="h-[100vh] w-full bg-orange-600">
  <div name="edificio" class="relative left-[30%] top-[6%] h-[90%] w-[50%] overflow-auto bg-[#00ff00]">
    <div name="cerrar" class="absolute left-[94%] w-[6%] top-0 h-[5%] bg-[#e2ec4c] text-center hover:bg-[#ff0000]">
      <buttom class="left-0 w-[4%]">X</buttom>
    </div>
    <div class='relative border w-full h-[30%] top-[6%] inline-flex'>
      <div class='absolute bg-[#aaaa00] w-[25%] h-[50%] top-[10%] left-[3%]'>
      </div>
      <h2 class='absolute left-[32%] top-[3%]'>Edificio</h2>
      <p class='absolute left-[32%] top-[22%]'>hay que disparate se mato un tomate, quieren que les cuente se arrojo a la fuente</p>
      <div class='absolute inline-flex w-full text-center h-[16%] left-0 top-[84%]'>
        <div class='w-[26%] bg-[#ff0000] inline-flex'>
          <div class='bg-[#0000ff] w-[24px] h-[24px] bottom-0'>
          </div>
          <p>123456</p>
        </div>
        <div class='w-[26%] bg-slate-600'></div>
        <div class='w-[26%] bg-orange-700'></div>
        <button class='w-[22%] bg-lime-600'>Mejorar</button>
      </div>
    </div>
    
  </div>
</div>
