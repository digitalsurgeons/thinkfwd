import styled from 'styled-components'
import { breakpoints } from '../../lib/settings'

export const Wrapper = styled.div({
  display: 'grid',
  gridColumnGap: '32px',
  gridRowGap: '32px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  minHeight: '439px'
})

export const StyledLink = styled.a({
  marginBottom: '120px'
})
