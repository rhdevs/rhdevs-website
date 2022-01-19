import { ImageContainer, MainContainer, TextContainer, Title, Body } from './styles/PageSection.styled'

type Props = {
  title: string
  description: string
  position: 'left' | 'right'
  image: string
  events?: boolean
}

function PageSectionComponent(props: Props) {
  return (
    <MainContainer>
      {props.position !== 'right' && <ImageContainer image={props.image} />}
      <TextContainer events={props.events}>
        <Title events={props.events}>{props.title}</Title>
        <Body events={props.events}>{props.description}</Body>
      </TextContainer>
      {props.position === 'right' && <ImageContainer image={props.image} />}
    </MainContainer>
  )
}

export default PageSectionComponent
