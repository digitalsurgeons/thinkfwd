import { Container } from '../../lib/helpers'
import { Link } from '../../lib/routes'
import Card from '../Card'
import { Heading, Root, StyledLink, Wrapper } from './styles'
import moment from 'moment'

export default ({ primary:{events} }) => {

  return (
    <Root>
      <Container>
        <Wrapper>
          {[...events].reverse().map(({event:{ event: {date, eventUrl, image, location, recapUrl, title} }}, i) => {
            const isPast = moment(date).isBefore(Date.now())
            return (
                <StyledLink target="_blank" rel="noopener noreferrer" href={isPast && recapUrl ? recapUrl : eventUrl} key={i}>
                  <Card
                    opaque={isPast ? true : false}
                    imageTitle={
                      isPast
                        ? "This event is in the past. We're about the future. See what you missed."
                        : null
                    }
                    image={image.mediaItemUrl}
                    title={title}
                    date={date}
                    description={location}
                  />
                </StyledLink>

            )
          })}
        </Wrapper>
        {!events.length && (
          <p style={{ fontSize: 24, lineHeight: '32px' }}>
            There are no upcoming events. Stay tuned!
          </p>
        )}
      </Container>
    </Root>
  )
}
