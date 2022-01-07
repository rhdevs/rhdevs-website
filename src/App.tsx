import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/routes'
import { GlobalStyle } from './styles/GlobalStyles'
import Theme from './styles/Theme'

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <Routes />
      </Theme>
    </BrowserRouter>
  )
}

export default App
