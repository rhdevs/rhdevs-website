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
  margin-top: 20px;
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

export const PreviewTitle = styled.label<{ fontType: FontType }>`
  ${fontTypeCss}
  color: ${(props) => props.theme.palette.common.white};
  border: 0;
  background-color: ${(props) => props.theme.palette.common.black};
  transition: background-image 0.4s ease-in-out;
  width: fit-content;
  &:hover {
    background-position: 9px 1.15em;
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
  background-color: ${(props) => props.theme.palette.common.black};
  cursor: pointer;
  flex: 1 1 100%;
`
