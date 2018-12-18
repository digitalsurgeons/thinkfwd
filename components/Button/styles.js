import styled from '@emotion/styled'
import theme from 'styled-theming'
import { colors, fonts } from '../../lib/settings'

const buttonStyles = theme.variants('mode', 'variant', {
  default: {
    light: {
      backgroundColor: 'transparent',
      color: colors.pink,
      borderColor: colors.gray
    }
  },
  primary: {
    light: {
      backgroundColor: colors.green,
      color: colors.offBlack,
      borderColor: colors.green
    }
  },
  outline: {
    light: {
      backgroundColor: 'transparent',
      color: colors.white,
      borderColor: colors.white
    }
  }
})

export const Container = styled.button(
  {
    backgroundColor: colors.yellow,
    color: colors.black,
    fontFamily: fonts.secondary,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    letterSpacing: '1px',
    textAlign: 'center',
    padding: '16px 24px',
    display: 'inline-flex',
    alignItems: 'center',
    outline: 'none'
  },
  buttonStyles
)
