import { Container } from '../../lib/helpers'
import { Root, Row, Box, Title, Copy } from './styles'

export default ({ fields }) => {
  return (
    <Root>
      <Container>
        <Row>
          {fields.map((field, i) => {
            const {
              toolkit_category: { icon, title, description, color }
            } = field
            return (
              <Box key={i}>
                <img alt={icon.alt} src={icon.url} />
                <Title color={color}>{title[0].text}</Title>
                {description && <Copy>{description[0].text}</Copy>}
              </Box>
            )
          })}
        </Row>
      </Container>
    </Root>
  )
}
