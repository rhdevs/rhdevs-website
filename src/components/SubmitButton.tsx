import { Button as AntdButton } from 'antd'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string
  fontSize?: string
  isActive?: boolean
}

const defaultProps = {
  fontSize: '20px',
  isActive: false,
}

function SubmitButton(props: Props) {
  const { text, fontSize, isActive } = props

  return (
    <BaseButton fontSize={fontSize} isActive={isActive}>
      <AntdButton type="text" htmlType="submit">
        {text}
      </AntdButton>
    </BaseButton>
  )
}

SubmitButton.defaultProps = defaultProps

export default SubmitButton
