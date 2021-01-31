import React from 'react'
import {Global, css } from '@emotion/react'

export const GlobalStyles = ({theme}) => (
  <Global
    styles={css`

        * {
          box-sizing: inherit;
          &::before,
          &::after {
            box-sizing: inherit;
          }

          &::-moz-focus-inner {
            border: 0;
          }
        }

        input,
        select,
        textarea,
        button {
          font-size: inherit;
          font-family: inherit;
        }

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


          /* SPACING  */

          --spacing-1: ${theme.space[0]}px;
          --spacing-2: ${theme.space[1]}px;
          --spacing-3: ${theme.space[2]}px;
          --spacing-4: ${theme.space[3]}px;
          --spacing-5: ${theme.space[4]}px;
          --spacing-6: ${theme.space[5]}px;
          --spacing-7: ${theme.space[6]}px;
          --spacing-8: ${theme.space[7]}px;


          //Radii
          --radius: ${theme.radii.default}px;
          --radius-circle: ${theme.radii.default}px;



          // 768px breakpoint //
          @media screen and (max-width: ${theme.breakpoints.md}) {
            --color-primary: blue;
            --font-size-6: ${theme.fontSizes[4]}px;
            --spacing-1: ${theme.space[0]}px;
            --spacing-2: ${theme.space[0]}px;
            --spacing-3: ${theme.space[1]}px;
            --spacing-4: ${theme.space[2]}px;
            --spacing-5: ${theme.space[3]}px;
            --spacing-6: ${theme.space[4]}px;
            --spacing-7: ${theme.space[5]}px;
            --spacing-8: ${theme.space[6]}px;
        }
     }

    `}
  />
)