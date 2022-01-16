import styled from 'styled-components'

export const ClickToCopyTitle = styled.p`
  margin: 0;

  font-style: normal;
  font-weight: 300;
  font-size: clamp(15px, 1.25vw, 18px);
  line-height: 3;
`

export const ClickToCopyLink = styled.a`
  font-style: normal;
  font-weight: 300;
  font-size: clamp(1vw, 2vw, 30px);

  cursor: copy;

  &:active {
    color: white !important;
  }
`
