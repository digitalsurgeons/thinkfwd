import styled from '@emotion/styled'
import { mq } from '../../lib/helpers'

export const Image = styled.img({
  display: 'flex',
  margin: '40px auto 100px auto',
  width: '100%',
  [mq[2]]: {
    margin: '0 auto 150px auto',
    width: 'auto'
  }
})
