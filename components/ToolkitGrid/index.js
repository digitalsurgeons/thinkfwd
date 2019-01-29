import { Query } from 'react-apollo'
import { prefetch } from 'next-apollo'
import { Container } from '../../lib/helpers'
import allToolkits from '../../queries/allToolkits.graphql'
import { Link } from '../../lib/routes'
import Card from '../Card'
import ErrorMessage from '../ErrorMessage'
import { StyledLink, Wrapper } from './styles'
import { colors } from '../../lib/settings'

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
                    <StyledLink
                      onMouseOver={() =>
                        prefetch(`/toolkit?slug=${toolkit.node._meta.uid}`)
                      }>
                      <Card
                        title={toolkit.node.title[0].text}
                        subtitle={
                          toolkit.node.category
                            ? toolkit.node.category.title[0].text
                            : ''
                        }
                        color={
                          toolkit.node.category
                            ? toolkit.node.category.color
                            : colors.pink
                        }
                        description={toolkit.node.description[0].text}
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
