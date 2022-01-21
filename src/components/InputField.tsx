import React from 'react'
import { useTheme } from 'styled-components'
import Tooltip from './Tooltip'

import { InputFieldStyled, InputFieldTitle, TextInput } from './styles/InputField.styled'

type Props = {
  title: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

// TODO add error handling
function InputField(props: Props) {
  const theme = useTheme()
  const { title, value, setValue } = props
  const { white, gray } = { ...theme.palette.common }
  const { input, h2 } = { ...theme.typography.fontSize }

  const onInput = () => {
    const label = document.getElementById(`input-${title}-label`)
    if (label) label.style.color = 'transparent'
  }
  const onInvalid = () => {
    const label = document.getElementById(`input-${title}-label`)
    if (label) label.style.color = white
  }

  return (
    <InputFieldStyled>
      <Tooltip id={`input-${title}-label`} label="error" />
      <InputFieldTitle color={white} fontType={h2}>
        {title}
        <span style={{ paddingLeft: '0.1rem' }}>:</span> {/* buffer between title and colon */}
      </InputFieldTitle>
      <TextInput
        bottomColorInactive={gray}
        bottomColor={white}
        fontType={input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onInput={onInput}
        onInvalid={onInvalid}
        required
      />
    </InputFieldStyled>
  )
}

export default InputField
