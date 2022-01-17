import { PreviewText, PreviewWrapper } from './styles/ProjectPreview.styled'
import Button from './Button'

type Props = {
  title: string
  text: string
  hasAnimation: boolean
  onClick: () => void
}
export default function ProjectPreview(props: Props) {
  return (
    <PreviewWrapper onClick={props.onClick}>
      <Button text={props.title} />
      <PreviewText hasAnimation={props.hasAnimation}>{props.text}</PreviewText>
    </PreviewWrapper>
  )
}
