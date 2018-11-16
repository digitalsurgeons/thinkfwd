import styled from 'styled-components'
import { breakpoints, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Container = styled.header({
  padding: '56px 0 40px',
  maxWidth: `${breakpoints[3]}px`,
  margin: '0 auto'
})

export const Title = styled.h2({
  fontSize: '16px',
  color: '#000000',
  fontWeight: 600,
  marginBottom: '8px',
  fontFamily: fonts.secondary,
  [mq[2]]: {
    fontSize: '24px'
  }
})

export const Headline = styled.h2({
  fontSize: '64px',
  color: '#000000',
  lineHeight: '80px',
  fontWeight: 600,
  fontFamily: fonts.secondary
})
