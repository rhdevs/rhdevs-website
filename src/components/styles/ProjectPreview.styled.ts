import styled, { keyframes } from 'styled-components'

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const PreviewText = styled.div`
  font-size: 2.2rem;
  color: ${(props) => props.theme.palette.common.black};
  padding: 0.5rem;
  animation-name: fadeIn;
  animation-delay: 1.5s;
  animation-duration: 0.5s;
  animation-fill-mode: both;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`

export const PreviewWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
