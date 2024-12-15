'use client'
//Creacion del componenten dialog
function Edificio ({ isOpen, onClose, children }) {
  return (
    <dialog open={isOpen} onClose={onClose}>
      {children}
    </dialog>
  );
}

export default Edificio;
//Creacion de componentes intercambiables
const ContenidoA = () => {
  return <p>Contenido del dialogo A</p>
};

const ContenidoB = () => {
  return <p>Contenido del dialogo B</p>
};
//Uso del Componente <dialog> en un componente superior
//import edificio, ContenidoA ContenidoB
const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState(ContenidoA);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleChangeContent = (newContent) => {
    setCurrentContent(newContent);
  };

  return (
    <div>
      
    </div>
  );
}
