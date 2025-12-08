import { CommitDisplay } from "@/components/commit-display"
import { getCommitMessage } from "@/lib/commit/get-commit-message"
import { extractDomain } from "@/lib/domain"
import { env } from "@/lib/env"

export default function Home() {
	const commitMessage = getCommitMessage()
	const commitUrl = extractDomain(env.NEXT_PUBLIC_APP_URL)
	const commitUrlMessage = `git commit -m "$(curl -sL ${commitUrl})"`

	return (
		<CommitDisplay
			initialCommitMessage={commitMessage}
			commitUrlMessage={commitUrlMessage}
		/>
	)
}
