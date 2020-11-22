import React from 'react'

import { Box, Text } from "@chakra-ui/react";
import {Layout, Header} from '../components'

const index = () => {
  return (
    <Layout>
      <Header />
      <Box boxSize={40}>
          <Text fontSize="xl">Hello World</Text>
      </Box>
    </Layout>
  )
}

export default index