import React from 'react'
import styled from '@emotion/styled'

const Button = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Button


export const Wrapper = styled.button`
  margin: 0;
  background-color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  padding-left: var(--spacing-5);
  padding-right: var(--spacing-5);
  font: inherit;
  font-size: var(--font-size);


  border: 0;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s;
  -webkit-appearance: button;

    > * {
      pointer-events: none;
    }
`
