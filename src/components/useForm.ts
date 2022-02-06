import { useEffect, useState } from 'react'
import { emailRegex, nameRegex } from '../texts/errors/formErrors'

// taken and modified from https://learnetto.com/blog/react-form-validation
const useForm = (defaultValues: Record<string, string>) => {
  // Form values
  const [values, setValues] = useState<Record<string, string>>(defaultValues)
  // Errors
  const [errors, setErrors] = useState<Set<string>>(new Set())

  const [canSubmit, setCanSubmit] = useState(false)

  const checkFormValid = () => {
    const noErrors = errors.size === 0
    const filledUp = Object.values(values).every(Boolean)
    return noErrors && filledUp
  }

  useEffect(() => {
    setCanSubmit(checkFormValid())
  }, [errors, values])

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

  const validate = (name: string, type: string, value: string) => {
    // A function to validate each input values and returns validity
    const typeRegex: Record<string, RegExp> = {
      text: /.+/,
      name: nameRegex,
      email: emailRegex,
    }

    if (typeRegex[type]) {
      return processError(name, value, typeRegex[type])
    }
    return false
  }

  // A method to handle form inputs; returns validity of input
  const handleChange = (event: any, type: string, validateOnly?: boolean) => {
    const { name, value } = event.target

    const isValid = validate(name, type, value)
    // Let's set these values in state

    if (!validateOnly) {
      setValues({
        ...values,
        [name]: value,
      })
    }

    return isValid
  }

  const handleSubmit = (callback: () => any) => {
    if (canSubmit) {
      callback()
    } else {
      alert(`
      Please check your input for the following fields:\n
      ${Array.from(errors).map((val) => ` ${val}`)}
      `)
    }
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    canSubmit,
  }
}

export default useForm
