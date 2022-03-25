import PageSectionComponent from '../../components/PageSection'
import { interHallHackathon } from '../../texts/descriptions/events'
import { InformationMainContainer } from '../styles/InformationMain'

export default function Events() {
  return (
    <InformationMainContainer>
      <PageSectionComponent
        title={interHallHackathon.eventName}
        description={interHallHackathon.eventDescription}
        imgPosition="right"
        events
      />
      <PageSectionComponent
        title={interHallHackathon.eventName}
        description={interHallHackathon.eventDescription}
        imgPosition="left"
        events
      />
    </InformationMainContainer>
  )
}
