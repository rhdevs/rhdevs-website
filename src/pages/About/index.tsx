import { NavBarSpace } from 'src/components/styles/NavBar.styled'
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
import frontendLogo from '../../assets/frontend_logo.png'
import backendLogo from '../../assets/backend_logo.png'
import designersLogo from '../../assets/designers_logo.png'
import UIUXLogo from '../../assets/uiux_logo.png'

export default function About() {
  return (
    <MainContainer>
      <NavBarSpace />
      <PageSectionComponent title="Mission" description={missionDescription} hasImage={false} />
      <PageSectionComponent title="Vision" description={visionDescription} hasImage={false} />
      <PageSectionComponent
        title="Front End"
        description={frontEndDescription}
        hasImage
        textPosition="left"
        image={frontendLogo}
        responsiveReverse
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
        responsiveReverse
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
