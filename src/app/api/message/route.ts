import { messages } from "@/lib/messages"
import { scopes } from "@/lib/scopes"
import { NextResponse } from "next/server"

export const GET = async () => {
	const randomMessage = messages[Math.floor(Math.random() * messages.length)]
	const randomScope = scopes[Math.floor(Math.random() * scopes.length)]

	return new NextResponse(`${randomScope}: ${randomMessage}`, { status: 200 })
}
