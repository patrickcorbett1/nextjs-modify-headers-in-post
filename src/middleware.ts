import { NextMiddleware, NextResponse } from "next/server";

export const middleware: NextMiddleware = (req) => {
  if (req.method === "POST" && req.url.includes("post-failure")) {
    console.log("Adding new header to request")
    return NextResponse.next({
        request: {
            headers: new Headers({
              ...req.headers,
              "hello": "world",
            }),
          }
    });
  }      

  return NextResponse.next();
}