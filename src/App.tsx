import PageSectionComponent from './components/PageSection'
import { GlobalStyle } from './styles/GlobalStyles'
import Theme from './styles/Theme'

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <PageSectionComponent
        title="Mission"
        description="A closely-knitted community of members with different niches and readily-available mentors of different stages"
        image=""
        position="right"
      />
      <p>App file</p>
    </Theme>
  )
}

export default App
