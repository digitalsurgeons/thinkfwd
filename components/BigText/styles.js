import styled from '@emotion/styled'
import { fonts, colors } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Text = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: 24,
  padding: '100px 0',
  fontWeight: 600,
  maxWidth: 727,
  margin: '0 auto',
  lineHeight: '36px',
  [mq[2]]: {
    fontSize: 40,
    lineHeight: '64px'
  }
})
