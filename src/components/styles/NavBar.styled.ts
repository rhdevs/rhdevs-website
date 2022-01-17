import styled from 'styled-components'

export const NavContainer = styled.div`
  width: 100vw;
  height: 6vw;
  display: flex;
  justify-content: space-evenly;
  ${(props) => `background-color: ${props.theme.palette.common.black};`}
`

export const BufferContainer = styled.div`
  height: 30px;
`

export const NavBarStyles = styled.div<{ isVisible: boolean }>`
  width: 65%;
  display: flex;
  justify-content: space-evenly;
  top: ${(props) => (props.isVisible ? '0' : '-60px')};
`
