import { NextResponse, type NextRequest } from "next/server";
// import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const { pathname } = req.nextUrl;

  if (!token) {
    if (pathname.startsWith("/api/")) {
      // Allow unauthenticated access to login and register APIs
      if (pathname.startsWith("/api/login") || pathname.startsWith("/api/register")) {
        return NextResponse.next();
      }
      return new NextResponse(JSON.stringify({ success: false, message: "Authentication required" }), { status: 401, headers: { "content-type": "application/json" } });
    }
    // Redirect to login for protected pages
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - login
     * - register
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!login|register|_next/static|_next/image|favicon.ico).*)",
  ],
};
