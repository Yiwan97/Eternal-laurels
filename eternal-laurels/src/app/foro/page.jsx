

async function Foro () {
  await postLista()
  if (postLista) {
    return (
      <div class='w-full h-full absolute top-0 left-0'>
        <p key={post.id}>
          <Link href={`/static/${post.titulo}`}>{post.title} publicado por {post.user}</Link>
        </p>
      </div>
    );
  } else {
    return (
      <div>

      </div>
    )
  }

  
}

export default Foro;