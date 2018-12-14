import styled from '@emotion/styled'
import { colors, fonts, breakpoints } from '../../lib/settings'

export const Container = styled.div({
  maxWidth: `${breakpoints[4]}px`,
  margin: '135px auto 100px',
  padding: 0
})

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
})

export const ImageContainer = styled.div({
  position: 'relative',
  display: 'flex'
})

export const Image = styled.img({
  height: 300,
  maxHeight: 300,
  width: '100%',
  objectPosition: 'center',
  objectFit: 'cover',
  [`@media (min-width: ${breakpoints[2]}px)`]: {
    height: 640,
    maxHeight: 640
  }
})

export const Panel = styled.div({
  alignSelf: 'flex-end',
  backgroundColor: colors.offBlack,
  maxWidth: 1304
})

export const PanelText = styled.h2({
  fontFamily: fonts.secondary,
  padding: '50px 60px',
  fontWeight: 600,
  fontSize: 24,
  lineHeight: '36px',
  color: colors.white,
  [`@media (min-width: ${breakpoints[2]}px)`]: {
    padding: '150px 200px',
    fontSize: 36,
    lineHeight: '56px'
  }
})

export const Stars = styled.img({
  position: 'absolute',
  bottom: 50,
  right: 80,
  width: 190,
  zIndex: 2,
  display: 'none',
  [`@media (min-width: ${breakpoints[2]}px)`]: {
    display: 'block'
  }
})

export const Strip = styled.div({
  backgroundColor: colors.offBlack,
  height: 503,
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 170,
  zIndex: 1,
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  [`@media (min-width: ${breakpoints[2]}px)`]: {
    display: 'flex'
  }
})

export const StripText = styled.div({
  transform: 'rotate(-90deg)',
  transformOrigin: 'center',
  marginTop: -180,
  color: colors.white,
  fontFamily: fonts.secondary,
  fontWeight: 600,
  fontSize: '16px',
  letterSpacing: '8px'
})

export const Box = styled.a({
  width: 171,
  height: 150,
  display: 'flex',
  backgroundColor: colors.yellow,
  position: 'absolute',
  right: 20,
  zIndex: 2,
  top: -80,
  [`@media (min-width: ${breakpoints[2]}px)`]: {
    right: 170,
    top: -135,
    width: 310,
    height: 272,
    minWidth: 310,
    minHeight: 272
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
  zIndex: 1,
  [`@media (min-width: ${breakpoints[2]}px)`]: {
    padding: '30px 40px',
    fontSize: 36,
    lineHeight: '48px'
  }
})

export const Arrow = styled.img({
  marginBottom: 10
})
