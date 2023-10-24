import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="page" lang="ru">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preload" href="/fonts/Roboto/Roboto-Bold.ttf" as="font" type="font/ttf" crossOrigin="" />
        <link rel="preload" href="/fonts/Roboto/Roboto-Regular.ttf" as="font" type="font/ttf" crossOrigin="" />
        <link rel="preload" href="/fonts/Roboto/Roboto-Light.ttf" as="font" type="font/ttf" crossOrigin="" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="var(--color-primary)" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
