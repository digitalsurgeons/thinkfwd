import styled from '@emotion/styled'
import { fonts, colors } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  display: 'flex',
  padding: '100px 0 0',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  [mq[2]]: {
    padding: '100px 0',
    flexDirection: 'row'
  }
})

export const Heading = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: 24,
  color: colors.black,
  lineHeight: '36px',
  fontWeight: 600,
  marginBottom: 80,
  [mq[2]]: {
    fontSize: 40,
    lineHeight: '64px',
    marginBottom: 0,
    maxWidth: 572
  }
})

export const Logos = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: 60,
  ':last-child': {
    marginBottom: 0
  },
  [mq[2]]: {
    height: 366,
    width: 528
  }
})

export const LogoContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '50%',
  [mq[2]]: {
    width: '33.33%'
  }
})

export const Logo = styled.img({
  padding: '0 20px',
  marginBottom: 120,
  [mq[2]]: {
    marginBottom: 0
  }
})
