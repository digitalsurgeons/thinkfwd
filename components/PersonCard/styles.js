import styled from '@emotion/styled'
import { colors, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Root = styled.article({
  [mq[2]]: {
    maxWidth: 520
  }
})

export const Image = styled.img({
  objectFit: 'cover',
  objectPosition: 'center',
  height: 350,
  width: '100%',
  minWidth: '100%',
  [mq[2]]: {
    height: 350
  }
})

export const Wrapper = styled.div({
  display: 'flex',
  backgroundColor: colors.yellow,
  width: '85%',
  position: 'relative',
  zIndex: 1,
  marginBottom: 32,
  marginTop: -60,
  height: 116
})

export const Text = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 32px'
})

export const Title = styled.h2({
  fontSize: '24px',
  fontWeight: 600,
  fontSize: 32,
  fontFamily: fonts.secondary,
  color: colors.black,
  lineHeight: '48px'
})

export const Subtitle = styled.h3({
  fontFamily: fonts.secondary,
  fontSize: '16px',
  color: colors.offBlack,
  fontWeight: 600,
  lineHeight: '24px'
})

export const Bio = styled.div({
  fontSize: 16,
  lineHeight: '32px',
  p: {
    marginBottom: 40
  },
  [mq[2]]: {
    paddingLeft: 56
  }
})
