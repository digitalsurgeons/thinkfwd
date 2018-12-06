import Select from 'react-select'
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { Root, Form, FieldRow, Field, Label, Input, Textarea } from './styles'
import Button from '../Button'

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

const useHubspotApi = ({ portalId, formId }) => {
  const [data, setData] = useState()
  const [url, setUrl] = useState(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`
  )
  const [form, setForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    setIsError(false)
    setIsLoading(true)
    try {
      const formData = new FormData(form)
      const data = {
        fields: []
      }
      for (var pair of formData.entries()) {
        data.fields.push({ name: pair[0], value: pair[1] })
      }
      const result = await axios({
        method: 'post',
        url,
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setData(result)
      setForm(false)
    } catch (e) {
      setIsError(true)
      setForm(false)
    }

    setIsLoading(false)
  }

  useEffect(
    () => {
      if (form) {
        fetchData()
      }
    },
    [form]
  )

  const handleSubmit = e => {
    e.preventDefault()
    setForm(e.target)
  }

  return { data, isLoading, isError, handleSubmit }
}

export default () => {
  const { data, isLoading, isError, handleSubmit } = useHubspotApi({
    portalId: '5120491',
    formId: 'e286d489-7558-49cb-9f14-5dc4466d90b4'
  })

  return (
    <Root>
      <Form onSubmit={e => handleSubmit(e)}>
        <Field>
          <Label>I want to know more about...</Label>
          <Select name="subject" options={options} />
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
            rows="1"
            as="textarea"
            placeholder="Ex. I need to ship products and features faster then my team is currently able to. "
            type="text"
          />
        </Field>
        <Button secondary type="submit">
          Submit
        </Button>
      </Form>
    </Root>
  )
}
