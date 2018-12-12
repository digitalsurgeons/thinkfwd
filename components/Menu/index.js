import { Router } from '../../lib/routes'
import { stack as Menu } from 'react-burger-menu'
import { StyledLink, bmBugerStyles } from './styles'

export default ({ ...props }) => (
  <Menu isOpen={false} {...props} styles={bmBugerStyles}>
    <StyledLink onClick={() => Router.pushRoute('/events')}>Events</StyledLink>
    <StyledLink onClick={() => Router.pushRoute('/sprints')}>
      Sprints
    </StyledLink>
    <StyledLink onClick={() => Router.pushRoute('/toolkit')}>
      Toolkit
    </StyledLink>
    <StyledLink onClick={() => Router.pushRoute('/about')}>About</StyledLink>
    <StyledLink onClick={() => Router.pushRoute('/contact')}>
      Get in touch
    </StyledLink>
  </Menu>
)
