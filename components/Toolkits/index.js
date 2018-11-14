import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from '../../routes'
import ErrorMessage from '../ErrorMessage'
import Card from '../Card'
import { Container, Box, StyledLink } from './styles'

export const allToolkits = gql`
  query {
    allToolkits {
      edges {
        node {
          _meta {
            uid
            firstPublicationDate
          }
          title
          description
          image
        }
      }
    }
  }
`

export default () => {
  return (
    <Query query={allToolkits}>
      {({ loading, error, data }) => {
        if (error) return <ErrorMessage message="Error loading toolkits" />
        if (loading) return <div>Loading</div>
        return (
          <Container>
            {data.allToolkits.edges.map((toolkit, i) => (
              <Link
                key={i}
                route={`/toolkits/${toolkit.node._meta.uid}`}
                passHref>
                <StyledLink>
                  <Card
                    title={toolkit.node.title[0].text}
                    subtitle={toolkit.node.description[0].text}
                    image={toolkit.node.image.url}
                  />
                </StyledLink>
              </Link>
            ))}
          </Container>
        )
      }}
    </Query>
  )
}
