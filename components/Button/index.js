import { Button } from './styles'

export default ({ children, inverse = false }) => {
  return <Button inverse={inverse}>{children}</Button>
}
