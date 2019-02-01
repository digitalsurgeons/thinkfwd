import styled from '@emotion/styled'
import { colors, fonts, breakpoints } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  marginBottom: 80,
  [mq[2]]: {
    flexDirection: 'row'
  }
})

export const Aside = styled.aside({
  h3: {
    fontFamily: fonts.secondary,
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '36px',
    marginBottom: '8px'
  },
  p: {
    fontSize: '16px',
    lineHeight: '32px',
    marginBottom: '32px'
  },
  ol: {
    listStyleType: 'decimal',
    listStylePosition: 'inside',
    marginBottom: '40px'
  },
  li: {
    fontSize: '20px',
    lineHeight: '40px'
  },
  '> div': {
    [mq[2]]: {
      paddingRight: '140px'
    }
  },
  [mq[2]]: {
    width: '33.333%'
  }
})

export const Main = styled.div({
  h2: {
    fontFamily: fonts.secondary,
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '36px',
    marginBottom: '8px'
  },
  p: {
    fontSize: '20px',
    lineHeight: '40px',
    marginBottom: '40px'
  },
  ol: {
    listStyleType: 'decimal',
    listStylePosition: 'inside',
    marginBottom: '40px'
  },
  li: {
    fontSize: '20px',
    lineHeight: '40px'
  },
  iframe: {
    width: '100%',
    height: '450px',
    marginBottom: '80px'
  },
  [mq[2]]: {
    width: '66.666%'
  }
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
  paddingBottom: 10
})

export const FieldRow = styled.div({
  display: 'flex',
  input: {
    width: '50%',
    ':first-of-type': {
      marginRight: 20
    }
  }
})

export const ButtonContainer = styled.div({
  display: 'flex',
  alignItems: 'center'
})
