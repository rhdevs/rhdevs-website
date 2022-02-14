import axios from 'axios'
import { useForm } from 'react-hook-form'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import { emailRegex, nameRegex } from '../texts/errors/formErrors'

import { FormContainer } from './styles/FormContainer.styled'

function ContactForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const onSubmit = () => {
    axios({
      url: 'https://formspree.io/f/mvolznvk', // placeholder, replace with ur id here
      method: 'post',
      headers: {
        Accept: 'application/json',
      },
      data: {
        name: getValues('Name').trim().replace(/ {2,}/g, ' ') ?? '', // trim and remove double spaces
        email: getValues('Email').trim(),
        message: getValues('Message').trim(),
      },
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputField type="text" title="Name" errors={errors} register={register} pattern={nameRegex} required />
      <InputField type="email" title="Email" errors={errors} register={register} pattern={emailRegex} required />
      <InputField type="text" title="Message" errors={errors} register={register} required />

      <SubmitButton text="Submit" fontSize="30px" />
    </FormContainer>
  )
}

export default ContactForm
