import { Root, Field, Label, Input, Textarea } from './styles'
import Select from 'react-select'

const options = [
  {
    value: 'Solving my business challenges',
    label: 'Solving my business challenges'
  },
  { value: 'Some other option', label: 'Some other option' },
  { value: 'Another one', label: 'Another one' }
]

const endpoint =
  'https://api.hsforms.com/submissions/v3/integration/submit/62515/fcc69886-915b-4fef-b35f-27850ef461e1'

export default () => (
  <Root>
    <Field>
      <Label>I want to know more about...</Label>
      <Select name="subject" options={options} />
    </Field>
    <Field>
      <Label>Hi, my name is</Label>
      <Input name="firstname" type="text" placeholder="first name" />
      <Input name="lastname" type="text" placeholder="last name" />
    </Field>
    <Field>
      <Label>My email is</Label>
      <Input name="email" type="text" placeholder="your email" />
    </Field>
    <Field>
      <Label>How can we help you?</Label>
      <Input name="message" as="textarea" type="text" placeholder="ex" />
    </Field>
  </Root>
)
