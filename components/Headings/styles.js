import styled from '@emotion/styled'
import { fonts, colors } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  margin: '80px 0 100px'
})

export const Heading = styled.h2({
  fontSize: 40,
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: fonts.secondary,
  color: colors.black,
  lineHeight: '64px',
  marginBottom: 56,
  width: '100%',
  position: 'relative',
  [mq[2]]: {
    fontSize: 56,
    lineHeight: '72px',
    marginBottom: 30
  }
})

export const HeadingText = styled.div({
  maxWidth: 900,
  fontFamily: fonts.secondary
})

export const Subheading = styled.h3({
  maxWidth: 761,
  fontSize: 20,
  color: 'rgba(0, 0, 0, 0.8)',
  lineHeight: '40px',
  marginBottom: '40px',
  position: 'relative',
  [mq[2]]: {
    fontSize: 24,
    lineHeight: '40px'
  }
})

export const Stars = styled.img({
  position: 'absolute',
  top: -40,
  right: -200,
  width: 250,
  height: 187,
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
