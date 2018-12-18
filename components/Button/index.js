import Color from 'color'
import Ripples from 'react-ripples'
import { colors } from '../../lib/settings'
import { Container } from './styles'

const Button = ({ children, secondary = false, ...other }) => {
  const primaryRippleColor = Color(colors.black)
    .fade(0.9)
    .string()
  const secondaryRippleColor = Color(colors.pink)
    .fade(0.9)
    .string()

  return (
    <Ripples color={secondary ? secondaryRippleColor : primaryRippleColor}>
      <Container secondary={secondary} {...other}>
        {children}
      </Container>
    </Ripples>
  )
}

Button.defaultProps = {
  variant: 'default'
}

export default Button
