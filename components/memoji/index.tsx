import { Box, ChakraProps } from "@chakra-ui/react"
import { useEffect, useState } from "react"

function supportsHEVCAlpha() {
  if (typeof window === "undefined") return false
  const navigator: any = window.navigator
  const ua = navigator.userAgent.toLowerCase()
  const hasMediaCapabilities = !!(
    navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
  )
  const isSafari =
    ua.indexOf("safari") !== -1 &&
    !(ua.indexOf("chrome") !== -1) &&
    ua.indexOf("version/") !== -1
  return isSafari && hasMediaCapabilities
}

export default function Memoji(props: ChakraProps) {
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    setFlag(supportsHEVCAlpha())
  }, [])

  return (
    <Box
      as="video"
      loop
      muted
      autoPlay
      height={["200px", "480px"]}
      pointerEvents="none"
      borderRadius={flag ? "full" : 0}
      src={flag ? "/assets/me2-1.mov" : require("./me.webm")}
      // @ts-ignore
      type={flag ? 'video/mp4; codecs="hvc1"' : "video/webm"}
      {...props}
    />
  )
}
