import styled from 'styled-components'

export const ClickToCopyTitle = styled.p<{ fontSize?: string }>`
  margin: 0px;

  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.fontSize ?? '18px'};
  line-height: 50px;

  color: ${(props) => props.color ?? 'white'};
`

export const ClickToCopyLink = styled.a<{ fontSize?: string }>`
  font-style: normal;
  font-weight: 300;
  font-size: ${(props) => props.fontSize ?? '30px'};

  color: ${(props) => props.color ?? 'white'};

  cursor: copy;

  &:active {
    color: white !important;
  }
`
