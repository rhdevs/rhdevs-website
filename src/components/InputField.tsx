import { ChangeEvent, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import uniqueId from 'lodash'
import Tooltip from './Tooltip'
import {
  defaultRegex,
  emailRegex,
  invalidEmail,
  invalidName,
  missingField,
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
  name: string
  values: Record<string, string>
  handleChange: (event: ChangeEvent<HTMLInputElement>, type: string, validateOnly?: boolean) => boolean
  type?: 'text' | 'name' | 'email'
  required?: boolean
}

const defaultProps = {
  required: false,
  type: 'text',
}

const warningLabels: Record<string, string> = {
  // warning text that appears on tooltip
  text: missingField,
  name: invalidName,
  email: invalidEmail,
}

const checkPatterns: Record<string, RegExp> = {
  // regex used to check validity of custom input types
  text: defaultRegex,
  name: nameRegex,
  email: emailRegex,
}

// tooltip fade-in/display/fade-out times, in seconds
const FADE_IN_TIME = 0.3
const DISPLAY_TIME = 4
const FADE_OUT_TIME = 0.7

function InputField(props: Props) {
  const theme = useTheme()
  const {
    title, // display title
    name, // identifier key in values hook in useForm
    values, // for validation type
    handleChange,
    required,
  } = props
  const type = props.type ?? 'text'

  const { common, danger } = { ...theme.palette }
  const { white, gray } = { ...common }
  const { input, h2 } = { ...theme.typography.fontSize }

  const [labelId, setLabelId] = useState('')
  const [labelElement, setLabelElement] = useState<HTMLElement | null>(null) // html element of tooltip used to make tooltip visible/invisible

  const warningLabel = warningLabels[type]
  const checkPattern = checkPatterns[type] ?? checkPatterns.default

  useEffect(() => {
    setLabelId(uniqueId.uniqueId('input-label-'))
  }, [])

  useEffect(() => {
    if (labelId) setLabelElement(required ? document.getElementById(labelId) : null)
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

  const onInvalid = async (labelElem: HTMLElement) => {
    if (required && labelElem) {
      fadeIn(labelElem)
      setTimeout(fadeOut, DISPLAY_TIME * 1000, labelElem) // hide tooltip after 3s
    }
  }

  const toggleTooltip = (labelElem: HTMLElement | null, isValid: boolean) => {
    if (labelElem) {
      if (isValid) {
        fadeOut(labelElem)
      } else {
        onInvalid(labelElem)
      }
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = handleChange(e, type)
    toggleTooltip(labelElement, isValid)
  }

  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = handleChange(e, type, true)
    toggleTooltip(labelElement, isValid)
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
          type={type}
          name={name}
          value={values[type]}
          pattern={checkPattern.source} // for css side rendering
          onChange={onChange}
          onSelect={onSelect}
          bottomColorActive={white} // governed by css
          bottomColorInactive={gray}
          bottomColorInvalid={danger}
          fontType={input}
          required={required}
        />
      </InputFieldStyled>
    </InputFieldContainer>
  )
}

InputField.defaultProps = defaultProps

export default InputField
