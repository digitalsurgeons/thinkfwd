import Textfield from '../Textfield'
import Button from '../Button'
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
        <Form>
          <Textfield floatingLabelText="Name" />
          <Textfield floatingLabelText="Email" />
          <Textfield floatingLabelText="Organization" />
          <Button>Submit</Button>
        </Form>
      </Container>
    </Root>
  )
}
