import { useRef, useState, useEffect } from 'react'
import Select from 'react-select'
import CircularProgress from '@material-ui/core/CircularProgress'
import Fade from 'react-reveal/Fade'
import {
  Wrapper,
  Header,
  Headline,
  Title,
  Form,
  FieldRow,
  Field,
  Label,
  Input,
  Textarea,
  ButtonContainer,
  customSelectStyles
} from './styles'
import { fonts, colors } from '../../lib/settings'
import Button from '../Button'
import { useForm } from 'react-hubspot'
import { Container } from '../../lib/helpers'

export default () => {
  const formEl = useRef(null)
  const { data, isLoading, isError, handleSubmit } = useForm({
    portalId: '521132',
    formId: '8bdcce4d-c31a-413e-a968-e1423c27d655'
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (data) {
      setSubmitted(true)
      formEl.current.reset()
      let timer = setTimeout(() => {
        setSubmitted(false)
      }, 2500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [data])

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>// Join the community!</Title>
          <Headline>
            Stay in touch for future thinkfwd events and content.
          </Headline>
        </Header>
        <Form ref={formEl} onSubmit={handleSubmit}>
          <Field>
            <Label>Hi, my name is...</Label>
            <FieldRow>
              <Input name="firstname" type="text" placeholder="first name" />
              <Input name="lastname" type="text" placeholder="last name" />
            </FieldRow>
          </Field>
          <Field>
            <Label>My email is...</Label>
            <Input
              required
              name="email"
              type="email"
              placeholder="your email"
            />
          </Field>
          <ButtonContainer>
            <Button variant="secondary" type="submit">
              <span>Join</span>
            </Button>
            <Fade in={submitted}>
              <div
                style={{
                  marginLeft: '16px',
                  fontSize: '14px',
                  lineHeight: '22px',
                  flex: 1
                }}>
                Thanks for signing up! We'll be in touch with future thinkfwd
                events and content.
              </div>
            </Fade>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  )
}
