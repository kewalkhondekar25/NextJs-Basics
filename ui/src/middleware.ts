import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: "/query"
  // matcher: ["/meals/:path*", "/task/:path*"]
}