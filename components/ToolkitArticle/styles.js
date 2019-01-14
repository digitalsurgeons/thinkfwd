import styled from '@emotion/styled'
import { fonts, breakpoints } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  marginBottom: 80,
  [mq[2]]: {
    flexDirection: 'row'
  }
})

export const Aside = styled.aside({
  h3: {
    fontFamily: fonts.secondary,
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '36px',
    marginBottom: '8px'
  },
  p: {
    fontSize: '16px',
    lineHeight: '32px',
    marginBottom: '32px'
  },
  ol: {
    listStyleType: 'decimal',
    listStylePosition: 'inside',
    marginBottom: '40px'
  },
  li: {
    fontSize: '20px',
    lineHeight: '40px'
  },
  '> div': {
    [mq[2]]: {
      paddingRight: '140px'
    }
  },
  [mq[2]]: {
    width: '33.333%'
  }
})

export const Main = styled.div({
  h2: {
    fontFamily: fonts.secondary,
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '36px',
    marginBottom: '8px'
  },
  p: {
    fontSize: '20px',
    lineHeight: '40px',
    marginBottom: '40px'
  },
  ol: {
    listStyleType: 'decimal',
    listStylePosition: 'inside',
    marginBottom: '40px'
  },
  li: {
    fontSize: '20px',
    lineHeight: '40px'
  },
  iframe: {
    width: '100%',
    height: '450px',
    marginBottom: '80px'
  },
  [mq[2]]: {
    width: '66.666%'
  }
})
