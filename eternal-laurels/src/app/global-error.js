'use client'
import { useEffect } from 'react'
export default function globalError({
error,
reset,
} : {
  error: Error & { digest?: string}}
  reset: () => void
}) {
  useEffect(() => {
    console.error ('guardar error para analisis')
  }, [error]
  return(
    <div>
      <h2>Lo sentimos</h2>
      <p>No pudimos cargar correctamente la pagina, nos darias otro intento</p>
      <button
         onClick = {() => reset()}>
      Si</button>
   </div>
  )
}