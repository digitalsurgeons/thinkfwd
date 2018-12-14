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

export default ({ primary: { image_1, image_2, link, link_text } }) => (
  <Container>
    <Wrapper>
      <Image1 src={image_1.url} />
      <Image2 src={image_2.url} />
      <Link route={linkResolver(link._meta)} passHref>
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
