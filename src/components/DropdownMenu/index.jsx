import React from 'react'
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useDisclosure
    } from "@chakra-ui/react"

  import { ChevronDownIcon } from "@chakra-ui/icons";

const DropdownMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        onMouseOver={onOpen}
        rightIcon={<ChevronDownIcon />}
      >
      Actions
    </MenuButton>
    <MenuList onMouseLeave={onClose}>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
  </Menu>
  )
}

export default DropdownMenu
