import { Wrapper, Heading, Row, Logos, Logo } from './styles'
import { Container } from '../../lib/helpers'

export default ({ primary: { heading }, fields }) => {
  const rows = []
  const size = 3
  while (fields.length > 0) {
    rows.push(fields.splice(0, size))
  }
  return (
    <Container>
      <Wrapper>
        <Heading>{heading[0].text}</Heading>
        <Logos>
          {rows.map((row, i) => (
            <Row key={i}>
              {row.map((field, i) => (
                <Logo key={i} src={field.logo.url} />
              ))}
            </Row>
          ))}
        </Logos>
      </Wrapper>
    </Container>
  )
}
