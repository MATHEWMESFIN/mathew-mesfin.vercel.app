import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = request.json();
        console.log(body);
        return NextResponse.json({ body });
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
}