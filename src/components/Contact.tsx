import axios from 'axios'
import InputField from './InputField'
import Button from './Button'
import useForm from '../hooks/useForm'
import { contactUs } from '../texts/descriptions/contactUs'

import { FormContainer, TextContainer } from './styles/FormContainer.styled'

function ContactForm() {
  const defaultValues = {
    name: '',
    email: '',
    message: '',
  }

  // all values are treated as compulsory/required TODO allow optional
  const { values, validateInput, handleChange, handleSubmit, canSubmit } = useForm(defaultValues)

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
        title="Name"
        name="name" // must be unique and match with defaultValue keys
        type="name"
        values={values}
        validateInput={validateInput}
        handleChange={handleChange}
      />
      <InputField
        title="Email"
        name="email"
        type="email"
        values={values}
        validateInput={validateInput}
        handleChange={handleChange}
      />
      <InputField
        title="Message"
        name="message"
        type="text"
        values={values}
        validateInput={validateInput}
        handleChange={handleChange}
      />
      <Button text="Send" onClick={() => handleSubmit(onSubmit)} fontSize="30px" canSubmit={canSubmit} />
    </FormContainer>
  )
}

export default ContactForm
