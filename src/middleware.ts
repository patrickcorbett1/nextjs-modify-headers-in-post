import { NextMiddleware, NextResponse } from "next/server";

export const middleware: NextMiddleware = (req) => {
  if (req.method === "POST" && req.url.includes("post-failure")) {
    const headers = new Headers(req.headers);
    headers.set("hello", "world");
    return NextResponse.next({
        request: {
        headers: headers,
        },
    });
  }
  return NextResponse.next();
}