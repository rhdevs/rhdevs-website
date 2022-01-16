import { PreviewText, PreviewWrapper } from './styles/ProjectPreview.styled'
import Button from './Button'

type Props = {
  title: string
  text: string
}

export default function ProjectPreview(props: Props) {
  return (
    <PreviewWrapper>
      <Button text={props.title} link="https://www.google.com" />
      <PreviewText>{props.text}</PreviewText>
    </PreviewWrapper>
  )
}
