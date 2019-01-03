import { RichText } from 'prismic-reactjs'
import { Container, linkResolver } from '../../lib/helpers'
import { colors } from '../../lib/settings'
import Button from '../Button'
import { Body, Description, Headline, Image, Root, Wrapper } from './styles'
import { Link } from '../../lib/routes'

export default ({
  primary: { image, headline, description, link, link_text }
}) => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Image src={image.url} />
          <Body>
            {headline && (
              <Headline
                dangerouslySetInnerHTML={highlightPrice(headline[0].text)}
              />
            )}
            {description && (
              <Description>
                {RichText.render(description, linkResolver)}
              </Description>
            )}
            {link && (
              <Link
                route={link._meta ? linkResolver(link._meta) : link.url}
                passHref>
                <Button as="a">{link_text[0].text}</Button>
              </Link>
            )}
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
