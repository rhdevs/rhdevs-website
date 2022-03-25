import PageSectionComponent from '../../components/PageSection'
import { MainContainer } from './styles/EventPage.styled'
import { events } from '../../texts/descriptions/events'

export default function Events() {
  return (
    <MainContainer>
      {events.map((event, index) => (
        <PageSectionComponent
          title={event.title}
          description={event.description}
          hasImage
          textPosition={index % 2 === 0 ? 'right' : 'left'}
          image={event.image}
          events
        />
      ))}
    </MainContainer>
  )
}
