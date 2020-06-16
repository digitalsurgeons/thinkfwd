import { Container } from '../../lib/helpers'
import { Root, Row, Box, Title, Copy } from './styles'

export default ({ primary:{toolkitCategories} }) => {
  return (
    <Root>
      <Container>
        <Row>
          {toolkitCategories.map(({toolkitCategory:{id, title, toolkitCategory: {color, icon, description }}}) => {
            return (
              <Box key={id}>
                <img alt={title} src={icon.mediaItemUrl} />
                <Title color={color}>{title}</Title>
                {description && <Copy>{description}</Copy>}
              </Box>
            )
          })}
        </Row>
      </Container>
    </Root>
  )
}
