import { Box, Heading, Text } from "@chakra-ui/react"
import Memoji from "components/memoji"
import CodeCarousel from "components/pages/about/codeCarousel"
import Messages from "components/pages/about/messages"
import Section from "components/section"
import { motion } from "framer-motion"
import { useCallback, useState } from "react"
import SoftSkills from "./skills"

export default function Intro() {
  const [mustShowN, setMustShowN] = useState(false)

  const handleCheck = useCallback((str: string) => {
    if (!str) return
    setMustShowN(str.startsWith("a"))
  }, [])

  return (
    <Section bg="black" mt={["-20vw", "-50vw"]} spacing="5" id="#about">
      <Memoji mt={["-40vw", "-60"]} />
      <Box fontSize={["3xl", "5xl"]} color="white">
        <Heading
          color="white"
          textAlign="center"
          fontSize={["6xl", "9xl"]}
          mb="10"
        >
          Welcome,
        </Heading>
        <Box
          d="flex"
          flexDir={["column", "row"]}
          textAlign="center"
          mb="20"
          alignItems="center"
        >
          <Text w="full">
            I&apos;m{" "}
            <Text as="span" fontWeight="bold">
              Adri
            </Text>
            , a
            <motion.span
              animate={
                mustShowN
                  ? { opacity: 1, marginLeft: "0px" }
                  : { opacity: 0, marginLeft: "-25px" }
              }
            >
              n
            </motion.span>
          </Text>

          <CodeCarousel
            items={["front-end", "animations", "ui-design", "photograph"]}
            onChange={handleCheck}
          />

          <Text>enthusiast.</Text>
        </Box>
        <Text maxW="container.lg" mb="32">
          Gamer, and passionate about beautiful and usables websites, at the age
          of 26, I have worked as a graphic designer and now as a front end.
          <br />
          <br /> I decided to change my professional career at 24 👼, to be able
          to dedicate myself 100% to what really fulfills me.
        </Text>
      </Box>
      <Messages />
      <SoftSkills />
    </Section>
  )
}
