import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Basic Security Headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

// Only run this on specific routes if needed
export const config = {
  matcher: '/:path*',
};