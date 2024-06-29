import { NextResponse } from "next/server";
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(NextRequest) {
	const { pathname } = NextRequest.nextUrl;
	const authorizedUserToken = NextRequest.cookies.get("authorizedUserToken");

	if (authorizedUserToken?.value == (process.env.ADMIN_ACCESS_USERNAME + process.env.ADMIN_ACCESS_PASSWORD).split("").reverse().join("")) {
		if (pathname === "/auth") {
			return NextResponse.redirect(new URL("/admin", NextRequest.url));
		}
	} else {
		if (
			pathname.startsWith("/_next") || // exclude Next.js internals
			pathname.startsWith("/api") || //  exclude all API routes
			pathname.startsWith("/static") || // exclude static files
			PUBLIC_FILE.test(pathname) || // exclude all files in the public folder
			pathname === "/auth" // exclude auth page
		) {
			return NextResponse.next();
		} else {
			return NextResponse.redirect(new URL("/auth", NextRequest.url));
		}
	}
}

export const config = {
	matcher: ["/admin", "/auth"],
};
