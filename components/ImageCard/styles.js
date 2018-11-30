import styled from 'styled-components'
import { colors, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Root = styled.article({
  [mq[2]]: {
    maxWidth: '592px'
  }
})

export const Image = styled.img({
  objectFit: 'cover',
  objectPosition: 'center',
  height: '100%',
  height: '412px',
  width: '100%',
  minWidth: '100%',
  marginBottom: '20px',
  marginTop: -60,
  [mq[2]]: {
    height: '650px'
  }
})

export const Wrapper = styled.div({
  display: 'flex',
  backgroundColor: colors.offBlack,
  width: '90%',
  position: 'relative',
  zIndex: 1
})

export const Text = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '50px'
})

export const Title = styled.h2({
  fontSize: '24px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 8,
  fontSize: 15,
  fontFamily: fonts.secondary,
  color: colors.yellow,
  lineHeight: '40px'
})

export const Subtitle = styled.h3({
  fontFamily: fonts.secondary,
  fontSize: '16px',
  color: colors.white,
  fontWeight: 600,
  lineHeight: '24px',
  [mq[2]]: {
    fontSize: '24px',
    lineHeight: '36px'
  }
})
