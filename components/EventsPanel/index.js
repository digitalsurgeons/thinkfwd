import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '../../lib/helpers'
import { Link } from '../../lib/routes'
import Card from '../Card'
import { Heading, Root, StyledLink, Wrapper } from './styles'

export default () => {
  const [data, setData] = useState({ events: [] })
  const fetchData = async () => {
    const result = await axios(
      'https://www.eventbriteapi.com/v3/events/search/?token=6FVOFKSA3XN5CBW3MJZY&organizer.id=9268848926&expand=organizer,venue'
    )
    setData(result.data.events.slice(0, 3))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Root>
      <Container>
        <Heading>Upcoming Meetups & Events</Heading>
        <Wrapper>
          {data.length
            ? data.map((event, i) => (
                <Link key={i} route={event.url} passHref>
                  <StyledLink target="_blank" rel="noopener noreferrer">
                    <Card
                      image={event.logo.original.url}
                      title={event.name.text}
                      date={event.start.local}
                      subtitle={`${event.venue.address.city}, ${
                        event.venue.address.region
                      }`}
                    />
                  </StyledLink>
                </Link>
              ))
            : 'No upcoming events'}
        </Wrapper>
      </Container>
    </Root>
  )
}
