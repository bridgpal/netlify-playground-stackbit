import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[url('/minimal.png')] bg-repeat">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
