import styled from 'styled-components'
import { screens, fonts } from '../../lib/settings'

export const Container = styled.header({
  padding: '56px 0 40px',
  maxWidth: screens.desktop,
  margin: '0 auto'
})

export const Title = styled.h2({
  fontSize: '24px',
  color: '#000000',
  fontWeight: 600,
  marginBottom: '8px',
  fontFamily: fonts.secondary
})

export const Headline = styled.h2({
  fontSize: '64px',
  color: '#000000',
  lineHeight: '80px',
  fontWeight: 600,
  fontFamily: fonts.secondary
})
