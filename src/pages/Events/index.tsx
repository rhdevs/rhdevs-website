import PageSectionComponent from '../../components/PageSection'
import { MainContainer } from './styles/EventPage.styled'
import { interHallHackathon } from '../../texts/descriptions/events'

export default function Events() {
  return (
    <MainContainer>
      <PageSectionComponent
        title={interHallHackathon.eventName}
        description={interHallHackathon.eventDescription}
        textPosition="left"
        image=""
        events
      />
      <PageSectionComponent
        title={interHallHackathon.eventName}
        description={interHallHackathon.eventDescription}
        textPosition="right"
        image=""
        events
      />
    </MainContainer>
  )
}
