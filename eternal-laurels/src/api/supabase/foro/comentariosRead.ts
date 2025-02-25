import { db } from database
export async function Comentarios(idPost: number) {
  await db.select().from('comentarios')where(. PostId = idPost)order by fecha
  const comentarios = data.comentarios
  return (
    <div><p>{comentarios}</p></div>
  )
}