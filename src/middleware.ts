import { NextResponse, type NextRequest } from 'next/server';

// eslint-disable-next-line unused-imports/no-unused-vars
export async function middleware(request: NextRequest) {
  try {
    const response = NextResponse?.next();

    return response;
  } catch (error) {
    const response = NextResponse?.next();
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!_next/static|_next/image|og-image.jpg|images|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
