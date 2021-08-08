import Link from "next/link"
import Image from "next/image"
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import Burguer from "./comps/burguer"
import useCursor from "shared/hooks/useCursor"

import Mail from "./comps/mail"
import { useAtom } from "jotai"
import IS_BURGUER_OPEN from "./comps/burguer/atoms"
import Menu from "./comps/menu"
import { AnimatePresence, motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import SocialNetworks from "./comps/socialNetworks"

export default function Header() {
  const ref = useRef<any>()
  const [height, setHeight] = useState(0)
  const { handleIn, handleOut } = useCursor()
  const [isMenuOpened] = useAtom(IS_BURGUER_OPEN)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])
  return (
    <Stack
      spacing="0"
      px={["2", "32"]}
      pt={["2", "32"]}
      position="fixed"
      top="0"
      w="full"
      zIndex="toast"
      bg={isMenuOpened ? "white" : "transparent"}
      transition="cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s"
      ref={ref}
    >
      <HStack>
        <Box pos="relative" w="full" d="flex" justifyContent="space-between">
          <motion.div
            key={"header-motion"}
            animate={
              isMenuOpened
                ? { opacity: 0, pointerEvents: "none" }
                : { opacity: 1, pointerEvents: "all" }
            }
          >
            <Link href="/" passHref>
              <Box
                as="a"
                onMouseEnter={() => handleIn()}
                onMouseLeave={() => handleOut()}
              >
                <Heading
                  fontWeight="normal"
                  fontSize={["4xl", "7xl"]}
                  lineHeight="7rem"
                >
                  prrrcl
                </Heading>
              </Box>
            </Link>
          </motion.div>
          <Burguer />
          <HStack alignItems="center" d={["none", "flex"]}>
            <SocialNetworks />
          </HStack>
        </Box>
      </HStack>
      <AnimatePresence>
        {isMenuOpened && <Menu height={height} />}
      </AnimatePresence>
    </Stack>
  )
}
