import { Wrapper, Heading, FlyingBox, FlyingComet, Subheading } from './styles'
import { Container } from '../../lib/helpers'

export default ({ primary: { heading, subheading } }) => (
  <Container>
    <Wrapper>
      <Heading>
        {heading[0].text}
        <FlyingBox src="/static/img/flying-blue-box.svg" />
      </Heading>
      <Subheading>
        {subheading[0].text}
        <FlyingComet src="/static/img/flying-yellow-comet.svg" />
      </Subheading>
    </Wrapper>
  </Container>
)
