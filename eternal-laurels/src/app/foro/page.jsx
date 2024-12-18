import ForoLayout from "./layout";

function Foro () {
  return (
    <div class='w-full h-full absolute top-0 left-0'>
      <ForoLayout>
        {children}
      </ForoLayout>
    </div>
  );
}

export default Foro;