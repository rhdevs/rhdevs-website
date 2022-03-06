import { ImageContainer, MainContainer, BufferContainer, TextContainer, Title, Body } from './styles/PageSection.styled'

type Props = {
  title: string
  description: string
  hasImage: boolean
  textPosition?: 'left' | 'right'
  image?: string
  events?: boolean
} & typeof defaultProps

const defaultProps = {
  textPosition: 'left',
  image: '',
  events: false,
}

function PageSectionComponent(props: Props) {
  return (
    <MainContainer hasImage={props.hasImage}>
      {props.hasImage && props.textPosition === 'right' && <ImageContainer image={props.image} />}
      {props.hasImage && props.textPosition === 'right' && <BufferContainer />}
      <TextContainer hasImage={props.hasImage}>
        <Title events={props.events} textPosition={props.textPosition}>
          {props.title}
        </Title>
        <Body events={props.events} textPosition={props.textPosition}>
          {props.description}
        </Body>
      </TextContainer>
      {props.hasImage && props.textPosition === 'left' && <BufferContainer />}
      {props.hasImage && props.textPosition === 'left' && <ImageContainer image={props.image} />}
    </MainContainer>
  )
}
PageSectionComponent.defaultProps = defaultProps

export default PageSectionComponent
