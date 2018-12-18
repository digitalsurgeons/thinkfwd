import styled from '@emotion/styled'
import { colors, fonts, gutter } from '../../lib/settings'
import { mq } from '../../lib/helpers'

export const Container = styled.div({
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '0 20px',
  position: 'relative',
  backgroundColor: colors.offBlack
})

export const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '200px 40px 80px',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  [mq[3]]: {
    padding: '80px 180px',
    flexDirection: 'row'
  }
})

export const Svg = styled.svg({
  position: 'absolute',
  top: '-50px',
  left: '-50px',
  mixBlendMode: 'hard-light'
})

export const Title = styled.h2({
  fontFamily: fonts.secondary,
  fontSize: '24px',
  textAlign: 'center',
  color: colors.white,
  lineHeight: '36px',
  fontWeight: 600,
  marginBottom: 40,
  [mq[3]]: {
    marginBottom: 0,
    textAlign: 'left',
    marginRight: '120px',
    maxWidth: '520px'
  }
})
