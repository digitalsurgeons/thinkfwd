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
  }
})
