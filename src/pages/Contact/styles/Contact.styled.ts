import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '../../../styles/index.styled'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 10%;
  background: ${(props) => props.theme.palette.common.black};
  color: ${(props) => props.theme.palette.common.white};
  gap: 50px;
`

export const StaticSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`

export const InformationSection = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Logo = styled.img`
  width: 30%;
  object-fit: contain;
`

export const ContactTitle = styled.label<{ fontType: FontType }>`
  ${fontTypeCss}
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SectionTitle = styled.p<{ fontType: FontType }>`
  margin: 0;
  ${fontTypeCss}
`

export const SectionContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a + a {
    padding: 0 50px;
  }
`

export const ContactLink = styled.a<{ fontType: FontType }>`
  ${fontTypeCss}
  color: ${(props) => props.theme.palette.common.gray};
  text-decoration: none;
`
