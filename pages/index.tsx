import { Box, Heading } from "@chakra-ui/react"
import Cv from "components/pages/cv"
import Intro from "components/pages/home/intro"
import MainHeader from "components/pages/home/mainHeader"
import Section from "components/section"
import Layout from "components/transition/layout"
import { useEffect } from "react"

import useLoading from "shared/hooks/useLoading"

export default function Home() {
  const { delayedClose } = useLoading()

  useEffect(() => {
    delayedClose(2000)
  }, [])

  return (
    <Layout>
      <MainHeader />
      <Intro />
      <Cv />
      <Box>
        <Heading>That&apos;s it!</Heading>
      </Box>
    </Layout>
  )
}
