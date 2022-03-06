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
      <PageSectionComponent title="Mission" description={missionDescription} hasImage={false} />
      <PageSectionComponent title="Vision" description={visionDescription} hasImage={false} />
      <PageSectionComponent title="Front End" description={frontEndDescription} hasImage textPosition="left" image="" />
      <PageSectionComponent title="Back End" description={backEndDescription} hasImage textPosition="right" image="" />
      <PageSectionComponent
        title="Designers"
        description={designersDescription}
        hasImage
        textPosition="left"
        image=""
      />
      <PageSectionComponent title="UI UX" description={uiuxDescription} hasImage textPosition="right" image="" />
    </MainContainer>
  )
}
