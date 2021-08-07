import { AtSignIcon, CopyIcon } from "@chakra-ui/icons"
import { Box, HStack, Text, useDisclosure } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import useCursor from "shared/hooks/useCursor"
import variants, { textVariant } from "./variants"

export default function Mail() {
  const [clipboard] = useState(
    typeof navigator !== "undefined" && !!navigator.clipboard
  )
  const [copied, setCopied] = useState(false)
  const { handleIn, handleOut } = useCursor()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const mouseHover = () => {
    if (clipboard) {
      onOpen()
    }
    handleIn()
  }

  const mouseOut = () => {
    if (clipboard) {
      onClose()
    }
    handleOut()
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText("adrianporcelnavarro@hotmail.com")
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      })
  }

  return (
    <Box
      as={motion.div}
      animate={isOpen ? "animate" : "initial"}
      variants={variants}
      onMouseEnter={() => mouseHover()}
      onMouseLeave={() => mouseOut()}
      bg="black"
      borderRadius="lg"
      pos="relative"
      border="4px"
      borderColor="white"
      overflow="hidden"
    >
      <Text
        as={clipboard ? "span" : "a"}
        // @ts-ignore
        href={clipboard ? undefined : "mailto:adrianporcelnavarro@hotmail.com"}
        fontWeight="black"
        borderRadius="md"
        bg="black"
        color="white"
        h="30px"
        w="30px"
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <AtSignIcon />
      </Text>
      {isOpen && (
        <motion.div
          variants={textVariant}
          exit="exit"
          animate="animate"
          initial="initial"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          onClick={handleCopy}
        >
          <HStack
            w="full"
            ml="8"
            pl="2"
            alignItems="center"
            h="full"
            borderLeft="1px"
            borderLeftColor="white"
          >
            <CopyIcon color="white" />
            <Text color="white">
              {copied ? "Copied!" : "Copy to clipboard!"}
            </Text>
          </HStack>
        </motion.div>
      )}
    </Box>
  )
}
