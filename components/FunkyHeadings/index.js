import { Wrapper, Heading, FlyingBox, FlyingComet, Subheading } from './styles'
import { Container } from '../../lib/helpers'

export default () => (
  <Container>
    <Wrapper>
      <Heading>
        We empower leaders and their teams to think and act forward.
        <FlyingBox src="/static/img/flying-blue-box.svg" />
      </Heading>
      <Subheading>
        Thinkfwd provides the tools and education needed to deliver innovation
        for your brand or business whether you're leading a team or contributing
        to one. It's part curriculum, part community; all focused on creating
        the way forward.
        <FlyingComet src="/static/img/flying-yellow-comet.svg" />
      </Subheading>
    </Wrapper>
  </Container>
)
