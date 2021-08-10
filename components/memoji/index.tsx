import { Box, ChakraProps } from "@chakra-ui/react"

export default function Memoji(props: ChakraProps) {
  return (
    <Box
      as="video"
      loop
      muted
      autoPlay
      height={["200px", "480px"]}
      pointerEvents="none"
      {...props}
    >
      <source
        // eslint-disable-next-line global-require
        src={require("./me.webm")}
        type="video/webm"
      />
      <source
        // eslint-disable-next-line global-require
        src={require("./me.mp4")}
        type="video/mp4"
      />
      Your browser doesn&apos;t support HTML5 video.
    </Box>
  )
}
