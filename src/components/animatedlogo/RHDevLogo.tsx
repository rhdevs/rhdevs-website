import React from 'react'

import { LeftArrow, LogoContainer, RightArrow, Line, MainContainer, SmallBlock } from './styles/RHDevLogo.styled'

function RHDevLogo() {
  return (
    <MainContainer>
      <LogoContainer>
        <LeftArrow />
        <RightArrow />
        <SmallBlock />
        <Line />
      </LogoContainer>
    </MainContainer>
  )
}

export default RHDevLogo
