import styled from 'styled-components'
import Null from '../../assets/noimg.png'

export const MainContainer = styled.div`
  height: 33%;
  width: 80%;
  display: flex;
  margin: auto;
  background-color: black;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
`

export const ImageContainer = styled.div<{ image: string }>`
  width: 70%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${(props) => (props.image === '' ? `background-image: url(${Null});` : `background-image: url(${props.image});`)}
`

export const TextContainer = styled.div`
  height: 300px;
  width: 50%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  height: 45%;
  text-align: center;
  color: #0cbcbc;
  font-size: large;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 3%;
`

export const Body = styled.div`
  height: 55%;
  width: 80%;
  text-align: center;
  margin-left: 10%;
  color: white;
`
