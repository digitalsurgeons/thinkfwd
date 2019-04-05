import { Container } from '../../lib/helpers'
import { Link } from '../../lib/routes'
import Card from '../Card'
import { Heading, Root, StyledLink, Wrapper } from './styles'

export default ({ fields }) => {
  return (
    <Root>
      <Container>
        <Wrapper>
          {fields.map(({ event }, i) => (
            <Link key={i} route={event.url} passHref>
              <StyledLink target="_blank" rel="noopener noreferrer">
                <Card
                  image={event.logo.original.url}
                  title={event.name.text}
                  date={event.start.local}
                  description={`${event.venue.address.city}, ${
                    event.venue.address.region
                  }`}
                />
              </StyledLink>
            </Link>
          ))}
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
