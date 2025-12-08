import { NextResponse } from "next/server"
import { getCommitMessage } from "@/lib/commit/get-commit-message"

export const GET = async () => {
	return new NextResponse(getCommitMessage(), { status: 200 })
}
