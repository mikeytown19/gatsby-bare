import React from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link} from 'gatsby'
const NavLink = ({ children, url, color, ...props }) => (
  <Link to={url} >
    <ChakraLink as="span" px={2} color={color} {...props}>
      {children}
    </ChakraLink>
  </Link>
);
export default NavLink
