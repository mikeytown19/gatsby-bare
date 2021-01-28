import React from 'react'
import styled from '@emotion/styled'

const Typography = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Typography

const Wrapper = styled.p`
    color: var(--color-primary);
    font-size: var(--font-size-6);
  `;
