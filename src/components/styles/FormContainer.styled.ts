import styled from 'styled-components'

export const FormContainer = styled.form<{ noValidate?: true }>`
  // default browser validation disabled by default
  display: flex;
  flex-direction: column;
  align-items: center;
  Button {
    margin: 40px;
  }
`

export const TextContainer = styled.div`
  font-size: 30px;
  margin: 35px 0px;
  align-self: flex-start;
`
