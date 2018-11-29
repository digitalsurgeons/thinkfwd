import styled from 'styled-components'
import { fonts, colors } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  display: 'flex',
  padding: '100px 0',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  [mq[2]]: {
    flexDirection: 'row'
  }
})

export const Heading = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: '40px',
  color: colors.black,
  lineHeight: '64px',
  fontWeight: 600,
  marginBottom: 80,
  [mq[2]]: {
    marginBottom: 0,
    maxWidth: 572
  }
})

export const Logos = styled.div({
  width: '100%',
  [mq[2]]: {
    width: 528
  }
})

export const Row = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: 120,
  ':last-child': {
    marginBottom: 0
  }
})

export const Logo = styled.img({
  display: 'flex',
  width: '33%'
})
