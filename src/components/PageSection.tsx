import { ImageContainer, MainContainer, BufferContainer, TextContainer, Title, Body } from './styles/PageSection.styled'

type Props = {
  title: string
  description: string
  textPosition: 'left' | 'right'
  image?: string
  events?: boolean
} & typeof defaultProps

const defaultProps = {
  image: '',
}

function PageSectionComponent(props: Props) {
  return (
    <MainContainer>
      {props.textPosition === 'left' && <ImageContainer image={props.image} />}
      {props.textPosition === 'left' && <BufferContainer />}
      <TextContainer>
        <Title events={props.events}>{props.title}</Title>
        <Body events={props.events}>{props.description}</Body>
      </TextContainer>
      {props.textPosition === 'right' && <BufferContainer />}
      {props.textPosition === 'right' && <ImageContainer image={props.image} />}
    </MainContainer>
  )
}
PageSectionComponent.defaultProps = {
  image: '',
  events: null,
}

export default PageSectionComponent
