import Masonry from 'react-masonry-css'
import { Wrapper } from './styles'
import { Container } from '../../lib/helpers'
import PersonCard from '../PersonCard'

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
        <PersonCard
          image="/static/img/pete.jpg"
          title="Pete Sena"
          subtitle="Innovation Catalyst">
          <p>
            Well-versed in all aspects of design, technology, and business, Pete
            is an industry leader in design thinking. In addition to helping
            startups and fortune 50s through design thinking workshops, he
            presented on the topic at Pepsico, LEGO, and Yale.
          </p>
          <p>
            An entrepreneur in every sense – Equal parts scrappy, gritty, and
            antifragile – he taught himself to code by referencing programming
            books (by hand) in the corner of a Barnes and Noble. Now he sits as
            both CEO and Chief Creative Officer of a digital marketing agency
            based in New Haven, CT.
          </p>
        </PersonCard>
        <PersonCard
          image="/static/img/joe.jpg"
          title="Joe Pilcavage"
          subtitle="Lead Inventor">
          <p>
            An award-winning agency veteran, Joe is a high energy,
            results-driven perfectionist and multidisciplinary creative who
            heads up the creative department at Digital Surgeons, a connected
            experience design company in New Haven, CT.
          </p>
          <p>
            Specializing in design thinking and business model innovation with
            an emphasis on brand and digital experience design, Joe has worked
            on a number of global businesses that span various industries and
            stages, from early stage startups to B2C challenger brands and B2B
            enterprise organizations.
          </p>
        </PersonCard>
        <span />
        <PersonCard
          image="/static/img/adam-chambers.jpg"
          title="Adam Chambers"
          subtitle="Innovation Catalyst">
          <p>
            Adam is a full stack engineer, specializing in JavaScript. He is a
            web audio enthusiast, front end performance geek, guitarist,
            musician and now an official legal alien.
          </p>
        </PersonCard>
      </Masonry>
    </Wrapper>
  </Container>
)
