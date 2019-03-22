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

export default () => (
  <Container>
    <Wrapper>
      <Link route="/contact" passHref>
        <Box>
          <BoxWrapper>
            Book a thinksprint
            <Arrow src="/static/img/arrow-right-black.svg" />
          </BoxWrapper>
        </Box>
      </Link>
      <ImageContainer>
        <Image src="/static/img/workshop-maz.jpg" />
        <Stars src="/static/img/stars-yellow.svg" />
        <Strip>
          <StripText>thinksprints</StripText>
        </Strip>
      </ImageContainer>
      <Panel>
        <PanelText>
          We partner with you to transform your business problem into an
          opportunity for innovation and then explore a range of market-viable
          solutions. Wonder if this is for you? Here's a few of the solutions
          we've helped manifest:
        </PanelText>
      </Panel>
    </Wrapper>
  </Container>
)
