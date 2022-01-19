import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '../../../styles/index.styled'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 10%;
  background: ${(props) => props.theme.palette.common.black};
  color: ${(props) => props.theme.palette.common.white};
`

export const StaticSection = styled.div`
  display: flex;
`

export const TextSection = styled.div`
  width: 50%;
  margin-right: 50px;
`

export const ContactTitle = styled.div<{ fontType: FontType }>`
  ${fontTypeCss}
  margin-bottom: 50px;
`

export const SectionContainer = styled.div`
  margin: 30px 0;
`

export const SectionTitle = styled.p<{ fontType: FontType }>`
  margin: 0;
  ${fontTypeCss}

  font-style: normal;
  line-height: 3;
`

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ContactLink = styled.a`
  font-style: normal;
  font-weight: 300;
  font-size: clamp(1vw, 2vw, 30px);
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.palette.primary};
    text-decoration: underline;
  }
`

export const Logo = styled.img`
  width: 50%;
  height: auto;
`
