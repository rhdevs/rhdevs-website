import { FontType } from 'styled-components'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string
  isActive?: boolean
  link?: string | undefined
  htmlType?: 'button' | 'submit' | 'reset' | undefined
  fontType: FontType
}

const defaultProps = {
  isActive: false,
  link: null,
  htmlType: 'submit',
}

function Button(props: Props) {
  const { isActive } = props
  return (
    <BaseButton
      onClick={() => (props.link === null ? undefined : window.open(props.link, '_blank'))}
      isActive={isActive}
      type={props.htmlType}
      fontType={props.fontType}
    >
      {props.text}
    </BaseButton>
  )
}

Button.defaultProps = defaultProps

export default Button
