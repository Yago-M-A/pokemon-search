import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('../fonts/roboto-v29-latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/roboto-v29-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/roboto-v29-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/roboto-v29-latin-300.woff') format('woff'), /* Modern Browsers */
        url('../fonts/roboto-v29-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/roboto-v29-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('../fonts/roboto-v29-latin-500.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/roboto-v29-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/roboto-v29-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/roboto-v29-latin-500.woff') format('woff'), /* Modern Browsers */
        url('../fonts/roboto-v29-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/roboto-v29-latin-500.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
export default GlobalStyles
