import React from 'react'
import { useTheme } from 'styled-components'

import { InputFieldStyled, InputFieldTitle, TextInput } from './styles/InputField.styled'

// TODO add error handling
function InputField({
  title,
  value,
  updateValue,
}: {
  title: string
  value: string
  updateValue: React.Dispatch<React.SetStateAction<string>>
}) {
  const theme = useTheme()
  const { white, gray } = { ...theme.palette.common }
  const { input, h2 } = { ...theme.typography.fontSize }

  return (
    <InputFieldStyled>
      <InputFieldTitle color={white} fontSize={`clamp(${h2.min}, ${h2.size}, ${h2.max})`}>
        {title}
        <span style={{ paddingLeft: '0.1rem' }}>:</span> {/* buffer between title and colon */}
      </InputFieldTitle>
      <TextInput
        borderBottomInactive={gray}
        borderBottom={white}
        fontSize={`clamp(${input.min}, ${input.size}, ${input.max})`}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </InputFieldStyled>
  )
}

export default InputField
