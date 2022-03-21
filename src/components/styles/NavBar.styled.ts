import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 5rem;
`

export const NavItemContainer = styled.div<{ isVisible: boolean }>`
  height: 5rem;
  display: flex;
  position: fixed;
  margin-left: 3rem;
  transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.3s ease-in-out;
  background-color: ${(props) => `${props.theme.palette.common.black}`};

  div + div {
    margin-left: 2rem;
  }
`
