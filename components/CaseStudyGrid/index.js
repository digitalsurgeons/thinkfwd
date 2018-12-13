import Masonry from 'react-masonry-css'
import { Wrapper } from './styles'
import { Container } from '../../lib/helpers'
import CaseStudyCard from '../CaseStudyCard'

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
        {fields.map(({ case_study: { title, description, image } }, i) => (
          <CaseStudyCard
            key={i}
            image={image.url}
            title={title[0].text}
            subtitle={description[0].text}
          />
        ))}
      </Masonry>
    </Wrapper>
  </Container>
)
