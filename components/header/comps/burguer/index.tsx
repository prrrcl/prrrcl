import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useAtom } from "jotai"

import variants from "./variants"
import IS_BURGUER_OPEN from "./atoms"

export default function Burguer() {
  const [open, setOpen] = useAtom(IS_BURGUER_OPEN)

  const toggle = () => setOpen((old) => !old)

  return (
    <Box
      pos="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      onClick={toggle}
      cursor="pointer"
      p="4"
    >
      {Object.keys(variants).map((key) => (
        <Box
          key={key}
          as={motion.div}
          variants={variants[key]}
          whileHover="hover"
          animate={open ? "animate" : "initial"}
          w="9"
          h="3px"
          bg="black"
        />
      ))}
    </Box>
  )
}
