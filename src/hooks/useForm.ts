import { ChangeEvent, useEffect, useState } from 'react'
import { emailRegex, nameRegex, requiredRegex } from '../texts/errors/formErrors'

// input data types supported
export type Types = 'text' | 'name' | 'email'

export const typeRegex: Record<string, RegExp> = {
  text: requiredRegex,
  name: nameRegex,
  email: emailRegex,
}

// taken and modified from https://learnetto.com/blog/react-form-validation
const useForm = (defaultValues: Record<string, string>) => {
  const [values, setValues] = useState<Record<string, string>>(defaultValues)
  const [errors, setErrors] = useState<Set<string>>(new Set())
  const [canSubmit, setCanSubmit] = useState(false)

  const checkFormValid = () => {
    const noErrors = errors.size === 0
    const filledUp = Object.values(values).every(Boolean)
    return noErrors && filledUp
  }

  useEffect(() => {
    setCanSubmit(checkFormValid())
  }, [values])

  const processError = (name: string, value: string, regex: RegExp) => {
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

  const validateInput = (name: string, type: Types, value: string) =>
    typeRegex[type] && processError(name, value, typeRegex[type])

  const handleChange = (event: ChangeEvent<HTMLInputElement>, type: Types) => {
    const { name, value } = event.target
    const isValid = validateInput(name, type, value)
    setValues({
      ...values,
      [name]: value,
    })
    return isValid
  }

  const handleSubmit = (callback: () => void) => {
    if (canSubmit) {
      callback()
    } else {
      // TODO do normal form validation upon submit error
    }
  }

  return {
    values,
    errors,
    validateInput,
    handleChange,
    handleSubmit,
    canSubmit,
  }
}

export default useForm
