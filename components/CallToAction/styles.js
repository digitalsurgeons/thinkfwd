import styled from '@emotion/styled'
import { colors, fonts, gutter } from '../../lib/settings'

export const Container = styled.div({
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '0 20px',
  position: 'relative',
  [`@media (min-width: ${1400 + gutter * 2}px)`]: {
    padding: 0
  }
})

export const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '80px 180px',
  backgroundColor: colors.eggplant
})

export const Svg = styled.svg({
  position: 'absolute',
  top: '-50px',
  left: '-50px',
  mixBlendMode: 'hard-light'
})

export const Title = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: '24px',
  marginRight: '120px',
  color: colors.white,
  lineHeight: '36px',
  fontWeight: 600,
  maxWidth: '520px'
})
