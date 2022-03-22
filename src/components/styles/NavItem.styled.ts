import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '../../styles/index.styled'

export const StyledNavItem = styled.div<{ isActive?: boolean; fontType: FontType }>`
  height: 100%;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${fontTypeCss}
  transition: font-size 0.3s;
  text-transform: capitalize;
  line-height: 1;
  ${(props) => {
    if (props.isActive) {
      return `
        color: ${props.theme.palette.primary};
        //css solution for styled underline
        background-image: linear-gradient(to bottom, ${props.theme.palette.primary}, ${props.theme.palette.primary});
        background-repeat: no-repeat;
        background-position: 50% calc(50% + 12px);;
        // change this to adjust width and thickness out underline
        background-size: calc(100% - 8px) 2px;
      `
    }
    return `
      color: ${props.theme.palette.common.white};
      &:hover {
        font-size: 130%;
      }
    `
  }}
  @media (max-width: 650px) {
    font-size: 12px;
  }
`
