import styled from 'styled-components'
import { screens } from '../../lib/settings'

export const Root = styled.nav({
  width: '100%',
  padding: '200px 0 80px'
})

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: screens.desktop,
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
  top: '-150px',
  marginLeft: '-135px',
  position: 'absolute'
})
