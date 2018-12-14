import styled from '@emotion/styled'
import { colors, fonts, breakpoints } from '../../lib/settings'

export const Container = styled.div({
  maxWidth: `${breakpoints[4]}px`,
  margin: '100px auto 50px',
  padding: 0,
  [`@media (min-width: ${breakpoints[3]}px)`]: {
    margin: '100px auto 423px'
  }
})

export const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  [`@media (min-width: ${breakpoints[3]}px)`]: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  }
})

export const Image1 = styled.img({
  height: 130,
  width: '50%',
  objectFit: 'cover',
  [`@media (min-width: ${breakpoints[1]}px)`]: {
    height: 200
  },
  [`@media (min-width: ${breakpoints[2]}px)`]: {
    height: 300
  },
  [`@media (min-width: ${breakpoints[3]}px)`]: {
    height: 423,
    width: '33.33%'
  }
})

export const Image2 = styled.img({
  objectFit: 'cover',
  height: 130,
  width: '50%',
  alignSelf: 'flex-end',
  objectFit: 'cover',
  [`@media (min-width: ${breakpoints[1]}px)`]: {
    height: 200
  },
  [`@media (min-width: ${breakpoints[2]}px)`]: {
    height: 300
  },
  [`@media (min-width: ${breakpoints[3]}px)`]: {
    height: 423,
    width: '33.33%',
    position: 'relative',
    top: 423
  }
})

export const Box = styled.a({
  width: 'calc(50% - 17px)',
  height: 150,
  marginLeft: 17,
  display: 'flex',
  backgroundColor: colors.yellow,
  position: 'relative',
  [`@media (min-width: ${breakpoints[3]}px)`]: {
    marginLeft: 0,
    width: '33.33%',
    height: 272,
    minWidth: 310,
    minHeight: 272
  },
  [`@media (min-width: ${breakpoints[4]}px)`]: {
    width: 310
  }
})

export const BoxWrapper = styled.div({
  fontFamily: fonts.secondary,
  fontSize: 24,
  color: colors.offBlack,
  padding: '10px 20px',
  bottom: 30,
  lineHeight: '36px',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  width: '100%',
  zIndex: 1,
  [`@media (min-width: ${breakpoints[3]}px)`]: {
    padding: '30px 40px',
    fontSize: 36,
    lineHeight: '48px'
  }
})

export const Arrow = styled.img({
  marginBottom: 10
})
