import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../lib/helpers'
import Button from '../Button'
import { Root, Container, Image, Body, Headline, Description } from './styles'
import { colors } from '../../lib/settings'

export default ({ data: { image, headline, description } }) => {
  return (
    <Root>
      <Container>
        <Image src={image.url} />
        <Body>
          <Headline>{headline[0].text}</Headline>
          <Description>
            {RichText.render(description, linkResolver)}
          </Description>
        </Body>
      </Container>
    </Root>
  )
}

function highlightPrice(text) {}
