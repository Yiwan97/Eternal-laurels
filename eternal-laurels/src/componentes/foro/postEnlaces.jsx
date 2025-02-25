import { supabase, post } from '@/api/g'
export async function PostEnlaces() {
  const cincoPost = await db.select().from(post).order by(orden)limit(5)
  return (
    <div>
      <div>
        <button onClick={orden=
      </div>
      {cincoPost.map((post) => (
      <Link key={post.id}>
         {post.title}
      </Link>
    </div>
  )
}