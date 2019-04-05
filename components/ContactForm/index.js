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

const options = [
  {
    value: 'I’m interesting in joining the community!',
    label: 'I’m interesting in joining the community!'
  },
  {
    value: 'I’m interested in hosting/sponsoring an event.',
    label: 'I’m interested in hosting/sponsoring an event.'
  },
  {
    value: "I'm interested in attending/suggesting a future event.",
    label: "I'm interested in attending/suggesting a future event."
  },
  {
    value: 'I’d like to book a thinksprint.',
    label: 'I’d like to book a thinksprint.'
  },
  {
    value: 'I’m interesting in speaking at an event.',
    label: 'I’m interesting in speaking at an event.'
  },
  { value: 'I have a press/media query.', label: 'I have a press/media query.' }
]

export default () => {
  const formEl = useRef(null)
  const { data, isLoading, isError, handleSubmit } = useForm({
    portalId: '521132',
    formId: 'f00058cd-eada-4106-8858-fd0c9882357b'
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
          <Title>// Contact</Title>
          <Headline>Have a question? We love questions!</Headline>
        </Header>
        <Form ref={formEl} onSubmit={handleSubmit}>
          <Field>
            <Label>I want to know more about...</Label>
            <Select
              instanceId="test"
              styles={customSelectStyles}
              name="subject"
              options={options}
            />
          </Field>
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
          <Field>
            <Label>How can we help you?</Label>
            <Input
              name="message"
              as="textarea"
              placeholder="Ex. I need to ship products and features faster than my team is currently able to. "
              type="text"
            />
          </Field>
          <ButtonContainer>
            <Button variant="secondary" type="submit">
              <span>Submit</span>
            </Button>
            <Fade in={submitted}>
              <div
                style={{
                  marginLeft: '16px',
                  fontSize: '14px',
                  lineHeight: '22px',
                  flex: 1
                }}>
                Thanks for reaching out! We'll get back to you shortly.
              </div>
            </Fade>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  )
}
