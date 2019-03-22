import { withRouter } from 'next/router'
import { Container } from '../../lib/helpers'
import { Link } from '../../lib/routes'
import Button from '../Button'
import {
  ButtonContainer,
  LogoLink,
  Nav,
  NavLink,
  Root,
  Logo,
  Wrapper
} from './styles'

export default withRouter(({ router: { asPath } }) => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Nav>
            <Link prefetch withData route="/events" passHref>
              <NavLink isActive={asPath && asPath.includes('events')}>
                Events
              </NavLink>
            </Link>
            <Link prefetch withData route="/sprints" passHref>
              <NavLink isActive={asPath && asPath.includes('sprints')}>
                Sprints
              </NavLink>
            </Link>
          </Nav>
          <Link prefetch withData route="/" passHref>
            <LogoLink>
              <Logo src="/static/img/logo.svg" />
            </LogoLink>
          </Link>
          <ButtonContainer>
            <Link prefetch withData route="/toolkit" passHref>
              <NavLink isActive={asPath && asPath.includes('toolkit')}>
                Toolkit
              </NavLink>
            </Link>
            <Link prefetch withData route="/about" passHref>
              <NavLink isActive={asPath && asPath.includes('about')}>
                About
              </NavLink>
            </Link>
            <Link prefetch withData route="/contact" passHref>
              <Button as="a" variant="outline">
                Get in touch
              </Button>
            </Link>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </Root>
  )
})
