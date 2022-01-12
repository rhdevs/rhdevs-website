import styled from 'styled-components'

export const BaseButton = styled.div<{ fontSize?: string; isActive?: boolean }>`
  width: fit-content;
  justify-content: center;
  align-items: center;
  .ant-btn-text {
    color: ${(props) => `${props.theme.palette.common.black}`};
    font-size: ${(props) => props.fontSize};
    border: 0px;
    border-bottom: transparent 2px solid;
    background-color: transparent;
    transition: background-image 0.4s ease-in-out;
    &:hover {
      background-position: 50% 1.2em;
      color: ${(props) => `${props.theme.palette.primary}`};
      //css solution for styled underline
      background-image: linear-gradient(
        to bottom,
        ${(props) => `${props.theme.palette.primary}`},
        ${(props) => `${props.theme.palette.primary}`}
      );
      background-repeat: no-repeat;
      // background-position: 50% 2em;
      // change this to adjust width and thickness out underline
      // had to use 18 px instead of 8px
      background-size: calc(100% - 18px) 2px;
    }}
    ${(props) => {
      if (props.isActive) {
        return `
        .ant-btn-text {
          // background-image: linear-gradient(to bottom, red 33%, transparent 33%, transparent 66%, red 66%, red);
          background-position: 50% 1.2em;
          color: ${props.theme.palette.primary};
          background-image: linear-gradient(
            to bottom,
            ${props.theme.palette.primary},
            ${props.theme.palette.primary}
          );
          background-repeat: no-repeat;
          // change this to adjust width and thickness out underline
          background-size: calc(100% - 18px) 2px;
        }}
        `
      }
      return `
        color: ${props.theme.palette.primary}
      `
    }}
  }
`
