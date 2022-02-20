import { useTheme } from 'styled-components'
import { WarningOutlined } from '@ant-design/icons'

import { Label } from './styles/WarningLabel.styled'

type Props = {
  label: string
}

function WarningLabel(props: Props) {
  const theme = useTheme()
  const { h3 } = { ...theme.typography.fontSize }

  return (
    <Label fontType={h3}>
      <WarningOutlined /> {props.label}
    </Label>
  )
}

export default WarningLabel
