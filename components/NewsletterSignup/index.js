import { useForm } from 'react-hubspot'
import { useRef } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Container } from '../../lib/helpers'
import Button from '../Button'
import Textfield from '../Textfield'
import {
  Body,
  Form,
  Headline,
  Image,
  FieldRow,
  Root,
  Subheadline,
  Wrapper
} from './styles'
import { colors } from '../../lib/settings'

export default () => {
  const formEl = useRef(null)
  const { data, isLoading, isError, handleSubmit } = useForm({
    portalId: '521132',
    formId: '52ac8db0-2e99-4418-a322-0222c315d8c6'
  })
  if (data) {
    formEl.current.reset()
  }
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
          <Form ref={formEl} onSubmit={handleSubmit}>
            <FieldRow>
              <Textfield name="firstname" placeholder="First Name" />
              <Textfield name="lastname" placeholder="Last Name" />
            </FieldRow>
            <Textfield required type="email" name="email" placeholder="Email" />
            <Textfield name="company" placeholder="Organization" />
            <Button variant="secondary" type="submit">
              <span>Submit</span>
            </Button>
          </Form>
        </Wrapper>
      </Container>
    </Root>
  )
}
