import React, {useState} from 'react'
import * as Styled from './Header.styles'
import { AnimateSharedLayout } from 'framer-motion'
import {navData} from './navData'

const Header = () => {
  let [selected, setSelected] = useState(navData[0])
  let [hovered, setHovered] = useState(false)



  return (
    <AnimateSharedLayout>
    <Styled.Header>
      <Styled.Container>
        <div className='logo'>logo</div>
        <Styled.MotionDiv
         onHoverStart={()=>setHovered(!hovered)}
         onHoverEnd={()=>setHovered(!hovered)}
        >
          <Styled.MotionUl>
            {navData.map(({title, subnav}, index) => (
              <Item
                key={`${title}${index}`}
                hovered={hovered}
                title={title}
                subnav={subnav && subnav}
                isSelected={selected === title}
                onHoverStart={() => setSelected(title)}
              />
            ))}

          </Styled.MotionUl>
        </Styled.MotionDiv>
      </Styled.Container>
    </Styled.Header>
    </AnimateSharedLayout>
  )
}

const Item = ({ title, isSelected, onHoverStart, hovered, subnav }) => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }
  return (
    <Styled.MotionItem className="item" onHoverStart={onHoverStart} style={{ backgroundColor: title }}>
      {title}
      {isSelected && hovered && (
        <Styled.MotionSelected
          layoutId="outline"
          initial={false}
          // transition={spring}
        >
          {subnav.map(({title}) =>
          <Styled.MotionA
            animate={hovered ? "visible" : "hidden"}
            variants={variants}
            key={title}
            initial={"hidden"}
            transition={{ delay: .08 }}
          >
            {title}
          </Styled.MotionA>
          )}
        </Styled.MotionSelected>
      )}
    </Styled.MotionItem>
  );
}


const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};


export default Header


