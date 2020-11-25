import React from 'react'

import {
Flex,
Box,
Spacer,
Link,
Text,
Image,
Container
} from "@chakra-ui/react"

const NavLink = ({ children, ...props }) => (
  <Link px={2} color="white" {...props}>
    {children}
  </Link>
);

const Header = ({maxWidthProp}) => {
  return (
    <Box
      bg="tomato"
      w="100%">
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
              Company
            </Text>
          </Flex>
          <Box>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
          </Box>
        </Flex>
      </Container>
    </Box>


  )
}

export default Header
