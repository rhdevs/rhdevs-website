import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '../../../styles/index.styled'

export const InputFieldStyled = styled.div`
  width: 100%;
`

export const InputFieldTitle = styled.p<{ fontType: FontType }>`
  height: 46px;
  margin: 0;

  font-style: normal;
  ${fontTypeCss}

  color: ${(props) => props.color ?? 'white'};
`

export const TextInput = styled.input<{ fontType: FontType; bottomColorInactive?: string; bottomColor?: string }>`
  width: 100%;
  height: 46px;

  outline: 0;
  border: 0;
  border-bottom: 1px solid ${(props) => props.bottomColorInactive ?? 'gray'};
  margin-top: 12px;

  font-style: normal;
  ${fontTypeCss}

  color: white;
  background: transparent;

  transition: border-color 0.2s;

  :focus {
    border-bottom-color: ${(props) => props.bottomColor ?? 'white'};
  }
`
