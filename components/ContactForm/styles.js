import styled from 'styled-components'
import { colors, fonts } from '../../lib/settings'

export const Root = styled.div({
  padding: '0 20px'
})

export const Form = styled.form({})

export const Field = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 40
})

export const Label = styled.label({
  fontFamily: fonts.secondary,
  fontSize: 24,
  color: colors.black,
  lineHeight: '36px',
  marginBottom: 15
})

export const Input = styled.input({
  border: 0,
  borderBottom: '2px solid #616161',
  color: 'rgba(0, 0, 0, 0.6)',
  fontSize: 20,
  lineHeight: '28px',
  paddingBottom: 5
})

export const FieldRow = styled.div({
  display: 'flex',
  input: {
    width: '50%',
    ':first-child': {
      marginRight: 20
    }
  }
})
