import { Container } from '../../lib/helpers'
import { Row, Box, Title, Copy } from './styles'

export default ({ fields }) => {
  return (
    <Container>
      <Row>
        {fields.map((field, i) => {
          const { icon, title, copy, color } = field
          return (
            <Box key={i}>
              <img src={icon.url} />
              <Title color={color}>{title[0].text}</Title>
              <Copy>{copy[0].text}</Copy>
            </Box>
          )
        })}
      </Row>
    </Container>
  )
}
