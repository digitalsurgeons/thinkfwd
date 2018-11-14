import styled from 'styled-components'
import { colors, screens } from '../../lib/settings'

export const Root = styled.nav({
  backgroundColor: colors.offBlack,
  width: '100%',
  padding: '200px 0 80px'
})

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: screens.desktop,
  margin: '0 auto'
})
