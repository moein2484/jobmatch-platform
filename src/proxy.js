import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname;

  const publicRoutes = ["/", "/login" , "/register"];

  const isPublicRoute = publicRoutes.includes(pathname);

  // صفحات عمومی
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // صفحات خصوصی بدون Token
  if (!token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};