import Masonry from 'react-masonry-css'
import { Wrapper } from './styles'
import { Container } from '../../lib/helpers'
import CaseStudyCard from '../CaseStudyCard'

export default ({ primary: {caseStudies} }) =>
(
  <Container>
    <Wrapper>
      <Masonry
        breakpointCols={{
          default: 2,
          960: 1
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {caseStudies.map(({ caseStudy: { caseStudy:{title, description, image}, id } }) => (
          <CaseStudyCard
            key={id}
            image={image.mediaItemUrl}
            title={title}
            subtitle={description}
          />
        ))}
      </Masonry>
    </Wrapper>
  </Container>
)
