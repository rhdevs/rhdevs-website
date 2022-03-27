import { useTheme } from 'styled-components'
import React from 'react'
import { ImageContainer, MainContainer, TextContainer, Title, Body } from './styles/PageSection.styled'
import imgPlaceholder from '../assets/noimg.png'

type Props = {
  title: string
  description: string | React.ReactNode
  imgPosition?: 'left' | 'right' | undefined
  imageSrc?: string
  events?: boolean
} & typeof defaultProps

const defaultProps: {
  imgPosition?: 'left' | 'right' | undefined
  imageSrc?: string
  events?: boolean
} = {
  imgPosition: undefined,
  imageSrc: imgPlaceholder,
  events: false,
}

function PageSectionComponent(props: Props) {
  const theme = useTheme()
  const { h2, body } = { ...theme.typography.fontSize }

  return (
    <MainContainer imgPosition={props.imgPosition}>
      {props.imgPosition && <ImageContainer src={props.imageSrc} alt={props.title} />}
      <TextContainer>
        <Title fontType={h2} events={props.events}>
          {props.title}
        </Title>
        <Body fontType={body} events={props.events}>
          {props.description}
        </Body>
      </TextContainer>
    </MainContainer>
  )
}

PageSectionComponent.defaultProps = defaultProps

export default PageSectionComponent
