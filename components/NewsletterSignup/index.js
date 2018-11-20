import { Container } from '../../lib/helpers'
import Button from '../Button'
import Textfield from '../Textfield'
import {
  Body,
  Form,
  Headline,
  Image,
  Root,
  Subheadline,
  Wrapper
} from './styles'

export default ({ data: { headline, subheadline } }) => {
  return (
    <Root>
      <Container>
        <Wrapper>
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
        </Wrapper>
      </Container>
    </Root>
  )
}
