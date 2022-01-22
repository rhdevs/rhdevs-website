import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import uniqueId from 'lodash'
import Tooltip from './Tooltip'
import { missingField } from '../texts/errors/formErrors'

import {
  InputFieldContainer,
  InputFieldStyled,
  InputFieldTitle,
  TextInput,
  TooltipStyled,
} from './styles/InputField.styled'

type Props = {
  title: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  required?: boolean
}

function InputField(props: Props) {
  const theme = useTheme()
  const { title, value, setValue, required } = props
  const [VISIBLE, INVISIBLE] = ['1', '0']

  const { common, danger } = { ...theme.palette }
  const { white, gray } = { ...common }
  const { input, h2 } = { ...theme.typography.fontSize }
  const [labelId, setLabelId] = useState('')
  const [labelElement, setLabelElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setLabelId(uniqueId.uniqueId('input-label-'))
  }, [])

  useEffect(() => {
    setLabelElement(required ? document.getElementById(labelId) : null)
  }, [labelId])

  const hideToolTip = () => {
    if (required && labelElement) labelElement.style.opacity = INVISIBLE
  }

  const showToolTip = async () => {
    if (required && labelElement) {
      labelElement.style.opacity = VISIBLE
      setTimeout(hideToolTip, 1000) // disappears after 1s
    }
  }

  return (
    <InputFieldContainer>
      <TooltipStyled>{required && <Tooltip id={labelId} label={missingField} />}</TooltipStyled>{' '}
      {/* TODO consider other criteria */}
      <InputFieldStyled>
        <InputFieldTitle color={white} fontType={h2}>
          {title}
          <span style={{ paddingLeft: '0.1rem' }}>:</span> {/* buffer between title and colon */}
        </InputFieldTitle>
        <TextInput
          bottomColor={white}
          bottomColorInactive={gray}
          bottomColorInvalid={danger}
          fontType={input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onInput={hideToolTip}
          onInvalid={showToolTip}
          onClick={value === '' ? showToolTip : hideToolTip}
          required={required}
        />
      </InputFieldStyled>
    </InputFieldContainer>
  )
}

InputField.defaultProps = {
  required: false,
}

export default InputField
