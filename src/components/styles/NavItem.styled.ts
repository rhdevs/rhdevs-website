import styled from 'styled-components'

export const NavDiv = styled.div<{ isActive?: boolean }>`
  height: 60px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  transition: font-size 0.3s;
  text-transform: capitalize;
  color: white;
  ${(props) => {
    if (props.isActive) {
      return `
        color: ${props.theme.palette.primary};
        //css solution for styled underline
        background-image: linear-gradient(to bottom, ${props.theme.palette.primary}, ${props.theme.palette.primary});
        background-repeat: no-repeat;
        background-position: 50% 2em;
        // change this to adjust width and thickness out underline
        background-size: calc(100% - 8px) 2px;
      `
    }
    return `
      cursor: pointer;
      &:hover {
        font-size: 25px;
      }
    `
  }}
`
