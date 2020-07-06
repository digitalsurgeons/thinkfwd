import {
  Wrapper,
  Heading,
  HeadingText,
  Stars,
  Subheading
} from './styles'
import Button from '../Button'
import { Container } from '../../lib/helpers'
import { Link } from '../../lib/routes'

export default ({ primary: { heading, subheading } }) => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <HeadingText>{heading}</HeadingText>
          <Stars src="/static/img/stars-pink.svg" />
        </Heading>
        <Subheading>{subheading}</Subheading>
        <Link route="/contact" passHref>
          <Button as="a">Join the Community!</Button>
        </Link>
      </Wrapper>
    </Container>
  )
}
