import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from '../../routes'
import ErrorMessage from '../ErrorMessage'
import Card from '../Card'
import { Wrapper, Box, StyledLink } from './styles'
import { Container } from '../../lib/helpers'
import Loader from '../Loader'

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
        return (
          <Container>
            <Wrapper>
              {!loading &&
                data.allToolkits.edges.map((toolkit, i) => (
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
            </Wrapper>
          </Container>
        )
      }}
    </Query>
  )
}
