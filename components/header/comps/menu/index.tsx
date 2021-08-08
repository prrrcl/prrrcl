import { Box, Heading, HStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"

import { ease } from "shared/constants"
import SocialNetworks from "../socialNetworks"
import variants, { childs } from "./variants"

interface IProps {
  height: number
}

const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "CV",
    path: "/cv",
  },
]

export default function Menu(props: IProps) {
  const { height } = props
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease, duration: 0.8 }}
    >
      <Box
        h={`calc(100vh - ${height}px)`}
        alignItems="center"
        justifyContent="flex-start"
        d="flex"
        flexDir="column"
      >
        {menuItems.map((menuElement) => (
          <motion.div variants={childs} key={menuElement.label}>
            <Link href={menuElement.path}>
              <a>
                <Heading as="h5" size="4xl" m="3" fontFamily="body">
                  {menuElement.label}
                </Heading>
              </a>
            </Link>
          </motion.div>
        ))}
        <HStack mt="32" d={["flex", "none"]}>
          <SocialNetworks />
        </HStack>
      </Box>
    </motion.div>
  )
}
