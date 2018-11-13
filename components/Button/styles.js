import styled from 'styled-components'
import { colors } from '../../lib/settings'

export const Button = styled.button(props => ({
  backgroundColor: props.primary ? colors.purple : colors.offBlack,
  color: colors.white,
  border: '1px solid',
  fontSize: '16px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  textAlign: 'center',
  padding: '20px 40px',
  borderRadius: '4px',
  ':hover': {},
  ':active': {}
}))
