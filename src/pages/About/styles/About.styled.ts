import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: auto;
  height: calc(100vh - 5.5rem);
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
`

export const MiddleTitle = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.palette.primary};
  font-weight: 600;
  font-size: 48px;
`
