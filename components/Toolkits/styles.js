import styled from 'styled-components'
import { breakpoints } from '../../lib/settings'

export const Wrapper = styled.div({
  display: 'grid',
  gridColumnGap: '32px',
  gridRowGap: '32px',
  gridTemplateColumns: 'auto auto auto'
})

export const StyledLink = styled.a({
  marginBottom: '120px'
})
