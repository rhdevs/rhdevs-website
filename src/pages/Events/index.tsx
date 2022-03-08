import RHDevs from '../../assets/RHDevs-Logo-EventsPage.png'
import UPGRHADEimg from '../../assets/UPGRHADE-Logo-EventsPage.png'
import InterHallimg from '../../assets/InterHall-Logo-EventsPage.png'
import PageSectionComponent from '../../components/PageSection'
import { MainContainer } from './styles/EventPage.styled'
import { Adesc, Atitle, Bdesc, Btitle, Cdesc, Ctitle } from '../../texts/descriptions/events'

export default function Events() {
  return (
    <MainContainer>
      <PageSectionComponent
        title={Atitle}
        description={Adesc}
        hasImage
        textPosition="right"
        image={InterHallimg}
        events
      />
      <PageSectionComponent title={Btitle} hasImage description={Bdesc} textPosition="left" image={RHDevs} events />
      <PageSectionComponent
        title={Ctitle}
        hasImage
        description={Cdesc}
        textPosition="right"
        image={UPGRHADEimg}
        events
      />
    </MainContainer>
  )
}
