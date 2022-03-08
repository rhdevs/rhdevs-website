import styled, { keyframes, FontType, css } from 'styled-components'
import { fontTypeCss } from '../../styles/index.styled'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const PreviewText = styled.div<{ hasAnimation?: boolean; fontType: FontType }>`
  ${fontTypeCss}
  color: ${(props) => props.theme.palette.common.gray};
  ${(props) =>
    props.hasAnimation &&
    css`
      animation-name: ${fadeIn};
      animation-delay: 1s;
      animation-duration: 1.5s;
      animation-fill-mode: both;
    `}
`

export const PreviewTitle = styled.div<{ fontType: FontType }>`
  ${fontTypeCss}
  color: ${(props) => props.theme.palette.common.white};
  border: 0;
  background-color: ${(props) => props.theme.palette.common.black};
  transition: background-image 0.4s ease-in-out;
  &:hover {
    background-position: 50% 1.15em;
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.palette.common.white},
      ${(props) => props.theme.palette.common.white}
    );
    background-repeat: no-repeat;
    background-size: calc(100% - 18px) 2px;
  }
`

export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 25%;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.palette.common.black};
  cursor: pointer;
  ${PreviewText} {
    margin-top: 20px;
  }
`
