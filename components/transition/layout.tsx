import { Box } from "@chakra-ui/react"
import { pageVariants } from "./variants"
import { motion } from "framer-motion"

export default function Layout(props: any) {
  const { children } = props
  return (
    <Box
      w="full"
      as={motion.div}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </Box>
  )
}
