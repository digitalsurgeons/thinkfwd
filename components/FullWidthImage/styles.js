import styled from '@emotion/styled'
import { mq } from '../../lib/helpers'

export const Image = styled.img({
  objectFit: 'cover',
  objectPosition: 'center',
  width: '100%',
  height: 300,
  marginBottom: 40,
  [mq[2]]: {
    height: 640
  }
})
