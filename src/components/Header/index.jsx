import React from 'react'

import {Box} from "@chakra-ui/react"
import {Nav} from '../'

const Header = ({maxWidthProp}) => {
  return (
    <Box bg="linear-gradient(to left,#6c63ff 4%,#afa2ff 97%)" w="100%" >
      <Nav  maxWidthProp={maxWidthProp}/>
    </Box>
  )
}

export default Header
