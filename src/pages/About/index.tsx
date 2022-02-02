import { missionDescription, visionDescription, logoDescription } from '../../texts/descriptions/aboutUs'
import { MainContainer } from './styles/About.styled'
import PageSectionComponent from '../../components/PageSection'

export default function About() {
  return (
    <MainContainer>
      <PageSectionComponent title="Mission" description={missionDescription} textPosition="left" image="" />
      <PageSectionComponent title="Vision" description={visionDescription} textPosition="right" image="" />
      <PageSectionComponent title="Logo" description={logoDescription} textPosition="left" image="" />
    </MainContainer>
  )
}
