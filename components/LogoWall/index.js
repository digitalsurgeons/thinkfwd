import { Wrapper, Heading, Row, Logos, LogoContainer, Logo } from './styles'
import { Container } from '../../lib/helpers'

export default ({ primary: { heading }, fields }) => {
  return (
    <Container>
      <Wrapper>
        <Heading>{heading[0].text}</Heading>
        <Logos>
          {fields.map((field, i) => (
            <LogoContainer key={i}>
              <Logo src={field.logo.url} />
            </LogoContainer>
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
