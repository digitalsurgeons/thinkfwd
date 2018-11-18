import { RichText } from 'prismic-reactjs'
import { Wrapper, Aside, Main } from './styles'
import { Container, linkResolver } from '../../lib/helpers'

export default ({ aside, main }) => (
  <Container>
    <Wrapper>
      {aside && <Aside>{RichText.render(aside, linkResolver)}</Aside>}
      {main && <Main>{RichText.render(main, linkResolver)}</Main>}
    </Wrapper>
  </Container>
)
