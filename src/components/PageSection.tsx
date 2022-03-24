import { useTheme } from 'styled-components'
import React from 'react'
import { ImageContainer, MainContainer, BufferContainer, TextContainer, Title, Body } from './styles/PageSection.styled'

type Props = {
  title: string
  description: string | React.ReactNode
  hasImage: boolean
  textPosition?: 'left' | 'right'
  image?: string
  events?: boolean
  responsiveReverse?: boolean
} & typeof defaultProps

const defaultProps = {
  textPosition: 'left',
  image: '',
  events: false,
  responsiveReverse: false,
}

function PageSectionComponent(props: Props) {
  const theme = useTheme()
  const { sectionTitle, sectionText } = { ...theme.typography.fontSize }

  return (
    <MainContainer hasImage={props.hasImage} responsiveReverse={props.responsiveReverse}>
      {props.hasImage && props.textPosition === 'right' && (
        <ImageContainer image={props.image} textPosition={props.textPosition} />
      )}
      {props.hasImage && props.textPosition === 'right' && <BufferContainer />}
      <TextContainer hasImage={props.hasImage}>
        <Title fontType={sectionTitle} events={props.events} textPosition={props.textPosition}>
          {props.title}
        </Title>
        <Body fontType={sectionText} events={props.events} textPosition={props.textPosition}>
          {props.description}
        </Body>
      </TextContainer>
      {props.hasImage && props.textPosition === 'left' && <BufferContainer />}
      {props.hasImage && props.textPosition === 'left' && (
        <ImageContainer image={props.image} textPosition={props.textPosition} />
      )}
    </MainContainer>
  )
}
PageSectionComponent.defaultProps = defaultProps

export default PageSectionComponent
