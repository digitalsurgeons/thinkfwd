import { Wrapper, Header, Headline, Text } from './styles'
import { Container } from '../../lib/helpers'


export default ({ primary: { heading, description } }) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Headline>{heading}</Headline>
        </Header>
        <Text dangerouslySetInnerHTML={{__html:description}} />
      </Wrapper>
    </Container>
  )
}
