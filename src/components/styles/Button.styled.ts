import styled from 'styled-components'

export const BaseButton = styled.div<{ fontSize?: string }>`
  padding: 0.5rem 1rem;
  .ant-btn-text {
    height: auto;
    font-size: ${(props) => props.fontSize};
    border: 0px;
    border-bottom: transparent 2px solid;
    background-color: #000;
    color: #fff;
    padding: 1px;
    padding-bottom: 0px;
    transition: border-bottom 0.4s ease-in-out;
    &:hover {
      border-bottom: 2px solid #fff;
    }
    &:active {
      color: #10bcbc;
      border-bottom: 2px solid #10bcbc;
    }
    &:focus {
      color: #10bcbc;
      border-bottom: 2px solid #10bcbc;
    }
  }
`
