import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta name="description" content="A site for my programming portfolio" />
        <meta name="og:title" content="whale homepage" />
        
        <title>새 탭</title>
      </Head >

      <Component {...pageProps} />
    </>)
}

