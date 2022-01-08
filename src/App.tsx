import { GlobalStyle } from './styles/GlobalStyles'
import Theme from './styles/Theme'
import Button from './components/Button'

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <p>App file</p>
      <Button text="LinkedIn" link="https://www.instagram.com" fontSize="30px" />
    </Theme>
  )
}

export default App
