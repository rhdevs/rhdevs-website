import ClickToCopySection from './components/ClickToCopySection/ClickToCopySection'
import { GlobalStyle } from './styles/GlobalStyles'
import Theme from './styles/Theme'

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <p>App file</p>
      {/* <ClickToCopySection title="Address" text="19 Kent Ridge Cres, Singapore 119278" /> */}
    </Theme>
  )
}

export default App
