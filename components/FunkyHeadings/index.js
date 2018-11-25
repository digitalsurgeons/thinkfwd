import { Wrapper, Heading, Subheading } from './styles'
import { Container } from '../../lib/helpers'

export default ({ primary: { heading, subheading } }) => (
  <Container>
    <Wrapper>
      <Heading>{heading[0].text}</Heading>
      <Subheading>{subheading[0].text}</Subheading>
    </Wrapper>
  </Container>
)
