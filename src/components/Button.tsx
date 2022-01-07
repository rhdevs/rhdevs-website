import React from 'react'
import styled from 'styled-components'
import { Button as AntdButton } from 'antd'
import { BaseButton } from './styles/Button.styled'

const StyledButton = styled(AntdButton)`
  height: 40px;
  font-size: 26px;
  border-width: 1px;
  background-color: black;
  color: white;
  padding: 2px;
  &:hover {
    border-bottom: 1px solid red;
  }
`

type Props = {
  text: string
  link: string
}

function Button(props: Props) {
  return (
    <BaseButton>
      <AntdButton type="text" onClick={() => window.open(`${props.link}`, '_blank')}>
        {props.text}
      </AntdButton>
    </BaseButton>
  )
}

export default Button
