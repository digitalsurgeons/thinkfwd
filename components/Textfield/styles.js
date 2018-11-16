import styled from 'styled-components'
import { colors, fonts } from '../../lib/settings'

export const TextField = styled.div({
  marginBottom: '45px',
  position: 'relative'
})

export const Input = styled.input(props => ({
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '4px solid',
  borderColor: '#d8d8d8',
  color: colors.black,
  display: 'block',
  fontWeight: 600,
  fontSize: '24px',
  fontFamily: fonts.secondary,
  padding: '10px 0',
  width: '100%',
  ':focus': {
    outline: 'none'
  }
}))

export const Label = styled.label(props => ({
  color: '#4A4A4A',
  fontSize: props.shrink ? '14px' : '24px',
  pointerEvents: 'none',
  opacity: 0.6,
  fontWeight: 600,
  fontFamily: fonts.secondary,
  position: 'absolute',
  top: props.shrink ? '-15px' : '10px',
  transition: '0.2s ease all'
}))

export const Bar = styled.span(props => ({
  display: 'block',
  position: 'relative',
  width: '325px',
  ':before': {
    background: '#3FE3FA',
    bottom: 0,
    content: '""',
    height: '4px',
    left: '50%',
    position: 'absolute',
    transition: '0.2s ease all',
    width: props.focused ? '50%' : 0
  },
  ':after': {
    background: '#3FE3FA',
    bottom: 0,
    content: '""',
    height: '4px',
    position: 'absolute',
    right: '50%',
    transition: '0.2s ease all',
    width: props.focused ? '50%' : 0
  }
}))
