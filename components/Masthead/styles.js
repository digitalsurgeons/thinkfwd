import styled from 'styled-components'
import { colors, fonts } from '../../lib/settings'

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  minHeight: '690px',
  marginBottom: '100px'
})

export const Image = styled.img({
  alignSelf: 'flex-end',
  objectFit: 'cover',
  objectPosition: 'center',
  width: '85%'
})

export const Card = styled.div({
  backgroundColor: colors.white,
  width: '592px',
  height: '312px',
  position: 'absolute',
  bottom: 0,
  left: 0
})

export const CardWrapper = styled.div({
  padding: '60px 120px 60px 40px'
})

export const Title = styled.h2({
  fontFamily: fonts.secondary,
  fontWeight: 600,
  marginBottom: '8px',
  fontSize: '32px',
  color: colors.black,
  lineHeight: '48px'
})

export const Description = styled.p({
  color: colors.black,
  fontWeight: 500,
  opacity: 0.6,
  fontSize: '16px',
  lineHeight: '32px'
})
