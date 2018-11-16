import { Button } from './styles'

export default ({ children, secondary = false, ...other }) => {
  return (
    <Button secondary={secondary} {...other}>
      {children}
    </Button>
  )
}
