import styled from 'styled-components'
import Null from '../../assets/noimg.png'

export const MainContainer = styled.div`
  height: 33%;
  width: 80%;
  display: flex;
  margin: auto;
  background-color: black;
`

export const ImageContainer = styled.div<{ image: string }>`
  width: 70%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${(props) => (props.image === '' ? `background-image: url(${Null});` : `background-image: url(${props.image});`)}
`

export const TextContainer = styled.div<{ events?: boolean }>`
  height: 300px;
  width: ${(props) => (props.events ? '80%' : '50%')};
  display: flex;
  flex-direction: column;
`

export const Title = styled.div<{ events?: boolean }>`
  height: 45%;
  text-align: ${(props) => (props.events === true ? 'left' : 'center')};
  color: ${(props) => (props.events === true ? 'white' : props.theme.palette.primary)};
  font-size: large;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 3%;
`

export const Body = styled.div<{ events?: boolean }>`
  height: 55%;
  width: 80%;
  text-align: ${(props) => (props.events === true ? 'left' : 'center')};
  margin-left: ${(props) => (props.events === true ? '0' : '10%')};
  color: white;
`
