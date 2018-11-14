import styled from 'styled-components'
import settings from '../../lib/settings'

export const Container = styled.div({
  maxWidth: settings.screens.desktop,
  margin: '0 auto',
  display: 'grid',
  gridColumnGap: '32px',
  gridRowGap: '32px',
  gridTemplateColumns: 'auto auto'
})

export const StyledLink = styled.a({
  marginBottom: '80px'
})
