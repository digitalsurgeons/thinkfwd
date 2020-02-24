import { Container } from '../../lib/helpers'
import { Link } from '../../lib/routes'
import Card from '../Card'
import { Heading, Root, StyledLink, Wrapper } from './styles'
import moment from 'moment'

export default ({ fields }) => {
  return (
    <Root>
      <Container>
        <Wrapper>
        <Link
                route="https://www.eventbrite.com/e/codefwd-animation-tickets-93111491979"
                passHref>
                <StyledLink target="_blank" rel="noopener noreferrer">
                  <Card
                    opaque={false}
                    imageTitle={
                      null
                    }
                    image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F91295493%2F286199106473%2F1%2Foriginal.20200206-205207?auto=format%2Ccompress&q=75&sharp=10&s=7844376306e3b7a9f604f977096a317c"
                    title="Code:fwd - Animation"
                    date="2020-02-25T18:00:00"
                    description={`New Haven, CT`}
                  />
                </StyledLink>
              </Link>
          {fields.map(({ event, coverage_link }, i) => {
            const isPast = moment(event.start.local).isBefore(Date.now())
            return (
              <Link
                key={i}
                route={isPast && coverage_link ? coverage_link.url : event.url}
                passHref>
                <StyledLink target="_blank" rel="noopener noreferrer">
                  <Card
                    opaque={isPast ? true : false}
                    imageTitle={
                      isPast
                        ? "This event is in the past. We're about the future. See what you missed."
                        : null
                    }
                    image={event.logo.original.url}
                    title={event.name.text}
                    date={event.start.local}
                    description={`${event.venue.address.city}, ${
                      event.venue.address.region
                    }`}
                  />
                </StyledLink>
              </Link>
            )
          })}
        </Wrapper>
        {!fields.length && (
          <p style={{ fontSize: 24, lineHeight: '32px' }}>
            There are no upcoming events. Stay tuned!
          </p>
        )}
      </Container>
    </Root>
  )
}
