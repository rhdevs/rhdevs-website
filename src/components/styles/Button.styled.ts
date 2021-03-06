import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '../../styles/index.styled'

export const BaseButton = styled.button<{ fontType: FontType; hasActive?: boolean }>`
  width: fit-content;
  justify-content: center;
  align-items: center;
  margin-right: 2em;
  color: ${(props) => props.theme.palette.common.white};
  ${fontTypeCss}
  border: 0;
  border-bottom: transparent 2px solid;
  background-color: ${(props) => props.theme.palette.common.black};
  transition: background-image 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    background-position: 50% 1.2em;
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.palette.common.white},
      ${(props) => props.theme.palette.common.white}
    );
    background-repeat: no-repeat;
    background-size: calc(100% - 18px) 2px;
  }

  ${(props) =>
    props.hasActive &&
    `:active {background-position: 50% 1.2em;
    color: ${props.theme.palette.primary};
    background-image: linear-gradient(
      to bottom,
      ${props.theme.palette.primary},
      ${props.theme.palette.primary}
    );
    background-repeat: no-repeat;
    background-size: calc(100% - 18px) 2px;
  }`}
`
