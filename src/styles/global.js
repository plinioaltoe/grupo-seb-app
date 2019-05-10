import { createGlobalStyle } from 'styled-components'

import 'font-awesome/css/font-awesome.css'
import { colors } from './index'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${colors.secondary};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Helvetica, sans-serif;
  }
`
export default GlobalStyle
