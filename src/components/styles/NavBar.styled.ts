import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 5.5rem;
  display: flex;
  ${(props) => `background-color: ${props.theme.palette.common.black};`}
`
export const BufferContainer = styled.div`
  width: 2vw;
`
export const NavBarStyles = styled.div<{ isVisible: boolean }>`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  margin-left: 8%;
  margin-top: 0.5%;
  top: ${(props) => (props.isVisible ? '0' : '-60px')};
  @media (max-width: 900px) {
    margin-left: 4%;
    margin-top: 3%;
    width: 80%;
  }
  @media (max-width: 650px) {
    margin-left: 0%;
    width: 100%;
  }
`
export const NavContainer = styled.div`
  display: flex;
`
