import { useEffect } from "react"
import Footer from "components/footer"
import Cv from "components/pages/cv"
import Intro from "components/pages/about"
import MainHeader from "components/pages/home/mainHeader"
import Layout from "components/transition/layout"
import useLoading from "shared/hooks/useLoading"
import Head from "next/head"

export default function Home() {
  const { delayedClose } = useLoading()

  useEffect(() => {
    delayedClose(2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <Head>
        <title>prrrcl - Personal site</title>
        <meta name="description" content="Adrián Porcel - Sitio personal" />
      </Head>
      <MainHeader />
      <Intro />
      <Cv />
      <Footer />
    </Layout>
  )
}
