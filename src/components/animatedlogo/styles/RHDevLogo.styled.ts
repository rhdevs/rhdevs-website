import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  animation-delay: 1s;
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
      left: -150%;
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
  animation-delay: 2.5s;
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
  top: 14%;
  left: 73%;
  transform: rotate(45deg);
  background-color: rgb(196, 196, 196, 1);
  position: relative;
  animation: fadeIn;
  animation-delay: 3s;
  animation-duration: 3s;

  @keyframes fadeIn {
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
  height: 360px;
  bottom: 8%;
  left: 44%;
  background: rgb(196, 196, 196, 0.5);
  transform: rotate(45deg);
  position: absolute;
  animation-fill-mode: both;
  animation-delay: 4s;
  animation-name: secondFadeIn;
  animation-duration: 1s;

  @keyframes secondFadeIn {
    from {
      opacity: 0;
      height: 30px;
      bottom: 78%;
      left: 73%;
    }
    to {
      opacity: 1;
      height: 360px;
      bottom: 8%;
    }
  }
`
