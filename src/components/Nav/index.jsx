import React from 'react'

import {
  Flex,
  Box,
  Text,
  Image,
  Container,
  } from "@chakra-ui/react"

import NavLink from './NavLink'
import DropdownMenu from '../DropdownMenu'

const Nav = ({maxWidthProp}) => {
  return (
    <Container maxWidth={maxWidthProp}>
      <Flex
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            height={30}
          />
          <Text pl={3} color="white">
            Logo
          </Text>
        </Flex>
        <Box>
          <DropdownMenu />

          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>

        </Box>
      </Flex>
    </Container>

  )
}

export default Nav
