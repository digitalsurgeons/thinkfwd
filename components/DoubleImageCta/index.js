import { Box, BoxWrapper, Arrow } from './styles'
import { Container, linkResolver } from '../../lib/helpers'
import { Link } from '../../lib/routes'

export default ({ primary: { link_text } }) => (
  <Container>
    <Link passHref>
      <Box>
        <BoxWrapper>
          {link_text[0].text}
          <Arrow src="/static/img/arrow-right.svg" />
        </BoxWrapper>
      </Box>
    </Link>
  </Container>
)
