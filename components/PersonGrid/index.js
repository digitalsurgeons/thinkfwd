import Masonry from 'react-masonry-css'
import { Wrapper } from './styles'
import { Container, linkResolver } from '../../lib/helpers'
import PersonCard from '../PersonCard'
import { RichText } from 'prismic-reactjs'

export default ({ fields }) => (
  <Container>
    <Wrapper>
      <Masonry
        breakpointCols={{
          default: 2,
          960: 1
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {fields.map(({ person: { portrait, full_name, role, bio } }, i) => (
          <PersonCard
            key={i}
            image={portrait ? portrait.url : ''}
            title={full_name ? full_name[0].text : ''}
            subtitle={role ? role[0].text : ''}>
            {bio && RichText.render(bio, linkResolver)}
          </PersonCard>
        ))}
      </Masonry>
    </Wrapper>
  </Container>
)
