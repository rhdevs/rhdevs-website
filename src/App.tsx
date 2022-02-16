import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoadingSpinner from './components/LoadingSpinner'
import NavBar from './components/NavBar'
import { Routes } from './routes/routes'
import { GlobalStyle } from './styles/GlobalStyles'
import Theme from './styles/Theme'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Theme>
          <GlobalStyle />
          <NavBar />
          <Routes />
        </Theme>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
