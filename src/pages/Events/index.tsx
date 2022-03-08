import RHDevs from '../../assets/RHDevs-Logo-EventsPage.png'
import UPGRHADEimg from '../../assets/UPGRHADE-Logo-EventsPage.png'
import InterHallimg from '../../assets/InterHall-Logo-EventsPage.png'
import PageSectionComponent from '../../components/PageSection'
import { MainContainer } from './styles/EventPage.styled'
import { interHallHackathon, RHAppLaunch, UPGRHADE } from '../../texts/descriptions/events'

export default function Events() {
  return (
    <MainContainer>
      <PageSectionComponent
        title={interHallHackathon.eventName}
        description={interHallHackathon.eventDescription}
        hasImage
        textPosition="right"
        image={InterHallimg}
        events
      />
      <PageSectionComponent
        title={RHAppLaunch.eventName}
        hasImage
        description={RHAppLaunch.eventDescription}
        textPosition="left"
        image={RHDevs}
        events
      />
      <PageSectionComponent
        title={UPGRHADE.eventName}
        hasImage
        description={UPGRHADE.eventDescription}
        textPosition="right"
        image={UPGRHADEimg}
        events
      />
    </MainContainer>
  )
}
