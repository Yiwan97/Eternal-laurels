import { NextResponse } from 'next/server';
import { authenticate } from 'auth-provider';

export function redirigirLogin(auth) {
  const isAutheticated = authenticate(auth)
  if (!isAutheticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: '/game/:path*'
}