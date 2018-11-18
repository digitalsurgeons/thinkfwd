import styled from 'styled-components'
import { fonts } from '../../lib/settings'

export const Root = styled.article({
  height: '260px'
})

export const Image = styled.img({
  objectFit: 'cover',
  objectPosition: 'center',
  height: '100%',
  width: '100%',
  minWidth: '100%',
  marginBottom: '16px'
})

export const Title = styled.h2({
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: fonts.secondary,
  color: '#000000',
  lineHeight: '40px'
})
