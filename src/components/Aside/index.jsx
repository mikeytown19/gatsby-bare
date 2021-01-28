import React from 'react'
import styled from '@emotion/styled'
const Aside = ({children}) => {
  return (
  <Wrapper>
    {children}
  </Wrapper>
  )
}

export const Wrapper = styled.aside`
  font-size: var(--font-size-5);
`

export default Aside
