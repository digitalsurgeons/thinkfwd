import { useQuery } from '@apollo/react-hooks'
import { Container } from '../../lib/helpers'
import allToolkits from '../../queries/allToolkits.graphql'
import { Link } from '../../lib/routes'
import Card from '../Card'
import ErrorMessage from '../ErrorMessage'
import { StyledLink, Wrapper } from './styles'
import { colors } from '../../lib/settings'

export default ({ primary:{toolkits} }) => {
  return (
    <Container>
      <Wrapper>
        {toolkits.map(
          ({ toolkit: {title, slug, toolkit:{ description, image, category, id} } }) => (
            <Link key={id} route={`/toolkit/${slug}`} passHref>
              <StyledLink>
                <Card
                  title={title}
                  subtitle={category?.title}
                  color={category ? category.color : colors.pink}
                  description={description ? description: ''}
                  image={image?.mediaItemUrl}
                />
              </StyledLink>
            </Link>
          )
        )}
      </Wrapper>
    </Container>
  )
}
