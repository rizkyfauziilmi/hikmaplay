import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from './lib/server/auth/auth';
import { PUBLIC_ROUTES, PROTECTED_ROUTES, AUTH_ROUTES } from './lib/constants/route';
import { matchesRouteList } from './lib/helpers/route';

export async function proxy(request: NextRequest) {
  const pathname = new URL(request.url).pathname;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Allow public routes regardless of auth state
  if (matchesRouteList(PUBLIC_ROUTES, pathname)) {
    return NextResponse.next();
  }

  // If user is already authenticated, prevent access to auth routes (e.g. sign-in)
  if (matchesRouteList(AUTH_ROUTES, pathname) && session) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Protect protected routes: redirect unauthenticated users to sign-in
  if (matchesRouteList(PROTECTED_ROUTES, pathname) && !session) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // Default: continue
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/trpc|api/auth|_next/static|_next/image|favicon.ico).*)'],
};
