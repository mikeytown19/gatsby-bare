import React, {useState} from 'react'
import { motion } from "framer-motion"
import * as Styled from './Nav.styles.js'
import {
  Flex,
  Box,
  useMediaQuery,
  Image,
  Container,
  Circle,

  } from "@chakra-ui/react"

import NavLink from './NavLink'
import { HamburgerIcon, ArrowForwardIcon } from '@chakra-ui/icons'

const variants = {
  open: { opacity: 1, x: "-40%"},
  close: { opacity: 0, x: "100%" },
}

const MobileNav = ({children, navData}) => {
  console.log(navData)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Box>
      <Styled.Circle onClick={() => setIsOpen(!isOpen)} size="60px" color="white">
        <HamburgerIcon color="white" boxSize={7}/>
      </Styled.Circle>

    <Styled.Container
      initial={false}
      animate={isOpen ? "open" : "close"}
      variants={variants}
      transition={{type: "spring", mass: 0.5 }}
    >
      <Styled.Circle onClick={() => setIsOpen(!isOpen)}  size="60px" bg="black" color="white">
        <ArrowForwardIcon focusable={true} color="white" boxSize={7}/>
      </Styled.Circle>

      <Flex mt={7} direction="column">

         {navData && navData.map((item) => !item.subNav &&
            <NavLink  color="black" key={item.text} url={item.url}>{item.text}</NavLink>
          )}
      </Flex>
    </Styled.Container>



    </Box>
  )
}

export default MobileNav
