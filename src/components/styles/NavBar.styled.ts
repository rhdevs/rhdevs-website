import styled from 'styled-components'

export const NavContainer = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.palette.common.black};
`

export const BufferContainer = styled.div`
  height: 30px;
`

export const NavBarStyles = styled.div<{ isVisible: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  position: fixed;
  top: ${(props) => (props.isVisible ? '0' : '-60px')};
`
