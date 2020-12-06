import React from 'react'
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useDisclosure,
  Text
    } from "@chakra-ui/react"

const DropdownMenu = ({dropdownData, text}) => {
console.log("🚀 ~ file: index.jsx ~ line 13 ~ DropdownMenu ~ dropdownData", dropdownData)

  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(dropdownData)
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        onMouseOver={onOpen}

      >
     <Text color="white">{text}</Text>
    </MenuButton>
    <MenuList onMouseLeave={onClose}>
      {dropdownData.map(item => <MenuItem key={item.text}>{item.text}</MenuItem>)}
    </MenuList>
  </Menu>
  )
}

export default DropdownMenu
