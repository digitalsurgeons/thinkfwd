import { Container, Title, Headline } from './styles'

export default ({ title, headline }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Headline>{headline}</Headline>
    </Container>
  )
}
