import { Box } from "@chakra-ui/react"
import Image from "next/image"
import me from "public/assets/img/home.jpg"

export default function MainHeader() {
  return (
    <Box pos="relative">
      <Image src={me} alt="me" layout="responsive" />
      <Box
        bgGradient="linear(transparent 35%, white 100%)"
        pos="absolute"
        top="0"
        left="0"
        w="full"
        height="full"
      />
    </Box>
  )
}
