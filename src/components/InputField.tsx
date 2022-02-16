import { useEffect, useState } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTheme } from 'styled-components'
import uniqueId from 'lodash'

import WarningLabel from './WarningLabel'
import { defaultRegex, invalidEmail, invalidName, missingField } from '../texts/errors/formErrors'

import { InputFieldContainer, InputFieldHeader, InputFieldTitle, TextInput } from './styles/InputField.styled'

type Types = 'text' | 'name' | 'email'

type Props = {
  type?: Types
  title: string
  errors: { [x: string]: any }
  register: UseFormRegister<FieldValues>
  pattern?: RegExp
  required?: boolean
}

const defaultProps = {
  type: 'text',
  pattern: defaultRegex,
  required: false,
}

const warningLabels: Record<Types, string> = {
  text: missingField,
  name: invalidName,
  email: invalidEmail,
}
function InputField(props: Props) {
  const theme = useTheme()

  const { title, register, required, errors } = props
  const type = props.type ?? 'text'
  const pattern = props.pattern ?? defaultRegex

  const { common, primary } = { ...theme.palette }
  const { white } = { ...common }
  const { input, h2 } = { ...theme.typography.fontSize }

  const [labelId, setLabelId] = useState('')
  const [labelElement, setLabelElement] = useState<HTMLElement | null>(null)

  const [titleId, setTitleId] = useState('')
  const [titleElement, setTitleElement] = useState<HTMLElement | null>(null)

  const warningLabelText = warningLabels[`${type}`]
  const inputIsValid = !(title in errors)

  useEffect(() => {
    setLabelId(uniqueId.uniqueId('input-label-'))
    setTitleId(uniqueId.uniqueId('input-title-'))
  }, [])

  useEffect(() => {
    if (labelId) setLabelElement(document.getElementById(labelId))
  }, [labelId])

  useEffect(() => {
    if (titleId) setTitleElement(document.getElementById(titleId))
  }, [titleId])

  /* eslint-disable no-param-reassign */
  const tooltipFadeIn = () => {
    if (labelElement) labelElement.style.opacity = '1'
    if (titleElement) titleElement.style.color = primary
  }
  /* eslint-disable no-param-reassign */
  const tooltipFadeOut = () => {
    if (labelElement) labelElement.style.opacity = '0'
    if (titleElement) titleElement.style.color = white
  }

  const verifyField = () => {
    if (inputIsValid) tooltipFadeOut()
    else tooltipFadeIn()
  }

  /* eslint-disable react/jsx-props-no-spreading */
  /* eslint-disable object-shorthand */
  return (
    <InputFieldContainer>
      <InputFieldHeader>
        <InputFieldTitle id={titleId} fontType={h2}>
          {title}
          <span style={{ paddingLeft: '0.1rem' }}>:</span> {/* buffer between title and colon */}
        </InputFieldTitle>
        <WarningLabel id={labelId} label={warningLabelText} />
      </InputFieldHeader>
      <TextInput
        pattern={pattern.source} // for css side rendering
        onSelect={verifyField} // use onSelect cos onChange response will lag by 1 character
        fontType={input}
        {...register(title, { required: required, pattern: pattern })}
      />
    </InputFieldContainer>
  )
}

InputField.defaultProps = defaultProps

export default InputField
