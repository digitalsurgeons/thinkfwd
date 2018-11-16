import styled from 'styled-components'
import { breakpoints, fonts } from '../../lib/settings'

export const Root = styled.nav({
  width: '100%',
  padding: '250px 0 80px'
})

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: `${breakpoints[3]}px`,
  margin: '0 auto'
})

export const Body = styled.div({
  maxWidth: '640px',
  position: 'relative'
})

export const Form = styled.form({
  maxWidth: '465px',
  width: '100%'
})

export const Headline = styled.h2({
  fontSize: '80px',
  fontFamily: fonts.secondary,
  marginBottom: '16px',
  fontWeight: 600,
  lineHeight: '104px'
})

export const Subheadline = styled.h3({
  fontSize: '20px',
  lineHeight: '40px',
  fontFamily: fonts.secondary
})

export const Image = styled.img({
  height: '255px',
  width: '255px',
  top: '-150px',
  marginLeft: '-135px',
  position: 'absolute'
})
