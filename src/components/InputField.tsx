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

// tooltip fade-in/display/fade-out times, in seconds
const FADE_IN_TIME = 0.3
const DISPLAY_TIME = 4
const FADE_OUT_TIME = 0.7

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

  /* eslint-disable no-param-reassign */
  const fadeIn = (labelElem: HTMLElement) => {
    // tooltip appear animation
    labelElem.style.visibility = 'visible'
    labelElem.style.opacity = '1'
    labelElem.style.transition = `opacity ${FADE_IN_TIME}s linear`
  }

  /* eslint-disable no-param-reassign */
  const fadeOut = (labelElem: HTMLElement) => {
    // tooltip disappear animation
    labelElem.style.visibility = 'hidden'
    labelElem.style.opacity = '0'
    labelElem.style.transition = `visibility 0s ${FADE_OUT_TIME}s, opacity ${FADE_OUT_TIME}s linear`
  }

  const onInput = (e: any, callback = false) => {
    // supposed to be (e: React.FormEvent<HTMLInputElement>) but TS will highlight (e.target.setCustomValidity) as invalid, that's why (any)
    if (required && labelElement) {
      if (!callback) e.target.setCustomValidity('')
      fadeOut(labelElement)
    }
  }

  const onInvalid = async (e: any) => {
    if (required && labelElement) {
      fadeIn(labelElement)
      e.target.setCustomValidity(customInvalidMsg) // overrides custom message displayed by browser onInvalid
      setTimeout(onInput, DISPLAY_TIME * 1000, e, true) // hide tooltip after 3s
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
