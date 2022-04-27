import { messages } from "./messages"
import sha512 from "crypto-js/sha512"

export interface Commit {
  message: string
  hash: string
}

export const commits: Commit[] = messages.map((commitMessage: string) => {
  return {
    message: commitMessage,
    hash: sha512(commitMessage).toString().slice(0, 8)
  }
})

export const getRandomCommit = () =>
  commits[Math.floor(Math.random() * commits.length)]

export const findCommitByHash = (hash: string): Commit | undefined =>
  commits.find((commit: Commit) => commit.hash === hash)
