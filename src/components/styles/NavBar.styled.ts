import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 5.5rem;
  display: flex;
`
export const BufferContainer = styled.div`
  width: 2vw;
`
export const NavBarStyles = styled.div<{ isVisible: boolean }>`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  margin-left: 8%;
  padding-top: 0.5%;
  position: fixed;
  transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  transition: all 0.3s ease-in-out;
  ${(props) => `background-color: ${props.theme.palette.common.black};`}
  @media (max-width: 900px) {
    margin-left: 4%;
    padding-top: 3%;
    width: 80%;
  }
  @media (max-width: 650px) {
    margin-left: 0;
    width: 95%;
  }
`
export const NavContainer = styled.div`
  display: flex;
`
