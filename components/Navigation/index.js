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
import { prefetch } from '../../lib/helpers'

export default withRouter(({ router: { asPath } }) => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Nav>
            <Link route="/events" passHref>
              <NavLink isActive={asPath.includes('events')}>Events</NavLink>
            </Link>
            <Link route="/sprints" passHref>
              <NavLink
                onMouseOver={() => prefetch('/page?slug=sprints')}
                isActive={asPath.includes('sprints')}>
                Sprints
              </NavLink>
            </Link>
          </Nav>
          <Link route="/" passHref>
            <LogoLink>
              <Logo src="/static/img/logo.svg" />
            </LogoLink>
          </Link>
          <ButtonContainer>
            <Link route="/toolkit" passHref>
              <NavLink
                onMouseOver={() => prefetch('/page?slug=toolkit')}
                isActive={asPath.includes('toolkit')}>
                Toolkit
              </NavLink>
            </Link>
            <Link route="/about" passHref>
              <NavLink isActive={asPath.includes('about')}>About</NavLink>
            </Link>
            <Link route="/contact" passHref>
              <Button as="a" variant="outline">
                Get In Touch
              </Button>
            </Link>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </Root>
  )
})
