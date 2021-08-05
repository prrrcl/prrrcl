import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    body: "SofiaPro",
    heading: "Ivy Presto",
  },
  styles: {
    global: {
      body: {
        color: "black",
      },
    },
  },
})

export default theme

export { default as Fonts } from "./fonts"
