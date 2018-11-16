import styled from 'styled-components'
import { breakpoints } from '../../lib/settings'

export const Container = styled.div({
  maxWidth: `${breakpoints[3]}px`,
  margin: '0 auto',
  display: 'grid',
  gridColumnGap: '32px',
  gridRowGap: '32px',
  gridTemplateColumns: 'auto auto'
})

export const StyledLink = styled.a({
  marginBottom: '90px'
})
