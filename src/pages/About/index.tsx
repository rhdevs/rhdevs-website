import { missionDescription, visionDescription, logoDescription } from '../../texts/descriptions/aboutUs'
import { MainContainer, MiddleTitle } from './styles/About.styled'
import PageSectionComponent from '../../components/PageSection'

export default function About() {
  return (
    <MainContainer>
      <PageSectionComponent title="Mission" description={missionDescription} textPosition="right" image="" />
      <PageSectionComponent title="Vision" description={visionDescription} textPosition="left" image="" />
      <PageSectionComponent title="Logo" description={logoDescription} textPosition="right" image="" />
      <MiddleTitle>Team Structure</MiddleTitle>
    </MainContainer>
  )
}
