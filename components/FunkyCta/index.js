import { Root, Wrapper, Stars, Box, BoxWrapper, Arrow, Image } from './styles'
import { Container, linkResolver } from '../../lib/helpers'
import { Link } from '../../lib/routes'

export default ({ primary: { link, link_text, image } }) => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Stars src="/static/img/stars.svg" />
          <Link route={linkResolver(link._meta)} passHref>
            <Box>
              <BoxWrapper>
                {link_text[0].text}
                <Arrow src="/static/img/arrow-right.svg" />
              </BoxWrapper>
            </Box>
          </Link>
          <Image src={image.url} />
        </Wrapper>
      </Container>
    </Root>
  )
}
