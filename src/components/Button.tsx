import { Button as AntdButton } from 'antd'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string
  link?: string
  fontSize?: string
  isActive?: boolean
}

const defaultProps = {
  link: 'https://www.google.com',
  fontSize: '20px',
  isActive: false,
}
function Button(props: Props) {
  return (
    <BaseButton fontSize={props.fontSize} isActive={props.isActive}>
      <AntdButton type="text" onClick={() => window.open(`${props.link}`, '_blank')}>
        {props.text}
      </AntdButton>
    </BaseButton>
  )
}

Button.defaultProps = defaultProps
export default Button
