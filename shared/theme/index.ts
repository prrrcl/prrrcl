import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

const theme = extendTheme(
  {
    fonts: {
      body: "SofiaPro",
      heading: "Ivy Presto",
    },
    styles: {
      global: {
        body: {
          color: "black",
          cursor: "none",
          scrollBehavior: "smooth",
        },
        html: {
          scrollBehavior: "smooth",
        },
        a: {
          cursor: "none",
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "gray",
  })
)

export default theme

export { default as Fonts } from "./fonts"
