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
        <Styled.MotionDiv>
          <Styled.MotionUl
          onHoverStart={()=>setHovered(!hovered)}
          onHoverEnd={()=>setHovered(!hovered)}>

            {navData.map(item => (
              <Item
                key={item}
                hovered={hovered}
                item={item}
                isSelected={selected === item}
                onHoverStart={() => setSelected(item)}
              />
            ))}

          </Styled.MotionUl>
        </Styled.MotionDiv>
      </Styled.Container>
    </Styled.Header>
    </AnimateSharedLayout>
  )
}

const Item = ({ item, isSelected, onHoverStart, hovered }) => {
  return (
    <Styled.MotionItem className="item" onHoverStart={onHoverStart} style={{ backgroundColor: item }}>
      {item}
      {isSelected && hovered && (
        <Styled.MotionSelected
          layoutId="outline"
          initial={false}

          transition={spring}
        />
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


