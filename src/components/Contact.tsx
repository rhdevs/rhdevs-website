import axios from 'axios'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import useForm from '../hooks/useForm'
import { contactUs } from '../texts/descriptions/contactUs'

import { FormContainer, TextContainer } from './styles/FormContainer.styled'

function ContactForm() {
  const useFormHooks = useForm()
  const { values } = useFormHooks

  const onSubmit = () => {
    axios({
      url: 'https://formspree.io/f/mvolznvk', // placeholder, replace with ur id here
      method: 'post',
      headers: {
        Accept: 'application/json',
      },
      data: {
        name: values?.name.trim().replace(/ {2,}/g, ' '), // trim and remove double spaces
        email: values?.email.trim(),
        message: values?.message.trim(),
      },
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <FormContainer>
      <TextContainer>{contactUs}</TextContainer>
      <InputField title="Name" name="name" type="name" useFormHooks={useFormHooks} />
      <InputField title="Email" name="email" type="email" useFormHooks={useFormHooks} />
      <InputField title="Message" name="message" type="text" useFormHooks={useFormHooks} />
      <SubmitButton text="Send" fontSize="30px" onSubmit={onSubmit} useFormHooks={useFormHooks} />
    </FormContainer>
  )
}

export default ContactForm
