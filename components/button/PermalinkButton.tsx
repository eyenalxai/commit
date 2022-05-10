import { Button } from "./Button"
import Link from "next/link"
import { Commit } from "../../util/commit"

interface PermalinkButtonProps {
  isPermalink: boolean
  setIsPermalink: (isPermalink: boolean) => void
  commit: Commit
}

export function PermalinkButton({ isPermalink, setIsPermalink, commit }: PermalinkButtonProps) {
  if (isPermalink)
    return (
      <Link href={"https://commit.takx.xyz/0d083cee"} passHref>
        <Button onClick={() => setIsPermalink(false)} buttonText={"back"} />
      </Link>
    )

  return (
    <Link href={`/${commit.hash}`} passHref>
      <Button onClick={() => setIsPermalink(true)} buttonText={"permalink"} />
    </Link>
  )
}
