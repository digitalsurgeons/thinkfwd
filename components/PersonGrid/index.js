import Masonry from 'react-masonry-css'
import { Wrapper } from './styles'
import { Container } from '../../lib/helpers'
import PersonCard from '../PersonCard'

export default ({ primary: {people} }) => (
  <Container>
    <Wrapper>
      <Masonry
        breakpointCols={{
          default: 2,
          960: 1
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {people.map(({ person: {person:{ portrait, fullName, role, bio }}}, i) => (
          <PersonCard
            key={i}
            image={portrait ? portrait.mediaItemUrl : ''}
            title={fullName ? fullName : ''}
            subtitle={role ? role : ''}>
            {bio }
          </PersonCard>
        ))}
      </Masonry>
    </Wrapper>
  </Container>
)
