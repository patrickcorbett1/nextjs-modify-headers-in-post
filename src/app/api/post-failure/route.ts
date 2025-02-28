import { NextRequest } from "next/server";
import { processRequest } from "../process-request";

export async function POST(req: NextRequest) {
    return processRequest(req)
}