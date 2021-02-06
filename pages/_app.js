import Header from 'components/app/header'
import LoadingContextProvider from 'components/contexts/loadingContext'
import { CSSPlugin } from 'gsap'
import Head from 'next/head'

import 'styles/globals.css'

const C = CSSPlugin

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to my... site? - prrrcl&reg;</title>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <LoadingContextProvider>
        <Header />
        <Component {...pageProps} />
      </LoadingContextProvider>
    </>
  )
}

export default MyApp
