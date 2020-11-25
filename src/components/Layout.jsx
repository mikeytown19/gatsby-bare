import React from 'react'
import {ChakraProvider, extendTheme, Container } from "@chakra-ui/react";
import { Header } from './'


const Layout = ({children}) => {
  const width = "1200px"
  return (
    <ChakraProvider>
      <Header maxWidthProp={width}/>
      <Container maxWidth={width}>

      {children}
      </Container>

    </ChakraProvider>
  )
}

export default Layout
