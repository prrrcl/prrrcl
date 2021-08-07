import { Box, Stack } from "@chakra-ui/react"
import {
  motion,
  useViewportScroll,
  useMotionTemplate,
  useTransform,
} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { IProps } from "./utils"

export default function Section(props: IProps) {
  const { bg, children } = props

  const ref = useRef<any>()
  const [height, setHeight] = useState(0)
  const [offset, setOffset] = useState(0)

  const { scrollY } = useViewportScroll()
  const y = useTransform(
    scrollY,
    [offset * 0.2, offset * 1.2],
    ["-5vh", "-30vh"]
  )
  const borderRadiusNum = useTransform(
    scrollY,
    [offset, offset + height],
    [50, 0]
  )
  const borderRadius = useMotionTemplate`${borderRadiusNum}%`

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    setOffset(ref.current.offsetTop)
  }, [])

  return (
    <Box as="section" pos="relative" pt={["20", "80"]} ref={ref}>
      <Box position="relative">
        <Box pt="10vh" pb="20vh" h="100%">
          <Box
            as={motion.div}
            pos="absolute"
            top="0"
            w="full"
            h="100vw"
            bg={bg || "red.100"}
            zIndex="base"
            // @ts-ignore
            style={{ borderRadius, y }}
          />
          <Box
            pos="absolute"
            top="80vh"
            w="full"
            h="200vh"
            bg={bg || "red.100"}
            zIndex="base"
          />
          <Stack zIndex="docked" pos="relative" alignItems="center">
            {children}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
