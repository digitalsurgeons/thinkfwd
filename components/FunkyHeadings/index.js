import { Wrapper, Heading, FlyingBox, FlyingComet, Subheading } from './styles'
import { Container } from '../../lib/helpers'

export default ({ primary: { heading, subheading } }) => (
  <Container>
    <Wrapper>
      <Heading>
        {heading}
        <FlyingBox src="/static/img/flying-blue-box.svg" />
      </Heading>
      <Subheading>
        {subheading}
        <FlyingComet src="/static/img/flying-yellow-comet.svg" />
      </Subheading>
    </Wrapper>
  </Container>
)
