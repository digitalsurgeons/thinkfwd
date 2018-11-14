import { Container, Title, Headline } from './styles'

export default ({ data: { title, headline } }) => {
  return (
    <Container>
      <Title>{title[0].text}</Title>
      <Headline>{headline[0].text}</Headline>
    </Container>
  )
}
