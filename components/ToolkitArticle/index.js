import { useRef, useState, useEffect } from 'react'
import Modal from 'react-responsive-modal'
import { useForm } from 'react-hubspot'
import Fade from 'react-reveal/Fade'
import { Container, linkResolver } from '../../lib/helpers'
import {
  Aside,
  Main,
  Wrapper,
  Form,
  FieldRow,
  Field,
  Label,
  Input,
  ButtonContainer
} from './styles'
import Button from '../Button'
import { colors } from '../../lib/settings'

export default ({ aside, main, downloadLink, downloadLinkText }) => {
  const formEl = useRef(null)
  const { data, isLoading, isError, handleSubmit } = useForm({
    portalId: '521132',
    formId: 'af89a86e-3c63-4999-a320-8263594d19c9'
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (data) {
      setSubmitted(true)
      const submission = JSON.parse(data.config.data)
      const email = submission.fields.find(o => o.name === 'email').value
      window.ga('send', 'event', 'Submissions', 'submit', email)
      formEl.current.reset()
    }
  }, [data])

  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Wrapper>
        {aside && (
          <Aside>
            <div dangerouslySetInnerHTML={{__html:aside}} />
            {downloadLink && (
              <Button
                as="div"
                style={{ marginBottom: 40 }}
                onClick={() => setOpen(true)}>
                {downloadLinkText ? downloadLinkText : 'Download'}
              </Button>
            )}
          </Aside>
        )}
        {main && <Main  dangerouslySetInnerHTML={{__html:main}} />}
      </Wrapper>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 396,
            height: 358
          }}>
          {submitted && (
            <Fade in={submitted}>
              <div
                style={{
                  width: '100%',
                  fontSize: 24,
                  lineHeight: '34px',
                  textAlign: 'center'
                }}>
                Thanks for your submission.
                <a
                  style={{ fontWeight: 600, color: colors.pink }}
                  href={downloadLink}
                  target="__blank">
                  <br />
                  Click here
                </a>{' '}
                to download.
              </div>
            </Fade>
          )}
          {!submitted && (
            <Form ref={formEl} onSubmit={handleSubmit}>
              <Field>
                <Label>Hi, my name is...</Label>
                <FieldRow>
                  <Input
                    name="firstname"
                    type="text"
                    placeholder="first name"
                  />
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
              {downloadLink && (
                <ButtonContainer>
                  <Button variant="secondary" type="submit">
                    <span>
                      {downloadLink ? downloadLinkText : 'Download'}
                    </span>
                  </Button>
                </ButtonContainer>
              )}
            </Form>
          )}
        </div>
      </Modal>
    </Container>
  )
}
