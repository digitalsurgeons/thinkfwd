import styled from '@emotion/styled'
import { breakpoints, colors, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Root = styled.section({
  padding: '40px 0',
  minHeight: '439px'
})

export const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  minHeight: '439px',
  [mq[2]]: {
    margin: '0 -16px'
  }
})

export const StyledLink = styled.a({
  margin: '0 0 100px',
  width: '100%',
  [mq[2]]: {
    marginBottom: 40,
    width: '33.33%',
    maxWidth: '33.33%'
  },
  article: {
    padding: '0 16px'
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
