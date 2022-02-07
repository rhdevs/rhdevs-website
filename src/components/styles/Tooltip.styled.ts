import styled from 'styled-components'

export const TooltipContainer = styled.div`
  width: 500px;
  block-size: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0; // initially invisible
`

export const LabelContainer = styled.div`
  inline-size: fit-content;
  padding: 15px;
  border-radius: 5px;
  ${(props) => `background-color: ${props.theme.palette.primary}`};
`

export const Label = styled.div`
  font-size: 20px;
  ${(props) => `color: ${props.theme.palette.common.white}`};
`

export const TooltipArrow = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 15px 0 15px;
  ${(props) => `
    border-color: transparent;
    border-top-color: ${props.theme.palette.primary}
  `};
  opacity: inherit;
`
