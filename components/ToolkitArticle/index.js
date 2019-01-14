import { RichText } from 'prismic-reactjs'
import { Container, linkResolver } from '../../lib/helpers'
import { Aside, Main, Wrapper } from './styles'
import Button from '../Button'

export default ({ aside, main, downloadLink, downloadLinkText }) => (
  <Container>
    <Wrapper>
      {aside && (
        <Aside>
          <div>{RichText.render(aside, linkResolver)}</div>
          {downloadLink && (
            <Button
              as="a"
              target="__blank"
              rel="noopener noreferrer"
              style={{ width: '100%' }}
              href={downloadLink.url}>
              {downloadLinkText ? downloadLinkText[0].text : 'Download'}
            </Button>
          )}
        </Aside>
      )}
      {main && <Main>{RichText.render(main, linkResolver)}</Main>}
    </Wrapper>
  </Container>
)
