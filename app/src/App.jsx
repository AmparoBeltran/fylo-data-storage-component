import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import MainContainer from "./components/MainContainer"

const theme = {
  colors: {
    //Primary
    gradient: 'hsl(6, 100%, 80%) to hsl(335, 100%, 65%)',

    //Neutral
    paleBlue: 'hsl(243, 100%, 93%)',
    grayishBlue: 'hsl(229, 7%, 55%)',
    darkBlue: 'hsl(228, 56%, 26%)',
    veryDarkBlue: 'hsl(229, 57%, 11%)',
  },

  desktop: '1440px'
}
function App() {


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App
