import { useTheme } from 'styled-components'
import React from 'react'
import { ImageContainer, MainContainer, BufferContainer, TextContainer, Title, Body } from './styles/PageSection.styled'

type Props = {
  title: string
  description: string | React.ReactNode
  hasImage: boolean
  textPosition?: 'left' | 'right'
  image?: string
  imageurl?: string
  events?: boolean
} & typeof defaultProps

const defaultProps = {
  textPosition: 'left',
  image: '',
  imageurl: '',
  events: false,
}

function PageSectionComponent(props: Props) {
  const theme = useTheme()
  const { sectionTitle, body } = { ...theme.typography.fontSize }

  return (
    <MainContainer hasImage={props.hasImage} events={props.events}>
      {props.imageurl === '' && props.hasImage && props.textPosition === 'right' && (
        <ImageContainer image={props.image} />
      )}
      {props.imageurl !== '' && props.hasImage && props.textPosition === 'right' && (
        <a href={props.imageurl}>
          <ImageContainer image={props.image} />
        </a>
      )}
      {props.hasImage && props.textPosition === 'right' && <BufferContainer />}
      <TextContainer hasImage={props.hasImage}>
        <Title fontType={sectionTitle} events={props.events} textPosition={props.textPosition}>
          {props.title}
        </Title>
        <Body fontType={body} events={props.events} textPosition={props.textPosition}>
          {props.description}
        </Body>
      </TextContainer>
      {props.hasImage && props.textPosition === 'left' && <BufferContainer />}
      {props.imageurl === '' && props.hasImage && props.textPosition === 'left' && (
        <ImageContainer image={props.image} />
      )}
      {props.imageurl !== '' && props.hasImage && props.textPosition === 'left' && (
        <li>
          <a href={props.imageurl}>
            <ImageContainer image={props.image} />
          </a>
        </li>
      )}
    </MainContainer>
  )
}
PageSectionComponent.defaultProps = defaultProps

export default PageSectionComponent
