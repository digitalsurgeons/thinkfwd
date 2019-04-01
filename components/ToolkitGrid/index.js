import { Query } from 'react-apollo'
import { prefetch } from 'next-apollo'
import { Container } from '../../lib/helpers'
import allToolkits from '../../queries/allToolkits.graphql'
import { Link } from '../../lib/routes'
import Card from '../Card'
import ErrorMessage from '../ErrorMessage'
import { StyledLink, Wrapper } from './styles'
import { colors } from '../../lib/settings'

export default ({ fields }) => {
  return (
    <Container>
      <Wrapper>
        {fields.map(
          ({ toolkit: { title, description, image, category, _meta } }, i) => (
            <Link key={i} route={`/toolkit/${_meta.uid}`} passHref>
              <StyledLink
                onMouseOver={() => prefetch(`/toolkit?slug=${_meta.uid}`)}>
                <Card
                  title={title[0].text}
                  subtitle={category ? category.title[0].text : ''}
                  color={category ? category.color : colors.pink}
                  description={description ? description[0].text : ''}
                  image={image.url}
                />
              </StyledLink>
            </Link>
          )
        )}
      </Wrapper>
    </Container>
  )
}
