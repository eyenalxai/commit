import {Head, Html, Main, NextScript} from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="App that helps you write better commit messages" />

        <meta property="og:url" content="https://commit.takx.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Commit" />
        <meta property="og:description" content="App that helps you write better commit messages" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="commit.takx.xyz" />
        <meta property="twitter:url" content="https://commit.takx.xyz/" />
        <meta name="twitter:title" content="Commit" />
        <meta name="twitter:description" content="App that helps you write better commit messages" />

        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#e5e7eb" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1f2937" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
