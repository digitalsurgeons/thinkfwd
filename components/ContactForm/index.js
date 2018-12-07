import Select from 'react-select'
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
    value: 'I’m interesting in attending an event.',
    label: 'I’m interesting in attending an event.'
  },
  {
    value: 'I’d like to book a thinksprint.',
    label: 'I’d like to book a thinksprint.'
  },
  { value: 'I have a press/media query.', label: 'I have a press/media query.' }
]

export default () => {
  const { data, isLoading, isError, handleSubmit } = useForm({
    portalId: '5120491',
    formId: 'e286d489-7558-49cb-9f14-5dc4466d90b4'
  })

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>// Contact</Title>
          <Headline>Got a question? We love questions!</Headline>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Field>
            <Label>I want to know more about...</Label>
            <Select
              styles={customSelectStyles}
              name="subject"
              options={options}
            />
          </Field>
          <Field>
            <Label>Hi, my name is</Label>
            <FieldRow>
              <Input name="firstname" type="text" placeholder="first name" />
              <Input name="lastname" type="text" placeholder="last name" />
            </FieldRow>
          </Field>
          <Field>
            <Label>My email is</Label>
            <Input name="email" type="text" placeholder="your email" />
          </Field>
          <Field>
            <Label>How can we help you?</Label>
            <Input
              name="message"
              as="textarea"
              placeholder="Ex. I need to ship products and features faster then my team is currently able to. "
              type="text"
            />
          </Field>
          <Button secondary type="submit">
            Submit
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}
