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

  return (
    <InputFieldStyled>
      <InputFieldTitle colour={theme.palette.common.white}>{title}&thinsp;:</InputFieldTitle>
      <TextInput
        borderColorInactive={theme.palette.common.gray}
        borderColor={theme.palette.common.white}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </InputFieldStyled>
  )
}

export default InputField
