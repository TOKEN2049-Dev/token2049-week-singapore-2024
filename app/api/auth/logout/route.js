"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
	cookies().set("authorizedUserToken", "", {
		httpOnly: true,
		secure: process.env.NODE_ENV !== "development",
		expires: new Date(0),
		sameSite: "strict",
		path: "/",
	});
	return NextResponse.json({ success: true }, { status: 200 });
}
