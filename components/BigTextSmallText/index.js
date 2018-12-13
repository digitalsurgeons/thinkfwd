import { Wrapper, Header, Headline, Text } from './styles'
import { Container } from '../../lib/helpers'

export default () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Headline>
            About
            <br />
            thinkfwd.
          </Headline>
        </Header>
        <Text>
          <p>
            The one thing artificial intelligence will not replace in the next
            100 years is people’s ability to apply critical thinking and
            collaboration. Soft skills are really the hardest skills we need to
            achieve.
          </p>
          <p>
            thinkfwd was founded by a group of creative entrepreneurs with a
            vision to harness these skills and amply them through curiosity and
            creative thinking to change the planet for the better.{' '}
          </p>
        </Text>
      </Wrapper>
    </Container>
  )
}
