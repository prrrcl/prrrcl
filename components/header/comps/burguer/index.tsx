import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useAtom } from "jotai"

import variants from "./variants"
import IS_BURGUER_OPEN from "./atoms"
import useCursor from "shared/hooks/useCursor"

export default function Burguer() {
  const [open, setOpen] = useAtom(IS_BURGUER_OPEN)
  const { handleIn, handleOut } = useCursor()

  const toggle = () =>
    setOpen((old) => {
      if (document.querySelector("body")) {
        // @ts-ignore
        document.querySelector("body").style.overflow = !old ? "hidden" : "auto"
      }
      return !old
    })

  return (
    <Box
      pos="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      onClick={toggle}
      p="4"
      onMouseEnter={() => handleIn()}
      onMouseLeave={() => handleOut()}
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
