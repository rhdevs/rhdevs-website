import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 5.5rem;
  display: flex;
`

export const NavBarStyles = styled.div<{ isVisible: boolean }>`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-left: 8%;
  padding-top: 0.5%;
  position: fixed;
  transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.3s ease-in-out;
  ${(props) => `background-color: ${props.theme.palette.common.black};`}

  div + div {
    margin-left: 3vw;
  }

  @media (max-width: 900px) {
    margin-left: 4%;
  }
  @media (max-width: 650px) {
    margin-left: 4%;
  }
`

export const NavContainer = styled.div`
  display: flex;
`
