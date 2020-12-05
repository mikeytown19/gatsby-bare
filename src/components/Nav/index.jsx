import React from 'react'

import {
  Flex,
  Box,

  Image,
  Container,
  } from "@chakra-ui/react"

import NavLink from './NavLink'
import DropdownMenu from '../DropdownMenu'
import {NAV_DATA} from './navData'

const {navData} = NAV_DATA


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
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCA2NiAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjI5NDk2IDIwLjY5NjZMMTIuNjEzMyAzMy40NTAxSDkuNDk3MDVDOC43NzAyOCAzMy40NTAxIDguMTA5OTIgMzIuOTUyOSA3LjgwNTk4IDMyLjE3NjhMNC4wMjQzMyAyMi41MTg0VjMzLjQ1MDFIMFYwLjY1NTI0N0g0LjAyNDMzVjE4Ljg5MTNMNy45Mjc1NiAyLjI2MTUxQzguMTUwMzMgMS4zMTI2NSA4Ljg4NDcxIDAuNjU1MjQ3IDkuNzIyMTYgMC42NTUyNDdIMTIuNDQyN0w3LjI5NDk2IDIwLjY5NjZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjAzODMgNi44NzQ1M0MyMi4wMzgzIDUuNDA2MTcgMjEuNDU0MSA0LjY2NjQ5IDIwLjI4NjEgNC42NTUzNkgyMC4yNTc2QzE5LjA5ODggNC42NTUzNiAxOC41MTk3IDUuMzk1MTcgMTguNTE5NyA2Ljg3NDUzVjI2Ljg5NzVDMTguNTE5NyAyOC4zNzcxIDE5LjEwMzYgMjkuMTE2NyAyMC4yNzE2IDI5LjExNjdDMjEuNDQ5MiAyOS4xMTY3IDIyLjAzODMgMjguMzc3MSAyMi4wMzgzIDI2Ljg5NzVWNi44NzQ1M1pNMjYuMDY5NyAyNi44OTc1QzI2LjA2OTcgMzEuNDgwNiAyNC4xMzY4IDMzLjc3NzUgMjAuMjcxNiAzMy43ODg4QzE2LjQxNjEgMzMuNzg4OCAxNC40ODgzIDMxLjQ5MTkgMTQuNDg4MyAyNi44OTc1VjYuODc0NTNDMTQuNDg4MyAyLjI5MTYgMTYuNDE2MSAwIDIwLjI3MTYgMEMyNC4xMzY4IDAgMjYuMDY5NyAyLjI5MTYgMjYuMDY5NyA2Ljg3NDUzVjI2Ljg5NzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM0LjE5NTUgNS4zMTg3NVYyOC43ODY2SDM1Ljk0MDRDMzcuMDk0MyAyOC43ODY2IDM3LjY3MTEgMjguMDQ1NyAzNy42NzExIDI2LjU2MzZWNy41NTg2MUMzNy42NzExIDYuMDY1MzcgMzcuMDk0MyA1LjMxODc1IDM1Ljk0MDQgNS4zMTg3NUgzNC4xOTU1Wk0zMC4yMTM0IDIuODQzNDdDMzAuMjEzNCAxLjYzNDk1IDMxLjAzODEgMC42NTUyNDcgMzIuMDU1NCAwLjY1NTI0N0gzNi4zNDgzQzM5Ljg4NTEgMC42NjYzOTkgNDEuNjUzNCAyLjk2NzY2IDQxLjY1MzQgNy41NTg2MVYyNi41NjM2QzQxLjY1MzQgMzEuMTQzNSAzOS44MDA1IDMzLjQzOTEgMzYuMDk1MiAzMy40NTAxSDMwLjIxMzRWMi44NDM0N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYuOTM3MyAwLjY1NTI0N0g0OC45ODY3VjMzLjQ1MDFINDUuMTczM1YyLjg0MzQ3QzQ1LjE3MzMgMS42MzQ5NSA0NS45NjMxIDAuNjU1MjQ3IDQ2LjkzNzMgMC42NTUyNDdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU4Ljk1MjcgOC4xNzcwNUw1Ni4wNTI1IDMzLjQ1MDFINTEuOTE5OUw1NS45MTk4IDIuNDcwMDlDNTYuMDU0NCAxLjQyNzMzIDU2LjgzMTIgMC42NTUyNDcgNTcuNzQ2IDAuNjU1MjQ3SDYwLjE4NzdDNjEuMTAyNyAwLjY1NTI0NyA2MS44Nzk3IDEuNDI3ODkgNjIuMDEzOSAyLjQ3MTJMNjUuOTk5OSAzMy40NTAxSDYxLjg1MjZMNTguOTUyNyA4LjE3NzA1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
            height={30}
          />

        </Flex>
        <Box>
          {navData && navData.map((item) =>
            item.subNav ?
            <DropdownMenu key={item.text} text={item.text} dropdownData={item.subNav}/>
            :
            <NavLink key={item.text} url={item.url}>{item.text}</NavLink>
          )
        }
        </Box>
      </Flex>
    </Container>

  )
}

export default Nav
