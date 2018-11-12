import { Link } from '../../routes'
import { Root, Container, LogoLink, Nav, NavLink } from './styles'

export default () => {
  return (
    <Root>
      <Container>
        <Link route="/">
          <LogoLink>
            <img src="/static/img/logo.svg" />
          </LogoLink>
        </Link>
        <Nav>
          <Link route="/events" passHref>
            <NavLink>Events</NavLink>
          </Link>
          <Link route="/sprintsss" passHref>
            <NavLink>Sprints</NavLink>
          </Link>
          <Link route="/toolkits" passHref>
            <NavLink>Toolkits</NavLink>
          </Link>
          <Link route="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
          <Link route="/contact" passHref>
            <NavLink>Contact</NavLink>
          </Link>
        </Nav>
      </Container>
    </Root>
  )
}
