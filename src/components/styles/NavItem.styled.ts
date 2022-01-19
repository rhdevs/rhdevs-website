import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '../../styles/index.styled'

export const NavDiv = styled.div<{ isActive?: boolean; fontType: FontType }>`
  height: 4.6vw;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  ${fontTypeCss}
  transition: font-size 0.3s;
  text-transform: capitalize;
  ${(props) => {
    if (props.isActive) {
      return `
        color: ${props.theme.palette.primary};
        //css solution for styled underline
        background-image: linear-gradient(to bottom, ${props.theme.palette.primary}, ${props.theme.palette.primary});
        background-repeat: no-repeat;
        background-position: 40% 4vw;
        // change this to adjust width and thickness out underline
        background-size: calc(100% - 8px) 2px;
      `
    }
    return `
      color: ${props.theme.palette.common.white};
      cursor: pointer;
      &:hover {
        font-size: 25px;
      }
    `
  }}
`
