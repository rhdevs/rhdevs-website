import { TooltipContainer, LabelContainer, Label, TooltipArrow } from './styles/Tooltip.styled'

type Props = {
  id: string
  label: string
}

function Tooltip(props: Props) {
  return (
    <TooltipContainer id={props.id}>
      <LabelContainer>
        <Label>{props.label}</Label>
      </LabelContainer>
      <TooltipArrow />
    </TooltipContainer>
  )
}

export default Tooltip
