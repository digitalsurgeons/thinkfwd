import styled from '@emotion/styled'
import { fonts, colors } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  maxWidth: 727,
  margin: '0 auto 140px'
})

export const Heading = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: 40,
  fontWeight: 600,
  color: colors.black,
  lineHeight: '64px',
  marginBottom: 56,
  [mq[2]]: {
    fontSize: 64,
    lineHeight: '88px',
    marginBottom: 140
  }
})

export const Subheading = styled.h3({
  fontSize: 20,
  color: colors.black,
  lineHeight: '40px',
  opacity: 0.6,
  [mq[2]]: {
    fontSize: 32,
    lineHeight: '56px'
  }
})
