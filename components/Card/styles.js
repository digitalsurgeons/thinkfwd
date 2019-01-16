import styled from '@emotion/styled'
import { colors, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Root = styled.article()

export const Image = styled.img({
  objectFit: 'cover',
  objectPosition: 'center',
  height: '100%',
  height: '320px',
  width: '100%',
  minWidth: '100%',
  marginBottom: '24px',
  [mq[2]]: {
    height: '260px'
  }
})

export const Wrapper = styled.div({
  display: 'flex'
})

export const Text = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

export const Title = styled.h2({
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: fonts.secondary,
  color: '#000000',
  lineHeight: '40px'
})

export const Subtitle = styled.h3({
  fontFamily: 'Gilroy-ExtraBold',
  fontSize: '15px',
  color: colors.pink,
  letterSpacing: '5px',
  textTransform: 'uppercase',
  marginBottom: 8,
  lineHeight: '16px'
})

export const Description = styled.div({
  opacity: 0.6,
  fontSize: '16px',
  color: colors.black,
  fontWeight: 500,
  lineHeight: '32px'
})

export const DateContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: 30
})

export const Month = styled.div({
  fontFamily: fonts.secondary,
  fontSize: '16px',
  textTransform: 'uppercase',
  color: colors.pink,
  letterSpacing: '6px',
  fontWeight: 600
})

export const Date = styled.div({
  fontFamily: fonts.secondary,
  fontSize: '64px',
  color: colors.pink,
  lineHeight: '80px'
})
