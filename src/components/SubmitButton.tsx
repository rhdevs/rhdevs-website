import { Button as AntdButton } from 'antd'
import { UseFormHooks } from '../hooks/useForm'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string
  fontSize?: string
  isActive?: boolean
  onSubmit: () => void
  useFormHooks: UseFormHooks
}

const defaultProps = {
  fontSize: '20px',
  isActive: false,
}

function SubmitButton(props: Props) {
  const { text, fontSize, isActive, onSubmit, useFormHooks } = props
  const { handleSubmit, canSubmit } = useFormHooks
  const onClick = () => handleSubmit(onSubmit)

  return (
    <BaseButton fontSize={fontSize} isActive={isActive}>
      <AntdButton type="text" onClick={onClick} htmlType={canSubmit ? 'submit' : 'button'}>
        {text}
      </AntdButton>
    </BaseButton>
  )
}

SubmitButton.defaultProps = defaultProps

export default SubmitButton
