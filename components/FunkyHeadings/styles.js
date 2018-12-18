import styled from '@emotion/styled'
import { fonts, colors } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  maxWidth: 761,
  margin: '0 auto 140px',
  [mq[2]]: {
    margin: '200px auto 140px'
  }
})

export const Heading = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: 40,
  maxWidth: 727,
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
  maxWidth: 761,
  fontSize: 20,
  color: 'rgba(0, 0, 0, 0.6)',
  lineHeight: '40px',
  position: 'relative',
  [mq[2]]: {
    fontSize: 32,
    lineHeight: '56px'
  }
})

export const FlyingBox = styled.img({
  position: 'absolute',
  top: -100,
  right: -200,
  width: 226,
  height: 257,
  display: 'none',
  [mq[2]]: {
    display: 'block'
  }
})

export const FlyingComet = styled.img({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: -300,
  width: 210,
  height: 59,
  display: 'none',
  [mq[2]]: {
    display: 'block'
  }
})
