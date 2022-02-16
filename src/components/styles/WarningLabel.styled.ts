import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '../../styles/index.styled'

export const Label = styled.span<{ fontType: FontType }>`
  font-size: 20px;
  margin-left: 1rem;
  opacity: 0; // initially invisible
  color: ${(props) => props.theme.palette.primary};

  font-style: normal;
  ${fontTypeCss}
`
