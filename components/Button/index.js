import Ripples from 'react-ripples'
import Color from 'color'
import { colors } from '../../lib/settings'
import { Button } from './styles'

export default ({ children, secondary = false, ...other }) => {
  const primaryRippleColor = Color(colors.black)
    .fade(0.9)
    .string()
  const secondaryRippleColor = Color(colors.pink)
    .fade(0.9)
    .string()

  return (
    <Ripples color={secondary ? secondaryRippleColor : primaryRippleColor}>
      <Button secondary={secondary} {...other}>
        {children}
      </Button>
    </Ripples>
  )
}
