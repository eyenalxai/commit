import { getCommitMessage } from "@/lib/commit/get-commit-message"
import { NextResponse } from "next/server"

export const GET = async () => {
	return new NextResponse(getCommitMessage(), { status: 200 })
}
