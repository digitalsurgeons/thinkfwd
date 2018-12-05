import { Root, Form, Field, Label, Input, Textarea } from './styles'
import Select from 'react-select'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const options = [
  {
    value: 'Solving my business challenges',
    label: 'Solving my business challenges'
  },
  { value: 'Some other option', label: 'Some other option' },
  { value: 'Another one', label: 'Another one' }
]

const useHubspotApi = () => {
  const [data, setData] = useState()
  const [url, setUrl] = useState()
  const [event, setEvent] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    setIsError(false)
    setIsLoading(true)

    try {
      console.log('hi')
      console.log(event)
      const result = await axios({
        method: 'post',
        url,
        data: {
          fields: [
            {
              name: 'subject',
              value: event.target.subject.value
            },
            {
              name: 'firstname',
              value: event.target.firstname.value
            },
            {
              name: 'lastname',
              value: event.target.lastname.value
            },
            {
              name: 'email',
              value: event.target.email.value
            },
            {
              name: 'message',
              value: event.target.message.value
            }
          ]
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(result)
      setData(result)
    } catch (e) {
      console.log('hm', e)
      setIsError(true)
    }

    setIsLoading(false)
  }

  useEffect(
    () => {
      return () => {
        fetchData()
      }
    },
    [url, event]
  )

  const doGet = event => {
    setUrl(
      'https://api.hsforms.com/submissions/v3/integration/submit/5120491/e286d489-7558-49cb-9f14-5dc4466d90b4'
    )
    setEvent(event)
    event.preventDefault()
  }

  return { data, isLoading, isError, doGet }
}

export default () => {
  const { data, isLoading, isError, doGet } = useHubspotApi()
  console.log(data, isLoading, isError)
  return (
    <Root>
      <Form onSubmit={event => doGet(event)}>
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
