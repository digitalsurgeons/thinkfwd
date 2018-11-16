import styled from 'styled-components'
import { colors, fonts, breakpoints } from '../../lib/settings'

export const Root = styled.nav({
  backgroundColor: colors.offBlack,
  width: '100%',
  margin: '150px 0 0',
  paddingBottom: '140px'
})

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: `${breakpoints[3]}px`,
  position: 'relative',
  overflow: 'visible',
  margin: '0 auto'
})

export const Image = styled.img({
  margin: '-150px 0 0 -150px'
})

export const Body = styled.div({
  maxWidth: '440px',
  width: '100%',
  paddingTop: '90px'
})

export const Headline = styled.h2(props => ({
  fontSize: '36px',
  color: colors.white,
  fontFamily: fonts.secondary,
  letterSpacing: 0,
  fontWeight: 600,
  lineHeight: '56px',
  marginBottom: '24px'
}))

export const Description = styled.div({
  color: colors.white,
  fontFamily: fonts.secondary,
  fontSize: '20px',
  p: {
    marginBottom: '40px'
  },
  ul: {
    listStyle: 'none',
    marginLeft: '22px',
    marginBottom: '40px'
  },
  li: {
    display: 'flex',
    marginBottom: '26px'
  },
  'li::before': {
    content: "'\\2022'",
    color: colors.yellow,
    display: 'inline-block',
    width: '22px',
    marginLeft: '-22px'
  }
})
