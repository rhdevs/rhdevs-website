import { useTheme } from 'styled-components'
import Button from 'src/components/Button'
import ContactForm from '../../components/Contact'
import {
  MainContainer,
  StaticSection,
  InformationSection,
  ContactTitle,
  SectionContainer,
  SectionTitle,
  SectionContent,
  Logo,
} from './styles/Contact.styled'
import { contactHeaders, contactMethods, socialMedia } from '../../texts/common/rhdevsInfo'
import ClickToCopySection from '../../components/ClickToCopySection'
import logo from '../../assets/logo.png'

export default function Contact() {
  const theme = useTheme()
  const { body, h1, h2 } = { ...theme.typography.fontSize }
  return (
    <MainContainer>
      <ContactTitle fontType={h1}>Contact Us</ContactTitle>
      <StaticSection>
        <InformationSection>
          {contactHeaders.map((header) => (
            <SectionContainer>
              <ClickToCopySection text={contactMethods[header]} title={header} />
            </SectionContainer>
          ))}
          <SectionContainer>
            <SectionTitle fontType={h2}>{socialMedia.title}</SectionTitle>
            <SectionContent>
              {socialMedia.items.map((item) => (
                <Button link={socialMedia.links[item]} htmlType="button" fontType={body} text={item} />
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
