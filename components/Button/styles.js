import styled from 'styled-components'
import { colors, fonts } from '../../lib/settings'

export const Button = styled.button(props => ({
  backgroundColor: props.secondary ? colors.white : colors.yellow,
  color: props.secondary ? colors.pink : colors.black,
  fontFamily: fonts.secondary,
  border: `1px solid`,
  borderColor: props.secondary ? colors.gray : 'transparent',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '700',
  letterSpacing: '1px',
  textAlign: 'center',
  padding: '16px 24px',
  display: 'inline-block',
  outline: 'none',
  ':hover': {},
  ':active': {}
}))
