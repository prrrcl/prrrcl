import LoadingContextProvider from 'components/contexts/loadingContext'
import Head from 'next/head'
import 'styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to my portfolio</title>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <LoadingContextProvider>
        <Component {...pageProps} />
      </LoadingContextProvider>
    </>
  )
}

export default MyApp
