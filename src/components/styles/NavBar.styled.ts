import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  ${(props) => `background-color: ${props.theme.palette.common.black};`}
`
export const NavContainer = styled.div`
  width: 65vw;
  height: 6vw;
  display: flex;
  margin-left: 5%;
  justify-content: space-evenly;
`
