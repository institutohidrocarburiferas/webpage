import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="relative dark:bg-gray-900  dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
