import styled from 'styled-components'
import { breakpoints, fonts } from '../../lib/settings'

export const Root = styled.nav({
  width: '100%',
  padding: '40px 0'
})

export const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const LogoLink = styled.a({
  display: 'block',
  cursor: 'pointer'
})

export const Nav = styled.div({
  display: 'flex',
  width: '100%'
})

export const NavLink = styled.a({
  color: '#000',
  fontWeight: 600,
  fontFamily: fonts.secondary,
  display: 'block',
  marginRight: '40px',
  position: 'relative',
  ':last-child': {
    marginRight: 0
  },
  '::before': {
    transition: '.3s',
    backgroundColor: '#3FE3FA',
    height: '8px',
    zIndex: -1,
    opacity: 0,
    content: "''",
    bottom: '-1px',
    width: '100%',
    position: 'absolute'
  },
  ':hover::before': {
    transition: '.3s',
    opacity: 1
  }
})

export const ButtonContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end'
})
