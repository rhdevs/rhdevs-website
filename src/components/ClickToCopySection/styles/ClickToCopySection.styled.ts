import styled from 'styled-components'

export const ClickToCopyTitle = styled.p`
  margin: 0;

  font-style: normal;
  font-weight: 300;
  font-size: 1.25vw;
  line-height: 50px;
`

export const ClickToCopyLink = styled.a`
  font-style: normal;
  font-weight: 300;
  font-size: 2vw;

  cursor: copy;

  &:active {
    color: white !important;
  }
`
