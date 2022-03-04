import RHDevs from '../../assets/RHDevs-Logo-2.png'
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
        textPosition="left"
        image={InterHallimg}
        events
      />
      <PageSectionComponent
        title={RHAppLaunch.eventName}
        description={RHAppLaunch.eventDescription}
        textPosition="right"
        image={RHDevs}
        events
      />
      <PageSectionComponent
        title={UPGRHADE.eventName}
        description={UPGRHADE.eventDescription}
        textPosition="left"
        image={UPGRHADEimg}
        events
      />
    </MainContainer>
  )
}
