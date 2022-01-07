import styled from 'styled-components'

export const BaseButton = styled.div`
  padding: 0.5rem 1rem;
  .ant-btn-text {
    height: auto;
    font-size: 20px;
    border: 0px;
    border-bottom: transparent 2px solid;
    background-color: black;
    color: white;
    padding: 1px;
    padding-bottom: 0px;
    transition: border-bottom 0.4s ease-in-out;
    &:hover {
      border-bottom: 2px solid white;
    }
    &:active {
      color: cyan;
      border-bottom: 2px solid cyan;
    }
    &:focus {
      color: cyan;
      border-bottom: 2px solid cyan;
    }
  }
`
