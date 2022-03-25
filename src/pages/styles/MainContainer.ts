import styled from 'styled-components'
import { NAV_BAR_HEIGHT } from '../../components/styles/NavBar.styled'

export const MainContainer = styled.div`
  height: calc(100vh - ${NAV_BAR_HEIGHT});
  overflow: hidden;
`
