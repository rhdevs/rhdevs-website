import { PreviewText, PreviewWrapper, PreviewTitle } from './styles/ProjectPreview.styled'

type Props = {
  title: string
  text: string
  hasAnimation: boolean
  fontSize: string
  onClick: () => void
}
// pass onClick navigate PATHS. into ProjectPreview
export default function ProjectPreview(props: Props) {
  return (
    <PreviewWrapper onClick={props.onClick}>
      <PreviewTitle fontSize={props.fontSize}>{props.title}</PreviewTitle>
      <PreviewText hasAnimation={props.hasAnimation}>{props.text}</PreviewText>
    </PreviewWrapper>
  )
}
