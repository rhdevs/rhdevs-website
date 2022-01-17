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
export const PreviewTitle = styled.div<{ fontSize?: string }>`
  width: fit-content;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.common.white};
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  border: 0;
  background-color: ${(props) => props.theme.palette.common.black};
  transition: background-image 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    background-position: 50% 1.15em;
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.palette.common.white},
      ${(props) => props.theme.palette.common.white}
    );
    background-repeat: no-repeat;
    background-size: calc(100% - 18px) 2px;
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
