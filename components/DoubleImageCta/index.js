import {
  Container,
  Wrapper,
  Image1,
  Image2,
  Box,
  BoxWrapper,
  Arrow
} from './styles'
import { Link } from '../../lib/routes'

export default ({ primary: { image1, image2, link} }) => (
  <Container>
    <Wrapper>
      <Image1 src={image1.mediaItemUrl} />
      <Image2 src={image2.mediaItemUrl} />
      <Link route={link.url} passHref>
        <Box>
          <BoxWrapper>
            {link.title}
            <Arrow src="/static/img/arrow-right-black.svg" />
          </BoxWrapper>
        </Box>
      </Link>
    </Wrapper>
  </Container>
)
