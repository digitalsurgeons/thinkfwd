import styled from '@emotion/styled'
import { fonts, colors } from '../../lib/settings'

export const Text = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: 40,
  color: colors.black,
  letterSpacing: '-1px',
  padding: '100px 0',
  fontWeight: 600,
  maxWidth: 727,
  margin: '0 auto',
  lineHeight: '64px'
})
