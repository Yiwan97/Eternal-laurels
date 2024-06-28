import Quill from 'quill';

function crearPost(post) {
  const editor = new Quill('#editor', {
    modules: {
      toolbar: [
        {
          name: 'heading',
          icon: 'header',
          buttons: ['h1', 'h2', 'h3'],
        },
        {
          name: 'paragraph',
          icon: 'paragraph',
          buttons: ['p'],
        },
        {
          name: 'list',
          icon: 'list',
          buttons: ['ul', 'ol'],
        },
        {
          name: 'link',
          icon: 'link',
          buttons: ['link'],
        },
        {
          name: 'image',
          icon: 'image',
          buttons: ['image'],
        },
        {
          name: 'clear',
          icon: 'trash',
          buttons: ['clear'],
        },
      ],
    },
  });

  editor.on('change', () => {
    const contenido = editor.getContent();
    document.querySelector('#contenido').textContent = contenido;
  });
  return (
    <div>
      <div id='editor'></div>
      <div id='contenido'></div>
    </div>
  );
}

export default crearPost;
