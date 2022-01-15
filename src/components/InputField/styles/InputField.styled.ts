import styled from 'styled-components'

export const InputFieldStyled = styled.div`
  width: 100%;
`

export const InputFieldTitle = styled.p<{ fontSize?: string }>`
  height: 46px;
  margin: 0;

  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.fontSize ?? '24px'};
  line-height: 200%;

  color: ${(props) => props.color ?? 'white'};
`

export const TextInput = styled.input<{ borderBottomInactive?: string; borderBottom?: string; fontSize?: string }>`
  width: 100%;
  height: 46px;

  outline: 0;
  border: 0;
  border-bottom: 1px solid ${(props) => props.borderBottomInactive ?? 'gray'};
  margin-top: 12px;

  font-weight: 300;
  font-size: ${(props) => props.fontSize ?? '36px'};
  line-height: 200%;

  color: white;
  background: transparent;

  transition: border-color 0.2s;

  :focus {
    border-bottom-color: ${(props) => props.borderBottom ?? 'white'};
  }
`
