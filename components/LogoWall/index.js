import { Wrapper, Heading, Row, Logos, Logo } from './styles'
import { Container } from '../../lib/helpers'

export default ({ primary: { heading } }) => (
  <Container>
    <Wrapper>
      <Heading>{heading[0].text}</Heading>
      <Logos>
        <Row>
          <Logo src="/static/img/yale.svg" />
          <Logo src="/static/img/yale.svg" />
          <Logo src="/static/img/yale.svg" />
        </Row>
        <Row>
          <Logo src="/static/img/yale.svg" />
          <Logo src="/static/img/yale.svg" />
          <Logo src="/static/img/yale.svg" />
        </Row>
      </Logos>
    </Wrapper>
  </Container>
)
