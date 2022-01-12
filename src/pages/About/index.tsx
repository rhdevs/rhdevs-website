import { missionDescription, visionDescription, logoDescription } from '../../texts/descriptions/aboutUs'
import { MainContainer } from './styles/AboutPage.styled'
import PageSectionComponent from '../../components/PageSection'

export default function AboutPage() {
  return (
    <MainContainer>
      <PageSectionComponent title="Mission" description={missionDescription} position="left" image="" />
      <PageSectionComponent title="Vision" description={visionDescription} position="right" image="" />
      <PageSectionComponent title="Logo" description={logoDescription} position="left" image="" />
    </MainContainer>
  )
}
