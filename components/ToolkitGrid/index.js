import { Query } from 'react-apollo'
import { Container } from '../../lib/helpers'
import allToolkits from '../../queries/allToolkits.graphql'
import { Link } from '../../lib/routes'
import Card from '../Card'
import ErrorMessage from '../ErrorMessage'
import { StyledLink, Wrapper } from './styles'

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
                    route={`/toolkit/${toolkit.node._meta.uid}`}
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
