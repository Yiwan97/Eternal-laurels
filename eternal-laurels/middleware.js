import { NextResponse } from 'next/server';
let locales = ['en-US', 'es-ES']
function getLocale(request){

export function middleware(request) {
  const currentUser = request.cookies.get('currentUser')?.value;

  if (currentUser && !request.nextUrl.pathname.starstWith('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}