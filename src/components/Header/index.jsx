import React from 'react'

import {Box} from "@chakra-ui/react"
import {Nav} from '../'

const Header = ({maxWidthProp}) => {
  return (
    <Box bg="#6c63ff" w="100%" >
      <Nav  maxWidthProp={maxWidthProp}/>
    </Box>
  )
}

export default Header
