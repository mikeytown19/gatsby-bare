import React from 'react'

import {
Flex,
Box,
Spacer

} from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex>
      <Box p="4" bg="red.400" color="white">
        Pokemon
      </Box>
      <Spacer />
      <Box p="4" bg="green.400">
        Box 2
      </Box>
    </Flex>
  )
}

export default Header
