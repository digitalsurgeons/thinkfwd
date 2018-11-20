import { RichText } from 'prismic-reactjs'
import { Container, linkResolver } from '../../lib/helpers'
import Button from '../Button'
import { Root, Wrapper, Image, Body, Headline, Description } from './styles'
import { colors } from '../../lib/settings'

export default ({
  data: { image, headline, description, link, link_text }
}) => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Image src={image.url} />
          <Body>
            <Headline
              dangerouslySetInnerHTML={highlightPrice(headline[0].text)}
            />
            <Description>
              {RichText.render(description, linkResolver)}
            </Description>
            <Button as="a" href={link.url}>
              {link_text[0].text}
            </Button>
          </Body>
        </Wrapper>
      </Container>
    </Root>
  )
}

function highlightPrice(text) {
  return {
    __html: text.replace(
      /(\$\d*\.?\d{1,2})/g,
      `<span style="color: ${colors.yellow}">$1</span>`
    )
  }
}