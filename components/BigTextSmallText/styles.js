import styled from '@emotion/styled'
import { colors, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '40px 0',
  flexDirection: 'column',
  [mq[2]]: {
    padding: '72px 0',
    flexDirection: 'row'
  }
})

export const Header = styled.header({
  display: 'flex',
  flexDirection: 'column',
  [mq[2]]: {
    marginBottom: 0,
    fontSize: '64px',
    lineHeight: '80px'
  }
})

export const Headline = styled.h2({
  fontSize: '32px',
  lineHeight: '48px',
  color: '#000000',
  fontWeight: 600,
  fontFamily: fonts.secondary,
  marginBottom: 20,
  [mq[2]]: {
    marginBottom: 0,
    fontSize: '64px',
    lineHeight: '80px'
  }
})

export const Text = styled.div({
  opacity: 0.6,
  fontSize: 20,
  lineHeight: '40px',
  p: {
    marginBottom: 40
  },
  [mq[2]]: {
    maxWidth: 518
  }
})
