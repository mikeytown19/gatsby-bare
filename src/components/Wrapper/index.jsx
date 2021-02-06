import React from 'react'
import styled from '@emotion/styled'
const Wrapper = ({children}) => {
  return (
    <WrapperStyles>
      {children}
    </WrapperStyles>
  )
}

export default Wrapper

const WrapperStyles = styled.div`
  display: block;
  padding: 5px;

`