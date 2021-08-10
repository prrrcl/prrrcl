import { Box } from "@chakra-ui/react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useAtom } from "jotai"
import { useMemo, memo, useEffect } from "react"

import CURSOR, { CURSOR_TEXT, CURSOR_THEME } from "./atoms"

const variants = {
  default: {
    y: -7,
    x: -5,
  },
  click: {
    y: -7,
    x: -5,
    scale: 0.3,
  },
  hover: {
    y: -7,
    x: -5,
    scale: 1.5,
  },
  hoverWithText: {
    y: 0,
    x: 0,
    scale: 5,
  },
}

function CustomCursor() {
  const [state, setCursor] = useAtom(CURSOR)
  const [text] = useAtom(CURSOR_TEXT)
  const [theme] = useAtom(CURSOR_THEME)

  const bg = useMemo(() => {
    const colors = {
      dark: "white",
      light: "black",
    }
    return colors[theme]
  }, [theme])

  const colorText = useMemo(() => {
    const colors = {
      dark: "black",
      light: "white",
    }
    return colors[theme]
  }, [theme])

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 7, mass: 0.1, stiffness: 180 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX - 10)
      cursorY.set(e.clientY - 10)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousedown", () => setCursor("click"))
    window.addEventListener("mouseup", () => setCursor("default"))

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.addEventListener("mousedown", () => setCursor("click"))
      window.addEventListener("mouseup", () => setCursor("default"))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box
      as={motion.div}
      position="fixed"
      zIndex="tooltip"
      top="0"
      left="0"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      pointerEvents="none"
      mixBlendMode={state === "hoverWithText" ? "unset" : "difference"}
      display={["none", "block"]}
    >
      <Box position="relative" w="full" h="full">
        <Box
          as={motion.div}
          animate={variants[state]}
          variants={variants}
          w="8"
          h="8"
          borderRadius="full"
          bg={state === "hoverWithText" ? colorText : bg}
        />
        {text && state === "hoverWithText" && (
          <Box
            position="absolute"
            pointerEvents="none"
            color={bg}
            zIndex="popover"
            top="50%"
            left="50%"
            textAlign="center"
            d="flex"
            alignItems="center"
            justifyContent="center"
            transform="translate(-50%, -50%)"
            w="28"
            h="28"
          >
            {text}
          </Box>
        )}
      </Box>
    </Box>
  )
}
export default memo(CustomCursor)
