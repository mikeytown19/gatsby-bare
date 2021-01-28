import React from 'react'
import {Global, css } from '@emotion/react'

export const GlobalStyles = ({theme}) => (
  <Global
    styles={css`

        :root {
          font-family: "montserrat";
          --font-weight-medium: 400;
          --font-weight-bold: 600;
          --font-size-1: ${theme.fontSizes[1]}px;
          --font-size-2: ${theme.fontSizes[2]}px;
          --font-size-3: ${theme.fontSizes[3]}px;
          --font-size-4: ${theme.fontSizes[4]}px;
          --font-size-5: ${theme.fontSizes[5]}px;
          --font-size-6: ${theme.fontSizes[6]}px;
          --color-primary: red;
          --color-text: teal;



          @media screen and (max-width: 750px) {
            --color-primary: blue;
            --font-size-6: ${theme.fontSizes[4]}px;
        }
     }

    `}
  />
)