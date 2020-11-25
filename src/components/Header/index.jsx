import React from 'react'

import {Box} from "@chakra-ui/react"
import {Nav} from '../'




const Header = ({maxWidthProp}) => {
  return (
    <Box bg="tomato" w="100%" >
      <Nav  maxWidthProp={maxWidthProp}/>
    </Box>
  )
}

export default Header
