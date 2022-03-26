import {
  MainContainer,
  ImageContainer,
  ImageMask,
  Image,
  Divider,
  ProjectPreviewContainer,
  DividerContainer,
} from './styles/Projects.styled'
import logo from '../../assets/RHDevs_Logo2.png'
import ProjectPreview from '../../components/ProjectPreview'
import { facilityBooking, supperCollation, announcementBot } from '../../texts/descriptions/projects'

export default function Projects() {
  return (
    <MainContainer>
      <ImageContainer>
        <ImageMask>
          <Image src={logo} />
        </ImageMask>
      </ImageContainer>
      <DividerContainer>
        <Divider />
      </DividerContainer>
      <ProjectPreviewContainer>
        <ProjectPreview title={facilityBooking.projectTitle} text={facilityBooking.projectDescription} hasAnimation />
        <ProjectPreview title={supperCollation.projectTitle} text={supperCollation.projectDescription} hasAnimation />
        <ProjectPreview title={announcementBot.projectTitle} text={announcementBot.projectDescription} hasAnimation />
      </ProjectPreviewContainer>
    </MainContainer>
  )
}
