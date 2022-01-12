import { useTheme } from 'styled-components'

import { InputFieldStyled, InputFieldTitle, TextInput } from './styles/InputField'

function TextInputEntry({ entry, style }: { entry: string; style: any }) {
  const warningText = 'This field is required'
  return <TextInput id={`input-${entry}`} style={style} required />
}

function InputField({ title }: { title: string }) {
  const theme = useTheme()
  return (
    <div style={{ background: theme.palette.common.black, height: '100vh', padding: '16px' }} /* for ease of viz */>
      <InputFieldStyled>
        <InputFieldTitle style={{ color: theme.palette.common.white } /* white by default */}>
          {title}&thinsp;:
        </InputFieldTitle>
        <TextInputEntry entry={title} style={{ color: theme.palette.common.white } /* white by default */} />
      </InputFieldStyled>
    </div>
  )
}

InputField.defaultProps = {}

export default InputField
