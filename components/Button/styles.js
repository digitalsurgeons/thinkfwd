import styled from '@emotion/styled'
import theme from 'styled-theming'
import { colors, fonts } from '../../lib/settings'

const buttonStyles = theme.variants('mode', 'variant', {
  default: {
    light: {
      backgroundColor: colors.yellow,
      color: colors.black,
      borderColor: colors.yellow
    }
  },
  secondary: {
    light: {
      backgroundColor: colors.pink,
      color: colors.white,
      borderColor: colors.pink
    }
  },
  tertiary: {
    light: {
      backgroundColor: colors.turquoise,
      color: colors.black,
      borderColor: colors.turquoise
    }
  },
  outline: {
    light: {
      backgroundColor: 'transparent',
      color: colors.pink,
      borderColor: colors.gray
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
    fontWeight: '600',
    minWidth: 120,
    justifyContent: 'center',
    letterSpacing: '1px',
    textAlign: 'center',
    padding: '16px 24px',
    display: 'inline-flex',
    alignItems: 'center',
    outline: 'none'
  },
  buttonStyles
)
