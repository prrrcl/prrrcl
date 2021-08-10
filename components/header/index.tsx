import Link from "next/link"
import { Box, Heading, HStack, Stack } from "@chakra-ui/react"

import useCursor from "shared/hooks/useCursor"
import { useRef } from "react"
import SocialNetworks from "./comps/socialNetworks"

export default function Header() {
  const ref = useRef<any>()
  const { handleIn, handleOut } = useCursor()

  return (
    <Stack
      spacing="0"
      px={["2", "32"]}
      pt={["2", "32"]}
      position="fixed"
      top="0"
      w="full"
      zIndex="toast"
      bg="transparent"
      transition="cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s"
      ref={ref}
    >
      <HStack>
        <Box
          pos="relative"
          w="full"
          d="flex"
          justifyContent={["center", "space-between"]}
        >
          <Link href="/" passHref>
            <Box
              as="a"
              onMouseEnter={() => handleIn({ onHoverText: "Go to top!" })}
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

          <HStack alignItems="center" d={["none", "flex"]}>
            <SocialNetworks />
          </HStack>
        </Box>
      </HStack>
    </Stack>
  )
}
