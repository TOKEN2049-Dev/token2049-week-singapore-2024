import { NextResponse } from "next/server";

export function middleware(request) {
	const response = NextResponse.next();
	const origin = request.headers.get("origin");

	response.headers.set("Access-Control-Allow-Origin", origin || "*");
	response.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
	response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
	response.headers.set("Access-Control-Allow-Credentials", "true");

	// If this is a preflight request, we need to respond with a 204 No Content
	if (request.method === "OPTIONS") {
		return new NextResponse(null, { status: 204 });
	}

	return response;
}
