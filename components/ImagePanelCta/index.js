import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  PanelText,
  Panel,
  Stars,
  Strip,
  StripText,
  BoxWrapper,
  Box,
  Arrow
} from './styles'
import { linkResolver } from '../../lib/helpers'
import { Link } from '../../lib/routes'

export default ({ primary: { link_text } }) => (
  <Container>
    <Wrapper>
      <Link passHref>
        <Box>
          <BoxWrapper>
            {link_text[0].text}
            <Arrow src="/static/img/arrow-right-black.svg" />
          </BoxWrapper>
        </Box>
      </Link>
      <ImageContainer>
        <Image src="/static/img/workshop1.jpg" />
        <Stars src="/static/img/stars-yellow.svg" />
        <Strip>
          <StripText>thinksprints</StripText>
        </Strip>
      </ImageContainer>
      <Panel>
        <PanelText>
          We’ll help you conceptualize and explore solutions for your problem.
          Wonder if this is for you? Here’s a few of the problems we’ve solved:
        </PanelText>
      </Panel>
    </Wrapper>
  </Container>
)
