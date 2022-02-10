import { ChangeEvent, useEffect, useState } from 'react'
import { defaultRegex, emailRegex, nameRegex, requiredRegex } from '../texts/errors/formErrors'

// input data types supported
export type Types = 'default' | 'text' | 'name' | 'email'
type Values = Record<string, string> | null
type Errors = Set<string>
type SetValueNames = (name: string) => void
type ProcessError = (name: string, value: string, regex: RegExp) => boolean
type ValidateInput = (name: string, type: Types, value: string) => boolean
type HandleChange = (event: ChangeEvent<HTMLInputElement>, type: Types) => boolean
type HandleSubmit = (callback: () => void) => void

export type UseFormHooks = {
  values: Values
  errors: Errors
  setValueNames: SetValueNames
  validateInput: ValidateInput
  handleChange: HandleChange
  handleSubmit: HandleSubmit
  canSubmit: boolean
}
type UseForm = () => UseFormHooks

export const typeRegex: Record<string, RegExp> = {
  default: defaultRegex,
  text: requiredRegex,
  name: nameRegex,
  email: emailRegex,
}

// taken and modified from https://learnetto.com/blog/react-form-validation
const useForm: UseForm = () => {
  const [values, setValues] = useState<Values>(null)

  const [errors, setErrors] = useState<Errors>(new Set())
  const [canSubmit, setCanSubmit] = useState(false)

  const checkFormValid = () => {
    const noErrors = errors.size === 0
    const filledUp = values ? Object.values(values).every(Boolean) : false
    return noErrors && filledUp
  }

  useEffect(() => {
    setCanSubmit(checkFormValid())
  }, [values])

  const setValueNames: SetValueNames = (name) => {
    setValues({
      [name]: '',
      ...values,
    })
  }

  const processError: ProcessError = (name, value, regex) => {
    const isValid = regex.test(value)
    const newErrors = new Set(errors)
    if (isValid) {
      newErrors.delete(name)
      setErrors(newErrors)
    } else {
      setErrors(newErrors.add(name))
    }
    return isValid
  }

  const validateInput: ValidateInput = (name, type, value) =>
    typeRegex[type] && processError(name, value, typeRegex[type])

  const handleChange: HandleChange = (event, type) => {
    const { name, value } = event.target
    const isValid = validateInput(name, type, value)
    setValues({
      ...values,
      [name]: value,
    })
    return isValid
  }

  const handleSubmit: HandleSubmit = (callback) => {
    if (canSubmit) {
      callback()
    } else {
      // TODO do normal form validation upon submit error
    }
  }

  return {
    values,
    errors,
    setValueNames,
    validateInput,
    handleChange,
    handleSubmit,
    canSubmit,
  }
}

export default useForm
