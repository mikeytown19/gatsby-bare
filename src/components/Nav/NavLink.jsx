import React from 'react'
import { Link } from '@chakra-ui/react'
const NavLink = ({ children, ...props }) => (
  <Link px={2} color="white" {...props}>
    {children}
  </Link>
);
export default NavLink
