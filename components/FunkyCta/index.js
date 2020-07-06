import {
  Root,
  Container,
  Wrapper,
  Stars,
  Box,
  BoxWrapper,
  Arrow,
  Image
} from './styles'
import { linkResolver } from '../../lib/helpers'
import { Link } from '../../lib/routes'

export default ({ primary: { link, image } }) => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Stars src="/static/img/stars.svg" />
          <Link route={link.url} passHref>
            <Box>
              <BoxWrapper>
                {link.title}
                <Arrow src="/static/img/arrow-right.svg" />
              </BoxWrapper>
            </Box>
          </Link>
          <Image src={image.mediaItemUrl} />
        </Wrapper>
      </Container>
    </Root>
  )
}
