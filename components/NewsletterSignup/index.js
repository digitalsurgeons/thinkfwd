import {
  Root,
  Container,
  Body,
  Image,
  Headline,
  Subheadline,
  Form
} from './styles'

export default ({ headline, subheadline }) => {
  return (
    <Root>
      <Container>
        <Body>
          <Image src="/static/img/flyingBox.svg" />
          <Headline>{headline}</Headline>
          <Subheadline>{subheadline}</Subheadline>
        </Body>
      </Container>
    </Root>
  )
}
