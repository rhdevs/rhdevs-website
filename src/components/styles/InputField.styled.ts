import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '../../styles/index.styled'

export const InputFieldContainer = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
`

export const TooltipStyled = styled.div`
  position: absolute;
  left: 20vw;
  top: 15px;
  transform: scale(0.8);
`

export const InputFieldStyled = styled.div`
  position: absolute;
  bottom: 0;
  height: 91px;
  width: 100%;
`

export const InputFieldTitle = styled.p<{ fontType: FontType }>`
  height: 46px;
  margin: 0;

  font-style: normal;
  ${fontTypeCss}

  color: ${(props) => props.color ?? 'white'};
`

type Props = {
  fontType: FontType
  bottomColor?: string
  bottomColorInactive?: string
  bottomColorInvalid?: string
}

export const TextInput = styled.input<Props>`
  width: 100%;
  height: 45px;
  margin: 0;

  outline: 0;
  border: 0;
  border-bottom: 1px solid ${(props) => props.bottomColorInactive ?? 'gray'};

  font-style: normal;
  ${fontTypeCss}

  color: white;
  background: transparent;

  transition: border-color 0.2s;

  :focus {
    border-bottom-color: ${(props) => props.bottomColor ?? 'white'};
  }
  :focus:invalid {
    border-bottom-color: ${(props) => props.bottomColorInvalid ?? 'red'};
  }
`
