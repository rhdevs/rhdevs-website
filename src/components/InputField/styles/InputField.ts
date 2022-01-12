import styled from 'styled-components'

export const InputFieldStyled = styled.div`
  width: 100%;
`

export const InputFieldTitle = styled.p`
  margin: 0px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 50px;
`

export const TextInput = styled.input.attrs({ type: 'text', responsive: true })`
  width: 100%;
  padding: 7px 0;

  outline: 0;
  border: 0;
  border-bottom: 1px solid gray; // TODO useTheme for colour?

  font-weight: 600;
  font-size: ${(props) => (props.responsive ? 'max(1vw, 15px)' : '15px')};
  line-height: ${(props) => (props.responsive ? 'max(25px, 1.7vw)' : '25px')};

  background: transparent;

  transition: border-color 0.2s;

  :focus {
    border-bottom-color: white;
  }
`
