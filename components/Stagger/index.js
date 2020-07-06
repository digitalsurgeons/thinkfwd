import { Container } from '../../lib/helpers'
import { colors } from '../../lib/settings'
import Button from '../Button'
import { Body, Description, Headline, Image, Root, Wrapper } from './styles'
import { Link } from '../../lib/routes'

export default ({
  primary: { image, headline, description, link, }
}) => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Image src={image.mediaItemUrl} />
          <Body>
            {headline && (
              <Headline
                dangerouslySetInnerHTML={highlightPrice(headline)}
              />
            )}
            {description && (
              <Description dangerouslySetInnerHTML={{__html:description}} />
            )}
            {link && (
              <Link
                route={link.url}
                passHref>
                <Button>{link.title}</Button>
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
