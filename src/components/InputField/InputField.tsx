import { useTheme } from 'styled-components'

import { InputFieldStyled, InputFieldTitle, TextInput } from './styles/InputField'

// TODO add error handling
function InputField({ title, value, updateValue }: { title: string; value?: string; updateValue?: any }) {
  const theme = useTheme()
  const palette = { ...theme.palette }

  return (
    <InputFieldStyled>
      <InputFieldTitle colour={palette.common.white}>{title}&thinsp;:</InputFieldTitle>
      <TextInput
        borderColorInactive={palette.common.gray}
        borderColor={palette.common.white}
        value={value}
        onChange={(e) => updateValue && updateValue(e.target.value)}
      />
    </InputFieldStyled>
  )
}

InputField.defaultProps = {
  value: '',
  updateValue: undefined,
}

export default InputField
