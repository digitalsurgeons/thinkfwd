import { Wrapper, Heading, Row, Logos, Logo } from './styles'
import { Container } from '../../lib/helpers'

export default ({ primary: { heading }, fields }) => {
  return (
    <Container>
      <Wrapper>
        <Heading>{heading[0].text}</Heading>
        <Logos>
          {splitIntoRows(3, fields).map((row, i) => (
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

function splitIntoRows(fieldsPerRow, arr) {
  const rows = []
  const logoArray = JSON.parse(JSON.stringify(arr))
  while (logoArray && logoArray.length > 0) {
    rows.push(logoArray.splice(0, fieldsPerRow))
  }
  return rows
}
