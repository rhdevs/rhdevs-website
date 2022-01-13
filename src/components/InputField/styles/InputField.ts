import styled from 'styled-components'

export const InputFieldStyled = styled.div`
  width: 100%;
`

export const InputFieldTitle = styled.p.attrs({ colour: 'white' })`
  margin: 0px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 50px;

  color: ${(props) => props.colour};
`

export const TextInput = styled.input.attrs({ borderColorInactive: 'gray', borderColor: 'white' })`
  width: 100%;

  outline: 0;
  border: 0;
  border-bottom: 1px solid ${(props) => props.borderColorInactive};

  font-weight: 500;
  font-size: 18px;
  line-height: 50px;

  color: white;
  background: transparent;

  transition: border-color 0.2s;

  :focus {
    border-bottom-color: ${(props) => props.borderColor};
  }
`
