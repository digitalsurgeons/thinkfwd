import styled from '@emotion/styled'
import { fonts, colors } from '../../lib/settings'

export const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  padding: '60px 0'
})

export const LogoLink = styled.a({
  display: 'block',
  cursor: 'pointer',
  flex: 1
})

export const Logo = styled.img({
  width: '150px'
})

export const Social = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end'
})

export const Copyright = styled.div({
  fontFamily: fonts.secondary,
  fontSize: '14px',
  fontWeight: '600',
  color: colors.black,
  lineHeight: '20px',
  flex: 1,
  textAlign: 'center'
})

export const SocialLink = styled.a({
  marginRight: '40px',
  ':last-child': {
    marginRight: 0
  }
})
