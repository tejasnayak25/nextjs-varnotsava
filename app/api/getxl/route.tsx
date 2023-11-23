import { getXL } from "@/lib/gform";
import { NextResponse } from "next/server";

export async function GET() {
    let url = await getXL();

    return NextResponse.json({
        url: url
    });
}