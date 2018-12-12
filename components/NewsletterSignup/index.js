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

export default () => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Body>
            <Image src="/static/img/triangle.svg" />
            <Headline>Like What We're Throwing Down</Headline>
            <Subheadline>
              Be the first to know when we release new tools, kits, and
              resources.
            </Subheadline>
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
