import Link from "next/link"
import { Box, Heading, HStack } from "@chakra-ui/react"
import { useAtom } from "jotai"
import COLOR from "./atoms"
import Burguer from "./comps/burguer"

export default function Header() {
  const [color] = useAtom(COLOR)

  return (
    <HStack p={["2", "32"]} position="fixed" top="0" w="full">
      <Box pos="relative" w="full" d="flex">
        <Link href="/" passHref>
          <Box as="a">
            <Heading
              fontWeight="normal"
              fontSize={["4xl", "7xl"]}
              color={color}
              lineHeight="7rem"
            >
              prrrcl
            </Heading>
          </Box>
        </Link>
        <Burguer />
      </Box>
    </HStack>
  )
}
