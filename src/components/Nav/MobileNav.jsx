import React, {useState} from 'react'
import { motion } from "framer-motion"
import * as Styled from './Nav.styles.js'
import {
  Flex,
  Box,
  useMediaQuery,
  Image,
  Container,
  Circle
  } from "@chakra-ui/react"
import { HamburgerIcon, ArrowForwardIcon } from '@chakra-ui/icons'

const variants = {
  open: { opacity: 1, x: "-40%"},
  close: { opacity: 0, x: "100%" },
}

const MobileNav = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Box>
      <Circle onClick={() => setIsOpen(!isOpen)}  size="60px"  color="white">
        <HamburgerIcon focusable={true} color="white" boxSize={7}/>
      </Circle>

    <Styled.Container
      initial={false}
      animate={isOpen ? "open" : "close"}
      variants={variants}
      transition={{type: "spring", mass: 0.5 }}
    >
      <Circle onClick={() => setIsOpen(!isOpen)}  size="60px" bg="black" color="white">
        <ArrowForwardIcon focusable={true} color="white" boxSize={7}/>
      </Circle>
    </Styled.Container>


      {/* {children} */}

    </Box>
  )
}

export default MobileNav
