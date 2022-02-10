import { ChangeEvent, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import uniqueId from 'lodash'

import Tooltip from './Tooltip'
import { typeRegex, Types } from '../hooks/useForm'
import { invalidEmail, invalidName, missingField } from '../texts/errors/formErrors'

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
  validateInput: (name: string, type: Types, value: string) => boolean
  handleChange: (event: ChangeEvent<HTMLInputElement>, type: Types, validateOnly?: boolean) => boolean
  type?: Types
}

const defaultProps = {
  type: 'text',
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
  const { title, name, values, validateInput, handleChange } = props
  const type = props.type ?? 'text'

  const { common, danger } = { ...theme.palette }
  const { white, gray } = { ...common }
  const { input, h2 } = { ...theme.typography.fontSize }

  const [labelId, setLabelId] = useState('')
  const [labelElement, setLabelElement] = useState<HTMLElement | null>(null) // html element of tooltip used to make tooltip visible/invisible
  const [valid, setValid] = useState(false)

  const warningLabel = warningLabels[type]
  const checkPattern = typeRegex[type] ?? typeRegex.default

  useEffect(() => {
    setLabelId(uniqueId.uniqueId('input-label-'))
    setValid(validateInput(name, type, values[name]))
  }, [])

  useEffect(() => {
    if (labelId) setLabelElement(document.getElementById(labelId))
  }, [labelId])

  /* eslint-disable no-param-reassign */
  const tooltipFadeIn = (labelElem: HTMLElement) => {
    labelElem.style.visibility = 'visible'
    labelElem.style.opacity = '1'
    labelElem.style.transition = `opacity ${TOOLTIP_FADE_IN_TIME}s linear`
  }

  /* eslint-disable no-param-reassign */
  const tooltipFadeOut = (labelElem: HTMLElement) => {
    labelElem.style.visibility = 'hidden'
    labelElem.style.opacity = '0'
    labelElem.style.transition = `visibility 0s ${TOOLTIP_FADE_OUT_TIME}s, opacity ${TOOLTIP_FADE_OUT_TIME}s linear`
  }

  const onInvalid = (labelElem: HTMLElement) => {
    if (labelElem) {
      tooltipFadeIn(labelElem)
    }
  }

  const toggleTooltip = (labelElem: HTMLElement | null, isValid: boolean) => {
    if (labelElem) {
      if (isValid) tooltipFadeOut(labelElem)
      else onInvalid(labelElem)
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValid(handleChange(e, type))
    toggleTooltip(labelElement, valid)
  }

  const onSelect = () => {
    toggleTooltip(labelElement, valid)
  }

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
        />
      </InputFieldStyled>
    </InputFieldContainer>
  )
}

InputField.defaultProps = defaultProps

export default InputField
