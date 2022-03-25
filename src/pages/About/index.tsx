import {
  missionDescription,
  visionDescription,
  frontEndDescription,
  backEndDescription,
  designersDescription,
  uiuxDescription,
} from '../../texts/descriptions/aboutUs'
import PageSectionComponent from '../../components/PageSection'
import frontendLogo from '../../assets/Frontend-logo.png'
import backendLogo from '../../assets/Backend-logo.png'
import designersLogo from '../../assets/Designers-logo.png'
import UIUXLogo from '../../assets/UIUX-logo.png'
import { InformationMainContainer } from '../styles/InformationMain'

export default function About() {
  return (
    <InformationMainContainer>
      <PageSectionComponent title="Mission" description={missionDescription} />
      <PageSectionComponent title="Vision" description={visionDescription} />
      <PageSectionComponent
        title="Front End"
        description={frontEndDescription}
        imgPosition="right"
        imageSrc={frontendLogo}
      />
      <PageSectionComponent
        title="Back End"
        description={backEndDescription}
        imgPosition="left"
        imageSrc={backendLogo}
      />
      <PageSectionComponent
        title="Designers"
        description={designersDescription}
        imgPosition="right"
        imageSrc={designersLogo}
      />
      <PageSectionComponent title="UI UX" description={uiuxDescription} imgPosition="left" imageSrc={UIUXLogo} />
    </InformationMainContainer>
  )
}
