import styled from 'styled-components'

export const MainContainer = styled.div<{ isVisible: boolean }>`
  width: 100vw;
  height: 4rem;
  margin: 0;
  ${(props) => props.isVisible && 'position: fixed;'}
  top: ${(props) => (props.isVisible ? 0 : '-4rem')};
  transition: top 0.3s;
  background-color: ${(props) => `${props.theme.palette.common.black}`};
`

export const NavItemContainer = styled.div`
  height: 4rem;
  display: flex;
  margin-left: 3rem;

  div + div {
    margin-left: 2rem;
  }
`

export const NavBarSpace = styled.div<{ isVisible: boolean }>`
  height: ${(props) => (props.isVisible ? '4rem' : '0')};
`
