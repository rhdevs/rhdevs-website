import React, { useState } from 'react'
import axios from 'axios'
import InputField from './InputField'
import Button from './Button'
import { FormContainer, TextContainer } from './styles/FormContainer.styled'
import { contactUs } from '../texts/descriptions/contactUs'

export function ContactForm() {
  const [cName, setName] = useState<string>('')
  const [cEmail, setEmail] = useState<string>('')
  const [cMessage, setMessage] = useState<string>('')
  const onSubmit = () => {
    axios({
      url: 'https://formspree.io/f/mvolznvk', // placeholder, replace with ur id here
      method: 'post',
      headers: {
        Accept: 'application/json',
      },
      data: {
        name: cName,
        email: cEmail,
        message: cMessage,
      },
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <FormContainer>
      <TextContainer>{contactUs}</TextContainer>
      <InputField title="Name" value={cName} setValue={setName} type="name" required />
      <InputField title="Email" value={cEmail} setValue={setEmail} type="email" required />
      <InputField title="Message" value={cMessage} setValue={setMessage} type="text" required />
      <Button text="Send" onClick={onSubmit} fontSize="30px" />
    </FormContainer>
  )
}
