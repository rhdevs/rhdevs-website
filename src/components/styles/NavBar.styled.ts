import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  ${(props) => `background-color: ${props.theme.palette.common.black};`}
`

export const NavContainer = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.palette.common.black};
`
