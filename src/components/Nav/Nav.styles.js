import styled from '@emotion/styled'
import { motion } from "framer-motion"
import { Circle as ChakraCirlce } from "@chakra-ui/react"

export const Container = styled(motion.div)`
  color: red;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: white;
  padding:20px;
  top: 0;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: 0 0.3rem 1rem 0 rgba(0,0,0,0.1);
  z-index: 2;
`
export const Background = styled(motion.div)`
  display: none;

  &[data-isOpen="true"] {
    display: initial;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: black;
    z-index: 1;
    top: 0;
    opacity: .4;
    left: 0;
  }
`

export const Circle = styled(ChakraCirlce)`
  &:hover {
    cursor: pointer;
  }

`