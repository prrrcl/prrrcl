import { Box, HStack, Text } from "@chakra-ui/react"
import SocialNetworks from "components/header/comps/socialNetworks"

export default function Footer() {
  return (
    <Box
      bg="black"
      color="white"
      h="48"
      d="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <HStack spacing="7" mb="4">
        <SocialNetworks />
      </HStack>
      <Text>prrrcl 2.0 - {new Date().getFullYear()}</Text>
    </Box>
  )
}
