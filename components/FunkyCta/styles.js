import styled from '@emotion/styled'
import { colors, fonts, breakpoints } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Root = styled.div({
  overflow: 'hidden'
})

export const Container = styled.div({
  maxWidth: `${breakpoints[3]}px`,
  margin: '0 auto'
})

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  [mq[2]]: {
    flexDirection: 'row'
  }
})

export const Stars = styled.img({
  marginLeft: 40,
  marginRight: 40,
  display: 'none',
  [mq[2]]: {
    display: 'block'
  }
})

export const Box = styled.a({
  cursor: 'pointer',
  width: 171,
  height: 150,
  minWidth: 171,
  minHeight: 150,
  backgroundColor: colors.offBlack,
  position: 'relative',
  [mq[2]]: {
    width: 310,
    height: 272,
    minWidth: 310,
    minHeight: 272
  }
})

export const BoxWrapper = styled.div({
  fontFamily: fonts.secondary,
  fontSize: 24,
  color: colors.yellow,
  padding: 20,
  bottom: 0,
  position: 'absolute',
  lineHeight: '36px',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'flex-end',
  zIndex: 1,
  [mq[2]]: {
    fontSize: 36,
    lineHeight: '48px',
    bottom: 30,
    padding: '0 40px'
  }
})

export const Arrow = styled.img({
  position: 'absolute',
  bottom: 24,
  width: 24,
  right: 20,
  height: 24,
  [mq[2]]: {
    bottom: 10,
    right: 40
  }
})

export const Image = styled.img({
  objectFit: 'cover',
  marginTop: -48,
  objectPosition: 'right',
  height: 300,
  [mq[2]]: {
    marginTop: 100,
    marginLeft: -30,
    flexDirection: 'row',
    height: 520
  }
})
