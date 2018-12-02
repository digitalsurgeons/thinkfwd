import Masonry from 'react-masonry-css'
import { Wrapper } from './styles'
import { Container } from '../../lib/helpers'
import ImageCard from '../ImageCard'

export default () => (
  <Container>
    <Wrapper>
      <Masonry
        breakpointCols={{
          default: 2,
          960: 1
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <ImageCard
          image="/static/img/district.jpg"
          title="District"
          subtitle="We’ve built a $22M technology & innovation campus in Connecticut with this framework."
        />
        <ImageCard
          style={{ marginTop: '150px' }}
          image="/static/img/district.jpg"
          title="Arccos"
          subtitle="We’ve designed and launched brand experiences these 4 global brands on the NYSE for global investors."
        />
        <ImageCard
          image="/static/img/district.jpg"
          title="District"
          subtitle="asdf asdf"
        />
        <ImageCard
          image="/static/img/district.jpg"
          title="District"
          subtitle="asdf asdf"
        />
        <ImageCard
          image="/static/img/district.jpg"
          title="District"
          subtitle="asdf asdf"
        />
        <ImageCard
          image="/static/img/district.jpg"
          title="District"
          subtitle="asdf asdf"
        />
      </Masonry>
    </Wrapper>
  </Container>
)
