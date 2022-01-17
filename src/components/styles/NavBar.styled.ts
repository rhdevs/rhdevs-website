import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
`

export const NavContainer = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.palette.common.black};
`

export const BufferContainer = styled.div`
  height: 30px;
`

export const navBarStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
}
