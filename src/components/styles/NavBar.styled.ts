import styled from 'styled-components'

export const MainContainer = styled.div<{ isVisible: boolean }>`
  width: 100vw;
  height: 5rem;
  position: fixed;
  transform: ${(props) => (props.isVisible ? 'translateY(0%)' : 'translateY(-150%)')};
  transition: transform 0.3s ease-in-out;
  background-color: ${(props) => `${props.theme.palette.common.black}`};
`

export const NavItemContainer = styled.div`
  height: 5rem;
  display: flex;
  margin-left: 3rem;

  div + div {
    margin-left: 2rem;
  }
`

export const NavBarSpace = styled.div`
  margin-top: 5.5rem;
`
