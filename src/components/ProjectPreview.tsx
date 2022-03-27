import React from 'react'
import { useTheme } from 'styled-components'
import { PreviewText, PreviewWrapper, PreviewTitle } from './styles/ProjectPreview.styled'

type Props = {
  title: string
  text: string
  hasAnimation?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const defaultProps = {
  hasAnimation: false,
  onClick: undefined,
}

export default function ProjectPreview(props: Props) {
  const theme = useTheme()
  const { h2, body } = { ...theme.typography.fontSize }
  return (
    <PreviewWrapper onClick={props.onClick}>
      <PreviewTitle fontType={h2}>{props.title}</PreviewTitle>
      <PreviewText fontType={body} hasAnimation={props.hasAnimation}>
        {props.text}
      </PreviewText>
    </PreviewWrapper>
  )
}

ProjectPreview.defaultProps = defaultProps
