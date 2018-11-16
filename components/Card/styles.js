import styled from 'styled-components'
import { fonts } from '../../lib/settings'

export const Image = styled.img({
  objectFit: 'cover',
  height: '400px',
  width: '100%',
  marginBottom: '16px'
})

export const Title = styled.h2({
  fontSize: '24px',
  fontFamily: fonts.secondary,
  color: '#000000',
  lineHeight: '40px'
})
