import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '../../styles/index.styled'

export const ClickToCopyTitle = styled.p<{ fontType: FontType }>`
  margin: 0;

  font-style: normal;
  ${fontTypeCss}

  color: ${(props) => props.color ?? 'white'};
  line-height: 3;
`

export const ClickToCopyLink = styled.a<{ fontType: FontType }>`
  font-style: normal;
  ${fontTypeCss}

  color: ${(props) => props.color ?? 'white'};

  cursor: copy;

  &:active {
    color: white !important;
  }
`