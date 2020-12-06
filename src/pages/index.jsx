import React from 'react'

import { Box, Text, Heading } from "@chakra-ui/react";
import {Layout, Container} from '../components'

const index = () => {
  return (
  <Box bg="linear-gradient(to left,#6c63ff 4%,#afa2ff 97%)" w="100%">
    <Layout >

      <Box  py={50} maxW="50%">
        <Heading  as="h1" size="4xl" color="white">
          Kodia creates fast, secure, and scalable web experiences.
        </Heading>
        <Text as="h6" size="md" pt={10} color="white">The web is competitive - Kodia builds with the JAMstack to give you the advantage.</Text>
      </Box>
    </Layout>
  </Box>
  )
}

export default index