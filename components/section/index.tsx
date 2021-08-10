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
  const { bg, children, mt, spacing, lastOne, id } = props

  const ref = useRef<any>()
  const [height, setHeight] = useState(0)
  const [offset, setOffset] = useState(0)

  const { scrollY } = useViewportScroll()
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
    <Box
      id={id}
      as="section"
      pos="relative"
      ref={ref}
      mt={mt}
      overflow={lastOne ? "hidden" : "unset"}
    >
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
            style={{ borderRadius }}
          />
          <Box
            pos="absolute"
            top={["50vw"]}
            w="full"
            h="full"
            bg={bg || "red.100"}
            zIndex="base"
          />
          <Stack
            zIndex="docked"
            pos="relative"
            alignItems="center"
            mx={["3", "0"]}
            spacing={spacing}
          >
            {children}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
