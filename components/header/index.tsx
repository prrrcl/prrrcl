import Link from "next/link"
import Image from "next/image"
import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import { useAtom } from "jotai"
import COLOR from "./atoms"
import Burguer from "./comps/burguer"
import useCursor from "shared/hooks/useCursor"

import LinkedIn from "components/svg/linkedin.svg"
import Github from "components/svg/github.svg"
import Mail from "./comps/mail"

const socialNetworks = [
  {
    icon: LinkedIn,
    url: "https://linkedin.com/in/prrrcl",
  },
  {
    icon: Github,
    url: "https://github.com/prrrcl",
  },
]

export default function Header() {
  const [color] = useAtom(COLOR)
  const { handleIn, handleOut } = useCursor()

  return (
    <HStack
      px={["2", "32"]}
      pt={["2", "32"]}
      position="fixed"
      top="0"
      w="full"
      zIndex="toast"
    >
      <Box pos="relative" w="full" d="flex" justifyContent="space-between">
        <Link href="/" passHref>
          <Box
            as="a"
            onMouseEnter={() => handleIn()}
            onMouseLeave={() => handleOut()}
          >
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
        <HStack alignItems="center" d={["none", "flex"]}>
          {socialNetworks.map(({ icon, url }) => (
            <Text
              key={url}
              as="a"
              bg="white"
              overflow="hidden"
              borderRadius="md"
              href={url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleIn()}
              onMouseLeave={() => handleOut()}
              d="flex"
              border="4px"
              borderColor="white"
            >
              <Image src={icon} alt="" width={30} height={30} />
            </Text>
          ))}

          <Mail />
        </HStack>
      </Box>
    </HStack>
  )
}
