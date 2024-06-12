import Image from 'next/image';
function Centro(num) {
  var imagen = num % 3;
  switch (imagen) {
    case 1: return (<Image src='imagen1.png' alt='' layout='fill'/>);
    break;
    case 2: return (<Image src='imagen2.png' alt='' layout='fill'/>);
    break;
    case 3: return (<Image src='imagen3.png' alt='' layout='fill'/>);
    break;
  }
}

export default Centro;