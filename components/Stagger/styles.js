import styled from 'styled-components'
import { colors, fonts, breakpoints } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Root = styled.div({
  backgroundColor: colors.offBlack,
  padding: '60px 0',
  width: '100%',
  margin: '40px 0 0',
  [mq[2]]: {
    padding: '0 0 140px',
    margin: '240px 0 0'
  }
})

export const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column-reverse',
  [mq[2]]: {
    flexDirection: 'row'
  }
})

export const Image = styled.img({
  margin: '0',
  maxHeight: 450,
  objectFit: 'contain',
  objectPosition: 'left',
  [mq[2]]: {
    maxHeight: 'initial',
    margin: '-150px 0 0 -150px'
  }
})

export const Body = styled.div({
  width: '100%',
  marginBottom: 40,
  [mq[2]]: {
    marginBottom: 0,
    padding: '90px 0 0',
    maxWidth: 440
  }
})

export const Headline = styled.h2(props => ({
  fontSize: '36px',
  color: colors.white,
  fontFamily: fonts.secondary,
  letterSpacing: 0,
  fontWeight: 600,
  lineHeight: '56px',
  marginBottom: 24
}))

export const Description = styled.div({
  color: colors.white,
  fontFamily: fonts.secondary,
  fontSize: '20px',
  p: {
    marginBottom: '40px'
  },
  ul: {
    listStyle: 'none',
    marginLeft: '22px',
    marginBottom: '40px'
  },
  li: {
    display: 'flex',
    marginBottom: '26px'
  },
  'li::before': {
    content: "'\\2022'",
    color: colors.yellow,
    display: 'inline-block',
    width: '22px',
    marginLeft: '-22px'
  }
})
