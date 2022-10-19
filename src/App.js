import React from "react"
import Home from "../src/View/Home"
import { IconContext } from 'react-icons'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './base/globalStyles'
import {theme} from './base/theme'

jsakdjkjdksjdakjdkajdksdjskdjsjskd
function App() {
  return (
    <ThemeProvider theme={theme()}>
    <IconContext.Provider value={{ className: 'icon' }}>
    <GlobalStyles />
    <Home />
    </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
