import { RichText } from 'prismic-reactjs'
import { Container, linkResolver } from '../../lib/helpers'
import { Aside, Main, Wrapper } from './styles'

export default ({ aside, main }) => (
  <Container>
    <Wrapper>
      {aside && <Aside>{RichText.render(aside, linkResolver)}</Aside>}
      {main && <Main>{RichText.render(main, linkResolver)}</Main>}
    </Wrapper>
  </Container>
)
