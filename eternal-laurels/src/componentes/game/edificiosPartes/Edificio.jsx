function Edificio ({ isOpen, onClose, children }) {
  return (
    <dialog open={isOpen} onClose={onClose}>
      <div class=''>
        {children.informacion}
        {children.accion}
      </div>
    </dialog>
  );
}
  
export default Edificio;