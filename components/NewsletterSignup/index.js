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

export default ({ data: { headline, subheadline } }) => {
  return (
    <Root>
      <Container>
        <Body>
          <Image src="/static/img/flyingBox.svg" />
          <Headline>{headline[0].text}</Headline>
          <Subheadline>{subheadline[0].text}</Subheadline>
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
