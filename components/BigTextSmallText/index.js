import { Wrapper, Header, Headline, Text } from './styles'
import { Container, linkResolver } from '../../lib/helpers'
import { RichText } from 'prismic-reactjs'

export default ({ primary: { heading, description } }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Headline>{heading[0].text}</Headline>
        </Header>
        <Text>{description && RichText.render(description, linkResolver)}</Text>
      </Wrapper>
    </Container>
  )
}
