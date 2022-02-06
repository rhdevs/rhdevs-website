import { Button as AntdButton } from 'antd'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string
  link?: string
  fontSize?: string
  isActive?: boolean
  onClick?: () => void
  canSubmit?: boolean
}

const defaultProps = {
  link: '',
  fontSize: '20px',
  isActive: false,
  onClick: null,
  canSubmit: false,
}

function Button(props: Props) {
  const onClick = () => {
    if (props.onClick) {
      return props.onClick()
    }
    return window.open(props.link, '_blank')
  }
  return (
    <BaseButton fontSize={props.fontSize} isActive={props.isActive}>
      {/* eslint-disable-next-line security/detect-non-literal-fs-filename */}
      <AntdButton type="text" onClick={onClick} htmlType={props.canSubmit ? 'submit' : 'button'}>
        {props.text}
      </AntdButton>
    </BaseButton>
  )
}

Button.defaultProps = defaultProps
export default Button
