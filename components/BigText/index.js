import { Text } from './styles'
import { Container } from '../../lib/helpers'

export default ({ primary: { heading } }) => (
  <Container>
    <Text>{heading[0].text}</Text>
  </Container>
)
