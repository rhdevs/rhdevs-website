import styled, { keyframes, FontType } from 'styled-components'
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

export const MainContainer = styled.div<{ imgPosition?: 'left' | 'right' }>`
  display: grid;
  justify-content: space-between;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: ${(props) => props.imgPosition && 'auto'} auto;
  grid-template-areas: '${(props) => props.imgPosition === 'left' && 'image'} text ${(props) =>
    props.imgPosition === 'right' && 'image'}';
  gap: 5rem;
  animation-duration: 1s;
  animation-name: ${fadeInUp};
`

export const ImageContainer = styled.img`
  grid-area: image;
  object-fit: contain;
  max-height: 350px;
  max-width: 350px;
`

export const TextContainer = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

export const Title = styled.h2<{ events?: boolean; fontType: FontType }>`
  color: ${(props) => (props.events ? 'white' : props.theme.palette.primary)};
  ${fontTypeCss}
  margin-block: 0;
`

export const Body = styled.p<{ events?: boolean; fontType: FontType }>`
  ${(props) => `color: ${props.theme.palette.common.gray};`}
  ${fontTypeCss}
  white-space: pre-wrap;
  margin: 0;
  text-align: justify;
`
