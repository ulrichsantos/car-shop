import { GlobalStyle } from "./styles/global"
import { DefaultTheme, ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/deafult"

function App() {

  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
