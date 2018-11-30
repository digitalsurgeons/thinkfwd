import {
  Container,
  Wrapper,
  Image1,
  Image2,
  Box,
  BoxWrapper,
  Arrow
} from './styles'
import { linkResolver } from '../../lib/helpers'
import { Link } from '../../lib/routes'

export default ({ primary: { link_text } }) => (
  <Container>
    <Wrapper>
      <Image1 src="/static/img/workshop1.jpg" />
      <Image2 src="/static/img/workshop2.jpg" />
      <Link passHref>
        <Box>
          <BoxWrapper>
            {link_text[0].text}
            <Arrow src="/static/img/arrow-right-black.svg" />
          </BoxWrapper>
        </Box>
      </Link>
    </Wrapper>
  </Container>
)
