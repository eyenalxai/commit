import Head from "next/head"
import { ReactNode } from "react"

interface WrapperProps {
  children: ReactNode
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <Head>
        <title>commits</title>
      </Head>
      <div className={"h-screen bg-gray-200 dark:bg-gray-800 flex justify-center"}>{children}</div>
    </>
  )
}
