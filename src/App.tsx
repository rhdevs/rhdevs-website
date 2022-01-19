import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoadingSpinner from './components/LoadingSpinner'
import { Routes } from './routes/routes'
import { GlobalStyle } from './styles/GlobalStyles'
import Theme from './styles/Theme'
import ProjectPreview from './components/ProjectPreview'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Theme>
          <GlobalStyle />
          <Routes />
          <ProjectPreview title="Hello" text="This is description" hasAnimation />
        </Theme>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
