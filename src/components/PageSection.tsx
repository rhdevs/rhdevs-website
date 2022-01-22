import { ImageContainer, MainContainer, BufferContainer, TextContainer, Title, Body } from './styles/PageSection.styled'

type Props = {
  title: string
  description: string
  textPosition: 'left' | 'right'
  image: string
}

function PageSectionComponent(props: Props) {
  return (
    <MainContainer>
      {props.textPosition === 'left' && <ImageContainer image={props.image} />}
      {props.textPosition === 'left' && <BufferContainer />}
      <TextContainer>
        <Title>{props.title}</Title>
        <Body>{props.description}</Body>
      </TextContainer>
      {props.textPosition === 'right' && <BufferContainer />}
      {props.textPosition === 'right' && <ImageContainer image={props.image} />}
    </MainContainer>
  )
}

export default PageSectionComponent
