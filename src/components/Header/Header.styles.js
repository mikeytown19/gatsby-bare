import styled from '@emotion/styled'
import {motion} from 'framer-motion'


export const MotionDiv = styled(motion.div)`
   @keyframes offset {
      100% {
        stroke-dashoffset: 1;
      }

    }

    @keyframes fill-it {
      100%{
        fill: tomato;
      }
    }

  &.logo {
    svg {
      width: 110px;
      fill: transparent;

      path {
        stroke: tomato;
        stroke-width: 1;
        stroke-dasharray: 800;


        stroke-dashoffset: 800;
        animation: offset .5s linear forwards, fill-it .8s .5s forwards
      }

    }
  }
`

export const MotionItem = styled(motion.li)`
  padding: 10px 20px;
  margin: 0 5px;
  position: relative;
  color: var(--color-primary);
  &:hover {
    cursor: pointer;
  }

`

export const Header = styled.nav`
  width: 100%;
  height: 100px;
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