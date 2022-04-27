import { Commit } from "../util/commit"

interface CodeProps {
  isPermalink: boolean
  commit: Commit
}

interface CodeWrapperProps {
  code: string
}

function CodeWrapper({ code }: CodeWrapperProps) {
  return <code className={"text-gray-800 dark:text-gray-200"}>{code}</code>
}

export function Code({ isPermalink, commit }: CodeProps) {
  if (isPermalink) return <CodeWrapper code={`git commit -m "$(curl -sL commit.takx.xyz/${commit.hash})"`} />

  return <CodeWrapper code={'git commit -m "$(curl -sL commit.takx.xyz)"'} />
}
