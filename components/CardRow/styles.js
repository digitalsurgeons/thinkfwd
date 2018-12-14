import styled from '@emotion/styled'
import { breakpoints, colors, fonts } from '../../lib/settings'

export const Root = styled.section({
  padding: '100px 0',
  minHeight: '439px'
})

export const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 -16px'
})

export const StyledLink = styled.a({
  margin: '0 16px',
  flex: 1,
  width: '33.333%'
})

export const Heading = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: '36px',
  color: colors.black,
  fontWeight: 600,
  textAlign: 'center',
  lineHeight: '56px',
  flex: 1,
  marginBottom: '76px'
})
