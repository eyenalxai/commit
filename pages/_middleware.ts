import { NextRequest, NextResponse } from "next/server"
import { findCommitByHash, getRandomCommit } from "../util/commit"

export async function middleware(req: NextRequest): Promise<void | NextResponse> {
  console.log("Middleware called")
  console.log("Request: ", req)
  console.log("Headers: ", req.headers)

  const userAgent = req.headers.get("user-agent")
  console.log("User-Agent: ", userAgent)

  if (userAgent && userAgent.toLowerCase().includes("curl")) {
    if (req.nextUrl.pathname === "/") return new NextResponse(`${getRandomCommit().message}\n`)

    const commit = findCommitByHash(req.nextUrl.pathname.substring(1))
    if (commit !== undefined) return new NextResponse(`${commit.message}\n`)

    return NextResponse.rewrite("/404")
  }
}
