"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
	const { username, password } = await request.json();

	if (username === process.env.ADMIN_ACCESS_USERNAME && password === process.env.ADMIN_ACCESS_PASSWORD) {
		// Set a cookie to hide the banner
		cookies().set("authorizedUserToken", (username + password).split("").reverse().join(""), {
			httpOnly: true,
			secure: process.env.NODE_ENV !== "development",
			maxAge: 60 * 60,
			sameSite: "strict",
			path: "/",
		});
		return NextResponse.json({ success: true }, { status: 200 });
	} else {
		return NextResponse.json({ success: false }, { status: 401 });
	}
}
