import styled from '@emotion/styled'
import { screens, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Root = styled.div({
  width: '100%',
  padding: '40px 0 80px',
  [mq[2]]: {
    padding: '250px 0 80px'
  }
})

export const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  [mq[2]]: {
    flexDirection: 'row'
  }
})

export const Body = styled.div({
  position: 'relative',
  [mq[2]]: {
    maxWidth: '640px'
  }
})

export const Form = styled.form({
  width: '100%',
  [mq[2]]: {
    maxWidth: '465px'
  }
})

export const Headline = styled.h2({
  fontSize: '40px',
  fontFamily: fonts.secondary,
  fontWeight: 600,
  lineHeight: '60px',
  [mq[2]]: {
    fontSize: 64,
    marginBottom: 16,
    lineHeight: '88px'
  }
})

export const Subheadline = styled.h3({
  fontSize: 20,
  lineHeight: '40px',
  fontFamily: fonts.secondary,
  marginBottom: 40,
  [mq[2]]: {
    marginBottom: 0
  }
})

export const Image = styled.img({
  height: 84,
  width: 457,
  top: '-150px',
  marginLeft: '-125px',
  position: 'absolute',
  display: 'none',
  [mq[2]]: {
    display: 'block'
  }
})
