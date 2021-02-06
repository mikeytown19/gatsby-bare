import styled from '@emotion/styled'
import {motion} from 'framer-motion'


export const MotionDiv = styled(motion.div)`
color: white;
`

export const MotionItem = styled(motion.li)`
  padding: 10px 20px;
  margin: 0 5px;
  position: relative;
  &:hover {
    cursor: pointer;
  }

`

export const Header = styled.nav`
  color: var(--color-primary);
  width: 100%;
  background-color: var(--bg-primary);
  height: 50px;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    align-items: center;
    height: 100%;
`

export const MotionUl = styled(motion.ul)`
      list-style: none;
      display: flex;
      position: relative;
`

export const MotionSelected = styled(motion.div)`
      height: 300px;
      position: absolute;
      border-radius: 4px;
      top: 45px;
      left: -20px;
      right: -20px;
      bottom: -20px;

      background-color: white;
      box-shadow: var(--shadow-md);
      color: black;
      display: flex;
      flex-direction: column;
      padding: 10px;
      align-items: center;

      a {
        margin-top: 20px;
      }

      &:before {
        content: '';
        position: absolute;
        height: 20px;
        width: 20px;
        background-color: inherit;
        top: -5px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        transform: rotate(-45deg);
      }
`

export const MotionA = styled(motion.a)`
  display: inline-block;
  color: tomato;
  margin-bottom: 2px;
  text-decoration: none;

  &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background-color: tomato;
      transition: width .2s;
  }

  &:hover::after {
      width: 100%;
  }



`