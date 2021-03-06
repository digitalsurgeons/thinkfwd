import styled from '@emotion/styled'
import { fonts, colors } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  maxWidth: 800,
  margin: '0 auto 140px',
  [mq[2]]: {
    margin: '180px auto'
  }
})

export const Heading = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: 40,
  fontWeight: 600,
  color: colors.black,
  lineHeight: '64px',
  marginBottom: 56,
  position: 'relative',
  [mq[2]]: {
    fontSize: 64,
    lineHeight: '88px',
    marginBottom: 140
  }
})

export const Subheading = styled.h3({
  fontSize: 20,
  color: 'rgba(0, 0, 0, 0.6)',
  lineHeight: '40px',
  position: 'relative',
  [mq[2]]: {
    fontSize: 28,
    lineHeight: '48px'
  }
})

export const FlyingBox = styled.img({
  position: 'absolute',
  top: -120,
  right: -220,
  width: 226,
  height: 257,
  display: 'none',
  [mq[2]]: {
    display: 'block'
  }
})

export const FlyingComet = styled.img({
  position: 'absolute',
  bottom: -40,
  left: -380,
  width: 302,
  height: 85,
  display: 'none',
  [mq[2]]: {
    display: 'block'
  }
})
