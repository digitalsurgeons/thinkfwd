import styled from '@emotion/styled'
import { colors, fonts } from '../../lib/settings'

export const bmBugerStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '24px',
    height: '18px',
    right: '24px',
    top: '33px'
  },
  bmBurgerBars: {
    background: colors.offBlack,
    height: '2px'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    right: '24px',
    top: '20px'
  },
  bmCross: {
    background: colors.offBlack,
    width: '2px',
    height: '24px'
  },
  bmMenu: {
    background: colors.white,
    padding: '40px'
  },
  bmMorphShape: {
    fill: colors.offBlack
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export const StyledLink = styled.a({
  fontFamily: fonts.secondary,
  cursor: 'pointer',
  display: 'block',
  fontSize: '32px',
  color: colors.pink,
  lineHeight: '72px',
  fontWeight: 200
})
