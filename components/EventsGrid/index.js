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
