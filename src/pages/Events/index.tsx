import { NavBarSpace } from 'src/components/styles/NavBar.styled'
import PageSectionComponent from '../../components/PageSection'
import { MainContainer } from './styles/EventPage.styled'
import { interHallHackathon } from '../../texts/descriptions/events'

export default function Events() {
  return (
    <MainContainer>
      <NavBarSpace />
      <PageSectionComponent
        title={interHallHackathon.eventName}
        description={interHallHackathon.eventDescription}
        hasImage
        textPosition="left"
        image=""
        events
        mayNeedReverse
      />
      <PageSectionComponent
        title={interHallHackathon.eventName}
        description={interHallHackathon.eventDescription}
        hasImage
        textPosition="right"
        image=""
        events
      />
    </MainContainer>
  )
}
