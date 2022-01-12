import { Button as AntdButton } from 'antd'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string
  link?: string
  fontSize?: string
}

const defaultProps = {
  link: 'https://www.google.com',
  fontSize: '20px',
}
function Button(props: Props) {
  return (
    <BaseButton fontSize={props.fontSize}>
      <AntdButton type="text" onClick={() => window.open(`${props.link}`, '_blank')}>
        {props.text}
      </AntdButton>
    </BaseButton>
  )
}

Button.defaultProps = defaultProps
export default Button
