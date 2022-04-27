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
      <Link href={"/"} passHref>
        <Button onClick={() => setIsPermalink(false)} buttonText={"back"} />
      </Link>
    )

  return (
    <Link href={`/${commit.hash}`} passHref>
      <Button onClick={() => setIsPermalink(true)} buttonText={"permalink"} />
    </Link>
  )
}
