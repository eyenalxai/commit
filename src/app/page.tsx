import { CopyButton } from "@/components/copy-button"
import { Button } from "@/components/ui/button"
import { getCommitMessage } from "@/lib/commit/get-commit-message"
import { env } from "@/lib/env.mjs"
import { cn } from "@/lib/utils"
import { Copy } from "lucide-react"
import { revalidatePath } from "next/cache"

export default function Home() {
	const commitMessage = getCommitMessage()

	const commitUrl = env.NEXT_PUBLIC_COMMIT_URL
	const commitUrlMessage = `git commit -m "$(curl -sL ${commitUrl})"`

	return (
		<div className={cn("w-full", "space-y-4")}>
			<h1 className={cn("text-lg")}>your random commit message is</h1>
			<div className={cn("h-32", "flex", "justify-start", "items-start")}>
				<h2 className={cn("text-2xl", "font-semibold")}>{commitMessage}</h2>
			</div>
			<div className={cn("flex", "flex-row", "gap-2")}>
				<CopyButton text={commitMessage}>copy</CopyButton>
				<Button
					variant={"outline"}
					onClick={async () => {
						"use server"
						return revalidatePath("/", "page")
					}}
				>
					another
				</Button>
			</div>
			<div className={cn("flex", "flex-col", "gap-y-2")}>
				<p>implement this into your workflow</p>
				<div
					className={cn(
						"w-fit",
						"flex",
						"justify-between",
						"items-center",
						"gap-x-2",
						"px-4",
						"py-2",
						"bg-muted",
						"rounded-md"
					)}
				>
					<code>{commitUrlMessage}</code>
					<CopyButton
						text={commitUrlMessage}
						size={"icon"}
						variant={"ghost"}
						className={cn("hover:bg-background")}
					>
						<Copy />
					</CopyButton>
				</div>
			</div>
		</div>
	)
}
