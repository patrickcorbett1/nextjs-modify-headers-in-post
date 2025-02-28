import { NextRequest, NextResponse } from "next/server"

export async function processRequest(req: NextRequest) {
    console.log("POST request received")
    const body = await req.json()
    console.log("Body parsed")
    console.log(JSON.stringify(body, null, 2))
    console.log("Finished processing")
    return NextResponse.json({ message: "Processed request" });
}