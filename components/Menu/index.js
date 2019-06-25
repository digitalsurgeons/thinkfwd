import { Link } from '../../lib/routes'
import { stack as Menu } from 'react-burger-menu'
import { StyledLink, bmBugerStyles } from './styles'

export default ({ ...props }) => (
  <Menu isOpen={false} {...props} styles={bmBugerStyles}>
    <div>
      <Link prefetch route="/" passHref>
        <StyledLink>Home</StyledLink>
      </Link>
    </div>
    <div>
      <Link prefetch route="/events" passHref>
        <StyledLink>Events</StyledLink>
      </Link>
    </div>
    <div>
      <Link prefetch route="/sprints" passHref>
        <StyledLink>Sprints</StyledLink>
      </Link>
    </div>
    <div>
      <Link prefetch route="/toolkit" passHref>
        <StyledLink>Toolkit</StyledLink>
      </Link>
    </div>
    <div>
      <Link prefetch route="/about" passHref>
        <StyledLink>About</StyledLink>
      </Link>
    </div>
    <div>
      <Link prefetch route="/contact" passHref>
        <StyledLink>Get in touch</StyledLink>
      </Link>
    </div>
  </Menu>
)
