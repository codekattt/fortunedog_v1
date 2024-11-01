import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();

  if (url.pathname === '/leader' && url.searchParams.get('step') === 'create') {
    url.pathname = '/';
    url.searchParams.delete('step');
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}
