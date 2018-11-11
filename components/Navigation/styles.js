import styled from 'styled-components'
import { settings } from '../../styles'
import { isAbsolute } from 'path'

export const Root = styled.nav({
  width: '100%',
  padding: '40px 0'
})

export const Container = styled.div({
  maxWidth: settings.screens.desktop,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const LogoLink = styled.a({
  display: 'block'
})

export const Nav = styled.div({
  display: 'flex'
})

export const NavLink = styled.a({
  color: '#000',
  fontWeight: 600,
  display: 'block',
  marginRight: '56px',
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
