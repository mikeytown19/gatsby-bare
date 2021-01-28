import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as EmotionThemeProvider} from '@emotion/react'
import {GlobalStyles} from './GlobalStyles'
import 'typeface-montserrat'
import theme from './theme'



const ThemeProvider = ({children}) =>
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles theme={theme}/>
        {children}
    </EmotionThemeProvider>

ThemeProvider.propTypes = {
  theme: PropTypes.object, // eslint-disable-line
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
