import type { AppProps } from "next/app"
import { Box, ChakraProvider } from "@chakra-ui/react"
import theme, { Fonts } from "shared/theme"
import { Provider } from "jotai"
import Cursor from "components/cursor"
import Header from "components/header"
import TransitionWrapper from "components/transition/wrapper"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider>
        <Fonts />
        <Cursor />
        <Box bg="white">
          <Header />
          <TransitionWrapper pathname={router.pathname}>
            <Component
              key={`main-component-${router.pathname}`}
              {...pageProps}
            />
          </TransitionWrapper>
        </Box>
      </Provider>
    </ChakraProvider>
  )
}
export default MyApp
