import styled, { keyframes } from 'styled-components'
import Null from '../../assets/noimg.png'

const fadeinUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: none;
    }
`

export const MainContainer = styled.div`
  height: 33%;
  width: 80%;
  display: flex;
  margin: auto;
  background-color: black;
  animation-duration: 1s;
  animation-name: ${fadeinUp};
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
  text-align: ${(props) => (props.events ? 'left' : 'center')};
  color: ${(props) => (props.events ? 'white' : props.theme.palette.primary)};
  font-size: large;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 3%;
  ${(props) => props.events && 'padding-left: 10%'};
`

export const Body = styled.div<{ events?: boolean }>`
  height: 55%;
  width: 80%;
  text-align: ${(props) => (props.events ? 'left' : 'center')};
  margin-left: 10%;
  ${(props) => `color: ${props.theme.palette.common.white};`}
`
export const BufferContainer = styled.div`
  width: 2vw;
`
