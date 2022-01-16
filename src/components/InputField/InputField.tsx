import React from 'react'
import { useTheme } from 'styled-components'

import { InputFieldStyled, InputFieldTitle, TextInput } from './styles/InputField.styled'

// TODO add error handling
function InputField({
  title,
  value,
  setValue,
}: {
  title: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}) {
  const theme = useTheme()
  const { white, gray } = { ...theme.palette.common }
  const { input, h2 } = { ...theme.typography.fontSize }

  return (
    <InputFieldStyled>
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
      />
    </InputFieldStyled>
  )
}

export default InputField
