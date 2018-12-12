import styled from '@emotion/styled'
import { breakpoints, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Root = styled.nav({
  width: '100%',
  padding: '30px 0',
  [mq[2]]: {
    padding: '56px 0'
  }
})

export const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const LogoLink = styled.a({
  display: 'block',
  cursor: 'pointer',
  textAlign: 'center',
  width: '100%'
})

export const Logo = styled.img({
  width: 150,
  [mq[2]]: {
    width: 'initial'
  }
})

export const Nav = styled.div({
  display: 'none',
  width: '100%',
  [mq[2]]: {
    display: 'flex'
  }
})

export const NavLink = styled.a(props => ({
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
    opacity: props.isActive ? 1 : 0,
    content: "''",
    bottom: '-1px',
    width: '100%',
    position: 'absolute'
  },
  ':hover::before': {
    transition: '.3s',
    opacity: 1
  }
}))

export const ButtonContainer = styled.div({
  width: '100%',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'flex-end',
  [mq[2]]: {
    display: 'flex'
  }
})
