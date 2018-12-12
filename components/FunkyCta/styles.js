import styled from '@emotion/styled'
import { colors, fonts } from '../../lib/settings'

export const Root = styled.div({
  overflow: 'hidden'
})

export const Wrapper = styled.div({
  display: 'flex'
})

export const Stars = styled.img({
  marginLeft: 40,
  marginRight: 40
})

export const Box = styled.a({
  width: 310,
  height: 272,
  minWidth: 310,
  minHeight: 272,
  backgroundColor: colors.offBlack,
  position: 'relative'
})

export const BoxWrapper = styled.div({
  fontFamily: fonts.secondary,
  fontSize: 36,
  color: colors.yellow,
  padding: '0 40px',
  position: 'absolute',
  bottom: '30px',
  lineHeight: '48px',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'flex-end',
  zIndex: 1
})

export const Arrow = styled.img({
  marginBottom: '10px'
})

export const Image = styled.img({
  marginLeft: -30,
  marginTop: 100
})
