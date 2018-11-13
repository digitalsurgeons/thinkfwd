import styled from 'styled-components'
import settings from '../../lib/settings'

export const Root = styled.nav({
  width: '100%',
  padding: '80px 0'
})

export const Container = styled.div({
  display: 'flex',
  maxWidth: settings.screens.desktop,
  margin: '0 auto'
})

export const Body = styled.div({
  maxWidth: '640px',
  position: 'relative'
})

export const Headline = styled.h2({
  paddingTop: '140px',
  fontSize: '80px',
  marginBottom: '16px',
  fontWeight: 600,
  lineHeight: '104px'
})

export const Subheadline = styled.h3({
  fontSize: '20px',
  lineHeight: '40px'
})

export const Image = styled.img({
  height: '255px',
  width: '255px',
  marginLeft: '-150px',
  position: 'absolute'
})

export const Form = styled.form({})
