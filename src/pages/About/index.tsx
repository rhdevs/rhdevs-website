import {
  missionDescription,
  visionDescription,
  frontEndDescription,
  backEndDescription,
  designersDescription,
  uiuxDescription,
} from '../../texts/descriptions/aboutUs'
import { MainContainer } from './styles/About.styled'
import PageSectionComponent from '../../components/PageSection'

export default function About() {
  return (
    <MainContainer>
      <PageSectionComponent title="Mission" description={missionDescription} textPosition="right" image="" />
      <PageSectionComponent title="Vision" description={visionDescription} textPosition="left" image="" />
      <PageSectionComponent title="Front End" description={frontEndDescription} textPosition="left" image="" />
      <PageSectionComponent title="Back End" description={backEndDescription} textPosition="right" image="" />
      <PageSectionComponent title="Designers" description={designersDescription} textPosition="left" image="" />
      <PageSectionComponent title="UI UX" description={uiuxDescription} textPosition="right" image="" />
    </MainContainer>
  )
}
