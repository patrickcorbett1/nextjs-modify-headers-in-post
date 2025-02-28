import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers";

export async function processRequest(req: NextRequest) {
    console.log("POST request received")
    const foundHeaders = await headers()
    console.log("Read headers")
    console.log(JSON.stringify(foundHeaders, null, 2))
    const body = await req.json()
    console.log("Body parsed")
    console.log(JSON.stringify(body, null, 2))
    console.log("Finished processing")
    return NextResponse.json({ message: "Processed request" });
}