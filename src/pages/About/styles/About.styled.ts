import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 200px 0 200px 0;
  ${(props) => `background-color: ${props.theme.palette.common.black};`}
`
