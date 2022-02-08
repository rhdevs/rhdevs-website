import axios from 'axios'
import InputField from './InputField'
import Button from './Button'
import { FormContainer, TextContainer } from './styles/FormContainer.styled'
import { contactUs } from '../texts/descriptions/contactUs'
import useForm from '../hooks/useForm'

export function ContactForm() {
  const defaultValues = {
    name: '',
    email: '',
    message: '',
  }

  // Custom hook call
  // all values are treated as compulsory/required TODO allow optional
  const { values, validate, handleChange, handleSubmit, canSubmit } = useForm(defaultValues)

  const onSubmit = () => {
    axios({
      url: 'https://formspree.io/f/mvolznvk', // placeholder, replace with ur id here
      method: 'post',
      headers: {
        Accept: 'application/json',
      },
      data: {
        name: values.name.trim().replace(/ {2,}/g, ' '), // trim and remove double spaces
        email: values.email.trim(),
        message: values.message.trim(),
      },
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <FormContainer noValidate>
      {/* disable default browser validation */}
      <TextContainer>{contactUs}</TextContainer>
      <InputField
        title="Name" // display title
        name="name" // identifier key in values hook in useForm
        type="name" // for validation type
        values={values}
        validate={validate}
        handleChange={handleChange}
      />
      <InputField
        title="Email"
        name="email"
        type="email"
        values={values}
        validate={validate}
        handleChange={handleChange}
      />
      <InputField
        title="Message"
        name="message"
        type="text"
        values={values}
        validate={validate}
        handleChange={handleChange}
      />
      <Button text="Send" onClick={() => handleSubmit(onSubmit)} fontSize="30px" canSubmit={canSubmit} />
    </FormContainer>
  )
}
