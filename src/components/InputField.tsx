import { useEffect, useState } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTheme } from 'styled-components'
import uniqueId from 'lodash'

import Tooltip from './Tooltip'
import { defaultRegex, invalidEmail, invalidName, missingField } from '../texts/errors/formErrors'

import {
  InputFieldContainer,
  InputFieldStyled,
  InputFieldTitle,
  TextInput,
  TooltipStyled,
} from './styles/InputField.styled'

type Types = 'default' | 'text' | 'name' | 'email'

type Props = {
  title: string
  type?: Types
  errors: { [x: string]: any }
  register: UseFormRegister<FieldValues>
  required: boolean
  pattern?: RegExp
}

const defaultProps = {
  type: 'default',
  pattern: defaultRegex,
}

const warningLabels: Record<string, string> = {
  text: missingField,
  name: invalidName,
  email: invalidEmail,
}

const TOOLTIP_FADE_IN_TIME = 0.1
const TOOLTIP_FADE_OUT_TIME = 0.1

function InputField(props: Props) {
  const theme = useTheme()

  const { title, register, required, errors } = props
  const type = props.type ?? 'text'
  const pattern = props.pattern ?? defaultRegex

  const { common, danger } = { ...theme.palette }
  const { white, gray } = { ...common }
  const { input, h2 } = { ...theme.typography.fontSize }

  const [labelId, setLabelId] = useState('')
  const [labelElement, setLabelElement] = useState<HTMLElement | null>(null)

  const valid = !errors[title]

  const warningLabel = warningLabels[type]

  useEffect(() => {
    setLabelId(uniqueId.uniqueId('input-label-'))
  }, [])

  useEffect(() => {
    if (labelId) {
      setLabelElement(document.getElementById(labelId))
    }
  }, [labelId])

  /* eslint-disable no-param-reassign */
  const tooltipFadeIn = () => {
    if (labelElement) {
      labelElement.style.visibility = 'visible'
      labelElement.style.opacity = '1'
      labelElement.style.transition = `opacity ${TOOLTIP_FADE_IN_TIME}s linear`
    }
  }
  /* eslint-disable no-param-reassign */
  const tooltipFadeOut = () => {
    if (labelElement) {
      labelElement.style.visibility = 'hidden'
      labelElement.style.opacity = '0'
      labelElement.style.transition = `visibility 0s ${TOOLTIP_FADE_OUT_TIME}s, opacity ${TOOLTIP_FADE_OUT_TIME}s linear`
    }
  }

  const verifyField = () => {
    if (labelElement) {
      if (valid) tooltipFadeOut()
      else tooltipFadeIn()
    }
  }

  const onSelect = () => {
    verifyField()
  }

  /* eslint-disable react/jsx-props-no-spreading */
  /* eslint-disable object-shorthand */
  return (
    <InputFieldContainer>
      <TooltipStyled>
        <Tooltip id={labelId} label={warningLabel} />
      </TooltipStyled>
      <InputFieldStyled>
        <InputFieldTitle color={white} fontType={h2}>
          {title}
          <span style={{ paddingLeft: '0.1rem' }}>:</span> {/* buffer between title and colon */}
        </InputFieldTitle>
        <TextInput
          pattern={pattern.source} // for css side rendering
          onSelect={onSelect}
          bottomColorActive={white} // governed by css
          bottomColorInactive={gray}
          bottomColorInvalid={danger}
          fontType={input}
          {...register(title, { required: required, pattern: pattern })}
        />
      </InputFieldStyled>
    </InputFieldContainer>
  )
}

InputField.defaultProps = defaultProps

export default InputField
