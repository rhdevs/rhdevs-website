import { FontType } from 'styled-components'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string
  hasActive?: boolean
  link?: string
  htmlType?: 'button' | 'submit' | 'reset'
  fontType: FontType
}

const defaultProps = {
  hasActive: false,
  link: undefined,
  htmlType: undefined,
}

function Button(props: Props) {
  return (
    <BaseButton
      onClick={() => props.link && window.open(props.link, '_blank')}
      hasActive={props.hasActive}
      type={props.htmlType}
      fontType={props.fontType}
    >
      {/* eslint-disable-next-line security/detect-non-literal-fs-filename */}
      {props.text}
    </BaseButton>
  )
}

Button.defaultProps = defaultProps

export default Button
