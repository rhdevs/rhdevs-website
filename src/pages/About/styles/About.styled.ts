import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  ${(props) => `background-color: ${props.theme.palette.common.black};`}
`
