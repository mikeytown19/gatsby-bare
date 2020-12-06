import React from 'react'
import {ChakraProvider, extendTheme, Container } from "@chakra-ui/react";
import { Header } from './'

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        overflow: "hidden"
      },

    },
  },
})
const Layout = ({children}) => {
  const width = "1200px"
  return (
    <ChakraProvider theme={theme} >
      <Header maxWidthProp={width}/>
      <Container maxWidth={width}>

        {children}
      </Container>

    </ChakraProvider>
  )
}

export default Layout
