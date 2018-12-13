import styled from '@emotion/styled'
import { fonts, colors } from '../../lib/settings'

export const Row = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  ':first-of-type': {
    paddingTop: 40,
    marginBottom: 80
  },
  ':last-of-type': {
    marginBottom: 64
  }
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
  fontSize: '12px',
  fontWeight: '500',
  color: colors.black,
  lineHeight: '20px'
})

export const SocialLink = styled.a({
  marginRight: '40px',
  ':last-child': {
    marginRight: 0
  }
})

export const Logos = styled.div({
  display: 'flex',
  alignItems: 'center'
})

export const MadeIn = styled.div({
  fontFamily: fonts.secondary,
  fontWeight: 600,
  marginRight: 24,
  fontSize: 14,
  color: colors.darkGray,
  lineHeight: '20px'
})
