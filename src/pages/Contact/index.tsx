/* eslint-disable security/detect-object-injection */
import {
  MainContainer,
  StaticSection,
  TextSection,
  ContactTitle,
  SectionContainer,
  SectionTitle,
  SectionContent,
  ContactLink,
  Logo,
} from './styles/Contact.styled'
import { navTitles } from '../../texts/common/navTitles'
import { contactHeaders, contactMethods, contactLinks } from '../../texts/common/rhdevsInfo'
import ClickToCopySection from '../../components/ClickToCopySection/ClickToCopySection'
// TODO: Switch image to static logo
import logo from '../../assets/noimg.png'

export default function Contact() {
  return (
    <MainContainer>
      <StaticSection>
        <TextSection>
          <ContactTitle>{navTitles[5]}</ContactTitle>
          {contactHeaders.map((header) => {
            if (typeof contactMethods[header] === 'string') {
              return (
                <SectionContainer>
                  {/* hacky solution to avoid type error due to string[] */}
                  {/* @ts-ignore */}
                  <ClickToCopySection text={contactMethods[header]} title={header} />
                </SectionContainer>
              )
            }
            return (
              <SectionContainer>
                <SectionTitle>{header}</SectionTitle>
                <SectionContent>
                  {/* TODO: Link to actual socials? */}
                  {/* @ts-ignore */}
                  {contactMethods[header].map((item) => (
                    // @ts-ignore
                    <ContactLink href={contactLinks[item]}>{item}</ContactLink>
                  ))}
                </SectionContent>
              </SectionContainer>
            )
          })}
        </TextSection>
        <Logo src={logo} alt="logo" />
      </StaticSection>
    </MainContainer>
  )
}
