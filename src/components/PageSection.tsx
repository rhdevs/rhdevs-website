import React from 'react'
import { ImageContainer, MainContainer, TextContainer, Title, Body } from './styles/PageSection.styled'

type Props = {
  title: string
  description: string
  position: string
  image: string
}

function PageSectionComponent(props: Props) {
  if (props.position === 'right') {
    return (
      <MainContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          <Body>{props.description}</Body>
        </TextContainer>
        <ImageContainer image={props.image} />
      </MainContainer>
    )
  }
  return (
    <MainContainer>
      <ImageContainer image={props.image} />
      <TextContainer>
        <Title>{props.title}</Title>
        <Body>{props.description}</Body>
      </TextContainer>
    </MainContainer>
  )
}

export default PageSectionComponent
