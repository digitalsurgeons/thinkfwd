import styled from 'styled-components'
import { fonts, colors } from '../../lib/settings'

export const Wrapper = styled.div({
  maxWidth: 727,
  margin: '0 auto 140px'
})

export const Heading = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: '64px',
  color: colors.black,
  lineHeight: '88px',
  marginBottom: 140
})

export const Subheading = styled.h3({
  fontFamily: fonts.secondary,
  fontSize: '32px',
  color: colors.black,
  lineHeight: '56px',
  opacity: 0.6
})
