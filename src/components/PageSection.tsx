import { ImageContainer, MainContainer, BufferContainer, TextContainer, Title, Body } from './styles/PageSection.styled'

type Props = {
  title: string
  description: string
  position: string
  image: string
}

function PageSectionComponent(props: Props) {
  return (
    <MainContainer>
      {props.position !== 'right' && <ImageContainer image={props.image} />}
      {props.position !== 'right' && <BufferContainer />}
      <TextContainer>
        <Title>{props.title}</Title>
        <Body>{props.description}</Body>
      </TextContainer>
      {props.position === 'right' && <BufferContainer />}
      {props.position === 'right' && <ImageContainer image={props.image} />}
    </MainContainer>
  )
}

export default PageSectionComponent
