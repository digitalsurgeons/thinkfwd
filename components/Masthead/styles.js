import styled from '@emotion/styled'
import { colors, fonts } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column-reverse',
  position: 'relative',
  [mq[2]]: {
    marginBottom: '100px',
    minHeight: '690px',
    flexDirection: 'column',
    alignSelf: 'flex-end'
  }
})

export const Image = styled.img({
  objectFit: 'cover',
  objectPosition: 'center',
  width: '100%',
  height: 300,
  [mq[2]]: {
    width: '85%',
    height: 'initial',
    alignSelf: 'flex-end'
  }
})

export const Card = styled.div({
  backgroundColor: colors.white,
  margin: '-30px 20px 30px',
  zIndex: 1,
  bottom: 0,
  left: 0,
  [mq[2]]: {
    height: '312px',
    position: 'absolute',
    margin: 0,
    width: '592px'
  }
})

export const CardWrapper = styled.div({
  padding: '30px',
  [mq[2]]: {
    padding: '60px 120px 60px 40px'
  }
})

export const Title = styled.h2({
  fontFamily: fonts.secondary,
  fontWeight: 600,
  marginBottom: '8px',
  fontSize: '28px',
  color: colors.black,
  lineHeight: '36px',
  [mq[2]]: {
    fontSize: '32px',
    lineHeight: '48px'
  }
})

export const Description = styled.p({
  color: colors.black,
  fontWeight: 500,
  opacity: 0.6,
  fontSize: '16px',
  lineHeight: '32px'
})
