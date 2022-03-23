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

export const MainContainer = styled.div<{ hasImage: boolean; mayNeedReverse?: boolean }>`
  margin-top: 20px;
  margin-bottom: 75px;
  display: flex;
  padding: 0 50px 0 0;
  justify-content: space-between;
  background-color: black;
  animation-duration: 1s;
  animation-name: ${fadeInUp};

  @media screen and (max-width: 800px) {
    flex-direction: ${(props) => (props.mayNeedReverse ? 'column-reverse' : 'column')};
    align-items: center;
  }
`

export const ImageContainer = styled.div<{ image: string; textPosition?: 'left' | 'right'; events?: boolean }>`
  max-width: 350px;
  min-height: 300px;
  width: ${(props) => (props.events ? '20%' : '50%')};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${(props) => (props.image === '' ? `background-image: url(${Null});` : `background-image: url(${props.image});`)}

  @media screen and (min-width: 800px) {
    ${(props) => (props.textPosition === 'right' ? 'margin-left: 100px' : 'margin-right: 20px')};
  }

  @media screen and (max-width: 800px) {
    margin: 50px 0;
  }
`

export const TextContainer = styled.div<{ hasImage: boolean }>`
  margin-left: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  over-flow: auto;

  @media screen and (min-width: 800px) {
    height: width: ${(props) => (props.hasImage ? '50%' : '100%')};
    width: ${(props) => (props.hasImage ? '50%' : '83%')};
  }
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
