import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import theme, { Fonts } from "shared/theme"
import { Provider } from "jotai"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider>
        <Fonts />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}
export default MyApp
