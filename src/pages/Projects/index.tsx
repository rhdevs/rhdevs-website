import {
  MainContainer,
  ImageContainer,
  ImageMask,
  Image,
  Divider,
  ProjectPreviewContainer,
} from './styles/Projects.styled'
import logo from '../../assets/RHDevs-Logo-2.png'
import ProjectPreview from '../../components/ProjectPreview'
import { rhApp, hackathons, rhAnnouncementBot } from '../../texts/descriptions/projects'

export default function Projects() {
  return (
    <MainContainer>
      <ImageContainer>
        <ImageMask>
          <Image src={logo} />
        </ImageMask>
      </ImageContainer>
      <Divider />
      <ProjectPreviewContainer>
        <ProjectPreview title={rhApp.projectTitle} text={rhApp.projectDescription} hasAnimation />
        <ProjectPreview title={hackathons.projectTitle} text={hackathons.projectDescription} hasAnimation />
        <ProjectPreview
          title={rhAnnouncementBot.projectTitle}
          text={rhAnnouncementBot.projectDescription}
          hasAnimation
        />
      </ProjectPreviewContainer>
    </MainContainer>
  )
}
