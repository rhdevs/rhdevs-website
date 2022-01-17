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
          <ProjectPreview
            title="RH app"
            text="We created a telegram bot to assist Raffles Hall CCA leaders with sending out hall wide announcements."
            hasAnimation
            onClick={() => undefined}
          />
        </Theme>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
