import {
  Wrapper,
  Heading,
  HeadingText,
  Stars,
  FlyingComet,
  Subheading
} from './styles'
import { Container } from '../../lib/helpers'

export default ({ primary: { heading, subheading } }) => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <HeadingText>{heading[0].text}</HeadingText>
          <Stars src="/static/img/stars-pink.svg" />
        </Heading>
        <Subheading>{subheading[0].text}</Subheading>
      </Wrapper>
    </Container>
  )
}
