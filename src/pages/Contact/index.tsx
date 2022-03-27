import { useTheme } from 'styled-components'
import ContactForm from '../../components/Contact'
import {
  MainContainer,
  StaticSection,
  InformationSection,
  ContactTitle,
  SectionContainer,
  SectionTitle,
  SectionContent,
  ContactLink,
  Logo,
} from './styles/Contact.styled'
import { contactHeaders, contactMethods, socialMedia } from '../../texts/common/rhdevsInfo'
import ClickToCopySection from '../../components/ClickToCopySection'
import logo from '../../assets/logo.png'

export default function Contact() {
  const theme = useTheme()
  const { h1, h2, body } = { ...theme.typography.fontSize }
  return (
    <MainContainer>
      <ContactTitle fontType={h1}>Contact Us</ContactTitle>
      <StaticSection>
        <InformationSection>
          {contactHeaders.map((header, index) => (
            <SectionContainer key={index}>
              <ClickToCopySection text={contactMethods[header]} title={header} />
            </SectionContainer>
          ))}
          <SectionContainer>
            <SectionTitle fontType={h2}>{socialMedia.title}</SectionTitle>
            <SectionContent>
              {socialMedia.items.map((item, index) => (
                <ContactLink key={index} fontType={body} href={socialMedia.links[item]} target="_blank">
                  {item}
                </ContactLink>
              ))}
            </SectionContent>
          </SectionContainer>
        </InformationSection>
        <Logo src={logo} alt="logo" />
      </StaticSection>
      <ContactForm />
    </MainContainer>
  )
}
