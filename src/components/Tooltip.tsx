import { TooltipContainer, LabelContainer, Label, TooltipArrow } from './styles/Tooltip.styled'

type Props = {
  label: string
}

function Tooltip(props: Props) {
  return (
    <TooltipContainer>
      <LabelContainer>
        <Label>{props.label}</Label>
      </LabelContainer>
      <TooltipArrow />
    </TooltipContainer>
  )
}

export default Tooltip
