import { Root, Title, Headline } from './styles'
import { Container } from '../../lib/helpers'

export default ({ data: { title, headline } }) => {
  return (
    <Root>
      <Container>
        <Title>// {title[0].text.toLowerCase()}</Title>
        <Headline>{headline[0].text}</Headline>
      </Container>
    </Root>
  )
}
