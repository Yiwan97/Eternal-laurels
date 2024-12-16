function Accion({ isOpen, onClose, children }){
  return (
    <dialog open={isOpen} onClose={onClose}>
      <div class=''>
        {children}
      </div>
    </dialog>
  );
}

export default Accion;