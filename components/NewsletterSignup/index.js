import { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hubspot'
import CircularProgress from '@material-ui/core/CircularProgress'
import Fade from 'react-reveal/Fade'
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
  Wrapper,
  ButtonContainer
} from './styles'
import { colors } from '../../lib/settings'

export default ({ primary: { headline, subheadline } }) => {
  const formEl = useRef(null)
  const { data, isLoading, isError, handleSubmit } = useForm({
    portalId: '521132',
    formId: '52ac8db0-2e99-4418-a322-0222c315d8c6'
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
    <Root>
      <Container>
        <Wrapper>
          <Body>
            <Image src="/static/img/triangle.svg" />
            <Headline>{headline[0].text}</Headline>
            <Subheadline>{subheadline[0].text}</Subheadline>
          </Body>
          <Form ref={formEl} onSubmit={handleSubmit}>
            <FieldRow>
              <Textfield name="firstname" placeholder="First Name" />
              <Textfield name="lastname" placeholder="Last Name" />
            </FieldRow>
            <Textfield required type="email" name="email" placeholder="Email" />
            <Textfield name="company" placeholder="Organization" />
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
    </Root>
  )
}
