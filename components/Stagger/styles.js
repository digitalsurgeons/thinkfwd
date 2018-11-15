import styled from 'styled-components'
import { colors, screens } from '../../lib/settings'

export const Root = styled.nav({
  backgroundColor: colors.offBlack,
  width: '100%',
  margin: '150px 0'
})

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: screens.desktop,
  position: 'relative',
  overflow: 'visible',
  margin: '0 auto'
})

export const Image = styled.img({
  margin: '-150px 0 0 -150px'
})

export const Body = styled.div({
  maxWidth: '440px',
  width: '100%'
})

export const Headline = styled.h2(props => ({
  fontSize: '36px',
  color: colors.white,
  letterSpacing: 0,
  lineHeight: '56px'
}))

export const Description = styled.div`
  li {
    fontsize: 20px;
  }
`
