import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: auto;
  min-height: 800px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  > * {
    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    -webkit-animation-delay: 0.5s;
    -moz-animation-delay: 0.5s;
    animation-delay: 0.5s;
    animation-name: fadeIn;
  }
`
