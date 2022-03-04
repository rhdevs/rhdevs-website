import styled, { keyframes } from 'styled-components'
import Null from '../../assets/noimg.png'

const fadeInUp = keyframes`
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
  min-height: 37vh;
  margin: 5px 0;
  display: flex;
  background-color: black;
  animation-duration: 1s;
  animation-name: ${fadeInUp};
  margin-bottom: 13vh;
`

export const ImageContainer = styled.div<{ image: string; events?: boolean }>`
  height: 100%;
  width: ${(props) => (props.events ? '20%' : '50%')};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${(props) => (props.image === '' ? `background-image: url(${Null});` : `background-image: url(${props.image});`)}
`

export const TextContainer = styled.div<{ events?: boolean }>`
  height: 100%;
  width: ${(props) => (props.events ? '80%' : '50%')};
  padding: ${(props) => (props.events ? '10px 15px' : '10px 0')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  over-flow: auto;
`

export const Title = styled.div<{ events?: boolean; textPosition: string }>`
  color: ${(props) => (props.events ? 'white' : props.theme.palette.primary)};
  font-size: ${(props) => (props.events ? 'medium' : 'large')};
  ${(props) => (props.textPosition === 'right' ? '' : 'padding-left: 15%')};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 3%;
`

export const Body = styled.div<{ events?: boolean; textPosition: string }>`
  ${(props) => (props.textPosition === 'right' ? 'width: 90%' : 'width: 100%')};
  ${(props) => (props.textPosition === 'right' ? '' : 'padding-left: 15%')};
  ${(props) => `color: ${props.theme.palette.common.gray};`}
  white-space: pre-wrap;
`
export const BufferContainer = styled.div`
  width: 2vw;
`
