import styled from 'styled-components'

export const PreviewText = styled.div<{ hasAnimation: boolean }>`
  font-size: 0.9rem;
  color: ${(props) => props.theme.palette.common.white};
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  ${(props) => {
    if (props.hasAnimation) {
      return `
      animation-name: fadeIn;
      animation-delay: 1s;
      animation-duration: 1.5s;
      animation-fill-mode: both; 
      `
    }
    return `
      animation-name: none;
    `
  }}
`

export const PreviewWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.palette.common.black};
  &:hover {
    cursor: pointer;
  }
`
