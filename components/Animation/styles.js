import styled from 'styled-components'
import { mq } from '../../lib/helpers'

export const Image = styled.img({
  display: 'flex',
  margin: '0 auto 150px auto',
  width: '100%',
  [mq[2]]: {
    width: 'auto'
  }
})