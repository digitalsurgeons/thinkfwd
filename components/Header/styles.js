import styled from '@emotion/styled'
import { breakpoints, colors, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Root = styled.header({
  padding: '30px 0',
  [mq[2]]: {
    padding: '56px 0'
  }
})

export const Title = styled.h2({
  fontSize: '24px',
  color: colors.pink,
  fontWeight: 600,
  marginBottom: '16px',
  fontFamily: fonts.secondary,
  [mq[2]]: {
    fontSize: '24px'
  }
})

export const Headline = styled.h2({
  fontSize: '32px',
  lineHeight: '40px',
  color: '#000000',
  fontWeight: 600,
  fontFamily: fonts.secondary,
  [mq[2]]: {
    fontSize: '64px',
    lineHeight: '80px'
  }
})
