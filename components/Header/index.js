import { Container } from '../../lib/helpers'
import { Headline, Root, Title } from './styles'

export default ({ primary: { heading, subheading } }) => {
  return (
    <Root>
      <Container>
        <Title>// {heading.toLowerCase()}</Title>
        <Headline>{subheading}</Headline>
      </Container>
    </Root>
  )
}
