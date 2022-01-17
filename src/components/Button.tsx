import { Button as AntdButton } from 'antd'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string
  link?: string | undefined
  fontSize?: string
  isActive?: boolean
  disabled?: boolean
}

const defaultProps = {
  link: '',
  fontSize: '20px',
  isActive: false,
  disabled: false,
}
function Button(props: Props) {
  return (
    <BaseButton fontSize={props.fontSize} isActive={props.isActive}>
      {/* eslint-disable-next-line security/detect-non-literal-fs-filename */}
      <AntdButton disabled={props.disabled} type="text" onClick={() => window.open(props.link, '_blank')}>
        {props.text}
      </AntdButton>
    </BaseButton>
  )
}

Button.defaultProps = defaultProps
export default Button
