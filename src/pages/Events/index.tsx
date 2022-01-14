import PageSectionComponent from '../../components/PageSection'
import { MainContainer } from './styles/EventPage.styled'
import { interHallHackathon, interHallHackathonDesc } from '../../texts/descriptions/events'

export default function Events() {
  return (
    <MainContainer>
      <PageSectionComponent title={interHallHackathon} description={interHallHackathonDesc} position="left" image="" />
      <PageSectionComponent title={interHallHackathon} description={interHallHackathonDesc} position="right" image="" />
    </MainContainer>
  )
}
