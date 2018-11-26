import styled from 'styled-components'
import { breakpoints } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  minHeight: '439px',
  [mq[2]]: {
    margin: '0 -16px'
  }
})

export const StyledLink = styled.a({
  margin: '0 0 100px',
  width: '100%',
  [mq[2]]: {
    margin: '0 16px 120px',
    flex: 1,
    width: '33.333%'
  }
})
