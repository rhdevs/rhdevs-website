import { Button as AntdButton } from 'antd'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string | undefined
  link?: string | undefined
  fontSize?: string
  isActive?: boolean
}

const defaultProps = {
  link: '',
  fontSize: '20px',
  isActive: false,
}
function Button(props: Props) {
  return (
    <BaseButton fontSize={props.fontSize} isActive={props.isActive}>
      {/* Ignore warning about link traversal security issue */}
      <AntdButton type="text" onClick={() => window.open(props.link, '_blank')}>
        {props.text}
      </AntdButton>
    </BaseButton>
  )
}

Button.defaultProps = defaultProps
export default Button
