import styled from '@emotion/styled'
import { colors, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '40px 0',
  flexDirection: 'column',
  [mq[2]]: {
    padding: '100px 0',
    flexDirection: 'row'
  }
})

export const Header = styled.header({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 575,
  marginBottom: 40,
  [mq[2]]: {
    marginBottom: 0
  }
})

export const Title = styled.h2({
  fontSize: '16px',
  color: colors.pink,
  fontWeight: 600,
  marginBottom: '16px',
  fontFamily: fonts.secondary,
  [mq[2]]: {
    fontSize: '24px'
  }
})

export const Headline = styled.h2({
  fontSize: '24px',
  lineHeight: '40px',
  color: '#000000',
  fontWeight: 600,
  fontFamily: fonts.secondary,
  [mq[2]]: {
    fontSize: '64px',
    lineHeight: '80px'
  }
})

export const Form = styled.form({
  width: '100%',
  [mq[2]]: {
    maxWidth: 415
  }
})

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

export const customSelectStyles = {
  placeholder: provided => ({
    ...provided,
    fontFamily: fonts.primary,
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 20,
    lineHeight: '28px',
    paddingBottom: 10
  }),
  indicatorSeparator: (provided, { isSelected, isFocused }) => ({
    display: 'none'
  }),
  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    fontFamily: fonts.primary,
    color: isSelected ? '#fff' : 'rgba(0, 0, 0, 0.6)',
    fontSize: 20,
    lineHeight: '28px',
    paddingBottom: 10,
    backgroundColor: isSelected
      ? 'rgba(25, 161, 219, 1)'
      : isFocused
      ? 'rgba(25, 161, 219, .1)'
      : '#fff'
  }),
  singleValue: provided => ({
    ...provided,
    fontFamily: fonts.primary,
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 20,
    lineHeight: '28px',
    paddingBottom: 10
  }),
  control: provided => ({
    ...provided,
    fontFamily: fonts.primary,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    borderBottom: '2px solid #616161',
    ':hover': {
      borderBottom: '2px solid #616161'
    },
    ':active': {
      boxShadow: 0
    }
  })
}
