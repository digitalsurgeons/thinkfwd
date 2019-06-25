import { useRouter } from 'next/router'
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

export default () => {
  const router = useRouter()

  // Have to check if router exists until this issue is resolved
  // https://github.com/zeit/next.js/issues/6042
  if (!router) return null

  const { asPath } = router
  return (
    <Root>
      <Container>
        <Wrapper>
          <Link prefetch route="/" passHref>
            <LogoLink>
              <Logo src="/static/img/logo.svg" />
            </LogoLink>
          </Link>
          <Nav>
            <Link prefetch route="/events" passHref>
              <NavLink isActive={asPath && asPath.includes('events')}>
                Events
              </NavLink>
            </Link>
            <Link prefetch route="/sprints" passHref>
              <NavLink isActive={asPath && asPath.includes('sprints')}>
                Sprints
              </NavLink>
            </Link>
            <Link prefetch route="/toolkit" passHref>
              <NavLink isActive={asPath && asPath.includes('toolkit')}>
                Toolkit
              </NavLink>
            </Link>
            <Link prefetch route="/about" passHref>
              <NavLink isActive={asPath && asPath.includes('about')}>
                About
              </NavLink>
            </Link>
            <Link prefetch route="/contact" passHref>
              <Button as="a" variant="outline">
                Get in touch
              </Button>
            </Link>
          </Nav>
        </Wrapper>
      </Container>
    </Root>
  )
}
