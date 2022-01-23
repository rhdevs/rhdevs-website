import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import uniqueId from 'lodash'
import Tooltip from './Tooltip'
import {
  defaultBrowserMessage,
  defaultRegex,
  invalidEmail,
  invalidName,
  missingField,
  nameBrowserMessage,
  nameRegex,
} from '../texts/errors/formErrors'

import {
  InputFieldContainer,
  InputFieldStyled,
  InputFieldTitle,
  TextInput,
  TooltipStyled,
} from './styles/InputField.styled'

const VISIBLE = '1'
const INVISIBLE = '0'

type Props = {
  title: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  type?: 'text' | 'name' | 'email'
  required?: boolean
}

const warningLabels: Record<string, string> = {
  // warning text that appears on tooltip
  text: missingField,
  name: invalidName,
  email: invalidEmail,
}

const checkPatterns: Record<string, string> = {
  // regex used to check validity of custom input types
  default: defaultRegex,
  name: nameRegex,
}

const customBrowserMessages: Record<string, string> = {
  // message shown by browser onInvalid
  default: defaultBrowserMessage,
  name: nameBrowserMessage,
}

function InputField(props: Props) {
  const theme = useTheme()
  const { title, value, setValue, required } = props

  const { common, danger } = { ...theme.palette }
  const { white, gray } = { ...common }
  const { input, h2 } = { ...theme.typography.fontSize }

  const [labelId, setLabelId] = useState('')
  const [labelElement, setLabelElement] = useState<HTMLElement | null>(null) // html element of tooltip used to make tooltip visible/invisible

  const warningLabel = warningLabels[props.type ?? 'text']
  const checkPattern = checkPatterns[props.type ?? 'default'] ?? checkPatterns.default
  const customInvalidMsg = customBrowserMessages[props.type ?? 'default'] ?? customBrowserMessages.default

  useEffect(() => {
    setLabelId(uniqueId.uniqueId('input-label-'))
  }, [])

  useEffect(() => {
    setLabelElement(required ? document.getElementById(labelId) : null)
  }, [labelId])

  const onInput = (e: any, callback = false) => {
    // supposed to be (e: React.FormEvent<HTMLInputElement>) but TS will highlight (e.target.setCustomValidity) as invalid, that's why (any)
    if (required && labelElement) {
      if (!callback) e.target.setCustomValidity('')
      labelElement.style.opacity = INVISIBLE // hide tooltip
    }
  }

  const onInvalid = async (e: any) => {
    if (required && labelElement) {
      labelElement.style.opacity = VISIBLE // show tooltip
      e.target.setCustomValidity(customInvalidMsg) // overrides custom message displayed by browser onInvalid
      setTimeout(onInput, 2000, e, true) // hide tooltip after 2s
    }
  }

  return (
    <InputFieldContainer>
      <TooltipStyled>{required && <Tooltip id={labelId} label={warningLabel} />}</TooltipStyled>
      <InputFieldStyled>
        <InputFieldTitle color={white} fontType={h2}>
          {title}
          <span style={{ paddingLeft: '0.1rem' }}>:</span> {/* buffer between title and colon */}
        </InputFieldTitle>
        <TextInput
          type={props.type}
          value={value}
          pattern={checkPattern}
          onChange={(e) => setValue(e.target.value)}
          onInput={onInput}
          onInvalid={onInvalid}
          bottomColorActive={white}
          bottomColorInactive={gray}
          bottomColorInvalid={danger}
          fontType={input}
          required={required}
        />
      </InputFieldStyled>
    </InputFieldContainer>
  )
}

InputField.defaultProps = {
  required: false,
  type: 'text',
}

export default InputField
