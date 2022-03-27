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

export const MainContainer = styled.div<{ imgPosition?: 'left' | 'right'; responsiveReverse?: boolean }>`
  justify-content: space-between;
  animation-duration: 1s;
  animation-name: ${fadeInUp};
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: ${(props) => props.imgPosition && 'auto'} auto;
  grid-template-areas: '${(props) => props.imgPosition === 'left' && 'image'} text ${(props) =>
    props.imgPosition === 'right' && 'image'}';
  gap: 5rem;

  @media screen and (max-width: 900px) {
    gap: 3rem;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: ${(props) => (props.responsiveReverse ? 'column-reverse' : 'column')};
    align-items: flex-start;
    padding: 0;
    gap: 2rem;
    margin-bottom: 50px;
  }
`

export const ImageContainer = styled.img`
  object-fit: contain;
  max-height: 350px;
  max-width: 350px;
  grid-area: image;
  margin: auto;

  @media screen and (max-width: 700px) {
    margin: 0 auto;
    max-height: 250px;
    max-width: 250px;
    width: 70%;
  }
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
