// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'antd'
import InputField from './InputField'

export function ContactForm() {
  const [cName, setName] = useState<string>('')
  const [cEmail, setEmail] = useState<string>('')
  const [cMessage, setMessage] = useState<string>('')
  const onSubmit = () => {
    axios({
      url: 'https://formspree.io/f/mvolznvk',
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
    <>
      <InputField title="Name" value={cName} setValue={setName} type="name" />
      <InputField title="Email" value={cEmail} setValue={setEmail} type="email" />
      <InputField title="Message" value={cMessage} setValue={setMessage} type="text" />
      <Button onClick={() => onSubmit()}>Send</Button>
    </>
  )
}
