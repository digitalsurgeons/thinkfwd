import { Link } from '../../lib/routes'
import { stack as Menu } from 'react-burger-menu'
import { StyledLink, bmBugerStyles } from './styles'

export default ({ ...props }) => (
  <Menu isOpen={false} {...props} styles={bmBugerStyles}>
    <div>
      <Link route="/" passHref>
        <StyledLink>Home</StyledLink>
      </Link>
    </div>
    <div>
      <Link route="/events" passHref>
        <StyledLink>Events</StyledLink>
      </Link>
    </div>
    <div>
      <Link route="/sprints" passHref>
        <StyledLink>Sprints</StyledLink>
      </Link>
    </div>
    <div>
      <Link route="/toolkit" passHref>
        <StyledLink>Toolkit</StyledLink>
      </Link>
    </div>
    <div>
      <Link route="/about" passHref>
        <StyledLink>About</StyledLink>
      </Link>
    </div>
    <div>
      <Link route="/contact" passHref>
        <StyledLink>Get in touch</StyledLink>
      </Link>
    </div>
  </Menu>
)
