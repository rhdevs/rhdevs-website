import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 65%;
  display: flex;
  margin-left: 10%;
  justify-content: space-between;
`

export const NavContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.palette.common.black};
`
