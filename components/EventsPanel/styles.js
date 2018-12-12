import styled from '@emotion/styled'
import { breakpoints, colors, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Root = styled.section({
  padding: '100px 0',
  minHeight: '439px'
})

export const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  [mq[2]]: {
    margin: '0 -16px',
    flexDirection: 'row'
  }
})

export const StyledLink = styled.a({
  margin: '0 16px 40px',
  display: 'block',
  flex: 1,
  [mq[2]]: {
    margin: '0 16px 120px',
    width: '33.333%'
  }
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
