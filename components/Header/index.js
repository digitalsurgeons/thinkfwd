import { Container } from '../../lib/helpers'
import { Headline, Root, Title } from './styles'

export default ({ primary: { title, headline } }) => {
  return (
    <Root>
      <Container>
        <Title>// {title[0].text.toLowerCase()}</Title>
        <Headline>{headline[0].text}</Headline>
      </Container>
    </Root>
  )
}
