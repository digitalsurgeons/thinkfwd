import styled from 'styled-components'
import { fonts } from '../../lib/settings'

export const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap'
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
    paddingRight: '140px'
  },
  width: '33.333%'
})

export const Main = styled.div({
  h2: {
    fontFamily: fonts.secondary,
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '48px',
    marginBottom: '16px'
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
    height: '450px'
  },
  width: '66.666%'
})
