import PageSectionComponent from '../../components/PageSection'
import { MainContainer } from './styles/EventPage.styled'
import { interHallHackathon } from '../../texts/descriptions/events'

export default function Events() {
  return (
    <MainContainer>
      <PageSectionComponent
        title={interHallHackathon.eventName}
        description={interHallHackathon.eventDescription}
        position="left"
        image=""
        class="EVENTS"
      />
      <PageSectionComponent
        title={interHallHackathon.eventName}
        description={interHallHackathon.eventDescription}
        position="right"
        image=""
        class="EVENTS"
      />
    </MainContainer>
  )
}
