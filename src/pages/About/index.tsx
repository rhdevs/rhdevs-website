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
import frontendLogo from '../../assets/Frontend-logo.png'
import backendLogo from '../../assets/Backend-logo.png'
import designersLogo from '../../assets/Designers-logo.png'
import UIUXLogo from '../../assets/UIUX-logo.png'

export default function About() {
  return (
    <MainContainer>
      <PageSectionComponent title="Mission" description={missionDescription} hasImage={false} />
      <PageSectionComponent title="Vision" description={visionDescription} hasImage={false} />
      <PageSectionComponent
        title="Front End"
        description={frontEndDescription}
        hasImage
        textPosition="left"
        image={frontendLogo}
      />
      <PageSectionComponent
        title="Back End"
        description={backEndDescription}
        hasImage
        textPosition="right"
        image={backendLogo}
      />
      <PageSectionComponent
        title="Designers"
        description={designersDescription}
        hasImage
        textPosition="left"
        image={designersLogo}
      />
      <PageSectionComponent
        title="UI UX"
        description={uiuxDescription}
        hasImage
        textPosition="right"
        image={UIUXLogo}
      />
    </MainContainer>
  )
}
