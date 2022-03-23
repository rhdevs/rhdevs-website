import styled, { keyframes, FontType } from 'styled-components'
import Null from '../../assets/noimg.png'
import { fontTypeCss } from '../../styles/index.styled'

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

export const MainContainer = styled.div<{ hasImage: boolean }>`
  margin: 5px 0;
  margin-bottom: 80px;
  display: flex;
  background-color: black;
  animation-duration: 1s;
  animation-name: ${fadeInUp};
`

export const ImageContainer = styled.div<{ image: string; events?: boolean }>`
  min-height: 350px;
  width: ${(props) => (props.events ? '20%' : '50%')};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${(props) => (props.image === '' ? `background-image: url(${Null});` : `background-image: url(${props.image});`)}
`

export const TextContainer = styled.div<{ hasImage: boolean }>`
  height: 100%;
  width: ${(props) => (props.hasImage ? '50%' : '83%')};
  margin-left: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  over-flow: auto;
`

export const Title = styled.div<{ events?: boolean; textPosition: string; fontType: FontType }>`
  color: ${(props) => (props.events ? 'white' : props.theme.palette.primary)};
  ${fontTypeCss}
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
`

export const Body = styled.div<{ events?: boolean; textPosition: string; fontType: FontType }>`
  ${(props) => (props.textPosition === 'right' ? 'width: 90%' : 'width: 100%')};
  ${(props) => `color: ${props.theme.palette.common.gray};`}
  ${fontTypeCss}
  white-space: pre-wrap;
`
export const BufferContainer = styled.div`
  width: 2vw;
`
