import { Root, Form, Field, Label, Input, Textarea } from './styles'
import Select from 'react-select'
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'

const options = [
  {
    value: 'Solving my business challenges',
    label: 'Solving my business challenges'
  },
  { value: 'Some other option', label: 'Some other option' },
  { value: 'Another one', label: 'Another one' }
]

const useHubspotApi = endpoint => {
  const [data, setData] = useState()
  const [url, setUrl] = useState(endpoint)
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
  const { data, isLoading, isError, handleSubmit } = useHubspotApi(
    'https://api.hsforms.com/submissions/v3/integration/submit/5120491/e286d489-7558-49cb-9f14-5dc4466d90b4'
  )

  return (
    <Root>
      <Form onSubmit={e => handleSubmit(e)}>
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
          <Input name="message" as="textarea" type="text" />
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Root>
  )
}
