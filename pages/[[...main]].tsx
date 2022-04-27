import { Button } from "../components/button/Button"
import { Commit, findCommitByHash, getRandomCommit } from "../util/commit"
import { useState } from "react"
import { CopyButton } from "../components/button/CopyButton"
import { PermalinkButton } from "../components/button/PermalinkButton"
import { Code } from "../components/Code"
import { Wrapper } from "../components/Wrapper"

interface HomeProps {
  commitInitial: Commit
  isPermalinkInitial: boolean
}

export default function Home({ commitInitial, isPermalinkInitial }: HomeProps) {
  const [commit, setCommit] = useState<Commit>(commitInitial)
  const [isPermalink, setIsPermalink] = useState(isPermalinkInitial)

  return (
    <Wrapper>
      <div className={"container max-w-2xl p-8"}>
        <h1 className={"text-3xl text-gray-800 dark:text-gray-200 mt-12"}>your random commit message is</h1>
        <p className={"text-xl text-gray-800 dark:text-gray-200 mt-12 h-24 flex items-center"}>{commit.message}</p>
        <div className={"flex flex-row gap-2 mt-8"}>
          <CopyButton buttonText={"copy"} textToCopy={commit.message} />
          <PermalinkButton isPermalink={isPermalink} setIsPermalink={setIsPermalink} commit={commit} />
          <Button invisible={isPermalink} onClick={() => setCommit(getRandomCommit)} buttonText={"another"} />
        </div>
        <h2 className={"text-gray-800 dark:text-gray-200 mt-8 mb-2"}>implement this into your workflow</h2>
        <Code isPermalink={isPermalink} commit={commit} />
      </div>
    </Wrapper>
  )
}

interface MainQuery {
  main: Array<string> | string | undefined
}

export const getServerSideProps = async ({ query }: { res: Response; query: MainQuery }) => {
  if (query === undefined || query.main === undefined || query.main[0] === undefined || query.main === "index") {
    return {
      props: {
        commitInitial: getRandomCommit(),
        isPermalinkInitial: false
      }
    }
  }

  const commit = findCommitByHash(query.main[0])

  if (commit === undefined) return { notFound: true }

  return {
    props: {
      commitInitial: commit,
      isPermalinkInitial: true
    }
  }
}
