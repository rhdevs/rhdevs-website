import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoadingSpinner from './components/LoadingSpinner'
import { Routes } from './routes/routes'
import { GlobalStyle } from './styles/GlobalStyles'
import Theme from './styles/Theme'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Theme>
          <GlobalStyle />
          <Routes />
        </Theme>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
