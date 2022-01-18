import { ImageContainer, MainContainer, TextContainer, Title, Body } from './styles/PageSection.styled'

type Props = {
  title: string
  description: string
  position: 'left' | 'right'
  image: string
  class?: string
}

function PageSectionComponent(props: Props) {
  return (
    <MainContainer>
      {props.position !== 'right' && <ImageContainer image={props.image} />}
      <TextContainer>
        <Title class={props.class}>{props.title}</Title>
        <Body class={props.class}>{props.description}</Body>
      </TextContainer>
      {props.position === 'right' && <ImageContainer image={props.image} />}
    </MainContainer>
  )
}

export default PageSectionComponent
