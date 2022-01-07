import React from 'react'
import { Button as AntdButton } from 'antd'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string
  link: string
}

function Button(props: Props) {
  return (
    <BaseButton>
      <AntdButton type="text" onClick={() => () => window.open(`${props.link}`, '_blank')}>
        {props.text}
      </AntdButton>
    </BaseButton>
  )
}

export default Button
