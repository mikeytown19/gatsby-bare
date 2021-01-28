import React from 'react'
import styled from '@emotion/styled'
import { Wrapper as AsideWrapper } from '../Aside'

const TextLink = ({children}) => {
  return (
  <Wrapper>
    {children}
  </Wrapper>
  )
}

export default TextLink

const Wrapper = styled.a`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);

  ${AsideWrapper}  {
    color: var(--color-text);

    font-weight: var(--font-weight-bold);
  }
`;