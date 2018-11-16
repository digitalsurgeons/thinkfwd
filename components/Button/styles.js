import styled from 'styled-components'
import { colors, fonts } from '../../lib/settings'

export const Button = styled.button(props => ({
  backgroundColor: props.secondary ? colors.offBlack : colors.yellow,
  color: colors.offBlack,
  fontFamily: fonts.secondary,
  border: 0,
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '800',
  letterSpacing: '1px',
  textAlign: 'center',
  padding: '20px 40px',
  display: 'inline-block',
  borderRadius: '4px',
  ':hover': {},
  ':active': {}
}))
