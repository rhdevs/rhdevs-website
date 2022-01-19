import { PreviewText, PreviewWrapper, PreviewTitle } from './styles/ProjectPreview.styled'

type Props = {
  title: string
  text: string
  hasAnimation?: boolean
  fontSize?: string
  onClick?: () => void
}

const defaultProps = {
  hasAnimation: false,
  fontSize: '20px',
  onClick: () => undefined,
}

export default function ProjectPreview(props: Props) {
  return (
    <PreviewWrapper onClick={props.onClick}>
      <PreviewTitle fontSize={props.fontSize}>{props.title}</PreviewTitle>
      <PreviewText hasAnimation={props.hasAnimation ?? false}>{props.text}</PreviewText>
    </PreviewWrapper>
  )
}

ProjectPreview.defaultProps = defaultProps
