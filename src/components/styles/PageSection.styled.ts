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

export const TextContainer = styled.div`
  height: 300px;
  width: 50%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div<{ class?: string }>`
  height: 45%;
  text-align: ${(props) => (props.class === 'EVENTS' ? 'left' : 'center')};
  color: #0cbcbc;
  font-size: large;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 3%;
`

export const Body = styled.div<{ class?: string }>`
  height: 55%;
  width: 80%;
  text-align: ${(props) => (props.class === 'EVENTS' ? 'left' : 'center')};
  margin-left: 10%;
  color: white;
`
