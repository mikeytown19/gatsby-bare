import React from 'react'
import {Global, css } from '@emotion/react'

export const GlobalStyles = ({theme}) => (
  <Global
    styles={css`
    html, body {
      margin: 0;
      padding: 0;
    }

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

          ${theme.fontSizes.map((fontSize, index) => `--font-size-${index}: ${fontSize}px`)}


          --color-primary: tomato;
          --bg-primary: tomato;
          --color-text: teal;



          /* SPACING  */
          ${theme.space.map((spc, index) => `--spacing-${index}: ${spc}px`)}

          //Radii
          --radius: ${theme.radii.default}px;
          --radius-circle: ${theme.radii.default}px;

          //Shadows
          --shadow-sm: ${theme.shadows.small};
          --shadow-md: ${theme.shadows.med};
          --shadow-lg: ${theme.shadows.large};



          // 768px breakpoint //
          @media screen and (max-width: ${theme.breakpoints.md}) {
            --color-primary: blue;
            --font-size-6: ${theme.fontSizes[4]}px;
            --font-size: 1rem;
        }
     }

    `}
  />
)