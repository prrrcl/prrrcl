import type { AppProps } from "next/app"
import { Box, ChakraProvider } from "@chakra-ui/react"
import theme, { Fonts } from "shared/theme"
import { Provider } from "jotai"
import Cursor from "components/cursor"
import Header from "components/header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider>
        <Fonts />
        <Cursor />
        <Box bg="white">
          <Header />
          <Component {...pageProps} />
        </Box>
      </Provider>
    </ChakraProvider>
  )
}
export default MyApp
