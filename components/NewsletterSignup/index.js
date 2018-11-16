import Textfield from '../Textfield'
import Button from '../Button'
import { Container } from '../../lib/helpers'
import {
  Root,
  Wrapper,
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
