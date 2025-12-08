import { messages } from "@/lib/commit/messages"
import { scopes } from "@/lib/commit/scopes"

export const getCommitMessage = () => {
	const randomMessage = messages[Math.floor(Math.random() * messages.length)]
	if (randomMessage.toLowerCase().startsWith("merge")) return randomMessage
	const randomScope = scopes[Math.floor(Math.random() * scopes.length)]
	return `${randomScope}: ${randomMessage}`
}
