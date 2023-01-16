import {Html, Head, Main, NextScript} from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <meta content="#baaf48" name="theme-color" />
      </Head>
      <body className="relative dark:bg-gray-900 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
