import { Wrapper, Heading, Row, Logos, LogoContainer, Logo } from './styles'
import { Container } from '../../lib/helpers'

export default ({ primary: { heading, logos }  }) => {
  return (
    <Container>
      <Wrapper>
        <Heading>{heading}</Heading>
        <Logos>
          {logos.map((item, i) => (
            <LogoContainer key={i}>
              <Logo src={item.logo.mediaItemUrl} />
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
