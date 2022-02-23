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
  justify-content: space-between;
  padding-bottom: 130px;
`

export const TextSection = styled.div`
  width: 50%;
  margin-right: 50px;
`

export const ContactTitle = styled.div<{ fontType: FontType }>`
  ${fontTypeCss}
  line-height: 1.5;
  font-weight: 300;
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
  justify-content: flex-start;
  align-items: center;
  a + a {
    padding: 0 50px;
  }
`

export const ContactLink = styled.p<{ fontType: FontType }>`
  font-style: normal;
  ${fontTypeCss}
  color: #b3b3b3;
  text-decoration: none;
  padding-right: 100px;
`

export const Logo = styled.img`
  width: 30%;
  object-fit: contain;
`
