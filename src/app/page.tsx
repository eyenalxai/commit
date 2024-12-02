import { Button } from "@/components/ui/button"
import { messages } from "@/lib/messages"
import { scopes } from "@/lib/scopes"
import { cn } from "@/lib/utils"
import { revalidatePath } from "next/cache"

export default function Home() {
	const randomMessage = messages[Math.floor(Math.random() * messages.length)]
	const randomScope = scopes[Math.floor(Math.random() * scopes.length)]
	const commitMessage = `${randomScope}: ${randomMessage}`

	return (
		<div className={cn("w-full", "space-y-4")}>
			<h1 className={cn("text-lg")}>your random commit message is</h1>
			<div className={cn("h-32", "flex", "justify-start", "items-start")}>
				<h2 className={cn("text-2xl", "font-semibold")}>{commitMessage}</h2>
			</div>
			<div className={cn("flex", "flex-row", "gap-2")}>
				<Button>Copy</Button>
				<Button
					variant={"outline"}
					onClick={async () => {
						"use server"
						return revalidatePath("/", "page")
					}}
				>
					Another
				</Button>
			</div>
			<div className={cn("flex", "flex-col", "gap-y-2")}>
				<p>implement this into your workflow</p>
				<code className={cn("p-4", "bg-muted")}>
					git commit -m "$(curl -sL URL)"
				</code>
			</div>
		</div>
	)
}
