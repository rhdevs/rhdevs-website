import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
`

export const LogoContainer = styled.div`
  width: 400px;
  height: 400px;
  min-width: 400px;
  position: relative;
`

export const LeftArrow = styled.div`
  width: 50px;
  height: 180px;
  top: 0;
  left: 10%;
  background: white;
  position: absolute;
  transform: rotate(45deg);
  animation-name: leftIn;
  animation-duration: 1s;
  animation-fill-mode: both;

  ::after {
    content: '';
    width: 50px;
    height: 180px;
    transform: rotate(90deg);
    background: white;
    position: absolute;
    top: 65px;
    left: 65px;
  }

  @keyframes leftIn {
    from {
      left: -100%;
    }
    to {
      left: 28%;
    }
  }
`

export const RightArrow = styled.div`
  width: 50px;
  height: 180px;
  top: 20%;
  background: white;
  position: absolute;
  transform: rotate(-45deg);
  animation-name: rightIn;
  animation-delay: 1.5s;
  animation-duration: 1s;
  animation-fill-mode: both;

  ::after {
    content: '';
    width: 50px;
    height: 180px;
    transform: rotate(-90deg);
    background: white;
    position: absolute;
    top: 65px;
    right: 65px;
  }

  @keyframes rightIn {
    from {
      right: -150%;
    }
    to {
      right: 28%;
    }
  }
`

export const SmallBlock = styled.div`
  width: 50px;
  height: 30px;
  top: 12%;
  left: 76%;
  transform: rotate(45deg);
  background-color: rgb(196, 196, 196, 0);
  position: relative;
  animation-name: firstFadeIn;
  animation-delay: 3s;
  animation-duration: 1.5s;

  @keyframes firstFadeIn {
    0% {
      background-color: rgb(196, 196, 196, 0);
    }
    75% {
      background-color: rgb(196, 196, 196, 0.35);
    }
    100% {
      background-color: rgb(196, 196, 196, 0);
    }
  }
`

export const Line = styled.div`
  width: 50px;
  height: 375px;
  bottom: 8%;
  left: 45%;
  background: rgb(196, 196, 196, 0.5);
  transform: rotate(45deg);
  position: relative;
  animation-fill-mode: both;
  animation-delay: 4s;
  animation-name: secondFadeIn;
  animation-duration: 1s;

  @keyframes secondFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
