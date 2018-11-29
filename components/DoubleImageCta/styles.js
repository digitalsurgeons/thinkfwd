import styled from 'styled-components'
import { colors, fonts } from '../../lib/settings'

export const Wrapper = styled.div({
  display: 'flex'
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
  bottom: 30,
  lineHeight: '48px',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'flex-end',
  zIndex: 1
})

export const Arrow = styled.img({
  marginBottom: 10
})
